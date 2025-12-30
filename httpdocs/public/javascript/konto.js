var Ziel=0;
if(String(GetQueryString("Ziel"))!="" && String(GetQueryString("Ziel"))!="null" && String(GetQueryString("Ziel"))!="undefined") Ziel = parseInt(GetQueryString("Ziel"));
 
var KundenWunschlisteArr = new Array();	
var oneKunden = "";
 
function GetQueryString(string){
   var reg = new RegExp('(^|&)'+ string +'=([^&]*)(&|$)');
   var r = window.location.search.substr(1).match(reg);
   if(r!=null)return unescape(r[2]); return null;
}
 
function initGUI(){
	if(UserID==0) window.location.href = "/login";
	else searchKunden();
}
 
function searchKunden(){
	oneKunden = "";
	$.ajax({
		type: "POST",
		url: "/konto_1",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			UserID: UserID
		},
		success: function (response) {
			if (Array.isArray(response.results) && response.results.length > 0) {
				// 这里不要用 var 定义成局部变量
				oneKunden = {};
				var item = response.results[0];
 
				for (var key in item) {
					var val = item[key];
					if (val && typeof val === 'object' && val.type === 'Buffer' && Array.isArray(val.data)) {
						oneKunden[key] = val.data[0] ? 1 : 0;
					} else if (key.includes("Datum")) {
						if (val === null || val === undefined) {
							oneKunden[key] = "";
						} else {
							try {
								oneKunden[key] = val.toString().substring(0, 10);
							} catch (e) {
								oneKunden[key] = "";
							}
						}
					} else {
						if (typeof val === "string") {
							oneKunden[key] = unescape(val);
						} else {
							oneKunden[key] = val;
						}
					}
				}
				showKunden();
			}
		},
		error: function (err) {
			console.error(err);
		}
	});
}
 
function showKunden(){
	var UsernameDiv = "";
	if(String(oneKunden.KundenString12)!="" && String(oneKunden.KundenString13)!=""){ UsernameDiv = unescape(oneKunden.KundenString12)+" "+unescape(oneKunden.KundenString13); }
	else if(unescape(oneKunden.KundenString10)!=""){ UsernameDiv = unescape(oneKunden.KundenString10); }
	
	document.getElementById("UsernameDiv").innerHTML = UsernameDiv;		
	document.getElementById("EmailDiv").innerHTML = unescape(oneKunden.KundenString11);
 
 
	document.getElementById("KundenString12_Input").value = unescape(oneKunden.KundenString12);
	document.getElementById("KundenString13_Input").value = unescape(oneKunden.KundenString13);
	document.getElementById("KundenString11_Input").value = unescape(oneKunden.KundenString11);
	document.getElementById("KundenString21_Input").value = unescape(oneKunden.KundenString21);
 
	//searchAboNewsletter();
	searchKundenWunschliste();
	searchKundenShipping();
	searchKundenBilling();
 
	searchBestellungliste();
 
	if(Ziel==1){
		document.getElementById("dashboard-tab").setAttribute("class","nav-link");
		document.getElementById("dashboard").setAttribute("class","tab-pane fade");
		document.getElementById("wishlist-tab").setAttribute("class","nav-link active");
		document.getElementById("wishlist").setAttribute("class","tab-pane fade show active");
	}else if(Ziel==2){
		document.getElementById("dashboard-tab").setAttribute("class","nav-link");
		document.getElementById("dashboard").setAttribute("class","tab-pane fade");
		document.getElementById("order-tab").setAttribute("class","nav-link active");
		document.getElementById("order").setAttribute("class","tab-pane fade show active");
	}
}
 
var BestellungArr = new Array();
var BillingAdresseArr = new Array();
var ShippingAdresseArr = new Array();
var ArtikelArr = new Array();
var BetragArr = new Array();
 
function searchBestellungliste(){
	BestellungArr = new Array();
	$.ajax({
		type: "POST",
		url: "/konto_12",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			prIDX: oneKunden.prIDX
		},
		success: function (response) {			
			response.results.forEach(function (item) {
				var obj = {};
				for (var key in item) {
					var val = item[key];
					// 1. BIT 类型字段（Buffer）
					if (val && typeof val === 'object' && val.type === 'Buffer' && Array.isArray(val.data)) {
						obj[key] = val.data[0] ? 1 : 0;
					}
					// 2. 包含 "Datum" 的字段（日期）
					else if (key.includes("Datum")) {
						if (val === null || val === undefined) {
							obj[key] = "";
						} else {
							try {
								obj[key] = val.toString().substring(0, 10);
							} catch (e) {
								obj[key] = "";
							}
						}
					}
					// 3. 其他字段：字符串进行 unescape，其他直接赋值
					else {
						if (typeof val === "string") {
							obj[key] = unescape(val);
						} else {
							obj[key] = val;
						}
					}
				}
				BestellungArr.push(obj);
			});
			searchBestellungDetail();
			searchAllgemeinKonto();
		}
	});	
}
 
function searchAllgemeinKonto(){	
	$.ajax({
		type: "POST",
		url: "/konto_11",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			prIDX: oneKunden.prIDX
		},
		success: function (response) {
			document.getElementById("DashboardZiffer1").innerHTML = response.results[0][0].iCount;
			document.getElementById("DashboardZiffer2").innerHTML = response.results[1][0].iCount;
			document.getElementById("DashboardZiffer3").innerHTML = response.results[2][0].iCount;
		}
	});
}
 
function searchBestellungDetail(){
	BillingAdresseArr = new Array();
	ShippingAdresseArr = new Array();
	ArtikelArr = new Array();
	BetragArr = new Array();
 
	$.ajax({
		type: "POST",
		url: "/konto_10",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			prIDX: oneKunden.prIDX
		},
		success: function (response) {
			[BillingAdresseArr, ShippingAdresseArr, ArtikelArr, BetragArr] = response.results.map(arr => {
				return arr.map(item => {
					const obj = {};
					for (let key in item) {
						let val = item[key];
						if (val && typeof val === 'object' && val.type === 'Buffer' && Array.isArray(val.data)) {
							obj[key] = val.data[0] ? 1 : 0;
						} else if (key.includes("Datum")) {
							obj[key] = (val === null || val === undefined) ? "" : val.toString().substring(0, 10);
						} else {
							obj[key] = (typeof val === "string") ? unescape(val) : val;
						}
					}
					return obj;
				});
			});
			searchExternKommentar();
		}
	});
}
 
 
var KommentarExternArr = new Array();
 
function searchExternKommentar(){
   var prIDXArr = new Array();
   KommentarExternArr = new Array();
   for(var i=0; i<BestellungArr.length; i++){
	   prIDXArr.push(parseInt(BestellungArr[i].prIDX));
   }
 
   $.ajax({
		type: "POST",
		url: "/konto_9",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			prIDX: JSON.stringify(prIDXArr)
		},
		success: function (response) {
			response.results.forEach(function (item) {
				var obj = {};
				for (var key in item) {
					var val = item[key];
					// 1. BIT 类型字段（Buffer）
					if (val && typeof val === 'object' && val.type === 'Buffer' && Array.isArray(val.data)) {
						obj[key] = val.data[0] ? 1 : 0;
					}
					// 2. 包含 "Datum" 的字段（日期）
					else if (key.includes("Datum")) {
						if (val === null || val === undefined) {
							obj[key] = "";
						} else {
							try {
								obj[key] = val.toString().substring(0, 10);
							} catch (e) {
								obj[key] = "";
							}
						}
					}
					// 3. 其他字段：字符串进行 unescape，其他直接赋值
					else {
						if (typeof val === "string") {
							obj[key] = unescape(val);
						} else {
							obj[key] = val;
						}
					}
				}
				KommentarExternArr.push(obj);
			});
			showBestellungDetail();
		},
		error: function(error) {
            console.log(error);
        }
	});
}
 
function showBestellungDetail(){	
	var txt = "";
	var firstElem = true;
	for(var i=0; i<BestellungArr.length; i++){
		txt +=  "<div class='order-box dashboard-bg-box'>"+
				"<div class='order-container'>"+
				"<div class='order-detail container' style='padding:0 5px;'>"+
				"<div class='row' style='padding:0;'>";
		txt +=  "<div class='col-xl-3 col-12' style='font-weight:bold;'><h4>";
		switch (lang) {
			case "en": txt += "Date: "; break;
			case "de": txt += "Datum: "; break;
			case "fr": txt += "Date: "; break;
			case "cn": txt += "日期："; break;
			default: txt += "Datum: "; break;
		}
		txt += formatDate(BestellungArr[i].Datum1) + "</h4></div>";
 
		txt += "<div class='col-xl-3 col-12' style='font-weight:bold;'><h4>";
		switch (lang) {
			case "en": txt += "Number: "; break;
			case "de": txt += "Nummer: "; break;
			case "fr": txt += "Numéro: "; break;
			case "cn": txt += "编号："; break;
			default: txt += "Nummer: "; break;
		}
		txt += String("B" + parseInt(parseInt(BestellungArr[i].prIDX) + 10000)) + "</h4></div>";
 
		txt += "<div class='col-xl-3 col-12' style='font-weight:bold;'><h4>";
		switch (lang) {
			case "en": txt += "Total: "; break;
			case "de": txt += "Summe: "; break;
			case "fr": txt += "Total : "; break;
			case "cn": txt += "总金额："; break;
			default: txt += "Summe: "; break;
		}
		txt += ""+FCommaEUR(BestellungArr[i].BestellungFloat5) + "&nbsp;€</h4></div>";
		
		txt += "<div class='col-xl-3 col-12' style='font-weight:bold;'><h4>";
		switch (lang) {
			case "en": txt += "Status: "; break;
			case "de": txt += "Status: "; break;
			case "fr": txt += "Status: "; break;
			case "cn": txt += "状态："; break;
			default: txt += "Status: "; break;
		}
		txt += getBestellungStatusName(BestellungArr[i].Status) + "</h4></div>";
		
		/****
		txt +=  "<div class='col-12' style='margin-bottom: 10px;'><h4>";		
		switch (lang) {
			case "en": txt += "Customer Remarks: "; break;
			case "de": txt += "Kundenbemerkungen: "; break;
			case "fr": txt += "Remarques du client: "; break;
			case "cn": txt += "客户备注: "; break;
			default: txt += "Customer Remarks: "; break;
		}
		txt +=  unescape(BestellungArr[i].BestellungString30)+"</h4></div>";
		****/
 
		txt +=  "<div class='col-lg-3 col-12' style='margin-top: 10px;'><div class='row'>";	
 
		txt +=  "<div class='col-lg-12 col-6' style='margin-bottom:5px;'><button class='btn btn-sm' "+
		"style='border: 1px solid #0dcaf0;padding: 5px 10px;color: #0dcaf0;line-height:22px;width:100%;' onclick='showRechnungPDF("+BestellungArr[i].prIDX+")'>";
		switch (lang) {
			case "en": txt += "Invoice"; break;
			case "de": txt += "Rechnung"; break;
			case "fr": txt += "Facture"; break;
			case "cn": txt += "发票"; break;
			default: txt += "Rechnung"; break;
		}
		txt += "</button></div>";
 
		txt +=  "<div class='col-lg-12 col-6' style='margin-bottom:5px;'>"+				
				"<button type='button' data-bs-toggle='collapse' data-bs-target='#collapse"+i+"' "+
				"style='border: 1px solid #6f42c1;border-radius:5px;padding: 5px 10px;color:#6f42c1;width:100%;line-height:22px;background-color:#FFF;'>";
		switch (lang) {
			case "en": txt += "Shipping Address"; break;
			case "de": txt += "Versandadresse"; break;
			case "fr": txt += "Adresse de livraison"; break;
			case "cn": txt += "收货地址"; break;
			default: txt += "Versandadresse"; break;
		}
		txt += "</button>"+
				"<div id='collapse"+i+"' class='accordion-collapse collapse' style='padding:5px;'>";
 
		for(var j=0; j<ShippingAdresseArr.length; j++){
		if(ShippingAdresseArr[j].frIDX==BestellungArr[i].prIDX){	
			txt +=  unescape(ShippingAdresseArr[j].BestellungShippingString11)+"<br/>"+
					unescape(ShippingAdresseArr[j].BestellungShippingString13)+" "+unescape(ShippingAdresseArr[j].BestellungShippingString14)+"<br/>"+
					unescape(ShippingAdresseArr[j].BestellungShippingString17)+" "+unescape(ShippingAdresseArr[j].BestellungShippingString15)+"<br/>"+
					unescape(ShippingAdresseArr[j].BestellungShippingString18)+"<br/>";
		}}
		txt +=  "</div></div>";
		txt +=  "<div class='col-lg-12 col-6' style='margin-bottom:5px;'><button class='btn btn-sm' style='border: 1px solid #343a40;border-radius:5px;padding: 5px 10px;color: #343a40;line-height:22px;width:100%;' onclick='setSupportModal("+i+")'>";
		switch (lang) {
			case "en": txt += "Support"; break;
			case "de": txt += "Support"; break;
			case "fr": txt += "Assistance"; break;
			case "cn": txt += "客服"; break;
			default: txt += "Support"; break;
		}
		txt += "</button></div>";
 
 
		if(BestellungArr[i].BestellungString18!=""){
			let trackingText = "";
			switch (lang) {
				case "en": trackingText = "Tracking"; break;
				case "de": trackingText = "Lieferverfolgung"; break;
				case "fr": trackingText = "Suivi"; break;
				case "cn": trackingText = "物流追踪"; break;
			}			
			txt +=  "<div class='col-lg-12 col-6' style='margin-bottom:5px;'><button class='btn btn-sm' "+
					"style='border: 1px solid #0da487;padding: 5px 10px;color: #0da487;line-height:22px;width:100%;' onclick='showLieferungLink(\""+BestellungArr[i].BestellungString18+"\")'>"+trackingText+"</button></div>";	
		}
 
		if(KommentarExternArr.length>0){
			for(var j=0; j<KommentarExternArr.length; j++){
			if(KommentarExternArr[j].frIDX==BestellungArr[i].prIDX){				
				txt += "<div class='col-lg-12 col-6' style='margin-bottom:5px;'><button class='btn btn-sm' " +
				"style='border: 1px solid #ffc107;border-radius:5px;padding: 5px 10px;color: #ffc107;line-height:22px;width:100%;' onclick='showKommentarExtern(" + BestellungArr[i].prIDX + ")'>";
 
			switch (lang) {
				case "en": txt += "Message"; break;
				case "de": txt += "Nachricht"; break;
				case "fr": txt += "Message"; break;
				case "cn": txt += "消息"; break;
				default: txt += "Nachricht"; break;
			}
 
			txt += "</button></div>";
			break;
			}}
		}				
		txt += "</div></div>";
 
 
		txt += "<div class='col-lg-9 col-12' style='margin-top: 10px;padding-top:10px; background-color:#EEE; border-radius:5px;'>";
		firstElem = true;
		for(var j=0; j<ArtikelArr.length; j++){
		if(ArtikelArr[j].frIDX==BestellungArr[i].prIDX){	
			var AngebotPreis = parseFloat(ArtikelArr[j].BestellungArtikelFloat1);		
			if(parseInt(ArtikelArr[j].BestellungArtikelFloat3)>0) AngebotPreis = parseFloat(ArtikelArr[j].BestellungArtikelFloat5);	
			var title = "";			
			switch (lang) {
				case "en":
					title =   unescape(ArtikelArr[j].BestellungArtikelString10);
					break;
				case "de":
					title =   unescape(ArtikelArr[j].BestellungArtikelString12);
					break;
				case "fr":
					title =   unescape(ArtikelArr[j].BestellungArtikelString13);
					break;
				case "cn":
					title =   unescape(ArtikelArr[j].BestellungArtikelString11);
					break;
				default: 
					title =  unescape(ArtikelArr[j].BestellungArtikelString10);
					break;
			}
 
			txt +=  "<div class='row' style='"+(ArtikelArr[j].BestellungArtikelBIT1==1?"color:#999;":"")+"'>";
			if(!firstElem) txt +=  "<div class='col-12'><hr/></div>"; 						
 
			txt +=  "<div class='col-4'><a href='/produkt?prIDX="+ArtikelArr[j].BestellungArtikelInt2+"' class='product-image'>"+
					"<img src='https://intranet.laaver.com/file/product/"+unescape(ArtikelArr[j].ProduktString13)+"' class='img-fluid blur-up lazyload' style='max-height:150px;padding-bottom:10px;' alt=''>"+
					"</a></div>";
 
			txt +=  "<div class='col-8' style='font-size:16px;'>";	
			txt +=  "<div style='margin-bottom:2px;font-size:16px;'>"+title+"</div>";
			txt +=  "<div style='margin-bottom:2px;font-size:14px;'>"+unescape(ArtikelArr[j].Attribute).replace(/##/ig,": ").replace(/#-#/ig,",&nbsp;&nbsp;")+"</div>";
			txt += "<div><span style='font-size:14px;'>"+ArtikelArr[j].BestellungArtikelInt4+" x </span>&nbsp;"+
				   "<span style='font-size:14px;font-weight:bold;'>"+FCommaEUR(AngebotPreis)+"&nbsp;€</span></div>";	
			txt +=  "</div></div>";
 
			firstElem = false;
		}}
		txt += "</div>";
 
		txt += "</div></div></div></div>";	
	}
	
	document.getElementById("BestellungMainDiv").innerHTML = txt;
}
 
function showKommentarExtern(prIDX){
	var txt = "";
	for(var i=0; i<KommentarExternArr.length; i++){
	if(KommentarExternArr[i].frIDX==prIDX){				
		txt += "<div style='font-weight:bold;'>" + KommentarExternArr[i].Datum + "&nbsp;&nbsp;&nbsp;";

		switch (lang) {
			case "en": txt += (String(KommentarExternArr[i].Mitarbeiter) == "null" ? "Customer" : "Staff"); break;
			case "de": txt += (String(KommentarExternArr[i].Mitarbeiter) == "null" ? "Kunden" : "Mitarbeiter"); break;
			case "fr": txt += (String(KommentarExternArr[i].Mitarbeiter) == "null" ? "Client" : "Employé"); break;
			case "cn": txt += (String(KommentarExternArr[i].Mitarbeiter) == "null" ? "客户" : "工作人员"); break;
			default: txt += (KommentarExternArr[i].Mitarbeiter == "null" ? "Kunden" : "Mitarbeiter"); break;
		}
 
		txt += "</div>" +
			   "<div style='padding:5px;background-color:#EEE;border-radius:5px;margin:5px 0 20px 0;'>" +
			   unescape(KommentarExternArr[i].Bemerkung.replace(/%0A/ig, '<br/>')) +
			   "</div>";
 
	}}
 
	document.getElementById("HinweisenModalInhalt").innerHTML = txt;
	switch (lang) {
		case "en": document.getElementById("HinweisenModalTitle").innerHTML = "Message about Order B" + parseInt(parseInt(prIDX)+10000); break;
		case "de": document.getElementById("HinweisenModalTitle").innerHTML = "Nachricht von Bestellung B" + parseInt(parseInt(prIDX)+10000); break;
		case "fr": document.getElementById("HinweisenModalTitle").innerHTML = "Message concernant la commande B" + parseInt(parseInt(prIDX)+10000); break;
		case "cn": document.getElementById("HinweisenModalTitle").innerHTML = "订单 B" + parseInt(parseInt(prIDX)+10000) + " 的消息"; break;
	}
	document.getElementById("HinweisenModalTitle").style.color = "#20c997";
	document.getElementById("HinweisenModalButton1").style.backgroundColor = "#20c997";
	document.getElementById("HinweisenModalButton2").style.backgroundColor = "#20c997";			
	$('#HinweisenModalFade').modal('show');	
}
 
function setSupportModal(idx){
	switch (lang) {
		case "en": document.getElementById("SupportModalTitle").innerHTML = formatDate(BestellungArr[idx].Datum1) + " Order B" + (parseInt(BestellungArr[idx].prIDX) + 10000); break;
		case "de": document.getElementById("SupportModalTitle").innerHTML = formatDate(BestellungArr[idx].Datum1) + " Bestellung B" + (parseInt(BestellungArr[idx].prIDX) + 10000); break;
		case "fr": document.getElementById("SupportModalTitle").innerHTML = formatDate(BestellungArr[idx].Datum1) + " Commande B" + (parseInt(BestellungArr[idx].prIDX) + 10000); break;
		case "cn": document.getElementById("SupportModalTitle").innerHTML = formatDate(BestellungArr[idx].Datum1) + " 订单 B" + (parseInt(BestellungArr[idx].prIDX) + 10000); break;
	}
 
	var txt="";
	txt += "<div><select style='width:100%;border: 1px solid #ced4da;height:35px;border-radius:5px;margin-bottom:15px;padding:0 5px;' " +
		   "id='SupportModalSel' onchange='setArtikelSupportModalDiv(this.value)'>";
 
	switch (lang) {
		case "en":
			txt += "<option value='1'>Contact seller</option>";
			txt += "<option value='2'>Return item</option>";
			break;
		case "de":
			txt += "<option value='1'>Verkäufer kontaktieren</option>";
			txt += "<option value='2'>Artikel zurücksenden</option>";
			break;
		case "fr":
			txt += "<option value='1'>Contacter le vendeur</option>";
			txt += "<option value='2'>Retourner l'article</option>";
			break;
		case "cn":
			txt += "<option value='1'>联系卖家</option>";
			txt += "<option value='2'>退货</option>";
			break;
	}
	txt += "</select>";
 
	let subjectPlaceholder = "", messagePlaceholder = "";
	switch (lang) {
		case "en": subjectPlaceholder = "Subject"; messagePlaceholder = "Write a message"; break;
		case "de": subjectPlaceholder = "Betreff"; messagePlaceholder = "Nachricht schreiben"; break;
		case "fr": subjectPlaceholder = "Sujet"; messagePlaceholder = "Écrire un message"; break;
		case "cn": subjectPlaceholder = "主题"; messagePlaceholder = "写消息"; break;
	}
	txt += "<input id='SupportModalInput' class='form-control' style='width:100%;margin-bottom:15px;' placeholder='" + subjectPlaceholder + "' />";
	txt += "<textarea id='SupportModalTextarea' class='form-control' placeholder='" + messagePlaceholder + "' style='width:100%;height:150px;margin-bottom:15px;'></textarea>";
	txt += "</div>";
 
	txt += "<div class='form-control' style='width:100%;margin-bottom:15px;display:none;' id='ArtikelSupportModalDiv'><table style='width:100%;'>";
	for (var j = 0; j < ArtikelArr.length; j++) {
		if (ArtikelArr[j].frIDX == BestellungArr[idx].prIDX) {
			txt += "<tr><td><input type='checkbox' style='width:18px;height:18px;vertical-align:top;' id='SupportModalProdukt" + ArtikelArr[j].prIDX + "' />&nbsp;</td>" +
				   "<td style='font-size:14px;vertical-align:top;'>(BA" + (parseInt(ArtikelArr[j].prIDX) + 10000) + ")&nbsp;" +
				   unescape(ArtikelArr[j].BestellungArtikelString10) + "</td></tr>";
		}
	}
	txt += "</table></div>";
 
	let sendLabel = "";
	switch (lang) {
		case "en": sendLabel = "Send"; break;
		case "de": sendLabel = "Senden"; break;
		case "fr": sendLabel = "Envoyer"; break;
		case "cn": sendLabel = "发送"; break;
	}
	txt += "<div style='margin-top:20px;'><button class='btn btn_white' style='color:#0d6efd;border-color:#0d6efd;width:100%;' onclick='sendSupportRequest(" + idx + ")'>" + sendLabel + "</button></div>";
 
 
	document.getElementById("SupportModalInhalt").innerHTML = txt;
	$('#SupportModalFade').modal('show');	
}
 
function sendSupportRequest(idx){
	$('#SupportModalFade').modal('hide');	
	var tempBetreff = String(document.getElementById("SupportModalInput").value);
	var tempInhalt = String(document.getElementById("SupportModalTextarea").value);
	if(tempBetreff=="" || tempInhalt==""){
		switch (lang) {
			case "en": alert("Please enter subject and message!"); break;
			case "de": alert("Bitte gibst Sie Betreff und Nachricht ein!"); break;
			case "fr": alert("Veuillez saisir l'objet et le message !"); break;
			case "cn": alert("请输入主题和消息！"); break;
		}
 
	}else{
		var tempArtikelText ="",iCount=1;
		for(var j=0; j<ArtikelArr.length; j++){
		if(document.getElementById("SupportModalProdukt"+ArtikelArr[j].prIDX)){	
		if(document.getElementById("SupportModalProdukt"+ArtikelArr[j].prIDX).checked){
			tempArtikelText += String(iCount+". (BA"+parseInt(parseInt(ArtikelArr[j].prIDX)+10000)+") "+unescape(ArtikelArr[j].BestellungArtikelString10)+"<br/>");
			iCount++;
		}}}
		var tempZiel = String(document.getElementById("SupportModalSel").options[document.getElementById("SupportModalSel").selectedIndex].text);
		var txt = "Begriff: "+tempZiel+"<br/>"+
				  "Betreff: "+tempBetreff+"<br/>"+
				  "Nachricht: <br/>"+tempInhalt+"<br/><br/>";
		if(tempArtikelText!="") txt += tempArtikelText+"<br/><br/>";
 
		$.ajax({
			type: "POST",
			url: "/konto_13",
			contentType: 'application/x-www-form-urlencoded',
			data: {
				prIDX: BestellungArr[idx].prIDX,
				Bemerkung: txt
			},
			success: function () {
				switch (lang) {
					case "en":
						document.getElementById("HinweisenModalTitle").innerHTML = "Your message has been sent successfully";
						document.getElementById("HinweisenModalInhalt").innerHTML = "We will take care of it as soon as possible. Thank you!";
						break;
					case "de":
						document.getElementById("HinweisenModalTitle").innerHTML = "Ihre Nachricht wurde erfolgreich gesendet";
						document.getElementById("HinweisenModalInhalt").innerHTML = "Wir werden uns schnellstmöglich darum kümmern. Danke!";
						break;
					case "fr":
						document.getElementById("HinweisenModalTitle").innerHTML = "Votre message a été envoyé avec succès";
						document.getElementById("HinweisenModalInhalt").innerHTML = "Nous nous en occuperons dans les plus brefs délais. Merci !";
						break;
					case "cn":
						document.getElementById("HinweisenModalTitle").innerHTML = "您的消息已成功发送";
						document.getElementById("HinweisenModalInhalt").innerHTML = "我们会尽快处理，谢谢！";
						break;
				}
 
				document.getElementById("HinweisenModalTitle").style.color = "#0da487";
				document.getElementById("HinweisenModalButton1").style.backgroundColor = "#0da487";
				document.getElementById("HinweisenModalButton2").style.backgroundColor = "#0da487";
				$('#HinweisenModalFade').modal('show');
 
				setTimeout(function () {
					window.location.href = "/konto?Ziel=2";
				}, 2000);
			}
		});
 
	}
}
 
function KommentarObj(prIDX,frIDX,Datum,Bemerkung,Mitarbeiter){
   this.prIDX=prIDX;
   this.frIDX=frIDX;
   this.Datum=Datum;
   this.Bemerkung=Bemerkung;
   this.Mitarbeiter=Mitarbeiter;
}
 
 
function setArtikelSupportModalDiv(value){
	if(value==2){
		document.getElementById("ArtikelSupportModalDiv").style.display = "block";
	}else{
		document.getElementById("ArtikelSupportModalDiv").style.display = "none";
	}
}
 
function showRechnungPDF(prIDX){
	window.open("/pdf_datei/Laaver_Rechnung_B"+parseInt(parseInt(prIDX)+10000)+".pdf");
}
 
function showLieferungLink(value){
	if(value!=""){
		window.open(value);
	}
}
 
function searchKundenWunschliste(){
	KundenWunschlisteArr = new Array();	
	$.ajax({
		type: "POST",
		url: "/konto_wunschliste_1",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			UserID: UserID
		},
		success: function (response) {
			response.results.forEach(function (item) {
				var obj = {};
				for (var key in item) {
					var val = item[key];
					// 1. BIT 类型字段（Buffer）
					if (val && typeof val === 'object' && val.type === 'Buffer' && Array.isArray(val.data)) {
						obj[key] = val.data[0] ? 1 : 0;
					}
					// 2. 包含 "Datum" 的字段（日期）
					else if (key.includes("Datum")) {
						if (val === null || val === undefined) {
							obj[key] = "";
						} else {
							try {
								obj[key] = val.toString().substring(0, 10);
							} catch (e) {
								obj[key] = "";
							}
						}
					}
					// 3. 其他字段：字符串进行 unescape，其他直接赋值
					else {
						if (typeof val === "string") {
							obj[key] = unescape(val);
						} else {
							obj[key] = val;
						}
					}
				}
				KundenWunschlisteArr.push(obj);
			});
			showKundenProduktListe();
		},
		error: function (response) {
			console.log(response);
		}
	});
}
 
function showKundenProduktListe(){
	var txt="";
	for(var i=0; i<KundenWunschlisteArr.length; i++){		
		var preisTXT = "<h5 class='price theme-color'>"+FCommaEUR(KundenWunschlisteArr[i].Orginalpreis)+"€</h5>";
		if(parseFloat(KundenWunschlisteArr[i].Salepreis)>0) preisTXT = "<h5 class='price theme-color'>"+FCommaEUR(KundenWunschlisteArr[i].Salepreis)+"€<del>"+FCommaEUR(KundenWunschlisteArr[i].Orginalpreis)+"€</del></h5>";
 
		txt +=  "<div class='col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6'>"+
				"<div class='product-box-3 theme-bg-white h-100'>"+
				"<div class='product-header'>"+
				"<div class='product-image'>"+
				"<a href='/produkt?prIDX="+KundenWunschlisteArr[i].prIDX+"'>"+
				"<img src='"+String("https://intranet.laaver.com/file/product/"+String(KundenWunschlisteArr[i].ProduktString13))+"'"+
				"class='img-fluid blur-up lazyload' alt=''>"+
				"</a>"+
				""+
				"<div class='product-header-top'>"+
				"<button class='btn wishlist-button close_button' onclick='deleteWunschliste("+i+")'>"+
				"<i data-feather='x'></i>"+
				"</button>"+
				"</div>"+
				"</div>"+
				"</div>"+
				""+
				"<div class='product-footer'>"+
				"<div class='product-detail'>"+
				"<a href='/produkt?prIDX="+KundenWunschlisteArr[i].prIDX+"'>"+
				"<div id='ProduktnameDiv"+i+"' style='max-width:100%;'></div>"+
				"</a>"+preisTXT+
				"<div class='add-to-cart-box mt-2' style='width:100%;max-width:500px;'>"+
	"<button type='button' class='btn theme-bg-color icon text-white fw-bold btn-md' style='width:100%;' onclick='window.location.href=\"/produkt?prIDX="+KundenWunschlisteArr[i].prIDX+"\"'><i class='fa-solid fa-magnifying-glass' style='color:#FFF;font-size: 20px;'></i>&nbsp;";
 
		switch (lang) {
			case "en": txt += "More details"; break;
			case "de": txt += "Weitere Details"; break;
			case "fr": txt += "Plus de détails"; break;
			case "cn": txt += "更多详情"; break;
		}
 
		txt +=  "</button></div>"+
				"</div>"+
				"</div>"+
				"</div>"+
				"</div>";
	}
	document.getElementById("WunschlisteDiv").innerHTML = txt;
 
	for(var i=0; i<KundenWunschlisteArr.length; i++){
		var Produktname = "";
		switch (lang) {
			case "en":
				Produktname = unescape(KundenWunschlisteArr[i].ProduktString4);
				break;
			case "de":
				Produktname = unescape(KundenWunschlisteArr[i].ProduktString2);
				break;
			case "fr":
				Produktname = unescape(KundenWunschlisteArr[i].ProduktString5);
				break;
			case "cn":
				Produktname = unescape(KundenWunschlisteArr[i].ProduktString3);
				break;
			default: 
				Produktname = unescape(KundenWunschlisteArr[i].ProduktString4);
				break;
		}
 
		var tempWidth = parseInt(document.getElementById("ProduktnameDiv"+i).scrollWidth);
		document.getElementById("ProduktnameDiv"+i).innerHTML = 
			"<h5 class='name text-title' style='height:auto;width:"+tempWidth+"px;text-transform: capitalize;-webkit-line-clamp: 1;-webkit-box-orient: vertical;display: -webkit-box;overflow:hidden;text-overflow:ellipsis;'>"+Produktname+"</h5>";
	}		
}
 
function setWunschlisteFunc(frIDX){
	for(var i=0; i<KundenWunschlisteArr.length; i++){		
		if(KundenWunschlisteArr[i].ProduktListeInt2==frIDX){
			KundenWunschlisteArr.splice(i,1);
			break;
		}
	}
	showKundenProduktListe();
}
 
function deleteWunschliste(idx){
	$.ajax({
		type: "POST",
		url: "/konto_3",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			prIDX: KundenWunschlisteArr[idx].prIDX,
			UserID: UserID
		},
		success: function (response) {
			KundenWunschlisteArr.splice(idx, 1);
			showKundenProduktListe();
		},
		error: function (err) {
			console.error(err);
		}
	});
}
 
function searchAboNewsletter(){
	if(isValidEmail(oneKunden.KundenString11)){
		$.ajax({
			type: "POST",
			url: "/konto_2",
			contentType: 'application/x-www-form-urlencoded',
			data: {
				email: oneKunden.KundenString11
			},
			success: function (response) {
				var result = parseInt(response.result);
				if (result === 1) {
					document.getElementById("AboNewsletterDiv").style.display = "block";
				}
			},
			error: function (err) {
				console.error(err);
			}
		});
	}
}
 
function changePassword(){
	var password1 = escape(document.getElementById("password1").value);
	var password2 = escape(document.getElementById("password2").value);
	var password3 = escape(document.getElementById("password3").value);
 
	var bool=true;
	if (password1 === "" || password2 === "" || password3 === "") {
		switch (lang) {
			case "en": alert("Password cannot be empty!"); break;
			case "de": alert("Passwort kann nicht leer sein!"); break;
			case "fr": alert("Le mot de passe ne peut pas être vide !"); break;
			case "cn": alert("密码不能为空！"); break;
		}
		bool = false;
	} else if (password2 !== password3) {
		switch (lang) {
			case "en": alert("Passwords do not match!"); break;
			case "de": alert("Passwort sind nicht gleich sein!"); break;
			case "fr": alert("Les mots de passe ne correspondent pas !"); break;
			case "cn": alert("两次输入的密码不一致！"); break;
		}
		bool = false;
	}
 
 
	if(bool){
		$.ajax({
			type: "POST",
			url: "/konto_5",
			contentType: 'application/x-www-form-urlencoded',
			data: {
				UserID: UserID,
				password1: password1,
				password2: password2
			},
			success: function (response) {
				var result = parseInt(response.result);
				if (result === 1) {
					switch (lang) {
						case "en": alert("Old password is incorrect!"); break;
						case "de": alert("Altes Passwort ist falsch!"); break;
						case "fr": alert("L'ancien mot de passe est incorrect !"); break;
						case "cn": alert("旧密码不正确！"); break;
					}
				} else {
					switch (lang) {
						case "en":
							document.getElementById("HinweisenModalInhalt").innerHTML = "Your password has been successfully changed!";
							document.getElementById("HinweisenModalTitle").innerHTML = "Successfully updated";
							break;
						case "de":
							document.getElementById("HinweisenModalInhalt").innerHTML = "Ihr Passwort wurde erfolgreich geändert!";
							document.getElementById("HinweisenModalTitle").innerHTML = "Erfolgreich bearbeitet";
							break;
						case "fr":
							document.getElementById("HinweisenModalInhalt").innerHTML = "Votre mot de passe a été modifié avec succès !";
							document.getElementById("HinweisenModalTitle").innerHTML = "Mise à jour réussie";
							break;
						case "cn":
							document.getElementById("HinweisenModalInhalt").innerHTML = "您的密码已成功更改！";
							document.getElementById("HinweisenModalTitle").innerHTML = "更新成功";
							break;
					}
 
					document.getElementById("HinweisenModalTitle").style.color = "#0da487";
					document.getElementById("HinweisenModalButton1").style.backgroundColor = "#0da487";
					document.getElementById("HinweisenModalButton2").style.backgroundColor = "#0da487";
					$('#HinweisenModalFade').modal('show');
					$('#editProfile').modal('hide');
					setTimeout(function () {
						window.location.reload();
					}, 3000);
				}
			},
			error: function (err) {
				console.error(err);
			}
		});
	}
}
 
 
function changeProfile(){
	var KundenString12 = escape(document.getElementById("KundenString12_Input").value);
	var KundenString13 = escape(document.getElementById("KundenString13_Input").value);
	var KundenString11 = escape(document.getElementById("KundenString11_Input").value);
	var KundenString21 = escape(document.getElementById("KundenString21_Input").value);
 
	var bool=true;
	if(!isValidEmail(KundenString11)){
		alert("Email Format ist falsch!"); bool=false;
	}
 
	if(bool){
	    $.ajax({
			type: "POST",
			url: "/konto_4",
			contentType: 'application/x-www-form-urlencoded',
			data: {
				UserID: UserID,
				KundenString11: KundenString11,
				KundenString12: KundenString12,
				KundenString13: KundenString13,
				KundenString21: KundenString21
			},
			success: function (response) {
				var result = parseInt(response.result);
				if (result === 1) {
					switch (lang) {
						case "en": alert("The email address is already taken!"); break;
						case "de": alert("Die Email Adresse ist bereits belegt!"); break;
						case "fr": alert("L'adresse e-mail est déjà utilisée !"); break;
						case "cn": alert("该邮箱地址已被占用！"); break;
					}
 
				} else {
					switch (lang) {
						case "en":
							document.getElementById("HinweisenModalInhalt").innerHTML = "Your profile has been successfully updated!";
							document.getElementById("HinweisenModalTitle").innerHTML = "Successfully updated";
							break;
						case "de":
							document.getElementById("HinweisenModalInhalt").innerHTML = "Ihr Profile wurde erfolgreich geändert!";
							document.getElementById("HinweisenModalTitle").innerHTML = "Erfolgreich bearbeitet";
							break;
						case "fr":
							document.getElementById("HinweisenModalInhalt").innerHTML = "Votre profil a été mis à jour avec succès !";
							document.getElementById("HinweisenModalTitle").innerHTML = "Mise à jour réussie";
							break;
						case "cn":
							document.getElementById("HinweisenModalInhalt").innerHTML = "您的资料已成功更新！";
							document.getElementById("HinweisenModalTitle").innerHTML = "更新成功";
							break;
					}
 
					document.getElementById("HinweisenModalTitle").style.color = "#0da487";
					document.getElementById("HinweisenModalButton1").style.backgroundColor = "#0da487";
					document.getElementById("HinweisenModalButton2").style.backgroundColor = "#0da487";
					$('#HinweisenModalFade').modal('show');
					$('#editProfile').modal('hide');
					setTimeout(function () {
						window.location.reload();
					}, 3000);
				}
			},
			error: function (err) {
				console.error(err);
			}
		});
	}
}
 
var editAdresseIDX=0;
 
function setEditAdresseIDX(idx){
	document.getElementById("editAdresseButton").setAttribute("onclick","saveAdresse("+idx+")");
	if(idx==1){
		var KundenShippingString10="",KundenShippingString11="",KundenShippingString12="",KundenShippingString13="",KundenShippingString14="",KundenShippingString15="Germany";
		if(KundenShippingArr.length>0){
			KundenShippingString10 = unescape(KundenShippingArr[0].KundenShippingString10);
			KundenShippingString11 = unescape(KundenShippingArr[0].KundenShippingString11);
			KundenShippingString12 = unescape(KundenShippingArr[0].KundenShippingString12);
			KundenShippingString13 = unescape(KundenShippingArr[0].KundenShippingString13);
			KundenShippingString14 = unescape(KundenShippingArr[0].KundenShippingString14);
			KundenShippingString15 = unescape(KundenShippingArr[0].KundenShippingString15);
		}
 
		document.getElementById("AdresseNameInput").value = KundenShippingString10;
		document.getElementById("AdressedAdresse1Input").value = KundenShippingString11;
		document.getElementById("AdressedAdresse2Input").value = KundenShippingString12;
		document.getElementById("AdressePLZInput").value = KundenShippingString13;
		document.getElementById("AdresseStadtInput").value = KundenShippingString14;
		document.getElementById("AdresseStaatInput").value = KundenShippingString15;
	}else if(idx==2){
		var KundenBillingString10="",KundenBillingString11="",KundenBillingString12="",KundenBillingString13="",KundenBillingString14="",KundenBillingString15="Germany";
		if(KundenBillingArr.length>0){
			KundenBillingString10 = unescape(KundenBillingArr[0].KundenBillingString10);
			KundenBillingString11 = unescape(KundenBillingArr[0].KundenBillingString11);
			KundenBillingString12 = unescape(KundenBillingArr[0].KundenBillingString12);
			KundenBillingString13 = unescape(KundenBillingArr[0].KundenBillingString13);
			KundenBillingString14 = unescape(KundenBillingArr[0].KundenBillingString14);
			KundenBillingString15 = unescape(KundenBillingArr[0].KundenBillingString15);
		}
 
		document.getElementById("AdresseNameInput").value = KundenBillingString10;
		document.getElementById("AdressedAdresse1Input").value = KundenBillingString11;
		document.getElementById("AdressedAdresse2Input").value = KundenBillingString12;
		document.getElementById("AdressePLZInput").value = KundenBillingString13;
		document.getElementById("AdresseStadtInput").value = KundenBillingString14;
		document.getElementById("AdresseStaatInput").value = KundenBillingString15;
	}
	$('#editAdresse').modal('show');
}
 
function saveAdresse(idx){
	var KundenAdresseTempArr = "";
 
	if (idx == 1) {
		KundenAdresseTempArr = {
			KundenShippingString10: escape(document.getElementById("AdresseNameInput").value),
			KundenShippingString11: escape(document.getElementById("AdressedAdresse1Input").value),
			KundenShippingString12: escape(document.getElementById("AdressedAdresse2Input").value),
			KundenShippingString13: escape(document.getElementById("AdressePLZInput").value),
			KundenShippingString14: escape(document.getElementById("AdresseStadtInput").value),
			KundenShippingString15: escape(document.getElementById("AdresseStaatInput").value)
		};
 
		if (KundenShippingArr.length > 0) {
			KundenShippingArr[0].KundenShippingString10 = KundenAdresseTempArr.KundenShippingString10;
			KundenShippingArr[0].KundenShippingString11 = KundenAdresseTempArr.KundenShippingString11;
			KundenShippingArr[0].KundenShippingString12 = KundenAdresseTempArr.KundenShippingString12;
			KundenShippingArr[0].KundenShippingString13 = KundenAdresseTempArr.KundenShippingString13;
			KundenShippingArr[0].KundenShippingString14 = KundenAdresseTempArr.KundenShippingString14;
			KundenShippingArr[0].KundenShippingString15 = KundenAdresseTempArr.KundenShippingString15;
		} else {
			KundenShippingArr.push(KundenAdresseTempArr);
		}
 
		showKundenShipping();
 
	} else if (idx == 2) {
		KundenAdresseTempArr = {
			KundenBillingString10: escape(document.getElementById("AdresseNameInput").value),
			KundenBillingString11: escape(document.getElementById("AdressedAdresse1Input").value),
			KundenBillingString12: escape(document.getElementById("AdressedAdresse2Input").value),
			KundenBillingString13: escape(document.getElementById("AdressePLZInput").value),
			KundenBillingString14: escape(document.getElementById("AdresseStadtInput").value),
			KundenBillingString15: escape(document.getElementById("AdresseStaatInput").value)
		};
 
		if (KundenBillingArr.length > 0) {
			KundenBillingArr[0].KundenBillingString10 = KundenAdresseTempArr.KundenBillingString10;
			KundenBillingArr[0].KundenBillingString11 = KundenAdresseTempArr.KundenBillingString11;
			KundenBillingArr[0].KundenBillingString12 = KundenAdresseTempArr.KundenBillingString12;
			KundenBillingArr[0].KundenBillingString13 = KundenAdresseTempArr.KundenBillingString13;
			KundenBillingArr[0].KundenBillingString14 = KundenAdresseTempArr.KundenBillingString14;
			KundenBillingArr[0].KundenBillingString15 = KundenAdresseTempArr.KundenBillingString15;
		} else {
			KundenBillingArr.push(KundenAdresseTempArr);
		}
 
		showKundenBilling();
	}
 
	$.ajax({
		type: "POST",
		url: "/konto_6",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			idx: idx,
			UserID: UserID,
			KundenAdresseTempArr: JSON.stringify(KundenAdresseTempArr)
		},
		cache: false,
		success: function (response) {
			switch (lang) {
				case "en":
					document.getElementById("HinweisenModalInhalt").innerHTML = "Your address has been successfully updated!";
					document.getElementById("HinweisenModalTitle").innerHTML = "Successfully updated";
					break;
				case "de":
					document.getElementById("HinweisenModalInhalt").innerHTML = "Ihr Adresse wurde erfolgreich geändert!";
					document.getElementById("HinweisenModalTitle").innerHTML = "Erfolgreich bearbeitet";
					break;
				case "fr":
					document.getElementById("HinweisenModalInhalt").innerHTML = "Votre adresse a été mise à jour avec succès !";
					document.getElementById("HinweisenModalTitle").innerHTML = "Mise à jour réussie";
					break;
				case "cn":
					document.getElementById("HinweisenModalInhalt").innerHTML = "您的地址已成功更新！";
					document.getElementById("HinweisenModalTitle").innerHTML = "更新成功";
					break;
			}
 
			document.getElementById("HinweisenModalTitle").style.color = "#0da487";
			document.getElementById("HinweisenModalButton1").style.backgroundColor = "#0da487";
			document.getElementById("HinweisenModalButton2").style.backgroundColor = "#0da487";
			$('#HinweisenModalFade').modal('show');
			$('#editAdresse').modal('hide');
		},
		error: function (response) {
			console.log(response);
		}
	});
}
 
var KundenShippingArr = new Array();
 
function searchKundenShipping(){
	KundenShippingArr = new Array();
	$.ajax({
		type: "POST",
		url: "/konto_7",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			prIDX: UserID
		},
		success: function (response) {
			if (Array.isArray(response.results)) {
				KundenShippingArr = response.results.map(function (item) {
					var obj = {};
					for (var key in item) {
						let val = item[key];
						if (val && typeof val === 'object' && val.type === 'Buffer') {
							obj[key] = val.data[0] ? 1 : 0;
						} else if (key.includes("Datum")) {
							obj[key] = val ? val.toString().substring(0, 10) : "";
						} else {
							obj[key] = (typeof val === "string") ? unescape(val) : val;
						}
					}
					return obj;
				});
				if(KundenShippingArr.length>0) showKundenShipping();
			}
		},
		error: function (err) {
			console.error(err);
		}
	});
}
 
function showKundenShipping(){
	document.getElementById("ShippingName").innerHTML = unescape(KundenShippingArr[0].KundenShippingString10);
	document.getElementById("ShippingAdresse1").innerHTML = unescape(KundenShippingArr[0].KundenShippingString11);
	document.getElementById("ShippingAdresse2").innerHTML = unescape(KundenShippingArr[0].KundenShippingString12);
	document.getElementById("ShippingPLZ").innerHTML = unescape(KundenShippingArr[0].KundenShippingString13);
	document.getElementById("ShippingStadt").innerHTML = unescape(KundenShippingArr[0].KundenShippingString14);
	document.getElementById("ShippingStaat").innerHTML = unescape(KundenShippingArr[0].KundenShippingString15);
}
 
 
var KundenBillingArr = new Array();
 
function searchKundenBilling(){
	KundenBillingArr = new Array();
	$.ajax({
		type: "POST",
		url: "/konto_8",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			prIDX: UserID
		},
		success: function (response) {
			if (Array.isArray(response.results)) {
				KundenBillingArr = response.results.map(function (item) {
					var obj = {};
					for (var key in item) {
						let val = item[key];
						if (val && typeof val === 'object' && val.type === 'Buffer') {
							obj[key] = val.data[0] ? 1 : 0;
						} else if (key.includes("Datum")) {
							obj[key] = val ? val.toString().substring(0, 10) : "";
						} else {
							obj[key] = (typeof val === "string") ? unescape(val) : val;
						}
					}
					return obj;
				});
				if(KundenBillingArr.length>0) showKundenBilling();
			}
		},
		error: function (err) {
			console.error(err);
		}
	});
}
 
function showKundenBilling(){
	document.getElementById("BillingName").innerHTML = unescape(KundenBillingArr[0].KundenBillingString10);
	document.getElementById("BillingAdresse1").innerHTML = unescape(KundenBillingArr[0].KundenBillingString11);
	document.getElementById("BillingAdresse2").innerHTML = unescape(KundenBillingArr[0].KundenBillingString12);
	document.getElementById("BillingPLZ").innerHTML = unescape(KundenBillingArr[0].KundenBillingString13);
	document.getElementById("BillingStadt").innerHTML = unescape(KundenBillingArr[0].KundenBillingString14);
	document.getElementById("BillingStaat").innerHTML = unescape(KundenBillingArr[0].KundenBillingString15);
}
 
function formatDate(inputDate) {
    var parts = inputDate.split('-');
    var formattedDate = parts[2] + '.' + parts[1] + '.' + parts[0];
    return formattedDate;
}
 
function logoutFunc(){
	window.sessionStorage.clear();
	const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookieName = cookies[i].split("=")[0].trim();
        document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
	window.location.href = "/login";
}	

function showBestellungTab(){
	document.getElementById("dashboard-tab").setAttribute("class","nav-link");
	document.getElementById("dashboard").setAttribute("class","tab-pane fade");
	document.getElementById("order-tab").setAttribute("class","nav-link active");
	document.getElementById("order").setAttribute("class","tab-pane fade show active");
}
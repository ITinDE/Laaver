
var globalKatalog = 0;
if(String(GetQueryString("katalog"))!="" && String(GetQueryString("katalog"))!="null" && String(GetQueryString("katalog"))!="undefined") globalKatalog = parseInt(GetQueryString("katalog"));

var ProduktArr = new Array(), KatalogArr = new Array(); ProduktAllArr = new Array();

function initGUI(){
	searchKatalog();
	searchProdukt();	
}


function searchKatalog(){
	KatalogArr = new Array();
	
	$.ajax({
		type: "POST",
		url: "/frontend_shop_1",
		contentType: 'application/x-www-form-urlencoded',
		async: false, 
		data: {},
		success: function (response) {
			if (response && Array.isArray(response)) {
                response.forEach(function (item) {
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
					KatalogArr.push(obj);
				});
				showKatalog();
            } else {
                console.error("response.results 不是一个数组或不存在");
            }
		}
	});
}

function showKatalog(){		
	var txt = "";
	for(var i=0; i<KatalogArr.length; i++){
		var Katalogname = "";
		
		switch (lang) {
			case "en":
				Katalogname = unescape(KatalogArr[i].ProduktKatalogString1);
				break;
			case "de":
				Katalogname = unescape(KatalogArr[i].ProduktKatalogString2);
				break;
			case "fr":
				Katalogname = unescape(KatalogArr[i].ProduktKatalogString3);
				break;
			case "cn":
				Katalogname = unescape(KatalogArr[i].ProduktKatalogString4);
				break;
			default: 
				Katalogname = unescape(KatalogArr[i].ProduktKatalogString1);
				break;
		}
		
		txt += "<li><a href='javascript:setKatalog("+i+")' id='KatalogLi"+i+"'>"+Katalogname+"</a></li>";
	}
	document.getElementById("KatalogDiv").innerHTML += txt;	
}

function searchProdukt(){
	ProduktAllArr = new Array();
	
	$.ajax({
		type: "POST",
		url: "/frontend_shop_2",
		contentType: 'application/x-www-form-urlencoded',
		async: false, 
		data: {},
		success: function (response) {
			if (response && Array.isArray(response)) {
                response.forEach(function (item) {
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
					ProduktAllArr.push(obj);
				});
				
				if(globalKatalog>0){
					for(var i=0; i<KatalogArr.length; i++){
						if(globalKatalog==KatalogArr[i].prIDX){
							setKatalog(i);
						}
					}
				}else{
					ProduktArr = ProduktAllArr;
					showProdukt();
				}
            } else {
                console.error("response.results 不是一个数组或不存在");
            }
		}
	});
}

function showProdukt(){		
	document.getElementById("ProduktDiv").innerHTML = "";
	var txt="";
	for(var i=0; i<ProduktArr.length; i++){
		var Produktname = "", ProductDetail = "";
		
		switch (lang) {
			case "en":
				Produktname = unescape(ProduktArr[i].ProduktString4);
				ProductDetail = "Product Detail";
				break;
			case "de":
				Produktname = unescape(ProduktArr[i].ProduktString2);
				ProductDetail = "Produktdetails";
				break;
			case "fr":
				Produktname = unescape(ProduktArr[i].ProduktString5);
				ProductDetail = "Détails du produit";
				break;
			case "cn":
				Produktname = unescape(ProduktArr[i].ProduktString3);
				ProductDetail = "产品详情";
				break;
			default: 
				Produktname = unescape(ProduktArr[i].ProduktString4);
				ProductDetail = "Product Detail";
				break;
		}
		
		txt += "<div class='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6'>"+
				"<div class='grid__wraper'>"+
				"<div class='grid__wraper__img'>"+
				"<div class='grid__wraper__img__inner'>"+
				"<a href='/produkt?prIDX="+ProduktArr[i].prIDX+"'>"+
				"<img class='primary__image' src='https://intranet.laaver.com/file/product/"+ProduktArr[i].ProduktString13+"' alt='Primary Image'>"+
				"<img class='secondary__image' src='https://intranet.laaver.com/file/product/"+ProduktArr[i].ProduktString13+"' alt='Secondary Image'>"+
				"</a></div></div>"+
				"<div class='grid__wraper__info'>"+
				"<h3 class='grid__wraper__tittle'>"+
				"<a href='/produkt?prIDX="+ProduktArr[i].prIDX+"' tabindex='0'>"+Produktname+"</a></h3>"+
				"<div class='grid__wraper__price'>"+
				"<span>"+FCommaEUR(ProduktArr[i].ProduktEinzelFloat1)+"&nbsp;€</span> "+
				"</div></div></div></div>"+
				"";
	}
	document.getElementById("ProduktDiv").innerHTML = txt;	
}


function setKatalog(idx){
	ProduktArr = new Array();
	if(idx<0){
		document.getElementById("KatalogLiAll").style.color = "#0a85d1";
		for(var i=0; i<KatalogArr.length; i++){
			document.getElementById("KatalogLi"+i).style.color = "#303030";
		}
		ProduktArr = ProduktAllArr;
	}else{		
		document.getElementById("KatalogLiAll").style.color = "#303030";
		for(var i=0; i<KatalogArr.length; i++){
			if(i!=idx) document.getElementById("KatalogLi"+i).style.color = "#303030";
			else document.getElementById("KatalogLi"+i).style.color = "#0a85d1";
		}
		for(var i=0; i<ProduktAllArr.length; i++){
			if(ProduktAllArr[i].ProduktInt1 == KatalogArr[idx].prIDX){
				ProduktArr.push(ProduktAllArr[i]);
			}
		}
	}
	
	showProdukt();
}
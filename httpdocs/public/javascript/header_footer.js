
var languageInnerHTMLArr = new Array();	
var languagePlaceholderArr = new Array();	
var languageValueArr = new Array();	

var KategorienArr = new Array();
var WunschlisteArr = new Array();

var UserID=0,Username="",Vorname="",Nachname="",Email="",AnmeldenBleibt=0;
if(String(window.sessionStorage.getItem("UserID"))!="" && String(window.sessionStorage.getItem("UserID"))!="null" && String(window.sessionStorage.getItem("UserID"))!="undefined"){	
	UserID = parseInt(window.sessionStorage.getItem("UserID"));
}
if(String(window.sessionStorage.getItem("Username"))!="" && String(window.sessionStorage.getItem("Username"))!="null" && String(window.sessionStorage.getItem("Username"))!="undefined"){	
	Username = String(window.sessionStorage.getItem("Username"));
}
if(String(window.sessionStorage.getItem("Email"))!="" && String(window.sessionStorage.getItem("Email"))!="null" && String(window.sessionStorage.getItem("Email"))!="undefined"){	
	Email = String(window.sessionStorage.getItem("Email"));
}
if(String(window.sessionStorage.getItem("Vorname"))!="" && String(window.sessionStorage.getItem("Vorname"))!="null" && String(window.sessionStorage.getItem("Vorname"))!="undefined"){	
	Vorname = String(window.sessionStorage.getItem("Vorname"));
}
if(String(window.sessionStorage.getItem("Nachname"))!="" && String(window.sessionStorage.getItem("Nachname"))!="null" && String(window.sessionStorage.getItem("Nachname"))!="undefined"){	
	Nachname = String(window.sessionStorage.getItem("Nachname"));
}
if(String(window.sessionStorage.getItem("AnmeldenBleibt"))!="" && String(window.sessionStorage.getItem("AnmeldenBleibt"))!="null" && String(window.sessionStorage.getItem("AnmeldenBleibt"))!="undefined"){	
	AnmeldenBleibt = parseInt(window.sessionStorage.getItem("AnmeldenBleibt"));
}

var VorlaufigUserID="",VorlaufigWunschlisteArr=new Array(),VorlaufigKaufwagenArr=new Array();
if(String(window.sessionStorage.getItem("VorlaufigUserID"))!="" && String(window.sessionStorage.getItem("VorlaufigUserID"))!="null" && String(window.sessionStorage.getItem("VorlaufigUserID"))!="undefined"){	
	VorlaufigUserID = String(window.sessionStorage.getItem("VorlaufigUserID"));
}
if(String(window.sessionStorage.getItem("VorlaufigWunschlisteArr"))!="" && String(window.sessionStorage.getItem("VorlaufigWunschlisteArr"))!="null" && String(window.sessionStorage.getItem("VorlaufigWunschlisteArr"))!="undefined"){	
	VorlaufigWunschlisteArr = JSON.parse(window.sessionStorage.getItem("VorlaufigWunschlisteArr"));
}
if(String(window.sessionStorage.getItem("VorlaufigKaufwagenArr"))!="" && String(window.sessionStorage.getItem("VorlaufigKaufwagenArr"))!="null" && String(window.sessionStorage.getItem("VorlaufigKaufwagenArr"))!="undefined"){	
	VorlaufigKaufwagenArr = JSON.parse(window.sessionStorage.getItem("VorlaufigKaufwagenArr"));
}

var BestellungStatusArr = new Array();
BestellungStatusArr.push(["Unbezahlt bestellt", "Unpaid order", "Commande non payée", "下单未付款", 1]);
BestellungStatusArr.push(["Bezahlt bestellt", "Paid order", "Commande payée", "下单已付款", 2]);
BestellungStatusArr.push(["uploaded", "uploaded", "expédié", "已上传运单", 3]);
BestellungStatusArr.push(["reclamation", "reclamation", "réclamation", "进入售后", 5]);
BestellungStatusArr.push(["handling", "handling", "en cours de traitement", "待处理", 6]);
BestellungStatusArr.push(["canceled", "canceled", "annulé", "取消", 8]);
BestellungStatusArr.push(["done", "done", "terminé", "完成", 9]);


//页面加载时需要运行的函数
window.onload = function (){
	if(UserID>0){
		document.getElementById("headerIcon1").setAttribute("onclick","window.location.href='/konto'");
		document.getElementById("headerIcon2").setAttribute("onclick","window.location.href='/einkaufswagen'");
		document.getElementById("headerIcon3").setAttribute("onclick","window.location.href='/konto'");
		document.getElementById("headerIcon4").setAttribute("onclick","window.location.href='/einkaufswagen'");
		checkEinkaufwagenMenge();	
	}else{
		document.getElementById("headerIcon1").setAttribute("onclick","window.location.href='/login'");
		document.getElementById("headerIcon2").setAttribute("onclick","window.location.href='/login'");
		document.getElementById("headerIcon3").setAttribute("onclick","window.location.href='/login'");
		document.getElementById("headerIcon4").setAttribute("onclick","window.location.href='/login'");
		if(VorlaufigUserID=="") getUserVorlaufigId();
	}
};

	
var lang = getCookie("lang") || "en";
let langNum = 0;
switch (lang) {
	case "en":
		langNum = 0;
		break;
	case "de":
		langNum = 1;
		break;
	case "fr":
		langNum = 2;
		break;
	case "cn":
		langNum = 3;
		break;
	default: 
		langNum = 0; 
		break;
}

function changeLang(value){
	lang = String(value);
	switch (value) {
		case "en":
			langNum = 0;
			break;
		case "de":
			langNum = 1;
			break;
		case "fr":
			langNum = 2;
			break;
		case "cn":
			langNum = 3;
			break;
		default: langNum = 0; break;
	}
	document.cookie = "lang=" + lang + "; path=/; max-age=" + (30 * 24 * 60 * 60);
	window.location.reload();
}

function searchWunschliste(){
	if(UserID>0){
		WunschlisteArr = new Array();	
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
					WunschlisteArr.push(obj);
				});
				showProduktListe();
			},
			error: function (response) {
				console.log(response);
			}
		});
	}
}

function showProduktListe(){}


function FCommaEUR(SS){ 
	return parseFloat(SS).toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+\,)/g, '$1.'); 
}

function compare(p){
    return function(m,n){
        var a = m[p];
        var b = n[p];
        return a - b; //升序
    }
}

function compareDESC(p){
    return function(m,n){
        var a = m[p];
        var b = n[p];
        return b - a;
    }
}

function GetQueryString(string) {
   var reg = new RegExp('(^|&)' + string + '=([^&]*)(&|$)');
   var r = window.location.search.substr(1).match(reg);
   if (r != null) return String(r[2]); 
   return null;
}

function getCountryNameByCode(Code){
	var txt="";
	for(var i=0; i<CountrycodeArr.length; i++){
		if(CountrycodeArr[i].Code==Code){
			txt = unescape(CountrycodeArr[i].Name);
		}
	}
	return txt;
}

function getCountryCodeByName(Name){
	var txt="";
	for(var i=0; i<CountrycodeArr.length; i++){
		if(CountrycodeArr[i].Name==Name){
			txt = unescape(CountrycodeArr[i].Code);
		}
	}
	return txt;
}

function getCountryNameByPrIDX(prIDX){
	var txt="";
	for(var i=0; i<CountrycodeArr.length; i++){
		if(CountrycodeArr[i].prIDX==prIDX){
			txt = unescape(CountrycodeArr[i].Name);
		}
	}
	return txt;
}

function languageObj(id, en, de, fr, cn) {
    this.id = id;
    this.en = en;
    this.de = de;
    this.fr = fr;
    this.cn = cn;
}

function applyLanguageInnerHTML() {
    languageInnerHTMLArr.forEach(function(item) {
        var element = document.getElementById(item.id);
        if (element) {
            var text = item[lang];
            if (text !== undefined) {
                element.innerHTML = text;
            }
        }
    });
}

function applyLanguagePlaceholder() {
    languagePlaceholderArr.forEach(function(item) {
        var element = document.getElementById(item.id);
        if (element) {
            var text = item[lang];
            if (text !== undefined) {
                element.placeholder = text;
            }
        }
    });
}

function applyLanguageValue() {
    languageValueArr.forEach(function(item) {
        var element = document.getElementById(item.id);
        if (element) {
            var text = item[lang];
            if (text !== undefined) {
                element.value = text;
            }
        }
    });
}

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nameEQ) === 0) {
            return decodeURIComponent(c.substring(nameEQ.length));
        }
    }
    return null;
}

function deleteCookies() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookieName = cookies[i].split("=")[0].trim();
        document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    window.location.href = "/Login";
}

function compare(p) {
    return function(m, n) {
        var a = m[p];
        var b = n[p];
        return a - b;
        //升序
    }
}

function compareDESC(p) {
    return function(m, n) {
        var a = m[p];
        var b = n[p];
        return b - a;
        //降序
    }
}

function getKatalogArrFunc(){
	$.ajax({
        type: "POST",
        url: "/Katalog_Select",
        contentType: 'application/x-www-form-urlencoded',
        xhrFields: { withCredentials: true },
        cache: false,
		async: false,
        data: {},
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
				KategorienArr.push(obj);
				showKategorien();
			});
        },
        error: function (error) {
            console.log(error);
        }
    });
}

function showKategorien(){}

function getKatalogName(prIDX){
	var txt = "";
	for(var i=0; i<KategorienArr.length; i++){
		if(KategorienArr[i].prIDX == prIDX){ 
			switch (lang) {
				case "en":
					txt = unescape(KategorienArr[i].ProduktKatalogString1);
					break;
				case "de":
					txt = unescape(KategorienArr[i].ProduktKatalogString2);
					break;
				case "fr":
					txt = unescape(KategorienArr[i].ProduktKatalogString3);
					break;
				case "cn":
					txt = unescape(KategorienArr[i].ProduktKatalogString4);
					break;
				default: 
					txt = unescape(KategorienArr[i].ProduktKatalogString1);
					break;
			}
		}
	}
	return txt;
}

function NaviTopSuchFunc(){
	var value = document.getElementById("NaviTopSuchInput").value;
	if(String(value).length>2){
		window.location.href = "/shop?Suchen="+escape(value);
	}
}

function isValidEmail(Email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(Email);
}

function checkEinkaufwagenMenge(){
	$.ajax({
		type: "POST",
		url: "/frontend_header_footer_5",
		contentType: 'application/x-www-form-urlencoded',
		async: false,
		data: {
			"UserID": UserID
		},
		success: function (response) {
			var count = parseInt(response.count);

			if (count > 0) {
				document.getElementById("HeaderCartMengeSpan").innerHTML = count;				
				document.getElementById("HeaderCartMengeSpan").style.display = "inline";
				
				document.getElementById("MobileCartMengeSpan").innerHTML = count;
				document.getElementById("MobileCartMengeSpan").style.display = "inline";
			} else {
				document.getElementById("HeaderCartMengeSpan").innerHTML = "";				
				document.getElementById("HeaderCartMengeSpan").style.display = "none";
				
				document.getElementById("MobileCartMengeSpan").innerHTML = "";
				document.getElementById("MobileCartMengeSpan").style.display = "none";
			}

		}
	});	
}

function getUserVorlaufigId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 32; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars.charAt(randomIndex);
    }
	VorlaufigUserID = result;
    var storage = window.sessionStorage;					
	storage.setItem('VorlaufigUserID',result);
	
	setCookie("lang","en",30);
}

function getBestellungStatusName(id){
	if(id!="" && BestellungStatusArr.length>0){
		for(var i=0; i<BestellungStatusArr.length; i++){
			if(BestellungStatusArr[i][4]==id){
				return unescape(BestellungStatusArr[i][langNum]);
				break;
			}
		}
	}
}
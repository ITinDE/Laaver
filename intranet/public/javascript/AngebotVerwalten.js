
var globalIDX=0;
if(String(GetQueryString("prIDX"))!="" && String(GetQueryString("prIDX"))!="null" && String(GetQueryString("prIDX"))!="undefined") globalIDX = parseInt(GetQueryString("prIDX"));
var mainIDX=0,mainStatus=0;
var oneAngebotMain = new AngebotMainObj();
var ProduktAngebotListeArr = new Array();

var AngebotMainArr = new Array();
var showAngebotMainAttributArr = new Array();

showAngebotMainAttributArr.push(new showAttributObj("prIDX", "parseInt", 1, 1, 1, 1, 1, 1, new Array("Seriennummer", "serial number", "Numéro de série", "序号")));
showAngebotMainAttributArr.push(new showAttributObj("frIDX", "parseInt", 0, 0, 0, 0, 0, 0, new Array("frIDX", "frIDX", "frIDX", "frIDX")));
showAngebotMainAttributArr.push(new showAttributObj("Datum1", "String", 0, 0, 0, 0, 0, 0, new Array("Erstellungsdatum", "creation date", "Date de création", "创建日期")));
showAngebotMainAttributArr.push(new showAttributObj("Datum2", "String", 3, 3, 3, 3, 3, 3, new Array("更新时间", "Update time", "Heure de mise à jour", "更新时间")));
showAngebotMainAttributArr.push(new showAttributObj("Datum3", "String", 4, 4, 4, 4, 4, 4, new Array("开始时间", "Start time", "Heure de début", "开始时间")));
showAngebotMainAttributArr.push(new showAttributObj("Datum4", "String", 5, 5, 5, 5, 5, 5, new Array("结束时间", "End time", "Heure de fin", "结束时间")));
showAngebotMainAttributArr.push(new showAttributObj("Status", "parseInt", 9, 9, 9, 9, 9, 9, new Array("Status", "Status", "Statut", "状态")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString10", "String", 0, 0, 20, 20, 20, 20, new Array("标题", "Title", "Titre", "标题")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString11", "String", 0, 0, 21, 21, 21, 21, new Array("广告语", "Slogan", "Slogan", "广告语")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString12", "String", 0, 0, 22, 22, 22, 22, new Array("内容", "Content", "Contenu", "内容")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString13", "String", 0, 0, 0, 0, 0, 0, new Array("图片1", "Image 1", "Image 1", "图片1")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString14", "String", 0, 0, 0, 0, 0, 0, new Array("图片2", "Image 2", "Image 2", "图片2")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString15", "String", 0, 0, 0, 0, 0, 0, new Array("图片3", "Image 3", "Image 3", "图片3")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString16", "String", 10, 10, 10, 10, 10, 10, new Array("促销名称", "Promotion Name", "Nom de la promotion", "促销名称")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString17", "String", 0, 0, 30, 30, 30, 30, new Array("产品类别", "Product Category", "Catégorie de produit", "产品类别")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString18", "String", 0, 0, 0, 0, 0, 0, new Array("节日名称", "Festival Name", "Nom de la fête", "节日名称")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString19", "String", 0, 0, 0, 0, 0, 0, new Array("特殊时刻", "Special Moment", "Moment spécial", "特殊时刻")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString20", "String", 0, 0, 33, 33, 33, 33, new Array("优惠码Code", "Coupon Code", "Code promo", "优惠码Code")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString21", "String", 0, 0, 34, 34, 34, 34, new Array("备注", "Remark", "Remarque", "备注")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString22", "String", 0, 0, 35, 35, 35, 35, new Array("产品ID(逗号分隔)", "Product IDs (comma-separated)", "ID de produits (séparés par des virgules)", "产品ID(逗号分隔)")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString23", "String", 0, 0, 0, 0, 0, 0, new Array("AngebotMainString23", "AngebotMainString23", "AngebotMainString23", "AngebotMainString23")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString24", "String", 0, 0, 0, 0, 0, 0, new Array("AngebotMainString24", "AngebotMainString24", "AngebotMainString24", "AngebotMainString24")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString25", "String", 0, 0, 0, 0, 0, 0, new Array("AngebotMainString25", "AngebotMainString25", "AngebotMainString25", "AngebotMainString25")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString26", "String", 0, 0, 0, 0, 0, 0, new Array("AngebotMainString26", "AngebotMainString26", "AngebotMainString26", "AngebotMainString26")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString27", "String", 0, 0, 0, 0, 0, 0, new Array("AngebotMainString27", "AngebotMainString27", "AngebotMainString27", "AngebotMainString27")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString28", "String", 0, 0, 0, 0, 0, 0, new Array("AngebotMainString28", "AngebotMainString28", "AngebotMainString28", "AngebotMainString28")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainString29", "String", 0, 0, 0, 0, 0, 0, new Array("AngebotMainString29", "AngebotMainString29", "AngebotMainString29", "AngebotMainString29")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainInt1", "parseInt", 50, 50, 50, 50, 50, 50, new Array("减免类型", "Discount Type", "Type de réduction", "减免类型")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainInt2", "parseInt", 0, 0, 0, 0, 0, 0, new Array("Mitarbeiter", "Employee", "Employé", "员工")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainInt3", "parseInt", 11, 11, 11, 11, 11, 11, new Array("促销策略", "Promotion Strategy", "Stratégie promotionnelle", "促销策略")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainInt4", "parseInt", 0, 0, 0, 0, 0, 0, new Array("AngebotMainInt4", "AngebotMainInt4", "AngebotMainInt4", "AngebotMainInt4")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainInt5", "parseInt", 0, 0, 0, 0, 0, 0, new Array("AngebotMainInt5", "AngebotMainInt5", "AngebotMainInt5", "AngebotMainInt5")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainFloat1", "parseFloat", 0, 0, 60, 60, 60, 60, new Array("减免金额", "Discount Amount", "Montant de réduction", "减免金额")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainFloat2", "parseFloat", 0, 0, 62, 62, 62, 62, new Array("减免百分比", "Discount Percentage", "Pourcentage de réduction", "减免百分比")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainFloat3", "parseFloat", 0, 0, 64, 64, 64, 64, new Array("满X金额", "Threshold Amount", "Montant seuil", "满X金额")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainFloat4", "parseFloat", 0, 0, 0, 0, 0, 0, new Array("AngebotMainFloat4", "AngebotMainFloat4", "AngebotMainFloat4", "AngebotMainFloat4")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainFloat5", "parseFloat", 0, 0, 0, 0, 0, 0, new Array("AngebotMainFloat5", "AngebotMainFloat5", "AngebotMainFloat5", "AngebotMainFloat5")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainFloat6", "parseFloat", 0, 0, 0, 0, 0, 0, new Array("AngebotMainFloat6", "AngebotMainFloat6", "AngebotMainFloat6", "AngebotMainFloat6")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainBIT1", "BIT", 0, 0, 0, 0, 0, 0, new Array("AngebotMainBIT1", "AngebotMainBIT1", "AngebotMainBIT1", "AngebotMainBIT1")));
showAngebotMainAttributArr.push(new showAttributObj("AngebotMainBIT2", "BIT", 0, 0, 0, 0, 0, 0, new Array("AngebotMainBIT2", "AngebotMainBIT2", "AngebotMainBIT2", "AngebotMainBIT2")));


var AngebotPosArr = new Array();
var showAngebotPosArr = new Array();


showAngebotPosArr.push(new showAttributObj("prIDX", "parseInt", 0, 0, 0, 0, 0, 0, new Array("prIDX", "prIDX", "prIDX", "prIDX")));
showAngebotPosArr.push(new showAttributObj("frIDX", "parseInt", 0, 0, 0, 0, 0, 0, new Array("frIDX", "frIDX", "frIDX", "frIDX")));
showAngebotPosArr.push(new showAttributObj("AngebotPosString1", "String", 0, 0, 0, 0, 0, 0, new Array("AngebotPosString1", "AngebotPosString1", "AngebotPosString1", "AngebotPosString1")));
showAngebotPosArr.push(new showAttributObj("AngebotPosString2", "String", 0, 0, 0, 0, 0, 0, new Array("AngebotPosString2", "AngebotPosString2", "AngebotPosString2", "AngebotPosString2")));
showAngebotPosArr.push(new showAttributObj("AngebotPosString3", "String", 0, 0, 0, 0, 0, 0, new Array("AngebotPosString3", "AngebotPosString3", "AngebotPosString3", "AngebotPosString3")));
showAngebotPosArr.push(new showAttributObj("AngebotPosString4", "String", 0, 0, 0, 0, 0, 0, new Array("AngebotPosString4", "AngebotPosString4", "AngebotPosString4", "AngebotPosString4")));
showAngebotPosArr.push(new showAttributObj("AngebotPosInt1", "parseInt", 0, 0, 0, 0, 0, 0, new Array("AngebotPosInt1", "AngebotPosInt1", "AngebotPosInt1", "AngebotPosInt1")));
showAngebotPosArr.push(new showAttributObj("AngebotPosInt2", "parseInt", 0, 0, 0, 0, 0, 0, new Array("AngebotPosInt2", "AngebotPosInt2", "AngebotPosInt2", "AngebotPosInt2")));
showAngebotPosArr.push(new showAttributObj("AngebotPosInt3", "parseInt", 0, 0, 0, 0, 0, 0, new Array("AngebotPosInt3", "AngebotPosInt3", "AngebotPosInt3", "AngebotPosInt3")));
showAngebotPosArr.push(new showAttributObj("AngebotPosInt4", "parseInt", 0, 0, 0, 0, 0, 0, new Array("AngebotPosInt4", "AngebotPosInt4", "AngebotPosInt4", "AngebotPosInt4")));
showAngebotPosArr.push(new showAttributObj("AngebotPosFloat1", "parseFloat", 0, 0, 0, 0, 0, 0, new Array("AngebotPosFloat1", "AngebotPosFloat1", "AngebotPosFloat1", "AngebotPosFloat1")));
showAngebotPosArr.push(new showAttributObj("AngebotPosFloat2", "parseFloat", 0, 0, 0, 0, 0, 0, new Array("AngebotPosFloat2", "AngebotPosFloat2", "AngebotPosFloat2", "AngebotPosFloat2")));
showAngebotPosArr.push(new showAttributObj("AngebotPosFloat3", "parseFloat", 0, 0, 0, 0, 0, 0, new Array("AngebotPosFloat3", "AngebotPosFloat3", "AngebotPosFloat3", "AngebotPosFloat3")));
showAngebotPosArr.push(new showAttributObj("AngebotPosFloat4", "parseFloat", 0, 0, 0, 0, 0, 0, new Array("AngebotPosFloat4", "AngebotPosFloat4", "AngebotPosFloat4", "AngebotPosFloat4")));
showAngebotPosArr.push(new showAttributObj("AngebotPosFloat5", "parseFloat", 0, 0, 0, 0, 0, 0, new Array("AngebotPosFloat5", "AngebotPosFloat5", "AngebotPosFloat5", "AngebotPosFloat5")));
showAngebotPosArr.push(new showAttributObj("AngebotPosFloat6", "parseFloat", 0, 0, 0, 0, 0, 0, new Array("AngebotPosFloat6", "AngebotPosFloat6", "AngebotPosFloat6", "AngebotPosFloat6")));
showAngebotPosArr.push(new showAttributObj("AngebotPosFloat7", "parseFloat", 0, 0, 0, 0, 0, 0, new Array("AngebotPosFloat7", "AngebotPosFloat7", "AngebotPosFloat7", "AngebotPosFloat7")));
showAngebotPosArr.push(new showAttributObj("AngebotPosFloat8", "parseFloat", 0, 0, 0, 0, 0, 0, new Array("AngebotPosFloat8", "AngebotPosFloat8", "AngebotPosFloat8", "AngebotPosFloat8")));
showAngebotPosArr.push(new showAttributObj("AngebotPosBIT1", "BIT", 0, 0, 0, 0, 0, 0, new Array("AngebotPosBIT1", "AngebotPosBIT1", "AngebotPosBIT1", "AngebotPosBIT1")));
showAngebotPosArr.push(new showAttributObj("AngebotPosBIT2", "BIT", 0, 0, 0, 0, 0, 0, new Array("AngebotPosBIT2", "AngebotPosBIT2", "AngebotPosBIT2", "AngebotPosBIT2")));
showAngebotPosArr.push(new showAttributObj("AngebotPosBIT3", "BIT", 0, 0, 0, 0, 0, 0, new Array("AngebotPosBIT3", "AngebotPosBIT3", "AngebotPosBIT3", "AngebotPosBIT3")));
showAngebotPosArr.push(new showAttributObj("AngebotPosBIT4", "BIT", 0, 0, 0, 0, 0, 0, new Array("AngebotPosBIT4", "AngebotPosBIT4", "AngebotPosBIT4", "AngebotPosBIT4")));

//JS代码最下面有解释
var AngebotMainInt1Arr = new Array();
AngebotMainInt1Arr.push(["Discount Amount", "Rabattbetrag", "Montant de réduction", "减免金额", 1]);
AngebotMainInt1Arr.push(["Discount Percentage", "Rabattprozentsatz", "Pourcentage de réduction", "减免百分比", 2]);
AngebotMainInt1Arr.push(["Amount Threshold - Discount Amount", "Betragsschwelle - Rabattbetrag", "Montant seuil - montant de réduction", "满金额减免金额", 3]);
AngebotMainInt1Arr.push(["Amount Threshold - Discount Percentage", "Betragsschwelle - Rabattprozentsatz", "Montant seuil - pourcentage de réduction", "满金额减免百分比", 4]);

var AngebotMainInt3Arr = new Array();
//AngebotMainInt3Arr.push(["Product Group", "Produktgruppe", "Groupe de produits", "产品组合", 1]);
AngebotMainInt3Arr.push(["By Category", "Nach Kategorie", "Par catégorie", "根据类别", 2]);
//AngebotMainInt3Arr.push(["By Festival", "Nach Feiertag", "Par fête", "根据节日", 3]);
//AngebotMainInt3Arr.push(["By Moment", "Nach Moment", "Par moment", "根据时刻", 4]);
AngebotMainInt3Arr.push(["Coupon Code", "Gutscheincode", "Code promo", "优惠码", 5]);
AngebotMainInt3Arr.push(["Specific Products", "Spezifische Produkte", "Produits spécifiques", "特定产品", 6]);

var ProduktString14Arr = [
    {
        "ProduktString14Int1": 1,
        "ProduktString14Int2": 0,
        "ProduktString14String1": "Festtagsgeschenke",
        "ProduktString14String2": "节日礼物"
    },
    {
        "ProduktString14Int1": 1,
        "ProduktString14Int2": 1,
        "ProduktString14String1": "Neujahrstag",
        "ProduktString14String2": "新年"
    },
    {
        "ProduktString14Int1": 1,
        "ProduktString14Int2": 2,
        "ProduktString14String1": "Valentinstag",
        "ProduktString14String2": "情人节"
    },
    {
        "ProduktString14Int1": 1,
        "ProduktString14Int2": 3,
        "ProduktString14String1": "Ostern",
        "ProduktString14String2": "复活节"
    },
    {
        "ProduktString14Int1": 1,
        "ProduktString14Int2": 4,
        "ProduktString14String1": "Karneval/Fasching",
        "ProduktString14String2": "狂欢节"
    },
    {
        "ProduktString14Int1": 1,
        "ProduktString14Int2": 5,
        "ProduktString14String1": "Muttertag",
        "ProduktString14String2": "母亲节"
    },
    {
        "ProduktString14Int1": 1,
        "ProduktString14Int2": 6,
        "ProduktString14String1": "Vatertag",
        "ProduktString14String2": "父亲节"
    },
    {
        "ProduktString14Int1": 1,
        "ProduktString14Int2": 7,
        "ProduktString14String1": "Erntedankfest",
        "ProduktString14String2": "感恩节"
    },
    {
        "ProduktString14Int1": 1,
        "ProduktString14Int2": 8,
        "ProduktString14String1": "Halloween",
        "ProduktString14String2": "万圣节"
    },
    {
        "ProduktString14Int1": 1,
        "ProduktString14Int2": 9,
        "ProduktString14String1": "Weihnachten",
        "ProduktString14String2": "圣诞节"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 0,
        "ProduktString14String1": "Gefühlvolles",
        "ProduktString14String2": "情感礼物"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 1,
        "ProduktString14String1": "Überraschung",
        "ProduktString14String2": "惊喜"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 2,
        "ProduktString14String1": "Dankbarkeit",
        "ProduktString14String2": "感激"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 3,
        "ProduktString14String1": "Erinnerungen",
        "ProduktString14String2": "回忆"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 4,
        "ProduktString14String1": "Freundschaft",
        "ProduktString14String2": "友谊"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 5,
        "ProduktString14String1": "Lob",
        "ProduktString14String2": "赞美"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 6,
        "ProduktString14String1": "Unterstützung",
        "ProduktString14String2": "鼓励"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 7,
        "ProduktString14String1": "Gesundheitsförderung",
        "ProduktString14String2": "健康"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 8,
        "ProduktString14String1": "Entspannung",
        "ProduktString14String2": "放松"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 9,
        "ProduktString14String1": "Unterhaltung",
        "ProduktString14String2": "娱乐"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 10,
        "ProduktString14String1": "Fürsorge",
        "ProduktString14String2": "关怀"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 11,
        "ProduktString14String1": "Mitgefühl",
        "ProduktString14String2": "爱心"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 12,
        "ProduktString14String1": "Hoffnung",
        "ProduktString14String2": "希望"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 13,
        "ProduktString14String1": "persönliche Erfüllungen",
        "ProduktString14String2": "个人成就"
    },
    {
        "ProduktString14Int1": 2,
        "ProduktString14Int2": 14,
        "ProduktString14String1": "Lebenszielen",
        "ProduktString14String2": "人生目标"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 0,
        "ProduktString14String1": "Lebensabschnitts",
        "ProduktString14String2": "人生阶段"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 1,
        "ProduktString14String1": "Geburt",
        "ProduktString14String2": "新生儿礼物"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 2,
        "ProduktString14String1": "Taufe",
        "ProduktString14String2": "洗礼礼物"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 3,
        "ProduktString14String1": "Kleinkinder",
        "ProduktString14String2": "幼儿"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 4,
        "ProduktString14String1": "Kinder",
        "ProduktString14String2": "儿童"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 5,
        "ProduktString14String1": "Einschulung",
        "ProduktString14String2": "小学入学礼物"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 6,
        "ProduktString14String1": "Jugendliche",
        "ProduktString14String2": "青少年"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 7,
        "ProduktString14String1": "Studienbeginn",
        "ProduktString14String2": "大学入学礼物"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 8,
        "ProduktString14String1": "Abschluss",
        "ProduktString14String2": "毕业礼物"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 9,
        "ProduktString14String1": "Verlobung",
        "ProduktString14String2": "订婚礼物"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 10,
        "ProduktString14String1": "Hochzeit",
        "ProduktString14String2": "结婚礼物"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 11,
        "ProduktString14String1": "Hochzeitstag",
        "ProduktString14String2": "结婚纪念日"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 12,
        "ProduktString14String1": "Umzug",
        "ProduktString14String2": "房屋搬迁"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 13,
        "ProduktString14String1": "Hauskauf",
        "ProduktString14String2": "购房礼物"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 14,
        "ProduktString14String1": "Familiengründung",
        "ProduktString14String2": "成立家庭"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 15,
        "ProduktString14String1": "Berufseinstieg",
        "ProduktString14String2": "职业开始"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 16,
        "ProduktString14String1": "Karriereerfolg",
        "ProduktString14String2": "职场成就"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 17,
        "ProduktString14String1": "Beförderung",
        "ProduktString14String2": "晋升礼物"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 18,
        "ProduktString14String1": "Senioren",
        "ProduktString14String2": "老年人"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 19,
        "ProduktString14String1": "Ruhestand",
        "ProduktString14String2": "退休礼物"
    },
    {
        "ProduktString14Int1": 3,
        "ProduktString14Int2": 20,
        "ProduktString14String1": "Genesungswünsche",
        "ProduktString14String2": "疾病慰问"
    },
    {
        "ProduktString14Int1": 4,
        "ProduktString14Int2": 0,
        "ProduktString14String1": "Anlassgeschenke",
        "ProduktString14String2": "特定赠礼"
    },
    {
        "ProduktString14Int1": 4,
        "ProduktString14Int2": 1,
        "ProduktString14String1": "Geburtstag",
        "ProduktString14String2": "生日礼物"
    },
    {
        "ProduktString14Int1": 4,
        "ProduktString14Int2": 2,
        "ProduktString14String1": "Jubiläum",
        "ProduktString14String2": "重要纪念礼物"
    },
    {
        "ProduktString14Int1": 4,
        "ProduktString14Int2": 3,
        "ProduktString14String1": "Familientreffen",
        "ProduktString14String2": "家庭聚会"
    },
    {
        "ProduktString14Int1": 4,
        "ProduktString14Int2": 4,
        "ProduktString14String1": "Wettkampfsieg",
        "ProduktString14String2": "比赛胜利"
    },
    {
        "ProduktString14Int1": 4,
        "ProduktString14Int2": 5,
        "ProduktString14String1": "Männer/Jungen",
        "ProduktString14String2": "男人"
    },
    {
        "ProduktString14Int1": 4,
        "ProduktString14Int2": 6,
        "ProduktString14String1": "Frauen/Mädchen",
        "ProduktString14String2": "女人"
    },
    {
        "ProduktString14Int1": 4,
        "ProduktString14Int2": 7,
        "ProduktString14String1": "Partyartikel",
        "ProduktString14String2": "派对用品"
    },
    {
        "ProduktString14Int1": 5,
        "ProduktString14Int2": 0,
        "ProduktString14String1": "Material",
        "ProduktString14String2": "礼物材质"
    },
    {
        "ProduktString14Int1": 5,
        "ProduktString14Int2": 1,
        "ProduktString14String1": "Kunststoff",
        "ProduktString14String2": "塑料"
    },
    {
        "ProduktString14Int1": 5,
        "ProduktString14Int2": 2,
        "ProduktString14String1": "Holz",
        "ProduktString14String2": "木头"
    },
    {
        "ProduktString14Int1": 5,
        "ProduktString14Int2": 3,
        "ProduktString14String1": "Metall",
        "ProduktString14String2": "金属"
    },
    {
        "ProduktString14Int1": 5,
        "ProduktString14Int2": 4,
        "ProduktString14String1": "Stoff",
        "ProduktString14String2": "布料"
    },
    {
        "ProduktString14Int1": 5,
        "ProduktString14Int2": 5,
        "ProduktString14String1": "Glas",
        "ProduktString14String2": "玻璃"
    },
    {
        "ProduktString14Int1": 5,
        "ProduktString14Int2": 6,
        "ProduktString14String1": "Leder",
        "ProduktString14String2": "皮革"
    },
    {
        "ProduktString14Int1": 5,
        "ProduktString14Int2": 7,
        "ProduktString14String1": "Kunstleder",
        "ProduktString14String2": "人造皮革"
    },
    {
        "ProduktString14Int1": 5,
        "ProduktString14Int2": 8,
        "ProduktString14String1": "Keramik",
        "ProduktString14String2": "陶瓷"
    },
    {
        "ProduktString14Int1": 5,
        "ProduktString14Int2": 9,
        "ProduktString14String1": "Edelstein",
        "ProduktString14String2": "宝石"
    },
    {
        "ProduktString14Int1": 5,
        "ProduktString14Int2": 10,
        "ProduktString14String1": "Gummi",
        "ProduktString14String2": "橡胶"
    },
    {
        "ProduktString14Int1": 5,
        "ProduktString14Int2": 11,
        "ProduktString14String1": "Wachs",
        "ProduktString14String2": "蜡"
    },
    {
        "ProduktString14Int1": 6,
        "ProduktString14Int2": 0,
        "ProduktString14String1": "Katagorie",
        "ProduktString14String2": "礼物类别"
    },
    {
        "ProduktString14Int1": 6,
        "ProduktString14Int2": 1,
        "ProduktString14String1": "Schreibwaren",
        "ProduktString14String2": "文具"
    },
    {
        "ProduktString14Int1": 6,
        "ProduktString14Int2": 2,
        "ProduktString14String1": "Werkzeug",
        "ProduktString14String2": "工具"
    },
    {
        "ProduktString14Int1": 6,
        "ProduktString14Int2": 3,
        "ProduktString14String1": "Schmuck",
        "ProduktString14String2": "首饰"
    },
    {
        "ProduktString14Int1": 6,
        "ProduktString14Int2": 4,
        "ProduktString14String1": "Kleidung",
        "ProduktString14String2": "衣物"
    },
    {
        "ProduktString14Int1": 6,
        "ProduktString14Int2": 5,
        "ProduktString14String1": "Küchenutensilien",
        "ProduktString14String2": "厨房用具"
    },
    {
        "ProduktString14Int1": 6,
        "ProduktString14Int2": 6,
        "ProduktString14String1": "Spielzeug",
        "ProduktString14String2": "玩具"
    },
    {
        "ProduktString14Int1": 6,
        "ProduktString14Int2": 7,
        "ProduktString14String1": "Elektronikgeräte",
        "ProduktString14String2": "电子设备"
    },
    {
        "ProduktString14Int1": 6,
        "ProduktString14Int2": 8,
        "ProduktString14String1": "Haushaltsgegenstände",
        "ProduktString14String2": "家居用品"
    },
    {
        "ProduktString14Int1": 6,
        "ProduktString14Int2": 9,
        "ProduktString14String1": "Dekoration",
        "ProduktString14String2": "装饰品"
    },
    {
        "ProduktString14Int1": 6,
        "ProduktString14Int2": 10,
        "ProduktString14String1": "Kunstwerke",
        "ProduktString14String2": "艺术品"
    },
    {
        "ProduktString14Int1": 6,
        "ProduktString14Int2": 11,
        "ProduktString14String1": "Wellnessprodukte",
        "ProduktString14String2": "健康产品"
    }
]


var AngebotMainString17Arr = new Array();
for(var i=0; i<ProduktString14Arr.length; i++){
	if(ProduktString14Arr[i].ProduktString14Int1==6 && ProduktString14Arr[i].ProduktString14Int2>0){
		AngebotMainString17Arr.push([String(ProduktString14Arr[i].ProduktString14String1),String(ProduktString14Arr[i].ProduktString14String1),String(ProduktString14Arr[i].ProduktString14String1),String(ProduktString14Arr[i].ProduktString14String2),ProduktString14Arr[i].ProduktString14Int2]);
	}
}

var AngebotMainString18Arr = new Array();
for(var i=0; i<ProduktString14Arr.length; i++){
	if(ProduktString14Arr[i].ProduktString14Int1==1 && ProduktString14Arr[i].ProduktString14Int2>0){
		AngebotMainString18Arr.push([String(ProduktString14Arr[i].ProduktString14String1),String(ProduktString14Arr[i].ProduktString14String1),String(ProduktString14Arr[i].ProduktString14String1),String(ProduktString14Arr[i].ProduktString14String2),ProduktString14Arr[i].ProduktString14Int2]);
	}
}

var AngebotMainString19Arr = new Array();
for(var i=0; i<ProduktString14Arr.length; i++){
	if((ProduktString14Arr[i].ProduktString14Int1==3 || ProduktString14Arr[i].ProduktString14Int1==4) && ProduktString14Arr[i].ProduktString14Int2>0){
		AngebotMainString19Arr.push([String(ProduktString14Arr[i].ProduktString14String1),String(ProduktString14Arr[i].ProduktString14String1),String(ProduktString14Arr[i].ProduktString14String1),String(ProduktString14Arr[i].ProduktString14String2),ProduktString14Arr[i].ProduktString14Int2]);
	}
}


switch(langNum){
	case 0: document.getElementById('PageTitleDiv').innerHTML = 'Angebot'; break;
	case 1: document.getElementById('PageTitleDiv').innerHTML = 'Sale'; break;
	case 2: document.getElementById('PageTitleDiv').innerHTML = 'Gestion des promotions'; break;
	case 2: document.getElementById('PageTitleDiv').innerHTML = '促销管理'; break;
}

var AngebotMainStatusArr = new Array();
AngebotMainStatusArr.push(["Aktiv", "Active", "Actif", "有效", 1]);
AngebotMainStatusArr.push(["Deaktiv", "Deactive", "Inactif", "无效", 8]);
AngebotMainStatusArr.push(["Locked", "Locked", "Verrouillé", "锁定", 9]);



function GetQueryString(string){
   var reg = new RegExp('(^|&)'+ string +'=([^&]*)(&|$)');
   var r = window.location.search.substr(1).match(reg);
   if(r!=null)return unescape(r[2]); return null;
}

   
function initGUI(){
	getKatalogListe();
	getProduktListe();
	
	showAngebotMainAttributArr.sort(compare('indexA'));
	for(var i=0; i<showAngebotMainAttributArr.length; i++){
	  if(showAngebotMainAttributArr[i].indexA>0){
		 eval("if(document.getElementById('"+showAngebotMainAttributArr[i].Attribut+"SearchDiv'))document.getElementById('"+showAngebotMainAttributArr[i].Attribut+"SearchDiv').style.display='block';");
	  }
	}
	var sel=document.getElementById("StatusSearch");
	for(var i=0; i<AngebotMainStatusArr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=AngebotMainStatusArr[i][4];
		temp.text=unescape(AngebotMainStatusArr[i][langNum]);
		sel.add(temp,sel.options.length);
	}
	var sel=document.getElementById("StatusModal");
	for(var i=0; i<AngebotMainStatusArr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=AngebotMainStatusArr[i][4];
		temp.text=unescape(AngebotMainStatusArr[i][langNum]);
		if(AngebotMainStatusArr[i][4]==1) temp.selected="selected";
		sel.add(temp,sel.options.length);
	}
	
	var sel=document.getElementById("AngebotMainInt1Search");
	for(var i=0; i<AngebotMainInt1Arr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=AngebotMainInt1Arr[i][4];
		temp.text=unescape(AngebotMainInt1Arr[i][langNum]);
		sel.add(temp,sel.options.length);
	}	
	var sel=document.getElementById("AngebotMainInt1Modal");
	for(var i=0; i<AngebotMainInt1Arr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=AngebotMainInt1Arr[i][4];
		temp.text=unescape(AngebotMainInt1Arr[i][langNum]);
		sel.add(temp,sel.options.length);
	}
	
	var sel=document.getElementById("AngebotMainInt3Search");
	for(var i=0; i<AngebotMainInt3Arr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=AngebotMainInt3Arr[i][4];
		temp.text=unescape(AngebotMainInt3Arr[i][langNum]);
		sel.add(temp,sel.options.length);
	}	
	var sel=document.getElementById("AngebotMainInt3Modal");
	for(var i=0; i<AngebotMainInt3Arr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=AngebotMainInt3Arr[i][4];
		temp.text=unescape(AngebotMainInt3Arr[i][langNum]);
		sel.add(temp,sel.options.length);
	}
	var sel=document.getElementById("AngebotMainInt3NewModal");
	for(var i=0; i<AngebotMainInt3Arr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=AngebotMainInt3Arr[i][4];
		temp.text=unescape(AngebotMainInt3Arr[i][langNum]);
		sel.add(temp,sel.options.length);
	}
	
	var sel=document.getElementById("AngebotMainString17Search");
	for(var i=0; i<ProduktKatalogArr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=ProduktKatalogArr[i].prIDX;
		temp.text=unescape(ProduktKatalogArr[i].ProduktKatalogString1);
		sel.add(temp,sel.options.length);
	}
	var sel=document.getElementById("AngebotMainString17Modal");
	for(var i=0; i<ProduktKatalogArr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=ProduktKatalogArr[i].prIDX;
		temp.text=unescape(ProduktKatalogArr[i].ProduktKatalogString1);
		sel.add(temp,sel.options.length);
	}
	
	var sel=document.getElementById("AngebotMainString18Search");
	for(var i=0; i<AngebotMainString18Arr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=AngebotMainString18Arr[i][4];
		temp.text=unescape(AngebotMainString18Arr[i][langNum]);
		sel.add(temp,sel.options.length);
	}
	var sel=document.getElementById("AngebotMainString18Modal");
	for(var i=0; i<AngebotMainString18Arr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=AngebotMainString18Arr[i][4];
		temp.text=unescape(AngebotMainString18Arr[i][langNum]);
		sel.add(temp,sel.options.length);
	}
	
	var sel=document.getElementById("AngebotMainString19Search");
	for(var i=0; i<AngebotMainString19Arr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=AngebotMainString19Arr[i][4];
		temp.text=unescape(AngebotMainString19Arr[i][langNum]);
		sel.add(temp,sel.options.length);
	}
	var sel=document.getElementById("AngebotMainString19Modal");
	for(var i=0; i<AngebotMainString19Arr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=AngebotMainString19Arr[i][4];
		temp.text=unescape(AngebotMainString19Arr[i][langNum]);
		sel.add(temp,sel.options.length);
	}
	
	document.getElementById("prIDXSearchLabel").innerHTML = getAngebotMainAttributName("prIDX");
	document.getElementById("frIDXSearchLabel").innerHTML = getAngebotMainAttributName("frIDX");
	document.getElementById("Datum1_1SearchLabel").innerHTML = getAngebotMainAttributName("Datum1")+" von";
	document.getElementById("Datum1_2SearchLabel").innerHTML = getAngebotMainAttributName("Datum1")+" bis";
	document.getElementById("Datum2_1SearchLabel").innerHTML = getAngebotMainAttributName("Datum2")+" von";
	document.getElementById("Datum2_2SearchLabel").innerHTML = getAngebotMainAttributName("Datum2")+" bis";
	document.getElementById("Datum3_1SearchLabel").innerHTML = getAngebotMainAttributName("Datum3")+" von";
	document.getElementById("Datum3_2SearchLabel").innerHTML = getAngebotMainAttributName("Datum3")+" bis";
	document.getElementById("Datum4_1SearchLabel").innerHTML = getAngebotMainAttributName("Datum4")+" von";
	document.getElementById("Datum4_2SearchLabel").innerHTML = getAngebotMainAttributName("Datum4")+" bis";
	document.getElementById("StatusSearchLabel").innerHTML = getAngebotMainAttributName("Status");
	
	document.getElementById("AngebotMainString1SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString1");
	document.getElementById("AngebotMainString2SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString2");
	document.getElementById("AngebotMainString3SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString3");
	document.getElementById("AngebotMainString4SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString4");
	document.getElementById("AngebotMainString5SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString5");
	document.getElementById("AngebotMainString6SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString6");
	document.getElementById("AngebotMainString7SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString7");
	document.getElementById("AngebotMainString8SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString8");
	document.getElementById("AngebotMainString9SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString9");
	document.getElementById("AngebotMainString10SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString10");
	document.getElementById("AngebotMainString11SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString11");
	document.getElementById("AngebotMainString12SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString12");
	document.getElementById("AngebotMainString13SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString13");
	document.getElementById("AngebotMainString14SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString14");
	document.getElementById("AngebotMainString15SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString15");
	document.getElementById("AngebotMainString16SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString16");
	document.getElementById("AngebotMainString17SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString17");
	document.getElementById("AngebotMainString18SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString18");
	document.getElementById("AngebotMainString19SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString19");
	document.getElementById("AngebotMainString20SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString20");
	document.getElementById("AngebotMainString21SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString21");
	document.getElementById("AngebotMainString22SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString22");
	document.getElementById("AngebotMainString23SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString23");
	document.getElementById("AngebotMainString24SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString24");
	document.getElementById("AngebotMainString25SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString25");
	document.getElementById("AngebotMainString26SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString26");
	document.getElementById("AngebotMainString27SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString27");
	document.getElementById("AngebotMainString28SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString28");
	document.getElementById("AngebotMainString29SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString29");
	document.getElementById("AngebotMainString30SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString30");
	document.getElementById("AngebotMainString31SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString31");
	document.getElementById("AngebotMainString32SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString32");
	document.getElementById("AngebotMainString33SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString33");
	document.getElementById("AngebotMainString34SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString34");
	document.getElementById("AngebotMainString35SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString35");
	document.getElementById("AngebotMainString36SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString36");
	document.getElementById("AngebotMainString37SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString37");
	document.getElementById("AngebotMainString38SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString38");
	document.getElementById("AngebotMainString39SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString39");
	document.getElementById("AngebotMainString40SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString40");
	document.getElementById("AngebotMainString41SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString41");
	document.getElementById("AngebotMainString42SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString42");
	document.getElementById("AngebotMainString43SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString43");
	document.getElementById("AngebotMainString44SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString44");
	document.getElementById("AngebotMainString45SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString45");
	document.getElementById("AngebotMainString46SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString46");
	document.getElementById("AngebotMainString47SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString47");
	document.getElementById("AngebotMainString48SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString48");
	document.getElementById("AngebotMainString49SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString49");
	document.getElementById("AngebotMainString50SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainString50");
	
	document.getElementById("AngebotMainInt1SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt1");
	document.getElementById("AngebotMainInt2SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt2");
	document.getElementById("AngebotMainInt3SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt3");
	document.getElementById("AngebotMainInt4SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt4");
	document.getElementById("AngebotMainInt5SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt5");
	document.getElementById("AngebotMainInt6SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt6");
	document.getElementById("AngebotMainInt7SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt7");
	document.getElementById("AngebotMainInt8SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt8");
	document.getElementById("AngebotMainInt9SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt9");
	document.getElementById("AngebotMainInt10SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt10");
	document.getElementById("AngebotMainInt11SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt11");
	document.getElementById("AngebotMainInt12SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt12");
	document.getElementById("AngebotMainInt13SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt13");
	document.getElementById("AngebotMainInt14SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt14");
	document.getElementById("AngebotMainInt15SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt15");
	document.getElementById("AngebotMainInt16SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt16");
	document.getElementById("AngebotMainInt17SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt17");
	document.getElementById("AngebotMainInt18SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt18");
	document.getElementById("AngebotMainInt19SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt19");
	document.getElementById("AngebotMainInt20SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt20");
	document.getElementById("AngebotMainInt21SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt21");
	document.getElementById("AngebotMainInt22SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt22");
	document.getElementById("AngebotMainInt23SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt23");
	document.getElementById("AngebotMainInt24SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt24");
	document.getElementById("AngebotMainInt25SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt25");
	document.getElementById("AngebotMainInt26SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt26");
	document.getElementById("AngebotMainInt27SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt27");
	document.getElementById("AngebotMainInt28SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt28");
	document.getElementById("AngebotMainInt29SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt29");
	document.getElementById("AngebotMainInt30SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt30");
	document.getElementById("AngebotMainInt31SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt31");
	document.getElementById("AngebotMainInt32SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt32");
	document.getElementById("AngebotMainInt33SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt33");
	document.getElementById("AngebotMainInt34SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt34");
	document.getElementById("AngebotMainInt35SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt35");
	document.getElementById("AngebotMainInt36SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt36");
	document.getElementById("AngebotMainInt37SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt37");
	document.getElementById("AngebotMainInt38SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt38");
	document.getElementById("AngebotMainInt39SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt39");
	document.getElementById("AngebotMainInt40SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt40");
	
	document.getElementById("AngebotMainFloat1SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat1");
	document.getElementById("AngebotMainFloat2SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat2");
	document.getElementById("AngebotMainFloat3SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat3");
	document.getElementById("AngebotMainFloat4SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat4");
	document.getElementById("AngebotMainFloat5SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat5");
	document.getElementById("AngebotMainFloat6SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat6");
	document.getElementById("AngebotMainFloat7SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat7");
	document.getElementById("AngebotMainFloat8SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat8");
	document.getElementById("AngebotMainFloat9SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat9");
	document.getElementById("AngebotMainFloat10SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat10");
	document.getElementById("AngebotMainFloat11SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat11");
	document.getElementById("AngebotMainFloat12SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat12");
	document.getElementById("AngebotMainFloat13SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat13");
	document.getElementById("AngebotMainFloat14SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat14");
	document.getElementById("AngebotMainFloat15SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat15");
	document.getElementById("AngebotMainFloat16SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat16");
	document.getElementById("AngebotMainFloat17SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat17");
	document.getElementById("AngebotMainFloat18SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat18");
	document.getElementById("AngebotMainFloat19SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat19");
	document.getElementById("AngebotMainFloat20SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat20");
	document.getElementById("AngebotMainFloat21SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat21");
	document.getElementById("AngebotMainFloat22SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat22");
	document.getElementById("AngebotMainFloat23SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat23");
	document.getElementById("AngebotMainFloat24SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat24");
	document.getElementById("AngebotMainFloat25SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat25");
	document.getElementById("AngebotMainFloat26SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat26");
	document.getElementById("AngebotMainFloat27SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat27");
	document.getElementById("AngebotMainFloat28SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat28");
	document.getElementById("AngebotMainFloat29SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat29");
	document.getElementById("AngebotMainFloat30SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat30");
	document.getElementById("AngebotMainFloat31SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat31");
	document.getElementById("AngebotMainFloat32SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat32");
	document.getElementById("AngebotMainFloat33SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat33");
	document.getElementById("AngebotMainFloat34SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat34");
	document.getElementById("AngebotMainFloat35SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat35");
	document.getElementById("AngebotMainFloat36SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat36");
	document.getElementById("AngebotMainFloat37SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat37");
	document.getElementById("AngebotMainFloat38SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat38");
	document.getElementById("AngebotMainFloat39SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat39");
	document.getElementById("AngebotMainFloat40SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat40");

	document.getElementById("AngebotMainBIT1SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT1");
	document.getElementById("AngebotMainBIT2SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT2");
	document.getElementById("AngebotMainBIT3SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT3");
	document.getElementById("AngebotMainBIT4SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT4");
	document.getElementById("AngebotMainBIT5SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT5");
	document.getElementById("AngebotMainBIT6SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT6");
	document.getElementById("AngebotMainBIT7SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT7");
	document.getElementById("AngebotMainBIT8SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT8");
	document.getElementById("AngebotMainBIT9SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT9");
	document.getElementById("AngebotMainBIT10SearchLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT10");

		
	

	document.getElementById("prIDXModalLabel").innerHTML = getAngebotMainAttributName("prIDX");
	document.getElementById("frIDXModalLabel").innerHTML = getAngebotMainAttributName("frIDX");
	document.getElementById("Datum1ModalLabel").innerHTML = getAngebotMainAttributName("Datum1");
	document.getElementById("Datum2ModalLabel").innerHTML = getAngebotMainAttributName("Datum2");
	document.getElementById("Datum3ModalLabel").innerHTML = getAngebotMainAttributName("Datum3");
	document.getElementById("Datum4ModalLabel").innerHTML = getAngebotMainAttributName("Datum4");
	document.getElementById("StatusModalLabel").innerHTML = getAngebotMainAttributName("Status");
	
	document.getElementById("AngebotMainString1ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString1");
	document.getElementById("AngebotMainString2ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString2");
	document.getElementById("AngebotMainString3ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString3");
	document.getElementById("AngebotMainString4ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString4");
	document.getElementById("AngebotMainString5ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString5");
	document.getElementById("AngebotMainString6ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString6");
	document.getElementById("AngebotMainString7ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString7");
	document.getElementById("AngebotMainString8ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString8");
	document.getElementById("AngebotMainString9ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString9");
	document.getElementById("AngebotMainString10ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString10");
	document.getElementById("AngebotMainString11ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString11");
	document.getElementById("AngebotMainString12ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString12");
	document.getElementById("AngebotMainString13ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString13");
	document.getElementById("AngebotMainString14ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString14");
	document.getElementById("AngebotMainString15ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString15");
	document.getElementById("AngebotMainString16ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString16");
	document.getElementById("AngebotMainString17ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString17");
	document.getElementById("AngebotMainString18ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString18");
	document.getElementById("AngebotMainString19ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString19");
	document.getElementById("AngebotMainString20ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString20");
	document.getElementById("AngebotMainString21ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString21");
	document.getElementById("AngebotMainString22ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString22");
	document.getElementById("AngebotMainString23ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString23");
	document.getElementById("AngebotMainString24ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString24");
	document.getElementById("AngebotMainString25ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString25");
	document.getElementById("AngebotMainString26ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString26");
	document.getElementById("AngebotMainString27ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString27");
	document.getElementById("AngebotMainString28ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString28");
	document.getElementById("AngebotMainString29ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString29");
	document.getElementById("AngebotMainString30ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString30");
	document.getElementById("AngebotMainString31ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString31");
	document.getElementById("AngebotMainString32ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString32");
	document.getElementById("AngebotMainString33ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString33");
	document.getElementById("AngebotMainString34ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString34");
	document.getElementById("AngebotMainString35ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString35");
	document.getElementById("AngebotMainString36ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString36");
	document.getElementById("AngebotMainString37ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString37");
	document.getElementById("AngebotMainString38ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString38");
	document.getElementById("AngebotMainString39ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString39");
	document.getElementById("AngebotMainString40ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString40");
	document.getElementById("AngebotMainString41ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString41");
	document.getElementById("AngebotMainString42ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString42");
	document.getElementById("AngebotMainString43ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString43");
	document.getElementById("AngebotMainString44ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString44");
	document.getElementById("AngebotMainString45ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString45");
	document.getElementById("AngebotMainString46ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString46");
	document.getElementById("AngebotMainString47ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString47");
	document.getElementById("AngebotMainString48ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString48");
	document.getElementById("AngebotMainString49ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString49");
	document.getElementById("AngebotMainString50ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainString50");
	
	document.getElementById("AngebotMainInt1ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt1");
	document.getElementById("AngebotMainInt2ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt2");
	document.getElementById("AngebotMainInt3ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt3");
	document.getElementById("AngebotMainInt4ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt4");
	document.getElementById("AngebotMainInt5ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt5");
	document.getElementById("AngebotMainInt6ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt6");
	document.getElementById("AngebotMainInt7ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt7");
	document.getElementById("AngebotMainInt8ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt8");
	document.getElementById("AngebotMainInt9ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt9");
	document.getElementById("AngebotMainInt10ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt10");
	document.getElementById("AngebotMainInt11ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt11");
	document.getElementById("AngebotMainInt12ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt12");
	document.getElementById("AngebotMainInt13ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt13");
	document.getElementById("AngebotMainInt14ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt14");
	document.getElementById("AngebotMainInt15ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt15");
	document.getElementById("AngebotMainInt16ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt16");
	document.getElementById("AngebotMainInt17ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt17");
	document.getElementById("AngebotMainInt18ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt18");
	document.getElementById("AngebotMainInt19ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt19");
	document.getElementById("AngebotMainInt20ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt20");
	document.getElementById("AngebotMainInt21ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt21");
	document.getElementById("AngebotMainInt22ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt22");
	document.getElementById("AngebotMainInt23ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt23");
	document.getElementById("AngebotMainInt24ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt24");
	document.getElementById("AngebotMainInt25ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt25");
	document.getElementById("AngebotMainInt26ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt26");
	document.getElementById("AngebotMainInt27ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt27");
	document.getElementById("AngebotMainInt28ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt28");
	document.getElementById("AngebotMainInt29ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt29");
	document.getElementById("AngebotMainInt30ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt30");
	document.getElementById("AngebotMainInt31ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt31");
	document.getElementById("AngebotMainInt32ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt32");
	document.getElementById("AngebotMainInt33ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt33");
	document.getElementById("AngebotMainInt34ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt34");
	document.getElementById("AngebotMainInt35ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt35");
	document.getElementById("AngebotMainInt36ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt36");
	document.getElementById("AngebotMainInt37ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt37");
	document.getElementById("AngebotMainInt38ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt38");
	document.getElementById("AngebotMainInt39ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt39");
	document.getElementById("AngebotMainInt40ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt40");
	
	document.getElementById("AngebotMainFloat1ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat1");
	document.getElementById("AngebotMainFloat2ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat2");
	document.getElementById("AngebotMainFloat3ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat3");
	document.getElementById("AngebotMainFloat4ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat4");
	document.getElementById("AngebotMainFloat5ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat5");
	document.getElementById("AngebotMainFloat6ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat6");
	document.getElementById("AngebotMainFloat7ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat7");
	document.getElementById("AngebotMainFloat8ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat8");
	document.getElementById("AngebotMainFloat9ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat9");
	document.getElementById("AngebotMainFloat10ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat10");
	document.getElementById("AngebotMainFloat11ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat11");
	document.getElementById("AngebotMainFloat12ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat12");
	document.getElementById("AngebotMainFloat13ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat13");
	document.getElementById("AngebotMainFloat14ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat14");
	document.getElementById("AngebotMainFloat15ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat15");
	document.getElementById("AngebotMainFloat16ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat16");
	document.getElementById("AngebotMainFloat17ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat17");
	document.getElementById("AngebotMainFloat18ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat18");
	document.getElementById("AngebotMainFloat19ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat19");
	document.getElementById("AngebotMainFloat20ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat20");
	document.getElementById("AngebotMainFloat21ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat21");
	document.getElementById("AngebotMainFloat22ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat22");
	document.getElementById("AngebotMainFloat23ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat23");
	document.getElementById("AngebotMainFloat24ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat24");
	document.getElementById("AngebotMainFloat25ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat25");
	document.getElementById("AngebotMainFloat26ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat26");
	document.getElementById("AngebotMainFloat27ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat27");
	document.getElementById("AngebotMainFloat28ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat28");
	document.getElementById("AngebotMainFloat29ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat29");
	document.getElementById("AngebotMainFloat30ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat30");
	document.getElementById("AngebotMainFloat31ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat31");
	document.getElementById("AngebotMainFloat32ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat32");
	document.getElementById("AngebotMainFloat33ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat33");
	document.getElementById("AngebotMainFloat34ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat34");
	document.getElementById("AngebotMainFloat35ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat35");
	document.getElementById("AngebotMainFloat36ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat36");
	document.getElementById("AngebotMainFloat37ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat37");
	document.getElementById("AngebotMainFloat38ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat38");
	document.getElementById("AngebotMainFloat39ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat39");
	document.getElementById("AngebotMainFloat40ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainFloat40");

	document.getElementById("AngebotMainBIT1ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT1");
	document.getElementById("AngebotMainBIT2ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT2");
	document.getElementById("AngebotMainBIT3ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT3");
	document.getElementById("AngebotMainBIT4ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT4");
	document.getElementById("AngebotMainBIT5ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT5");
	document.getElementById("AngebotMainBIT6ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT6");
	document.getElementById("AngebotMainBIT7ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT7");
	document.getElementById("AngebotMainBIT8ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT8");
	document.getElementById("AngebotMainBIT9ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT9");
	document.getElementById("AngebotMainBIT10ModalLabel").innerHTML = getAngebotMainAttributName("AngebotMainBIT10");
	
	document.getElementById("AngebotMainString16NewLabel").innerHTML = getAngebotMainAttributName("AngebotMainString16");
	document.getElementById("AngebotMainInt3NewLabel").innerHTML = getAngebotMainAttributName("AngebotMainInt3");
	


	hideLoadingDiv();
	if(globalIDX>0) searchAngebotMain();
	else searchAngebotAktiv();
}

function searchAngebotAktiv(){
	var sql =   "SELECT *, "+
				"CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,"+
				"CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,"+
				"CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,"+
				"CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4 "+
				"FROM laaver.Angebot_Main AS mainTable "+
				"WHERE mainTable.Status=9 AND CURDATE() BETWEEN mainTable.Datum3 AND mainTable.Datum4 ORDER BY mainTable.Datum3 DESC ";
	$.ajax({
        type: "POST",
        url: "/General_Select",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        cache: false,
        data: {
			SQL_TXT: escape(sql),
		},
        success: function (response) {
			AngebotMainArr = new Array();
			if (response.results && Array.isArray(response.results)) {				
                response.results.forEach(function (item) {
					let obj = {};
					for (let key in item) {
						let val = item[key];

						// 1. BIT 类型字段：Buffer 转 0/1
						if (val && typeof val === 'object' && val.type === 'Buffer' && Array.isArray(val.data)) {
							obj[key] = val.data[0] ? 1 : 0;
						}

						// 2. 包含 "Datum" 的字段
						else if (key.includes("Datum")) {
							if (val === null || val === undefined) {
								obj[key] = ""; // null 或 undefined → 空字符串
							} else {
								try {
									obj[key] = val.toString().substring(0, 10); // 取 YYYY-MM-DD
								} catch (e) {
									obj[key] = ""; // 容错
								}
							}
						}

						// 3. 其他字段：正常赋值
						else {
							obj[key] = val;
						}
					}
					AngebotMainArr.push(obj);
				});
				
				showAngebotMain();
            }
        },
        error: function (xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });  
}

function searchAngebotMain(){
   showLoadingDiv();
   document.getElementById('ErgebnisSpan').innerHTML = 0;
   document.getElementById('tableDiv').innerHTML = "";
   document.getElementById('button_add_vat').style.display = "none";

	
var prIDX=0,frIDX=0,Datum1_1="",Datum2_1="",Datum3_1="",Datum4_1="",Datum1_2="",Datum2_2="",Datum3_2="",Datum4_2="",Status=0;
	var AngebotMainString1="",AngebotMainString2="",AngebotMainString3="",AngebotMainString4="",AngebotMainString5="",
		AngebotMainString6="",AngebotMainString7="",AngebotMainString8="",AngebotMainString9="",AngebotMainString10="",
		AngebotMainString11="",AngebotMainString12="",AngebotMainString13="",AngebotMainString14="",AngebotMainString15="",
		AngebotMainString16="",AngebotMainString17=0,AngebotMainString18=0,AngebotMainString19=0,AngebotMainString20="",
		AngebotMainString21="",AngebotMainString22="",AngebotMainString23="",AngebotMainString24="",AngebotMainString25="",
		AngebotMainString26="",AngebotMainString27="",AngebotMainString28="",AngebotMainString29="",AngebotMainString30="",
		AngebotMainString31="",AngebotMainString32="",AngebotMainString33="",AngebotMainString34="",AngebotMainString35="",
		AngebotMainString36="",AngebotMainString37="",AngebotMainString38="",AngebotMainString39="",AngebotMainString40="",
		AngebotMainString41="",AngebotMainString42="",AngebotMainString43="",AngebotMainString44="",AngebotMainString45="",
		AngebotMainString46="",AngebotMainString47="",AngebotMainString48="",AngebotMainString49="",AngebotMainString50="",
		AngebotMainInt1=0,AngebotMainInt2=0,AngebotMainInt3=0,AngebotMainInt4=0,AngebotMainInt5=0,
		AngebotMainInt6=0,AngebotMainInt7=0,AngebotMainInt8=0,AngebotMainInt9=0,AngebotMainInt10=0,
		AngebotMainInt11=0,AngebotMainInt12=0,AngebotMainInt13=0,AngebotMainInt14=0,AngebotMainInt15=0,
		AngebotMainInt16=0,AngebotMainInt17=0,AngebotMainInt18=0,AngebotMainInt19=0,AngebotMainInt20=0,
		AngebotMainInt21=0,AngebotMainInt22=0,AngebotMainInt23=0,AngebotMainInt24=0,AngebotMainInt25=0,
		AngebotMainInt26=0,AngebotMainInt27=0,AngebotMainInt28=0,AngebotMainInt29=0,AngebotMainInt30=0,
		AngebotMainInt31=0,AngebotMainInt32=0,AngebotMainInt33=0,AngebotMainInt34=0,AngebotMainInt35=0,
		AngebotMainInt36=0,AngebotMainInt37=0,AngebotMainInt38=0,AngebotMainInt39=0,AngebotMainInt40=0,
		AngebotMainFloat1=0,AngebotMainFloat2=0,AngebotMainFloat3=0,AngebotMainFloat4=0,AngebotMainFloat5=0,
		AngebotMainFloat6=0,AngebotMainFloat7=0,AngebotMainFloat8=0,AngebotMainFloat9=0,AngebotMainFloat10=0,
		AngebotMainFloat11=0,AngebotMainFloat12=0,AngebotMainFloat13=0,AngebotMainFloat14=0,AngebotMainFloat15=0,
		AngebotMainFloat16=0,AngebotMainFloat17=0,AngebotMainFloat18=0,AngebotMainFloat19=0,AngebotMainFloat20=0,
		AngebotMainFloat21=0,AngebotMainFloat22=0,AngebotMainFloat23=0,AngebotMainFloat24=0,AngebotMainFloat25=0,
		AngebotMainFloat26=0,AngebotMainFloat27=0,AngebotMainFloat28=0,AngebotMainFloat29=0,AngebotMainFloat30=0,
		AngebotMainFloat31=0,AngebotMainFloat32=0,AngebotMainFloat33=0,AngebotMainFloat34=0,AngebotMainFloat35=0,
		AngebotMainFloat36=0,AngebotMainFloat37=0,AngebotMainFloat38=0,AngebotMainFloat39=0,AngebotMainFloat40=0,
		AngebotMainBIT1=0,AngebotMainBIT2=0,AngebotMainBIT3=0,AngebotMainBIT4=0,AngebotMainBIT5=0,
		AngebotMainBIT6=0,AngebotMainBIT7=0,AngebotMainBIT8=0,AngebotMainBIT9=0,AngebotMainBIT10=0;


	if(document.getElementById("prIDXSearch").value!="")    prIDX=parseInt(document.getElementById("prIDXSearch").value);
	if(document.getElementById("frIDXSearch").value!="")    frIDX=parseInt(document.getElementById("frIDXSearch").value);  
	if(globalIDX>0) prIDX = parseInt(globalIDX);
	Datum1_1=escape(escape(document.getElementById("Datum1_1Search").value));
	Datum2_1=escape(escape(document.getElementById("Datum2_1Search").value));
	Datum3_1=escape(escape(document.getElementById("Datum3_1Search").value));
	Datum4_1=escape(escape(document.getElementById("Datum4_1Search").value));
	Datum1_2=escape(escape(document.getElementById("Datum1_2Search").value));
	Datum2_2=escape(escape(document.getElementById("Datum2_2Search").value));
	Datum3_2=escape(escape(document.getElementById("Datum3_2Search").value));
	Datum4_2=escape(escape(document.getElementById("Datum4_2Search").value));
	Status=parseInt(document.getElementById("StatusSearch").value);
		
	AngebotMainString1 = escape(escape(document.getElementById("AngebotMainString1Search").value));
	AngebotMainString2 = escape(escape(document.getElementById("AngebotMainString2Search").value));
	AngebotMainString3 = escape(escape(document.getElementById("AngebotMainString3Search").value));
	AngebotMainString4 = escape(escape(document.getElementById("AngebotMainString4Search").value));
	AngebotMainString5 = escape(escape(document.getElementById("AngebotMainString5Search").value));
	AngebotMainString6 = escape(escape(document.getElementById("AngebotMainString6Search").value));
	AngebotMainString7 = escape(escape(document.getElementById("AngebotMainString7Search").value));
	AngebotMainString8 = escape(escape(document.getElementById("AngebotMainString8Search").value));
	AngebotMainString9 = escape(escape(document.getElementById("AngebotMainString9Search").value));
	AngebotMainString10 = escape(escape(document.getElementById("AngebotMainString10Search").value));
	AngebotMainString11 = escape(escape(document.getElementById("AngebotMainString11Search").value));
	AngebotMainString12 = escape(escape(document.getElementById("AngebotMainString12Search").value));
	AngebotMainString13 = escape(escape(document.getElementById("AngebotMainString13Search").value));
	AngebotMainString14 = escape(escape(document.getElementById("AngebotMainString14Search").value));
	AngebotMainString15 = escape(escape(document.getElementById("AngebotMainString15Search").value));
	AngebotMainString16 = escape(escape(document.getElementById("AngebotMainString16Search").value));
	AngebotMainString17 = parseInt(document.getElementById("AngebotMainString17Search").value);
	AngebotMainString18 = parseInt(document.getElementById("AngebotMainString18Search").value);
	AngebotMainString19 = parseInt(document.getElementById("AngebotMainString19Search").value);
	AngebotMainString20 = escape(escape(document.getElementById("AngebotMainString20Search").value));
	AngebotMainString21 = escape(escape(document.getElementById("AngebotMainString21Search").value));
	AngebotMainString22 = escape(escape(document.getElementById("AngebotMainString22Search").value));
	AngebotMainString23 = escape(escape(document.getElementById("AngebotMainString23Search").value));
	AngebotMainString24 = escape(escape(document.getElementById("AngebotMainString24Search").value));
	AngebotMainString25 = escape(escape(document.getElementById("AngebotMainString25Search").value));
	AngebotMainString26 = escape(escape(document.getElementById("AngebotMainString26Search").value));
	AngebotMainString27 = escape(escape(document.getElementById("AngebotMainString27Search").value));
	AngebotMainString28 = escape(escape(document.getElementById("AngebotMainString28Search").value));
	AngebotMainString29 = escape(escape(document.getElementById("AngebotMainString29Search").value));
	AngebotMainString30 = escape(escape(document.getElementById("AngebotMainString30Search").value));
	AngebotMainString31 = escape(escape(document.getElementById("AngebotMainString31Search").value));
	AngebotMainString32 = escape(escape(document.getElementById("AngebotMainString32Search").value));
	AngebotMainString33 = escape(escape(document.getElementById("AngebotMainString33Search").value));
	AngebotMainString34 = escape(escape(document.getElementById("AngebotMainString34Search").value));
	AngebotMainString35 = escape(escape(document.getElementById("AngebotMainString35Search").value));
	AngebotMainString36 = escape(escape(document.getElementById("AngebotMainString36Search").value));
	AngebotMainString37 = escape(escape(document.getElementById("AngebotMainString37Search").value));
	AngebotMainString38 = escape(escape(document.getElementById("AngebotMainString38Search").value));
	AngebotMainString39 = escape(escape(document.getElementById("AngebotMainString39Search").value));
	AngebotMainString40 = escape(escape(document.getElementById("AngebotMainString40Search").value));
	AngebotMainString41 = escape(escape(document.getElementById("AngebotMainString41Search").value));
	AngebotMainString42 = escape(escape(document.getElementById("AngebotMainString42Search").value));
	AngebotMainString43 = escape(escape(document.getElementById("AngebotMainString43Search").value));
	AngebotMainString44 = escape(escape(document.getElementById("AngebotMainString44Search").value));
	AngebotMainString45 = escape(escape(document.getElementById("AngebotMainString45Search").value));
	AngebotMainString46 = escape(escape(document.getElementById("AngebotMainString46Search").value));
	AngebotMainString47 = escape(escape(document.getElementById("AngebotMainString47Search").value));
	AngebotMainString48 = escape(escape(document.getElementById("AngebotMainString48Search").value));
	AngebotMainString49 = escape(escape(document.getElementById("AngebotMainString49Search").value));
	AngebotMainString50 = escape(escape(document.getElementById("AngebotMainString50Search").value));

	if(document.getElementById("AngebotMainInt1Search").value!="") AngebotMainInt1 = parseInt(document.getElementById("AngebotMainInt1Search").value);
	if(document.getElementById("AngebotMainInt2Search").value!="") AngebotMainInt2 = parseInt(document.getElementById("AngebotMainInt2Search").value);
	if(document.getElementById("AngebotMainInt3Search").value!="") AngebotMainInt3 = parseInt(document.getElementById("AngebotMainInt3Search").value);
	if(document.getElementById("AngebotMainInt4Search").value!="") AngebotMainInt4 = parseInt(document.getElementById("AngebotMainInt4Search").value);
	if(document.getElementById("AngebotMainInt5Search").value!="") AngebotMainInt5 = parseInt(document.getElementById("AngebotMainInt5Search").value);
	if(document.getElementById("AngebotMainInt6Search").value!="") AngebotMainInt6 = parseInt(document.getElementById("AngebotMainInt6Search").value);
	if(document.getElementById("AngebotMainInt7Search").value!="") AngebotMainInt7 = parseInt(document.getElementById("AngebotMainInt7Search").value);
	if(document.getElementById("AngebotMainInt8Search").value!="") AngebotMainInt8 = parseInt(document.getElementById("AngebotMainInt8Search").value);
	if(document.getElementById("AngebotMainInt9Search").value!="") AngebotMainInt9 = parseInt(document.getElementById("AngebotMainInt9Search").value);
	if(document.getElementById("AngebotMainInt10Search").value!="") AngebotMainInt10 = parseInt(document.getElementById("AngebotMainInt10Search").value);
	if(document.getElementById("AngebotMainInt11Search").value!="") AngebotMainInt11 = parseInt(document.getElementById("AngebotMainInt11Search").value);
	if(document.getElementById("AngebotMainInt12Search").value!="") AngebotMainInt12 = parseInt(document.getElementById("AngebotMainInt12Search").value);
	if(document.getElementById("AngebotMainInt13Search").value!="") AngebotMainInt13 = parseInt(document.getElementById("AngebotMainInt13Search").value);
	if(document.getElementById("AngebotMainInt14Search").value!="") AngebotMainInt14 = parseInt(document.getElementById("AngebotMainInt14Search").value);
	if(document.getElementById("AngebotMainInt15Search").value!="") AngebotMainInt15 = parseInt(document.getElementById("AngebotMainInt15Search").value);
	if(document.getElementById("AngebotMainInt16Search").value!="") AngebotMainInt16 = parseInt(document.getElementById("AngebotMainInt16Search").value);
	if(document.getElementById("AngebotMainInt17Search").value!="") AngebotMainInt17 = parseInt(document.getElementById("AngebotMainInt17Search").value);
	if(document.getElementById("AngebotMainInt18Search").value!="") AngebotMainInt18 = parseInt(document.getElementById("AngebotMainInt18Search").value);
	if(document.getElementById("AngebotMainInt19Search").value!="") AngebotMainInt19 = parseInt(document.getElementById("AngebotMainInt19Search").value);
	if(document.getElementById("AngebotMainInt20Search").value!="") AngebotMainInt20 = parseInt(document.getElementById("AngebotMainInt20Search").value);
	if(document.getElementById("AngebotMainInt21Search").value!="") AngebotMainInt21 = parseInt(document.getElementById("AngebotMainInt21Search").value);
	if(document.getElementById("AngebotMainInt22Search").value!="") AngebotMainInt22 = parseInt(document.getElementById("AngebotMainInt22Search").value);
	if(document.getElementById("AngebotMainInt23Search").value!="") AngebotMainInt23 = parseInt(document.getElementById("AngebotMainInt23Search").value);
	if(document.getElementById("AngebotMainInt24Search").value!="") AngebotMainInt24 = parseInt(document.getElementById("AngebotMainInt24Search").value);
	if(document.getElementById("AngebotMainInt25Search").value!="") AngebotMainInt25 = parseInt(document.getElementById("AngebotMainInt25Search").value);
	if(document.getElementById("AngebotMainInt26Search").value!="") AngebotMainInt26 = parseInt(document.getElementById("AngebotMainInt26Search").value);
	if(document.getElementById("AngebotMainInt27Search").value!="") AngebotMainInt27 = parseInt(document.getElementById("AngebotMainInt27Search").value);
	if(document.getElementById("AngebotMainInt28Search").value!="") AngebotMainInt28 = parseInt(document.getElementById("AngebotMainInt28Search").value);
	if(document.getElementById("AngebotMainInt29Search").value!="") AngebotMainInt29 = parseInt(document.getElementById("AngebotMainInt29Search").value);
	if(document.getElementById("AngebotMainInt30Search").value!="") AngebotMainInt30 = parseInt(document.getElementById("AngebotMainInt30Search").value);
	if(document.getElementById("AngebotMainInt31Search").value!="") AngebotMainInt31 = parseInt(document.getElementById("AngebotMainInt31Search").value);
	if(document.getElementById("AngebotMainInt32Search").value!="") AngebotMainInt32 = parseInt(document.getElementById("AngebotMainInt32Search").value);
	if(document.getElementById("AngebotMainInt33Search").value!="") AngebotMainInt33 = parseInt(document.getElementById("AngebotMainInt33Search").value);
	if(document.getElementById("AngebotMainInt34Search").value!="") AngebotMainInt34 = parseInt(document.getElementById("AngebotMainInt34Search").value);
	if(document.getElementById("AngebotMainInt35Search").value!="") AngebotMainInt35 = parseInt(document.getElementById("AngebotMainInt35Search").value);
	if(document.getElementById("AngebotMainInt36Search").value!="") AngebotMainInt36 = parseInt(document.getElementById("AngebotMainInt36Search").value);
	if(document.getElementById("AngebotMainInt37Search").value!="") AngebotMainInt37 = parseInt(document.getElementById("AngebotMainInt37Search").value);
	if(document.getElementById("AngebotMainInt38Search").value!="") AngebotMainInt38 = parseInt(document.getElementById("AngebotMainInt38Search").value);
	if(document.getElementById("AngebotMainInt39Search").value!="") AngebotMainInt39 = parseInt(document.getElementById("AngebotMainInt39Search").value);
	if(document.getElementById("AngebotMainInt40Search").value!="") AngebotMainInt40 = parseInt(document.getElementById("AngebotMainInt40Search").value);

	if(document.getElementById("AngebotMainFloat1Search").value!="") AngebotMainFloat1 = parseFloat(document.getElementById("AngebotMainFloat1Search").value);
	if(document.getElementById("AngebotMainFloat2Search").value!="") AngebotMainFloat2 = parseFloat(document.getElementById("AngebotMainFloat2Search").value);
	if(document.getElementById("AngebotMainFloat3Search").value!="") AngebotMainFloat3 = parseFloat(document.getElementById("AngebotMainFloat3Search").value);
	if(document.getElementById("AngebotMainFloat4Search").value!="") AngebotMainFloat4 = parseFloat(document.getElementById("AngebotMainFloat4Search").value);
	if(document.getElementById("AngebotMainFloat5Search").value!="") AngebotMainFloat5 = parseFloat(document.getElementById("AngebotMainFloat5Search").value);
	if(document.getElementById("AngebotMainFloat6Search").value!="") AngebotMainFloat6 = parseFloat(document.getElementById("AngebotMainFloat6Search").value);
	if(document.getElementById("AngebotMainFloat7Search").value!="") AngebotMainFloat7 = parseFloat(document.getElementById("AngebotMainFloat7Search").value);
	if(document.getElementById("AngebotMainFloat8Search").value!="") AngebotMainFloat8 = parseFloat(document.getElementById("AngebotMainFloat8Search").value);
	if(document.getElementById("AngebotMainFloat9Search").value!="") AngebotMainFloat9 = parseFloat(document.getElementById("AngebotMainFloat9Search").value);
	if(document.getElementById("AngebotMainFloat10Search").value!="") AngebotMainFloat10 = parseFloat(document.getElementById("AngebotMainFloat10Search").value);
	if(document.getElementById("AngebotMainFloat11Search").value!="") AngebotMainFloat11 = parseFloat(document.getElementById("AngebotMainFloat11Search").value);
	if(document.getElementById("AngebotMainFloat12Search").value!="") AngebotMainFloat12 = parseFloat(document.getElementById("AngebotMainFloat12Search").value);
	if(document.getElementById("AngebotMainFloat13Search").value!="") AngebotMainFloat13 = parseFloat(document.getElementById("AngebotMainFloat13Search").value);
	if(document.getElementById("AngebotMainFloat14Search").value!="") AngebotMainFloat14 = parseFloat(document.getElementById("AngebotMainFloat14Search").value);
	if(document.getElementById("AngebotMainFloat15Search").value!="") AngebotMainFloat15 = parseFloat(document.getElementById("AngebotMainFloat15Search").value);
	if(document.getElementById("AngebotMainFloat16Search").value!="") AngebotMainFloat16 = parseFloat(document.getElementById("AngebotMainFloat16Search").value);
	if(document.getElementById("AngebotMainFloat17Search").value!="") AngebotMainFloat17 = parseFloat(document.getElementById("AngebotMainFloat17Search").value);
	if(document.getElementById("AngebotMainFloat18Search").value!="") AngebotMainFloat18 = parseFloat(document.getElementById("AngebotMainFloat18Search").value);
	if(document.getElementById("AngebotMainFloat19Search").value!="") AngebotMainFloat19 = parseFloat(document.getElementById("AngebotMainFloat19Search").value);
	if(document.getElementById("AngebotMainFloat20Search").value!="") AngebotMainFloat20 = parseFloat(document.getElementById("AngebotMainFloat20Search").value);
	if(document.getElementById("AngebotMainFloat21Search").value!="") AngebotMainFloat21 = parseFloat(document.getElementById("AngebotMainFloat21Search").value);
	if(document.getElementById("AngebotMainFloat22Search").value!="") AngebotMainFloat22 = parseFloat(document.getElementById("AngebotMainFloat22Search").value);
	if(document.getElementById("AngebotMainFloat23Search").value!="") AngebotMainFloat23 = parseFloat(document.getElementById("AngebotMainFloat23Search").value);
	if(document.getElementById("AngebotMainFloat24Search").value!="") AngebotMainFloat24 = parseFloat(document.getElementById("AngebotMainFloat24Search").value);
	if(document.getElementById("AngebotMainFloat25Search").value!="") AngebotMainFloat25 = parseFloat(document.getElementById("AngebotMainFloat25Search").value);
	if(document.getElementById("AngebotMainFloat26Search").value!="") AngebotMainFloat26 = parseFloat(document.getElementById("AngebotMainFloat26Search").value);
	if(document.getElementById("AngebotMainFloat27Search").value!="") AngebotMainFloat27 = parseFloat(document.getElementById("AngebotMainFloat27Search").value);
	if(document.getElementById("AngebotMainFloat28Search").value!="") AngebotMainFloat28 = parseFloat(document.getElementById("AngebotMainFloat28Search").value);
	if(document.getElementById("AngebotMainFloat29Search").value!="") AngebotMainFloat29 = parseFloat(document.getElementById("AngebotMainFloat29Search").value);
	if(document.getElementById("AngebotMainFloat30Search").value!="") AngebotMainFloat30 = parseFloat(document.getElementById("AngebotMainFloat30Search").value);
	if(document.getElementById("AngebotMainFloat31Search").value!="") AngebotMainFloat31 = parseFloat(document.getElementById("AngebotMainFloat31Search").value);
	if(document.getElementById("AngebotMainFloat32Search").value!="") AngebotMainFloat32 = parseFloat(document.getElementById("AngebotMainFloat32Search").value);
	if(document.getElementById("AngebotMainFloat33Search").value!="") AngebotMainFloat33 = parseFloat(document.getElementById("AngebotMainFloat33Search").value);
	if(document.getElementById("AngebotMainFloat34Search").value!="") AngebotMainFloat34 = parseFloat(document.getElementById("AngebotMainFloat34Search").value);
	if(document.getElementById("AngebotMainFloat35Search").value!="") AngebotMainFloat35 = parseFloat(document.getElementById("AngebotMainFloat35Search").value);
	if(document.getElementById("AngebotMainFloat36Search").value!="") AngebotMainFloat36 = parseFloat(document.getElementById("AngebotMainFloat36Search").value);
	if(document.getElementById("AngebotMainFloat37Search").value!="") AngebotMainFloat37 = parseFloat(document.getElementById("AngebotMainFloat37Search").value);
	if(document.getElementById("AngebotMainFloat38Search").value!="") AngebotMainFloat38 = parseFloat(document.getElementById("AngebotMainFloat38Search").value);
	if(document.getElementById("AngebotMainFloat39Search").value!="") AngebotMainFloat39 = parseFloat(document.getElementById("AngebotMainFloat39Search").value);
	if(document.getElementById("AngebotMainFloat40Search").value!="") AngebotMainFloat40 = parseFloat(document.getElementById("AngebotMainFloat40Search").value);

	if(document.getElementById("AngebotMainBIT1Search").checked) AngebotMainBIT1 = 1;
	if(document.getElementById("AngebotMainBIT2Search").checked) AngebotMainBIT2 = 1;
	if(document.getElementById("AngebotMainBIT3Search").checked) AngebotMainBIT3 = 1;
	if(document.getElementById("AngebotMainBIT4Search").checked) AngebotMainBIT4 = 1;
	if(document.getElementById("AngebotMainBIT5Search").checked) AngebotMainBIT5 = 1;
	if(document.getElementById("AngebotMainBIT6Search").checked) AngebotMainBIT6 = 1;
	if(document.getElementById("AngebotMainBIT7Search").checked) AngebotMainBIT7 = 1;
	if(document.getElementById("AngebotMainBIT8Search").checked) AngebotMainBIT8 = 1;
	if(document.getElementById("AngebotMainBIT9Search").checked) AngebotMainBIT9 = 1;
	if(document.getElementById("AngebotMainBIT10Search").checked) AngebotMainBIT10 = 1;

	var sql = "";
	if(prIDX != "") sql += "AND mainTable.prIDX = '" + prIDX + "' ";
	if(frIDX != "") sql += "AND mainTable.frIDX = '" + frIDX + "' ";
	if(Datum1_1 != "") sql += "AND DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') >= '" + Datum1_1 + "' ";
	if(Datum1_2 != "") sql += "AND DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') <= '" + Datum1_2 + "' ";
	if(Datum2_1 != "") sql += "AND DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') >= '" + Datum2_1 + "' ";
	if(Datum2_2 != "") sql += "AND DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') <= '" + Datum2_2 + "' ";
	if(Datum3_1 != "") sql += "AND DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') >= '" + Datum3_1 + "' ";
	if(Datum3_2 != "") sql += "AND DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') <= '" + Datum3_2 + "' ";
	if(Datum4_1 != "") sql += "AND DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') >= '" + Datum4_1 + "' ";
	if(Datum4_2 != "") sql += "AND DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') <= '" + Datum4_2 + "' ";
	if(Status != "") sql += "AND mainTable.Status = '" + Status + "' ";
	
	if(AngebotMainString1!="") sql += "AND mainTable.AngebotMainString1 LIKE '%" + AngebotMainString1 + "%' ";
	if(AngebotMainString2!="") sql += "AND mainTable.AngebotMainString2 LIKE '%" + AngebotMainString2 + "%' ";
	if(AngebotMainString3!="") sql += "AND mainTable.AngebotMainString3 LIKE '%" + AngebotMainString3 + "%' ";
	if(AngebotMainString4!="") sql += "AND mainTable.AngebotMainString4 LIKE '%" + AngebotMainString4 + "%' ";
	if(AngebotMainString5!="") sql += "AND mainTable.AngebotMainString5 LIKE '%" + AngebotMainString5 + "%' ";
	if(AngebotMainString6!="") sql += "AND mainTable.AngebotMainString6 LIKE '%" + AngebotMainString6 + "%' ";
	if(AngebotMainString7!="") sql += "AND mainTable.AngebotMainString7 LIKE '%" + AngebotMainString7 + "%' ";
	if(AngebotMainString8!="") sql += "AND mainTable.AngebotMainString8 LIKE '%" + AngebotMainString8 + "%' ";
	if(AngebotMainString9!="") sql += "AND mainTable.AngebotMainString9 LIKE '%" + AngebotMainString9 + "%' ";
	if(AngebotMainString10!="") sql += "AND mainTable.AngebotMainString10 LIKE '%" + AngebotMainString10 + "%' ";
	if(AngebotMainString11!="") sql += "AND mainTable.AngebotMainString11 LIKE '%" + AngebotMainString11 + "%' ";
	if(AngebotMainString12!="") sql += "AND mainTable.AngebotMainString12 LIKE '%" + AngebotMainString12 + "%' ";
	if(AngebotMainString13!="") sql += "AND mainTable.AngebotMainString13 LIKE '%" + AngebotMainString13 + "%' ";
	if(AngebotMainString14!="") sql += "AND mainTable.AngebotMainString14 LIKE '%" + AngebotMainString14 + "%' ";
	if(AngebotMainString15!="") sql += "AND mainTable.AngebotMainString15 LIKE '%" + AngebotMainString15 + "%' ";
	if(AngebotMainString16!="") sql += "AND mainTable.AngebotMainString16 LIKE '%" + AngebotMainString16 + "%' ";
	if(AngebotMainString17!=0) sql += "AND mainTable.AngebotMainString17 = " + AngebotMainString17 + " ";
	if(AngebotMainString18!=0) sql += "AND mainTable.AngebotMainString18 = " + AngebotMainString18 + " ";
	if(AngebotMainString19!=0) sql += "AND mainTable.AngebotMainString19 = " + AngebotMainString19 + " ";
	if(AngebotMainString20!="") sql += "AND mainTable.AngebotMainString20 LIKE '%" + AngebotMainString20 + "%' ";
	if(AngebotMainString21!="") sql += "AND mainTable.AngebotMainString21 LIKE '%" + AngebotMainString21 + "%' ";
	if(AngebotMainString22!="") sql += "AND mainTable.AngebotMainString22 LIKE '%" + AngebotMainString22 + "%' ";
	if(AngebotMainString23!="") sql += "AND mainTable.AngebotMainString23 LIKE '%" + AngebotMainString23 + "%' ";
	if(AngebotMainString24!="") sql += "AND mainTable.AngebotMainString24 LIKE '%" + AngebotMainString24 + "%' ";
	if(AngebotMainString25!="") sql += "AND mainTable.AngebotMainString25 LIKE '%" + AngebotMainString25 + "%' ";
	if(AngebotMainString26!="") sql += "AND mainTable.AngebotMainString26 LIKE '%" + AngebotMainString26 + "%' ";
	if(AngebotMainString27!="") sql += "AND mainTable.AngebotMainString27 LIKE '%" + AngebotMainString27 + "%' ";
	if(AngebotMainString28!="") sql += "AND mainTable.AngebotMainString28 LIKE '%" + AngebotMainString28 + "%' ";
	if(AngebotMainString29!="") sql += "AND mainTable.AngebotMainString29 LIKE '%" + AngebotMainString29 + "%' ";
	if(AngebotMainString30!="") sql += "AND mainTable.AngebotMainString30 LIKE '%" + AngebotMainString30 + "%' ";
	if(AngebotMainString31!="") sql += "AND mainTable.AngebotMainString31 LIKE '%" + AngebotMainString31 + "%' ";
	if(AngebotMainString32!="") sql += "AND mainTable.AngebotMainString32 LIKE '%" + AngebotMainString32 + "%' ";
	if(AngebotMainString33!="") sql += "AND mainTable.AngebotMainString33 LIKE '%" + AngebotMainString33 + "%' ";
	if(AngebotMainString34!="") sql += "AND mainTable.AngebotMainString34 LIKE '%" + AngebotMainString34 + "%' ";
	if(AngebotMainString35!="") sql += "AND mainTable.AngebotMainString35 LIKE '%" + AngebotMainString35 + "%' ";
	if(AngebotMainString36!="") sql += "AND mainTable.AngebotMainString36 LIKE '%" + AngebotMainString36 + "%' ";
	if(AngebotMainString37!="") sql += "AND mainTable.AngebotMainString37 LIKE '%" + AngebotMainString37 + "%' ";
	if(AngebotMainString38!="") sql += "AND mainTable.AngebotMainString38 LIKE '%" + AngebotMainString38 + "%' ";
	if(AngebotMainString39!="") sql += "AND mainTable.AngebotMainString39 LIKE '%" + AngebotMainString39 + "%' ";
	if(AngebotMainString40!="") sql += "AND mainTable.AngebotMainString40 LIKE '%" + AngebotMainString40 + "%' ";
	if(AngebotMainString41!="") sql += "AND mainTable.AngebotMainString41 LIKE '%" + AngebotMainString41 + "%' ";
	if(AngebotMainString42!="") sql += "AND mainTable.AngebotMainString42 LIKE '%" + AngebotMainString42 + "%' ";
	if(AngebotMainString43!="") sql += "AND mainTable.AngebotMainString43 LIKE '%" + AngebotMainString43 + "%' ";
	if(AngebotMainString44!="") sql += "AND mainTable.AngebotMainString44 LIKE '%" + AngebotMainString44 + "%' ";
	if(AngebotMainString45!="") sql += "AND mainTable.AngebotMainString45 LIKE '%" + AngebotMainString45 + "%' ";
	if(AngebotMainString46!="") sql += "AND mainTable.AngebotMainString46 LIKE '%" + AngebotMainString46 + "%' ";
	if(AngebotMainString47!="") sql += "AND mainTable.AngebotMainString47 LIKE '%" + AngebotMainString47 + "%' ";
	if(AngebotMainString48!="") sql += "AND mainTable.AngebotMainString48 LIKE '%" + AngebotMainString48 + "%' ";
	if(AngebotMainString49!="") sql += "AND mainTable.AngebotMainString49 LIKE '%" + AngebotMainString49 + "%' ";
	if(AngebotMainString50!="") sql += "AND mainTable.AngebotMainString50 LIKE '%" + AngebotMainString50 + "%' ";
	
	if(AngebotMainInt1 != 0) sql += "AND mainTable.AngebotMainInt1 = " + AngebotMainInt1 + " ";
	if(AngebotMainInt2 != 0) sql += "AND mainTable.AngebotMainInt2 = " + AngebotMainInt2 + " ";
	if(AngebotMainInt3 != 0) sql += "AND mainTable.AngebotMainInt3 = " + AngebotMainInt3 + " ";
	if(AngebotMainInt4 != 0) sql += "AND mainTable.AngebotMainInt4 = " + AngebotMainInt4 + " ";
	if(AngebotMainInt5 != 0) sql += "AND mainTable.AngebotMainInt5 = " + AngebotMainInt5 + " ";
	if(AngebotMainInt6 != 0) sql += "AND mainTable.AngebotMainInt6 = " + AngebotMainInt6 + " ";
	if(AngebotMainInt7 != 0) sql += "AND mainTable.AngebotMainInt7 = " + AngebotMainInt7 + " ";
	if(AngebotMainInt8 != 0) sql += "AND mainTable.AngebotMainInt8 = " + AngebotMainInt8 + " ";
	if(AngebotMainInt9 != 0) sql += "AND mainTable.AngebotMainInt9 = " + AngebotMainInt9 + " ";
	if(AngebotMainInt10 != 0) sql += "AND mainTable.AngebotMainInt10 = " + AngebotMainInt10 + " ";
	if(AngebotMainInt11 != 0) sql += "AND mainTable.AngebotMainInt11 = " + AngebotMainInt11 + " ";
	if(AngebotMainInt12 != 0) sql += "AND mainTable.AngebotMainInt12 = " + AngebotMainInt12 + " ";
	if(AngebotMainInt13 != 0) sql += "AND mainTable.AngebotMainInt13 = " + AngebotMainInt13 + " ";
	if(AngebotMainInt14 != 0) sql += "AND mainTable.AngebotMainInt14 = " + AngebotMainInt14 + " ";
	if(AngebotMainInt15 != 0) sql += "AND mainTable.AngebotMainInt15 = " + AngebotMainInt15 + " ";
	if(AngebotMainInt16 != 0) sql += "AND mainTable.AngebotMainInt16 = " + AngebotMainInt16 + " ";
	if(AngebotMainInt17 != 0) sql += "AND mainTable.AngebotMainInt17 = " + AngebotMainInt17 + " ";
	if(AngebotMainInt18 != 0) sql += "AND mainTable.AngebotMainInt18 = " + AngebotMainInt18 + " ";
	if(AngebotMainInt19 != 0) sql += "AND mainTable.AngebotMainInt19 = " + AngebotMainInt19 + " ";
	if(AngebotMainInt20 != 0) sql += "AND mainTable.AngebotMainInt20 = " + AngebotMainInt20 + " ";
	if(AngebotMainInt21 != 0) sql += "AND mainTable.AngebotMainInt21 = " + AngebotMainInt21 + " ";
	if(AngebotMainInt22 != 0) sql += "AND mainTable.AngebotMainInt22 = " + AngebotMainInt22 + " ";
	if(AngebotMainInt23 != 0) sql += "AND mainTable.AngebotMainInt23 = " + AngebotMainInt23 + " ";
	if(AngebotMainInt24 != 0) sql += "AND mainTable.AngebotMainInt24 = " + AngebotMainInt24 + " ";
	if(AngebotMainInt25 != 0) sql += "AND mainTable.AngebotMainInt25 = " + AngebotMainInt25 + " ";
	if(AngebotMainInt26 != 0) sql += "AND mainTable.AngebotMainInt26 = " + AngebotMainInt26 + " ";
	if(AngebotMainInt27 != 0) sql += "AND mainTable.AngebotMainInt27 = " + AngebotMainInt27 + " ";
	if(AngebotMainInt28 != 0) sql += "AND mainTable.AngebotMainInt28 = " + AngebotMainInt28 + " ";
	if(AngebotMainInt29 != 0) sql += "AND mainTable.AngebotMainInt29 = " + AngebotMainInt29 + " ";
	if(AngebotMainInt30 != 0) sql += "AND mainTable.AngebotMainInt30 = " + AngebotMainInt30 + " ";
	if(AngebotMainInt31 != 0) sql += "AND mainTable.AngebotMainInt31 = " + AngebotMainInt31 + " ";
	if(AngebotMainInt32 != 0) sql += "AND mainTable.AngebotMainInt32 = " + AngebotMainInt32 + " ";
	if(AngebotMainInt33 != 0) sql += "AND mainTable.AngebotMainInt33 = " + AngebotMainInt33 + " ";
	if(AngebotMainInt34 != 0) sql += "AND mainTable.AngebotMainInt34 = " + AngebotMainInt34 + " ";
	if(AngebotMainInt35 != 0) sql += "AND mainTable.AngebotMainInt35 = " + AngebotMainInt35 + " ";
	if(AngebotMainInt36 != 0) sql += "AND mainTable.AngebotMainInt36 = " + AngebotMainInt36 + " ";
	if(AngebotMainInt37 != 0) sql += "AND mainTable.AngebotMainInt37 = " + AngebotMainInt37 + " ";
	if(AngebotMainInt38 != 0) sql += "AND mainTable.AngebotMainInt38 = " + AngebotMainInt38 + " ";
	if(AngebotMainInt39 != 0) sql += "AND mainTable.AngebotMainInt39 = " + AngebotMainInt39 + " ";
	if(AngebotMainInt40 != 0) sql += "AND mainTable.AngebotMainInt40 = " + AngebotMainInt40 + " ";
	
	if(AngebotMainFloat1 != 0) sql += "AND mainTable.AngebotMainFloat1 = " + AngebotMainFloat1 + " ";
	if(AngebotMainFloat2 != 0) sql += "AND mainTable.AngebotMainFloat2 = " + AngebotMainFloat2 + " ";
	if(AngebotMainFloat3 != 0) sql += "AND mainTable.AngebotMainFloat3 = " + AngebotMainFloat3 + " ";
	if(AngebotMainFloat4 != 0) sql += "AND mainTable.AngebotMainFloat4 = " + AngebotMainFloat4 + " ";
	if(AngebotMainFloat5 != 0) sql += "AND mainTable.AngebotMainFloat5 = " + AngebotMainFloat5 + " ";
	if(AngebotMainFloat6 != 0) sql += "AND mainTable.AngebotMainFloat6 = " + AngebotMainFloat6 + " ";
	if(AngebotMainFloat7 != 0) sql += "AND mainTable.AngebotMainFloat7 = " + AngebotMainFloat7 + " ";
	if(AngebotMainFloat8 != 0) sql += "AND mainTable.AngebotMainFloat8 = " + AngebotMainFloat8 + " ";
	if(AngebotMainFloat9 != 0) sql += "AND mainTable.AngebotMainFloat9 = " + AngebotMainFloat9 + " ";
	if(AngebotMainFloat10 != 0) sql += "AND mainTable.AngebotMainFloat10 = " + AngebotMainFloat10 + " ";
	if(AngebotMainFloat11 != 0) sql += "AND mainTable.AngebotMainFloat11 = " + AngebotMainFloat11 + " ";
	if(AngebotMainFloat12 != 0) sql += "AND mainTable.AngebotMainFloat12 = " + AngebotMainFloat12 + " ";
	if(AngebotMainFloat13 != 0) sql += "AND mainTable.AngebotMainFloat13 = " + AngebotMainFloat13 + " ";
	if(AngebotMainFloat14 != 0) sql += "AND mainTable.AngebotMainFloat14 = " + AngebotMainFloat14 + " ";
	if(AngebotMainFloat15 != 0) sql += "AND mainTable.AngebotMainFloat15 = " + AngebotMainFloat15 + " ";
	if(AngebotMainFloat16 != 0) sql += "AND mainTable.AngebotMainFloat16 = " + AngebotMainFloat16 + " ";
	if(AngebotMainFloat17 != 0) sql += "AND mainTable.AngebotMainFloat17 = " + AngebotMainFloat17 + " ";
	if(AngebotMainFloat18 != 0) sql += "AND mainTable.AngebotMainFloat18 = " + AngebotMainFloat18 + " ";
	if(AngebotMainFloat19 != 0) sql += "AND mainTable.AngebotMainFloat19 = " + AngebotMainFloat19 + " ";
	if(AngebotMainFloat20 != 0) sql += "AND mainTable.AngebotMainFloat20 = " + AngebotMainFloat20 + " ";
	if(AngebotMainFloat21 != 0) sql += "AND mainTable.AngebotMainFloat21 = " + AngebotMainFloat21 + " ";
	if(AngebotMainFloat22 != 0) sql += "AND mainTable.AngebotMainFloat22 = " + AngebotMainFloat22 + " ";
	if(AngebotMainFloat23 != 0) sql += "AND mainTable.AngebotMainFloat23 = " + AngebotMainFloat23 + " ";
	if(AngebotMainFloat24 != 0) sql += "AND mainTable.AngebotMainFloat24 = " + AngebotMainFloat24 + " ";
	if(AngebotMainFloat25 != 0) sql += "AND mainTable.AngebotMainFloat25 = " + AngebotMainFloat25 + " ";
	if(AngebotMainFloat26 != 0) sql += "AND mainTable.AngebotMainFloat26 = " + AngebotMainFloat26 + " ";
	if(AngebotMainFloat27 != 0) sql += "AND mainTable.AngebotMainFloat27 = " + AngebotMainFloat27 + " ";
	if(AngebotMainFloat28 != 0) sql += "AND mainTable.AngebotMainFloat28 = " + AngebotMainFloat28 + " ";
	if(AngebotMainFloat29 != 0) sql += "AND mainTable.AngebotMainFloat29 = " + AngebotMainFloat29 + " ";
	if(AngebotMainFloat30 != 0) sql += "AND mainTable.AngebotMainFloat30 = " + AngebotMainFloat30 + " ";
	if(AngebotMainFloat31 != 0) sql += "AND mainTable.AngebotMainFloat31 = " + AngebotMainFloat31 + " ";
	if(AngebotMainFloat32 != 0) sql += "AND mainTable.AngebotMainFloat32 = " + AngebotMainFloat32 + " ";
	if(AngebotMainFloat33 != 0) sql += "AND mainTable.AngebotMainFloat33 = " + AngebotMainFloat33 + " ";
	if(AngebotMainFloat34 != 0) sql += "AND mainTable.AngebotMainFloat34 = " + AngebotMainFloat34 + " ";
	if(AngebotMainFloat35 != 0) sql += "AND mainTable.AngebotMainFloat35 = " + AngebotMainFloat35 + " ";
	if(AngebotMainFloat36 != 0) sql += "AND mainTable.AngebotMainFloat36 = " + AngebotMainFloat36 + " ";
	if(AngebotMainFloat37 != 0) sql += "AND mainTable.AngebotMainFloat37 = " + AngebotMainFloat37 + " ";
	if(AngebotMainFloat38 != 0) sql += "AND mainTable.AngebotMainFloat38 = " + AngebotMainFloat38 + " ";
	if(AngebotMainFloat39 != 0) sql += "AND mainTable.AngebotMainFloat39 = " + AngebotMainFloat39 + " ";
	if(AngebotMainFloat40 != 0) sql += "AND mainTable.AngebotMainFloat40 = " + AngebotMainFloat40 + " ";

	if(AngebotMainBIT1 != 0) sql += "AND mainTable.AngebotMainBIT1 = " + AngebotMainBIT1 + " ";
	if(AngebotMainBIT2 != 0) sql += "AND mainTable.AngebotMainBIT2 = " + AngebotMainBIT2 + " ";
	if(AngebotMainBIT3 != 0) sql += "AND mainTable.AngebotMainBIT3 = " + AngebotMainBIT3 + " ";
	if(AngebotMainBIT4 != 0) sql += "AND mainTable.AngebotMainBIT4 = " + AngebotMainBIT4 + " ";
	if(AngebotMainBIT5 != 0) sql += "AND mainTable.AngebotMainBIT5 = " + AngebotMainBIT5 + " ";
	if(AngebotMainBIT6 != 0) sql += "AND mainTable.AngebotMainBIT6 = " + AngebotMainBIT6 + " ";
	if(AngebotMainBIT7 != 0) sql += "AND mainTable.AngebotMainBIT7 = " + AngebotMainBIT7 + " ";
	if(AngebotMainBIT8 != 0) sql += "AND mainTable.AngebotMainBIT8 = " + AngebotMainBIT8 + " ";
	if(AngebotMainBIT9 != 0) sql += "AND mainTable.AngebotMainBIT9 = " + AngebotMainBIT9 + " ";
	if(AngebotMainBIT10 != 0) sql += "AND mainTable.AngebotMainBIT10 = " + AngebotMainBIT10 + " ";

	
	if(sql!="") sql = "WHERE "+sql.substring(3);
	sql = "SELECT mainTable.* FROM laaver.Angebot_Main AS mainTable "+sql+" ORDER BY mainTable.Datum3 DESC  LIMIT 500";


	$.ajax({
        type: "POST",
        url: "/General_Select",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        cache: false,
        data: {
			SQL_TXT: escape(sql),
		},
        success: function (response) {
			AngebotMainArr = new Array();
			if (response.results && Array.isArray(response.results)) {				
                response.results.forEach(function (item) {
					let obj = {};
					for (let key in item) {
						let val = item[key];

						// 1. BIT 类型字段：Buffer 转 0/1
						if (val && typeof val === 'object' && val.type === 'Buffer' && Array.isArray(val.data)) {
							obj[key] = val.data[0] ? 1 : 0;
						}

						// 2. 包含 "Datum" 的字段
						else if (key.includes("Datum")) {
							if (val === null || val === undefined) {
								obj[key] = ""; // null 或 undefined → 空字符串
							} else {
								try {
									obj[key] = val.toString().substring(0, 10); // 取 YYYY-MM-DD
								} catch (e) {
									obj[key] = ""; // 容错
								}
							}
						}

						// 3. 其他字段：正常赋值
						else {
							obj[key] = val;
						}
					}
					AngebotMainArr.push(obj);
				});				
				showAngebotMain();			
            }
        },
        error: function (xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });  
}

function showAngebotMain(){
	var txt="";
	showAngebotMainAttributArr.sort(compare('indexB'));
	txt += "<table class='table table-separate table-head-custom table-checkable' id='kt_datatable'><thead><tr>";
	for(var i=0; i<showAngebotMainAttributArr.length; i++){
	  if(showAngebotMainAttributArr[i].indexB>0){
		 txt += "<th>"+unescape(showAngebotMainAttributArr[i].lang[langNum])+"</th>";
	  }
	}
	txt += "</tr></thead><tbody>";

	for(var i=0; i<AngebotMainArr.length; i++){
	  txt += "<tr>";
	  for(var j=0; j<showAngebotMainAttributArr.length; j++){
		 eval("if(showAngebotMainAttributArr[j].indexB>0){"+
			"if(showAngebotMainAttributArr[j].indexB==1) txt += '<td><a href=\"javascript:showAngebotMainModal("+i+")\">AN'+parseInt(10000+parseInt(AngebotMainArr[i]."+showAngebotMainAttributArr[j].Attribut+"))+'</a></td>';"+
			"else if(showAngebotMainAttributArr[j].Attribut=='AngebotMainString17'){ txt += '<td>'+getAngebotMainString17Value(AngebotMainArr[i].AngebotMainString17)+'</td>';}"+
			"else if(showAngebotMainAttributArr[j].Attribut=='AngebotMainString18'){ txt += '<td>'+getAngebotMainString18Value(AngebotMainArr[i].AngebotMainString18)+'</td>';}"+
			"else if(showAngebotMainAttributArr[j].Attribut=='AngebotMainString19'){ txt += '<td>'+getAngebotMainString19Value(AngebotMainArr[i].AngebotMainString19)+'</td>';}"+
			"else if(showAngebotMainAttributArr[j].Attribut=='AngebotMainInt3'){ txt += '<td>'+getAngebotMainInt3Value(AngebotMainArr[i].AngebotMainInt3)+'</td>';}"+
			"else if(showAngebotMainAttributArr[j].Attribut=='AngebotMainInt1'){ txt += '<td>'+getAngebotMainInt1Value(AngebotMainArr[i].AngebotMainInt1)+'</td>';}"+
			"else if(showAngebotMainAttributArr[j].Attribut=='Status'){ txt += '<td>';"+
			"for(var m=0;m<AngebotMainStatusArr.length;m++)if(AngebotMainStatusArr[m][4]==AngebotMainArr[i].Status)txt+=unescape(AngebotMainStatusArr[m][langNum]); txt += '</td>';}"+
			"else if(showAngebotMainAttributArr[j].Type=='BIT') txt += '<td>'+(parseInt(AngebotMainArr[i]."+showAngebotMainAttributArr[j].Attribut+")==1?'Yes':'No')+'</td>';"+
			"else if(parseInt(AngebotMainArr[i]."+showAngebotMainAttributArr[j].Attribut+")==0) txt += '<td> </td>';"+
			"else txt += '<td>'+unescape(AngebotMainArr[i]."+showAngebotMainAttributArr[j].Attribut+")+'</td>'"+
			"}");
	  }
	  txt += "</tr>";
	}
	txt += "</tbody></table>";

	document.getElementById("tableDiv").innerHTML = txt;
	document.getElementById('ErgebnisSpan').innerHTML = AngebotMainArr.length;	
	hideLoadingDiv();

	if(globalIDX>0){
		showAngebotMainModal(0);
		globalIDX=0;
	}
}

function showAngebotMainModal(idx){
   //document.getElementById('uploadFormDiv').style.display = "none";
   ProduktAngebotListeArr = new Array();
   
   showAngebotMainAttributArr.sort(compare('indexC'));
   for(var i=0; i<showAngebotMainAttributArr.length; i++){
      if(showAngebotMainAttributArr[i].indexC>0){
         eval("if(document.getElementById('"+showAngebotMainAttributArr[i].Attribut+"ModalDiv'))document.getElementById('"+showAngebotMainAttributArr[i].Attribut+"ModalDiv').style.display='block';");
      }
   }

   for(var i=0; i<AngebotMainArr.length; i++){
      if(i==idx){
			mainIDX = parseInt(AngebotMainArr[i].prIDX);
			mainStatus = parseInt(AngebotMainArr[i].Status);
			oneAngebotMain = AngebotMainArr[i];
		  
            if(document.getElementById("prIDXModal"))
               document.getElementById("prIDXModal").value="AN"+parseInt(10000+(AngebotMainArr[i].prIDX));
            if(document.getElementById("frIDXModal"))
               document.getElementById("frIDXModal").value=parseInt(AngebotMainArr[i].frIDX);
            if(document.getElementById("Datum1Modal"))
               document.getElementById("Datum1Modal").value=unescape(AngebotMainArr[i].Datum1);
            if(document.getElementById("Datum2Modal"))
               document.getElementById("Datum2Modal").value=unescape(AngebotMainArr[i].Datum2);
            if(document.getElementById("Datum3Modal"))
               document.getElementById("Datum3Modal").value=unescape(AngebotMainArr[i].Datum3);
            if(document.getElementById("Datum4Modal"))
               document.getElementById("Datum4Modal").value=unescape(AngebotMainArr[i].Datum4);
            if(document.getElementById("AngebotMainString10Modal"))
               document.getElementById("AngebotMainString10Modal").value=unescape(AngebotMainArr[i].AngebotMainString10);
            if(document.getElementById("AngebotMainString11Modal"))
               document.getElementById("AngebotMainString11Modal").value=unescape(AngebotMainArr[i].AngebotMainString11);
            if(document.getElementById("AngebotMainString12Modal"))
               document.getElementById("AngebotMainString12Modal").value=unescape(AngebotMainArr[i].AngebotMainString12);
            if(document.getElementById("AngebotMainString13Modal"))
               document.getElementById("AngebotMainString13Modal").value=unescape(AngebotMainArr[i].AngebotMainString13);
            if(document.getElementById("AngebotMainInt1Modal")) selectElement("AngebotMainInt1Modal",parseInt(AngebotMainArr[i].AngebotMainInt1));
            if(document.getElementById("AngebotMainInt2Modal"))
               document.getElementById("AngebotMainInt2Modal").value=parseInt(AngebotMainArr[i].AngebotMainInt2);
            if(document.getElementById("AngebotMainInt3Modal")) selectElement("AngebotMainInt3Modal",parseInt(AngebotMainArr[i].AngebotMainInt3));
            if(document.getElementById("AngebotMainInt4Modal"))
               document.getElementById("AngebotMainInt4Modal").value=parseInt(AngebotMainArr[i].AngebotMainInt4);
            if(document.getElementById("AngebotMainFloat1Modal"))
               document.getElementById("AngebotMainFloat1Modal").value=parseFloat(AngebotMainArr[i].AngebotMainFloat1);
            if(document.getElementById("AngebotMainFloat2Modal"))
               document.getElementById("AngebotMainFloat2Modal").value=parseFloat(AngebotMainArr[i].AngebotMainFloat2);
            if(document.getElementById("AngebotMainFloat3Modal"))
               document.getElementById("AngebotMainFloat3Modal").value=parseFloat(AngebotMainArr[i].AngebotMainFloat3);
            if(document.getElementById("AngebotMainFloat4Modal"))
               document.getElementById("AngebotMainFloat4Modal").value=parseFloat(AngebotMainArr[i].AngebotMainFloat4);
            if(document.getElementById("AngebotMainBIT1Modal"))
               if(AngebotMainArr[i].AngebotMainBIT1==1)
               document.getElementById("AngebotMainBIT1Modal").checked = "checked";
            if(document.getElementById("AngebotMainBIT2Modal"))
               if(AngebotMainArr[i].AngebotMainBIT2==1)
               document.getElementById("AngebotMainBIT2Modal").checked = "checked";
            if(document.getElementById("AngebotMainString14Modal"))
               document.getElementById("AngebotMainString14Modal").value=unescape(AngebotMainArr[i].AngebotMainString14);
            if(document.getElementById("AngebotMainString15Modal"))
               document.getElementById("AngebotMainString15Modal").value=unescape(AngebotMainArr[i].AngebotMainString15);
            if(document.getElementById("AngebotMainString16Modal"))
               document.getElementById("AngebotMainString16Modal").value=unescape(AngebotMainArr[i].AngebotMainString16);
            if(document.getElementById("AngebotMainString17Modal")) selectElement("AngebotMainString17Modal",unescape(AngebotMainArr[i].AngebotMainString17));
            if(document.getElementById("AngebotMainString18Modal")) selectElement("AngebotMainString18Modal",unescape(AngebotMainArr[i].AngebotMainString18));
            if(document.getElementById("AngebotMainString19Modal")) selectElement("AngebotMainString19Modal",unescape(AngebotMainArr[i].AngebotMainString19));
            if(document.getElementById("AngebotMainString20Modal"))
               document.getElementById("AngebotMainString20Modal").value=unescape(AngebotMainArr[i].AngebotMainString20);
            if(document.getElementById("AngebotMainString21Modal"))
               document.getElementById("AngebotMainString21Modal").value=unescape(AngebotMainArr[i].AngebotMainString21);
            if(document.getElementById("AngebotMainString22Modal"))
               document.getElementById("AngebotMainString22Modal").value=unescape(AngebotMainArr[i].AngebotMainString22);
            if(document.getElementById("AngebotMainString23Modal"))
               document.getElementById("AngebotMainString23Modal").value=unescape(AngebotMainArr[i].AngebotMainString23);
            if(document.getElementById("AngebotMainString24Modal"))
               document.getElementById("AngebotMainString24Modal").value=unescape(AngebotMainArr[i].AngebotMainString24);
            if(document.getElementById("AngebotMainString25Modal"))
               document.getElementById("AngebotMainString25Modal").value=unescape(AngebotMainArr[i].AngebotMainString25);
            if(document.getElementById("AngebotMainString26Modal"))
               document.getElementById("AngebotMainString26Modal").value=unescape(AngebotMainArr[i].AngebotMainString26);
            if(document.getElementById("AngebotMainString27Modal"))
               document.getElementById("AngebotMainString27Modal").value=unescape(AngebotMainArr[i].AngebotMainString27);
            if(document.getElementById("AngebotMainString28Modal"))
               document.getElementById("AngebotMainString28Modal").value=unescape(AngebotMainArr[i].AngebotMainString28);
            if(document.getElementById("AngebotMainString29Modal"))
               document.getElementById("AngebotMainString29Modal").value=unescape(AngebotMainArr[i].AngebotMainString29);
            if(document.getElementById("AngebotMainInt5Modal"))
               document.getElementById("AngebotMainInt5Modal").value=parseInt(AngebotMainArr[i].AngebotMainInt5);
            if(document.getElementById("StatusModal"))
               document.getElementById("StatusModal").value=parseInt(AngebotMainArr[i].Status);
            if(document.getElementById("AngebotMainFloat5Modal"))
               document.getElementById("AngebotMainFloat5Modal").value=parseFloat(AngebotMainArr[i].AngebotMainFloat5);
            if(document.getElementById("AngebotMainFloat6Modal"))
               document.getElementById("AngebotMainFloat6Modal").value=parseFloat(AngebotMainArr[i].AngebotMainFloat6);

			for(var j=0; j<showAngebotMainAttributArr.length; j++){
				if(showAngebotMainAttributArr[j].indexC>0){
					document.getElementById(showAngebotMainAttributArr[j].Attribut+"Modal").setAttribute('disabled','disabled');
				}
			}
				
            if(AngebotMainArr[i].Status<7){
                   //document.getElementById("prIDXModal").removeAttribute('disabled');
                   //document.getElementById("frIDXModal").removeAttribute('disabled');
                   //document.getElementById("Datum1Modal").removeAttribute('disabled');
				   document.getElementById("StatusModal").removeAttribute('disabled');
                   document.getElementById("Datum2Modal").removeAttribute('disabled');
                   document.getElementById("Datum3Modal").removeAttribute('disabled');
                   document.getElementById("Datum4Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString10Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString11Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString12Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString13Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainInt1Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainInt2Modal").removeAttribute('disabled');
                   //document.getElementById("AngebotMainInt3Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainInt4Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainFloat1Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainFloat2Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainFloat3Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainFloat4Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainBIT1Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainBIT2Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString14Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString15Modal").removeAttribute('disabled');
                   //document.getElementById("AngebotMainString16Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString17Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString18Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString19Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString20Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString21Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString22Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString23Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString24Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString25Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString26Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString27Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString28Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainString29Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainInt5Modal").removeAttribute('disabled');                  
                   document.getElementById("AngebotMainFloat5Modal").removeAttribute('disabled');
                   document.getElementById("AngebotMainFloat6Modal").removeAttribute('disabled');
		
		
				  //document.getElementById('uploadFormDiv').style.display = "block";	
				   document.getElementById('button_modal_save').style.display = "inline-block";
				   document.getElementById('cancelButton').style.display = "inline-block";
				   document.getElementById('saveFestButton').style.display = "inline-block";
            }else{				   
				   document.getElementById('button_modal_save').style.display = "none";
				   document.getElementById('cancelButton').style.display = "none";
				   document.getElementById('saveFestButton').style.display = "none";
            }	
			
			showBildDatei();		
			setProduktAngebotListe();
			setFromAngebotMainInt3(AngebotMainArr[i].AngebotMainInt3);
      }
   }
   $('#exampleModal').modal('show');
}

function saveAngebotMain(idx){
   //更新对象所需的参数
	var AngebotMainModalArr = [
				  "AngebotMainString4", "AngebotMainString5",
				  "AngebotMainString6", "AngebotMainString7", "AngebotMainString8", "AngebotMainString9", "AngebotMainString10",
				  "AngebotMainString11", "AngebotMainString12", "AngebotMainString13", "AngebotMainString14", "AngebotMainString15",
				  "AngebotMainString16", "AngebotMainString17", "AngebotMainString18", "AngebotMainString19", "AngebotMainString20",
				  "AngebotMainString21", "AngebotMainString22", "AngebotMainString23", "AngebotMainString24", "AngebotMainString25",
				  "AngebotMainString26", "AngebotMainString27", "AngebotMainString28", "AngebotMainString29", "AngebotMainString30",
				  "AngebotMainString31", "AngebotMainString32", "AngebotMainString33", "AngebotMainString34", "AngebotMainString35",
				  "AngebotMainString36", "AngebotMainString37", "AngebotMainString38", "AngebotMainString39", "AngebotMainString40",
				  "AngebotMainString41", "AngebotMainString42", "AngebotMainString43", "AngebotMainString44", "AngebotMainString45",
				  "AngebotMainString46", "AngebotMainString47", "AngebotMainString48", "AngebotMainString49", "AngebotMainString50",

				  "AngebotMainInt1", "AngebotMainInt2", "AngebotMainInt3", "AngebotMainInt4", "AngebotMainInt5",
				  "AngebotMainInt6", "AngebotMainInt7", "AngebotMainInt8", "AngebotMainInt9", "AngebotMainInt10",
				  "AngebotMainInt11", "AngebotMainInt12", "AngebotMainInt13", "AngebotMainInt14", "AngebotMainInt15",
				  "AngebotMainInt16", "AngebotMainInt17", "AngebotMainInt18", "AngebotMainInt19", "AngebotMainInt20",
				  "AngebotMainInt21", "AngebotMainInt22", "AngebotMainInt23", "AngebotMainInt24", "AngebotMainInt25",
				  "AngebotMainInt26", "AngebotMainInt27", "AngebotMainInt28", "AngebotMainInt29", "AngebotMainInt30",
				  "AngebotMainInt31", "AngebotMainInt32", "AngebotMainInt33", "AngebotMainInt34", "AngebotMainInt35",
				  "AngebotMainInt36", "AngebotMainInt37", "AngebotMainInt38", "AngebotMainInt39", "AngebotMainInt40",

				  "AngebotMainFloat1", "AngebotMainFloat2", "AngebotMainFloat3", "AngebotMainFloat4", "AngebotMainFloat5",
				  "AngebotMainFloat6", "AngebotMainFloat7", "AngebotMainFloat8", "AngebotMainFloat9", "AngebotMainFloat10",
				  "AngebotMainFloat11", "AngebotMainFloat12", "AngebotMainFloat13", "AngebotMainFloat14", "AngebotMainFloat15",
				  "AngebotMainFloat16", "AngebotMainFloat17", "AngebotMainFloat18", "AngebotMainFloat19", "AngebotMainFloat20",
				  "AngebotMainFloat21", "AngebotMainFloat22", "AngebotMainFloat23", "AngebotMainFloat24", "AngebotMainFloat25",
				  "AngebotMainFloat26", "AngebotMainFloat27", "AngebotMainFloat28", "AngebotMainFloat29", "AngebotMainFloat30",
				  "AngebotMainFloat31", "AngebotMainFloat32", "AngebotMainFloat33", "AngebotMainFloat34", "AngebotMainFloat35",
				  "AngebotMainFloat36", "AngebotMainFloat37", "AngebotMainFloat38", "AngebotMainFloat39", "AngebotMainFloat40",
				  
				  "AngebotMainBIT1", "AngebotMainBIT2", "AngebotMainBIT3", "AngebotMainBIT4", "AngebotMainBIT5",
				  "AngebotMainBIT6", "AngebotMainBIT7", "AngebotMainBIT8", "AngebotMainBIT9", "AngebotMainBIT10"
				];
	
	var prIDX=0,frIDX=0,Datum1="",Datum2="",Datum3="",Datum4="",Status=0;
	var AngebotMainString1="",AngebotMainString2="",AngebotMainString3="",AngebotMainString4="",AngebotMainString5="",
	AngebotMainString6="",AngebotMainString7="",AngebotMainString8="",AngebotMainString9="",AngebotMainString10="",
	AngebotMainString11="",AngebotMainString12="",AngebotMainString13="",AngebotMainString14="",AngebotMainString15="",
	AngebotMainString16="",AngebotMainString17="",AngebotMainString18="",AngebotMainString19="",AngebotMainString20="",
	AngebotMainString21="",AngebotMainString22="",AngebotMainString23="",AngebotMainString24="",AngebotMainString25="",
	AngebotMainString26="",AngebotMainString27="",AngebotMainString28="",AngebotMainString29="",AngebotMainString30="",
	AngebotMainString31="",AngebotMainString32="",AngebotMainString33="",AngebotMainString34="",AngebotMainString35="",
	AngebotMainString36="",AngebotMainString37="",AngebotMainString38="",AngebotMainString39="",AngebotMainString40="",
	AngebotMainString41="",AngebotMainString42="",AngebotMainString43="",AngebotMainString44="",AngebotMainString45="",
	AngebotMainString46="",AngebotMainString47="",AngebotMainString48="",AngebotMainString49="",AngebotMainString50="",
	AngebotMainInt1=0,AngebotMainInt2=0,AngebotMainInt3=0,AngebotMainInt4=0,AngebotMainInt5=0,
	AngebotMainInt6=0,AngebotMainInt7=0,AngebotMainInt8=0,AngebotMainInt9=0,AngebotMainInt10=0,
	AngebotMainInt11=0,AngebotMainInt12=0,AngebotMainInt13=0,AngebotMainInt14=0,AngebotMainInt15=0,
	AngebotMainInt16=0,AngebotMainInt17=0,AngebotMainInt18=0,AngebotMainInt19=0,AngebotMainInt20=0,
	AngebotMainInt21=0,AngebotMainInt22=0,AngebotMainInt23=0,AngebotMainInt24=0,AngebotMainInt25=0,
	AngebotMainInt26=0,AngebotMainInt27=0,AngebotMainInt28=0,AngebotMainInt29=0,AngebotMainInt30=0,
	AngebotMainInt31=0,AngebotMainInt32=0,AngebotMainInt33=0,AngebotMainInt34=0,AngebotMainInt35=0,
	AngebotMainInt36=0,AngebotMainInt37=0,AngebotMainInt38=0,AngebotMainInt39=0,AngebotMainInt40=0,
	AngebotMainFloat1=0,AngebotMainFloat2=0,AngebotMainFloat3=0,AngebotMainFloat4=0,AngebotMainFloat5=0,
	AngebotMainFloat6=0,AngebotMainFloat7=0,AngebotMainFloat8=0,AngebotMainFloat9=0,AngebotMainFloat10=0,
	AngebotMainFloat11=0,AngebotMainFloat12=0,AngebotMainFloat13=0,AngebotMainFloat14=0,AngebotMainFloat15=0,
	AngebotMainFloat16=0,AngebotMainFloat17=0,AngebotMainFloat18=0,AngebotMainFloat19=0,AngebotMainFloat20=0,
	AngebotMainFloat21=0,AngebotMainFloat22=0,AngebotMainFloat23=0,AngebotMainFloat24=0,AngebotMainFloat25=0,
	AngebotMainFloat26=0,AngebotMainFloat27=0,AngebotMainFloat28=0,AngebotMainFloat29=0,AngebotMainFloat30=0,
	AngebotMainFloat31=0,AngebotMainFloat32=0,AngebotMainFloat33=0,AngebotMainFloat34=0,AngebotMainFloat35=0,
	AngebotMainFloat36=0,AngebotMainFloat37=0,AngebotMainFloat38=0,AngebotMainFloat39=0,AngebotMainFloat40=0,
	AngebotMainBIT1=0,AngebotMainBIT2=0,AngebotMainBIT3=0,AngebotMainBIT4=0,AngebotMainBIT5=0,
	AngebotMainBIT6=0,AngebotMainBIT7=0,AngebotMainBIT8=0,AngebotMainBIT9=0,AngebotMainBIT10=0;	
	
	if(document.getElementById("AngebotMainString1Modal").value!="") AngebotMainString1 = escape(document.getElementById("AngebotMainString1Modal").value);
	if(document.getElementById("AngebotMainString2Modal").value!="") AngebotMainString2 = escape(document.getElementById("AngebotMainString2Modal").value);
	if(document.getElementById("AngebotMainString3Modal").value!="") AngebotMainString3 = escape(document.getElementById("AngebotMainString3Modal").value);
	if(document.getElementById("AngebotMainString4Modal").value!="") AngebotMainString4 = escape(document.getElementById("AngebotMainString4Modal").value);
	if(document.getElementById("AngebotMainString5Modal").value!="") AngebotMainString5 = escape(document.getElementById("AngebotMainString5Modal").value);
	if(document.getElementById("AngebotMainString6Modal").value!="") AngebotMainString6 = escape(document.getElementById("AngebotMainString6Modal").value);
	if(document.getElementById("AngebotMainString7Modal").value!="") AngebotMainString7 = escape(document.getElementById("AngebotMainString7Modal").value);
	if(document.getElementById("AngebotMainString8Modal").value!="") AngebotMainString8 = escape(document.getElementById("AngebotMainString8Modal").value);
	if(document.getElementById("AngebotMainString9Modal").value!="") AngebotMainString9 = escape(document.getElementById("AngebotMainString9Modal").value);
	if(document.getElementById("AngebotMainString10Modal").value!="") AngebotMainString10 = escape(document.getElementById("AngebotMainString10Modal").value);
	if(document.getElementById("AngebotMainString11Modal").value!="") AngebotMainString11 = escape(document.getElementById("AngebotMainString11Modal").value);
	if(document.getElementById("AngebotMainString12Modal").value!="") AngebotMainString12 = escape(document.getElementById("AngebotMainString12Modal").value);
	if(document.getElementById("AngebotMainString13Modal").value!="") AngebotMainString13 = escape(document.getElementById("AngebotMainString13Modal").value);
	if(document.getElementById("AngebotMainString14Modal").value!="") AngebotMainString14 = escape(document.getElementById("AngebotMainString14Modal").value);
	if(document.getElementById("AngebotMainString15Modal").value!="") AngebotMainString15 = escape(document.getElementById("AngebotMainString15Modal").value);
	if(document.getElementById("AngebotMainString16Modal").value!="") AngebotMainString16 = escape(document.getElementById("AngebotMainString16Modal").value);
	if(document.getElementById("AngebotMainString17Modal").value!="") AngebotMainString17 = escape(document.getElementById("AngebotMainString17Modal").value);
	if(document.getElementById("AngebotMainString18Modal").value!="") AngebotMainString18 = escape(document.getElementById("AngebotMainString18Modal").value);
	if(document.getElementById("AngebotMainString19Modal").value!="") AngebotMainString19 = escape(document.getElementById("AngebotMainString19Modal").value);
	if(document.getElementById("AngebotMainString20Modal").value!="") AngebotMainString20 = escape(document.getElementById("AngebotMainString20Modal").value);
	if(document.getElementById("AngebotMainString21Modal").value!="") AngebotMainString21 = escape(document.getElementById("AngebotMainString21Modal").value);
	if(document.getElementById("AngebotMainString22Modal").value!="") AngebotMainString22 = escape(document.getElementById("AngebotMainString22Modal").value);
	if(document.getElementById("AngebotMainString23Modal").value!="") AngebotMainString23 = escape(document.getElementById("AngebotMainString23Modal").value);
	if(document.getElementById("AngebotMainString24Modal").value!="") AngebotMainString24 = escape(document.getElementById("AngebotMainString24Modal").value);
	if(document.getElementById("AngebotMainString25Modal").value!="") AngebotMainString25 = escape(document.getElementById("AngebotMainString25Modal").value);
	if(document.getElementById("AngebotMainString26Modal").value!="") AngebotMainString26 = escape(document.getElementById("AngebotMainString26Modal").value);
	if(document.getElementById("AngebotMainString27Modal").value!="") AngebotMainString27 = escape(document.getElementById("AngebotMainString27Modal").value);
	if(document.getElementById("AngebotMainString28Modal").value!="") AngebotMainString28 = escape(document.getElementById("AngebotMainString28Modal").value);
	if(document.getElementById("AngebotMainString29Modal").value!="") AngebotMainString29 = escape(document.getElementById("AngebotMainString29Modal").value);
	if(document.getElementById("AngebotMainString30Modal").value!="") AngebotMainString30 = escape(document.getElementById("AngebotMainString30Modal").value);
	if(document.getElementById("AngebotMainString31Modal").value!="") AngebotMainString31 = escape(document.getElementById("AngebotMainString31Modal").value);
	if(document.getElementById("AngebotMainString32Modal").value!="") AngebotMainString32 = escape(document.getElementById("AngebotMainString32Modal").value);
	if(document.getElementById("AngebotMainString33Modal").value!="") AngebotMainString33 = escape(document.getElementById("AngebotMainString33Modal").value);
	if(document.getElementById("AngebotMainString34Modal").value!="") AngebotMainString34 = escape(document.getElementById("AngebotMainString34Modal").value);
	if(document.getElementById("AngebotMainString35Modal").value!="") AngebotMainString35 = escape(document.getElementById("AngebotMainString35Modal").value);
	if(document.getElementById("AngebotMainString36Modal").value!="") AngebotMainString36 = escape(document.getElementById("AngebotMainString36Modal").value);
	if(document.getElementById("AngebotMainString37Modal").value!="") AngebotMainString37 = escape(document.getElementById("AngebotMainString37Modal").value);
	if(document.getElementById("AngebotMainString38Modal").value!="") AngebotMainString38 = escape(document.getElementById("AngebotMainString38Modal").value);
	if(document.getElementById("AngebotMainString39Modal").value!="") AngebotMainString39 = escape(document.getElementById("AngebotMainString39Modal").value);
	if(document.getElementById("AngebotMainString40Modal").value!="") AngebotMainString40 = escape(document.getElementById("AngebotMainString40Modal").value);
	if(document.getElementById("AngebotMainString41Modal").value!="") AngebotMainString41 = escape(document.getElementById("AngebotMainString41Modal").value);
	if(document.getElementById("AngebotMainString42Modal").value!="") AngebotMainString42 = escape(document.getElementById("AngebotMainString42Modal").value);
	if(document.getElementById("AngebotMainString43Modal").value!="") AngebotMainString43 = escape(document.getElementById("AngebotMainString43Modal").value);
	if(document.getElementById("AngebotMainString44Modal").value!="") AngebotMainString44 = escape(document.getElementById("AngebotMainString44Modal").value);
	if(document.getElementById("AngebotMainString45Modal").value!="") AngebotMainString45 = escape(document.getElementById("AngebotMainString45Modal").value);
	if(document.getElementById("AngebotMainString46Modal").value!="") AngebotMainString46 = escape(document.getElementById("AngebotMainString46Modal").value);
	if(document.getElementById("AngebotMainString47Modal").value!="") AngebotMainString47 = escape(document.getElementById("AngebotMainString47Modal").value);
	if(document.getElementById("AngebotMainString48Modal").value!="") AngebotMainString48 = escape(document.getElementById("AngebotMainString48Modal").value);
	if(document.getElementById("AngebotMainString49Modal").value!="") AngebotMainString49 = escape(document.getElementById("AngebotMainString49Modal").value);
	if(document.getElementById("AngebotMainString50Modal").value!="") AngebotMainString50 = escape(document.getElementById("AngebotMainString50Modal").value);

	if(document.getElementById("AngebotMainInt1Modal").value!="") AngebotMainInt1 = parseInt(document.getElementById("AngebotMainInt1Modal").value);
	if(document.getElementById("AngebotMainInt2Modal").value!="") AngebotMainInt2 = parseInt(document.getElementById("AngebotMainInt2Modal").value);
	if(document.getElementById("AngebotMainInt3Modal").value!="") AngebotMainInt3 = parseInt(document.getElementById("AngebotMainInt3Modal").value);
	if(document.getElementById("AngebotMainInt4Modal").value!="") AngebotMainInt4 = parseInt(document.getElementById("AngebotMainInt4Modal").value);
	if(document.getElementById("AngebotMainInt5Modal").value!="") AngebotMainInt5 = parseInt(document.getElementById("AngebotMainInt5Modal").value);
	if(document.getElementById("AngebotMainInt6Modal").value!="") AngebotMainInt6 = parseInt(document.getElementById("AngebotMainInt6Modal").value);
	if(document.getElementById("AngebotMainInt7Modal").value!="") AngebotMainInt7 = parseInt(document.getElementById("AngebotMainInt7Modal").value);
	if(document.getElementById("AngebotMainInt8Modal").value!="") AngebotMainInt8 = parseInt(document.getElementById("AngebotMainInt8Modal").value);
	if(document.getElementById("AngebotMainInt9Modal").value!="") AngebotMainInt9 = parseInt(document.getElementById("AngebotMainInt9Modal").value);
	if(document.getElementById("AngebotMainInt10Modal").value!="") AngebotMainInt10 = parseInt(document.getElementById("AngebotMainInt10Modal").value);
	if(document.getElementById("AngebotMainInt11Modal").value!="") AngebotMainInt11 = parseInt(document.getElementById("AngebotMainInt11Modal").value);
	if(document.getElementById("AngebotMainInt12Modal").value!="") AngebotMainInt12 = parseInt(document.getElementById("AngebotMainInt12Modal").value);
	if(document.getElementById("AngebotMainInt13Modal").value!="") AngebotMainInt13 = parseInt(document.getElementById("AngebotMainInt13Modal").value);
	if(document.getElementById("AngebotMainInt14Modal").value!="") AngebotMainInt14 = parseInt(document.getElementById("AngebotMainInt14Modal").value);
	if(document.getElementById("AngebotMainInt15Modal").value!="") AngebotMainInt15 = parseInt(document.getElementById("AngebotMainInt15Modal").value);
	if(document.getElementById("AngebotMainInt16Modal").value!="") AngebotMainInt16 = parseInt(document.getElementById("AngebotMainInt16Modal").value);
	if(document.getElementById("AngebotMainInt17Modal").value!="") AngebotMainInt17 = parseInt(document.getElementById("AngebotMainInt17Modal").value);
	if(document.getElementById("AngebotMainInt18Modal").value!="") AngebotMainInt18 = parseInt(document.getElementById("AngebotMainInt18Modal").value);
	if(document.getElementById("AngebotMainInt19Modal").value!="") AngebotMainInt19 = parseInt(document.getElementById("AngebotMainInt19Modal").value);
	if(document.getElementById("AngebotMainInt20Modal").value!="") AngebotMainInt20 = parseInt(document.getElementById("AngebotMainInt20Modal").value);
	if(document.getElementById("AngebotMainInt21Modal").value!="") AngebotMainInt21 = parseInt(document.getElementById("AngebotMainInt21Modal").value);
	if(document.getElementById("AngebotMainInt22Modal").value!="") AngebotMainInt22 = parseInt(document.getElementById("AngebotMainInt22Modal").value);
	if(document.getElementById("AngebotMainInt23Modal").value!="") AngebotMainInt23 = parseInt(document.getElementById("AngebotMainInt23Modal").value);
	if(document.getElementById("AngebotMainInt24Modal").value!="") AngebotMainInt24 = parseInt(document.getElementById("AngebotMainInt24Modal").value);
	if(document.getElementById("AngebotMainInt25Modal").value!="") AngebotMainInt25 = parseInt(document.getElementById("AngebotMainInt25Modal").value);
	if(document.getElementById("AngebotMainInt26Modal").value!="") AngebotMainInt26 = parseInt(document.getElementById("AngebotMainInt26Modal").value);
	if(document.getElementById("AngebotMainInt27Modal").value!="") AngebotMainInt27 = parseInt(document.getElementById("AngebotMainInt27Modal").value);
	if(document.getElementById("AngebotMainInt28Modal").value!="") AngebotMainInt28 = parseInt(document.getElementById("AngebotMainInt28Modal").value);
	if(document.getElementById("AngebotMainInt29Modal").value!="") AngebotMainInt29 = parseInt(document.getElementById("AngebotMainInt29Modal").value);
	if(document.getElementById("AngebotMainInt30Modal").value!="") AngebotMainInt30 = parseInt(document.getElementById("AngebotMainInt30Modal").value);
	if(document.getElementById("AngebotMainInt31Modal").value!="") AngebotMainInt31 = parseInt(document.getElementById("AngebotMainInt31Modal").value);
	if(document.getElementById("AngebotMainInt32Modal").value!="") AngebotMainInt32 = parseInt(document.getElementById("AngebotMainInt32Modal").value);
	if(document.getElementById("AngebotMainInt33Modal").value!="") AngebotMainInt33 = parseInt(document.getElementById("AngebotMainInt33Modal").value);
	if(document.getElementById("AngebotMainInt34Modal").value!="") AngebotMainInt34 = parseInt(document.getElementById("AngebotMainInt34Modal").value);
	if(document.getElementById("AngebotMainInt35Modal").value!="") AngebotMainInt35 = parseInt(document.getElementById("AngebotMainInt35Modal").value);
	if(document.getElementById("AngebotMainInt36Modal").value!="") AngebotMainInt36 = parseInt(document.getElementById("AngebotMainInt36Modal").value);
	if(document.getElementById("AngebotMainInt37Modal").value!="") AngebotMainInt37 = parseInt(document.getElementById("AngebotMainInt37Modal").value);
	if(document.getElementById("AngebotMainInt38Modal").value!="") AngebotMainInt38 = parseInt(document.getElementById("AngebotMainInt38Modal").value);
	if(document.getElementById("AngebotMainInt39Modal").value!="") AngebotMainInt39 = parseInt(document.getElementById("AngebotMainInt39Modal").value);
	if(document.getElementById("AngebotMainInt40Modal").value!="") AngebotMainInt40 = parseInt(document.getElementById("AngebotMainInt40Modal").value);

	if(document.getElementById("AngebotMainFloat1Modal").value!="") AngebotMainFloat1 = parseFloat(document.getElementById("AngebotMainFloat1Modal").value);
	if(document.getElementById("AngebotMainFloat2Modal").value!="") AngebotMainFloat2 = parseFloat(document.getElementById("AngebotMainFloat2Modal").value);
	if(document.getElementById("AngebotMainFloat3Modal").value!="") AngebotMainFloat3 = parseFloat(document.getElementById("AngebotMainFloat3Modal").value);
	if(document.getElementById("AngebotMainFloat4Modal").value!="") AngebotMainFloat4 = parseFloat(document.getElementById("AngebotMainFloat4Modal").value);
	if(document.getElementById("AngebotMainFloat5Modal").value!="") AngebotMainFloat5 = parseFloat(document.getElementById("AngebotMainFloat5Modal").value);
	if(document.getElementById("AngebotMainFloat6Modal").value!="") AngebotMainFloat6 = parseFloat(document.getElementById("AngebotMainFloat6Modal").value);
	if(document.getElementById("AngebotMainFloat7Modal").value!="") AngebotMainFloat7 = parseFloat(document.getElementById("AngebotMainFloat7Modal").value);
	if(document.getElementById("AngebotMainFloat8Modal").value!="") AngebotMainFloat8 = parseFloat(document.getElementById("AngebotMainFloat8Modal").value);
	if(document.getElementById("AngebotMainFloat9Modal").value!="") AngebotMainFloat9 = parseFloat(document.getElementById("AngebotMainFloat9Modal").value);
	if(document.getElementById("AngebotMainFloat10Modal").value!="") AngebotMainFloat10 = parseFloat(document.getElementById("AngebotMainFloat10Modal").value);
	if(document.getElementById("AngebotMainFloat11Modal").value!="") AngebotMainFloat11 = parseFloat(document.getElementById("AngebotMainFloat11Modal").value);
	if(document.getElementById("AngebotMainFloat12Modal").value!="") AngebotMainFloat12 = parseFloat(document.getElementById("AngebotMainFloat12Modal").value);
	if(document.getElementById("AngebotMainFloat13Modal").value!="") AngebotMainFloat13 = parseFloat(document.getElementById("AngebotMainFloat13Modal").value);
	if(document.getElementById("AngebotMainFloat14Modal").value!="") AngebotMainFloat14 = parseFloat(document.getElementById("AngebotMainFloat14Modal").value);
	if(document.getElementById("AngebotMainFloat15Modal").value!="") AngebotMainFloat15 = parseFloat(document.getElementById("AngebotMainFloat15Modal").value);
	if(document.getElementById("AngebotMainFloat16Modal").value!="") AngebotMainFloat16 = parseFloat(document.getElementById("AngebotMainFloat16Modal").value);
	if(document.getElementById("AngebotMainFloat17Modal").value!="") AngebotMainFloat17 = parseFloat(document.getElementById("AngebotMainFloat17Modal").value);
	if(document.getElementById("AngebotMainFloat18Modal").value!="") AngebotMainFloat18 = parseFloat(document.getElementById("AngebotMainFloat18Modal").value);
	if(document.getElementById("AngebotMainFloat19Modal").value!="") AngebotMainFloat19 = parseFloat(document.getElementById("AngebotMainFloat19Modal").value);
	if(document.getElementById("AngebotMainFloat20Modal").value!="") AngebotMainFloat20 = parseFloat(document.getElementById("AngebotMainFloat20Modal").value);
	if(document.getElementById("AngebotMainFloat21Modal").value!="") AngebotMainFloat21 = parseFloat(document.getElementById("AngebotMainFloat21Modal").value);
	if(document.getElementById("AngebotMainFloat22Modal").value!="") AngebotMainFloat22 = parseFloat(document.getElementById("AngebotMainFloat22Modal").value);
	if(document.getElementById("AngebotMainFloat23Modal").value!="") AngebotMainFloat23 = parseFloat(document.getElementById("AngebotMainFloat23Modal").value);
	if(document.getElementById("AngebotMainFloat24Modal").value!="") AngebotMainFloat24 = parseFloat(document.getElementById("AngebotMainFloat24Modal").value);
	if(document.getElementById("AngebotMainFloat25Modal").value!="") AngebotMainFloat25 = parseFloat(document.getElementById("AngebotMainFloat25Modal").value);
	if(document.getElementById("AngebotMainFloat26Modal").value!="") AngebotMainFloat26 = parseFloat(document.getElementById("AngebotMainFloat26Modal").value);
	if(document.getElementById("AngebotMainFloat27Modal").value!="") AngebotMainFloat27 = parseFloat(document.getElementById("AngebotMainFloat27Modal").value);
	if(document.getElementById("AngebotMainFloat28Modal").value!="") AngebotMainFloat28 = parseFloat(document.getElementById("AngebotMainFloat28Modal").value);
	if(document.getElementById("AngebotMainFloat29Modal").value!="") AngebotMainFloat29 = parseFloat(document.getElementById("AngebotMainFloat29Modal").value);
	if(document.getElementById("AngebotMainFloat30Modal").value!="") AngebotMainFloat30 = parseFloat(document.getElementById("AngebotMainFloat30Modal").value);
	if(document.getElementById("AngebotMainFloat31Modal").value!="") AngebotMainFloat31 = parseFloat(document.getElementById("AngebotMainFloat31Modal").value);
	if(document.getElementById("AngebotMainFloat32Modal").value!="") AngebotMainFloat32 = parseFloat(document.getElementById("AngebotMainFloat32Modal").value);
	if(document.getElementById("AngebotMainFloat33Modal").value!="") AngebotMainFloat33 = parseFloat(document.getElementById("AngebotMainFloat33Modal").value);
	if(document.getElementById("AngebotMainFloat34Modal").value!="") AngebotMainFloat34 = parseFloat(document.getElementById("AngebotMainFloat34Modal").value);
	if(document.getElementById("AngebotMainFloat35Modal").value!="") AngebotMainFloat35 = parseFloat(document.getElementById("AngebotMainFloat35Modal").value);
	if(document.getElementById("AngebotMainFloat36Modal").value!="") AngebotMainFloat36 = parseFloat(document.getElementById("AngebotMainFloat36Modal").value);
	if(document.getElementById("AngebotMainFloat37Modal").value!="") AngebotMainFloat37 = parseFloat(document.getElementById("AngebotMainFloat37Modal").value);
	if(document.getElementById("AngebotMainFloat38Modal").value!="") AngebotMainFloat38 = parseFloat(document.getElementById("AngebotMainFloat38Modal").value);
	if(document.getElementById("AngebotMainFloat39Modal").value!="") AngebotMainFloat39 = parseFloat(document.getElementById("AngebotMainFloat39Modal").value);
	if(document.getElementById("AngebotMainFloat40Modal").value!="") AngebotMainFloat40 = parseFloat(document.getElementById("AngebotMainFloat40Modal").value);

	if(document.getElementById("AngebotMainBIT1Modal").checked) AngebotMainBIT1 = 1;
	if(document.getElementById("AngebotMainBIT2Modal").checked) AngebotMainBIT2 = 1;
	if(document.getElementById("AngebotMainBIT3Modal").checked) AngebotMainBIT3 = 1;
	if(document.getElementById("AngebotMainBIT4Modal").checked) AngebotMainBIT4 = 1;
	if(document.getElementById("AngebotMainBIT5Modal").checked) AngebotMainBIT5 = 1;
	if(document.getElementById("AngebotMainBIT6Modal").checked) AngebotMainBIT6 = 1;
	if(document.getElementById("AngebotMainBIT7Modal").checked) AngebotMainBIT7 = 1;
	if(document.getElementById("AngebotMainBIT8Modal").checked) AngebotMainBIT8 = 1;
	if(document.getElementById("AngebotMainBIT9Modal").checked) AngebotMainBIT9 = 1;
	if(document.getElementById("AngebotMainBIT10Modal").checked) AngebotMainBIT10 = 1;
	
	
	
	var sql = "";	
	for(var i=0; i<AngebotMainModalArr.length; i++){
		if(sql!="") sql += ",";
		if(String(AngebotMainModalArr[i]).indexOf("Float")>0)
			 eval('sql += String(AngebotMainModalArr[i]) + " = "+'+AngebotMainModalArr[i]+'+"";');
		else if(String(AngebotMainModalArr[i]).indexOf("Int")>0 || String(AngebotMainModalArr[i]).indexOf("BIT")>0)
			 eval('sql += String(AngebotMainModalArr[i]) + " = "+'+AngebotMainModalArr[i]+'+"";');
		else eval('sql += String(AngebotMainModalArr[i]) + " = \'"+'+AngebotMainModalArr[i]+'+"\'";');
	}
	
	if(document.getElementById("Datum2Modal").value!="")	sql += ",Datum2='"+escape(document.getElementById("Datum2Modal").value)+"'";
	if(document.getElementById("Datum3Modal").value!="")	sql += ",Datum3='"+escape(document.getElementById("Datum3Modal").value)+"'";
	if(document.getElementById("Datum4Modal").value!="")	sql += ",Datum4='"+escape(document.getElementById("Datum4Modal").value)+"'";
	//if(document.getElementById("StatusModal").value!="")	sql += ",Status="+parseInt(document.getElementById("StatusModal").value)+"";	
	
	sql = "UPDATE laaver.Angebot_Main SET " + sql + " WHERE prIDX="+mainIDX+"";
	
	$.ajax({
        type: "POST",
        url: "/General_Update",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        cache: false,
        data: {
			SQL_TXT: escape(sql),
		},
        success: function (response) {	
			if(idx<7){
				showSuccessAlert();
				window.location.href = "/AngebotVerwalten?prIDX="+mainIDX;
			}else saveFestAngebotMain(idx);
        },
        error: function (xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });  
}

function saveFestAngebotMain(idx){
	var bool = false;
	if(idx==8 && confirm("确定取消促销吗？")){
		bool = true;
	}else if(idx==9){
		if(document.getElementById("AngebotMainInt1Modal").value!=0 && //减免类型
		   document.getElementById("Datum3Modal").value!="" && //开始时间
		   document.getElementById("Datum4Modal").value!="" && //结束时间
		   //document.getElementById("AngebotMainString10Modal").value!="" && //标题
		   //document.getElementById("AngebotMainString11Modal").value!="" && //广告语
		   (document.getElementById("AngebotMainFloat1Modal").value!=0 || document.getElementById("AngebotMainFloat2Modal").value!=0 || document.getElementById("AngebotMainFloat3Modal").value!=0)
		){
			bool = true;
		}else alert("输入参数不完全！");
	}
	
	if(bool){
		if(askForSure()){
			var sql = "UPDATE laaver.Angebot_Main SET Status="+idx+" WHERE prIDX="+mainIDX+" ";
			$.ajax({
				type: "POST",
				url: "/General_Update",
				contentType: 'application/x-www-form-urlencoded',
				async: true,
				cache: false,
				data: {
					SQL_TXT: escape(sql),
				},
				success: function (response) {			
					showSuccessAlert();
					window.location.href = "/AngebotVerwalten?prIDX="+mainIDX;
				},
				error: function (xhr, status, error) {
					console.error("Node AJAX 请求失败: ", status, error);
				}
			});		
		}
	}
}

function showNewAngebotMainModal(){
   $('#exampleNewModal').modal('show');
}

function saveNewAngebotMain(){
	var sql = "INSERT INTO laaver.Angebot_Main (AngebotMainString16,AngebotMainInt2,Datum2,AngebotMainInt3) VALUES ('"+escape(document.getElementById("AngebotMainString16NewModal").value)+"',"+parseInt(MitarbeiterID)+",NOW(),"+parseInt(document.getElementById("AngebotMainInt3NewModal").value)+")";
	$.ajax({
        type: "POST",
        url: "/General_Insert",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        cache: false,
        data: {
			SQL_TXT: escape(sql),
		},
        success: function (response) {			
			showSuccessAlert();
			window.location.href = "/AngebotVerwalten?prIDX="+response.results.insertId;
        },
        error: function (xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });
}


function searchAngebotPos(prIDX){
	var sql = "SELECT * FROM laaver.Angebot_Pos WHERE frIDX = "+prIDX+" LIMIT 500";
	$.ajax({
        type: "POST",
        url: "/General_Select",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        cache: false,
        data: {
			SQL_TXT: escape(sql),
		},
        success: function (response) {
			AngebotPosArr = new Array();
			if (response.results && Array.isArray(response.results)) {				
                response.results.forEach(function (item) {
					let obj = {};
					for (let key in item) {
						let val = item[key];

						// 1. BIT 类型字段：Buffer 转 0/1
						if (val && typeof val === 'object' && val.type === 'Buffer' && Array.isArray(val.data)) {
							obj[key] = val.data[0] ? 1 : 0;
						}

						// 2. 包含 "Datum" 的字段
						else if (key.includes("Datum")) {
							if (val === null || val === undefined) {
								obj[key] = ""; // null 或 undefined → 空字符串
							} else {
								try {
									obj[key] = val.toString().substring(0, 10); // 取 YYYY-MM-DD
								} catch (e) {
									obj[key] = ""; // 容错
								}
							}
						}

						// 3. 其他字段：正常赋值
						else {
							obj[key] = val;
						}
					}
					AngebotPosArr.push(obj);
				});
				
				showAngebotPos();
            }
        },
        error: function (xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });  
	

}

function showAngebotPos(){
   var txt="";
   showAttributArr.sort(compare('indexB'));
   txt += "<table class='table table-separate table-head-custom table-checkable' id='kt_datatable'><thead><tr>";
   for(var i=0; i<showAttributArr.length; i++){
      if(showAttributArr[i].indexB>0){
         txt += "<th>"+unescape(showAttributArr[i].lang[langNum])+"</th>";
      }
   }
   txt += "</tr></thead><tbody>";
   
   for(var i=0; i<AngebotPosArr.length; i++){
      txt += "<tr>";
      for(var j=0; j<showAttributArr.length; j++){
         eval("if(showAttributArr[j].indexB>0){"+
            "if(showAttributArr[j].indexB==1) txt += '<td><a href=\"javascript:showAngebotPosModal("+i+")\">'+unescape(AngebotPosArr[i]."+showAttributArr[j].Attribut+")+'</a></td>';"+
            "else if(showAttributArr[j].Type=='BIT') txt += '<td>'+(parseInt(AngebotPosArr[i]."+showAttributArr[j].Attribut+")==1?'Yes':'No')+'</td>';"+
            "else if(parseInt(AngebotPosArr[i]."+showAttributArr[j].Attribut+")==0) txt += '<td> </td>';"+
            "else txt += '<td>'+unescape(AngebotPosArr[i]."+showAttributArr[j].Attribut+")+'</td>'"+
            "}");
      }
      txt += "</tr>";
   }
   txt += "</tbody></table>";
   
   document.getElementById("tableDiv").innerHTML = txt;
   
   jQuery(document).ready(function() {
      KTDatatableHtmlTableDemo.init();
   });
   document.getElementById('ErgebnisSpan').innerHTML = AngebotPosArr.length;
   hideLoadingDiv();
}

function showAngebotPosModal(idx){
   document.getElementById("ProduktListeDiv").style.display = "none";
   showAttributArr.sort(compare('indexC'));
   for(var i=0; i<showAttributArr.length; i++){
      if(showAttributArr[i].indexC>0){
         eval("if(document.getElementById('"+showAttributArr[i].Attribut+"ModalDiv'))document.getElementById('"+showAttributArr[i].Attribut+"ModalDiv').style.display='block';");
      }
   }

   for(var i=0; i<AngebotPosArr.length; i++){
      if(i==idx){
            if(document.getElementById("prIDXModal"))
               document.getElementById("prIDXModal").value=parseInt(AngebotPosArr[i].prIDX);
            if(document.getElementById("frIDXModal"))
               document.getElementById("frIDXModal").value=parseInt(AngebotPosArr[i].frIDX);
            if(document.getElementById("AngebotPosString1Modal"))
               document.getElementById("AngebotPosString1Modal").value=unescape(AngebotPosArr[i].AngebotPosString1);
            if(document.getElementById("AngebotPosString2Modal"))
               document.getElementById("AngebotPosString2Modal").value=unescape(AngebotPosArr[i].AngebotPosString2);
            if(document.getElementById("AngebotPosString3Modal"))
               document.getElementById("AngebotPosString3Modal").value=unescape(AngebotPosArr[i].AngebotPosString3);
            if(document.getElementById("AngebotPosString4Modal"))
               document.getElementById("AngebotPosString4Modal").value=unescape(AngebotPosArr[i].AngebotPosString4);
            if(document.getElementById("AngebotPosInt1Modal"))
               document.getElementById("AngebotPosInt1Modal").value=parseInt(AngebotPosArr[i].AngebotPosInt1);
            if(document.getElementById("AngebotPosInt2Modal"))
               document.getElementById("AngebotPosInt2Modal").value=parseInt(AngebotPosArr[i].AngebotPosInt2);
            if(document.getElementById("AngebotPosInt3Modal"))
               document.getElementById("AngebotPosInt3Modal").value=parseInt(AngebotPosArr[i].AngebotPosInt3);
            if(document.getElementById("AngebotPosInt4Modal"))
               document.getElementById("AngebotPosInt4Modal").value=parseInt(AngebotPosArr[i].AngebotPosInt4);
            if(document.getElementById("AngebotPosFloat1Modal"))
               document.getElementById("AngebotPosFloat1Modal").value=parseFloat(AngebotPosArr[i].AngebotPosFloat1);
            if(document.getElementById("AngebotPosFloat2Modal"))
               document.getElementById("AngebotPosFloat2Modal").value=parseFloat(AngebotPosArr[i].AngebotPosFloat2);
            if(document.getElementById("AngebotPosFloat3Modal"))
               document.getElementById("AngebotPosFloat3Modal").value=parseFloat(AngebotPosArr[i].AngebotPosFloat3);
            if(document.getElementById("AngebotPosFloat4Modal"))
               document.getElementById("AngebotPosFloat4Modal").value=parseFloat(AngebotPosArr[i].AngebotPosFloat4);
            if(document.getElementById("AngebotPosFloat5Modal"))
               document.getElementById("AngebotPosFloat5Modal").value=parseFloat(AngebotPosArr[i].AngebotPosFloat5);
            if(document.getElementById("AngebotPosFloat6Modal"))
               document.getElementById("AngebotPosFloat6Modal").value=parseFloat(AngebotPosArr[i].AngebotPosFloat6);
            if(document.getElementById("AngebotPosFloat7Modal"))
               document.getElementById("AngebotPosFloat7Modal").value=parseFloat(AngebotPosArr[i].AngebotPosFloat7);
            if(document.getElementById("AngebotPosFloat8Modal"))
               document.getElementById("AngebotPosFloat8Modal").value=parseFloat(AngebotPosArr[i].AngebotPosFloat8);
            if(document.getElementById("AngebotPosBIT1Modal"))
               if(AngebotPosArr[i].AngebotPosBIT1==1)
               document.getElementById("AngebotPosBIT1Modal").checked = "checked";
            if(document.getElementById("AngebotPosBIT2Modal"))
               if(AngebotPosArr[i].AngebotPosBIT2==1)
               document.getElementById("AngebotPosBIT2Modal").checked = "checked";
            if(document.getElementById("AngebotPosBIT3Modal"))
               if(AngebotPosArr[i].AngebotPosBIT3==1)
               document.getElementById("AngebotPosBIT3Modal").checked = "checked";
            if(document.getElementById("AngebotPosBIT4Modal"))
               if(AngebotPosArr[i].AngebotPosBIT4==1)
               document.getElementById("AngebotPosBIT4Modal").checked = "checked";
      }
   }
   $('#exampleModal').modal('show');
}

function AngebotSynFunc(){
	$.ajax({
      type: "POST",
         url: "/Angebot_Syn_Func",
         data:{
         },
         cache: false,
         success: function (response) {
           alert(unescape("特价信息已更新！"));
         },
         error: function (response) {
            console.log(response);
         }
   });
}

function AngebotPosObj(prIDX,frIDX,AngebotPosString1,AngebotPosString2,AngebotPosString3,AngebotPosString4,AngebotPosInt1,AngebotPosInt2,AngebotPosInt3,AngebotPosInt4,AngebotPosFloat1,AngebotPosFloat2,AngebotPosFloat3,AngebotPosFloat4,AngebotPosFloat5,AngebotPosFloat6,AngebotPosFloat7,AngebotPosFloat8,AngebotPosBIT1,AngebotPosBIT2,AngebotPosBIT3,AngebotPosBIT4){
   this.prIDX=prIDX;
   this.frIDX=frIDX;
   this.AngebotPosString1=AngebotPosString1;
   this.AngebotPosString2=AngebotPosString2;
   this.AngebotPosString3=AngebotPosString3;
   this.AngebotPosString4=AngebotPosString4;
   this.AngebotPosInt1=AngebotPosInt1;
   this.AngebotPosInt2=AngebotPosInt2;
   this.AngebotPosInt3=AngebotPosInt3;
   this.AngebotPosInt4=AngebotPosInt4;
   this.AngebotPosFloat1=AngebotPosFloat1;
   this.AngebotPosFloat2=AngebotPosFloat2;
   this.AngebotPosFloat3=AngebotPosFloat3;
   this.AngebotPosFloat4=AngebotPosFloat4;
   this.AngebotPosFloat5=AngebotPosFloat5;
   this.AngebotPosFloat6=AngebotPosFloat6;
   this.AngebotPosFloat7=AngebotPosFloat7;
   this.AngebotPosFloat8=AngebotPosFloat8;
   this.AngebotPosBIT1=AngebotPosBIT1;
   this.AngebotPosBIT2=AngebotPosBIT2;
   this.AngebotPosBIT3=AngebotPosBIT3;
   this.AngebotPosBIT4=AngebotPosBIT4;
}


function AngebotMainObj(prIDX,frIDX,Datum1,Datum2,Datum3,Datum4,AngebotMainString10,AngebotMainString11,AngebotMainString12,AngebotMainString13,AngebotMainInt1,AngebotMainInt2,AngebotMainInt3,AngebotMainInt4,AngebotMainFloat1,AngebotMainFloat2,AngebotMainFloat3,AngebotMainFloat4,AngebotMainBIT1,AngebotMainBIT2,AngebotMainString14,AngebotMainString15,AngebotMainString16,AngebotMainString17,AngebotMainString18,AngebotMainString19,AngebotMainString20,AngebotMainString21,AngebotMainString22,AngebotMainString23,AngebotMainString24,AngebotMainString25,AngebotMainString26,AngebotMainString27,AngebotMainString28,AngebotMainString29,AngebotMainInt5,Status,AngebotMainFloat5,AngebotMainFloat6){
   this.prIDX=prIDX;
   this.frIDX=frIDX;
   this.Datum1=Datum1;
   this.Datum2=Datum2;
   this.Datum3=Datum3;
   this.Datum4=Datum4;
   this.AngebotMainString10=AngebotMainString10;
   this.AngebotMainString11=AngebotMainString11;
   this.AngebotMainString12=AngebotMainString12;
   this.AngebotMainString13=AngebotMainString13;
   this.AngebotMainInt1=AngebotMainInt1;
   this.AngebotMainInt2=AngebotMainInt2;
   this.AngebotMainInt3=AngebotMainInt3;
   this.AngebotMainInt4=AngebotMainInt4;
   this.AngebotMainFloat1=AngebotMainFloat1;
   this.AngebotMainFloat2=AngebotMainFloat2;
   this.AngebotMainFloat3=AngebotMainFloat3;
   this.AngebotMainFloat4=AngebotMainFloat4;
   this.AngebotMainBIT1=AngebotMainBIT1;
   this.AngebotMainBIT2=AngebotMainBIT2;
   this.AngebotMainString14=AngebotMainString14;
   this.AngebotMainString15=AngebotMainString15;
   this.AngebotMainString16=AngebotMainString16;
   this.AngebotMainString17=AngebotMainString17;
   this.AngebotMainString18=AngebotMainString18;
   this.AngebotMainString19=AngebotMainString19;
   this.AngebotMainString20=AngebotMainString20;
   this.AngebotMainString21=AngebotMainString21;
   this.AngebotMainString22=AngebotMainString22;
   this.AngebotMainString23=AngebotMainString23;
   this.AngebotMainString24=AngebotMainString24;
   this.AngebotMainString25=AngebotMainString25;
   this.AngebotMainString26=AngebotMainString26;
   this.AngebotMainString27=AngebotMainString27;
   this.AngebotMainString28=AngebotMainString28;
   this.AngebotMainString29=AngebotMainString29;
   this.AngebotMainInt5=AngebotMainInt5;
   this.Status=Status;
   this.AngebotMainFloat5=AngebotMainFloat5;
   this.AngebotMainFloat6=AngebotMainFloat6;
}

function showAttributObj(Attribut,Type,indexA,indexB,indexC,indexD,indexE,indexF,lang){
   this.Attribut=Attribut;
   this.Type=Type;
   this.indexA=indexA;
   this.indexB=indexB;
   this.indexC=indexC;
   this.indexD=indexD;
   this.indexE=indexE;
   this.indexF=indexF;
   this.lang=lang;
}

function getAngebotMainStatusName(id){
	if(id!="" && AngebotMainStatusArr.length>0){
		for(var i=0; i<AngebotMainStatusArr.length; i++){
			if(AngebotMainStatusArr[i][4]==id){
				return unescape(AngebotMainStatusArr[i][langNum]);
				break;
			}
		}
	}
}

function getAngebotMainString17Value(name){
	var txt="";
	for(var i=0; i<AngebotMainString17Arr.length; i++){
		if(AngebotMainString17Arr[i][4]==name){
			txt = unescape(AngebotMainString17Arr[i][langNum]);
			break;
		}
	}
	return txt;
}

function getAngebotMainString18Value(name){
	var txt="";
	for(var i=0; i<AngebotMainString18Arr.length; i++){
		if(AngebotMainString18Arr[i][4]==name){
			txt = unescape(AngebotMainString18Arr[i][langNum]);
			break;
		}
	}
	return txt;
}

function getAngebotMainString19Value(name){
	var txt="";
	for(var i=0; i<AngebotMainString19Arr.length; i++){
		if(AngebotMainString19Arr[i][4]==name){
			txt = unescape(AngebotMainString19Arr[i][langNum]);
			break;
		}
	}
	return txt;
}

function getAngebotMainInt3Value(name){
	var txt="";
	for(var i=0; i<AngebotMainInt3Arr.length; i++){
		if(AngebotMainInt3Arr[i][4]==name){
			txt = unescape(AngebotMainInt3Arr[i][langNum]);
			break;
		}
	}
	return txt;
}
function getAngebotMainInt1Value(name){
	var txt="";
	for(var i=0; i<AngebotMainInt1Arr.length; i++){
		if(AngebotMainInt1Arr[i][4]==name){
			txt = unescape(AngebotMainInt1Arr[i][langNum]);
			break;
		}
	}
	return txt;
}

$(document).ready(function (e) {
    $('#file-upload-ajax').on('submit',(function(e) {
        e.preventDefault(); 
		var filename = String(setFileType(UserID));
		var dateiname = escape(document.getElementById('sampleFile').files[0].name);
		document.getElementById("filename").value = filename;
		var type="";
		if(dateiname!="") type = String(dateiname.split(".")[dateiname.split(".").length-1]);						
		var formData = new FormData(this);

        $.ajax({
            type:'POST',
            url: $(this).attr('action'),
            data:formData,
            cache:false,
            contentType: false,
            processData: false,
            success:function(data){
				document.getElementById("AngebotMainString13Modal").value = String(filename);
				var xmlhttp;
				try{
				  xmlhttp = new XMLHttpRequest();
				}
				catch(e){
				  xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
				}
				xmlhttp.onreadystatechange=function(){
				  if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
					 showBildDatei();
				  }
				}
				xmlhttp.open('POST','https://laaver-ajax.2euro.shop/intranet_Angebot_Verwalten_AJAX.asp',true);
				xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
				xmlhttp.send("opt=7&prIDX="+mainIDX+"&filename="+filename+"&sTime="+new Date().getTime());
            },
            error: function(data){
                console.log(data);
            }
        });

    }));
});

function showBildDatei(){
   var filename = String(document.getElementById("AngebotMainString13Modal").value);
   var txt="";
   if(filename!=""){
	   txt += "<div class='card-body pt-0 pb-0'>";
		txt += "<div class='d-flex align-items-center mb-1'>"+
		"<!--begin::Content-->"+
		"<div class='d-flex align-items-center flex-row-fluid'>"+
		"<!--begin::Text-->"+
		"<div class='d-flex flex-column pr-5 flex-grow-1'>"+
		"<a href='./file/angebot/"+unescape(filename)+"' target='_blank' class='text-dark-75 text-hover-primary mb-1 font-weight-bolder font-size-lg'>"+unescape(filename)+"</a>"+
		"</div>"+
		"<span class='text-dark-75 font-weight-bolder font-size-sm py-2'>";
		if(mainStatus<7)
		 txt += "<button type='button' class='btn btn-danger' style='width:40px;height:40px;margin-left:20px;' onclick='delBildDatei()''> X </button></span>";
		"<!--end::Text-->"+
		"</div>"+
		"<!--end::Content-->"+
		"</div>";
	   txt += "</div>";
   }
   document.getElementById("uploadListDiv").innerHTML = txt;  
}

function delBildDatei(){
	document.getElementById("AngebotMainString13Modal").value = "";
	var xmlhttp;
	try{
	  xmlhttp = new XMLHttpRequest();
	}
	catch(e){
	  xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
	}
	xmlhttp.onreadystatechange=function(){
	  if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		 showBildDatei();
	  }
	}
	xmlhttp.open('POST','https://laaver-ajax.2euro.shop/intranet_Angebot_Verwalten_AJAX.asp',true);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xmlhttp.send("opt=8&prIDX="+mainIDX+"&sTime="+new Date().getTime());
}

function setFileType(UserID) {
	var fileInput = document.getElementById('sampleFile');
	//Get the file name
	var fileName = fileInput.files[0].name;
	//Get the file Extension 
	var fileExtension = fileName.split('.').pop();
	return String(UserID+"_"+String(new Date().getTime())+"."+String(fileExtension));
}

function chooseFileIcon(name){
	switch(name){
		case "doc": return "doc"; break;
		case "docx": return "doc"; break;
		case "xls": return "csv"; break;
		case "xlsx": return "csv"; break;
		case "csv": return "csv"; break;
		case "ppt": return "xml"; break;
		case "xml": return "xml"; break;
		case "jpg": return "jpg"; break;
		case "jpeg": return "jpg"; break;
		case "png": return "jpg"; break;
		case "ico": return "jpg"; break;
		case "pdf": return "pdf"; break;
		default: return "html"; break;
	}
}

function showSearchProduktDiv(value){
	var txt="";
	if(String(value).length>1){	    
		for(var j=0; j<ProduktListeArr.length; j++){
			if(unescape(ProduktListeArr[j].ProduktString2).toLowerCase().indexOf(unescape(value).toLowerCase())>=0){
				txt += "<div><img style='width:80px;height:80px;padding:5px;' src='/file/product/"+unescape(ProduktListeArr[j].ProduktString13)+"' />"+
						"<a style='width:100%;' href='javascript:setProduktSearchDivValue(\""+unescape(ProduktListeArr[j].prIDX)+"\")'>&nbsp;&nbsp;"+
						unescape(ProduktListeArr[j].ProduktString2)+"</a></div>";	
			}
		}				
	}
	document.getElementById("showProduktSearchDiv").innerHTML = txt;
}

function setProduktAngebotListe(){
	var splitStr = unescape(oneAngebotMain.AngebotMainString22).split(",");
	for(var x = 0; x < splitStr.length; x++) {
		ProduktAngebotListeArr.push(splitStr[x]);
	}
	showProduktShowListeDiv();
}

function setProduktSearchDivValue(value){
	var txt = String(document.getElementById("AngebotMainString22Modal").value);
	if(txt!="") txt += ",";
	txt += value;
	document.getElementById("AngebotMainString22Modal").value = txt;
	ProduktAngebotListeArr.push(value);
	document.getElementById("ProduktSearch").value = "";
	showProduktShowListeDiv();
}

function showProduktShowListeDiv(){
	var txt="";
	txt += "<div class='row'>";
	for(var i = 0; i < ProduktAngebotListeArr.length; i++) {
		for(var j=0; j<ProduktListeArr.length; j++){
			if(ProduktAngebotListeArr[i]==ProduktListeArr[j].prIDX){
				txt += "<div class='col-2'><img style='width:80px;height:80px;padding:5px;' src='/file/product/"+unescape(ProduktListeArr[j].ProduktString13)+"' /></div>"+
						"<div class='col-8 d-flex align-items-center'>"+unescape(ProduktListeArr[j].ProduktString2)+"</div>";
				if(mainStatus<7) 
					 txt += "<div class='col-2 d-flex align-items-center'><button type='button' class='btn btn-danger' style='width:40px;height:40px;margin-left:20px;' onclick='delBildDatei("+ProduktAngebotListeArr[i]+")''> X </button></span></div>";
				else txt += "<div class='col-2'></div>";	
				break;
			}
		}			
	}
	txt += "</div>";	
	document.getElementById("ProduktShowListeDiv").innerHTML = txt;
}

function delBildDatei(numberToRemove){	
	var numbers = String(document.getElementById("AngebotMainString22Modal").value).split(',').map(Number);
    var index = numbers.indexOf(numberToRemove);
    if (index > -1) {
        numbers.splice(index, 1);
		ProduktAngebotListeArr.splice(index, 1);
    }
    document.getElementById("AngebotMainString22Modal").value = numbers.join(',');
	showProduktShowListeDiv();
}

/****
根据下面的判定来定义
Int1：减免类型 - 1.减免Y金额 2.减免Y百分比 3.满金额减免金额 4.满金额减免百分比
促销策略的减免类型：
		1. Int1 = 1(此为套餐总价格)
		2. Int1 = 2
		3. Int1 = 2
		4. Int1 = 2
		5. Int1 = 3,4
		6. Int1 = 2
****/
function setFromAngebotMainInt3(idx){
	document.getElementById("AngebotMainString17Modal").setAttribute("disabled","disabled");
	document.getElementById("AngebotMainString18Modal").setAttribute("disabled","disabled");
	document.getElementById("AngebotMainString19Modal").setAttribute("disabled","disabled");
	document.getElementById("AngebotMainString20Modal").setAttribute("disabled","disabled");
	document.getElementById("AngebotMainString22Modal").setAttribute("disabled","disabled");
	document.getElementById("AngebotMainFloat1Modal").setAttribute("disabled","disabled");
	document.getElementById("AngebotMainFloat2Modal").setAttribute("disabled","disabled");
	document.getElementById("AngebotMainFloat3Modal").setAttribute("disabled","disabled");
	document.getElementById("ProduktListeDiv").style.display = "none";

	if(idx==1){
		selectElement("AngebotMainInt1Modal",0);
		removeOptionsExceptFirst("AngebotMainInt1Modal");		
		setAngebotMainInt1Option([1]);
		
		document.getElementById("AngebotMainString17Modal").value = "";
		document.getElementById("AngebotMainString18Modal").value = "";
		document.getElementById("AngebotMainString19Modal").value = "";
		document.getElementById("AngebotMainString20Modal").value = ""
		document.getElementById("AngebotMainString22Modal").value = "";
		
		//document.getElementById("AngebotMainFloat1Modal").value = 0;
		document.getElementById("AngebotMainFloat2Modal").value = 0;
		document.getElementById("AngebotMainFloat3Modal").value = 0;
		if(mainStatus<7) document.getElementById("AngebotMainFloat1Modal").removeAttribute("disabled");
		//document.getElementById("AngebotMainFloat2Modal").removeAttribute("disabled");
		//document.getElementById("AngebotMainFloat3Modal").removeAttribute("disabled");
	}else if(idx==6){
		selectElement("AngebotMainInt1Modal",0);
		removeOptionsExceptFirst("AngebotMainInt1Modal");
		setAngebotMainInt1Option([2]);
		
		document.getElementById("AngebotMainString17Modal").value = "";
		document.getElementById("AngebotMainString18Modal").value = "";
		document.getElementById("AngebotMainString19Modal").value = "";
		document.getElementById("AngebotMainString20Modal").value = "";
		//document.getElementById("AngebotMainString22Modal").value = "";
		
		document.getElementById("AngebotMainFloat1Modal").value = 0;
		//document.getElementById("AngebotMainFloat2Modal").value = 0;
		document.getElementById("AngebotMainFloat3Modal").value = 0;
		//document.getElementById("AngebotMainFloat1Modal").removeAttribute("disabled");
		if(mainStatus<7) document.getElementById("AngebotMainFloat2Modal").removeAttribute("disabled");
		//document.getElementById("AngebotMainFloat3Modal").removeAttribute("disabled");
		
		document.getElementById("ProduktListeDiv").style.display = "flex";
		if(mainStatus<7) document.getElementById("ProduktListeInsertDiv").style.display = "block";
		else document.getElementById("ProduktListeInsertDiv").style.display = "none";
	}else if(idx==2){
		selectElement("AngebotMainInt1Modal",0);
		removeOptionsExceptFirst("AngebotMainInt1Modal");
		setAngebotMainInt1Option([2]);
		
		if(mainStatus<7) document.getElementById("AngebotMainString17Modal").removeAttribute("disabled");
		document.getElementById("AngebotMainString18Modal").value = "";
		document.getElementById("AngebotMainString19Modal").value = "";
		document.getElementById("AngebotMainString20Modal").value = "";
		document.getElementById("AngebotMainString22Modal").value = "";
		
		document.getElementById("AngebotMainFloat1Modal").value = 0;
		//document.getElementById("AngebotMainFloat2Modal").value = 0;
		document.getElementById("AngebotMainFloat3Modal").value = 0;
		//document.getElementById("AngebotMainFloat1Modal").removeAttribute("disabled");
		if(mainStatus<7) document.getElementById("AngebotMainFloat2Modal").removeAttribute("disabled");
		//document.getElementById("AngebotMainFloat3Modal").removeAttribute("disabled");
	}else if(idx==3){
		selectElement("AngebotMainInt1Modal",0);
		removeOptionsExceptFirst("AngebotMainInt1Modal");
		setAngebotMainInt1Option([2]);
		
		if(mainStatus<7) document.getElementById("AngebotMainString18Modal").removeAttribute("disabled");
		document.getElementById("AngebotMainString17Modal").value = "";
		document.getElementById("AngebotMainString19Modal").value = "";
		document.getElementById("AngebotMainString20Modal").value = "";
		document.getElementById("AngebotMainString22Modal").value = "";
		
		document.getElementById("AngebotMainFloat1Modal").value = 0;
		//document.getElementById("AngebotMainFloat2Modal").value = 0;
		document.getElementById("AngebotMainFloat3Modal").value = 0;
		//document.getElementById("AngebotMainFloat1Modal").removeAttribute("disabled");
		if(mainStatus<7) document.getElementById("AngebotMainFloat2Modal").removeAttribute("disabled");
		//document.getElementById("AngebotMainFloat3Modal").removeAttribute("disabled");
	}else if(idx==4){
		selectElement("AngebotMainInt1Modal",0);
		removeOptionsExceptFirst("AngebotMainInt1Modal");
		setAngebotMainInt1Option([2]);
		
		if(mainStatus<7) document.getElementById("AngebotMainString19Modal").removeAttribute("disabled");
		document.getElementById("AngebotMainString17Modal").value = "";
		document.getElementById("AngebotMainString18Modal").value = "";
		document.getElementById("AngebotMainString20Modal").value = "";
		document.getElementById("AngebotMainString22Modal").value = "";
		
		document.getElementById("AngebotMainFloat1Modal").value = 0;
		//document.getElementById("AngebotMainFloat2Modal").value = 0;
		document.getElementById("AngebotMainFloat3Modal").value = 0;
		//if(mainStatus<7) document.getElementById("AngebotMainFloat1Modal").removeAttribute("disabled");
		if(mainStatus<7) document.getElementById("AngebotMainFloat2Modal").removeAttribute("disabled");
		//if(mainStatus<7) document.getElementById("AngebotMainFloat3Modal").removeAttribute("disabled");
	}else if(idx==5){
		selectElement("AngebotMainInt1Modal",0);
		removeOptionsExceptFirst("AngebotMainInt1Modal");
		setAngebotMainInt1Option([3,4]);
		
		if(mainStatus<7) document.getElementById("AngebotMainString20Modal").removeAttribute("disabled");
		document.getElementById("AngebotMainString17Modal").value = "";
		document.getElementById("AngebotMainString18Modal").value = "";
		document.getElementById("AngebotMainString19Modal").value = "";
		document.getElementById("AngebotMainString22Modal").value = "";
		
		//document.getElementById("AngebotMainFloat1Modal").value = 0;
		//document.getElementById("AngebotMainFloat2Modal").value = 0;
		//document.getElementById("AngebotMainFloat3Modal").value = 0;
		if(mainStatus<7) document.getElementById("AngebotMainFloat1Modal").removeAttribute("disabled");
		if(mainStatus<7) document.getElementById("AngebotMainFloat2Modal").removeAttribute("disabled");
		if(mainStatus<7) document.getElementById("AngebotMainFloat3Modal").removeAttribute("disabled");
	}
}

function setAngebotMainInt1Option(arr){
	var sel=document.getElementById("AngebotMainInt1Modal");
	for(var i=0; i<AngebotMainInt1Arr.length; i++){ 
	for(var j=0; j<arr.length; j++){
		if(arr[j]==AngebotMainInt1Arr[i][4]){
			var temp = document.createElement("option");
			temp.value=AngebotMainInt1Arr[i][4];
			temp.text=unescape(AngebotMainInt1Arr[i][langNum]);
			sel.add(temp,sel.options.length);
			break;
		}
	}}
	selectElement("AngebotMainInt1Modal",oneAngebotMain.AngebotMainInt1);
}

function getAngebotMainAttributName(param){
	var txt = "";
	for(var i=0; i<showAngebotMainAttributArr.length; i++){
		if(showAngebotMainAttributArr[i].Attribut==param) txt = unescape(showAngebotMainAttributArr[i].lang[langNum]);
	}
	
	return txt;
}

/****
你是促销优惠策略建议的专家，你所在的网店是https://laaver-website.2euro.shop/
网店的系统是Window Server，IIS，Plesk，Myexcel，node.js
网店所在的国家是德国

你有5套促销策略：
1. 产品组合（某几种产品组成的特价）
2. 产品类别（网店拥有的类别是：文具、工具、首饰、衣物、厨房用具、玩具、电子设备、家居用品、装饰品、艺术品、健康产品）
3. 根据节日（网店设计的节日有：新年、情人节、复活节、狂欢节、母亲节、父亲节、感恩节、万圣节、圣诞节）
4. 根据人生的特殊时刻（生日、派对、聚会、新生儿、洗礼、幼儿、儿童、小学入学、青少年、大学入学、毕业、订婚、结婚、结婚纪念日、房屋搬迁、购房、成立家庭、职业开始、职场成就、晋升礼物、老年人、退休、疾病慰问）
5. 根据一次性的优惠码（新客户、Newsletter分发的优惠码、一次性买满多少钱等等）
6. 单独产品

你的职责是给出促销建议，但是这些建议有以下的限制条件：
1. 一种产品在同一时候尽量只有一种促销策略（优惠码除外）
2. 一种产品在所有促销策略（优惠码除外）的加成，不能低于原价的70%
3. 你的促销策略需要考虑到当时的具体时间，通常是提前2个月，比如说在10月份的时候，就需要考虑到新年（1月1号）的促销，7月份的时候，就需要考虑到9月1号的小学入学，你需要考虑到德国的传统和习俗
4. 你的建议需要符合德国的法律法规
5. 一个促销内的所有产品应该含有尽量少的卖家（比如说促销内有３个产品，只有１个卖家都在销售这３个产品，那么这个卖家的３个产品将优先选出）
6. 产品德文名字的第二个词语不能相同（第一个通常为Personalisierte）

附件是网店产品的数据库列表，其中是产品类型名是德文（促销策略第2条），节日和时刻是德文（多项，促销策略第3和4条）。
你给出的建议都必须包含：
1. 促销的标题和广告语
2. 促销的原因、所含有的故事或者典故
5. 从excel文件中获取的产品，推荐5款产品（每个产品都需要给出序号、产品名、卖家名、产品类型）

当你每一次给出建议的时候都必须考虑到：
1. 以上的限制条件
2. 今天的日期
3. excel表格里的所有产品，并专注于产品名、卖家名、产品类型、节日和时刻
4. 你回答时说中文，说中文，说中文


促销表格Angebot_Main的参数：
String10：标题
String11：广告语
String12：内容
String13：图片1
String14：图片2
String15：图片3
String16：中文特价名
String17:产品类别名 - Int2 = 2
String18:节日名 - Int2 = 3
String19:特殊时刻名 - Int2 = 4

Int1：减免类型 - 1.减免Y金额 2.减免Y百分比 3.满X金额减免
促销策略的减免类型：
		1. Int1 = 1,2
		2. Int1 = 2
		3. Int1 = 2
		4. Int1 = 2
		5. Int1 = 1,2,3
		6. Int1 = 1,2

Float1：相对应的减免Y金额
Float2：相对应的减免Y百分比

Datum1：创建时间
Datum2：更新时间
Datum3：开始时间
Datum4：结束时间


促销子表格Angebot_Pos的参数：
Int1：产品prIDX
Float1：相对应的减免Y金额
Float2：相对应的减免Y百分比
Float3：满X金额

如何确定一个产品是否有特价：
1. Angebot_Main - String10,String11,String12
2. Angebot_Pos - Int1
3. Datum3<=时间<=Datum4
4. BIT1=1
****/
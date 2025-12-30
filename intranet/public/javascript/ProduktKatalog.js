var globalIDX = 0;
if (String(GetQueryString("prIDX")) != "" && String(GetQueryString("prIDX")) != "null" && String(GetQueryString("prIDX")) != "undefined")
    globalIDX = parseInt(GetQueryString("prIDX"));
var mainIDX = 0;

var ProduktKatalogArr = new Array();
var showProduktKatalogAttributArr = new Array();

showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("prIDX","parseInt",1,1,1,1,1,1,new Array("Serial Number","Seriennummer","Numéro de série","序列号")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("frIDX","parseInt",0,0,0,0,0,0,new Array("frIDX", "frIDX", "frIDX", "frIDX")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("Datum1","String",0,0,0,0,0,0,new Array("Creation Date","Erstellungsdatum","Date de création","创建日期")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("Datum2","String",0,0,0,0,0,0,new Array("Modification Date", "Änderungsdatum", "Date de modification", "更改日期")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("Datum3","String",0,0,0,0,0,0,new Array("Datum3","Datum3","Datum3","Datum3")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("Datum4","String",0,0,0,0,0,0,new Array("Datum4","Datum4","Datum4","Datum4")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("Status","parseInt",0,0,0,0,0,0,new Array("Status","Status","Statut","状态")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString1","String",0,10,10,10,10,10,new Array("English Name", "Englischer Name", "Nom anglais", "英文名")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString2","String",0,11,11,11,11,11,new Array("German Name", "Deutscher Name", "Nom allemand", "德文名")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString3","String",0,12,12,12,12,12,new Array("French Name", "Französischer Name", "Nom français", "法文名")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString4","String",0,13,13,13,13,13,new Array("Chinese Name", "Chinesischer Name", "Nom chinois", "中文名")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString5","String",0,0,0,0,0,0,new Array("Image", "Bild", "Image", "图片")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString6","String",0,0,0,0,0,0,new Array("ProduktKatalogString6","ProduktKatalogString6","ProduktKatalogString6","ProduktKatalogString6")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString7","String",0,0,0,0,0,0,new Array("ProduktKatalogString7","ProduktKatalogString7","ProduktKatalogString7","ProduktKatalogString7")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString8","String",0,0,0,0,0,0,new Array("ProduktKatalogString8","ProduktKatalogString8","ProduktKatalogString8","ProduktKatalogString8")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString9","String",0,0,0,0,0,0,new Array("ProduktKatalogString9","ProduktKatalogString9","ProduktKatalogString9","ProduktKatalogString9")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString10","String",0,0,0,0,0,0,new Array("Bild","Bild","Bild","Bild"))); //上传图片，不可用
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString11","String",0,0,0,0,0,0,new Array("ProduktKatalogString11","ProduktKatalogString11","ProduktKatalogString11","ProduktKatalogString11")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString12","String",0,0,0,0,0,0,new Array("ProduktKatalogString12","ProduktKatalogString12","ProduktKatalogString12","ProduktKatalogString12")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString13","String",0,0,0,0,0,0,new Array("ProduktKatalogString13","ProduktKatalogString13","ProduktKatalogString13","ProduktKatalogString13")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString14","String",0,0,0,0,0,0,new Array("ProduktKatalogString14","ProduktKatalogString14","ProduktKatalogString14","ProduktKatalogString14")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString15","String",0,0,0,0,0,0,new Array("ProduktKatalogString15","ProduktKatalogString15","ProduktKatalogString15","ProduktKatalogString15")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString16","String",0,0,0,0,0,0,new Array("ProduktKatalogString16","ProduktKatalogString16","ProduktKatalogString16","ProduktKatalogString16")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString17","String",0,0,0,0,0,0,new Array("ProduktKatalogString17","ProduktKatalogString17","ProduktKatalogString17","ProduktKatalogString17")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString18","String",0,0,0,0,0,0,new Array("ProduktKatalogString18","ProduktKatalogString18","ProduktKatalogString18","ProduktKatalogString18")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString19","String",0,0,0,0,0,0,new Array("ProduktKatalogString19","ProduktKatalogString19","ProduktKatalogString19","ProduktKatalogString19")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString20","String",0,0,0,0,0,0,new Array("ProduktKatalogString20","ProduktKatalogString20","ProduktKatalogString20","ProduktKatalogString20")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString21","String",0,0,0,0,0,0,new Array("ProduktKatalogString21","ProduktKatalogString21","ProduktKatalogString21","ProduktKatalogString21")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString22","String",0,0,0,0,0,0,new Array("ProduktKatalogString22","ProduktKatalogString22","ProduktKatalogString22","ProduktKatalogString22")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString23","String",0,0,0,0,0,0,new Array("ProduktKatalogString23","ProduktKatalogString23","ProduktKatalogString23","ProduktKatalogString23")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString24","String",0,0,0,0,0,0,new Array("ProduktKatalogString24","ProduktKatalogString24","ProduktKatalogString24","ProduktKatalogString24")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString25","String",0,0,0,0,0,0,new Array("ProduktKatalogString25","ProduktKatalogString25","ProduktKatalogString25","ProduktKatalogString25")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString26","String",0,0,0,0,0,0,new Array("ProduktKatalogString26","ProduktKatalogString26","ProduktKatalogString26","ProduktKatalogString26")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString27","String",0,0,0,0,0,0,new Array("ProduktKatalogString27","ProduktKatalogString27","ProduktKatalogString27","ProduktKatalogString27")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString28","String",0,0,0,0,0,0,new Array("ProduktKatalogString28","ProduktKatalogString28","ProduktKatalogString28","ProduktKatalogString28")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString29","String",0,0,0,0,0,0,new Array("ProduktKatalogString29","ProduktKatalogString29","ProduktKatalogString29","ProduktKatalogString29")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString30","String",0,0,0,0,0,0,new Array("ProduktKatalogString30","ProduktKatalogString30","ProduktKatalogString30","ProduktKatalogString30")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString31","String",0,0,0,0,0,0,new Array("ProduktKatalogString31","ProduktKatalogString31","ProduktKatalogString31","ProduktKatalogString31")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString32","String",0,0,0,0,0,0,new Array("ProduktKatalogString32","ProduktKatalogString32","ProduktKatalogString32","ProduktKatalogString32")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString33","String",0,0,0,0,0,0,new Array("ProduktKatalogString33","ProduktKatalogString33","ProduktKatalogString33","ProduktKatalogString33")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString34","String",0,0,0,0,0,0,new Array("ProduktKatalogString34","ProduktKatalogString34","ProduktKatalogString34","ProduktKatalogString34")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString35","String",0,0,0,0,0,0,new Array("ProduktKatalogString35","ProduktKatalogString35","ProduktKatalogString35","ProduktKatalogString35")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString36","String",0,0,0,0,0,0,new Array("ProduktKatalogString36","ProduktKatalogString36","ProduktKatalogString36","ProduktKatalogString36")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString37","String",0,0,0,0,0,0,new Array("ProduktKatalogString37","ProduktKatalogString37","ProduktKatalogString37","ProduktKatalogString37")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString38","String",0,0,0,0,0,0,new Array("ProduktKatalogString38","ProduktKatalogString38","ProduktKatalogString38","ProduktKatalogString38")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString39","String",0,0,0,0,0,0,new Array("ProduktKatalogString39","ProduktKatalogString39","ProduktKatalogString39","ProduktKatalogString39")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString40","String",0,0,0,0,0,0,new Array("ProduktKatalogString40","ProduktKatalogString40","ProduktKatalogString40","ProduktKatalogString40")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString41","String",0,0,0,0,0,0,new Array("ProduktKatalogString41","ProduktKatalogString41","ProduktKatalogString41","ProduktKatalogString41")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString42","String",0,0,0,0,0,0,new Array("ProduktKatalogString42","ProduktKatalogString42","ProduktKatalogString42","ProduktKatalogString42")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString43","String",0,0,0,0,0,0,new Array("ProduktKatalogString43","ProduktKatalogString43","ProduktKatalogString43","ProduktKatalogString43")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString44","String",0,0,0,0,0,0,new Array("ProduktKatalogString44","ProduktKatalogString44","ProduktKatalogString44","ProduktKatalogString44")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString45","String",0,0,0,0,0,0,new Array("ProduktKatalogString45","ProduktKatalogString45","ProduktKatalogString45","ProduktKatalogString45")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString46","String",0,0,0,0,0,0,new Array("ProduktKatalogString46","ProduktKatalogString46","ProduktKatalogString46","ProduktKatalogString46")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString47","String",0,0,0,0,0,0,new Array("ProduktKatalogString47","ProduktKatalogString47","ProduktKatalogString47","ProduktKatalogString47")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString48","String",0,0,0,0,0,0,new Array("ProduktKatalogString48","ProduktKatalogString48","ProduktKatalogString48","ProduktKatalogString48")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString49","String",0,0,0,0,0,0,new Array("ProduktKatalogString49","ProduktKatalogString49","ProduktKatalogString49","ProduktKatalogString49")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogString50","String",0,0,0,0,0,0,new Array("ProduktKatalogString50","ProduktKatalogString50","ProduktKatalogString50","ProduktKatalogString50")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt1","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt1","ProduktKatalogInt1","ProduktKatalogInt1","ProduktKatalogInt1")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt2","Int",0,2,2,2,2,2,new Array("Sort Order", "Sortierreihenfolge", "Ordre de tri", "排序")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt3","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt3","ProduktKatalogInt3","ProduktKatalogInt3","ProduktKatalogInt3")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt4","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt4","ProduktKatalogInt4","ProduktKatalogInt4","ProduktKatalogInt4")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt5","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt5","ProduktKatalogInt5","ProduktKatalogInt5","ProduktKatalogInt5")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt6","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt6","ProduktKatalogInt6","ProduktKatalogInt6","ProduktKatalogInt6")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt7","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt7","ProduktKatalogInt7","ProduktKatalogInt7","ProduktKatalogInt7")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt8","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt8","ProduktKatalogInt8","ProduktKatalogInt8","ProduktKatalogInt8")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt9","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt9","ProduktKatalogInt9","ProduktKatalogInt9","ProduktKatalogInt9")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt10","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt10","ProduktKatalogInt10","ProduktKatalogInt10","ProduktKatalogInt10")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt11","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt11","ProduktKatalogInt11","ProduktKatalogInt11","ProduktKatalogInt11")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt12","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt12","ProduktKatalogInt12","ProduktKatalogInt12","ProduktKatalogInt12")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt13","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt13","ProduktKatalogInt13","ProduktKatalogInt13","ProduktKatalogInt13")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt14","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt14","ProduktKatalogInt14","ProduktKatalogInt14","ProduktKatalogInt14")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt15","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt15","ProduktKatalogInt15","ProduktKatalogInt15","ProduktKatalogInt15")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt16","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt16","ProduktKatalogInt16","ProduktKatalogInt16","ProduktKatalogInt16")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt17","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt17","ProduktKatalogInt17","ProduktKatalogInt17","ProduktKatalogInt17")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt18","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt18","ProduktKatalogInt18","ProduktKatalogInt18","ProduktKatalogInt18")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt19","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt19","ProduktKatalogInt19","ProduktKatalogInt19","ProduktKatalogInt19")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt20","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt20","ProduktKatalogInt20","ProduktKatalogInt20","ProduktKatalogInt20")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt21","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt21","ProduktKatalogInt21","ProduktKatalogInt21","ProduktKatalogInt21")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt22","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt22","ProduktKatalogInt22","ProduktKatalogInt22","ProduktKatalogInt22")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt23","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt23","ProduktKatalogInt23","ProduktKatalogInt23","ProduktKatalogInt23")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt24","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt24","ProduktKatalogInt24","ProduktKatalogInt24","ProduktKatalogInt24")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt25","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt25","ProduktKatalogInt25","ProduktKatalogInt25","ProduktKatalogInt25")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt26","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt26","ProduktKatalogInt26","ProduktKatalogInt26","ProduktKatalogInt26")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt27","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt27","ProduktKatalogInt27","ProduktKatalogInt27","ProduktKatalogInt27")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt28","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt28","ProduktKatalogInt28","ProduktKatalogInt28","ProduktKatalogInt28")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt29","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt29","ProduktKatalogInt29","ProduktKatalogInt29","ProduktKatalogInt29")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt30","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt30","ProduktKatalogInt30","ProduktKatalogInt30","ProduktKatalogInt30")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt31","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt31","ProduktKatalogInt31","ProduktKatalogInt31","ProduktKatalogInt31")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt32","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt32","ProduktKatalogInt32","ProduktKatalogInt32","ProduktKatalogInt32")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt33","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt33","ProduktKatalogInt33","ProduktKatalogInt33","ProduktKatalogInt33")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt34","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt34","ProduktKatalogInt34","ProduktKatalogInt34","ProduktKatalogInt34")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt35","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt35","ProduktKatalogInt35","ProduktKatalogInt35","ProduktKatalogInt35")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt36","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt36","ProduktKatalogInt36","ProduktKatalogInt36","ProduktKatalogInt36")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt37","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt37","ProduktKatalogInt37","ProduktKatalogInt37","ProduktKatalogInt37")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt38","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt38","ProduktKatalogInt38","ProduktKatalogInt38","ProduktKatalogInt38")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt39","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt39","ProduktKatalogInt39","ProduktKatalogInt39","ProduktKatalogInt39")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogInt40","Int",0,0,0,0,0,0,new Array("ProduktKatalogInt40","ProduktKatalogInt40","ProduktKatalogInt40","ProduktKatalogInt40")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat1","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat1","ProduktKatalogFloat1","ProduktKatalogFloat1","ProduktKatalogFloat1")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat2","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat2","ProduktKatalogFloat2","ProduktKatalogFloat2","ProduktKatalogFloat2")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat3","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat3","ProduktKatalogFloat3","ProduktKatalogFloat3","ProduktKatalogFloat3")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat4","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat4","ProduktKatalogFloat4","ProduktKatalogFloat4","ProduktKatalogFloat4")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat5","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat5","ProduktKatalogFloat5","ProduktKatalogFloat5","ProduktKatalogFloat5")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat6","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat6","ProduktKatalogFloat6","ProduktKatalogFloat6","ProduktKatalogFloat6")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat7","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat7","ProduktKatalogFloat7","ProduktKatalogFloat7","ProduktKatalogFloat7")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat8","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat8","ProduktKatalogFloat8","ProduktKatalogFloat8","ProduktKatalogFloat8")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat9","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat9","ProduktKatalogFloat9","ProduktKatalogFloat9","ProduktKatalogFloat9")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat10","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat10","ProduktKatalogFloat10","ProduktKatalogFloat10","ProduktKatalogFloat10")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat11","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat11","ProduktKatalogFloat11","ProduktKatalogFloat11","ProduktKatalogFloat11")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat12","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat12","ProduktKatalogFloat12","ProduktKatalogFloat12","ProduktKatalogFloat12")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat13","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat13","ProduktKatalogFloat13","ProduktKatalogFloat13","ProduktKatalogFloat13")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat14","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat14","ProduktKatalogFloat14","ProduktKatalogFloat14","ProduktKatalogFloat14")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat15","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat15","ProduktKatalogFloat15","ProduktKatalogFloat15","ProduktKatalogFloat15")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat16","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat16","ProduktKatalogFloat16","ProduktKatalogFloat16","ProduktKatalogFloat16")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat17","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat17","ProduktKatalogFloat17","ProduktKatalogFloat17","ProduktKatalogFloat17")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat18","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat18","ProduktKatalogFloat18","ProduktKatalogFloat18","ProduktKatalogFloat18")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat19","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat19","ProduktKatalogFloat19","ProduktKatalogFloat19","ProduktKatalogFloat19")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat20","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat20","ProduktKatalogFloat20","ProduktKatalogFloat20","ProduktKatalogFloat20")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat21","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat21","ProduktKatalogFloat21","ProduktKatalogFloat21","ProduktKatalogFloat21")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat22","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat22","ProduktKatalogFloat22","ProduktKatalogFloat22","ProduktKatalogFloat22")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat23","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat23","ProduktKatalogFloat23","ProduktKatalogFloat23","ProduktKatalogFloat23")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat24","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat24","ProduktKatalogFloat24","ProduktKatalogFloat24","ProduktKatalogFloat24")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat25","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat25","ProduktKatalogFloat25","ProduktKatalogFloat25","ProduktKatalogFloat25")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat26","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat26","ProduktKatalogFloat26","ProduktKatalogFloat26","ProduktKatalogFloat26")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat27","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat27","ProduktKatalogFloat27","ProduktKatalogFloat27","ProduktKatalogFloat27")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat28","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat28","ProduktKatalogFloat28","ProduktKatalogFloat28","ProduktKatalogFloat28")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat29","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat29","ProduktKatalogFloat29","ProduktKatalogFloat29","ProduktKatalogFloat29")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat30","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat30","ProduktKatalogFloat30","ProduktKatalogFloat30","ProduktKatalogFloat30")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat31","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat31","ProduktKatalogFloat31","ProduktKatalogFloat31","ProduktKatalogFloat31")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat32","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat32","ProduktKatalogFloat32","ProduktKatalogFloat32","ProduktKatalogFloat32")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat33","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat33","ProduktKatalogFloat33","ProduktKatalogFloat33","ProduktKatalogFloat33")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat34","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat34","ProduktKatalogFloat34","ProduktKatalogFloat34","ProduktKatalogFloat34")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat35","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat35","ProduktKatalogFloat35","ProduktKatalogFloat35","ProduktKatalogFloat35")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat36","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat36","ProduktKatalogFloat36","ProduktKatalogFloat36","ProduktKatalogFloat36")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat37","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat37","ProduktKatalogFloat37","ProduktKatalogFloat37","ProduktKatalogFloat37")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat38","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat38","ProduktKatalogFloat38","ProduktKatalogFloat38","ProduktKatalogFloat38")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat39","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat39","ProduktKatalogFloat39","ProduktKatalogFloat39","ProduktKatalogFloat39")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogFloat40","Float",0,0,0,0,0,0,new Array("ProduktKatalogFloat40","ProduktKatalogFloat40","ProduktKatalogFloat40","ProduktKatalogFloat40")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogBIT1","BIT",0,0,0,0,0,0,new Array("ProduktKatalogBIT1","ProduktKatalogBIT1","ProduktKatalogBIT1","ProduktKatalogBIT1")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogBIT2","BIT",0,0,0,0,0,0,new Array("ProduktKatalogBIT2","ProduktKatalogBIT2","ProduktKatalogBIT2","ProduktKatalogBIT2")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogBIT3","BIT",0,0,0,0,0,0,new Array("ProduktKatalogBIT3","ProduktKatalogBIT3","ProduktKatalogBIT3","ProduktKatalogBIT3")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogBIT4","BIT",0,0,0,0,0,0,new Array("ProduktKatalogBIT4","ProduktKatalogBIT4","ProduktKatalogBIT4","ProduktKatalogBIT4")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogBIT5","BIT",0,0,0,0,0,0,new Array("ProduktKatalogBIT5","ProduktKatalogBIT5","ProduktKatalogBIT5","ProduktKatalogBIT5")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogBIT6","BIT",0,0,0,0,0,0,new Array("ProduktKatalogBIT6","ProduktKatalogBIT6","ProduktKatalogBIT6","ProduktKatalogBIT6")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogBIT7","BIT",0,0,0,0,0,0,new Array("ProduktKatalogBIT7","ProduktKatalogBIT7","ProduktKatalogBIT7","ProduktKatalogBIT7")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogBIT8","BIT",0,0,0,0,0,0,new Array("ProduktKatalogBIT8","ProduktKatalogBIT8","ProduktKatalogBIT8","ProduktKatalogBIT8")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogBIT9","BIT",0,0,0,0,0,0,new Array("ProduktKatalogBIT9","ProduktKatalogBIT9","ProduktKatalogBIT9","ProduktKatalogBIT9")));
showProduktKatalogAttributArr.push(new showProduktKatalogAttributObj("ProduktKatalogBIT10","BIT",0,0,0,0,0,0,new Array("ProduktKatalogBIT10","ProduktKatalogBIT10","ProduktKatalogBIT10","ProduktKatalogBIT10")));

var ProduktKatalogStatusArr = new Array();
ProduktKatalogStatusArr.push(["Active", "Aktiv", "Actif", "有效", 1]);
ProduktKatalogStatusArr.push(["Deactive", "Deaktiv", "Désactiver", "无效", 9]);

var ProduktKatalogInt1Arr = new Array();

function GetQueryString(string) {
    var reg = new RegExp('(^|&)' + string + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}

function initGUI() {
	document.getElementById("kt_header_menu").innerHTML = ProduktTopText;
	document.getElementById("menu-item-1").classList.add("menu-item-here", "menu-item-rel", "menu-item-active");

	
    showProduktKatalogAttributArr.sort(compare('indexA'));
    for (var i = 0; i < showProduktKatalogAttributArr.length; i++) {
        if (showProduktKatalogAttributArr[i].indexA > 0) {
            eval("if(document.getElementById('" + showProduktKatalogAttributArr[i].Attribut + "SearchDiv'))document.getElementById('" + showProduktKatalogAttributArr[i].Attribut + "SearchDiv').style.display='block';");
        }
    }
	document.getElementById("prIDXSearchLabel").innerHTML = showProduktKatalogAttributArr[0].lang[langNum];
    var sel = document.getElementById("StatusSearch");
    for (var i = 0; i < ProduktKatalogStatusArr.length; i++) {
        var temp = document.createElement("option");
        temp.value = ProduktKatalogStatusArr[i][4];
        temp.text = unescape(ProduktKatalogStatusArr[i][langNum]);
        sel.add(temp, sel.options.length);
    }
    var sel = document.getElementById("StatusModal");
    for (var i = 0; i < ProduktKatalogStatusArr.length; i++) {
        var temp = document.createElement("option");
        temp.value = ProduktKatalogStatusArr[i][4];
        temp.text = unescape(ProduktKatalogStatusArr[i][langNum]);
        if (ProduktKatalogStatusArr[i][3] == 1)
            temp.selected = "selected";
        sel.add(temp, sel.options.length);
    }

    var sel = document.getElementById("ProduktKatalogInt1Search");
    for (var i = 0; i < ProduktKatalogInt1Arr.length; i++) {
        var temp = document.createElement("option");
        temp.value = ProduktKatalogInt1Arr[i][4];
        temp.text = unescape(ProduktKatalogInt1Arr[i][langNum]);
        sel.add(temp, sel.options.length);
    }
    var sel = document.getElementById("ProduktKatalogInt1Modal");
    for (var i = 0; i < ProduktKatalogInt1Arr.length; i++) {
        var temp = document.createElement("option");
        temp.value = ProduktKatalogInt1Arr[i][4];
        temp.text = unescape(ProduktKatalogInt1Arr[i][langNum]);
        if (ProduktKatalogInt1Arr[i][3] == 1)
            temp.selected = "selected";
        sel.add(temp, sel.options.length);
    }

    document.getElementById("prIDXSearchLabel").innerHTML = getProduktKatalogAttributName("prIDX");
    document.getElementById("frIDXSearchLabel").innerHTML = getProduktKatalogAttributName("frIDX");
    document.getElementById("Datum1_1SearchLabel").innerHTML = getProduktKatalogAttributName("Datum1") + " von";
    document.getElementById("Datum1_2SearchLabel").innerHTML = getProduktKatalogAttributName("Datum1") + " bis";
    document.getElementById("Datum2_1SearchLabel").innerHTML = getProduktKatalogAttributName("Datum2") + " von";
    document.getElementById("Datum2_2SearchLabel").innerHTML = getProduktKatalogAttributName("Datum2") + " bis";
    document.getElementById("Datum3_1SearchLabel").innerHTML = getProduktKatalogAttributName("Datum3") + " von";
    document.getElementById("Datum3_2SearchLabel").innerHTML = getProduktKatalogAttributName("Datum3") + " bis";
    document.getElementById("Datum4_1SearchLabel").innerHTML = getProduktKatalogAttributName("Datum4") + " von";
    document.getElementById("Datum4_2SearchLabel").innerHTML = getProduktKatalogAttributName("Datum4") + " bis";
    document.getElementById("StatusSearchLabel").innerHTML = getProduktKatalogAttributName("Status");

    document.getElementById("ProduktKatalogString1SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString1");
    document.getElementById("ProduktKatalogString2SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString2");
    document.getElementById("ProduktKatalogString3SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString3");
    document.getElementById("ProduktKatalogString4SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString4");
    document.getElementById("ProduktKatalogString5SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString5");
    document.getElementById("ProduktKatalogString6SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString6");
    document.getElementById("ProduktKatalogString7SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString7");
    document.getElementById("ProduktKatalogString8SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString8");
    document.getElementById("ProduktKatalogString9SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString9");
    document.getElementById("ProduktKatalogString10SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString10");
    document.getElementById("ProduktKatalogString11SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString11");
    document.getElementById("ProduktKatalogString12SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString12");
    document.getElementById("ProduktKatalogString13SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString13");
    document.getElementById("ProduktKatalogString14SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString14");
    document.getElementById("ProduktKatalogString15SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString15");
    document.getElementById("ProduktKatalogString16SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString16");
    document.getElementById("ProduktKatalogString17SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString17");
    document.getElementById("ProduktKatalogString18SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString18");
    document.getElementById("ProduktKatalogString19SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString19");
    document.getElementById("ProduktKatalogString20SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString20");
    document.getElementById("ProduktKatalogString21SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString21");
    document.getElementById("ProduktKatalogString22SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString22");
    document.getElementById("ProduktKatalogString23SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString23");
    document.getElementById("ProduktKatalogString24SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString24");
    document.getElementById("ProduktKatalogString25SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString25");
    document.getElementById("ProduktKatalogString26SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString26");
    document.getElementById("ProduktKatalogString27SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString27");
    document.getElementById("ProduktKatalogString28SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString28");
    document.getElementById("ProduktKatalogString29SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString29");
    document.getElementById("ProduktKatalogString30SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString30");
    document.getElementById("ProduktKatalogString31SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString31");
    document.getElementById("ProduktKatalogString32SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString32");
    document.getElementById("ProduktKatalogString33SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString33");
    document.getElementById("ProduktKatalogString34SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString34");
    document.getElementById("ProduktKatalogString35SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString35");
    document.getElementById("ProduktKatalogString36SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString36");
    document.getElementById("ProduktKatalogString37SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString37");
    document.getElementById("ProduktKatalogString38SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString38");
    document.getElementById("ProduktKatalogString39SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString39");
    document.getElementById("ProduktKatalogString40SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString40");
    document.getElementById("ProduktKatalogString41SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString41");
    document.getElementById("ProduktKatalogString42SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString42");
    document.getElementById("ProduktKatalogString43SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString43");
    document.getElementById("ProduktKatalogString44SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString44");
    document.getElementById("ProduktKatalogString45SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString45");
    document.getElementById("ProduktKatalogString46SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString46");
    document.getElementById("ProduktKatalogString47SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString47");
    document.getElementById("ProduktKatalogString48SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString48");
    document.getElementById("ProduktKatalogString49SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString49");
    document.getElementById("ProduktKatalogString50SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString50");

    document.getElementById("ProduktKatalogInt1SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt1");
    document.getElementById("ProduktKatalogInt2SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt2");
    document.getElementById("ProduktKatalogInt3SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt3");
    document.getElementById("ProduktKatalogInt4SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt4");
    document.getElementById("ProduktKatalogInt5SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt5");
    document.getElementById("ProduktKatalogInt6SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt6");
    document.getElementById("ProduktKatalogInt7SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt7");
    document.getElementById("ProduktKatalogInt8SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt8");
    document.getElementById("ProduktKatalogInt9SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt9");
    document.getElementById("ProduktKatalogInt10SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt10");
    document.getElementById("ProduktKatalogInt11SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt11");
    document.getElementById("ProduktKatalogInt12SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt12");
    document.getElementById("ProduktKatalogInt13SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt13");
    document.getElementById("ProduktKatalogInt14SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt14");
    document.getElementById("ProduktKatalogInt15SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt15");
    document.getElementById("ProduktKatalogInt16SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt16");
    document.getElementById("ProduktKatalogInt17SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt17");
    document.getElementById("ProduktKatalogInt18SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt18");
    document.getElementById("ProduktKatalogInt19SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt19");
    document.getElementById("ProduktKatalogInt20SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt20");
    document.getElementById("ProduktKatalogInt21SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt21");
    document.getElementById("ProduktKatalogInt22SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt22");
    document.getElementById("ProduktKatalogInt23SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt23");
    document.getElementById("ProduktKatalogInt24SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt24");
    document.getElementById("ProduktKatalogInt25SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt25");
    document.getElementById("ProduktKatalogInt26SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt26");
    document.getElementById("ProduktKatalogInt27SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt27");
    document.getElementById("ProduktKatalogInt28SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt28");
    document.getElementById("ProduktKatalogInt29SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt29");
    document.getElementById("ProduktKatalogInt30SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt30");
    document.getElementById("ProduktKatalogInt31SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt31");
    document.getElementById("ProduktKatalogInt32SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt32");
    document.getElementById("ProduktKatalogInt33SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt33");
    document.getElementById("ProduktKatalogInt34SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt34");
    document.getElementById("ProduktKatalogInt35SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt35");
    document.getElementById("ProduktKatalogInt36SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt36");
    document.getElementById("ProduktKatalogInt37SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt37");
    document.getElementById("ProduktKatalogInt38SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt38");
    document.getElementById("ProduktKatalogInt39SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt39");
    document.getElementById("ProduktKatalogInt40SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt40");

    document.getElementById("ProduktKatalogFloat1SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat1");
    document.getElementById("ProduktKatalogFloat2SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat2");
    document.getElementById("ProduktKatalogFloat3SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat3");
    document.getElementById("ProduktKatalogFloat4SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat4");
    document.getElementById("ProduktKatalogFloat5SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat5");
    document.getElementById("ProduktKatalogFloat6SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat6");
    document.getElementById("ProduktKatalogFloat7SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat7");
    document.getElementById("ProduktKatalogFloat8SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat8");
    document.getElementById("ProduktKatalogFloat9SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat9");
    document.getElementById("ProduktKatalogFloat10SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat10");
    document.getElementById("ProduktKatalogFloat11SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat11");
    document.getElementById("ProduktKatalogFloat12SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat12");
    document.getElementById("ProduktKatalogFloat13SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat13");
    document.getElementById("ProduktKatalogFloat14SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat14");
    document.getElementById("ProduktKatalogFloat15SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat15");
    document.getElementById("ProduktKatalogFloat16SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat16");
    document.getElementById("ProduktKatalogFloat17SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat17");
    document.getElementById("ProduktKatalogFloat18SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat18");
    document.getElementById("ProduktKatalogFloat19SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat19");
    document.getElementById("ProduktKatalogFloat20SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat20");
    document.getElementById("ProduktKatalogFloat21SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat21");
    document.getElementById("ProduktKatalogFloat22SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat22");
    document.getElementById("ProduktKatalogFloat23SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat23");
    document.getElementById("ProduktKatalogFloat24SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat24");
    document.getElementById("ProduktKatalogFloat25SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat25");
    document.getElementById("ProduktKatalogFloat26SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat26");
    document.getElementById("ProduktKatalogFloat27SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat27");
    document.getElementById("ProduktKatalogFloat28SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat28");
    document.getElementById("ProduktKatalogFloat29SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat29");
    document.getElementById("ProduktKatalogFloat30SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat30");
    document.getElementById("ProduktKatalogFloat31SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat31");
    document.getElementById("ProduktKatalogFloat32SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat32");
    document.getElementById("ProduktKatalogFloat33SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat33");
    document.getElementById("ProduktKatalogFloat34SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat34");
    document.getElementById("ProduktKatalogFloat35SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat35");
    document.getElementById("ProduktKatalogFloat36SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat36");
    document.getElementById("ProduktKatalogFloat37SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat37");
    document.getElementById("ProduktKatalogFloat38SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat38");
    document.getElementById("ProduktKatalogFloat39SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat39");
    document.getElementById("ProduktKatalogFloat40SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat40");

    document.getElementById("ProduktKatalogBIT1SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT1");
    document.getElementById("ProduktKatalogBIT2SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT2");
    document.getElementById("ProduktKatalogBIT3SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT3");
    document.getElementById("ProduktKatalogBIT4SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT4");
    document.getElementById("ProduktKatalogBIT5SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT5");
    document.getElementById("ProduktKatalogBIT6SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT6");
    document.getElementById("ProduktKatalogBIT7SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT7");
    document.getElementById("ProduktKatalogBIT8SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT8");
    document.getElementById("ProduktKatalogBIT9SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT9");
    document.getElementById("ProduktKatalogBIT10SearchLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT10");

    document.getElementById("prIDXModalLabel").innerHTML = getProduktKatalogAttributName("prIDX");
    document.getElementById("frIDXModalLabel").innerHTML = getProduktKatalogAttributName("frIDX");
    document.getElementById("Datum1ModalLabel").innerHTML = getProduktKatalogAttributName("Datum1");
    document.getElementById("Datum2ModalLabel").innerHTML = getProduktKatalogAttributName("Datum2");
    document.getElementById("Datum3ModalLabel").innerHTML = getProduktKatalogAttributName("Datum3");
    document.getElementById("Datum4ModalLabel").innerHTML = getProduktKatalogAttributName("Datum4");
    document.getElementById("StatusModalLabel").innerHTML = getProduktKatalogAttributName("Status");

    document.getElementById("ProduktKatalogString1ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString1");
    document.getElementById("ProduktKatalogString2ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString2");
    document.getElementById("ProduktKatalogString3ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString3");
    document.getElementById("ProduktKatalogString4ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString4");
    document.getElementById("ProduktKatalogString5ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString5");
    document.getElementById("ProduktKatalogString6ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString6");
    document.getElementById("ProduktKatalogString7ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString7");
    document.getElementById("ProduktKatalogString8ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString8");
    document.getElementById("ProduktKatalogString9ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString9");
    document.getElementById("ProduktKatalogString10ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString10");
    document.getElementById("ProduktKatalogString11ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString11");
    document.getElementById("ProduktKatalogString12ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString12");
    document.getElementById("ProduktKatalogString13ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString13");
    document.getElementById("ProduktKatalogString14ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString14");
    document.getElementById("ProduktKatalogString15ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString15");
    document.getElementById("ProduktKatalogString16ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString16");
    document.getElementById("ProduktKatalogString17ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString17");
    document.getElementById("ProduktKatalogString18ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString18");
    document.getElementById("ProduktKatalogString19ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString19");
    document.getElementById("ProduktKatalogString20ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString20");
    document.getElementById("ProduktKatalogString21ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString21");
    document.getElementById("ProduktKatalogString22ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString22");
    document.getElementById("ProduktKatalogString23ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString23");
    document.getElementById("ProduktKatalogString24ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString24");
    document.getElementById("ProduktKatalogString25ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString25");
    document.getElementById("ProduktKatalogString26ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString26");
    document.getElementById("ProduktKatalogString27ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString27");
    document.getElementById("ProduktKatalogString28ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString28");
    document.getElementById("ProduktKatalogString29ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString29");
    document.getElementById("ProduktKatalogString30ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString30");
    document.getElementById("ProduktKatalogString31ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString31");
    document.getElementById("ProduktKatalogString32ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString32");
    document.getElementById("ProduktKatalogString33ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString33");
    document.getElementById("ProduktKatalogString34ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString34");
    document.getElementById("ProduktKatalogString35ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString35");
    document.getElementById("ProduktKatalogString36ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString36");
    document.getElementById("ProduktKatalogString37ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString37");
    document.getElementById("ProduktKatalogString38ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString38");
    document.getElementById("ProduktKatalogString39ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString39");
    document.getElementById("ProduktKatalogString40ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString40");
    document.getElementById("ProduktKatalogString41ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString41");
    document.getElementById("ProduktKatalogString42ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString42");
    document.getElementById("ProduktKatalogString43ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString43");
    document.getElementById("ProduktKatalogString44ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString44");
    document.getElementById("ProduktKatalogString45ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString45");
    document.getElementById("ProduktKatalogString46ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString46");
    document.getElementById("ProduktKatalogString47ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString47");
    document.getElementById("ProduktKatalogString48ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString48");
    document.getElementById("ProduktKatalogString49ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString49");
    document.getElementById("ProduktKatalogString50ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString50");

    document.getElementById("ProduktKatalogInt1ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt1");
    document.getElementById("ProduktKatalogInt2ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt2");
    document.getElementById("ProduktKatalogInt3ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt3");
    document.getElementById("ProduktKatalogInt4ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt4");
    document.getElementById("ProduktKatalogInt5ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt5");
    document.getElementById("ProduktKatalogInt6ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt6");
    document.getElementById("ProduktKatalogInt7ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt7");
    document.getElementById("ProduktKatalogInt8ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt8");
    document.getElementById("ProduktKatalogInt9ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt9");
    document.getElementById("ProduktKatalogInt10ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt10");
    document.getElementById("ProduktKatalogInt11ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt11");
    document.getElementById("ProduktKatalogInt12ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt12");
    document.getElementById("ProduktKatalogInt13ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt13");
    document.getElementById("ProduktKatalogInt14ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt14");
    document.getElementById("ProduktKatalogInt15ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt15");
    document.getElementById("ProduktKatalogInt16ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt16");
    document.getElementById("ProduktKatalogInt17ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt17");
    document.getElementById("ProduktKatalogInt18ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt18");
    document.getElementById("ProduktKatalogInt19ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt19");
    document.getElementById("ProduktKatalogInt20ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt20");
    document.getElementById("ProduktKatalogInt21ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt21");
    document.getElementById("ProduktKatalogInt22ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt22");
    document.getElementById("ProduktKatalogInt23ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt23");
    document.getElementById("ProduktKatalogInt24ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt24");
    document.getElementById("ProduktKatalogInt25ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt25");
    document.getElementById("ProduktKatalogInt26ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt26");
    document.getElementById("ProduktKatalogInt27ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt27");
    document.getElementById("ProduktKatalogInt28ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt28");
    document.getElementById("ProduktKatalogInt29ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt29");
    document.getElementById("ProduktKatalogInt30ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt30");
    document.getElementById("ProduktKatalogInt31ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt31");
    document.getElementById("ProduktKatalogInt32ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt32");
    document.getElementById("ProduktKatalogInt33ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt33");
    document.getElementById("ProduktKatalogInt34ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt34");
    document.getElementById("ProduktKatalogInt35ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt35");
    document.getElementById("ProduktKatalogInt36ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt36");
    document.getElementById("ProduktKatalogInt37ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt37");
    document.getElementById("ProduktKatalogInt38ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt38");
    document.getElementById("ProduktKatalogInt39ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt39");
    document.getElementById("ProduktKatalogInt40ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogInt40");

    document.getElementById("ProduktKatalogFloat1ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat1");
    document.getElementById("ProduktKatalogFloat2ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat2");
    document.getElementById("ProduktKatalogFloat3ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat3");
    document.getElementById("ProduktKatalogFloat4ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat4");
    document.getElementById("ProduktKatalogFloat5ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat5");
    document.getElementById("ProduktKatalogFloat6ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat6");
    document.getElementById("ProduktKatalogFloat7ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat7");
    document.getElementById("ProduktKatalogFloat8ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat8");
    document.getElementById("ProduktKatalogFloat9ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat9");
    document.getElementById("ProduktKatalogFloat10ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat10");
    document.getElementById("ProduktKatalogFloat11ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat11");
    document.getElementById("ProduktKatalogFloat12ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat12");
    document.getElementById("ProduktKatalogFloat13ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat13");
    document.getElementById("ProduktKatalogFloat14ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat14");
    document.getElementById("ProduktKatalogFloat15ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat15");
    document.getElementById("ProduktKatalogFloat16ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat16");
    document.getElementById("ProduktKatalogFloat17ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat17");
    document.getElementById("ProduktKatalogFloat18ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat18");
    document.getElementById("ProduktKatalogFloat19ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat19");
    document.getElementById("ProduktKatalogFloat20ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat20");
    document.getElementById("ProduktKatalogFloat21ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat21");
    document.getElementById("ProduktKatalogFloat22ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat22");
    document.getElementById("ProduktKatalogFloat23ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat23");
    document.getElementById("ProduktKatalogFloat24ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat24");
    document.getElementById("ProduktKatalogFloat25ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat25");
    document.getElementById("ProduktKatalogFloat26ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat26");
    document.getElementById("ProduktKatalogFloat27ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat27");
    document.getElementById("ProduktKatalogFloat28ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat28");
    document.getElementById("ProduktKatalogFloat29ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat29");
    document.getElementById("ProduktKatalogFloat30ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat30");
    document.getElementById("ProduktKatalogFloat31ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat31");
    document.getElementById("ProduktKatalogFloat32ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat32");
    document.getElementById("ProduktKatalogFloat33ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat33");
    document.getElementById("ProduktKatalogFloat34ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat34");
    document.getElementById("ProduktKatalogFloat35ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat35");
    document.getElementById("ProduktKatalogFloat36ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat36");
    document.getElementById("ProduktKatalogFloat37ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat37");
    document.getElementById("ProduktKatalogFloat38ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat38");
    document.getElementById("ProduktKatalogFloat39ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat39");
    document.getElementById("ProduktKatalogFloat40ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogFloat40");

    document.getElementById("ProduktKatalogBIT1ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT1");
    document.getElementById("ProduktKatalogBIT2ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT2");
    document.getElementById("ProduktKatalogBIT3ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT3");
    document.getElementById("ProduktKatalogBIT4ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT4");
    document.getElementById("ProduktKatalogBIT5ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT5");
    document.getElementById("ProduktKatalogBIT6ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT6");
    document.getElementById("ProduktKatalogBIT7ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT7");
    document.getElementById("ProduktKatalogBIT8ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT8");
    document.getElementById("ProduktKatalogBIT9ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT9");
    document.getElementById("ProduktKatalogBIT10ModalLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogBIT10");

    document.getElementById("ProduktKatalogString1NewLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString1");
    document.getElementById("ProduktKatalogString2NewLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString2");
	document.getElementById("ProduktKatalogString3NewLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString3");
	document.getElementById("ProduktKatalogString4NewLabel").innerHTML = getProduktKatalogAttributName("ProduktKatalogString4");

    hideLoadingDiv();
    searchProduktKatalog();
}

function searchProduktKatalog() {
    showLoadingDiv();
    //document.getElementById('ErgebnisSpan').innerHTML = 0;
    document.getElementById('tableDiv').innerHTML = "";
    //document.getElementById('button_add_vat').style.display = "none";
    document.getElementById('button_export_excel').style.display = "none";

    var prIDX = 0
      , frIDX = 0
      , Datum1_1 = ""
      , Datum2_1 = ""
      , Datum3_1 = ""
      , Datum4_1 = ""
      , Datum1_2 = ""
      , Datum2_2 = ""
      , Datum3_2 = ""
      , Datum4_2 = ""
      , Status = 0;
    var ProduktKatalogString1 = ""
      , ProduktKatalogString2 = ""
      , ProduktKatalogString3 = ""
      , ProduktKatalogString4 = ""
      , ProduktKatalogString5 = ""
      , ProduktKatalogString6 = ""
      , ProduktKatalogString7 = ""
      , ProduktKatalogString8 = ""
      , ProduktKatalogString9 = ""
      , ProduktKatalogString10 = ""
      , ProduktKatalogString11 = ""
      , ProduktKatalogString12 = ""
      , ProduktKatalogString13 = ""
      , ProduktKatalogString14 = ""
      , ProduktKatalogString15 = ""
      , ProduktKatalogString16 = ""
      , ProduktKatalogString17 = ""
      , ProduktKatalogString18 = ""
      , ProduktKatalogString19 = ""
      , ProduktKatalogString20 = ""
      , ProduktKatalogString21 = ""
      , ProduktKatalogString22 = ""
      , ProduktKatalogString23 = ""
      , ProduktKatalogString24 = ""
      , ProduktKatalogString25 = ""
      , ProduktKatalogString26 = ""
      , ProduktKatalogString27 = ""
      , ProduktKatalogString28 = ""
      , ProduktKatalogString29 = ""
      , ProduktKatalogString30 = ""
      , ProduktKatalogString31 = ""
      , ProduktKatalogString32 = ""
      , ProduktKatalogString33 = ""
      , ProduktKatalogString34 = ""
      , ProduktKatalogString35 = ""
      , ProduktKatalogString36 = ""
      , ProduktKatalogString37 = ""
      , ProduktKatalogString38 = ""
      , ProduktKatalogString39 = ""
      , ProduktKatalogString40 = ""
      , ProduktKatalogString41 = ""
      , ProduktKatalogString42 = ""
      , ProduktKatalogString43 = ""
      , ProduktKatalogString44 = ""
      , ProduktKatalogString45 = ""
      , ProduktKatalogString46 = ""
      , ProduktKatalogString47 = ""
      , ProduktKatalogString48 = ""
      , ProduktKatalogString49 = ""
      , ProduktKatalogString50 = ""
      , ProduktKatalogInt1 = 0
      , ProduktKatalogInt2 = 0
      , ProduktKatalogInt3 = 0
      , ProduktKatalogInt4 = 0
      , ProduktKatalogInt5 = 0
      , ProduktKatalogInt6 = 0
      , ProduktKatalogInt7 = 0
      , ProduktKatalogInt8 = 0
      , ProduktKatalogInt9 = 0
      , ProduktKatalogInt10 = 0
      , ProduktKatalogInt11 = 0
      , ProduktKatalogInt12 = 0
      , ProduktKatalogInt13 = 0
      , ProduktKatalogInt14 = 0
      , ProduktKatalogInt15 = 0
      , ProduktKatalogInt16 = 0
      , ProduktKatalogInt17 = 0
      , ProduktKatalogInt18 = 0
      , ProduktKatalogInt19 = 0
      , ProduktKatalogInt20 = 0
      , ProduktKatalogInt21 = 0
      , ProduktKatalogInt22 = 0
      , ProduktKatalogInt23 = 0
      , ProduktKatalogInt24 = 0
      , ProduktKatalogInt25 = 0
      , ProduktKatalogInt26 = 0
      , ProduktKatalogInt27 = 0
      , ProduktKatalogInt28 = 0
      , ProduktKatalogInt29 = 0
      , ProduktKatalogInt30 = 0
      , ProduktKatalogInt31 = 0
      , ProduktKatalogInt32 = 0
      , ProduktKatalogInt33 = 0
      , ProduktKatalogInt34 = 0
      , ProduktKatalogInt35 = 0
      , ProduktKatalogInt36 = 0
      , ProduktKatalogInt37 = 0
      , ProduktKatalogInt38 = 0
      , ProduktKatalogInt39 = 0
      , ProduktKatalogInt40 = 0
      , ProduktKatalogFloat1 = 0
      , ProduktKatalogFloat2 = 0
      , ProduktKatalogFloat3 = 0
      , ProduktKatalogFloat4 = 0
      , ProduktKatalogFloat5 = 0
      , ProduktKatalogFloat6 = 0
      , ProduktKatalogFloat7 = 0
      , ProduktKatalogFloat8 = 0
      , ProduktKatalogFloat9 = 0
      , ProduktKatalogFloat10 = 0
      , ProduktKatalogFloat11 = 0
      , ProduktKatalogFloat12 = 0
      , ProduktKatalogFloat13 = 0
      , ProduktKatalogFloat14 = 0
      , ProduktKatalogFloat15 = 0
      , ProduktKatalogFloat16 = 0
      , ProduktKatalogFloat17 = 0
      , ProduktKatalogFloat18 = 0
      , ProduktKatalogFloat19 = 0
      , ProduktKatalogFloat20 = 0
      , ProduktKatalogFloat21 = 0
      , ProduktKatalogFloat22 = 0
      , ProduktKatalogFloat23 = 0
      , ProduktKatalogFloat24 = 0
      , ProduktKatalogFloat25 = 0
      , ProduktKatalogFloat26 = 0
      , ProduktKatalogFloat27 = 0
      , ProduktKatalogFloat28 = 0
      , ProduktKatalogFloat29 = 0
      , ProduktKatalogFloat30 = 0
      , ProduktKatalogFloat31 = 0
      , ProduktKatalogFloat32 = 0
      , ProduktKatalogFloat33 = 0
      , ProduktKatalogFloat34 = 0
      , ProduktKatalogFloat35 = 0
      , ProduktKatalogFloat36 = 0
      , ProduktKatalogFloat37 = 0
      , ProduktKatalogFloat38 = 0
      , ProduktKatalogFloat39 = 0
      , ProduktKatalogFloat40 = 0
      , ProduktKatalogBIT1 = 0
      , ProduktKatalogBIT2 = 0
      , ProduktKatalogBIT3 = 0
      , ProduktKatalogBIT4 = 0
      , ProduktKatalogBIT5 = 0
      , ProduktKatalogBIT6 = 0
      , ProduktKatalogBIT7 = 0
      , ProduktKatalogBIT8 = 0
      , ProduktKatalogBIT9 = 0
      , ProduktKatalogBIT10 = 0;

    if (document.getElementById("prIDXSearch").value != "")
        prIDX = parseInt(document.getElementById("prIDXSearch").value);
    if (document.getElementById("frIDXSearch").value != "")
        frIDX = parseInt(document.getElementById("frIDXSearch").value);
    if (globalIDX > 0)
        prIDX = parseInt(globalIDX);
    Datum1_1 = escape(escape(document.getElementById("Datum1_1Search").value));
    Datum2_1 = escape(escape(document.getElementById("Datum2_1Search").value));
    Datum3_1 = escape(escape(document.getElementById("Datum3_1Search").value));
    Datum4_1 = escape(escape(document.getElementById("Datum4_1Search").value));
    Datum1_2 = escape(escape(document.getElementById("Datum1_2Search").value));
    Datum2_2 = escape(escape(document.getElementById("Datum2_2Search").value));
    Datum3_2 = escape(escape(document.getElementById("Datum3_2Search").value));
    Datum4_2 = escape(escape(document.getElementById("Datum4_2Search").value));
    Status = parseInt(document.getElementById("StatusSearch").value);

    ProduktKatalogString1 = escape(escape(document.getElementById("ProduktKatalogString1Search").value));
    ProduktKatalogString2 = escape(escape(document.getElementById("ProduktKatalogString2Search").value));
    ProduktKatalogString3 = escape(escape(document.getElementById("ProduktKatalogString3Search").value));
    ProduktKatalogString4 = escape(escape(document.getElementById("ProduktKatalogString4Search").value));
    ProduktKatalogString5 = escape(escape(document.getElementById("ProduktKatalogString5Search").value));
    ProduktKatalogString6 = escape(escape(document.getElementById("ProduktKatalogString6Search").value));
    ProduktKatalogString7 = escape(escape(document.getElementById("ProduktKatalogString7Search").value));
    ProduktKatalogString8 = escape(escape(document.getElementById("ProduktKatalogString8Search").value));
    ProduktKatalogString9 = escape(escape(document.getElementById("ProduktKatalogString9Search").value));
    ProduktKatalogString10 = escape(escape(document.getElementById("ProduktKatalogString10Search").value));
    ProduktKatalogString11 = escape(escape(document.getElementById("ProduktKatalogString11Search").value));
    ProduktKatalogString12 = escape(escape(document.getElementById("ProduktKatalogString12Search").value));
    ProduktKatalogString13 = escape(escape(document.getElementById("ProduktKatalogString13Search").value));
    ProduktKatalogString14 = escape(escape(document.getElementById("ProduktKatalogString14Search").value));
    ProduktKatalogString15 = escape(escape(document.getElementById("ProduktKatalogString15Search").value));
    ProduktKatalogString16 = escape(escape(document.getElementById("ProduktKatalogString16Search").value));
    ProduktKatalogString17 = escape(escape(document.getElementById("ProduktKatalogString17Search").value));
    ProduktKatalogString18 = escape(escape(document.getElementById("ProduktKatalogString18Search").value));
    ProduktKatalogString19 = escape(escape(document.getElementById("ProduktKatalogString19Search").value));
    ProduktKatalogString20 = escape(escape(document.getElementById("ProduktKatalogString20Search").value));
    ProduktKatalogString21 = escape(escape(document.getElementById("ProduktKatalogString21Search").value));
    ProduktKatalogString22 = escape(escape(document.getElementById("ProduktKatalogString22Search").value));
    ProduktKatalogString23 = escape(escape(document.getElementById("ProduktKatalogString23Search").value));
    ProduktKatalogString24 = escape(escape(document.getElementById("ProduktKatalogString24Search").value));
    ProduktKatalogString25 = escape(escape(document.getElementById("ProduktKatalogString25Search").value));
    ProduktKatalogString26 = escape(escape(document.getElementById("ProduktKatalogString26Search").value));
    ProduktKatalogString27 = escape(escape(document.getElementById("ProduktKatalogString27Search").value));
    ProduktKatalogString28 = escape(escape(document.getElementById("ProduktKatalogString28Search").value));
    ProduktKatalogString29 = escape(escape(document.getElementById("ProduktKatalogString29Search").value));
    ProduktKatalogString30 = escape(escape(document.getElementById("ProduktKatalogString30Search").value));
    ProduktKatalogString31 = escape(escape(document.getElementById("ProduktKatalogString31Search").value));
    ProduktKatalogString32 = escape(escape(document.getElementById("ProduktKatalogString32Search").value));
    ProduktKatalogString33 = escape(escape(document.getElementById("ProduktKatalogString33Search").value));
    ProduktKatalogString34 = escape(escape(document.getElementById("ProduktKatalogString34Search").value));
    ProduktKatalogString35 = escape(escape(document.getElementById("ProduktKatalogString35Search").value));
    ProduktKatalogString36 = escape(escape(document.getElementById("ProduktKatalogString36Search").value));
    ProduktKatalogString37 = escape(escape(document.getElementById("ProduktKatalogString37Search").value));
    ProduktKatalogString38 = escape(escape(document.getElementById("ProduktKatalogString38Search").value));
    ProduktKatalogString39 = escape(escape(document.getElementById("ProduktKatalogString39Search").value));
    ProduktKatalogString40 = escape(escape(document.getElementById("ProduktKatalogString40Search").value));
    ProduktKatalogString41 = escape(escape(document.getElementById("ProduktKatalogString41Search").value));
    ProduktKatalogString42 = escape(escape(document.getElementById("ProduktKatalogString42Search").value));
    ProduktKatalogString43 = escape(escape(document.getElementById("ProduktKatalogString43Search").value));
    ProduktKatalogString44 = escape(escape(document.getElementById("ProduktKatalogString44Search").value));
    ProduktKatalogString45 = escape(escape(document.getElementById("ProduktKatalogString45Search").value));
    ProduktKatalogString46 = escape(escape(document.getElementById("ProduktKatalogString46Search").value));
    ProduktKatalogString47 = escape(escape(document.getElementById("ProduktKatalogString47Search").value));
    ProduktKatalogString48 = escape(escape(document.getElementById("ProduktKatalogString48Search").value));
    ProduktKatalogString49 = escape(escape(document.getElementById("ProduktKatalogString49Search").value));
    ProduktKatalogString50 = escape(escape(document.getElementById("ProduktKatalogString50Search").value));

    if (document.getElementById("ProduktKatalogInt1Search").value != "")
        ProduktKatalogInt1 = parseInt(document.getElementById("ProduktKatalogInt1Search").value);
    if (document.getElementById("ProduktKatalogInt2Search").value != "")
        ProduktKatalogInt2 = parseInt(document.getElementById("ProduktKatalogInt2Search").value);
    if (document.getElementById("ProduktKatalogInt3Search").value != "")
        ProduktKatalogInt3 = parseInt(document.getElementById("ProduktKatalogInt3Search").value);
    if (document.getElementById("ProduktKatalogInt4Search").value != "")
        ProduktKatalogInt4 = parseInt(document.getElementById("ProduktKatalogInt4Search").value);
    if (document.getElementById("ProduktKatalogInt5Search").value != "")
        ProduktKatalogInt5 = parseInt(document.getElementById("ProduktKatalogInt5Search").value);
    if (document.getElementById("ProduktKatalogInt6Search").value != "")
        ProduktKatalogInt6 = parseInt(document.getElementById("ProduktKatalogInt6Search").value);
    if (document.getElementById("ProduktKatalogInt7Search").value != "")
        ProduktKatalogInt7 = parseInt(document.getElementById("ProduktKatalogInt7Search").value);
    if (document.getElementById("ProduktKatalogInt8Search").value != "")
        ProduktKatalogInt8 = parseInt(document.getElementById("ProduktKatalogInt8Search").value);
    if (document.getElementById("ProduktKatalogInt9Search").value != "")
        ProduktKatalogInt9 = parseInt(document.getElementById("ProduktKatalogInt9Search").value);
    if (document.getElementById("ProduktKatalogInt10Search").value != "")
        ProduktKatalogInt10 = parseInt(document.getElementById("ProduktKatalogInt10Search").value);
    if (document.getElementById("ProduktKatalogInt11Search").value != "")
        ProduktKatalogInt11 = parseInt(document.getElementById("ProduktKatalogInt11Search").value);
    if (document.getElementById("ProduktKatalogInt12Search").value != "")
        ProduktKatalogInt12 = parseInt(document.getElementById("ProduktKatalogInt12Search").value);
    if (document.getElementById("ProduktKatalogInt13Search").value != "")
        ProduktKatalogInt13 = parseInt(document.getElementById("ProduktKatalogInt13Search").value);
    if (document.getElementById("ProduktKatalogInt14Search").value != "")
        ProduktKatalogInt14 = parseInt(document.getElementById("ProduktKatalogInt14Search").value);
    if (document.getElementById("ProduktKatalogInt15Search").value != "")
        ProduktKatalogInt15 = parseInt(document.getElementById("ProduktKatalogInt15Search").value);
    if (document.getElementById("ProduktKatalogInt16Search").value != "")
        ProduktKatalogInt16 = parseInt(document.getElementById("ProduktKatalogInt16Search").value);
    if (document.getElementById("ProduktKatalogInt17Search").value != "")
        ProduktKatalogInt17 = parseInt(document.getElementById("ProduktKatalogInt17Search").value);
    if (document.getElementById("ProduktKatalogInt18Search").value != "")
        ProduktKatalogInt18 = parseInt(document.getElementById("ProduktKatalogInt18Search").value);
    if (document.getElementById("ProduktKatalogInt19Search").value != "")
        ProduktKatalogInt19 = parseInt(document.getElementById("ProduktKatalogInt19Search").value);
    if (document.getElementById("ProduktKatalogInt20Search").value != "")
        ProduktKatalogInt20 = parseInt(document.getElementById("ProduktKatalogInt20Search").value);
    if (document.getElementById("ProduktKatalogInt21Search").value != "")
        ProduktKatalogInt21 = parseInt(document.getElementById("ProduktKatalogInt21Search").value);
    if (document.getElementById("ProduktKatalogInt22Search").value != "")
        ProduktKatalogInt22 = parseInt(document.getElementById("ProduktKatalogInt22Search").value);
    if (document.getElementById("ProduktKatalogInt23Search").value != "")
        ProduktKatalogInt23 = parseInt(document.getElementById("ProduktKatalogInt23Search").value);
    if (document.getElementById("ProduktKatalogInt24Search").value != "")
        ProduktKatalogInt24 = parseInt(document.getElementById("ProduktKatalogInt24Search").value);
    if (document.getElementById("ProduktKatalogInt25Search").value != "")
        ProduktKatalogInt25 = parseInt(document.getElementById("ProduktKatalogInt25Search").value);
    if (document.getElementById("ProduktKatalogInt26Search").value != "")
        ProduktKatalogInt26 = parseInt(document.getElementById("ProduktKatalogInt26Search").value);
    if (document.getElementById("ProduktKatalogInt27Search").value != "")
        ProduktKatalogInt27 = parseInt(document.getElementById("ProduktKatalogInt27Search").value);
    if (document.getElementById("ProduktKatalogInt28Search").value != "")
        ProduktKatalogInt28 = parseInt(document.getElementById("ProduktKatalogInt28Search").value);
    if (document.getElementById("ProduktKatalogInt29Search").value != "")
        ProduktKatalogInt29 = parseInt(document.getElementById("ProduktKatalogInt29Search").value);
    if (document.getElementById("ProduktKatalogInt30Search").value != "")
        ProduktKatalogInt30 = parseInt(document.getElementById("ProduktKatalogInt30Search").value);
    if (document.getElementById("ProduktKatalogInt31Search").value != "")
        ProduktKatalogInt31 = parseInt(document.getElementById("ProduktKatalogInt31Search").value);
    if (document.getElementById("ProduktKatalogInt32Search").value != "")
        ProduktKatalogInt32 = parseInt(document.getElementById("ProduktKatalogInt32Search").value);
    if (document.getElementById("ProduktKatalogInt33Search").value != "")
        ProduktKatalogInt33 = parseInt(document.getElementById("ProduktKatalogInt33Search").value);
    if (document.getElementById("ProduktKatalogInt34Search").value != "")
        ProduktKatalogInt34 = parseInt(document.getElementById("ProduktKatalogInt34Search").value);
    if (document.getElementById("ProduktKatalogInt35Search").value != "")
        ProduktKatalogInt35 = parseInt(document.getElementById("ProduktKatalogInt35Search").value);
    if (document.getElementById("ProduktKatalogInt36Search").value != "")
        ProduktKatalogInt36 = parseInt(document.getElementById("ProduktKatalogInt36Search").value);
    if (document.getElementById("ProduktKatalogInt37Search").value != "")
        ProduktKatalogInt37 = parseInt(document.getElementById("ProduktKatalogInt37Search").value);
    if (document.getElementById("ProduktKatalogInt38Search").value != "")
        ProduktKatalogInt38 = parseInt(document.getElementById("ProduktKatalogInt38Search").value);
    if (document.getElementById("ProduktKatalogInt39Search").value != "")
        ProduktKatalogInt39 = parseInt(document.getElementById("ProduktKatalogInt39Search").value);
    if (document.getElementById("ProduktKatalogInt40Search").value != "")
        ProduktKatalogInt40 = parseInt(document.getElementById("ProduktKatalogInt40Search").value);

    if (document.getElementById("ProduktKatalogFloat1Search").value != "")
        ProduktKatalogFloat1 = parseFloat(document.getElementById("ProduktKatalogFloat1Search").value);
    if (document.getElementById("ProduktKatalogFloat2Search").value != "")
        ProduktKatalogFloat2 = parseFloat(document.getElementById("ProduktKatalogFloat2Search").value);
    if (document.getElementById("ProduktKatalogFloat3Search").value != "")
        ProduktKatalogFloat3 = parseFloat(document.getElementById("ProduktKatalogFloat3Search").value);
    if (document.getElementById("ProduktKatalogFloat4Search").value != "")
        ProduktKatalogFloat4 = parseFloat(document.getElementById("ProduktKatalogFloat4Search").value);
    if (document.getElementById("ProduktKatalogFloat5Search").value != "")
        ProduktKatalogFloat5 = parseFloat(document.getElementById("ProduktKatalogFloat5Search").value);
    if (document.getElementById("ProduktKatalogFloat6Search").value != "")
        ProduktKatalogFloat6 = parseFloat(document.getElementById("ProduktKatalogFloat6Search").value);
    if (document.getElementById("ProduktKatalogFloat7Search").value != "")
        ProduktKatalogFloat7 = parseFloat(document.getElementById("ProduktKatalogFloat7Search").value);
    if (document.getElementById("ProduktKatalogFloat8Search").value != "")
        ProduktKatalogFloat8 = parseFloat(document.getElementById("ProduktKatalogFloat8Search").value);
    if (document.getElementById("ProduktKatalogFloat9Search").value != "")
        ProduktKatalogFloat9 = parseFloat(document.getElementById("ProduktKatalogFloat9Search").value);
    if (document.getElementById("ProduktKatalogFloat10Search").value != "")
        ProduktKatalogFloat10 = parseFloat(document.getElementById("ProduktKatalogFloat10Search").value);
    if (document.getElementById("ProduktKatalogFloat11Search").value != "")
        ProduktKatalogFloat11 = parseFloat(document.getElementById("ProduktKatalogFloat11Search").value);
    if (document.getElementById("ProduktKatalogFloat12Search").value != "")
        ProduktKatalogFloat12 = parseFloat(document.getElementById("ProduktKatalogFloat12Search").value);
    if (document.getElementById("ProduktKatalogFloat13Search").value != "")
        ProduktKatalogFloat13 = parseFloat(document.getElementById("ProduktKatalogFloat13Search").value);
    if (document.getElementById("ProduktKatalogFloat14Search").value != "")
        ProduktKatalogFloat14 = parseFloat(document.getElementById("ProduktKatalogFloat14Search").value);
    if (document.getElementById("ProduktKatalogFloat15Search").value != "")
        ProduktKatalogFloat15 = parseFloat(document.getElementById("ProduktKatalogFloat15Search").value);
    if (document.getElementById("ProduktKatalogFloat16Search").value != "")
        ProduktKatalogFloat16 = parseFloat(document.getElementById("ProduktKatalogFloat16Search").value);
    if (document.getElementById("ProduktKatalogFloat17Search").value != "")
        ProduktKatalogFloat17 = parseFloat(document.getElementById("ProduktKatalogFloat17Search").value);
    if (document.getElementById("ProduktKatalogFloat18Search").value != "")
        ProduktKatalogFloat18 = parseFloat(document.getElementById("ProduktKatalogFloat18Search").value);
    if (document.getElementById("ProduktKatalogFloat19Search").value != "")
        ProduktKatalogFloat19 = parseFloat(document.getElementById("ProduktKatalogFloat19Search").value);
    if (document.getElementById("ProduktKatalogFloat20Search").value != "")
        ProduktKatalogFloat20 = parseFloat(document.getElementById("ProduktKatalogFloat20Search").value);
    if (document.getElementById("ProduktKatalogFloat21Search").value != "")
        ProduktKatalogFloat21 = parseFloat(document.getElementById("ProduktKatalogFloat21Search").value);
    if (document.getElementById("ProduktKatalogFloat22Search").value != "")
        ProduktKatalogFloat22 = parseFloat(document.getElementById("ProduktKatalogFloat22Search").value);
    if (document.getElementById("ProduktKatalogFloat23Search").value != "")
        ProduktKatalogFloat23 = parseFloat(document.getElementById("ProduktKatalogFloat23Search").value);
    if (document.getElementById("ProduktKatalogFloat24Search").value != "")
        ProduktKatalogFloat24 = parseFloat(document.getElementById("ProduktKatalogFloat24Search").value);
    if (document.getElementById("ProduktKatalogFloat25Search").value != "")
        ProduktKatalogFloat25 = parseFloat(document.getElementById("ProduktKatalogFloat25Search").value);
    if (document.getElementById("ProduktKatalogFloat26Search").value != "")
        ProduktKatalogFloat26 = parseFloat(document.getElementById("ProduktKatalogFloat26Search").value);
    if (document.getElementById("ProduktKatalogFloat27Search").value != "")
        ProduktKatalogFloat27 = parseFloat(document.getElementById("ProduktKatalogFloat27Search").value);
    if (document.getElementById("ProduktKatalogFloat28Search").value != "")
        ProduktKatalogFloat28 = parseFloat(document.getElementById("ProduktKatalogFloat28Search").value);
    if (document.getElementById("ProduktKatalogFloat29Search").value != "")
        ProduktKatalogFloat29 = parseFloat(document.getElementById("ProduktKatalogFloat29Search").value);
    if (document.getElementById("ProduktKatalogFloat30Search").value != "")
        ProduktKatalogFloat30 = parseFloat(document.getElementById("ProduktKatalogFloat30Search").value);
    if (document.getElementById("ProduktKatalogFloat31Search").value != "")
        ProduktKatalogFloat31 = parseFloat(document.getElementById("ProduktKatalogFloat31Search").value);
    if (document.getElementById("ProduktKatalogFloat32Search").value != "")
        ProduktKatalogFloat32 = parseFloat(document.getElementById("ProduktKatalogFloat32Search").value);
    if (document.getElementById("ProduktKatalogFloat33Search").value != "")
        ProduktKatalogFloat33 = parseFloat(document.getElementById("ProduktKatalogFloat33Search").value);
    if (document.getElementById("ProduktKatalogFloat34Search").value != "")
        ProduktKatalogFloat34 = parseFloat(document.getElementById("ProduktKatalogFloat34Search").value);
    if (document.getElementById("ProduktKatalogFloat35Search").value != "")
        ProduktKatalogFloat35 = parseFloat(document.getElementById("ProduktKatalogFloat35Search").value);
    if (document.getElementById("ProduktKatalogFloat36Search").value != "")
        ProduktKatalogFloat36 = parseFloat(document.getElementById("ProduktKatalogFloat36Search").value);
    if (document.getElementById("ProduktKatalogFloat37Search").value != "")
        ProduktKatalogFloat37 = parseFloat(document.getElementById("ProduktKatalogFloat37Search").value);
    if (document.getElementById("ProduktKatalogFloat38Search").value != "")
        ProduktKatalogFloat38 = parseFloat(document.getElementById("ProduktKatalogFloat38Search").value);
    if (document.getElementById("ProduktKatalogFloat39Search").value != "")
        ProduktKatalogFloat39 = parseFloat(document.getElementById("ProduktKatalogFloat39Search").value);
    if (document.getElementById("ProduktKatalogFloat40Search").value != "")
        ProduktKatalogFloat40 = parseFloat(document.getElementById("ProduktKatalogFloat40Search").value);

    if (document.getElementById("ProduktKatalogBIT1Search").checked)
        ProduktKatalogBIT1 = 1;
    if (document.getElementById("ProduktKatalogBIT2Search").checked)
        ProduktKatalogBIT2 = 1;
    if (document.getElementById("ProduktKatalogBIT3Search").checked)
        ProduktKatalogBIT3 = 1;
    if (document.getElementById("ProduktKatalogBIT4Search").checked)
        ProduktKatalogBIT4 = 1;
    if (document.getElementById("ProduktKatalogBIT5Search").checked)
        ProduktKatalogBIT5 = 1;
    if (document.getElementById("ProduktKatalogBIT6Search").checked)
        ProduktKatalogBIT6 = 1;
    if (document.getElementById("ProduktKatalogBIT7Search").checked)
        ProduktKatalogBIT7 = 1;
    if (document.getElementById("ProduktKatalogBIT8Search").checked)
        ProduktKatalogBIT8 = 1;
    if (document.getElementById("ProduktKatalogBIT9Search").checked)
        ProduktKatalogBIT9 = 1;
    if (document.getElementById("ProduktKatalogBIT10Search").checked)
        ProduktKatalogBIT10 = 1;

    var sql = "";
    if (prIDX != "")
        sql += "AND mainTable.prIDX = '" + prIDX + "' ";
    if (frIDX != "")
        sql += "AND mainTable.frIDX = '" + frIDX + "' ";
    if (Datum1_1 != "")
        sql += "AND DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') >= '" + Datum1_1 + "' ";
    if (Datum1_2 != "")
        sql += "AND DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') <= '" + Datum1_2 + "' ";
    if (Datum2_1 != "")
        sql += "AND DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') >= '" + Datum2_1 + "' ";
    if (Datum2_2 != "")
        sql += "AND DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') <= '" + Datum2_2 + "' ";
    if (Datum3_1 != "")
        sql += "AND DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') >= '" + Datum3_1 + "' ";
    if (Datum3_2 != "")
        sql += "AND DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') <= '" + Datum3_2 + "' ";
    if (Datum4_1 != "")
        sql += "AND DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') >= '" + Datum4_1 + "' ";
    if (Datum4_2 != "")
        sql += "AND DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') <= '" + Datum4_2 + "' ";
    if (Status != "")
        sql += "AND mainTable.Status = '" + Status + "' ";

    if (ProduktKatalogString1 != "")
        sql += "AND mainTable.ProduktKatalogString1 LIKE '%" + ProduktKatalogString1 + "%' ";
    if (ProduktKatalogString2 != "")
        sql += "AND mainTable.ProduktKatalogString2 LIKE '%" + ProduktKatalogString2 + "%' ";
    if (ProduktKatalogString3 != "")
        sql += "AND mainTable.ProduktKatalogString3 LIKE '%" + ProduktKatalogString3 + "%' ";
    if (ProduktKatalogString4 != "")
        sql += "AND mainTable.ProduktKatalogString4 LIKE '%" + ProduktKatalogString4 + "%' ";
    if (ProduktKatalogString5 != "")
        sql += "AND mainTable.ProduktKatalogString5 LIKE '%" + ProduktKatalogString5 + "%' ";
    if (ProduktKatalogString6 != "")
        sql += "AND mainTable.ProduktKatalogString6 LIKE '%" + ProduktKatalogString6 + "%' ";
    if (ProduktKatalogString7 != "")
        sql += "AND mainTable.ProduktKatalogString7 LIKE '%" + ProduktKatalogString7 + "%' ";
    if (ProduktKatalogString8 != "")
        sql += "AND mainTable.ProduktKatalogString8 LIKE '%" + ProduktKatalogString8 + "%' ";
    if (ProduktKatalogString9 != "")
        sql += "AND mainTable.ProduktKatalogString9 LIKE '%" + ProduktKatalogString9 + "%' ";
    if (ProduktKatalogString10 != "")
        sql += "AND mainTable.ProduktKatalogString10 LIKE '%" + ProduktKatalogString10 + "%' ";
    if (ProduktKatalogString11 != "")
        sql += "AND mainTable.ProduktKatalogString11 LIKE '%" + ProduktKatalogString11 + "%' ";
    if (ProduktKatalogString12 != "")
        sql += "AND mainTable.ProduktKatalogString12 LIKE '%" + ProduktKatalogString12 + "%' ";
    if (ProduktKatalogString13 != "")
        sql += "AND mainTable.ProduktKatalogString13 LIKE '%" + ProduktKatalogString13 + "%' ";
    if (ProduktKatalogString14 != "")
        sql += "AND mainTable.ProduktKatalogString14 LIKE '%" + ProduktKatalogString14 + "%' ";
    if (ProduktKatalogString15 != "")
        sql += "AND mainTable.ProduktKatalogString15 LIKE '%" + ProduktKatalogString15 + "%' ";
    if (ProduktKatalogString16 != "")
        sql += "AND mainTable.ProduktKatalogString16 LIKE '%" + ProduktKatalogString16 + "%' ";
    if (ProduktKatalogString17 != "")
        sql += "AND mainTable.ProduktKatalogString17 LIKE '%" + ProduktKatalogString17 + "%' ";
    if (ProduktKatalogString18 != "")
        sql += "AND mainTable.ProduktKatalogString18 LIKE '%" + ProduktKatalogString18 + "%' ";
    if (ProduktKatalogString19 != "")
        sql += "AND mainTable.ProduktKatalogString19 LIKE '%" + ProduktKatalogString19 + "%' ";
    if (ProduktKatalogString20 != "")
        sql += "AND mainTable.ProduktKatalogString20 LIKE '%" + ProduktKatalogString20 + "%' ";
    if (ProduktKatalogString21 != "")
        sql += "AND mainTable.ProduktKatalogString21 LIKE '%" + ProduktKatalogString21 + "%' ";
    if (ProduktKatalogString22 != "")
        sql += "AND mainTable.ProduktKatalogString22 LIKE '%" + ProduktKatalogString22 + "%' ";
    if (ProduktKatalogString23 != "")
        sql += "AND mainTable.ProduktKatalogString23 LIKE '%" + ProduktKatalogString23 + "%' ";
    if (ProduktKatalogString24 != "")
        sql += "AND mainTable.ProduktKatalogString24 LIKE '%" + ProduktKatalogString24 + "%' ";
    if (ProduktKatalogString25 != "")
        sql += "AND mainTable.ProduktKatalogString25 LIKE '%" + ProduktKatalogString25 + "%' ";
    if (ProduktKatalogString26 != "")
        sql += "AND mainTable.ProduktKatalogString26 LIKE '%" + ProduktKatalogString26 + "%' ";
    if (ProduktKatalogString27 != "")
        sql += "AND mainTable.ProduktKatalogString27 LIKE '%" + ProduktKatalogString27 + "%' ";
    if (ProduktKatalogString28 != "")
        sql += "AND mainTable.ProduktKatalogString28 LIKE '%" + ProduktKatalogString28 + "%' ";
    if (ProduktKatalogString29 != "")
        sql += "AND mainTable.ProduktKatalogString29 LIKE '%" + ProduktKatalogString29 + "%' ";
    if (ProduktKatalogString30 != "")
        sql += "AND mainTable.ProduktKatalogString30 LIKE '%" + ProduktKatalogString30 + "%' ";
    if (ProduktKatalogString31 != "")
        sql += "AND mainTable.ProduktKatalogString31 LIKE '%" + ProduktKatalogString31 + "%' ";
    if (ProduktKatalogString32 != "")
        sql += "AND mainTable.ProduktKatalogString32 LIKE '%" + ProduktKatalogString32 + "%' ";
    if (ProduktKatalogString33 != "")
        sql += "AND mainTable.ProduktKatalogString33 LIKE '%" + ProduktKatalogString33 + "%' ";
    if (ProduktKatalogString34 != "")
        sql += "AND mainTable.ProduktKatalogString34 LIKE '%" + ProduktKatalogString34 + "%' ";
    if (ProduktKatalogString35 != "")
        sql += "AND mainTable.ProduktKatalogString35 LIKE '%" + ProduktKatalogString35 + "%' ";
    if (ProduktKatalogString36 != "")
        sql += "AND mainTable.ProduktKatalogString36 LIKE '%" + ProduktKatalogString36 + "%' ";
    if (ProduktKatalogString37 != "")
        sql += "AND mainTable.ProduktKatalogString37 LIKE '%" + ProduktKatalogString37 + "%' ";
    if (ProduktKatalogString38 != "")
        sql += "AND mainTable.ProduktKatalogString38 LIKE '%" + ProduktKatalogString38 + "%' ";
    if (ProduktKatalogString39 != "")
        sql += "AND mainTable.ProduktKatalogString39 LIKE '%" + ProduktKatalogString39 + "%' ";
    if (ProduktKatalogString40 != "")
        sql += "AND mainTable.ProduktKatalogString40 LIKE '%" + ProduktKatalogString40 + "%' ";
    if (ProduktKatalogString41 != "")
        sql += "AND mainTable.ProduktKatalogString41 LIKE '%" + ProduktKatalogString41 + "%' ";
    if (ProduktKatalogString42 != "")
        sql += "AND mainTable.ProduktKatalogString42 LIKE '%" + ProduktKatalogString42 + "%' ";
    if (ProduktKatalogString43 != "")
        sql += "AND mainTable.ProduktKatalogString43 LIKE '%" + ProduktKatalogString43 + "%' ";
    if (ProduktKatalogString44 != "")
        sql += "AND mainTable.ProduktKatalogString44 LIKE '%" + ProduktKatalogString44 + "%' ";
    if (ProduktKatalogString45 != "")
        sql += "AND mainTable.ProduktKatalogString45 LIKE '%" + ProduktKatalogString45 + "%' ";
    if (ProduktKatalogString46 != "")
        sql += "AND mainTable.ProduktKatalogString46 LIKE '%" + ProduktKatalogString46 + "%' ";
    if (ProduktKatalogString47 != "")
        sql += "AND mainTable.ProduktKatalogString47 LIKE '%" + ProduktKatalogString47 + "%' ";
    if (ProduktKatalogString48 != "")
        sql += "AND mainTable.ProduktKatalogString48 LIKE '%" + ProduktKatalogString48 + "%' ";
    if (ProduktKatalogString49 != "")
        sql += "AND mainTable.ProduktKatalogString49 LIKE '%" + ProduktKatalogString49 + "%' ";
    if (ProduktKatalogString50 != "")
        sql += "AND mainTable.ProduktKatalogString50 LIKE '%" + ProduktKatalogString50 + "%' ";

    if (ProduktKatalogInt1 != 0)
        sql += "AND mainTable.ProduktKatalogInt1 = " + ProduktKatalogInt1 + " ";
    if (ProduktKatalogInt2 != 0)
        sql += "AND mainTable.ProduktKatalogInt2 = " + ProduktKatalogInt2 + " ";
    if (ProduktKatalogInt3 != 0)
        sql += "AND mainTable.ProduktKatalogInt3 = " + ProduktKatalogInt3 + " ";
    if (ProduktKatalogInt4 != 0)
        sql += "AND mainTable.ProduktKatalogInt4 = " + ProduktKatalogInt4 + " ";
    if (ProduktKatalogInt5 != 0)
        sql += "AND mainTable.ProduktKatalogInt5 = " + ProduktKatalogInt5 + " ";
    if (ProduktKatalogInt6 != 0)
        sql += "AND mainTable.ProduktKatalogInt6 = " + ProduktKatalogInt6 + " ";
    if (ProduktKatalogInt7 != 0)
        sql += "AND mainTable.ProduktKatalogInt7 = " + ProduktKatalogInt7 + " ";
    if (ProduktKatalogInt8 != 0)
        sql += "AND mainTable.ProduktKatalogInt8 = " + ProduktKatalogInt8 + " ";
    if (ProduktKatalogInt9 != 0)
        sql += "AND mainTable.ProduktKatalogInt9 = " + ProduktKatalogInt9 + " ";
    if (ProduktKatalogInt10 != 0)
        sql += "AND mainTable.ProduktKatalogInt10 = " + ProduktKatalogInt10 + " ";
    if (ProduktKatalogInt11 != 0)
        sql += "AND mainTable.ProduktKatalogInt11 = " + ProduktKatalogInt11 + " ";
    if (ProduktKatalogInt12 != 0)
        sql += "AND mainTable.ProduktKatalogInt12 = " + ProduktKatalogInt12 + " ";
    if (ProduktKatalogInt13 != 0)
        sql += "AND mainTable.ProduktKatalogInt13 = " + ProduktKatalogInt13 + " ";
    if (ProduktKatalogInt14 != 0)
        sql += "AND mainTable.ProduktKatalogInt14 = " + ProduktKatalogInt14 + " ";
    if (ProduktKatalogInt15 != 0)
        sql += "AND mainTable.ProduktKatalogInt15 = " + ProduktKatalogInt15 + " ";
    if (ProduktKatalogInt16 != 0)
        sql += "AND mainTable.ProduktKatalogInt16 = " + ProduktKatalogInt16 + " ";
    if (ProduktKatalogInt17 != 0)
        sql += "AND mainTable.ProduktKatalogInt17 = " + ProduktKatalogInt17 + " ";
    if (ProduktKatalogInt18 != 0)
        sql += "AND mainTable.ProduktKatalogInt18 = " + ProduktKatalogInt18 + " ";
    if (ProduktKatalogInt19 != 0)
        sql += "AND mainTable.ProduktKatalogInt19 = " + ProduktKatalogInt19 + " ";
    if (ProduktKatalogInt20 != 0)
        sql += "AND mainTable.ProduktKatalogInt20 = " + ProduktKatalogInt20 + " ";
    if (ProduktKatalogInt21 != 0)
        sql += "AND mainTable.ProduktKatalogInt21 = " + ProduktKatalogInt21 + " ";
    if (ProduktKatalogInt22 != 0)
        sql += "AND mainTable.ProduktKatalogInt22 = " + ProduktKatalogInt22 + " ";
    if (ProduktKatalogInt23 != 0)
        sql += "AND mainTable.ProduktKatalogInt23 = " + ProduktKatalogInt23 + " ";
    if (ProduktKatalogInt24 != 0)
        sql += "AND mainTable.ProduktKatalogInt24 = " + ProduktKatalogInt24 + " ";
    if (ProduktKatalogInt25 != 0)
        sql += "AND mainTable.ProduktKatalogInt25 = " + ProduktKatalogInt25 + " ";
    if (ProduktKatalogInt26 != 0)
        sql += "AND mainTable.ProduktKatalogInt26 = " + ProduktKatalogInt26 + " ";
    if (ProduktKatalogInt27 != 0)
        sql += "AND mainTable.ProduktKatalogInt27 = " + ProduktKatalogInt27 + " ";
    if (ProduktKatalogInt28 != 0)
        sql += "AND mainTable.ProduktKatalogInt28 = " + ProduktKatalogInt28 + " ";
    if (ProduktKatalogInt29 != 0)
        sql += "AND mainTable.ProduktKatalogInt29 = " + ProduktKatalogInt29 + " ";
    if (ProduktKatalogInt30 != 0)
        sql += "AND mainTable.ProduktKatalogInt30 = " + ProduktKatalogInt30 + " ";
    if (ProduktKatalogInt31 != 0)
        sql += "AND mainTable.ProduktKatalogInt31 = " + ProduktKatalogInt31 + " ";
    if (ProduktKatalogInt32 != 0)
        sql += "AND mainTable.ProduktKatalogInt32 = " + ProduktKatalogInt32 + " ";
    if (ProduktKatalogInt33 != 0)
        sql += "AND mainTable.ProduktKatalogInt33 = " + ProduktKatalogInt33 + " ";
    if (ProduktKatalogInt34 != 0)
        sql += "AND mainTable.ProduktKatalogInt34 = " + ProduktKatalogInt34 + " ";
    if (ProduktKatalogInt35 != 0)
        sql += "AND mainTable.ProduktKatalogInt35 = " + ProduktKatalogInt35 + " ";
    if (ProduktKatalogInt36 != 0)
        sql += "AND mainTable.ProduktKatalogInt36 = " + ProduktKatalogInt36 + " ";
    if (ProduktKatalogInt37 != 0)
        sql += "AND mainTable.ProduktKatalogInt37 = " + ProduktKatalogInt37 + " ";
    if (ProduktKatalogInt38 != 0)
        sql += "AND mainTable.ProduktKatalogInt38 = " + ProduktKatalogInt38 + " ";
    if (ProduktKatalogInt39 != 0)
        sql += "AND mainTable.ProduktKatalogInt39 = " + ProduktKatalogInt39 + " ";
    if (ProduktKatalogInt40 != 0)
        sql += "AND mainTable.ProduktKatalogInt40 = " + ProduktKatalogInt40 + " ";

    if (ProduktKatalogFloat1 != 0)
        sql += "AND mainTable.ProduktKatalogFloat1 = " + ProduktKatalogFloat1 + " ";
    if (ProduktKatalogFloat2 != 0)
        sql += "AND mainTable.ProduktKatalogFloat2 = " + ProduktKatalogFloat2 + " ";
    if (ProduktKatalogFloat3 != 0)
        sql += "AND mainTable.ProduktKatalogFloat3 = " + ProduktKatalogFloat3 + " ";
    if (ProduktKatalogFloat4 != 0)
        sql += "AND mainTable.ProduktKatalogFloat4 = " + ProduktKatalogFloat4 + " ";
    if (ProduktKatalogFloat5 != 0)
        sql += "AND mainTable.ProduktKatalogFloat5 = " + ProduktKatalogFloat5 + " ";
    if (ProduktKatalogFloat6 != 0)
        sql += "AND mainTable.ProduktKatalogFloat6 = " + ProduktKatalogFloat6 + " ";
    if (ProduktKatalogFloat7 != 0)
        sql += "AND mainTable.ProduktKatalogFloat7 = " + ProduktKatalogFloat7 + " ";
    if (ProduktKatalogFloat8 != 0)
        sql += "AND mainTable.ProduktKatalogFloat8 = " + ProduktKatalogFloat8 + " ";
    if (ProduktKatalogFloat9 != 0)
        sql += "AND mainTable.ProduktKatalogFloat9 = " + ProduktKatalogFloat9 + " ";
    if (ProduktKatalogFloat10 != 0)
        sql += "AND mainTable.ProduktKatalogFloat10 = " + ProduktKatalogFloat10 + " ";
    if (ProduktKatalogFloat11 != 0)
        sql += "AND mainTable.ProduktKatalogFloat11 = " + ProduktKatalogFloat11 + " ";
    if (ProduktKatalogFloat12 != 0)
        sql += "AND mainTable.ProduktKatalogFloat12 = " + ProduktKatalogFloat12 + " ";
    if (ProduktKatalogFloat13 != 0)
        sql += "AND mainTable.ProduktKatalogFloat13 = " + ProduktKatalogFloat13 + " ";
    if (ProduktKatalogFloat14 != 0)
        sql += "AND mainTable.ProduktKatalogFloat14 = " + ProduktKatalogFloat14 + " ";
    if (ProduktKatalogFloat15 != 0)
        sql += "AND mainTable.ProduktKatalogFloat15 = " + ProduktKatalogFloat15 + " ";
    if (ProduktKatalogFloat16 != 0)
        sql += "AND mainTable.ProduktKatalogFloat16 = " + ProduktKatalogFloat16 + " ";
    if (ProduktKatalogFloat17 != 0)
        sql += "AND mainTable.ProduktKatalogFloat17 = " + ProduktKatalogFloat17 + " ";
    if (ProduktKatalogFloat18 != 0)
        sql += "AND mainTable.ProduktKatalogFloat18 = " + ProduktKatalogFloat18 + " ";
    if (ProduktKatalogFloat19 != 0)
        sql += "AND mainTable.ProduktKatalogFloat19 = " + ProduktKatalogFloat19 + " ";
    if (ProduktKatalogFloat20 != 0)
        sql += "AND mainTable.ProduktKatalogFloat20 = " + ProduktKatalogFloat20 + " ";
    if (ProduktKatalogFloat21 != 0)
        sql += "AND mainTable.ProduktKatalogFloat21 = " + ProduktKatalogFloat21 + " ";
    if (ProduktKatalogFloat22 != 0)
        sql += "AND mainTable.ProduktKatalogFloat22 = " + ProduktKatalogFloat22 + " ";
    if (ProduktKatalogFloat23 != 0)
        sql += "AND mainTable.ProduktKatalogFloat23 = " + ProduktKatalogFloat23 + " ";
    if (ProduktKatalogFloat24 != 0)
        sql += "AND mainTable.ProduktKatalogFloat24 = " + ProduktKatalogFloat24 + " ";
    if (ProduktKatalogFloat25 != 0)
        sql += "AND mainTable.ProduktKatalogFloat25 = " + ProduktKatalogFloat25 + " ";
    if (ProduktKatalogFloat26 != 0)
        sql += "AND mainTable.ProduktKatalogFloat26 = " + ProduktKatalogFloat26 + " ";
    if (ProduktKatalogFloat27 != 0)
        sql += "AND mainTable.ProduktKatalogFloat27 = " + ProduktKatalogFloat27 + " ";
    if (ProduktKatalogFloat28 != 0)
        sql += "AND mainTable.ProduktKatalogFloat28 = " + ProduktKatalogFloat28 + " ";
    if (ProduktKatalogFloat29 != 0)
        sql += "AND mainTable.ProduktKatalogFloat29 = " + ProduktKatalogFloat29 + " ";
    if (ProduktKatalogFloat30 != 0)
        sql += "AND mainTable.ProduktKatalogFloat30 = " + ProduktKatalogFloat30 + " ";
    if (ProduktKatalogFloat31 != 0)
        sql += "AND mainTable.ProduktKatalogFloat31 = " + ProduktKatalogFloat31 + " ";
    if (ProduktKatalogFloat32 != 0)
        sql += "AND mainTable.ProduktKatalogFloat32 = " + ProduktKatalogFloat32 + " ";
    if (ProduktKatalogFloat33 != 0)
        sql += "AND mainTable.ProduktKatalogFloat33 = " + ProduktKatalogFloat33 + " ";
    if (ProduktKatalogFloat34 != 0)
        sql += "AND mainTable.ProduktKatalogFloat34 = " + ProduktKatalogFloat34 + " ";
    if (ProduktKatalogFloat35 != 0)
        sql += "AND mainTable.ProduktKatalogFloat35 = " + ProduktKatalogFloat35 + " ";
    if (ProduktKatalogFloat36 != 0)
        sql += "AND mainTable.ProduktKatalogFloat36 = " + ProduktKatalogFloat36 + " ";
    if (ProduktKatalogFloat37 != 0)
        sql += "AND mainTable.ProduktKatalogFloat37 = " + ProduktKatalogFloat37 + " ";
    if (ProduktKatalogFloat38 != 0)
        sql += "AND mainTable.ProduktKatalogFloat38 = " + ProduktKatalogFloat38 + " ";
    if (ProduktKatalogFloat39 != 0)
        sql += "AND mainTable.ProduktKatalogFloat39 = " + ProduktKatalogFloat39 + " ";
    if (ProduktKatalogFloat40 != 0)
        sql += "AND mainTable.ProduktKatalogFloat40 = " + ProduktKatalogFloat40 + " ";

    if (ProduktKatalogBIT1 != 0)
        sql += "AND mainTable.ProduktKatalogBIT1 = " + ProduktKatalogBIT1 + " ";
    if (ProduktKatalogBIT2 != 0)
        sql += "AND mainTable.ProduktKatalogBIT2 = " + ProduktKatalogBIT2 + " ";
    if (ProduktKatalogBIT3 != 0)
        sql += "AND mainTable.ProduktKatalogBIT3 = " + ProduktKatalogBIT3 + " ";
    if (ProduktKatalogBIT4 != 0)
        sql += "AND mainTable.ProduktKatalogBIT4 = " + ProduktKatalogBIT4 + " ";
    if (ProduktKatalogBIT5 != 0)
        sql += "AND mainTable.ProduktKatalogBIT5 = " + ProduktKatalogBIT5 + " ";
    if (ProduktKatalogBIT6 != 0)
        sql += "AND mainTable.ProduktKatalogBIT6 = " + ProduktKatalogBIT6 + " ";
    if (ProduktKatalogBIT7 != 0)
        sql += "AND mainTable.ProduktKatalogBIT7 = " + ProduktKatalogBIT7 + " ";
    if (ProduktKatalogBIT8 != 0)
        sql += "AND mainTable.ProduktKatalogBIT8 = " + ProduktKatalogBIT8 + " ";
    if (ProduktKatalogBIT9 != 0)
        sql += "AND mainTable.ProduktKatalogBIT9 = " + ProduktKatalogBIT9 + " ";
    if (ProduktKatalogBIT10 != 0)
        sql += "AND mainTable.ProduktKatalogBIT10 = " + ProduktKatalogBIT10 + " ";

    if (sql != "")
        sql = "WHERE " + sql.substring(3);
    sql = "SELECT * FROM `laaver`.Produkt_Katalog AS mainTable " + sql + " ORDER BY mainTable.ProduktKatalogInt2 LIMIT 500";

    $.ajax({
        type: "POST",
        url: "/General_Select",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        cache: false,
        data: {
            SQL_TXT: escape(sql),
        },
        success: function(response) {
            ProduktKatalogArr = new Array();
            if (response.results && Array.isArray(response.results)) {
                response.results.forEach(function(item) {
                    let obj = {};
                    showProduktKatalogAttributArr.forEach(attr => {
                        let val = item[attr.Attribut];

                        // 1. BIT 类型字段：Buffer 转 0/1
                        if (val && typeof val === 'object' && val.type === 'Buffer' && Array.isArray(val.data)) {
                            obj[attr.Attribut] = val.data[0] ? 1 : 0;
                        }
                        // 2. 包含 "Datum" 的字段
                        else if (attr.Attribut.includes("Datum")) {
                            if (val === null || val === undefined) {
                                obj[attr.Attribut] = "";
                                // null 或 undefined → 空字符串
                            } else {
                                try {
                                    obj[attr.Attribut] = val.toString().substring(0, 10);
                                    // 取 YYYY-MM-DD
                                } catch (e) {
                                    obj[attr.Attribut] = "";
                                    // 容错
                                }
                            }
                        }
                        // 3. 其他字段：正常赋值
                        else {
                            obj[attr.Attribut] = val;
                        }
                    }
                    );

                    ProduktKatalogArr.push(obj);
                });
                showProduktKatalog();
                //document.getElementById('ErgebnisSpan').innerHTML = ProduktKatalogArr.length;
                //document.getElementById('button_export_excel').style.display = "inline-block";
            } else {
                document.getElementById("tableDiv").innerHTML = "";
                //document.getElementById('ErgebnisSpan').innerHTML = "0";
                //document.getElementById('button_export_excel').style.display = "none";
            }
        },
        error: function(xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });
}

function showProduktKatalog() {
    var txt = "";
    showProduktKatalogAttributArr.sort(compare('indexB'));
    txt += "<table class='table table-separate table-head-custom table-checkable' id='kt_datatable'><thead><tr>";
    for (var i = 0; i < showProduktKatalogAttributArr.length; i++) {
        if (showProduktKatalogAttributArr[i].indexB > 0) {
            txt += "<th>" + unescape(showProduktKatalogAttributArr[i].lang[langNum]) + "</th>";
        }
    }
    txt += "</tr></thead><tbody>";

    for (var i = 0; i < ProduktKatalogArr.length; i++) {
        txt += "<tr>";
        for (var j = 0; j < showProduktKatalogAttributArr.length; j++) {
            eval("if(showProduktKatalogAttributArr[j].indexB>0){" + "if(showProduktKatalogAttributArr[j].indexB==1) txt += '<td><a href=\"javascript:showProduktKatalogModal(" + i + ")\">PK'+parseInt(10000+parseInt(ProduktKatalogArr[i]." + showProduktKatalogAttributArr[j].Attribut + "))+'</a></td>';" + "else if(showProduktKatalogAttributArr[j].Attribut=='Status'){ txt += '<td>';" + "for(var m=0;m<ProduktKatalogStatusArr.length;m++)if(ProduktKatalogStatusArr[m][4]==ProduktKatalogArr[i].Status)txt+=unescape(ProduktKatalogStatusArr[m][langNum]); txt += '</td>';}" + "else if(showProduktKatalogAttributArr[j].Attribut=='ProduktKatalogInt1') txt += '<td>'+getProduktKatalogPosition(ProduktKatalogArr[i]." + showProduktKatalogAttributArr[j].Attribut + ")+'</td>';" + "else if(showProduktKatalogAttributArr[j].Type=='BIT') txt += '<td>'+(parseInt(ProduktKatalogArr[i]." + showProduktKatalogAttributArr[j].Attribut + ")==1?'Yes':'No')+'</td>';" + "else if(parseInt(ProduktKatalogArr[i]." + showProduktKatalogAttributArr[j].Attribut + ")==0) txt += '<td> </td>';" + "else txt += '<td>'+unescape(ProduktKatalogArr[i]." + showProduktKatalogAttributArr[j].Attribut + ")+'</td>'" + "}");
        }
        txt += "</tr>";
    }
    txt += "</tbody></table>";

    document.getElementById("tableDiv").innerHTML = txt;
    hideLoadingDiv();

    if (globalIDX > 0) {
        showProduktKatalogModal(0);
        globalIDX = 0;
    }
}

function showProduktKatalogModal(idx) {
    showProduktKatalogAttributArr.sort(compare('indexC'));		document.getElementById('BildShowDiv').innerHTML = "";
    for (var i = 0; i < showProduktKatalogAttributArr.length; i++) {
        if (showProduktKatalogAttributArr[i].indexC > 0) {
            eval("if(document.getElementById('" + showProduktKatalogAttributArr[i].Attribut + "ModalDiv'))document.getElementById('" + showProduktKatalogAttributArr[i].Attribut + "ModalDiv').style.display='block';");
        }
    }

    for (var i = 0; i < ProduktKatalogArr.length; i++) {
        if (i == idx) {
            mainIDX = parseInt(ProduktKatalogArr[i].prIDX);

            document.getElementById("prIDXModal").value = "PK" + parseInt(10000 + (ProduktKatalogArr[i].prIDX));
            document.getElementById("frIDXModal").value = parseInt(ProduktKatalogArr[i].frIDX);
            document.getElementById("Datum1Modal").value = unescape(ProduktKatalogArr[i].Datum1);
            document.getElementById("Datum2Modal").value = unescape(ProduktKatalogArr[i].Datum2);
            document.getElementById("Datum3Modal").value = unescape(ProduktKatalogArr[i].Datum3);
            document.getElementById("Datum4Modal").value = unescape(ProduktKatalogArr[i].Datum4);
            document.getElementById("StatusModal").value = parseInt(ProduktKatalogArr[i].Status);

            document.getElementById("ProduktKatalogString1Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString1);
            document.getElementById("ProduktKatalogString2Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString2);
            document.getElementById("ProduktKatalogString3Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString3);
            document.getElementById("ProduktKatalogString4Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString4);
            document.getElementById("ProduktKatalogString5Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString5);
            document.getElementById("ProduktKatalogString6Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString6);
            document.getElementById("ProduktKatalogString7Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString7);
            document.getElementById("ProduktKatalogString8Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString8);
            document.getElementById("ProduktKatalogString9Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString9);
            document.getElementById("ProduktKatalogString10Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString10);
            document.getElementById("ProduktKatalogString11Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString11);
            document.getElementById("ProduktKatalogString12Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString12);
            document.getElementById("ProduktKatalogString13Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString13);
            document.getElementById("ProduktKatalogString14Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString14);
            document.getElementById("ProduktKatalogString15Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString15);
            document.getElementById("ProduktKatalogString16Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString16);
            document.getElementById("ProduktKatalogString17Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString17);
            document.getElementById("ProduktKatalogString18Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString18);
            document.getElementById("ProduktKatalogString19Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString19);
            document.getElementById("ProduktKatalogString20Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString20);
            document.getElementById("ProduktKatalogString21Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString21);
            document.getElementById("ProduktKatalogString22Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString22);
            document.getElementById("ProduktKatalogString23Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString23);
            document.getElementById("ProduktKatalogString24Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString24);
            document.getElementById("ProduktKatalogString25Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString25);
            document.getElementById("ProduktKatalogString26Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString26);
            document.getElementById("ProduktKatalogString27Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString27);
            document.getElementById("ProduktKatalogString28Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString28);
            document.getElementById("ProduktKatalogString29Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString29);
            document.getElementById("ProduktKatalogString30Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString30);
            document.getElementById("ProduktKatalogString31Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString31);
            document.getElementById("ProduktKatalogString32Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString32);
            document.getElementById("ProduktKatalogString33Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString33);
            document.getElementById("ProduktKatalogString34Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString34);
            document.getElementById("ProduktKatalogString35Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString35);
            document.getElementById("ProduktKatalogString36Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString36);
            document.getElementById("ProduktKatalogString37Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString37);
            document.getElementById("ProduktKatalogString38Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString38);
            document.getElementById("ProduktKatalogString39Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString39);
            document.getElementById("ProduktKatalogString40Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString40);
            document.getElementById("ProduktKatalogString41Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString41);
            document.getElementById("ProduktKatalogString42Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString42);
            document.getElementById("ProduktKatalogString43Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString43);
            document.getElementById("ProduktKatalogString44Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString44);
            document.getElementById("ProduktKatalogString45Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString45);
            document.getElementById("ProduktKatalogString46Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString46);
            document.getElementById("ProduktKatalogString47Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString47);
            document.getElementById("ProduktKatalogString48Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString48);
            document.getElementById("ProduktKatalogString49Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString49);
            document.getElementById("ProduktKatalogString50Modal").value = unescape(ProduktKatalogArr[i].ProduktKatalogString50);

            document.getElementById("ProduktKatalogInt1Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt1);
            document.getElementById("ProduktKatalogInt2Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt2) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt2);
            document.getElementById("ProduktKatalogInt3Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt3) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt3);
            document.getElementById("ProduktKatalogInt4Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt4) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt4);
            document.getElementById("ProduktKatalogInt5Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt5) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt5);
            document.getElementById("ProduktKatalogInt6Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt6) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt6);
            document.getElementById("ProduktKatalogInt7Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt7) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt7);
            document.getElementById("ProduktKatalogInt8Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt8) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt8);
            document.getElementById("ProduktKatalogInt9Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt9) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt9);
            document.getElementById("ProduktKatalogInt10Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt10) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt10);
            document.getElementById("ProduktKatalogInt11Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt11) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt11);
            document.getElementById("ProduktKatalogInt12Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt12) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt12);
            document.getElementById("ProduktKatalogInt13Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt13) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt13);
            document.getElementById("ProduktKatalogInt14Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt14) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt14);
            document.getElementById("ProduktKatalogInt15Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt15) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt15);
            document.getElementById("ProduktKatalogInt16Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt16) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt16);
            document.getElementById("ProduktKatalogInt17Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt17) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt17);
            document.getElementById("ProduktKatalogInt18Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt18) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt18);
            document.getElementById("ProduktKatalogInt19Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt19) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt19);
            document.getElementById("ProduktKatalogInt20Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt20) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt20);
            document.getElementById("ProduktKatalogInt21Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt21) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt21);
            document.getElementById("ProduktKatalogInt22Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt22) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt22);
            document.getElementById("ProduktKatalogInt23Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt23) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt23);
            document.getElementById("ProduktKatalogInt24Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt24) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt24);
            document.getElementById("ProduktKatalogInt25Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt25) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt25);
            document.getElementById("ProduktKatalogInt26Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt26) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt26);
            document.getElementById("ProduktKatalogInt27Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt27) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt27);
            document.getElementById("ProduktKatalogInt28Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt28) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt28);
            document.getElementById("ProduktKatalogInt29Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt29) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt29);
            document.getElementById("ProduktKatalogInt30Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt30) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt30);
            document.getElementById("ProduktKatalogInt31Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt31) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt31);
            document.getElementById("ProduktKatalogInt32Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt32) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt32);
            document.getElementById("ProduktKatalogInt33Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt33) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt33);
            document.getElementById("ProduktKatalogInt34Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt34) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt34);
            document.getElementById("ProduktKatalogInt35Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt35) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt35);
            document.getElementById("ProduktKatalogInt36Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt36) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt36);
            document.getElementById("ProduktKatalogInt37Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt37) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt37);
            document.getElementById("ProduktKatalogInt38Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt38) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt38);
            document.getElementById("ProduktKatalogInt39Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt39) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt39);
            document.getElementById("ProduktKatalogInt40Modal").value = parseInt(ProduktKatalogArr[i].ProduktKatalogInt40) == 0 ? "" : parseInt(ProduktKatalogArr[i].ProduktKatalogInt40);

            document.getElementById("ProduktKatalogFloat1Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat1) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat1);
            document.getElementById("ProduktKatalogFloat2Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat2) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat2);
            document.getElementById("ProduktKatalogFloat3Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat3) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat3);
            document.getElementById("ProduktKatalogFloat4Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat4) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat4);
            document.getElementById("ProduktKatalogFloat5Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat5) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat5);
            document.getElementById("ProduktKatalogFloat6Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat6) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat6);
            document.getElementById("ProduktKatalogFloat7Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat7) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat7);
            document.getElementById("ProduktKatalogFloat8Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat8) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat8);
            document.getElementById("ProduktKatalogFloat9Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat9) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat9);
            document.getElementById("ProduktKatalogFloat10Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat10) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat10);
            document.getElementById("ProduktKatalogFloat11Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat11) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat11);
            document.getElementById("ProduktKatalogFloat12Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat12) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat12);
            document.getElementById("ProduktKatalogFloat13Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat13) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat13);
            document.getElementById("ProduktKatalogFloat14Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat14) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat14);
            document.getElementById("ProduktKatalogFloat15Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat15) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat15);
            document.getElementById("ProduktKatalogFloat16Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat16) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat16);
            document.getElementById("ProduktKatalogFloat17Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat17) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat17);
            document.getElementById("ProduktKatalogFloat18Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat18) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat18);
            document.getElementById("ProduktKatalogFloat19Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat19) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat19);
            document.getElementById("ProduktKatalogFloat20Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat20) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat20);
            document.getElementById("ProduktKatalogFloat21Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat21) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat21);
            document.getElementById("ProduktKatalogFloat22Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat22) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat22);
            document.getElementById("ProduktKatalogFloat23Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat23) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat23);
            document.getElementById("ProduktKatalogFloat24Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat24) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat24);
            document.getElementById("ProduktKatalogFloat25Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat25) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat25);
            document.getElementById("ProduktKatalogFloat26Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat26) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat26);
            document.getElementById("ProduktKatalogFloat27Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat27) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat27);
            document.getElementById("ProduktKatalogFloat28Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat28) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat28);
            document.getElementById("ProduktKatalogFloat29Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat29) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat29);
            document.getElementById("ProduktKatalogFloat30Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat30) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat30);
            document.getElementById("ProduktKatalogFloat31Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat31) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat31);
            document.getElementById("ProduktKatalogFloat32Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat32) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat32);
            document.getElementById("ProduktKatalogFloat33Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat33) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat33);
            document.getElementById("ProduktKatalogFloat34Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat34) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat34);
            document.getElementById("ProduktKatalogFloat35Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat35) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat35);
            document.getElementById("ProduktKatalogFloat36Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat36) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat36);
            document.getElementById("ProduktKatalogFloat37Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat37) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat37);
            document.getElementById("ProduktKatalogFloat38Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat38) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat38);
            document.getElementById("ProduktKatalogFloat39Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat39) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat39);
            document.getElementById("ProduktKatalogFloat40Modal").value = parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat40) == 0 ? "" : parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat40);

            if (parseInt(ProduktKatalogArr[i].ProduktKatalogBIT1) == 0)
                document.getElementById("ProduktKatalogBIT1Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktKatalogBIT1Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktKatalogArr[i].ProduktKatalogBIT2) == 0)
                document.getElementById("ProduktKatalogBIT2Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktKatalogBIT2Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktKatalogArr[i].ProduktKatalogBIT3) == 0)
                document.getElementById("ProduktKatalogBIT3Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktKatalogBIT3Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktKatalogArr[i].ProduktKatalogBIT4) == 0)
                document.getElementById("ProduktKatalogBIT4Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktKatalogBIT4Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktKatalogArr[i].ProduktKatalogBIT5) == 0)
                document.getElementById("ProduktKatalogBIT5Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktKatalogBIT5Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktKatalogArr[i].ProduktKatalogBIT6) == 0)
                document.getElementById("ProduktKatalogBIT6Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktKatalogBIT6Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktKatalogArr[i].ProduktKatalogBIT7) == 0)
                document.getElementById("ProduktKatalogBIT7Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktKatalogBIT7Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktKatalogArr[i].ProduktKatalogBIT8) == 0)
                document.getElementById("ProduktKatalogBIT8Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktKatalogBIT8Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktKatalogArr[i].ProduktKatalogBIT9) == 0)
                document.getElementById("ProduktKatalogBIT9Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktKatalogBIT9Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktKatalogArr[i].ProduktKatalogBIT10) == 0)
                document.getElementById("ProduktKatalogBIT10Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktKatalogBIT10Modal").setAttribute("checked", "checked");

            //老板有权限更改 Rolle
            if (ProduktKatalogArr[i].Status < 7 && Rolle == 1) {
                document.getElementById("prIDXModal").setAttribute('disabled', 'disabled');
                document.getElementById("frIDXModal").setAttribute('disabled', 'disabled');
                document.getElementById("Datum1Modal").setAttribute('disabled', 'disabled');
                document.getElementById("StatusModal").setAttribute('disabled', 'disabled');
                document.getElementById("ProduktKatalogString1Modal").setAttribute('disabled', 'disabled');
                document.getElementById("ProduktKatalogString2Modal").setAttribute('disabled', 'disabled');
                document.getElementById("ProduktKatalogString3Modal").setAttribute('disabled', 'disabled');
				document.getElementById("ProduktKatalogString4Modal").setAttribute('disabled', 'disabled');

                document.getElementById("button_modal_save").style.display = "inline-block";
            } else {
                for (var i = 0; i < showProduktKatalogAttributArr.length; i++) {
                    if (showProduktKatalogAttributArr[i].indexC > 0) {
                        document.getElementById(showProduktKatalogAttributArr[i].Attribut + "Modal").setAttribute('disabled', 'disabled');
                    }
                }
                document.getElementById("button_modal_save").style.display = "none";
            }						if(ProduktKatalogArr[i].ProduktKatalogString10 != "")			document.getElementById('BildShowDiv').innerHTML = "<img src='https://intranet.laaver.com/file/product/" + ProduktKatalogArr[i].ProduktKatalogString10 + "' style='width:100%;' />";
        }
    }
    $('#exampleModal').modal('show');
}

function saveProduktKatalog() {
    //更新对象所需的参数
    var ProduktKatalogModalArr = ["ProduktKatalogString4", "ProduktKatalogString5", "ProduktKatalogString6", "ProduktKatalogString7", "ProduktKatalogString8", "ProduktKatalogString9", "ProduktKatalogString11", "ProduktKatalogString12", "ProduktKatalogString13", "ProduktKatalogString14", "ProduktKatalogString15", "ProduktKatalogString16", "ProduktKatalogString17", "ProduktKatalogString18", "ProduktKatalogString19", "ProduktKatalogString20", "ProduktKatalogString21", "ProduktKatalogString22", "ProduktKatalogString23", "ProduktKatalogString24", "ProduktKatalogString25", "ProduktKatalogString26", "ProduktKatalogString27", "ProduktKatalogString28", "ProduktKatalogString29", "ProduktKatalogString30", "ProduktKatalogString31", "ProduktKatalogString32", "ProduktKatalogString33", "ProduktKatalogString34", "ProduktKatalogString35", "ProduktKatalogString36", "ProduktKatalogString37", "ProduktKatalogString38", "ProduktKatalogString39", "ProduktKatalogString40", "ProduktKatalogString41", "ProduktKatalogString42", "ProduktKatalogString43", "ProduktKatalogString44", "ProduktKatalogString45", "ProduktKatalogString46", "ProduktKatalogString47", "ProduktKatalogString48", "ProduktKatalogString49", "ProduktKatalogString50",
    "ProduktKatalogInt1", "ProduktKatalogInt2", "ProduktKatalogInt3", "ProduktKatalogInt4", "ProduktKatalogInt5", "ProduktKatalogInt6", "ProduktKatalogInt7", "ProduktKatalogInt8", "ProduktKatalogInt9", "ProduktKatalogInt10", "ProduktKatalogInt11", "ProduktKatalogInt12", "ProduktKatalogInt13", "ProduktKatalogInt14", "ProduktKatalogInt15", "ProduktKatalogInt16", "ProduktKatalogInt17", "ProduktKatalogInt18", "ProduktKatalogInt19", "ProduktKatalogInt20", "ProduktKatalogInt21", "ProduktKatalogInt22", "ProduktKatalogInt23", "ProduktKatalogInt24", "ProduktKatalogInt25", "ProduktKatalogInt26", "ProduktKatalogInt27", "ProduktKatalogInt28", "ProduktKatalogInt29", "ProduktKatalogInt30", "ProduktKatalogInt31", "ProduktKatalogInt32", "ProduktKatalogInt33", "ProduktKatalogInt34", "ProduktKatalogInt35", "ProduktKatalogInt36", "ProduktKatalogInt37", "ProduktKatalogInt38", "ProduktKatalogInt39", "ProduktKatalogInt40",
    "ProduktKatalogFloat1", "ProduktKatalogFloat2", "ProduktKatalogFloat3", "ProduktKatalogFloat4", "ProduktKatalogFloat5", "ProduktKatalogFloat6", "ProduktKatalogFloat7", "ProduktKatalogFloat8", "ProduktKatalogFloat9", "ProduktKatalogFloat10", "ProduktKatalogFloat11", "ProduktKatalogFloat12", "ProduktKatalogFloat13", "ProduktKatalogFloat14", "ProduktKatalogFloat15", "ProduktKatalogFloat16", "ProduktKatalogFloat17", "ProduktKatalogFloat18", "ProduktKatalogFloat19", "ProduktKatalogFloat20", "ProduktKatalogFloat21", "ProduktKatalogFloat22", "ProduktKatalogFloat23", "ProduktKatalogFloat24", "ProduktKatalogFloat25", "ProduktKatalogFloat26", "ProduktKatalogFloat27", "ProduktKatalogFloat28", "ProduktKatalogFloat29", "ProduktKatalogFloat30", "ProduktKatalogFloat31", "ProduktKatalogFloat32", "ProduktKatalogFloat33", "ProduktKatalogFloat34", "ProduktKatalogFloat35", "ProduktKatalogFloat36", "ProduktKatalogFloat37", "ProduktKatalogFloat38", "ProduktKatalogFloat39", "ProduktKatalogFloat40",
    "ProduktKatalogBIT1", "ProduktKatalogBIT2", "ProduktKatalogBIT3", "ProduktKatalogBIT4", "ProduktKatalogBIT5", "ProduktKatalogBIT6", "ProduktKatalogBIT7", "ProduktKatalogBIT8", "ProduktKatalogBIT9", "ProduktKatalogBIT10"];

    var prIDX = 0
      , frIDX = 0
      , Datum1 = ""
      , Datum2 = ""
      , Datum3 = ""
      , Datum4 = ""
      , Status = 0;
    var ProduktKatalogString1 = ""
      , ProduktKatalogString2 = ""
      , ProduktKatalogString3 = ""
      , ProduktKatalogString4 = ""
      , ProduktKatalogString5 = ""
      , ProduktKatalogString6 = ""
      , ProduktKatalogString7 = ""
      , ProduktKatalogString8 = ""
      , ProduktKatalogString9 = ""
      , ProduktKatalogString10 = ""
      , ProduktKatalogString11 = ""
      , ProduktKatalogString12 = ""
      , ProduktKatalogString13 = ""
      , ProduktKatalogString14 = ""
      , ProduktKatalogString15 = ""
      , ProduktKatalogString16 = ""
      , ProduktKatalogString17 = ""
      , ProduktKatalogString18 = ""
      , ProduktKatalogString19 = ""
      , ProduktKatalogString20 = ""
      , ProduktKatalogString21 = ""
      , ProduktKatalogString22 = ""
      , ProduktKatalogString23 = ""
      , ProduktKatalogString24 = ""
      , ProduktKatalogString25 = ""
      , ProduktKatalogString26 = ""
      , ProduktKatalogString27 = ""
      , ProduktKatalogString28 = ""
      , ProduktKatalogString29 = ""
      , ProduktKatalogString30 = ""
      , ProduktKatalogString31 = ""
      , ProduktKatalogString32 = ""
      , ProduktKatalogString33 = ""
      , ProduktKatalogString34 = ""
      , ProduktKatalogString35 = ""
      , ProduktKatalogString36 = ""
      , ProduktKatalogString37 = ""
      , ProduktKatalogString38 = ""
      , ProduktKatalogString39 = ""
      , ProduktKatalogString40 = ""
      , ProduktKatalogString41 = ""
      , ProduktKatalogString42 = ""
      , ProduktKatalogString43 = ""
      , ProduktKatalogString44 = ""
      , ProduktKatalogString45 = ""
      , ProduktKatalogString46 = ""
      , ProduktKatalogString47 = ""
      , ProduktKatalogString48 = ""
      , ProduktKatalogString49 = ""
      , ProduktKatalogString50 = ""
      , ProduktKatalogInt1 = 0
      , ProduktKatalogInt2 = 0
      , ProduktKatalogInt3 = 0
      , ProduktKatalogInt4 = 0
      , ProduktKatalogInt5 = 0
      , ProduktKatalogInt6 = 0
      , ProduktKatalogInt7 = 0
      , ProduktKatalogInt8 = 0
      , ProduktKatalogInt9 = 0
      , ProduktKatalogInt10 = 0
      , ProduktKatalogInt11 = 0
      , ProduktKatalogInt12 = 0
      , ProduktKatalogInt13 = 0
      , ProduktKatalogInt14 = 0
      , ProduktKatalogInt15 = 0
      , ProduktKatalogInt16 = 0
      , ProduktKatalogInt17 = 0
      , ProduktKatalogInt18 = 0
      , ProduktKatalogInt19 = 0
      , ProduktKatalogInt20 = 0
      , ProduktKatalogInt21 = 0
      , ProduktKatalogInt22 = 0
      , ProduktKatalogInt23 = 0
      , ProduktKatalogInt24 = 0
      , ProduktKatalogInt25 = 0
      , ProduktKatalogInt26 = 0
      , ProduktKatalogInt27 = 0
      , ProduktKatalogInt28 = 0
      , ProduktKatalogInt29 = 0
      , ProduktKatalogInt30 = 0
      , ProduktKatalogInt31 = 0
      , ProduktKatalogInt32 = 0
      , ProduktKatalogInt33 = 0
      , ProduktKatalogInt34 = 0
      , ProduktKatalogInt35 = 0
      , ProduktKatalogInt36 = 0
      , ProduktKatalogInt37 = 0
      , ProduktKatalogInt38 = 0
      , ProduktKatalogInt39 = 0
      , ProduktKatalogInt40 = 0
      , ProduktKatalogFloat1 = 0
      , ProduktKatalogFloat2 = 0
      , ProduktKatalogFloat3 = 0
      , ProduktKatalogFloat4 = 0
      , ProduktKatalogFloat5 = 0
      , ProduktKatalogFloat6 = 0
      , ProduktKatalogFloat7 = 0
      , ProduktKatalogFloat8 = 0
      , ProduktKatalogFloat9 = 0
      , ProduktKatalogFloat10 = 0
      , ProduktKatalogFloat11 = 0
      , ProduktKatalogFloat12 = 0
      , ProduktKatalogFloat13 = 0
      , ProduktKatalogFloat14 = 0
      , ProduktKatalogFloat15 = 0
      , ProduktKatalogFloat16 = 0
      , ProduktKatalogFloat17 = 0
      , ProduktKatalogFloat18 = 0
      , ProduktKatalogFloat19 = 0
      , ProduktKatalogFloat20 = 0
      , ProduktKatalogFloat21 = 0
      , ProduktKatalogFloat22 = 0
      , ProduktKatalogFloat23 = 0
      , ProduktKatalogFloat24 = 0
      , ProduktKatalogFloat25 = 0
      , ProduktKatalogFloat26 = 0
      , ProduktKatalogFloat27 = 0
      , ProduktKatalogFloat28 = 0
      , ProduktKatalogFloat29 = 0
      , ProduktKatalogFloat30 = 0
      , ProduktKatalogFloat31 = 0
      , ProduktKatalogFloat32 = 0
      , ProduktKatalogFloat33 = 0
      , ProduktKatalogFloat34 = 0
      , ProduktKatalogFloat35 = 0
      , ProduktKatalogFloat36 = 0
      , ProduktKatalogFloat37 = 0
      , ProduktKatalogFloat38 = 0
      , ProduktKatalogFloat39 = 0
      , ProduktKatalogFloat40 = 0
      , ProduktKatalogBIT1 = 0
      , ProduktKatalogBIT2 = 0
      , ProduktKatalogBIT3 = 0
      , ProduktKatalogBIT4 = 0
      , ProduktKatalogBIT5 = 0
      , ProduktKatalogBIT6 = 0
      , ProduktKatalogBIT7 = 0
      , ProduktKatalogBIT8 = 0
      , ProduktKatalogBIT9 = 0
      , ProduktKatalogBIT10 = 0;

    if (document.getElementById("ProduktKatalogString1Modal").value != "")
        ProduktKatalogString1 = escape(document.getElementById("ProduktKatalogString1Modal").value);
    if (document.getElementById("ProduktKatalogString2Modal").value != "")
        ProduktKatalogString2 = escape(document.getElementById("ProduktKatalogString2Modal").value);
    if (document.getElementById("ProduktKatalogString3Modal").value != "")
        ProduktKatalogString3 = escape(document.getElementById("ProduktKatalogString3Modal").value);
    if (document.getElementById("ProduktKatalogString4Modal").value != "")
        ProduktKatalogString4 = escape(document.getElementById("ProduktKatalogString4Modal").value);
    if (document.getElementById("ProduktKatalogString5Modal").value != "")
        ProduktKatalogString5 = escape(document.getElementById("ProduktKatalogString5Modal").value);
    if (document.getElementById("ProduktKatalogString6Modal").value != "")
        ProduktKatalogString6 = escape(document.getElementById("ProduktKatalogString6Modal").value);
    if (document.getElementById("ProduktKatalogString7Modal").value != "")
        ProduktKatalogString7 = escape(document.getElementById("ProduktKatalogString7Modal").value);
    if (document.getElementById("ProduktKatalogString8Modal").value != "")
        ProduktKatalogString8 = escape(document.getElementById("ProduktKatalogString8Modal").value);
    if (document.getElementById("ProduktKatalogString9Modal").value != "")
        ProduktKatalogString9 = escape(document.getElementById("ProduktKatalogString9Modal").value);
    if (document.getElementById("ProduktKatalogString10Modal").value != "")
        ProduktKatalogString10 = escape(document.getElementById("ProduktKatalogString10Modal").value);
    if (document.getElementById("ProduktKatalogString11Modal").value != "")
        ProduktKatalogString11 = escape(document.getElementById("ProduktKatalogString11Modal").value);
    if (document.getElementById("ProduktKatalogString12Modal").value != "")
        ProduktKatalogString12 = escape(document.getElementById("ProduktKatalogString12Modal").value);
    if (document.getElementById("ProduktKatalogString13Modal").value != "")
        ProduktKatalogString13 = escape(document.getElementById("ProduktKatalogString13Modal").value);
    if (document.getElementById("ProduktKatalogString14Modal").value != "")
        ProduktKatalogString14 = escape(document.getElementById("ProduktKatalogString14Modal").value);
    if (document.getElementById("ProduktKatalogString15Modal").value != "")
        ProduktKatalogString15 = escape(document.getElementById("ProduktKatalogString15Modal").value);
    if (document.getElementById("ProduktKatalogString16Modal").value != "")
        ProduktKatalogString16 = escape(document.getElementById("ProduktKatalogString16Modal").value);
    if (document.getElementById("ProduktKatalogString17Modal").value != "")
        ProduktKatalogString17 = escape(document.getElementById("ProduktKatalogString17Modal").value);
    if (document.getElementById("ProduktKatalogString18Modal").value != "")
        ProduktKatalogString18 = escape(document.getElementById("ProduktKatalogString18Modal").value);
    if (document.getElementById("ProduktKatalogString19Modal").value != "")
        ProduktKatalogString19 = escape(document.getElementById("ProduktKatalogString19Modal").value);
    if (document.getElementById("ProduktKatalogString20Modal").value != "")
        ProduktKatalogString20 = escape(document.getElementById("ProduktKatalogString20Modal").value);
    if (document.getElementById("ProduktKatalogString21Modal").value != "")
        ProduktKatalogString21 = escape(document.getElementById("ProduktKatalogString21Modal").value);
    if (document.getElementById("ProduktKatalogString22Modal").value != "")
        ProduktKatalogString22 = escape(document.getElementById("ProduktKatalogString22Modal").value);
    if (document.getElementById("ProduktKatalogString23Modal").value != "")
        ProduktKatalogString23 = escape(document.getElementById("ProduktKatalogString23Modal").value);
    if (document.getElementById("ProduktKatalogString24Modal").value != "")
        ProduktKatalogString24 = escape(document.getElementById("ProduktKatalogString24Modal").value);
    if (document.getElementById("ProduktKatalogString25Modal").value != "")
        ProduktKatalogString25 = escape(document.getElementById("ProduktKatalogString25Modal").value);
    if (document.getElementById("ProduktKatalogString26Modal").value != "")
        ProduktKatalogString26 = escape(document.getElementById("ProduktKatalogString26Modal").value);
    if (document.getElementById("ProduktKatalogString27Modal").value != "")
        ProduktKatalogString27 = escape(document.getElementById("ProduktKatalogString27Modal").value);
    if (document.getElementById("ProduktKatalogString28Modal").value != "")
        ProduktKatalogString28 = escape(document.getElementById("ProduktKatalogString28Modal").value);
    if (document.getElementById("ProduktKatalogString29Modal").value != "")
        ProduktKatalogString29 = escape(document.getElementById("ProduktKatalogString29Modal").value);
    if (document.getElementById("ProduktKatalogString30Modal").value != "")
        ProduktKatalogString30 = escape(document.getElementById("ProduktKatalogString30Modal").value);
    if (document.getElementById("ProduktKatalogString31Modal").value != "")
        ProduktKatalogString31 = escape(document.getElementById("ProduktKatalogString31Modal").value);
    if (document.getElementById("ProduktKatalogString32Modal").value != "")
        ProduktKatalogString32 = escape(document.getElementById("ProduktKatalogString32Modal").value);
    if (document.getElementById("ProduktKatalogString33Modal").value != "")
        ProduktKatalogString33 = escape(document.getElementById("ProduktKatalogString33Modal").value);
    if (document.getElementById("ProduktKatalogString34Modal").value != "")
        ProduktKatalogString34 = escape(document.getElementById("ProduktKatalogString34Modal").value);
    if (document.getElementById("ProduktKatalogString35Modal").value != "")
        ProduktKatalogString35 = escape(document.getElementById("ProduktKatalogString35Modal").value);
    if (document.getElementById("ProduktKatalogString36Modal").value != "")
        ProduktKatalogString36 = escape(document.getElementById("ProduktKatalogString36Modal").value);
    if (document.getElementById("ProduktKatalogString37Modal").value != "")
        ProduktKatalogString37 = escape(document.getElementById("ProduktKatalogString37Modal").value);
    if (document.getElementById("ProduktKatalogString38Modal").value != "")
        ProduktKatalogString38 = escape(document.getElementById("ProduktKatalogString38Modal").value);
    if (document.getElementById("ProduktKatalogString39Modal").value != "")
        ProduktKatalogString39 = escape(document.getElementById("ProduktKatalogString39Modal").value);
    if (document.getElementById("ProduktKatalogString40Modal").value != "")
        ProduktKatalogString40 = escape(document.getElementById("ProduktKatalogString40Modal").value);
    if (document.getElementById("ProduktKatalogString41Modal").value != "")
        ProduktKatalogString41 = escape(document.getElementById("ProduktKatalogString41Modal").value);
    if (document.getElementById("ProduktKatalogString42Modal").value != "")
        ProduktKatalogString42 = escape(document.getElementById("ProduktKatalogString42Modal").value);
    if (document.getElementById("ProduktKatalogString43Modal").value != "")
        ProduktKatalogString43 = escape(document.getElementById("ProduktKatalogString43Modal").value);
    if (document.getElementById("ProduktKatalogString44Modal").value != "")
        ProduktKatalogString44 = escape(document.getElementById("ProduktKatalogString44Modal").value);
    if (document.getElementById("ProduktKatalogString45Modal").value != "")
        ProduktKatalogString45 = escape(document.getElementById("ProduktKatalogString45Modal").value);
    if (document.getElementById("ProduktKatalogString46Modal").value != "")
        ProduktKatalogString46 = escape(document.getElementById("ProduktKatalogString46Modal").value);
    if (document.getElementById("ProduktKatalogString47Modal").value != "")
        ProduktKatalogString47 = escape(document.getElementById("ProduktKatalogString47Modal").value);
    if (document.getElementById("ProduktKatalogString48Modal").value != "")
        ProduktKatalogString48 = escape(document.getElementById("ProduktKatalogString48Modal").value);
    if (document.getElementById("ProduktKatalogString49Modal").value != "")
        ProduktKatalogString49 = escape(document.getElementById("ProduktKatalogString49Modal").value);
    if (document.getElementById("ProduktKatalogString50Modal").value != "")
        ProduktKatalogString50 = escape(document.getElementById("ProduktKatalogString50Modal").value);

    if (document.getElementById("ProduktKatalogInt1Modal").value != "")
        ProduktKatalogInt1 = parseInt(document.getElementById("ProduktKatalogInt1Modal").value);
    if (document.getElementById("ProduktKatalogInt2Modal").value != "")
        ProduktKatalogInt2 = parseInt(document.getElementById("ProduktKatalogInt2Modal").value);
    if (document.getElementById("ProduktKatalogInt3Modal").value != "")
        ProduktKatalogInt3 = parseInt(document.getElementById("ProduktKatalogInt3Modal").value);
    if (document.getElementById("ProduktKatalogInt4Modal").value != "")
        ProduktKatalogInt4 = parseInt(document.getElementById("ProduktKatalogInt4Modal").value);
    if (document.getElementById("ProduktKatalogInt5Modal").value != "")
        ProduktKatalogInt5 = parseInt(document.getElementById("ProduktKatalogInt5Modal").value);
    if (document.getElementById("ProduktKatalogInt6Modal").value != "")
        ProduktKatalogInt6 = parseInt(document.getElementById("ProduktKatalogInt6Modal").value);
    if (document.getElementById("ProduktKatalogInt7Modal").value != "")
        ProduktKatalogInt7 = parseInt(document.getElementById("ProduktKatalogInt7Modal").value);
    if (document.getElementById("ProduktKatalogInt8Modal").value != "")
        ProduktKatalogInt8 = parseInt(document.getElementById("ProduktKatalogInt8Modal").value);
    if (document.getElementById("ProduktKatalogInt9Modal").value != "")
        ProduktKatalogInt9 = parseInt(document.getElementById("ProduktKatalogInt9Modal").value);
    if (document.getElementById("ProduktKatalogInt10Modal").value != "")
        ProduktKatalogInt10 = parseInt(document.getElementById("ProduktKatalogInt10Modal").value);
    if (document.getElementById("ProduktKatalogInt11Modal").value != "")
        ProduktKatalogInt11 = parseInt(document.getElementById("ProduktKatalogInt11Modal").value);
    if (document.getElementById("ProduktKatalogInt12Modal").value != "")
        ProduktKatalogInt12 = parseInt(document.getElementById("ProduktKatalogInt12Modal").value);
    if (document.getElementById("ProduktKatalogInt13Modal").value != "")
        ProduktKatalogInt13 = parseInt(document.getElementById("ProduktKatalogInt13Modal").value);
    if (document.getElementById("ProduktKatalogInt14Modal").value != "")
        ProduktKatalogInt14 = parseInt(document.getElementById("ProduktKatalogInt14Modal").value);
    if (document.getElementById("ProduktKatalogInt15Modal").value != "")
        ProduktKatalogInt15 = parseInt(document.getElementById("ProduktKatalogInt15Modal").value);
    if (document.getElementById("ProduktKatalogInt16Modal").value != "")
        ProduktKatalogInt16 = parseInt(document.getElementById("ProduktKatalogInt16Modal").value);
    if (document.getElementById("ProduktKatalogInt17Modal").value != "")
        ProduktKatalogInt17 = parseInt(document.getElementById("ProduktKatalogInt17Modal").value);
    if (document.getElementById("ProduktKatalogInt18Modal").value != "")
        ProduktKatalogInt18 = parseInt(document.getElementById("ProduktKatalogInt18Modal").value);
    if (document.getElementById("ProduktKatalogInt19Modal").value != "")
        ProduktKatalogInt19 = parseInt(document.getElementById("ProduktKatalogInt19Modal").value);
    if (document.getElementById("ProduktKatalogInt20Modal").value != "")
        ProduktKatalogInt20 = parseInt(document.getElementById("ProduktKatalogInt20Modal").value);
    if (document.getElementById("ProduktKatalogInt21Modal").value != "")
        ProduktKatalogInt21 = parseInt(document.getElementById("ProduktKatalogInt21Modal").value);
    if (document.getElementById("ProduktKatalogInt22Modal").value != "")
        ProduktKatalogInt22 = parseInt(document.getElementById("ProduktKatalogInt22Modal").value);
    if (document.getElementById("ProduktKatalogInt23Modal").value != "")
        ProduktKatalogInt23 = parseInt(document.getElementById("ProduktKatalogInt23Modal").value);
    if (document.getElementById("ProduktKatalogInt24Modal").value != "")
        ProduktKatalogInt24 = parseInt(document.getElementById("ProduktKatalogInt24Modal").value);
    if (document.getElementById("ProduktKatalogInt25Modal").value != "")
        ProduktKatalogInt25 = parseInt(document.getElementById("ProduktKatalogInt25Modal").value);
    if (document.getElementById("ProduktKatalogInt26Modal").value != "")
        ProduktKatalogInt26 = parseInt(document.getElementById("ProduktKatalogInt26Modal").value);
    if (document.getElementById("ProduktKatalogInt27Modal").value != "")
        ProduktKatalogInt27 = parseInt(document.getElementById("ProduktKatalogInt27Modal").value);
    if (document.getElementById("ProduktKatalogInt28Modal").value != "")
        ProduktKatalogInt28 = parseInt(document.getElementById("ProduktKatalogInt28Modal").value);
    if (document.getElementById("ProduktKatalogInt29Modal").value != "")
        ProduktKatalogInt29 = parseInt(document.getElementById("ProduktKatalogInt29Modal").value);
    if (document.getElementById("ProduktKatalogInt30Modal").value != "")
        ProduktKatalogInt30 = parseInt(document.getElementById("ProduktKatalogInt30Modal").value);
    if (document.getElementById("ProduktKatalogInt31Modal").value != "")
        ProduktKatalogInt31 = parseInt(document.getElementById("ProduktKatalogInt31Modal").value);
    if (document.getElementById("ProduktKatalogInt32Modal").value != "")
        ProduktKatalogInt32 = parseInt(document.getElementById("ProduktKatalogInt32Modal").value);
    if (document.getElementById("ProduktKatalogInt33Modal").value != "")
        ProduktKatalogInt33 = parseInt(document.getElementById("ProduktKatalogInt33Modal").value);
    if (document.getElementById("ProduktKatalogInt34Modal").value != "")
        ProduktKatalogInt34 = parseInt(document.getElementById("ProduktKatalogInt34Modal").value);
    if (document.getElementById("ProduktKatalogInt35Modal").value != "")
        ProduktKatalogInt35 = parseInt(document.getElementById("ProduktKatalogInt35Modal").value);
    if (document.getElementById("ProduktKatalogInt36Modal").value != "")
        ProduktKatalogInt36 = parseInt(document.getElementById("ProduktKatalogInt36Modal").value);
    if (document.getElementById("ProduktKatalogInt37Modal").value != "")
        ProduktKatalogInt37 = parseInt(document.getElementById("ProduktKatalogInt37Modal").value);
    if (document.getElementById("ProduktKatalogInt38Modal").value != "")
        ProduktKatalogInt38 = parseInt(document.getElementById("ProduktKatalogInt38Modal").value);
    if (document.getElementById("ProduktKatalogInt39Modal").value != "")
        ProduktKatalogInt39 = parseInt(document.getElementById("ProduktKatalogInt39Modal").value);
    if (document.getElementById("ProduktKatalogInt40Modal").value != "")
        ProduktKatalogInt40 = parseInt(document.getElementById("ProduktKatalogInt40Modal").value);

    if (document.getElementById("ProduktKatalogFloat1Modal").value != "")
        ProduktKatalogFloat1 = parseFloat(document.getElementById("ProduktKatalogFloat1Modal").value);
    if (document.getElementById("ProduktKatalogFloat2Modal").value != "")
        ProduktKatalogFloat2 = parseFloat(document.getElementById("ProduktKatalogFloat2Modal").value);
    if (document.getElementById("ProduktKatalogFloat3Modal").value != "")
        ProduktKatalogFloat3 = parseFloat(document.getElementById("ProduktKatalogFloat3Modal").value);
    if (document.getElementById("ProduktKatalogFloat4Modal").value != "")
        ProduktKatalogFloat4 = parseFloat(document.getElementById("ProduktKatalogFloat4Modal").value);
    if (document.getElementById("ProduktKatalogFloat5Modal").value != "")
        ProduktKatalogFloat5 = parseFloat(document.getElementById("ProduktKatalogFloat5Modal").value);
    if (document.getElementById("ProduktKatalogFloat6Modal").value != "")
        ProduktKatalogFloat6 = parseFloat(document.getElementById("ProduktKatalogFloat6Modal").value);
    if (document.getElementById("ProduktKatalogFloat7Modal").value != "")
        ProduktKatalogFloat7 = parseFloat(document.getElementById("ProduktKatalogFloat7Modal").value);
    if (document.getElementById("ProduktKatalogFloat8Modal").value != "")
        ProduktKatalogFloat8 = parseFloat(document.getElementById("ProduktKatalogFloat8Modal").value);
    if (document.getElementById("ProduktKatalogFloat9Modal").value != "")
        ProduktKatalogFloat9 = parseFloat(document.getElementById("ProduktKatalogFloat9Modal").value);
    if (document.getElementById("ProduktKatalogFloat10Modal").value != "")
        ProduktKatalogFloat10 = parseFloat(document.getElementById("ProduktKatalogFloat10Modal").value);
    if (document.getElementById("ProduktKatalogFloat11Modal").value != "")
        ProduktKatalogFloat11 = parseFloat(document.getElementById("ProduktKatalogFloat11Modal").value);
    if (document.getElementById("ProduktKatalogFloat12Modal").value != "")
        ProduktKatalogFloat12 = parseFloat(document.getElementById("ProduktKatalogFloat12Modal").value);
    if (document.getElementById("ProduktKatalogFloat13Modal").value != "")
        ProduktKatalogFloat13 = parseFloat(document.getElementById("ProduktKatalogFloat13Modal").value);
    if (document.getElementById("ProduktKatalogFloat14Modal").value != "")
        ProduktKatalogFloat14 = parseFloat(document.getElementById("ProduktKatalogFloat14Modal").value);
    if (document.getElementById("ProduktKatalogFloat15Modal").value != "")
        ProduktKatalogFloat15 = parseFloat(document.getElementById("ProduktKatalogFloat15Modal").value);
    if (document.getElementById("ProduktKatalogFloat16Modal").value != "")
        ProduktKatalogFloat16 = parseFloat(document.getElementById("ProduktKatalogFloat16Modal").value);
    if (document.getElementById("ProduktKatalogFloat17Modal").value != "")
        ProduktKatalogFloat17 = parseFloat(document.getElementById("ProduktKatalogFloat17Modal").value);
    if (document.getElementById("ProduktKatalogFloat18Modal").value != "")
        ProduktKatalogFloat18 = parseFloat(document.getElementById("ProduktKatalogFloat18Modal").value);
    if (document.getElementById("ProduktKatalogFloat19Modal").value != "")
        ProduktKatalogFloat19 = parseFloat(document.getElementById("ProduktKatalogFloat19Modal").value);
    if (document.getElementById("ProduktKatalogFloat20Modal").value != "")
        ProduktKatalogFloat20 = parseFloat(document.getElementById("ProduktKatalogFloat20Modal").value);
    if (document.getElementById("ProduktKatalogFloat21Modal").value != "")
        ProduktKatalogFloat21 = parseFloat(document.getElementById("ProduktKatalogFloat21Modal").value);
    if (document.getElementById("ProduktKatalogFloat22Modal").value != "")
        ProduktKatalogFloat22 = parseFloat(document.getElementById("ProduktKatalogFloat22Modal").value);
    if (document.getElementById("ProduktKatalogFloat23Modal").value != "")
        ProduktKatalogFloat23 = parseFloat(document.getElementById("ProduktKatalogFloat23Modal").value);
    if (document.getElementById("ProduktKatalogFloat24Modal").value != "")
        ProduktKatalogFloat24 = parseFloat(document.getElementById("ProduktKatalogFloat24Modal").value);
    if (document.getElementById("ProduktKatalogFloat25Modal").value != "")
        ProduktKatalogFloat25 = parseFloat(document.getElementById("ProduktKatalogFloat25Modal").value);
    if (document.getElementById("ProduktKatalogFloat26Modal").value != "")
        ProduktKatalogFloat26 = parseFloat(document.getElementById("ProduktKatalogFloat26Modal").value);
    if (document.getElementById("ProduktKatalogFloat27Modal").value != "")
        ProduktKatalogFloat27 = parseFloat(document.getElementById("ProduktKatalogFloat27Modal").value);
    if (document.getElementById("ProduktKatalogFloat28Modal").value != "")
        ProduktKatalogFloat28 = parseFloat(document.getElementById("ProduktKatalogFloat28Modal").value);
    if (document.getElementById("ProduktKatalogFloat29Modal").value != "")
        ProduktKatalogFloat29 = parseFloat(document.getElementById("ProduktKatalogFloat29Modal").value);
    if (document.getElementById("ProduktKatalogFloat30Modal").value != "")
        ProduktKatalogFloat30 = parseFloat(document.getElementById("ProduktKatalogFloat30Modal").value);
    if (document.getElementById("ProduktKatalogFloat31Modal").value != "")
        ProduktKatalogFloat31 = parseFloat(document.getElementById("ProduktKatalogFloat31Modal").value);
    if (document.getElementById("ProduktKatalogFloat32Modal").value != "")
        ProduktKatalogFloat32 = parseFloat(document.getElementById("ProduktKatalogFloat32Modal").value);
    if (document.getElementById("ProduktKatalogFloat33Modal").value != "")
        ProduktKatalogFloat33 = parseFloat(document.getElementById("ProduktKatalogFloat33Modal").value);
    if (document.getElementById("ProduktKatalogFloat34Modal").value != "")
        ProduktKatalogFloat34 = parseFloat(document.getElementById("ProduktKatalogFloat34Modal").value);
    if (document.getElementById("ProduktKatalogFloat35Modal").value != "")
        ProduktKatalogFloat35 = parseFloat(document.getElementById("ProduktKatalogFloat35Modal").value);
    if (document.getElementById("ProduktKatalogFloat36Modal").value != "")
        ProduktKatalogFloat36 = parseFloat(document.getElementById("ProduktKatalogFloat36Modal").value);
    if (document.getElementById("ProduktKatalogFloat37Modal").value != "")
        ProduktKatalogFloat37 = parseFloat(document.getElementById("ProduktKatalogFloat37Modal").value);
    if (document.getElementById("ProduktKatalogFloat38Modal").value != "")
        ProduktKatalogFloat38 = parseFloat(document.getElementById("ProduktKatalogFloat38Modal").value);
    if (document.getElementById("ProduktKatalogFloat39Modal").value != "")
        ProduktKatalogFloat39 = parseFloat(document.getElementById("ProduktKatalogFloat39Modal").value);
    if (document.getElementById("ProduktKatalogFloat40Modal").value != "")
        ProduktKatalogFloat40 = parseFloat(document.getElementById("ProduktKatalogFloat40Modal").value);

    if (document.getElementById("ProduktKatalogBIT1Modal").checked)
        ProduktKatalogBIT1 = 1;
    if (document.getElementById("ProduktKatalogBIT2Modal").checked)
        ProduktKatalogBIT2 = 1;
    if (document.getElementById("ProduktKatalogBIT3Modal").checked)
        ProduktKatalogBIT3 = 1;
    if (document.getElementById("ProduktKatalogBIT4Modal").checked)
        ProduktKatalogBIT4 = 1;
    if (document.getElementById("ProduktKatalogBIT5Modal").checked)
        ProduktKatalogBIT5 = 1;
    if (document.getElementById("ProduktKatalogBIT6Modal").checked)
        ProduktKatalogBIT6 = 1;
    if (document.getElementById("ProduktKatalogBIT7Modal").checked)
        ProduktKatalogBIT7 = 1;
    if (document.getElementById("ProduktKatalogBIT8Modal").checked)
        ProduktKatalogBIT8 = 1;
    if (document.getElementById("ProduktKatalogBIT9Modal").checked)
        ProduktKatalogBIT9 = 1;
    if (document.getElementById("ProduktKatalogBIT10Modal").checked)
        ProduktKatalogBIT10 = 1;

    var sql = "";
    for (var i = 0; i < ProduktKatalogModalArr.length; i++) {
        if (sql != "")
            sql += ",";
        if (String(ProduktKatalogModalArr[i]).indexOf("Float") > 0)
            eval('sql += String(ProduktKatalogModalArr[i]) + " = "+' + ProduktKatalogModalArr[i] + '+"";');
        else if (String(ProduktKatalogModalArr[i]).indexOf("Int") > 0 || String(ProduktKatalogModalArr[i]).indexOf("BIT") > 0)
            eval('sql += String(ProduktKatalogModalArr[i]) + " = "+' + ProduktKatalogModalArr[i] + '+"";');
        else
            eval('sql += String(ProduktKatalogModalArr[i]) + " = \'"+' + ProduktKatalogModalArr[i] + '+"\'";');
    }

    if (document.getElementById("Datum2Modal").value != "")
        sql += ",Datum2='" + escape(document.getElementById("Datum2Modal").value) + "'";
    if (document.getElementById("Datum3Modal").value != "")
        sql += ",Datum3='" + escape(document.getElementById("Datum3Modal").value) + "'";
    if (document.getElementById("Datum4Modal").value != "")
        sql += ",Datum4='" + escape(document.getElementById("Datum4Modal").value) + "'";
    //if(document.getElementById("StatusModal").value!="")	sql += ",Status="+parseInt(document.getElementById("StatusModal").value)+"";	

    sql = "UPDATE `laaver`.Produkt_Katalog SET " + sql + " WHERE prIDX=" + mainIDX + "";

    $.ajax({
        type: "POST",
        url: "/General_Update",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        cache: false,
        data: {
            SQL_TXT: escape(sql),
        },
        success: function(response) {
            switch (lang) {
            case "en":
                alert("Information updated!");
                break;
            case "de":
                alert("Informationen wurden aktualisiert!");
                break;
            case "fr":
                alert("Information mise à jour!");
                break;
            case "cn":
                alert("信息已更新！");
                break;
            }
            window.location.reload();
        },
        error: function(xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });
}

function showNewProduktKatalogModal() {
    $('#exampleNewModal').modal('show');
}

function saveNewProduktKatalog() {
    //新增对象所需的参数
    var ProduktKatalogNewArr = ["ProduktKatalogString1", "ProduktKatalogString2", "ProduktKatalogString3", "ProduktKatalogString4"];
    var sql = ""
      , sql1 = ""
      , sql2 = "";

    for (var i = 0; i < ProduktKatalogNewArr.length; i++) {
        if (sql1 != "")
            sql1 += ",";
        sql1 += String(ProduktKatalogNewArr[i]);
    }
    for (var i = 0; i < ProduktKatalogNewArr.length; i++) {
        if (sql2 != "")
            sql2 += ",";
        sql2 += "'" + escape(document.getElementById(String(ProduktKatalogNewArr[i]) + "New").value) + "'";
    }

    var sql = "INSERT INTO `laaver`.Produkt_Katalog (" + sql1 + ") VALUES (" + sql2 + ")";

    $.ajax({
        type: "POST",
        url: "/General_Insert",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        cache: false,
        data: {
            SQL_TXT: escape(sql),
        },
        success: function(response) {
            window.location.reload();
        },
        error: function(xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });
}

function showProduktKatalogAttributObj(Attribut, Type, indexA, indexB, indexC, indexD, indexE, indexF, lang) {
    this.Attribut = Attribut;
    this.Type = Type;
    this.indexA = indexA;
    this.indexB = indexB;
    this.indexC = indexC;
    this.indexD = indexD;
    this.indexE = indexE;
    this.indexF = indexF;
    this.lang = lang;
}

function getProduktKatalogAttributName(param) {
    var txt = "";
    for (var i = 0; i < showProduktKatalogAttributArr.length; i++) {
        if (showProduktKatalogAttributArr[i].Attribut == param)
            txt = unescape(showProduktKatalogAttributArr[i].lang[langNum]);
    }

    return txt;
}

document.addEventListener("DOMContentLoaded", function() {
    var PrintArr = new Array()
      , PrintObjTXT1 = ""
      , PrintObjTXT2 = "";
    for (var i = 0; i < showProduktKatalogAttributArr.length; i++) {
        showProduktKatalogAttributArr.sort(compare('indexD'));
        if (showProduktKatalogAttributArr[i].indexD > 0) {
            PrintArr.push(unescape(showProduktKatalogAttributArr[i].lang[langNum]));
            PrintObjTXT1 += "" + showProduktKatalogAttributArr[i].Attribut + ",";
            PrintObjTXT2 += "this." + showProduktKatalogAttributArr[i].Attribut + "=" + showProduktKatalogAttributArr[i].Attribut + ";";
        }
    }
    eval("function PrintObj(" + PrintObjTXT1.substring(0, PrintObjTXT1.length - 1) + "){" + PrintObjTXT2 + "}");
});

function exportExcel() {
    showLoadingDiv();
    showProduktKatalogAttributArr.sort(compare('indexD'));
    var filename = getDatumInterval(0) + "-" + "ProduktKatalog-" + String(new Date().getTime()).substring(6);
    var ExcelHeaderColumns = new Array();
    var ExcelData = new Array();
    var Summe = 0
      , iCount = 0;

    var printTXT1 = ""
      , printTXT2 = "";

    for (var i = 0; i < ProduktKatalogArr.length; i++) {
        for (var j = 0; j < showProduktKatalogAttributArr.length; j++) {
            eval("if(showProduktKatalogAttributArr[j].indexD>0){" + "if(showProduktKatalogAttributArr[j].indexD==1) printTXT1 += \"'PK'+parseInt(10000+parseInt(ProduktKatalogArr[i]." + showProduktKatalogAttributArr[j].Attribut + ")),\";" + "else if(showProduktKatalogAttributArr[j].Attribut=='Status'){ " + "for(var m=0;m<ProduktKatalogStatusArr.length;m++)if(ProduktKatalogStatusArr[m][4]==ProduktKatalogArr[i].Status) printTXT1 += \"unescape(getProduktKatalogStatusName(ProduktKatalogArr[i].Status)),\";}" + "else if(showProduktKatalogAttributArr[j].Type=='BIT') printTXT1 += \"(parseInt(ProduktKatalogArr[i]." + showProduktKatalogAttributArr[j].Attribut + ")==1?'Yes':'No'),\";" + "else printTXT1 += \"unescape(ProduktKatalogArr[i]." + showProduktKatalogAttributArr[j].Attribut + "),\";" + "}");
        }
        eval("ExcelData.push(new PrintObj(" + printTXT1.substring(0, printTXT1.length - 1) + "));");
        printTXT1 = "";
        Summe += parseFloat(ProduktKatalogArr[i].ProduktKatalogFloat1);
    }

    printTXT1 = "",
    printTXT2 = "";
    for (var j = 0; j < showProduktKatalogAttributArr.length; j++) {
        if (showProduktKatalogAttributArr[j].indexD > 0) {
            printTXT1 += "'',";
            if (j > 1)
                printTXT2 += "'',";
        }
    }

    //eval("ExcelData.push(new PrintObj("+printTXT1.substring(0,printTXT1.length-1)+"));");
    //eval("ExcelData.push(new PrintObj('总额',FCommaEUR(Summe)+' €',"+printTXT2.substring(0,printTXT2.length-1)+"));");

    $.ajax({
        type: "POST",
        url: "/Excel_Export",
        contentType: 'application/x-www-form-urlencoded',
        xhrFields: {
            withCredentials: true
        },
        cache: false,
        data: {
            "filename": escape(filename),
            "WorksheetName": "ProduktKatalog",
            "ExcelHeaderColumns": JSON.stringify(PrintArr),
            "ExcelData": JSON.stringify(ExcelData),
        },
        success: function(response) {
            setTimeout(function() {
                hideLoadingDiv();
                window.open("https://intranet.laaver.com/excel/" + escape(filename) + ".xlsx");
            }, 300);
        }
    });
}

function getProduktKatalogStatusName(id) {
    if (id != "" && ProduktKatalogStatusArr.length > 0) {
        for (var i = 0; i < ProduktKatalogStatusArr.length; i++) {
            if (ProduktKatalogStatusArr[i][4] == id) {
                return unescape(ProduktKatalogStatusArr[i][langNum]);
                break;
            }
        }
    }
}

function getProduktKatalogPosition(num) {
    for (let i = 0; i < ProduktKatalogInt1Arr.length; i++) {
        if (ProduktKatalogInt1Arr[i][4] == num) {
            switch (lang) {
            case "en":
                return ProduktKatalogInt1Arr[i][langNum];
            case "de":
                return ProduktKatalogInt1Arr[i][langNum];
            case "fr":
                return ProduktKatalogInt1Arr[i][langNum];
            case "cn":
                return ProduktKatalogInt1Arr[i][langNum];
            }
        }
    }
    return "";
}

/**** multiple files upload begin ****/
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const uploadStatus = document.getElementById('uploadStatus');
const BildShow = document.getElementById('BildShowDiv');

// 阻止浏览器默认拖放行为
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
}
);

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// 添加拖拽效果
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => {
        dropZone.classList.add('highlight');
    }
    , false);
}
);

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, () => {
        dropZone.classList.remove('highlight');
    }
    , false);
}
);

// 处理文件拖放
dropZone.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    handleFiles(files);
}

// 处理文件选择
fileInput.addEventListener('change', function() {
    handleFiles(this.files);
});

// 处理上传
function handleFiles(files) {
    uploadStatus.innerHTML = 'Uploading...';

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
        // 获取文件名和扩展名
        const fileName = "ProdukeKatalog_"+mainIDX;
        // 去掉扩展名
        const fileExtension = files[i].name.split('.').pop();
        // 生成时间戳
        const timestamp = Date.now();
        // 修改文件名并添加到 FormData 对象中
        const newFileName = `${fileName}_${timestamp}.${fileExtension}`;
        formData.append('images', files[i], newFileName);
    }

    fetch('/file-upload-one', {
        method: 'POST',
        body: formData
    }).then(response => response.json()).then(data => {
        uploadStatus.innerHTML = '';
        data.forEach(filename => {
            uploadStatus.innerHTML = "<div style='margin-top:5px;'>" + filename + "</div>";
			BildShow.innerHTML = "<img src='https://intranet.laaver.com/file/product/" + filename + "' style='width:100%;' />";						updateKatalogBild(filename);
        }
        );
    }
    ).catch(error => {
        uploadStatus.innerHTML = "Error: " + error + "";
    }
    );
}function updateKatalogBild(filename){	$.ajax({		type: "POST",		url: "/General_Update",		contentType: 'application/x-www-form-urlencoded',		data: {			SQL_TXT: escape("UPDATE `laaver`.produkt_katalog SET ProduktKatalogString10='" + filename + "' WHERE prIDX=" + mainIDX)		},		success: function () {			//do nothing		},		error: function (response) {			console.log(response);		}	});}
/**** multiple files upload end ****/

/****
CREATE TABLE IF NOT EXISTS `ProduktKatalog` (
	`prIDX` int(11) NOT NULL AUTO_INCREMENT,
	`frIDX` int(11) DEFAULT NULL,
	`Status` int(11) NOT NULL DEFAULT 1,
	`Datum1` datetime NOT NULL DEFAULT current_timestamp(),
	`Datum2` datetime DEFAULT NULL,
	`Datum3` datetime DEFAULT NULL,
	`Datum4` datetime DEFAULT NULL,
	`ProduktKatalogString1` varchar(500) NOT NULL DEFAULT '',
	`ProduktKatalogString2` varchar(500) NOT NULL DEFAULT '',
	`ProduktKatalogString3` varchar(500) NOT NULL DEFAULT '',
	`ProduktKatalogString4` varchar(500) NOT NULL DEFAULT '',
	`ProduktKatalogString5` varchar(500) NOT NULL DEFAULT '',
	`ProduktKatalogString6` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString7` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString8` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString9` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString10` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString11` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString12` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString13` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString14` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString15` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString16` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString17` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString18` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString19` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString20` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString21` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString22` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString23` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString24` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString25` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString26` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString27` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString28` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString29` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString30` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString31` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString32` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString33` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString34` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString35` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString36` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString37` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString38` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString39` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString40` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString41` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString42` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString43` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString44` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString45` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString46` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString47` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString48` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString49` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogString50` varchar(100) NOT NULL DEFAULT '',
	`ProduktKatalogInt1` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt2` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt3` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt4` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt5` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt6` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt7` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt8` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt9` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt10` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt11` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt12` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt13` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt14` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt15` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt16` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt17` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt18` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt19` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt20` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt21` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt22` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt23` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt24` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt25` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt26` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt27` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt28` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt29` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt30` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt31` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt32` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt33` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt34` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt35` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt36` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt37` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt38` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt39` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogInt40` int(11) NOT NULL DEFAULT 0,
	`ProduktKatalogFloat1` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat2` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat3` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat4` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat5` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat6` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat7` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat8` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat9` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat10` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat11` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat12` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat13` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat14` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat15` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat16` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat17` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat18` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat19` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat20` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat21` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat22` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat23` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat24` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat25` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat26` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat27` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat28` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat29` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat30` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat31` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat32` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat33` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat34` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat35` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat36` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat37` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat38` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat39` float NOT NULL DEFAULT 0,
	`ProduktKatalogFloat40` float NOT NULL DEFAULT 0,
	`ProduktKatalogBIT1` bit(1) NOT NULL DEFAULT b'0',
	`ProduktKatalogBIT2` bit(1) NOT NULL DEFAULT b'0',
	`ProduktKatalogBIT3` bit(1) NOT NULL DEFAULT b'0',
	`ProduktKatalogBIT4` bit(1) NOT NULL DEFAULT b'0',
	`ProduktKatalogBIT5` bit(1) NOT NULL DEFAULT b'0',
	`ProduktKatalogBIT6` bit(1) NOT NULL DEFAULT b'0',
	`ProduktKatalogBIT7` bit(1) NOT NULL DEFAULT b'0',
	`ProduktKatalogBIT8` bit(1) NOT NULL DEFAULT b'0',
	`ProduktKatalogBIT9` bit(1) NOT NULL DEFAULT b'0',
	`ProduktKatalogBIT10` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`prIDX`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
****/

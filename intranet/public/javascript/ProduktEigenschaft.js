var globalIDX = 0;
if (String(GetQueryString("prIDX")) != "" && String(GetQueryString("prIDX")) != "null" && String(GetQueryString("prIDX")) != "undefined")
    globalIDX = parseInt(GetQueryString("prIDX"));
var mainIDX = 0;

var ProduktEigenschaftArr = new Array();
var showProduktEigenschaftAttributArr = new Array();

showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("prIDX","parseInt",1,1,1,1,1,1,new Array("Serial Number","Seriennummer","Numéro de série","序列号")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("frIDX","parseInt",0,0,0,0,0,0,new Array("frIDX", "frIDX", "frIDX", "frIDX")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("Datum1","String",0,0,0,0,0,0,new Array("Creation Date","Erstellungsdatum","Date de création","创建日期")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("Datum2","String",0,0,0,0,0,0,new Array("Modification Date", "Änderungsdatum", "Date de modification", "更改日期")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("Datum3","String",0,0,0,0,0,0,new Array("Datum3","Datum3","Datum3","Datum3")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("Datum4","String",0,0,0,0,0,0,new Array("Datum4","Datum4","Datum4","Datum4")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("Status","parseInt",0,0,0,0,0,0,new Array("Status","Status","Statut","状态")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString1","String",0,10,10,10,10,10,new Array("English Name", "Englischer Name", "Nom anglais", "英文名")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString2","String",0,11,11,11,11,11,new Array("German Name", "Deutscher Name", "Nom allemand", "德文名")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString3","String",0,12,12,12,12,12,new Array("French Name", "Französischer Name", "Nom français", "法文名")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString4","String",0,13,13,13,13,13,new Array("Chinese Name", "Chinesischer Name", "Nom chinois", "中文名")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString5","String",0,0,0,0,0,0,new Array("Image", "Bild", "Image", "图片")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString6","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString6","ProduktEigenschaftString6","ProduktEigenschaftString6","ProduktEigenschaftString6")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString7","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString7","ProduktEigenschaftString7","ProduktEigenschaftString7","ProduktEigenschaftString7")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString8","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString8","ProduktEigenschaftString8","ProduktEigenschaftString8","ProduktEigenschaftString8")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString9","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString9","ProduktEigenschaftString9","ProduktEigenschaftString9","ProduktEigenschaftString9")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString10","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString10","ProduktEigenschaftString10","ProduktEigenschaftString10","ProduktEigenschaftString10")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString11","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString11","ProduktEigenschaftString11","ProduktEigenschaftString11","ProduktEigenschaftString11")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString12","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString12","ProduktEigenschaftString12","ProduktEigenschaftString12","ProduktEigenschaftString12")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString13","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString13","ProduktEigenschaftString13","ProduktEigenschaftString13","ProduktEigenschaftString13")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString14","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString14","ProduktEigenschaftString14","ProduktEigenschaftString14","ProduktEigenschaftString14")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString15","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString15","ProduktEigenschaftString15","ProduktEigenschaftString15","ProduktEigenschaftString15")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString16","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString16","ProduktEigenschaftString16","ProduktEigenschaftString16","ProduktEigenschaftString16")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString17","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString17","ProduktEigenschaftString17","ProduktEigenschaftString17","ProduktEigenschaftString17")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString18","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString18","ProduktEigenschaftString18","ProduktEigenschaftString18","ProduktEigenschaftString18")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString19","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString19","ProduktEigenschaftString19","ProduktEigenschaftString19","ProduktEigenschaftString19")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString20","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString20","ProduktEigenschaftString20","ProduktEigenschaftString20","ProduktEigenschaftString20")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString21","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString21","ProduktEigenschaftString21","ProduktEigenschaftString21","ProduktEigenschaftString21")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString22","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString22","ProduktEigenschaftString22","ProduktEigenschaftString22","ProduktEigenschaftString22")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString23","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString23","ProduktEigenschaftString23","ProduktEigenschaftString23","ProduktEigenschaftString23")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString24","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString24","ProduktEigenschaftString24","ProduktEigenschaftString24","ProduktEigenschaftString24")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString25","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString25","ProduktEigenschaftString25","ProduktEigenschaftString25","ProduktEigenschaftString25")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString26","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString26","ProduktEigenschaftString26","ProduktEigenschaftString26","ProduktEigenschaftString26")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString27","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString27","ProduktEigenschaftString27","ProduktEigenschaftString27","ProduktEigenschaftString27")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString28","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString28","ProduktEigenschaftString28","ProduktEigenschaftString28","ProduktEigenschaftString28")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString29","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString29","ProduktEigenschaftString29","ProduktEigenschaftString29","ProduktEigenschaftString29")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString30","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString30","ProduktEigenschaftString30","ProduktEigenschaftString30","ProduktEigenschaftString30")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString31","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString31","ProduktEigenschaftString31","ProduktEigenschaftString31","ProduktEigenschaftString31")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString32","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString32","ProduktEigenschaftString32","ProduktEigenschaftString32","ProduktEigenschaftString32")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString33","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString33","ProduktEigenschaftString33","ProduktEigenschaftString33","ProduktEigenschaftString33")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString34","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString34","ProduktEigenschaftString34","ProduktEigenschaftString34","ProduktEigenschaftString34")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString35","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString35","ProduktEigenschaftString35","ProduktEigenschaftString35","ProduktEigenschaftString35")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString36","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString36","ProduktEigenschaftString36","ProduktEigenschaftString36","ProduktEigenschaftString36")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString37","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString37","ProduktEigenschaftString37","ProduktEigenschaftString37","ProduktEigenschaftString37")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString38","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString38","ProduktEigenschaftString38","ProduktEigenschaftString38","ProduktEigenschaftString38")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString39","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString39","ProduktEigenschaftString39","ProduktEigenschaftString39","ProduktEigenschaftString39")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString40","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString40","ProduktEigenschaftString40","ProduktEigenschaftString40","ProduktEigenschaftString40")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString41","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString41","ProduktEigenschaftString41","ProduktEigenschaftString41","ProduktEigenschaftString41")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString42","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString42","ProduktEigenschaftString42","ProduktEigenschaftString42","ProduktEigenschaftString42")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString43","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString43","ProduktEigenschaftString43","ProduktEigenschaftString43","ProduktEigenschaftString43")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString44","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString44","ProduktEigenschaftString44","ProduktEigenschaftString44","ProduktEigenschaftString44")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString45","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString45","ProduktEigenschaftString45","ProduktEigenschaftString45","ProduktEigenschaftString45")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString46","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString46","ProduktEigenschaftString46","ProduktEigenschaftString46","ProduktEigenschaftString46")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString47","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString47","ProduktEigenschaftString47","ProduktEigenschaftString47","ProduktEigenschaftString47")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString48","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString48","ProduktEigenschaftString48","ProduktEigenschaftString48","ProduktEigenschaftString48")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString49","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString49","ProduktEigenschaftString49","ProduktEigenschaftString49","ProduktEigenschaftString49")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftString50","String",0,0,0,0,0,0,new Array("ProduktEigenschaftString50","ProduktEigenschaftString50","ProduktEigenschaftString50","ProduktEigenschaftString50")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt1","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt1","ProduktEigenschaftInt1","ProduktEigenschaftInt1","ProduktEigenschaftInt1")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt2","Int",0,0,0,0,0,0,new Array("Sort Order", "Sortierreihenfolge", "Ordre de tri", "排序")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt3","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt3","ProduktEigenschaftInt3","ProduktEigenschaftInt3","ProduktEigenschaftInt3")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt4","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt4","ProduktEigenschaftInt4","ProduktEigenschaftInt4","ProduktEigenschaftInt4")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt5","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt5","ProduktEigenschaftInt5","ProduktEigenschaftInt5","ProduktEigenschaftInt5")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt6","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt6","ProduktEigenschaftInt6","ProduktEigenschaftInt6","ProduktEigenschaftInt6")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt7","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt7","ProduktEigenschaftInt7","ProduktEigenschaftInt7","ProduktEigenschaftInt7")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt8","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt8","ProduktEigenschaftInt8","ProduktEigenschaftInt8","ProduktEigenschaftInt8")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt9","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt9","ProduktEigenschaftInt9","ProduktEigenschaftInt9","ProduktEigenschaftInt9")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt10","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt10","ProduktEigenschaftInt10","ProduktEigenschaftInt10","ProduktEigenschaftInt10")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt11","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt11","ProduktEigenschaftInt11","ProduktEigenschaftInt11","ProduktEigenschaftInt11")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt12","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt12","ProduktEigenschaftInt12","ProduktEigenschaftInt12","ProduktEigenschaftInt12")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt13","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt13","ProduktEigenschaftInt13","ProduktEigenschaftInt13","ProduktEigenschaftInt13")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt14","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt14","ProduktEigenschaftInt14","ProduktEigenschaftInt14","ProduktEigenschaftInt14")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt15","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt15","ProduktEigenschaftInt15","ProduktEigenschaftInt15","ProduktEigenschaftInt15")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt16","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt16","ProduktEigenschaftInt16","ProduktEigenschaftInt16","ProduktEigenschaftInt16")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt17","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt17","ProduktEigenschaftInt17","ProduktEigenschaftInt17","ProduktEigenschaftInt17")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt18","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt18","ProduktEigenschaftInt18","ProduktEigenschaftInt18","ProduktEigenschaftInt18")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt19","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt19","ProduktEigenschaftInt19","ProduktEigenschaftInt19","ProduktEigenschaftInt19")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt20","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt20","ProduktEigenschaftInt20","ProduktEigenschaftInt20","ProduktEigenschaftInt20")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt21","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt21","ProduktEigenschaftInt21","ProduktEigenschaftInt21","ProduktEigenschaftInt21")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt22","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt22","ProduktEigenschaftInt22","ProduktEigenschaftInt22","ProduktEigenschaftInt22")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt23","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt23","ProduktEigenschaftInt23","ProduktEigenschaftInt23","ProduktEigenschaftInt23")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt24","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt24","ProduktEigenschaftInt24","ProduktEigenschaftInt24","ProduktEigenschaftInt24")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt25","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt25","ProduktEigenschaftInt25","ProduktEigenschaftInt25","ProduktEigenschaftInt25")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt26","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt26","ProduktEigenschaftInt26","ProduktEigenschaftInt26","ProduktEigenschaftInt26")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt27","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt27","ProduktEigenschaftInt27","ProduktEigenschaftInt27","ProduktEigenschaftInt27")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt28","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt28","ProduktEigenschaftInt28","ProduktEigenschaftInt28","ProduktEigenschaftInt28")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt29","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt29","ProduktEigenschaftInt29","ProduktEigenschaftInt29","ProduktEigenschaftInt29")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt30","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt30","ProduktEigenschaftInt30","ProduktEigenschaftInt30","ProduktEigenschaftInt30")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt31","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt31","ProduktEigenschaftInt31","ProduktEigenschaftInt31","ProduktEigenschaftInt31")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt32","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt32","ProduktEigenschaftInt32","ProduktEigenschaftInt32","ProduktEigenschaftInt32")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt33","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt33","ProduktEigenschaftInt33","ProduktEigenschaftInt33","ProduktEigenschaftInt33")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt34","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt34","ProduktEigenschaftInt34","ProduktEigenschaftInt34","ProduktEigenschaftInt34")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt35","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt35","ProduktEigenschaftInt35","ProduktEigenschaftInt35","ProduktEigenschaftInt35")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt36","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt36","ProduktEigenschaftInt36","ProduktEigenschaftInt36","ProduktEigenschaftInt36")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt37","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt37","ProduktEigenschaftInt37","ProduktEigenschaftInt37","ProduktEigenschaftInt37")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt38","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt38","ProduktEigenschaftInt38","ProduktEigenschaftInt38","ProduktEigenschaftInt38")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt39","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt39","ProduktEigenschaftInt39","ProduktEigenschaftInt39","ProduktEigenschaftInt39")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftInt40","Int",0,0,0,0,0,0,new Array("ProduktEigenschaftInt40","ProduktEigenschaftInt40","ProduktEigenschaftInt40","ProduktEigenschaftInt40")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat1","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat1","ProduktEigenschaftFloat1","ProduktEigenschaftFloat1","ProduktEigenschaftFloat1")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat2","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat2","ProduktEigenschaftFloat2","ProduktEigenschaftFloat2","ProduktEigenschaftFloat2")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat3","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat3","ProduktEigenschaftFloat3","ProduktEigenschaftFloat3","ProduktEigenschaftFloat3")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat4","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat4","ProduktEigenschaftFloat4","ProduktEigenschaftFloat4","ProduktEigenschaftFloat4")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat5","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat5","ProduktEigenschaftFloat5","ProduktEigenschaftFloat5","ProduktEigenschaftFloat5")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat6","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat6","ProduktEigenschaftFloat6","ProduktEigenschaftFloat6","ProduktEigenschaftFloat6")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat7","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat7","ProduktEigenschaftFloat7","ProduktEigenschaftFloat7","ProduktEigenschaftFloat7")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat8","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat8","ProduktEigenschaftFloat8","ProduktEigenschaftFloat8","ProduktEigenschaftFloat8")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat9","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat9","ProduktEigenschaftFloat9","ProduktEigenschaftFloat9","ProduktEigenschaftFloat9")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat10","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat10","ProduktEigenschaftFloat10","ProduktEigenschaftFloat10","ProduktEigenschaftFloat10")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat11","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat11","ProduktEigenschaftFloat11","ProduktEigenschaftFloat11","ProduktEigenschaftFloat11")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat12","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat12","ProduktEigenschaftFloat12","ProduktEigenschaftFloat12","ProduktEigenschaftFloat12")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat13","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat13","ProduktEigenschaftFloat13","ProduktEigenschaftFloat13","ProduktEigenschaftFloat13")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat14","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat14","ProduktEigenschaftFloat14","ProduktEigenschaftFloat14","ProduktEigenschaftFloat14")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat15","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat15","ProduktEigenschaftFloat15","ProduktEigenschaftFloat15","ProduktEigenschaftFloat15")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat16","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat16","ProduktEigenschaftFloat16","ProduktEigenschaftFloat16","ProduktEigenschaftFloat16")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat17","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat17","ProduktEigenschaftFloat17","ProduktEigenschaftFloat17","ProduktEigenschaftFloat17")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat18","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat18","ProduktEigenschaftFloat18","ProduktEigenschaftFloat18","ProduktEigenschaftFloat18")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat19","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat19","ProduktEigenschaftFloat19","ProduktEigenschaftFloat19","ProduktEigenschaftFloat19")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat20","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat20","ProduktEigenschaftFloat20","ProduktEigenschaftFloat20","ProduktEigenschaftFloat20")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat21","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat21","ProduktEigenschaftFloat21","ProduktEigenschaftFloat21","ProduktEigenschaftFloat21")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat22","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat22","ProduktEigenschaftFloat22","ProduktEigenschaftFloat22","ProduktEigenschaftFloat22")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat23","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat23","ProduktEigenschaftFloat23","ProduktEigenschaftFloat23","ProduktEigenschaftFloat23")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat24","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat24","ProduktEigenschaftFloat24","ProduktEigenschaftFloat24","ProduktEigenschaftFloat24")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat25","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat25","ProduktEigenschaftFloat25","ProduktEigenschaftFloat25","ProduktEigenschaftFloat25")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat26","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat26","ProduktEigenschaftFloat26","ProduktEigenschaftFloat26","ProduktEigenschaftFloat26")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat27","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat27","ProduktEigenschaftFloat27","ProduktEigenschaftFloat27","ProduktEigenschaftFloat27")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat28","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat28","ProduktEigenschaftFloat28","ProduktEigenschaftFloat28","ProduktEigenschaftFloat28")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat29","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat29","ProduktEigenschaftFloat29","ProduktEigenschaftFloat29","ProduktEigenschaftFloat29")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat30","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat30","ProduktEigenschaftFloat30","ProduktEigenschaftFloat30","ProduktEigenschaftFloat30")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat31","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat31","ProduktEigenschaftFloat31","ProduktEigenschaftFloat31","ProduktEigenschaftFloat31")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat32","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat32","ProduktEigenschaftFloat32","ProduktEigenschaftFloat32","ProduktEigenschaftFloat32")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat33","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat33","ProduktEigenschaftFloat33","ProduktEigenschaftFloat33","ProduktEigenschaftFloat33")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat34","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat34","ProduktEigenschaftFloat34","ProduktEigenschaftFloat34","ProduktEigenschaftFloat34")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat35","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat35","ProduktEigenschaftFloat35","ProduktEigenschaftFloat35","ProduktEigenschaftFloat35")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat36","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat36","ProduktEigenschaftFloat36","ProduktEigenschaftFloat36","ProduktEigenschaftFloat36")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat37","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat37","ProduktEigenschaftFloat37","ProduktEigenschaftFloat37","ProduktEigenschaftFloat37")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat38","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat38","ProduktEigenschaftFloat38","ProduktEigenschaftFloat38","ProduktEigenschaftFloat38")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat39","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat39","ProduktEigenschaftFloat39","ProduktEigenschaftFloat39","ProduktEigenschaftFloat39")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftFloat40","Float",0,0,0,0,0,0,new Array("ProduktEigenschaftFloat40","ProduktEigenschaftFloat40","ProduktEigenschaftFloat40","ProduktEigenschaftFloat40")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftBIT1","BIT",0,0,0,0,0,0,new Array("ProduktEigenschaftBIT1","ProduktEigenschaftBIT1","ProduktEigenschaftBIT1","ProduktEigenschaftBIT1")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftBIT2","BIT",0,0,0,0,0,0,new Array("ProduktEigenschaftBIT2","ProduktEigenschaftBIT2","ProduktEigenschaftBIT2","ProduktEigenschaftBIT2")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftBIT3","BIT",0,0,0,0,0,0,new Array("ProduktEigenschaftBIT3","ProduktEigenschaftBIT3","ProduktEigenschaftBIT3","ProduktEigenschaftBIT3")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftBIT4","BIT",0,0,0,0,0,0,new Array("ProduktEigenschaftBIT4","ProduktEigenschaftBIT4","ProduktEigenschaftBIT4","ProduktEigenschaftBIT4")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftBIT5","BIT",0,0,0,0,0,0,new Array("ProduktEigenschaftBIT5","ProduktEigenschaftBIT5","ProduktEigenschaftBIT5","ProduktEigenschaftBIT5")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftBIT6","BIT",0,0,0,0,0,0,new Array("ProduktEigenschaftBIT6","ProduktEigenschaftBIT6","ProduktEigenschaftBIT6","ProduktEigenschaftBIT6")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftBIT7","BIT",0,0,0,0,0,0,new Array("ProduktEigenschaftBIT7","ProduktEigenschaftBIT7","ProduktEigenschaftBIT7","ProduktEigenschaftBIT7")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftBIT8","BIT",0,0,0,0,0,0,new Array("ProduktEigenschaftBIT8","ProduktEigenschaftBIT8","ProduktEigenschaftBIT8","ProduktEigenschaftBIT8")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftBIT9","BIT",0,0,0,0,0,0,new Array("ProduktEigenschaftBIT9","ProduktEigenschaftBIT9","ProduktEigenschaftBIT9","ProduktEigenschaftBIT9")));
showProduktEigenschaftAttributArr.push(new showProduktEigenschaftAttributObj("ProduktEigenschaftBIT10","BIT",0,0,0,0,0,0,new Array("ProduktEigenschaftBIT10","ProduktEigenschaftBIT10","ProduktEigenschaftBIT10","ProduktEigenschaftBIT10")));

var ProduktEigenschaftStatusArr = new Array();
ProduktEigenschaftStatusArr.push(["Active", "Aktiv", "Actif", "有效", 1]);
ProduktEigenschaftStatusArr.push(["Deactive", "Deaktiv", "Désactiver", "无效", 9]);

var ProduktEigenschaftInt1Arr = new Array();

function GetQueryString(string) {
    var reg = new RegExp('(^|&)' + string + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}

function initGUI() {
	document.getElementById("kt_header_menu").innerHTML = ProduktTopText;
	document.getElementById("menu-item-2").classList.add("menu-item-here", "menu-item-rel", "menu-item-active");

	
    showProduktEigenschaftAttributArr.sort(compare('indexA'));
    for (var i = 0; i < showProduktEigenschaftAttributArr.length; i++) {
        if (showProduktEigenschaftAttributArr[i].indexA > 0) {
            eval("if(document.getElementById('" + showProduktEigenschaftAttributArr[i].Attribut + "SearchDiv'))document.getElementById('" + showProduktEigenschaftAttributArr[i].Attribut + "SearchDiv').style.display='block';");
        }
    }
	document.getElementById("prIDXSearchLabel").innerHTML = showProduktEigenschaftAttributArr[0].lang[langNum];
    var sel = document.getElementById("StatusSearch");
    for (var i = 0; i < ProduktEigenschaftStatusArr.length; i++) {
        var temp = document.createElement("option");
        temp.value = ProduktEigenschaftStatusArr[i][4];
        temp.text = unescape(ProduktEigenschaftStatusArr[i][langNum]);
        sel.add(temp, sel.options.length);
    }
    var sel = document.getElementById("StatusModal");
    for (var i = 0; i < ProduktEigenschaftStatusArr.length; i++) {
        var temp = document.createElement("option");
        temp.value = ProduktEigenschaftStatusArr[i][4];
        temp.text = unescape(ProduktEigenschaftStatusArr[i][langNum]);
        if (ProduktEigenschaftStatusArr[i][3] == 1)
            temp.selected = "selected";
        sel.add(temp, sel.options.length);
    }

    var sel = document.getElementById("ProduktEigenschaftInt1Search");
    for (var i = 0; i < ProduktEigenschaftInt1Arr.length; i++) {
        var temp = document.createElement("option");
        temp.value = ProduktEigenschaftInt1Arr[i][4];
        temp.text = unescape(ProduktEigenschaftInt1Arr[i][langNum]);
        sel.add(temp, sel.options.length);
    }
    var sel = document.getElementById("ProduktEigenschaftInt1Modal");
    for (var i = 0; i < ProduktEigenschaftInt1Arr.length; i++) {
        var temp = document.createElement("option");
        temp.value = ProduktEigenschaftInt1Arr[i][4];
        temp.text = unescape(ProduktEigenschaftInt1Arr[i][langNum]);
        if (ProduktEigenschaftInt1Arr[i][3] == 1)
            temp.selected = "selected";
        sel.add(temp, sel.options.length);
    }

    document.getElementById("prIDXSearchLabel").innerHTML = getProduktEigenschaftAttributName("prIDX");
    document.getElementById("frIDXSearchLabel").innerHTML = getProduktEigenschaftAttributName("frIDX");
    document.getElementById("Datum1_1SearchLabel").innerHTML = getProduktEigenschaftAttributName("Datum1") + " von";
    document.getElementById("Datum1_2SearchLabel").innerHTML = getProduktEigenschaftAttributName("Datum1") + " bis";
    document.getElementById("Datum2_1SearchLabel").innerHTML = getProduktEigenschaftAttributName("Datum2") + " von";
    document.getElementById("Datum2_2SearchLabel").innerHTML = getProduktEigenschaftAttributName("Datum2") + " bis";
    document.getElementById("Datum3_1SearchLabel").innerHTML = getProduktEigenschaftAttributName("Datum3") + " von";
    document.getElementById("Datum3_2SearchLabel").innerHTML = getProduktEigenschaftAttributName("Datum3") + " bis";
    document.getElementById("Datum4_1SearchLabel").innerHTML = getProduktEigenschaftAttributName("Datum4") + " von";
    document.getElementById("Datum4_2SearchLabel").innerHTML = getProduktEigenschaftAttributName("Datum4") + " bis";
    document.getElementById("StatusSearchLabel").innerHTML = getProduktEigenschaftAttributName("Status");

    document.getElementById("ProduktEigenschaftString1SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString1");
    document.getElementById("ProduktEigenschaftString2SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString2");
    document.getElementById("ProduktEigenschaftString3SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString3");
    document.getElementById("ProduktEigenschaftString4SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString4");
    document.getElementById("ProduktEigenschaftString5SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString5");
    document.getElementById("ProduktEigenschaftString6SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString6");
    document.getElementById("ProduktEigenschaftString7SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString7");
    document.getElementById("ProduktEigenschaftString8SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString8");
    document.getElementById("ProduktEigenschaftString9SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString9");
    document.getElementById("ProduktEigenschaftString10SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString10");
    document.getElementById("ProduktEigenschaftString11SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString11");
    document.getElementById("ProduktEigenschaftString12SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString12");
    document.getElementById("ProduktEigenschaftString13SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString13");
    document.getElementById("ProduktEigenschaftString14SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString14");
    document.getElementById("ProduktEigenschaftString15SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString15");
    document.getElementById("ProduktEigenschaftString16SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString16");
    document.getElementById("ProduktEigenschaftString17SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString17");
    document.getElementById("ProduktEigenschaftString18SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString18");
    document.getElementById("ProduktEigenschaftString19SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString19");
    document.getElementById("ProduktEigenschaftString20SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString20");
    document.getElementById("ProduktEigenschaftString21SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString21");
    document.getElementById("ProduktEigenschaftString22SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString22");
    document.getElementById("ProduktEigenschaftString23SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString23");
    document.getElementById("ProduktEigenschaftString24SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString24");
    document.getElementById("ProduktEigenschaftString25SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString25");
    document.getElementById("ProduktEigenschaftString26SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString26");
    document.getElementById("ProduktEigenschaftString27SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString27");
    document.getElementById("ProduktEigenschaftString28SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString28");
    document.getElementById("ProduktEigenschaftString29SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString29");
    document.getElementById("ProduktEigenschaftString30SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString30");
    document.getElementById("ProduktEigenschaftString31SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString31");
    document.getElementById("ProduktEigenschaftString32SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString32");
    document.getElementById("ProduktEigenschaftString33SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString33");
    document.getElementById("ProduktEigenschaftString34SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString34");
    document.getElementById("ProduktEigenschaftString35SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString35");
    document.getElementById("ProduktEigenschaftString36SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString36");
    document.getElementById("ProduktEigenschaftString37SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString37");
    document.getElementById("ProduktEigenschaftString38SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString38");
    document.getElementById("ProduktEigenschaftString39SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString39");
    document.getElementById("ProduktEigenschaftString40SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString40");
    document.getElementById("ProduktEigenschaftString41SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString41");
    document.getElementById("ProduktEigenschaftString42SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString42");
    document.getElementById("ProduktEigenschaftString43SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString43");
    document.getElementById("ProduktEigenschaftString44SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString44");
    document.getElementById("ProduktEigenschaftString45SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString45");
    document.getElementById("ProduktEigenschaftString46SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString46");
    document.getElementById("ProduktEigenschaftString47SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString47");
    document.getElementById("ProduktEigenschaftString48SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString48");
    document.getElementById("ProduktEigenschaftString49SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString49");
    document.getElementById("ProduktEigenschaftString50SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString50");

    document.getElementById("ProduktEigenschaftInt1SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt1");
    document.getElementById("ProduktEigenschaftInt2SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt2");
    document.getElementById("ProduktEigenschaftInt3SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt3");
    document.getElementById("ProduktEigenschaftInt4SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt4");
    document.getElementById("ProduktEigenschaftInt5SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt5");
    document.getElementById("ProduktEigenschaftInt6SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt6");
    document.getElementById("ProduktEigenschaftInt7SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt7");
    document.getElementById("ProduktEigenschaftInt8SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt8");
    document.getElementById("ProduktEigenschaftInt9SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt9");
    document.getElementById("ProduktEigenschaftInt10SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt10");
    document.getElementById("ProduktEigenschaftInt11SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt11");
    document.getElementById("ProduktEigenschaftInt12SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt12");
    document.getElementById("ProduktEigenschaftInt13SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt13");
    document.getElementById("ProduktEigenschaftInt14SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt14");
    document.getElementById("ProduktEigenschaftInt15SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt15");
    document.getElementById("ProduktEigenschaftInt16SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt16");
    document.getElementById("ProduktEigenschaftInt17SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt17");
    document.getElementById("ProduktEigenschaftInt18SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt18");
    document.getElementById("ProduktEigenschaftInt19SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt19");
    document.getElementById("ProduktEigenschaftInt20SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt20");
    document.getElementById("ProduktEigenschaftInt21SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt21");
    document.getElementById("ProduktEigenschaftInt22SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt22");
    document.getElementById("ProduktEigenschaftInt23SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt23");
    document.getElementById("ProduktEigenschaftInt24SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt24");
    document.getElementById("ProduktEigenschaftInt25SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt25");
    document.getElementById("ProduktEigenschaftInt26SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt26");
    document.getElementById("ProduktEigenschaftInt27SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt27");
    document.getElementById("ProduktEigenschaftInt28SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt28");
    document.getElementById("ProduktEigenschaftInt29SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt29");
    document.getElementById("ProduktEigenschaftInt30SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt30");
    document.getElementById("ProduktEigenschaftInt31SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt31");
    document.getElementById("ProduktEigenschaftInt32SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt32");
    document.getElementById("ProduktEigenschaftInt33SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt33");
    document.getElementById("ProduktEigenschaftInt34SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt34");
    document.getElementById("ProduktEigenschaftInt35SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt35");
    document.getElementById("ProduktEigenschaftInt36SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt36");
    document.getElementById("ProduktEigenschaftInt37SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt37");
    document.getElementById("ProduktEigenschaftInt38SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt38");
    document.getElementById("ProduktEigenschaftInt39SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt39");
    document.getElementById("ProduktEigenschaftInt40SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt40");

    document.getElementById("ProduktEigenschaftFloat1SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat1");
    document.getElementById("ProduktEigenschaftFloat2SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat2");
    document.getElementById("ProduktEigenschaftFloat3SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat3");
    document.getElementById("ProduktEigenschaftFloat4SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat4");
    document.getElementById("ProduktEigenschaftFloat5SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat5");
    document.getElementById("ProduktEigenschaftFloat6SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat6");
    document.getElementById("ProduktEigenschaftFloat7SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat7");
    document.getElementById("ProduktEigenschaftFloat8SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat8");
    document.getElementById("ProduktEigenschaftFloat9SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat9");
    document.getElementById("ProduktEigenschaftFloat10SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat10");
    document.getElementById("ProduktEigenschaftFloat11SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat11");
    document.getElementById("ProduktEigenschaftFloat12SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat12");
    document.getElementById("ProduktEigenschaftFloat13SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat13");
    document.getElementById("ProduktEigenschaftFloat14SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat14");
    document.getElementById("ProduktEigenschaftFloat15SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat15");
    document.getElementById("ProduktEigenschaftFloat16SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat16");
    document.getElementById("ProduktEigenschaftFloat17SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat17");
    document.getElementById("ProduktEigenschaftFloat18SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat18");
    document.getElementById("ProduktEigenschaftFloat19SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat19");
    document.getElementById("ProduktEigenschaftFloat20SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat20");
    document.getElementById("ProduktEigenschaftFloat21SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat21");
    document.getElementById("ProduktEigenschaftFloat22SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat22");
    document.getElementById("ProduktEigenschaftFloat23SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat23");
    document.getElementById("ProduktEigenschaftFloat24SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat24");
    document.getElementById("ProduktEigenschaftFloat25SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat25");
    document.getElementById("ProduktEigenschaftFloat26SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat26");
    document.getElementById("ProduktEigenschaftFloat27SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat27");
    document.getElementById("ProduktEigenschaftFloat28SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat28");
    document.getElementById("ProduktEigenschaftFloat29SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat29");
    document.getElementById("ProduktEigenschaftFloat30SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat30");
    document.getElementById("ProduktEigenschaftFloat31SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat31");
    document.getElementById("ProduktEigenschaftFloat32SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat32");
    document.getElementById("ProduktEigenschaftFloat33SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat33");
    document.getElementById("ProduktEigenschaftFloat34SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat34");
    document.getElementById("ProduktEigenschaftFloat35SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat35");
    document.getElementById("ProduktEigenschaftFloat36SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat36");
    document.getElementById("ProduktEigenschaftFloat37SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat37");
    document.getElementById("ProduktEigenschaftFloat38SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat38");
    document.getElementById("ProduktEigenschaftFloat39SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat39");
    document.getElementById("ProduktEigenschaftFloat40SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat40");

    document.getElementById("ProduktEigenschaftBIT1SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT1");
    document.getElementById("ProduktEigenschaftBIT2SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT2");
    document.getElementById("ProduktEigenschaftBIT3SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT3");
    document.getElementById("ProduktEigenschaftBIT4SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT4");
    document.getElementById("ProduktEigenschaftBIT5SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT5");
    document.getElementById("ProduktEigenschaftBIT6SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT6");
    document.getElementById("ProduktEigenschaftBIT7SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT7");
    document.getElementById("ProduktEigenschaftBIT8SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT8");
    document.getElementById("ProduktEigenschaftBIT9SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT9");
    document.getElementById("ProduktEigenschaftBIT10SearchLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT10");

    document.getElementById("prIDXModalLabel").innerHTML = getProduktEigenschaftAttributName("prIDX");
    document.getElementById("frIDXModalLabel").innerHTML = getProduktEigenschaftAttributName("frIDX");
    document.getElementById("Datum1ModalLabel").innerHTML = getProduktEigenschaftAttributName("Datum1");
    document.getElementById("Datum2ModalLabel").innerHTML = getProduktEigenschaftAttributName("Datum2");
    document.getElementById("Datum3ModalLabel").innerHTML = getProduktEigenschaftAttributName("Datum3");
    document.getElementById("Datum4ModalLabel").innerHTML = getProduktEigenschaftAttributName("Datum4");
    document.getElementById("StatusModalLabel").innerHTML = getProduktEigenschaftAttributName("Status");

    document.getElementById("ProduktEigenschaftString1ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString1");
    document.getElementById("ProduktEigenschaftString2ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString2");
    document.getElementById("ProduktEigenschaftString3ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString3");
    document.getElementById("ProduktEigenschaftString4ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString4");
    document.getElementById("ProduktEigenschaftString5ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString5");
    document.getElementById("ProduktEigenschaftString6ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString6");
    document.getElementById("ProduktEigenschaftString7ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString7");
    document.getElementById("ProduktEigenschaftString8ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString8");
    document.getElementById("ProduktEigenschaftString9ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString9");
    document.getElementById("ProduktEigenschaftString10ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString10");
    document.getElementById("ProduktEigenschaftString11ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString11");
    document.getElementById("ProduktEigenschaftString12ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString12");
    document.getElementById("ProduktEigenschaftString13ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString13");
    document.getElementById("ProduktEigenschaftString14ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString14");
    document.getElementById("ProduktEigenschaftString15ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString15");
    document.getElementById("ProduktEigenschaftString16ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString16");
    document.getElementById("ProduktEigenschaftString17ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString17");
    document.getElementById("ProduktEigenschaftString18ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString18");
    document.getElementById("ProduktEigenschaftString19ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString19");
    document.getElementById("ProduktEigenschaftString20ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString20");
    document.getElementById("ProduktEigenschaftString21ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString21");
    document.getElementById("ProduktEigenschaftString22ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString22");
    document.getElementById("ProduktEigenschaftString23ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString23");
    document.getElementById("ProduktEigenschaftString24ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString24");
    document.getElementById("ProduktEigenschaftString25ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString25");
    document.getElementById("ProduktEigenschaftString26ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString26");
    document.getElementById("ProduktEigenschaftString27ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString27");
    document.getElementById("ProduktEigenschaftString28ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString28");
    document.getElementById("ProduktEigenschaftString29ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString29");
    document.getElementById("ProduktEigenschaftString30ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString30");
    document.getElementById("ProduktEigenschaftString31ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString31");
    document.getElementById("ProduktEigenschaftString32ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString32");
    document.getElementById("ProduktEigenschaftString33ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString33");
    document.getElementById("ProduktEigenschaftString34ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString34");
    document.getElementById("ProduktEigenschaftString35ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString35");
    document.getElementById("ProduktEigenschaftString36ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString36");
    document.getElementById("ProduktEigenschaftString37ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString37");
    document.getElementById("ProduktEigenschaftString38ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString38");
    document.getElementById("ProduktEigenschaftString39ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString39");
    document.getElementById("ProduktEigenschaftString40ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString40");
    document.getElementById("ProduktEigenschaftString41ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString41");
    document.getElementById("ProduktEigenschaftString42ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString42");
    document.getElementById("ProduktEigenschaftString43ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString43");
    document.getElementById("ProduktEigenschaftString44ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString44");
    document.getElementById("ProduktEigenschaftString45ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString45");
    document.getElementById("ProduktEigenschaftString46ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString46");
    document.getElementById("ProduktEigenschaftString47ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString47");
    document.getElementById("ProduktEigenschaftString48ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString48");
    document.getElementById("ProduktEigenschaftString49ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString49");
    document.getElementById("ProduktEigenschaftString50ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString50");

    document.getElementById("ProduktEigenschaftInt1ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt1");
    document.getElementById("ProduktEigenschaftInt2ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt2");
    document.getElementById("ProduktEigenschaftInt3ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt3");
    document.getElementById("ProduktEigenschaftInt4ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt4");
    document.getElementById("ProduktEigenschaftInt5ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt5");
    document.getElementById("ProduktEigenschaftInt6ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt6");
    document.getElementById("ProduktEigenschaftInt7ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt7");
    document.getElementById("ProduktEigenschaftInt8ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt8");
    document.getElementById("ProduktEigenschaftInt9ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt9");
    document.getElementById("ProduktEigenschaftInt10ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt10");
    document.getElementById("ProduktEigenschaftInt11ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt11");
    document.getElementById("ProduktEigenschaftInt12ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt12");
    document.getElementById("ProduktEigenschaftInt13ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt13");
    document.getElementById("ProduktEigenschaftInt14ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt14");
    document.getElementById("ProduktEigenschaftInt15ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt15");
    document.getElementById("ProduktEigenschaftInt16ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt16");
    document.getElementById("ProduktEigenschaftInt17ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt17");
    document.getElementById("ProduktEigenschaftInt18ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt18");
    document.getElementById("ProduktEigenschaftInt19ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt19");
    document.getElementById("ProduktEigenschaftInt20ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt20");
    document.getElementById("ProduktEigenschaftInt21ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt21");
    document.getElementById("ProduktEigenschaftInt22ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt22");
    document.getElementById("ProduktEigenschaftInt23ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt23");
    document.getElementById("ProduktEigenschaftInt24ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt24");
    document.getElementById("ProduktEigenschaftInt25ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt25");
    document.getElementById("ProduktEigenschaftInt26ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt26");
    document.getElementById("ProduktEigenschaftInt27ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt27");
    document.getElementById("ProduktEigenschaftInt28ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt28");
    document.getElementById("ProduktEigenschaftInt29ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt29");
    document.getElementById("ProduktEigenschaftInt30ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt30");
    document.getElementById("ProduktEigenschaftInt31ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt31");
    document.getElementById("ProduktEigenschaftInt32ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt32");
    document.getElementById("ProduktEigenschaftInt33ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt33");
    document.getElementById("ProduktEigenschaftInt34ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt34");
    document.getElementById("ProduktEigenschaftInt35ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt35");
    document.getElementById("ProduktEigenschaftInt36ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt36");
    document.getElementById("ProduktEigenschaftInt37ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt37");
    document.getElementById("ProduktEigenschaftInt38ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt38");
    document.getElementById("ProduktEigenschaftInt39ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt39");
    document.getElementById("ProduktEigenschaftInt40ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftInt40");

    document.getElementById("ProduktEigenschaftFloat1ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat1");
    document.getElementById("ProduktEigenschaftFloat2ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat2");
    document.getElementById("ProduktEigenschaftFloat3ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat3");
    document.getElementById("ProduktEigenschaftFloat4ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat4");
    document.getElementById("ProduktEigenschaftFloat5ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat5");
    document.getElementById("ProduktEigenschaftFloat6ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat6");
    document.getElementById("ProduktEigenschaftFloat7ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat7");
    document.getElementById("ProduktEigenschaftFloat8ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat8");
    document.getElementById("ProduktEigenschaftFloat9ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat9");
    document.getElementById("ProduktEigenschaftFloat10ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat10");
    document.getElementById("ProduktEigenschaftFloat11ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat11");
    document.getElementById("ProduktEigenschaftFloat12ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat12");
    document.getElementById("ProduktEigenschaftFloat13ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat13");
    document.getElementById("ProduktEigenschaftFloat14ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat14");
    document.getElementById("ProduktEigenschaftFloat15ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat15");
    document.getElementById("ProduktEigenschaftFloat16ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat16");
    document.getElementById("ProduktEigenschaftFloat17ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat17");
    document.getElementById("ProduktEigenschaftFloat18ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat18");
    document.getElementById("ProduktEigenschaftFloat19ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat19");
    document.getElementById("ProduktEigenschaftFloat20ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat20");
    document.getElementById("ProduktEigenschaftFloat21ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat21");
    document.getElementById("ProduktEigenschaftFloat22ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat22");
    document.getElementById("ProduktEigenschaftFloat23ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat23");
    document.getElementById("ProduktEigenschaftFloat24ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat24");
    document.getElementById("ProduktEigenschaftFloat25ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat25");
    document.getElementById("ProduktEigenschaftFloat26ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat26");
    document.getElementById("ProduktEigenschaftFloat27ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat27");
    document.getElementById("ProduktEigenschaftFloat28ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat28");
    document.getElementById("ProduktEigenschaftFloat29ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat29");
    document.getElementById("ProduktEigenschaftFloat30ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat30");
    document.getElementById("ProduktEigenschaftFloat31ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat31");
    document.getElementById("ProduktEigenschaftFloat32ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat32");
    document.getElementById("ProduktEigenschaftFloat33ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat33");
    document.getElementById("ProduktEigenschaftFloat34ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat34");
    document.getElementById("ProduktEigenschaftFloat35ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat35");
    document.getElementById("ProduktEigenschaftFloat36ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat36");
    document.getElementById("ProduktEigenschaftFloat37ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat37");
    document.getElementById("ProduktEigenschaftFloat38ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat38");
    document.getElementById("ProduktEigenschaftFloat39ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat39");
    document.getElementById("ProduktEigenschaftFloat40ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftFloat40");

    document.getElementById("ProduktEigenschaftBIT1ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT1");
    document.getElementById("ProduktEigenschaftBIT2ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT2");
    document.getElementById("ProduktEigenschaftBIT3ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT3");
    document.getElementById("ProduktEigenschaftBIT4ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT4");
    document.getElementById("ProduktEigenschaftBIT5ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT5");
    document.getElementById("ProduktEigenschaftBIT6ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT6");
    document.getElementById("ProduktEigenschaftBIT7ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT7");
    document.getElementById("ProduktEigenschaftBIT8ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT8");
    document.getElementById("ProduktEigenschaftBIT9ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT9");
    document.getElementById("ProduktEigenschaftBIT10ModalLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftBIT10");

    document.getElementById("ProduktEigenschaftString1NewLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString1");
    document.getElementById("ProduktEigenschaftString2NewLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString2");
	document.getElementById("ProduktEigenschaftString3NewLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString3");
	document.getElementById("ProduktEigenschaftString4NewLabel").innerHTML = getProduktEigenschaftAttributName("ProduktEigenschaftString4");

    hideLoadingDiv();
    searchProduktEigenschaft();
}

function searchProduktEigenschaft() {
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
    var ProduktEigenschaftString1 = ""
      , ProduktEigenschaftString2 = ""
      , ProduktEigenschaftString3 = ""
      , ProduktEigenschaftString4 = ""
      , ProduktEigenschaftString5 = ""
      , ProduktEigenschaftString6 = ""
      , ProduktEigenschaftString7 = ""
      , ProduktEigenschaftString8 = ""
      , ProduktEigenschaftString9 = ""
      , ProduktEigenschaftString10 = ""
      , ProduktEigenschaftString11 = ""
      , ProduktEigenschaftString12 = ""
      , ProduktEigenschaftString13 = ""
      , ProduktEigenschaftString14 = ""
      , ProduktEigenschaftString15 = ""
      , ProduktEigenschaftString16 = ""
      , ProduktEigenschaftString17 = ""
      , ProduktEigenschaftString18 = ""
      , ProduktEigenschaftString19 = ""
      , ProduktEigenschaftString20 = ""
      , ProduktEigenschaftString21 = ""
      , ProduktEigenschaftString22 = ""
      , ProduktEigenschaftString23 = ""
      , ProduktEigenschaftString24 = ""
      , ProduktEigenschaftString25 = ""
      , ProduktEigenschaftString26 = ""
      , ProduktEigenschaftString27 = ""
      , ProduktEigenschaftString28 = ""
      , ProduktEigenschaftString29 = ""
      , ProduktEigenschaftString30 = ""
      , ProduktEigenschaftString31 = ""
      , ProduktEigenschaftString32 = ""
      , ProduktEigenschaftString33 = ""
      , ProduktEigenschaftString34 = ""
      , ProduktEigenschaftString35 = ""
      , ProduktEigenschaftString36 = ""
      , ProduktEigenschaftString37 = ""
      , ProduktEigenschaftString38 = ""
      , ProduktEigenschaftString39 = ""
      , ProduktEigenschaftString40 = ""
      , ProduktEigenschaftString41 = ""
      , ProduktEigenschaftString42 = ""
      , ProduktEigenschaftString43 = ""
      , ProduktEigenschaftString44 = ""
      , ProduktEigenschaftString45 = ""
      , ProduktEigenschaftString46 = ""
      , ProduktEigenschaftString47 = ""
      , ProduktEigenschaftString48 = ""
      , ProduktEigenschaftString49 = ""
      , ProduktEigenschaftString50 = ""
      , ProduktEigenschaftInt1 = 0
      , ProduktEigenschaftInt2 = 0
      , ProduktEigenschaftInt3 = 0
      , ProduktEigenschaftInt4 = 0
      , ProduktEigenschaftInt5 = 0
      , ProduktEigenschaftInt6 = 0
      , ProduktEigenschaftInt7 = 0
      , ProduktEigenschaftInt8 = 0
      , ProduktEigenschaftInt9 = 0
      , ProduktEigenschaftInt10 = 0
      , ProduktEigenschaftInt11 = 0
      , ProduktEigenschaftInt12 = 0
      , ProduktEigenschaftInt13 = 0
      , ProduktEigenschaftInt14 = 0
      , ProduktEigenschaftInt15 = 0
      , ProduktEigenschaftInt16 = 0
      , ProduktEigenschaftInt17 = 0
      , ProduktEigenschaftInt18 = 0
      , ProduktEigenschaftInt19 = 0
      , ProduktEigenschaftInt20 = 0
      , ProduktEigenschaftInt21 = 0
      , ProduktEigenschaftInt22 = 0
      , ProduktEigenschaftInt23 = 0
      , ProduktEigenschaftInt24 = 0
      , ProduktEigenschaftInt25 = 0
      , ProduktEigenschaftInt26 = 0
      , ProduktEigenschaftInt27 = 0
      , ProduktEigenschaftInt28 = 0
      , ProduktEigenschaftInt29 = 0
      , ProduktEigenschaftInt30 = 0
      , ProduktEigenschaftInt31 = 0
      , ProduktEigenschaftInt32 = 0
      , ProduktEigenschaftInt33 = 0
      , ProduktEigenschaftInt34 = 0
      , ProduktEigenschaftInt35 = 0
      , ProduktEigenschaftInt36 = 0
      , ProduktEigenschaftInt37 = 0
      , ProduktEigenschaftInt38 = 0
      , ProduktEigenschaftInt39 = 0
      , ProduktEigenschaftInt40 = 0
      , ProduktEigenschaftFloat1 = 0
      , ProduktEigenschaftFloat2 = 0
      , ProduktEigenschaftFloat3 = 0
      , ProduktEigenschaftFloat4 = 0
      , ProduktEigenschaftFloat5 = 0
      , ProduktEigenschaftFloat6 = 0
      , ProduktEigenschaftFloat7 = 0
      , ProduktEigenschaftFloat8 = 0
      , ProduktEigenschaftFloat9 = 0
      , ProduktEigenschaftFloat10 = 0
      , ProduktEigenschaftFloat11 = 0
      , ProduktEigenschaftFloat12 = 0
      , ProduktEigenschaftFloat13 = 0
      , ProduktEigenschaftFloat14 = 0
      , ProduktEigenschaftFloat15 = 0
      , ProduktEigenschaftFloat16 = 0
      , ProduktEigenschaftFloat17 = 0
      , ProduktEigenschaftFloat18 = 0
      , ProduktEigenschaftFloat19 = 0
      , ProduktEigenschaftFloat20 = 0
      , ProduktEigenschaftFloat21 = 0
      , ProduktEigenschaftFloat22 = 0
      , ProduktEigenschaftFloat23 = 0
      , ProduktEigenschaftFloat24 = 0
      , ProduktEigenschaftFloat25 = 0
      , ProduktEigenschaftFloat26 = 0
      , ProduktEigenschaftFloat27 = 0
      , ProduktEigenschaftFloat28 = 0
      , ProduktEigenschaftFloat29 = 0
      , ProduktEigenschaftFloat30 = 0
      , ProduktEigenschaftFloat31 = 0
      , ProduktEigenschaftFloat32 = 0
      , ProduktEigenschaftFloat33 = 0
      , ProduktEigenschaftFloat34 = 0
      , ProduktEigenschaftFloat35 = 0
      , ProduktEigenschaftFloat36 = 0
      , ProduktEigenschaftFloat37 = 0
      , ProduktEigenschaftFloat38 = 0
      , ProduktEigenschaftFloat39 = 0
      , ProduktEigenschaftFloat40 = 0
      , ProduktEigenschaftBIT1 = 0
      , ProduktEigenschaftBIT2 = 0
      , ProduktEigenschaftBIT3 = 0
      , ProduktEigenschaftBIT4 = 0
      , ProduktEigenschaftBIT5 = 0
      , ProduktEigenschaftBIT6 = 0
      , ProduktEigenschaftBIT7 = 0
      , ProduktEigenschaftBIT8 = 0
      , ProduktEigenschaftBIT9 = 0
      , ProduktEigenschaftBIT10 = 0;

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

    ProduktEigenschaftString1 = escape(escape(document.getElementById("ProduktEigenschaftString1Search").value));
    ProduktEigenschaftString2 = escape(escape(document.getElementById("ProduktEigenschaftString2Search").value));
    ProduktEigenschaftString3 = escape(escape(document.getElementById("ProduktEigenschaftString3Search").value));
    ProduktEigenschaftString4 = escape(escape(document.getElementById("ProduktEigenschaftString4Search").value));
    ProduktEigenschaftString5 = escape(escape(document.getElementById("ProduktEigenschaftString5Search").value));
    ProduktEigenschaftString6 = escape(escape(document.getElementById("ProduktEigenschaftString6Search").value));
    ProduktEigenschaftString7 = escape(escape(document.getElementById("ProduktEigenschaftString7Search").value));
    ProduktEigenschaftString8 = escape(escape(document.getElementById("ProduktEigenschaftString8Search").value));
    ProduktEigenschaftString9 = escape(escape(document.getElementById("ProduktEigenschaftString9Search").value));
    ProduktEigenschaftString10 = escape(escape(document.getElementById("ProduktEigenschaftString10Search").value));
    ProduktEigenschaftString11 = escape(escape(document.getElementById("ProduktEigenschaftString11Search").value));
    ProduktEigenschaftString12 = escape(escape(document.getElementById("ProduktEigenschaftString12Search").value));
    ProduktEigenschaftString13 = escape(escape(document.getElementById("ProduktEigenschaftString13Search").value));
    ProduktEigenschaftString14 = escape(escape(document.getElementById("ProduktEigenschaftString14Search").value));
    ProduktEigenschaftString15 = escape(escape(document.getElementById("ProduktEigenschaftString15Search").value));
    ProduktEigenschaftString16 = escape(escape(document.getElementById("ProduktEigenschaftString16Search").value));
    ProduktEigenschaftString17 = escape(escape(document.getElementById("ProduktEigenschaftString17Search").value));
    ProduktEigenschaftString18 = escape(escape(document.getElementById("ProduktEigenschaftString18Search").value));
    ProduktEigenschaftString19 = escape(escape(document.getElementById("ProduktEigenschaftString19Search").value));
    ProduktEigenschaftString20 = escape(escape(document.getElementById("ProduktEigenschaftString20Search").value));
    ProduktEigenschaftString21 = escape(escape(document.getElementById("ProduktEigenschaftString21Search").value));
    ProduktEigenschaftString22 = escape(escape(document.getElementById("ProduktEigenschaftString22Search").value));
    ProduktEigenschaftString23 = escape(escape(document.getElementById("ProduktEigenschaftString23Search").value));
    ProduktEigenschaftString24 = escape(escape(document.getElementById("ProduktEigenschaftString24Search").value));
    ProduktEigenschaftString25 = escape(escape(document.getElementById("ProduktEigenschaftString25Search").value));
    ProduktEigenschaftString26 = escape(escape(document.getElementById("ProduktEigenschaftString26Search").value));
    ProduktEigenschaftString27 = escape(escape(document.getElementById("ProduktEigenschaftString27Search").value));
    ProduktEigenschaftString28 = escape(escape(document.getElementById("ProduktEigenschaftString28Search").value));
    ProduktEigenschaftString29 = escape(escape(document.getElementById("ProduktEigenschaftString29Search").value));
    ProduktEigenschaftString30 = escape(escape(document.getElementById("ProduktEigenschaftString30Search").value));
    ProduktEigenschaftString31 = escape(escape(document.getElementById("ProduktEigenschaftString31Search").value));
    ProduktEigenschaftString32 = escape(escape(document.getElementById("ProduktEigenschaftString32Search").value));
    ProduktEigenschaftString33 = escape(escape(document.getElementById("ProduktEigenschaftString33Search").value));
    ProduktEigenschaftString34 = escape(escape(document.getElementById("ProduktEigenschaftString34Search").value));
    ProduktEigenschaftString35 = escape(escape(document.getElementById("ProduktEigenschaftString35Search").value));
    ProduktEigenschaftString36 = escape(escape(document.getElementById("ProduktEigenschaftString36Search").value));
    ProduktEigenschaftString37 = escape(escape(document.getElementById("ProduktEigenschaftString37Search").value));
    ProduktEigenschaftString38 = escape(escape(document.getElementById("ProduktEigenschaftString38Search").value));
    ProduktEigenschaftString39 = escape(escape(document.getElementById("ProduktEigenschaftString39Search").value));
    ProduktEigenschaftString40 = escape(escape(document.getElementById("ProduktEigenschaftString40Search").value));
    ProduktEigenschaftString41 = escape(escape(document.getElementById("ProduktEigenschaftString41Search").value));
    ProduktEigenschaftString42 = escape(escape(document.getElementById("ProduktEigenschaftString42Search").value));
    ProduktEigenschaftString43 = escape(escape(document.getElementById("ProduktEigenschaftString43Search").value));
    ProduktEigenschaftString44 = escape(escape(document.getElementById("ProduktEigenschaftString44Search").value));
    ProduktEigenschaftString45 = escape(escape(document.getElementById("ProduktEigenschaftString45Search").value));
    ProduktEigenschaftString46 = escape(escape(document.getElementById("ProduktEigenschaftString46Search").value));
    ProduktEigenschaftString47 = escape(escape(document.getElementById("ProduktEigenschaftString47Search").value));
    ProduktEigenschaftString48 = escape(escape(document.getElementById("ProduktEigenschaftString48Search").value));
    ProduktEigenschaftString49 = escape(escape(document.getElementById("ProduktEigenschaftString49Search").value));
    ProduktEigenschaftString50 = escape(escape(document.getElementById("ProduktEigenschaftString50Search").value));

    if (document.getElementById("ProduktEigenschaftInt1Search").value != "")
        ProduktEigenschaftInt1 = parseInt(document.getElementById("ProduktEigenschaftInt1Search").value);
    if (document.getElementById("ProduktEigenschaftInt2Search").value != "")
        ProduktEigenschaftInt2 = parseInt(document.getElementById("ProduktEigenschaftInt2Search").value);
    if (document.getElementById("ProduktEigenschaftInt3Search").value != "")
        ProduktEigenschaftInt3 = parseInt(document.getElementById("ProduktEigenschaftInt3Search").value);
    if (document.getElementById("ProduktEigenschaftInt4Search").value != "")
        ProduktEigenschaftInt4 = parseInt(document.getElementById("ProduktEigenschaftInt4Search").value);
    if (document.getElementById("ProduktEigenschaftInt5Search").value != "")
        ProduktEigenschaftInt5 = parseInt(document.getElementById("ProduktEigenschaftInt5Search").value);
    if (document.getElementById("ProduktEigenschaftInt6Search").value != "")
        ProduktEigenschaftInt6 = parseInt(document.getElementById("ProduktEigenschaftInt6Search").value);
    if (document.getElementById("ProduktEigenschaftInt7Search").value != "")
        ProduktEigenschaftInt7 = parseInt(document.getElementById("ProduktEigenschaftInt7Search").value);
    if (document.getElementById("ProduktEigenschaftInt8Search").value != "")
        ProduktEigenschaftInt8 = parseInt(document.getElementById("ProduktEigenschaftInt8Search").value);
    if (document.getElementById("ProduktEigenschaftInt9Search").value != "")
        ProduktEigenschaftInt9 = parseInt(document.getElementById("ProduktEigenschaftInt9Search").value);
    if (document.getElementById("ProduktEigenschaftInt10Search").value != "")
        ProduktEigenschaftInt10 = parseInt(document.getElementById("ProduktEigenschaftInt10Search").value);
    if (document.getElementById("ProduktEigenschaftInt11Search").value != "")
        ProduktEigenschaftInt11 = parseInt(document.getElementById("ProduktEigenschaftInt11Search").value);
    if (document.getElementById("ProduktEigenschaftInt12Search").value != "")
        ProduktEigenschaftInt12 = parseInt(document.getElementById("ProduktEigenschaftInt12Search").value);
    if (document.getElementById("ProduktEigenschaftInt13Search").value != "")
        ProduktEigenschaftInt13 = parseInt(document.getElementById("ProduktEigenschaftInt13Search").value);
    if (document.getElementById("ProduktEigenschaftInt14Search").value != "")
        ProduktEigenschaftInt14 = parseInt(document.getElementById("ProduktEigenschaftInt14Search").value);
    if (document.getElementById("ProduktEigenschaftInt15Search").value != "")
        ProduktEigenschaftInt15 = parseInt(document.getElementById("ProduktEigenschaftInt15Search").value);
    if (document.getElementById("ProduktEigenschaftInt16Search").value != "")
        ProduktEigenschaftInt16 = parseInt(document.getElementById("ProduktEigenschaftInt16Search").value);
    if (document.getElementById("ProduktEigenschaftInt17Search").value != "")
        ProduktEigenschaftInt17 = parseInt(document.getElementById("ProduktEigenschaftInt17Search").value);
    if (document.getElementById("ProduktEigenschaftInt18Search").value != "")
        ProduktEigenschaftInt18 = parseInt(document.getElementById("ProduktEigenschaftInt18Search").value);
    if (document.getElementById("ProduktEigenschaftInt19Search").value != "")
        ProduktEigenschaftInt19 = parseInt(document.getElementById("ProduktEigenschaftInt19Search").value);
    if (document.getElementById("ProduktEigenschaftInt20Search").value != "")
        ProduktEigenschaftInt20 = parseInt(document.getElementById("ProduktEigenschaftInt20Search").value);
    if (document.getElementById("ProduktEigenschaftInt21Search").value != "")
        ProduktEigenschaftInt21 = parseInt(document.getElementById("ProduktEigenschaftInt21Search").value);
    if (document.getElementById("ProduktEigenschaftInt22Search").value != "")
        ProduktEigenschaftInt22 = parseInt(document.getElementById("ProduktEigenschaftInt22Search").value);
    if (document.getElementById("ProduktEigenschaftInt23Search").value != "")
        ProduktEigenschaftInt23 = parseInt(document.getElementById("ProduktEigenschaftInt23Search").value);
    if (document.getElementById("ProduktEigenschaftInt24Search").value != "")
        ProduktEigenschaftInt24 = parseInt(document.getElementById("ProduktEigenschaftInt24Search").value);
    if (document.getElementById("ProduktEigenschaftInt25Search").value != "")
        ProduktEigenschaftInt25 = parseInt(document.getElementById("ProduktEigenschaftInt25Search").value);
    if (document.getElementById("ProduktEigenschaftInt26Search").value != "")
        ProduktEigenschaftInt26 = parseInt(document.getElementById("ProduktEigenschaftInt26Search").value);
    if (document.getElementById("ProduktEigenschaftInt27Search").value != "")
        ProduktEigenschaftInt27 = parseInt(document.getElementById("ProduktEigenschaftInt27Search").value);
    if (document.getElementById("ProduktEigenschaftInt28Search").value != "")
        ProduktEigenschaftInt28 = parseInt(document.getElementById("ProduktEigenschaftInt28Search").value);
    if (document.getElementById("ProduktEigenschaftInt29Search").value != "")
        ProduktEigenschaftInt29 = parseInt(document.getElementById("ProduktEigenschaftInt29Search").value);
    if (document.getElementById("ProduktEigenschaftInt30Search").value != "")
        ProduktEigenschaftInt30 = parseInt(document.getElementById("ProduktEigenschaftInt30Search").value);
    if (document.getElementById("ProduktEigenschaftInt31Search").value != "")
        ProduktEigenschaftInt31 = parseInt(document.getElementById("ProduktEigenschaftInt31Search").value);
    if (document.getElementById("ProduktEigenschaftInt32Search").value != "")
        ProduktEigenschaftInt32 = parseInt(document.getElementById("ProduktEigenschaftInt32Search").value);
    if (document.getElementById("ProduktEigenschaftInt33Search").value != "")
        ProduktEigenschaftInt33 = parseInt(document.getElementById("ProduktEigenschaftInt33Search").value);
    if (document.getElementById("ProduktEigenschaftInt34Search").value != "")
        ProduktEigenschaftInt34 = parseInt(document.getElementById("ProduktEigenschaftInt34Search").value);
    if (document.getElementById("ProduktEigenschaftInt35Search").value != "")
        ProduktEigenschaftInt35 = parseInt(document.getElementById("ProduktEigenschaftInt35Search").value);
    if (document.getElementById("ProduktEigenschaftInt36Search").value != "")
        ProduktEigenschaftInt36 = parseInt(document.getElementById("ProduktEigenschaftInt36Search").value);
    if (document.getElementById("ProduktEigenschaftInt37Search").value != "")
        ProduktEigenschaftInt37 = parseInt(document.getElementById("ProduktEigenschaftInt37Search").value);
    if (document.getElementById("ProduktEigenschaftInt38Search").value != "")
        ProduktEigenschaftInt38 = parseInt(document.getElementById("ProduktEigenschaftInt38Search").value);
    if (document.getElementById("ProduktEigenschaftInt39Search").value != "")
        ProduktEigenschaftInt39 = parseInt(document.getElementById("ProduktEigenschaftInt39Search").value);
    if (document.getElementById("ProduktEigenschaftInt40Search").value != "")
        ProduktEigenschaftInt40 = parseInt(document.getElementById("ProduktEigenschaftInt40Search").value);

    if (document.getElementById("ProduktEigenschaftFloat1Search").value != "")
        ProduktEigenschaftFloat1 = parseFloat(document.getElementById("ProduktEigenschaftFloat1Search").value);
    if (document.getElementById("ProduktEigenschaftFloat2Search").value != "")
        ProduktEigenschaftFloat2 = parseFloat(document.getElementById("ProduktEigenschaftFloat2Search").value);
    if (document.getElementById("ProduktEigenschaftFloat3Search").value != "")
        ProduktEigenschaftFloat3 = parseFloat(document.getElementById("ProduktEigenschaftFloat3Search").value);
    if (document.getElementById("ProduktEigenschaftFloat4Search").value != "")
        ProduktEigenschaftFloat4 = parseFloat(document.getElementById("ProduktEigenschaftFloat4Search").value);
    if (document.getElementById("ProduktEigenschaftFloat5Search").value != "")
        ProduktEigenschaftFloat5 = parseFloat(document.getElementById("ProduktEigenschaftFloat5Search").value);
    if (document.getElementById("ProduktEigenschaftFloat6Search").value != "")
        ProduktEigenschaftFloat6 = parseFloat(document.getElementById("ProduktEigenschaftFloat6Search").value);
    if (document.getElementById("ProduktEigenschaftFloat7Search").value != "")
        ProduktEigenschaftFloat7 = parseFloat(document.getElementById("ProduktEigenschaftFloat7Search").value);
    if (document.getElementById("ProduktEigenschaftFloat8Search").value != "")
        ProduktEigenschaftFloat8 = parseFloat(document.getElementById("ProduktEigenschaftFloat8Search").value);
    if (document.getElementById("ProduktEigenschaftFloat9Search").value != "")
        ProduktEigenschaftFloat9 = parseFloat(document.getElementById("ProduktEigenschaftFloat9Search").value);
    if (document.getElementById("ProduktEigenschaftFloat10Search").value != "")
        ProduktEigenschaftFloat10 = parseFloat(document.getElementById("ProduktEigenschaftFloat10Search").value);
    if (document.getElementById("ProduktEigenschaftFloat11Search").value != "")
        ProduktEigenschaftFloat11 = parseFloat(document.getElementById("ProduktEigenschaftFloat11Search").value);
    if (document.getElementById("ProduktEigenschaftFloat12Search").value != "")
        ProduktEigenschaftFloat12 = parseFloat(document.getElementById("ProduktEigenschaftFloat12Search").value);
    if (document.getElementById("ProduktEigenschaftFloat13Search").value != "")
        ProduktEigenschaftFloat13 = parseFloat(document.getElementById("ProduktEigenschaftFloat13Search").value);
    if (document.getElementById("ProduktEigenschaftFloat14Search").value != "")
        ProduktEigenschaftFloat14 = parseFloat(document.getElementById("ProduktEigenschaftFloat14Search").value);
    if (document.getElementById("ProduktEigenschaftFloat15Search").value != "")
        ProduktEigenschaftFloat15 = parseFloat(document.getElementById("ProduktEigenschaftFloat15Search").value);
    if (document.getElementById("ProduktEigenschaftFloat16Search").value != "")
        ProduktEigenschaftFloat16 = parseFloat(document.getElementById("ProduktEigenschaftFloat16Search").value);
    if (document.getElementById("ProduktEigenschaftFloat17Search").value != "")
        ProduktEigenschaftFloat17 = parseFloat(document.getElementById("ProduktEigenschaftFloat17Search").value);
    if (document.getElementById("ProduktEigenschaftFloat18Search").value != "")
        ProduktEigenschaftFloat18 = parseFloat(document.getElementById("ProduktEigenschaftFloat18Search").value);
    if (document.getElementById("ProduktEigenschaftFloat19Search").value != "")
        ProduktEigenschaftFloat19 = parseFloat(document.getElementById("ProduktEigenschaftFloat19Search").value);
    if (document.getElementById("ProduktEigenschaftFloat20Search").value != "")
        ProduktEigenschaftFloat20 = parseFloat(document.getElementById("ProduktEigenschaftFloat20Search").value);
    if (document.getElementById("ProduktEigenschaftFloat21Search").value != "")
        ProduktEigenschaftFloat21 = parseFloat(document.getElementById("ProduktEigenschaftFloat21Search").value);
    if (document.getElementById("ProduktEigenschaftFloat22Search").value != "")
        ProduktEigenschaftFloat22 = parseFloat(document.getElementById("ProduktEigenschaftFloat22Search").value);
    if (document.getElementById("ProduktEigenschaftFloat23Search").value != "")
        ProduktEigenschaftFloat23 = parseFloat(document.getElementById("ProduktEigenschaftFloat23Search").value);
    if (document.getElementById("ProduktEigenschaftFloat24Search").value != "")
        ProduktEigenschaftFloat24 = parseFloat(document.getElementById("ProduktEigenschaftFloat24Search").value);
    if (document.getElementById("ProduktEigenschaftFloat25Search").value != "")
        ProduktEigenschaftFloat25 = parseFloat(document.getElementById("ProduktEigenschaftFloat25Search").value);
    if (document.getElementById("ProduktEigenschaftFloat26Search").value != "")
        ProduktEigenschaftFloat26 = parseFloat(document.getElementById("ProduktEigenschaftFloat26Search").value);
    if (document.getElementById("ProduktEigenschaftFloat27Search").value != "")
        ProduktEigenschaftFloat27 = parseFloat(document.getElementById("ProduktEigenschaftFloat27Search").value);
    if (document.getElementById("ProduktEigenschaftFloat28Search").value != "")
        ProduktEigenschaftFloat28 = parseFloat(document.getElementById("ProduktEigenschaftFloat28Search").value);
    if (document.getElementById("ProduktEigenschaftFloat29Search").value != "")
        ProduktEigenschaftFloat29 = parseFloat(document.getElementById("ProduktEigenschaftFloat29Search").value);
    if (document.getElementById("ProduktEigenschaftFloat30Search").value != "")
        ProduktEigenschaftFloat30 = parseFloat(document.getElementById("ProduktEigenschaftFloat30Search").value);
    if (document.getElementById("ProduktEigenschaftFloat31Search").value != "")
        ProduktEigenschaftFloat31 = parseFloat(document.getElementById("ProduktEigenschaftFloat31Search").value);
    if (document.getElementById("ProduktEigenschaftFloat32Search").value != "")
        ProduktEigenschaftFloat32 = parseFloat(document.getElementById("ProduktEigenschaftFloat32Search").value);
    if (document.getElementById("ProduktEigenschaftFloat33Search").value != "")
        ProduktEigenschaftFloat33 = parseFloat(document.getElementById("ProduktEigenschaftFloat33Search").value);
    if (document.getElementById("ProduktEigenschaftFloat34Search").value != "")
        ProduktEigenschaftFloat34 = parseFloat(document.getElementById("ProduktEigenschaftFloat34Search").value);
    if (document.getElementById("ProduktEigenschaftFloat35Search").value != "")
        ProduktEigenschaftFloat35 = parseFloat(document.getElementById("ProduktEigenschaftFloat35Search").value);
    if (document.getElementById("ProduktEigenschaftFloat36Search").value != "")
        ProduktEigenschaftFloat36 = parseFloat(document.getElementById("ProduktEigenschaftFloat36Search").value);
    if (document.getElementById("ProduktEigenschaftFloat37Search").value != "")
        ProduktEigenschaftFloat37 = parseFloat(document.getElementById("ProduktEigenschaftFloat37Search").value);
    if (document.getElementById("ProduktEigenschaftFloat38Search").value != "")
        ProduktEigenschaftFloat38 = parseFloat(document.getElementById("ProduktEigenschaftFloat38Search").value);
    if (document.getElementById("ProduktEigenschaftFloat39Search").value != "")
        ProduktEigenschaftFloat39 = parseFloat(document.getElementById("ProduktEigenschaftFloat39Search").value);
    if (document.getElementById("ProduktEigenschaftFloat40Search").value != "")
        ProduktEigenschaftFloat40 = parseFloat(document.getElementById("ProduktEigenschaftFloat40Search").value);

    if (document.getElementById("ProduktEigenschaftBIT1Search").checked)
        ProduktEigenschaftBIT1 = 1;
    if (document.getElementById("ProduktEigenschaftBIT2Search").checked)
        ProduktEigenschaftBIT2 = 1;
    if (document.getElementById("ProduktEigenschaftBIT3Search").checked)
        ProduktEigenschaftBIT3 = 1;
    if (document.getElementById("ProduktEigenschaftBIT4Search").checked)
        ProduktEigenschaftBIT4 = 1;
    if (document.getElementById("ProduktEigenschaftBIT5Search").checked)
        ProduktEigenschaftBIT5 = 1;
    if (document.getElementById("ProduktEigenschaftBIT6Search").checked)
        ProduktEigenschaftBIT6 = 1;
    if (document.getElementById("ProduktEigenschaftBIT7Search").checked)
        ProduktEigenschaftBIT7 = 1;
    if (document.getElementById("ProduktEigenschaftBIT8Search").checked)
        ProduktEigenschaftBIT8 = 1;
    if (document.getElementById("ProduktEigenschaftBIT9Search").checked)
        ProduktEigenschaftBIT9 = 1;
    if (document.getElementById("ProduktEigenschaftBIT10Search").checked)
        ProduktEigenschaftBIT10 = 1;

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

    if (ProduktEigenschaftString1 != "")
        sql += "AND mainTable.ProduktEigenschaftString1 LIKE '%" + ProduktEigenschaftString1 + "%' ";
    if (ProduktEigenschaftString2 != "")
        sql += "AND mainTable.ProduktEigenschaftString2 LIKE '%" + ProduktEigenschaftString2 + "%' ";
    if (ProduktEigenschaftString3 != "")
        sql += "AND mainTable.ProduktEigenschaftString3 LIKE '%" + ProduktEigenschaftString3 + "%' ";
    if (ProduktEigenschaftString4 != "")
        sql += "AND mainTable.ProduktEigenschaftString4 LIKE '%" + ProduktEigenschaftString4 + "%' ";
    if (ProduktEigenschaftString5 != "")
        sql += "AND mainTable.ProduktEigenschaftString5 LIKE '%" + ProduktEigenschaftString5 + "%' ";
    if (ProduktEigenschaftString6 != "")
        sql += "AND mainTable.ProduktEigenschaftString6 LIKE '%" + ProduktEigenschaftString6 + "%' ";
    if (ProduktEigenschaftString7 != "")
        sql += "AND mainTable.ProduktEigenschaftString7 LIKE '%" + ProduktEigenschaftString7 + "%' ";
    if (ProduktEigenschaftString8 != "")
        sql += "AND mainTable.ProduktEigenschaftString8 LIKE '%" + ProduktEigenschaftString8 + "%' ";
    if (ProduktEigenschaftString9 != "")
        sql += "AND mainTable.ProduktEigenschaftString9 LIKE '%" + ProduktEigenschaftString9 + "%' ";
    if (ProduktEigenschaftString10 != "")
        sql += "AND mainTable.ProduktEigenschaftString10 LIKE '%" + ProduktEigenschaftString10 + "%' ";
    if (ProduktEigenschaftString11 != "")
        sql += "AND mainTable.ProduktEigenschaftString11 LIKE '%" + ProduktEigenschaftString11 + "%' ";
    if (ProduktEigenschaftString12 != "")
        sql += "AND mainTable.ProduktEigenschaftString12 LIKE '%" + ProduktEigenschaftString12 + "%' ";
    if (ProduktEigenschaftString13 != "")
        sql += "AND mainTable.ProduktEigenschaftString13 LIKE '%" + ProduktEigenschaftString13 + "%' ";
    if (ProduktEigenschaftString14 != "")
        sql += "AND mainTable.ProduktEigenschaftString14 LIKE '%" + ProduktEigenschaftString14 + "%' ";
    if (ProduktEigenschaftString15 != "")
        sql += "AND mainTable.ProduktEigenschaftString15 LIKE '%" + ProduktEigenschaftString15 + "%' ";
    if (ProduktEigenschaftString16 != "")
        sql += "AND mainTable.ProduktEigenschaftString16 LIKE '%" + ProduktEigenschaftString16 + "%' ";
    if (ProduktEigenschaftString17 != "")
        sql += "AND mainTable.ProduktEigenschaftString17 LIKE '%" + ProduktEigenschaftString17 + "%' ";
    if (ProduktEigenschaftString18 != "")
        sql += "AND mainTable.ProduktEigenschaftString18 LIKE '%" + ProduktEigenschaftString18 + "%' ";
    if (ProduktEigenschaftString19 != "")
        sql += "AND mainTable.ProduktEigenschaftString19 LIKE '%" + ProduktEigenschaftString19 + "%' ";
    if (ProduktEigenschaftString20 != "")
        sql += "AND mainTable.ProduktEigenschaftString20 LIKE '%" + ProduktEigenschaftString20 + "%' ";
    if (ProduktEigenschaftString21 != "")
        sql += "AND mainTable.ProduktEigenschaftString21 LIKE '%" + ProduktEigenschaftString21 + "%' ";
    if (ProduktEigenschaftString22 != "")
        sql += "AND mainTable.ProduktEigenschaftString22 LIKE '%" + ProduktEigenschaftString22 + "%' ";
    if (ProduktEigenschaftString23 != "")
        sql += "AND mainTable.ProduktEigenschaftString23 LIKE '%" + ProduktEigenschaftString23 + "%' ";
    if (ProduktEigenschaftString24 != "")
        sql += "AND mainTable.ProduktEigenschaftString24 LIKE '%" + ProduktEigenschaftString24 + "%' ";
    if (ProduktEigenschaftString25 != "")
        sql += "AND mainTable.ProduktEigenschaftString25 LIKE '%" + ProduktEigenschaftString25 + "%' ";
    if (ProduktEigenschaftString26 != "")
        sql += "AND mainTable.ProduktEigenschaftString26 LIKE '%" + ProduktEigenschaftString26 + "%' ";
    if (ProduktEigenschaftString27 != "")
        sql += "AND mainTable.ProduktEigenschaftString27 LIKE '%" + ProduktEigenschaftString27 + "%' ";
    if (ProduktEigenschaftString28 != "")
        sql += "AND mainTable.ProduktEigenschaftString28 LIKE '%" + ProduktEigenschaftString28 + "%' ";
    if (ProduktEigenschaftString29 != "")
        sql += "AND mainTable.ProduktEigenschaftString29 LIKE '%" + ProduktEigenschaftString29 + "%' ";
    if (ProduktEigenschaftString30 != "")
        sql += "AND mainTable.ProduktEigenschaftString30 LIKE '%" + ProduktEigenschaftString30 + "%' ";
    if (ProduktEigenschaftString31 != "")
        sql += "AND mainTable.ProduktEigenschaftString31 LIKE '%" + ProduktEigenschaftString31 + "%' ";
    if (ProduktEigenschaftString32 != "")
        sql += "AND mainTable.ProduktEigenschaftString32 LIKE '%" + ProduktEigenschaftString32 + "%' ";
    if (ProduktEigenschaftString33 != "")
        sql += "AND mainTable.ProduktEigenschaftString33 LIKE '%" + ProduktEigenschaftString33 + "%' ";
    if (ProduktEigenschaftString34 != "")
        sql += "AND mainTable.ProduktEigenschaftString34 LIKE '%" + ProduktEigenschaftString34 + "%' ";
    if (ProduktEigenschaftString35 != "")
        sql += "AND mainTable.ProduktEigenschaftString35 LIKE '%" + ProduktEigenschaftString35 + "%' ";
    if (ProduktEigenschaftString36 != "")
        sql += "AND mainTable.ProduktEigenschaftString36 LIKE '%" + ProduktEigenschaftString36 + "%' ";
    if (ProduktEigenschaftString37 != "")
        sql += "AND mainTable.ProduktEigenschaftString37 LIKE '%" + ProduktEigenschaftString37 + "%' ";
    if (ProduktEigenschaftString38 != "")
        sql += "AND mainTable.ProduktEigenschaftString38 LIKE '%" + ProduktEigenschaftString38 + "%' ";
    if (ProduktEigenschaftString39 != "")
        sql += "AND mainTable.ProduktEigenschaftString39 LIKE '%" + ProduktEigenschaftString39 + "%' ";
    if (ProduktEigenschaftString40 != "")
        sql += "AND mainTable.ProduktEigenschaftString40 LIKE '%" + ProduktEigenschaftString40 + "%' ";
    if (ProduktEigenschaftString41 != "")
        sql += "AND mainTable.ProduktEigenschaftString41 LIKE '%" + ProduktEigenschaftString41 + "%' ";
    if (ProduktEigenschaftString42 != "")
        sql += "AND mainTable.ProduktEigenschaftString42 LIKE '%" + ProduktEigenschaftString42 + "%' ";
    if (ProduktEigenschaftString43 != "")
        sql += "AND mainTable.ProduktEigenschaftString43 LIKE '%" + ProduktEigenschaftString43 + "%' ";
    if (ProduktEigenschaftString44 != "")
        sql += "AND mainTable.ProduktEigenschaftString44 LIKE '%" + ProduktEigenschaftString44 + "%' ";
    if (ProduktEigenschaftString45 != "")
        sql += "AND mainTable.ProduktEigenschaftString45 LIKE '%" + ProduktEigenschaftString45 + "%' ";
    if (ProduktEigenschaftString46 != "")
        sql += "AND mainTable.ProduktEigenschaftString46 LIKE '%" + ProduktEigenschaftString46 + "%' ";
    if (ProduktEigenschaftString47 != "")
        sql += "AND mainTable.ProduktEigenschaftString47 LIKE '%" + ProduktEigenschaftString47 + "%' ";
    if (ProduktEigenschaftString48 != "")
        sql += "AND mainTable.ProduktEigenschaftString48 LIKE '%" + ProduktEigenschaftString48 + "%' ";
    if (ProduktEigenschaftString49 != "")
        sql += "AND mainTable.ProduktEigenschaftString49 LIKE '%" + ProduktEigenschaftString49 + "%' ";
    if (ProduktEigenschaftString50 != "")
        sql += "AND mainTable.ProduktEigenschaftString50 LIKE '%" + ProduktEigenschaftString50 + "%' ";

    if (ProduktEigenschaftInt1 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt1 = " + ProduktEigenschaftInt1 + " ";
    if (ProduktEigenschaftInt2 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt2 = " + ProduktEigenschaftInt2 + " ";
    if (ProduktEigenschaftInt3 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt3 = " + ProduktEigenschaftInt3 + " ";
    if (ProduktEigenschaftInt4 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt4 = " + ProduktEigenschaftInt4 + " ";
    if (ProduktEigenschaftInt5 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt5 = " + ProduktEigenschaftInt5 + " ";
    if (ProduktEigenschaftInt6 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt6 = " + ProduktEigenschaftInt6 + " ";
    if (ProduktEigenschaftInt7 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt7 = " + ProduktEigenschaftInt7 + " ";
    if (ProduktEigenschaftInt8 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt8 = " + ProduktEigenschaftInt8 + " ";
    if (ProduktEigenschaftInt9 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt9 = " + ProduktEigenschaftInt9 + " ";
    if (ProduktEigenschaftInt10 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt10 = " + ProduktEigenschaftInt10 + " ";
    if (ProduktEigenschaftInt11 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt11 = " + ProduktEigenschaftInt11 + " ";
    if (ProduktEigenschaftInt12 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt12 = " + ProduktEigenschaftInt12 + " ";
    if (ProduktEigenschaftInt13 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt13 = " + ProduktEigenschaftInt13 + " ";
    if (ProduktEigenschaftInt14 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt14 = " + ProduktEigenschaftInt14 + " ";
    if (ProduktEigenschaftInt15 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt15 = " + ProduktEigenschaftInt15 + " ";
    if (ProduktEigenschaftInt16 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt16 = " + ProduktEigenschaftInt16 + " ";
    if (ProduktEigenschaftInt17 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt17 = " + ProduktEigenschaftInt17 + " ";
    if (ProduktEigenschaftInt18 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt18 = " + ProduktEigenschaftInt18 + " ";
    if (ProduktEigenschaftInt19 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt19 = " + ProduktEigenschaftInt19 + " ";
    if (ProduktEigenschaftInt20 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt20 = " + ProduktEigenschaftInt20 + " ";
    if (ProduktEigenschaftInt21 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt21 = " + ProduktEigenschaftInt21 + " ";
    if (ProduktEigenschaftInt22 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt22 = " + ProduktEigenschaftInt22 + " ";
    if (ProduktEigenschaftInt23 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt23 = " + ProduktEigenschaftInt23 + " ";
    if (ProduktEigenschaftInt24 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt24 = " + ProduktEigenschaftInt24 + " ";
    if (ProduktEigenschaftInt25 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt25 = " + ProduktEigenschaftInt25 + " ";
    if (ProduktEigenschaftInt26 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt26 = " + ProduktEigenschaftInt26 + " ";
    if (ProduktEigenschaftInt27 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt27 = " + ProduktEigenschaftInt27 + " ";
    if (ProduktEigenschaftInt28 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt28 = " + ProduktEigenschaftInt28 + " ";
    if (ProduktEigenschaftInt29 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt29 = " + ProduktEigenschaftInt29 + " ";
    if (ProduktEigenschaftInt30 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt30 = " + ProduktEigenschaftInt30 + " ";
    if (ProduktEigenschaftInt31 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt31 = " + ProduktEigenschaftInt31 + " ";
    if (ProduktEigenschaftInt32 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt32 = " + ProduktEigenschaftInt32 + " ";
    if (ProduktEigenschaftInt33 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt33 = " + ProduktEigenschaftInt33 + " ";
    if (ProduktEigenschaftInt34 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt34 = " + ProduktEigenschaftInt34 + " ";
    if (ProduktEigenschaftInt35 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt35 = " + ProduktEigenschaftInt35 + " ";
    if (ProduktEigenschaftInt36 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt36 = " + ProduktEigenschaftInt36 + " ";
    if (ProduktEigenschaftInt37 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt37 = " + ProduktEigenschaftInt37 + " ";
    if (ProduktEigenschaftInt38 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt38 = " + ProduktEigenschaftInt38 + " ";
    if (ProduktEigenschaftInt39 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt39 = " + ProduktEigenschaftInt39 + " ";
    if (ProduktEigenschaftInt40 != 0)
        sql += "AND mainTable.ProduktEigenschaftInt40 = " + ProduktEigenschaftInt40 + " ";

    if (ProduktEigenschaftFloat1 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat1 = " + ProduktEigenschaftFloat1 + " ";
    if (ProduktEigenschaftFloat2 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat2 = " + ProduktEigenschaftFloat2 + " ";
    if (ProduktEigenschaftFloat3 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat3 = " + ProduktEigenschaftFloat3 + " ";
    if (ProduktEigenschaftFloat4 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat4 = " + ProduktEigenschaftFloat4 + " ";
    if (ProduktEigenschaftFloat5 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat5 = " + ProduktEigenschaftFloat5 + " ";
    if (ProduktEigenschaftFloat6 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat6 = " + ProduktEigenschaftFloat6 + " ";
    if (ProduktEigenschaftFloat7 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat7 = " + ProduktEigenschaftFloat7 + " ";
    if (ProduktEigenschaftFloat8 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat8 = " + ProduktEigenschaftFloat8 + " ";
    if (ProduktEigenschaftFloat9 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat9 = " + ProduktEigenschaftFloat9 + " ";
    if (ProduktEigenschaftFloat10 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat10 = " + ProduktEigenschaftFloat10 + " ";
    if (ProduktEigenschaftFloat11 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat11 = " + ProduktEigenschaftFloat11 + " ";
    if (ProduktEigenschaftFloat12 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat12 = " + ProduktEigenschaftFloat12 + " ";
    if (ProduktEigenschaftFloat13 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat13 = " + ProduktEigenschaftFloat13 + " ";
    if (ProduktEigenschaftFloat14 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat14 = " + ProduktEigenschaftFloat14 + " ";
    if (ProduktEigenschaftFloat15 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat15 = " + ProduktEigenschaftFloat15 + " ";
    if (ProduktEigenschaftFloat16 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat16 = " + ProduktEigenschaftFloat16 + " ";
    if (ProduktEigenschaftFloat17 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat17 = " + ProduktEigenschaftFloat17 + " ";
    if (ProduktEigenschaftFloat18 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat18 = " + ProduktEigenschaftFloat18 + " ";
    if (ProduktEigenschaftFloat19 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat19 = " + ProduktEigenschaftFloat19 + " ";
    if (ProduktEigenschaftFloat20 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat20 = " + ProduktEigenschaftFloat20 + " ";
    if (ProduktEigenschaftFloat21 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat21 = " + ProduktEigenschaftFloat21 + " ";
    if (ProduktEigenschaftFloat22 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat22 = " + ProduktEigenschaftFloat22 + " ";
    if (ProduktEigenschaftFloat23 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat23 = " + ProduktEigenschaftFloat23 + " ";
    if (ProduktEigenschaftFloat24 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat24 = " + ProduktEigenschaftFloat24 + " ";
    if (ProduktEigenschaftFloat25 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat25 = " + ProduktEigenschaftFloat25 + " ";
    if (ProduktEigenschaftFloat26 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat26 = " + ProduktEigenschaftFloat26 + " ";
    if (ProduktEigenschaftFloat27 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat27 = " + ProduktEigenschaftFloat27 + " ";
    if (ProduktEigenschaftFloat28 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat28 = " + ProduktEigenschaftFloat28 + " ";
    if (ProduktEigenschaftFloat29 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat29 = " + ProduktEigenschaftFloat29 + " ";
    if (ProduktEigenschaftFloat30 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat30 = " + ProduktEigenschaftFloat30 + " ";
    if (ProduktEigenschaftFloat31 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat31 = " + ProduktEigenschaftFloat31 + " ";
    if (ProduktEigenschaftFloat32 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat32 = " + ProduktEigenschaftFloat32 + " ";
    if (ProduktEigenschaftFloat33 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat33 = " + ProduktEigenschaftFloat33 + " ";
    if (ProduktEigenschaftFloat34 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat34 = " + ProduktEigenschaftFloat34 + " ";
    if (ProduktEigenschaftFloat35 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat35 = " + ProduktEigenschaftFloat35 + " ";
    if (ProduktEigenschaftFloat36 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat36 = " + ProduktEigenschaftFloat36 + " ";
    if (ProduktEigenschaftFloat37 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat37 = " + ProduktEigenschaftFloat37 + " ";
    if (ProduktEigenschaftFloat38 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat38 = " + ProduktEigenschaftFloat38 + " ";
    if (ProduktEigenschaftFloat39 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat39 = " + ProduktEigenschaftFloat39 + " ";
    if (ProduktEigenschaftFloat40 != 0)
        sql += "AND mainTable.ProduktEigenschaftFloat40 = " + ProduktEigenschaftFloat40 + " ";

    if (ProduktEigenschaftBIT1 != 0)
        sql += "AND mainTable.ProduktEigenschaftBIT1 = " + ProduktEigenschaftBIT1 + " ";
    if (ProduktEigenschaftBIT2 != 0)
        sql += "AND mainTable.ProduktEigenschaftBIT2 = " + ProduktEigenschaftBIT2 + " ";
    if (ProduktEigenschaftBIT3 != 0)
        sql += "AND mainTable.ProduktEigenschaftBIT3 = " + ProduktEigenschaftBIT3 + " ";
    if (ProduktEigenschaftBIT4 != 0)
        sql += "AND mainTable.ProduktEigenschaftBIT4 = " + ProduktEigenschaftBIT4 + " ";
    if (ProduktEigenschaftBIT5 != 0)
        sql += "AND mainTable.ProduktEigenschaftBIT5 = " + ProduktEigenschaftBIT5 + " ";
    if (ProduktEigenschaftBIT6 != 0)
        sql += "AND mainTable.ProduktEigenschaftBIT6 = " + ProduktEigenschaftBIT6 + " ";
    if (ProduktEigenschaftBIT7 != 0)
        sql += "AND mainTable.ProduktEigenschaftBIT7 = " + ProduktEigenschaftBIT7 + " ";
    if (ProduktEigenschaftBIT8 != 0)
        sql += "AND mainTable.ProduktEigenschaftBIT8 = " + ProduktEigenschaftBIT8 + " ";
    if (ProduktEigenschaftBIT9 != 0)
        sql += "AND mainTable.ProduktEigenschaftBIT9 = " + ProduktEigenschaftBIT9 + " ";
    if (ProduktEigenschaftBIT10 != 0)
        sql += "AND mainTable.ProduktEigenschaftBIT10 = " + ProduktEigenschaftBIT10 + " ";

    if (sql != "")
        sql = "WHERE " + sql.substring(3);
    sql = "SELECT * FROM `laaver`.Produkt_Eigenschaft AS mainTable " + sql + " ORDER BY mainTable.ProduktEigenschaftInt2 LIMIT 500";

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
            ProduktEigenschaftArr = new Array();
            if (response.results && Array.isArray(response.results)) {
                response.results.forEach(function(item) {
                    let obj = {};
                    showProduktEigenschaftAttributArr.forEach(attr => {
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

                    ProduktEigenschaftArr.push(obj);
                });
                showProduktEigenschaft();
                //document.getElementById('ErgebnisSpan').innerHTML = ProduktEigenschaftArr.length;
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

function showProduktEigenschaft() {
    var txt = "";
    showProduktEigenschaftAttributArr.sort(compare('indexB'));
    txt += "<table class='table table-separate table-head-custom table-checkable' id='kt_datatable'><thead><tr>";
    for (var i = 0; i < showProduktEigenschaftAttributArr.length; i++) {
        if (showProduktEigenschaftAttributArr[i].indexB > 0) {
            txt += "<th>" + unescape(showProduktEigenschaftAttributArr[i].lang[langNum]) + "</th>";
        }
    }
    txt += "</tr></thead><tbody>";

    for (var i = 0; i < ProduktEigenschaftArr.length; i++) {
        txt += "<tr>";
        for (var j = 0; j < showProduktEigenschaftAttributArr.length; j++) {
            eval("if(showProduktEigenschaftAttributArr[j].indexB>0){" + "if(showProduktEigenschaftAttributArr[j].indexB==1) txt += '<td><a href=\"javascript:showProduktEigenschaftModal(" + i + ")\">PE'+parseInt(10000+parseInt(ProduktEigenschaftArr[i]." + showProduktEigenschaftAttributArr[j].Attribut + "))+'</a></td>';" + "else if(showProduktEigenschaftAttributArr[j].Attribut=='Status'){ txt += '<td>';" + "for(var m=0;m<ProduktEigenschaftStatusArr.length;m++)if(ProduktEigenschaftStatusArr[m][4]==ProduktEigenschaftArr[i].Status)txt+=unescape(ProduktEigenschaftStatusArr[m][langNum]); txt += '</td>';}" + "else if(showProduktEigenschaftAttributArr[j].Attribut=='ProduktEigenschaftInt1') txt += '<td>'+getProduktEigenschaftPosition(ProduktEigenschaftArr[i]." + showProduktEigenschaftAttributArr[j].Attribut + ")+'</td>';" + "else if(showProduktEigenschaftAttributArr[j].Type=='BIT') txt += '<td>'+(parseInt(ProduktEigenschaftArr[i]." + showProduktEigenschaftAttributArr[j].Attribut + ")==1?'Yes':'No')+'</td>';" + "else if(parseInt(ProduktEigenschaftArr[i]." + showProduktEigenschaftAttributArr[j].Attribut + ")==0) txt += '<td> </td>';" + "else txt += '<td>'+unescape(ProduktEigenschaftArr[i]." + showProduktEigenschaftAttributArr[j].Attribut + ")+'</td>'" + "}");
        }
        txt += "</tr>";
    }
    txt += "</tbody></table>";

    document.getElementById("tableDiv").innerHTML = txt;
    hideLoadingDiv();

    if (globalIDX > 0) {
        showProduktEigenschaftModal(0);
        globalIDX = 0;
    }
}

function showProduktEigenschaftModal(idx) {
    showProduktEigenschaftAttributArr.sort(compare('indexC'));
    for (var i = 0; i < showProduktEigenschaftAttributArr.length; i++) {
        if (showProduktEigenschaftAttributArr[i].indexC > 0) {
            eval("if(document.getElementById('" + showProduktEigenschaftAttributArr[i].Attribut + "ModalDiv'))document.getElementById('" + showProduktEigenschaftAttributArr[i].Attribut + "ModalDiv').style.display='block';");
        }
    }

    for (var i = 0; i < ProduktEigenschaftArr.length; i++) {
        if (i == idx) {
            mainIDX = parseInt(ProduktEigenschaftArr[i].prIDX);

            document.getElementById("prIDXModal").value = "PE" + parseInt(10000 + (ProduktEigenschaftArr[i].prIDX));
            document.getElementById("frIDXModal").value = parseInt(ProduktEigenschaftArr[i].frIDX);
            document.getElementById("Datum1Modal").value = unescape(ProduktEigenschaftArr[i].Datum1);
            document.getElementById("Datum2Modal").value = unescape(ProduktEigenschaftArr[i].Datum2);
            document.getElementById("Datum3Modal").value = unescape(ProduktEigenschaftArr[i].Datum3);
            document.getElementById("Datum4Modal").value = unescape(ProduktEigenschaftArr[i].Datum4);
            document.getElementById("StatusModal").value = parseInt(ProduktEigenschaftArr[i].Status);

            document.getElementById("ProduktEigenschaftString1Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString1);
            document.getElementById("ProduktEigenschaftString2Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString2);
            document.getElementById("ProduktEigenschaftString3Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString3);
            document.getElementById("ProduktEigenschaftString4Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString4);
            document.getElementById("ProduktEigenschaftString5Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString5);
            document.getElementById("ProduktEigenschaftString6Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString6);
            document.getElementById("ProduktEigenschaftString7Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString7);
            document.getElementById("ProduktEigenschaftString8Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString8);
            document.getElementById("ProduktEigenschaftString9Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString9);
            document.getElementById("ProduktEigenschaftString10Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString10);
            document.getElementById("ProduktEigenschaftString11Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString11);
            document.getElementById("ProduktEigenschaftString12Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString12);
            document.getElementById("ProduktEigenschaftString13Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString13);
            document.getElementById("ProduktEigenschaftString14Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString14);
            document.getElementById("ProduktEigenschaftString15Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString15);
            document.getElementById("ProduktEigenschaftString16Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString16);
            document.getElementById("ProduktEigenschaftString17Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString17);
            document.getElementById("ProduktEigenschaftString18Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString18);
            document.getElementById("ProduktEigenschaftString19Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString19);
            document.getElementById("ProduktEigenschaftString20Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString20);
            document.getElementById("ProduktEigenschaftString21Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString21);
            document.getElementById("ProduktEigenschaftString22Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString22);
            document.getElementById("ProduktEigenschaftString23Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString23);
            document.getElementById("ProduktEigenschaftString24Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString24);
            document.getElementById("ProduktEigenschaftString25Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString25);
            document.getElementById("ProduktEigenschaftString26Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString26);
            document.getElementById("ProduktEigenschaftString27Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString27);
            document.getElementById("ProduktEigenschaftString28Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString28);
            document.getElementById("ProduktEigenschaftString29Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString29);
            document.getElementById("ProduktEigenschaftString30Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString30);
            document.getElementById("ProduktEigenschaftString31Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString31);
            document.getElementById("ProduktEigenschaftString32Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString32);
            document.getElementById("ProduktEigenschaftString33Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString33);
            document.getElementById("ProduktEigenschaftString34Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString34);
            document.getElementById("ProduktEigenschaftString35Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString35);
            document.getElementById("ProduktEigenschaftString36Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString36);
            document.getElementById("ProduktEigenschaftString37Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString37);
            document.getElementById("ProduktEigenschaftString38Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString38);
            document.getElementById("ProduktEigenschaftString39Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString39);
            document.getElementById("ProduktEigenschaftString40Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString40);
            document.getElementById("ProduktEigenschaftString41Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString41);
            document.getElementById("ProduktEigenschaftString42Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString42);
            document.getElementById("ProduktEigenschaftString43Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString43);
            document.getElementById("ProduktEigenschaftString44Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString44);
            document.getElementById("ProduktEigenschaftString45Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString45);
            document.getElementById("ProduktEigenschaftString46Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString46);
            document.getElementById("ProduktEigenschaftString47Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString47);
            document.getElementById("ProduktEigenschaftString48Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString48);
            document.getElementById("ProduktEigenschaftString49Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString49);
            document.getElementById("ProduktEigenschaftString50Modal").value = unescape(ProduktEigenschaftArr[i].ProduktEigenschaftString50);

            document.getElementById("ProduktEigenschaftInt1Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt1);
            document.getElementById("ProduktEigenschaftInt2Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt2) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt2);
            document.getElementById("ProduktEigenschaftInt3Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt3) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt3);
            document.getElementById("ProduktEigenschaftInt4Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt4) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt4);
            document.getElementById("ProduktEigenschaftInt5Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt5) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt5);
            document.getElementById("ProduktEigenschaftInt6Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt6) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt6);
            document.getElementById("ProduktEigenschaftInt7Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt7) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt7);
            document.getElementById("ProduktEigenschaftInt8Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt8) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt8);
            document.getElementById("ProduktEigenschaftInt9Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt9) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt9);
            document.getElementById("ProduktEigenschaftInt10Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt10) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt10);
            document.getElementById("ProduktEigenschaftInt11Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt11) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt11);
            document.getElementById("ProduktEigenschaftInt12Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt12) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt12);
            document.getElementById("ProduktEigenschaftInt13Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt13) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt13);
            document.getElementById("ProduktEigenschaftInt14Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt14) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt14);
            document.getElementById("ProduktEigenschaftInt15Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt15) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt15);
            document.getElementById("ProduktEigenschaftInt16Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt16) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt16);
            document.getElementById("ProduktEigenschaftInt17Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt17) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt17);
            document.getElementById("ProduktEigenschaftInt18Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt18) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt18);
            document.getElementById("ProduktEigenschaftInt19Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt19) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt19);
            document.getElementById("ProduktEigenschaftInt20Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt20) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt20);
            document.getElementById("ProduktEigenschaftInt21Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt21) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt21);
            document.getElementById("ProduktEigenschaftInt22Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt22) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt22);
            document.getElementById("ProduktEigenschaftInt23Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt23) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt23);
            document.getElementById("ProduktEigenschaftInt24Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt24) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt24);
            document.getElementById("ProduktEigenschaftInt25Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt25) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt25);
            document.getElementById("ProduktEigenschaftInt26Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt26) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt26);
            document.getElementById("ProduktEigenschaftInt27Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt27) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt27);
            document.getElementById("ProduktEigenschaftInt28Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt28) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt28);
            document.getElementById("ProduktEigenschaftInt29Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt29) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt29);
            document.getElementById("ProduktEigenschaftInt30Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt30) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt30);
            document.getElementById("ProduktEigenschaftInt31Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt31) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt31);
            document.getElementById("ProduktEigenschaftInt32Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt32) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt32);
            document.getElementById("ProduktEigenschaftInt33Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt33) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt33);
            document.getElementById("ProduktEigenschaftInt34Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt34) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt34);
            document.getElementById("ProduktEigenschaftInt35Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt35) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt35);
            document.getElementById("ProduktEigenschaftInt36Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt36) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt36);
            document.getElementById("ProduktEigenschaftInt37Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt37) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt37);
            document.getElementById("ProduktEigenschaftInt38Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt38) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt38);
            document.getElementById("ProduktEigenschaftInt39Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt39) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt39);
            document.getElementById("ProduktEigenschaftInt40Modal").value = parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt40) == 0 ? "" : parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftInt40);

            document.getElementById("ProduktEigenschaftFloat1Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat1) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat1);
            document.getElementById("ProduktEigenschaftFloat2Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat2) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat2);
            document.getElementById("ProduktEigenschaftFloat3Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat3) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat3);
            document.getElementById("ProduktEigenschaftFloat4Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat4) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat4);
            document.getElementById("ProduktEigenschaftFloat5Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat5) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat5);
            document.getElementById("ProduktEigenschaftFloat6Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat6) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat6);
            document.getElementById("ProduktEigenschaftFloat7Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat7) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat7);
            document.getElementById("ProduktEigenschaftFloat8Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat8) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat8);
            document.getElementById("ProduktEigenschaftFloat9Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat9) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat9);
            document.getElementById("ProduktEigenschaftFloat10Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat10) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat10);
            document.getElementById("ProduktEigenschaftFloat11Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat11) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat11);
            document.getElementById("ProduktEigenschaftFloat12Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat12) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat12);
            document.getElementById("ProduktEigenschaftFloat13Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat13) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat13);
            document.getElementById("ProduktEigenschaftFloat14Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat14) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat14);
            document.getElementById("ProduktEigenschaftFloat15Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat15) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat15);
            document.getElementById("ProduktEigenschaftFloat16Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat16) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat16);
            document.getElementById("ProduktEigenschaftFloat17Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat17) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat17);
            document.getElementById("ProduktEigenschaftFloat18Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat18) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat18);
            document.getElementById("ProduktEigenschaftFloat19Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat19) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat19);
            document.getElementById("ProduktEigenschaftFloat20Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat20) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat20);
            document.getElementById("ProduktEigenschaftFloat21Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat21) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat21);
            document.getElementById("ProduktEigenschaftFloat22Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat22) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat22);
            document.getElementById("ProduktEigenschaftFloat23Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat23) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat23);
            document.getElementById("ProduktEigenschaftFloat24Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat24) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat24);
            document.getElementById("ProduktEigenschaftFloat25Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat25) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat25);
            document.getElementById("ProduktEigenschaftFloat26Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat26) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat26);
            document.getElementById("ProduktEigenschaftFloat27Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat27) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat27);
            document.getElementById("ProduktEigenschaftFloat28Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat28) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat28);
            document.getElementById("ProduktEigenschaftFloat29Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat29) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat29);
            document.getElementById("ProduktEigenschaftFloat30Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat30) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat30);
            document.getElementById("ProduktEigenschaftFloat31Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat31) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat31);
            document.getElementById("ProduktEigenschaftFloat32Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat32) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat32);
            document.getElementById("ProduktEigenschaftFloat33Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat33) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat33);
            document.getElementById("ProduktEigenschaftFloat34Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat34) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat34);
            document.getElementById("ProduktEigenschaftFloat35Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat35) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat35);
            document.getElementById("ProduktEigenschaftFloat36Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat36) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat36);
            document.getElementById("ProduktEigenschaftFloat37Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat37) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat37);
            document.getElementById("ProduktEigenschaftFloat38Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat38) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat38);
            document.getElementById("ProduktEigenschaftFloat39Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat39) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat39);
            document.getElementById("ProduktEigenschaftFloat40Modal").value = parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat40) == 0 ? "" : parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat40);

            if (parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftBIT1) == 0)
                document.getElementById("ProduktEigenschaftBIT1Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktEigenschaftBIT1Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftBIT2) == 0)
                document.getElementById("ProduktEigenschaftBIT2Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktEigenschaftBIT2Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftBIT3) == 0)
                document.getElementById("ProduktEigenschaftBIT3Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktEigenschaftBIT3Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftBIT4) == 0)
                document.getElementById("ProduktEigenschaftBIT4Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktEigenschaftBIT4Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftBIT5) == 0)
                document.getElementById("ProduktEigenschaftBIT5Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktEigenschaftBIT5Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftBIT6) == 0)
                document.getElementById("ProduktEigenschaftBIT6Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktEigenschaftBIT6Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftBIT7) == 0)
                document.getElementById("ProduktEigenschaftBIT7Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktEigenschaftBIT7Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftBIT8) == 0)
                document.getElementById("ProduktEigenschaftBIT8Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktEigenschaftBIT8Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftBIT9) == 0)
                document.getElementById("ProduktEigenschaftBIT9Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktEigenschaftBIT9Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktEigenschaftArr[i].ProduktEigenschaftBIT10) == 0)
                document.getElementById("ProduktEigenschaftBIT10Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktEigenschaftBIT10Modal").setAttribute("checked", "checked");

            //老板有权限更改 Rolle
            if (ProduktEigenschaftArr[i].Status < 7 && Rolle == 1) {
                document.getElementById("prIDXModal").setAttribute('disabled', 'disabled');
                document.getElementById("frIDXModal").setAttribute('disabled', 'disabled');
                document.getElementById("Datum1Modal").setAttribute('disabled', 'disabled');
                document.getElementById("StatusModal").setAttribute('disabled', 'disabled');
                document.getElementById("ProduktEigenschaftString1Modal").setAttribute('disabled', 'disabled');
                document.getElementById("ProduktEigenschaftString2Modal").setAttribute('disabled', 'disabled');
                document.getElementById("ProduktEigenschaftString3Modal").setAttribute('disabled', 'disabled');
				document.getElementById("ProduktEigenschaftString4Modal").setAttribute('disabled', 'disabled');

                document.getElementById("button_modal_save").style.display = "inline-block";
            } else {
                for (var i = 0; i < showProduktEigenschaftAttributArr.length; i++) {
                    if (showProduktEigenschaftAttributArr[i].indexC > 0) {
                        document.getElementById(showProduktEigenschaftAttributArr[i].Attribut + "Modal").setAttribute('disabled', 'disabled');
                    }
                }
                document.getElementById("button_modal_save").style.display = "none";
            }
        }
    }
    $('#exampleModal').modal('show');
}

function saveProduktEigenschaft() {
    //更新对象所需的参数
    var ProduktEigenschaftModalArr = ["ProduktEigenschaftString4", "ProduktEigenschaftString5", "ProduktEigenschaftString6", "ProduktEigenschaftString7", "ProduktEigenschaftString8", "ProduktEigenschaftString9", "ProduktEigenschaftString10", "ProduktEigenschaftString11", "ProduktEigenschaftString12", "ProduktEigenschaftString13", "ProduktEigenschaftString14", "ProduktEigenschaftString15", "ProduktEigenschaftString16", "ProduktEigenschaftString17", "ProduktEigenschaftString18", "ProduktEigenschaftString19", "ProduktEigenschaftString20", "ProduktEigenschaftString21", "ProduktEigenschaftString22", "ProduktEigenschaftString23", "ProduktEigenschaftString24", "ProduktEigenschaftString25", "ProduktEigenschaftString26", "ProduktEigenschaftString27", "ProduktEigenschaftString28", "ProduktEigenschaftString29", "ProduktEigenschaftString30", "ProduktEigenschaftString31", "ProduktEigenschaftString32", "ProduktEigenschaftString33", "ProduktEigenschaftString34", "ProduktEigenschaftString35", "ProduktEigenschaftString36", "ProduktEigenschaftString37", "ProduktEigenschaftString38", "ProduktEigenschaftString39", "ProduktEigenschaftString40", "ProduktEigenschaftString41", "ProduktEigenschaftString42", "ProduktEigenschaftString43", "ProduktEigenschaftString44", "ProduktEigenschaftString45", "ProduktEigenschaftString46", "ProduktEigenschaftString47", "ProduktEigenschaftString48", "ProduktEigenschaftString49", "ProduktEigenschaftString50",
    "ProduktEigenschaftInt1", "ProduktEigenschaftInt2", "ProduktEigenschaftInt3", "ProduktEigenschaftInt4", "ProduktEigenschaftInt5", "ProduktEigenschaftInt6", "ProduktEigenschaftInt7", "ProduktEigenschaftInt8", "ProduktEigenschaftInt9", "ProduktEigenschaftInt10", "ProduktEigenschaftInt11", "ProduktEigenschaftInt12", "ProduktEigenschaftInt13", "ProduktEigenschaftInt14", "ProduktEigenschaftInt15", "ProduktEigenschaftInt16", "ProduktEigenschaftInt17", "ProduktEigenschaftInt18", "ProduktEigenschaftInt19", "ProduktEigenschaftInt20", "ProduktEigenschaftInt21", "ProduktEigenschaftInt22", "ProduktEigenschaftInt23", "ProduktEigenschaftInt24", "ProduktEigenschaftInt25", "ProduktEigenschaftInt26", "ProduktEigenschaftInt27", "ProduktEigenschaftInt28", "ProduktEigenschaftInt29", "ProduktEigenschaftInt30", "ProduktEigenschaftInt31", "ProduktEigenschaftInt32", "ProduktEigenschaftInt33", "ProduktEigenschaftInt34", "ProduktEigenschaftInt35", "ProduktEigenschaftInt36", "ProduktEigenschaftInt37", "ProduktEigenschaftInt38", "ProduktEigenschaftInt39", "ProduktEigenschaftInt40",
    "ProduktEigenschaftFloat1", "ProduktEigenschaftFloat2", "ProduktEigenschaftFloat3", "ProduktEigenschaftFloat4", "ProduktEigenschaftFloat5", "ProduktEigenschaftFloat6", "ProduktEigenschaftFloat7", "ProduktEigenschaftFloat8", "ProduktEigenschaftFloat9", "ProduktEigenschaftFloat10", "ProduktEigenschaftFloat11", "ProduktEigenschaftFloat12", "ProduktEigenschaftFloat13", "ProduktEigenschaftFloat14", "ProduktEigenschaftFloat15", "ProduktEigenschaftFloat16", "ProduktEigenschaftFloat17", "ProduktEigenschaftFloat18", "ProduktEigenschaftFloat19", "ProduktEigenschaftFloat20", "ProduktEigenschaftFloat21", "ProduktEigenschaftFloat22", "ProduktEigenschaftFloat23", "ProduktEigenschaftFloat24", "ProduktEigenschaftFloat25", "ProduktEigenschaftFloat26", "ProduktEigenschaftFloat27", "ProduktEigenschaftFloat28", "ProduktEigenschaftFloat29", "ProduktEigenschaftFloat30", "ProduktEigenschaftFloat31", "ProduktEigenschaftFloat32", "ProduktEigenschaftFloat33", "ProduktEigenschaftFloat34", "ProduktEigenschaftFloat35", "ProduktEigenschaftFloat36", "ProduktEigenschaftFloat37", "ProduktEigenschaftFloat38", "ProduktEigenschaftFloat39", "ProduktEigenschaftFloat40",
    "ProduktEigenschaftBIT1", "ProduktEigenschaftBIT2", "ProduktEigenschaftBIT3", "ProduktEigenschaftBIT4", "ProduktEigenschaftBIT5", "ProduktEigenschaftBIT6", "ProduktEigenschaftBIT7", "ProduktEigenschaftBIT8", "ProduktEigenschaftBIT9", "ProduktEigenschaftBIT10"];

    var prIDX = 0
      , frIDX = 0
      , Datum1 = ""
      , Datum2 = ""
      , Datum3 = ""
      , Datum4 = ""
      , Status = 0;
    var ProduktEigenschaftString1 = ""
      , ProduktEigenschaftString2 = ""
      , ProduktEigenschaftString3 = ""
      , ProduktEigenschaftString4 = ""
      , ProduktEigenschaftString5 = ""
      , ProduktEigenschaftString6 = ""
      , ProduktEigenschaftString7 = ""
      , ProduktEigenschaftString8 = ""
      , ProduktEigenschaftString9 = ""
      , ProduktEigenschaftString10 = ""
      , ProduktEigenschaftString11 = ""
      , ProduktEigenschaftString12 = ""
      , ProduktEigenschaftString13 = ""
      , ProduktEigenschaftString14 = ""
      , ProduktEigenschaftString15 = ""
      , ProduktEigenschaftString16 = ""
      , ProduktEigenschaftString17 = ""
      , ProduktEigenschaftString18 = ""
      , ProduktEigenschaftString19 = ""
      , ProduktEigenschaftString20 = ""
      , ProduktEigenschaftString21 = ""
      , ProduktEigenschaftString22 = ""
      , ProduktEigenschaftString23 = ""
      , ProduktEigenschaftString24 = ""
      , ProduktEigenschaftString25 = ""
      , ProduktEigenschaftString26 = ""
      , ProduktEigenschaftString27 = ""
      , ProduktEigenschaftString28 = ""
      , ProduktEigenschaftString29 = ""
      , ProduktEigenschaftString30 = ""
      , ProduktEigenschaftString31 = ""
      , ProduktEigenschaftString32 = ""
      , ProduktEigenschaftString33 = ""
      , ProduktEigenschaftString34 = ""
      , ProduktEigenschaftString35 = ""
      , ProduktEigenschaftString36 = ""
      , ProduktEigenschaftString37 = ""
      , ProduktEigenschaftString38 = ""
      , ProduktEigenschaftString39 = ""
      , ProduktEigenschaftString40 = ""
      , ProduktEigenschaftString41 = ""
      , ProduktEigenschaftString42 = ""
      , ProduktEigenschaftString43 = ""
      , ProduktEigenschaftString44 = ""
      , ProduktEigenschaftString45 = ""
      , ProduktEigenschaftString46 = ""
      , ProduktEigenschaftString47 = ""
      , ProduktEigenschaftString48 = ""
      , ProduktEigenschaftString49 = ""
      , ProduktEigenschaftString50 = ""
      , ProduktEigenschaftInt1 = 0
      , ProduktEigenschaftInt2 = 0
      , ProduktEigenschaftInt3 = 0
      , ProduktEigenschaftInt4 = 0
      , ProduktEigenschaftInt5 = 0
      , ProduktEigenschaftInt6 = 0
      , ProduktEigenschaftInt7 = 0
      , ProduktEigenschaftInt8 = 0
      , ProduktEigenschaftInt9 = 0
      , ProduktEigenschaftInt10 = 0
      , ProduktEigenschaftInt11 = 0
      , ProduktEigenschaftInt12 = 0
      , ProduktEigenschaftInt13 = 0
      , ProduktEigenschaftInt14 = 0
      , ProduktEigenschaftInt15 = 0
      , ProduktEigenschaftInt16 = 0
      , ProduktEigenschaftInt17 = 0
      , ProduktEigenschaftInt18 = 0
      , ProduktEigenschaftInt19 = 0
      , ProduktEigenschaftInt20 = 0
      , ProduktEigenschaftInt21 = 0
      , ProduktEigenschaftInt22 = 0
      , ProduktEigenschaftInt23 = 0
      , ProduktEigenschaftInt24 = 0
      , ProduktEigenschaftInt25 = 0
      , ProduktEigenschaftInt26 = 0
      , ProduktEigenschaftInt27 = 0
      , ProduktEigenschaftInt28 = 0
      , ProduktEigenschaftInt29 = 0
      , ProduktEigenschaftInt30 = 0
      , ProduktEigenschaftInt31 = 0
      , ProduktEigenschaftInt32 = 0
      , ProduktEigenschaftInt33 = 0
      , ProduktEigenschaftInt34 = 0
      , ProduktEigenschaftInt35 = 0
      , ProduktEigenschaftInt36 = 0
      , ProduktEigenschaftInt37 = 0
      , ProduktEigenschaftInt38 = 0
      , ProduktEigenschaftInt39 = 0
      , ProduktEigenschaftInt40 = 0
      , ProduktEigenschaftFloat1 = 0
      , ProduktEigenschaftFloat2 = 0
      , ProduktEigenschaftFloat3 = 0
      , ProduktEigenschaftFloat4 = 0
      , ProduktEigenschaftFloat5 = 0
      , ProduktEigenschaftFloat6 = 0
      , ProduktEigenschaftFloat7 = 0
      , ProduktEigenschaftFloat8 = 0
      , ProduktEigenschaftFloat9 = 0
      , ProduktEigenschaftFloat10 = 0
      , ProduktEigenschaftFloat11 = 0
      , ProduktEigenschaftFloat12 = 0
      , ProduktEigenschaftFloat13 = 0
      , ProduktEigenschaftFloat14 = 0
      , ProduktEigenschaftFloat15 = 0
      , ProduktEigenschaftFloat16 = 0
      , ProduktEigenschaftFloat17 = 0
      , ProduktEigenschaftFloat18 = 0
      , ProduktEigenschaftFloat19 = 0
      , ProduktEigenschaftFloat20 = 0
      , ProduktEigenschaftFloat21 = 0
      , ProduktEigenschaftFloat22 = 0
      , ProduktEigenschaftFloat23 = 0
      , ProduktEigenschaftFloat24 = 0
      , ProduktEigenschaftFloat25 = 0
      , ProduktEigenschaftFloat26 = 0
      , ProduktEigenschaftFloat27 = 0
      , ProduktEigenschaftFloat28 = 0
      , ProduktEigenschaftFloat29 = 0
      , ProduktEigenschaftFloat30 = 0
      , ProduktEigenschaftFloat31 = 0
      , ProduktEigenschaftFloat32 = 0
      , ProduktEigenschaftFloat33 = 0
      , ProduktEigenschaftFloat34 = 0
      , ProduktEigenschaftFloat35 = 0
      , ProduktEigenschaftFloat36 = 0
      , ProduktEigenschaftFloat37 = 0
      , ProduktEigenschaftFloat38 = 0
      , ProduktEigenschaftFloat39 = 0
      , ProduktEigenschaftFloat40 = 0
      , ProduktEigenschaftBIT1 = 0
      , ProduktEigenschaftBIT2 = 0
      , ProduktEigenschaftBIT3 = 0
      , ProduktEigenschaftBIT4 = 0
      , ProduktEigenschaftBIT5 = 0
      , ProduktEigenschaftBIT6 = 0
      , ProduktEigenschaftBIT7 = 0
      , ProduktEigenschaftBIT8 = 0
      , ProduktEigenschaftBIT9 = 0
      , ProduktEigenschaftBIT10 = 0;

    if (document.getElementById("ProduktEigenschaftString1Modal").value != "")
        ProduktEigenschaftString1 = escape(document.getElementById("ProduktEigenschaftString1Modal").value);
    if (document.getElementById("ProduktEigenschaftString2Modal").value != "")
        ProduktEigenschaftString2 = escape(document.getElementById("ProduktEigenschaftString2Modal").value);
    if (document.getElementById("ProduktEigenschaftString3Modal").value != "")
        ProduktEigenschaftString3 = escape(document.getElementById("ProduktEigenschaftString3Modal").value);
    if (document.getElementById("ProduktEigenschaftString4Modal").value != "")
        ProduktEigenschaftString4 = escape(document.getElementById("ProduktEigenschaftString4Modal").value);
    if (document.getElementById("ProduktEigenschaftString5Modal").value != "")
        ProduktEigenschaftString5 = escape(document.getElementById("ProduktEigenschaftString5Modal").value);
    if (document.getElementById("ProduktEigenschaftString6Modal").value != "")
        ProduktEigenschaftString6 = escape(document.getElementById("ProduktEigenschaftString6Modal").value);
    if (document.getElementById("ProduktEigenschaftString7Modal").value != "")
        ProduktEigenschaftString7 = escape(document.getElementById("ProduktEigenschaftString7Modal").value);
    if (document.getElementById("ProduktEigenschaftString8Modal").value != "")
        ProduktEigenschaftString8 = escape(document.getElementById("ProduktEigenschaftString8Modal").value);
    if (document.getElementById("ProduktEigenschaftString9Modal").value != "")
        ProduktEigenschaftString9 = escape(document.getElementById("ProduktEigenschaftString9Modal").value);
    if (document.getElementById("ProduktEigenschaftString10Modal").value != "")
        ProduktEigenschaftString10 = escape(document.getElementById("ProduktEigenschaftString10Modal").value);
    if (document.getElementById("ProduktEigenschaftString11Modal").value != "")
        ProduktEigenschaftString11 = escape(document.getElementById("ProduktEigenschaftString11Modal").value);
    if (document.getElementById("ProduktEigenschaftString12Modal").value != "")
        ProduktEigenschaftString12 = escape(document.getElementById("ProduktEigenschaftString12Modal").value);
    if (document.getElementById("ProduktEigenschaftString13Modal").value != "")
        ProduktEigenschaftString13 = escape(document.getElementById("ProduktEigenschaftString13Modal").value);
    if (document.getElementById("ProduktEigenschaftString14Modal").value != "")
        ProduktEigenschaftString14 = escape(document.getElementById("ProduktEigenschaftString14Modal").value);
    if (document.getElementById("ProduktEigenschaftString15Modal").value != "")
        ProduktEigenschaftString15 = escape(document.getElementById("ProduktEigenschaftString15Modal").value);
    if (document.getElementById("ProduktEigenschaftString16Modal").value != "")
        ProduktEigenschaftString16 = escape(document.getElementById("ProduktEigenschaftString16Modal").value);
    if (document.getElementById("ProduktEigenschaftString17Modal").value != "")
        ProduktEigenschaftString17 = escape(document.getElementById("ProduktEigenschaftString17Modal").value);
    if (document.getElementById("ProduktEigenschaftString18Modal").value != "")
        ProduktEigenschaftString18 = escape(document.getElementById("ProduktEigenschaftString18Modal").value);
    if (document.getElementById("ProduktEigenschaftString19Modal").value != "")
        ProduktEigenschaftString19 = escape(document.getElementById("ProduktEigenschaftString19Modal").value);
    if (document.getElementById("ProduktEigenschaftString20Modal").value != "")
        ProduktEigenschaftString20 = escape(document.getElementById("ProduktEigenschaftString20Modal").value);
    if (document.getElementById("ProduktEigenschaftString21Modal").value != "")
        ProduktEigenschaftString21 = escape(document.getElementById("ProduktEigenschaftString21Modal").value);
    if (document.getElementById("ProduktEigenschaftString22Modal").value != "")
        ProduktEigenschaftString22 = escape(document.getElementById("ProduktEigenschaftString22Modal").value);
    if (document.getElementById("ProduktEigenschaftString23Modal").value != "")
        ProduktEigenschaftString23 = escape(document.getElementById("ProduktEigenschaftString23Modal").value);
    if (document.getElementById("ProduktEigenschaftString24Modal").value != "")
        ProduktEigenschaftString24 = escape(document.getElementById("ProduktEigenschaftString24Modal").value);
    if (document.getElementById("ProduktEigenschaftString25Modal").value != "")
        ProduktEigenschaftString25 = escape(document.getElementById("ProduktEigenschaftString25Modal").value);
    if (document.getElementById("ProduktEigenschaftString26Modal").value != "")
        ProduktEigenschaftString26 = escape(document.getElementById("ProduktEigenschaftString26Modal").value);
    if (document.getElementById("ProduktEigenschaftString27Modal").value != "")
        ProduktEigenschaftString27 = escape(document.getElementById("ProduktEigenschaftString27Modal").value);
    if (document.getElementById("ProduktEigenschaftString28Modal").value != "")
        ProduktEigenschaftString28 = escape(document.getElementById("ProduktEigenschaftString28Modal").value);
    if (document.getElementById("ProduktEigenschaftString29Modal").value != "")
        ProduktEigenschaftString29 = escape(document.getElementById("ProduktEigenschaftString29Modal").value);
    if (document.getElementById("ProduktEigenschaftString30Modal").value != "")
        ProduktEigenschaftString30 = escape(document.getElementById("ProduktEigenschaftString30Modal").value);
    if (document.getElementById("ProduktEigenschaftString31Modal").value != "")
        ProduktEigenschaftString31 = escape(document.getElementById("ProduktEigenschaftString31Modal").value);
    if (document.getElementById("ProduktEigenschaftString32Modal").value != "")
        ProduktEigenschaftString32 = escape(document.getElementById("ProduktEigenschaftString32Modal").value);
    if (document.getElementById("ProduktEigenschaftString33Modal").value != "")
        ProduktEigenschaftString33 = escape(document.getElementById("ProduktEigenschaftString33Modal").value);
    if (document.getElementById("ProduktEigenschaftString34Modal").value != "")
        ProduktEigenschaftString34 = escape(document.getElementById("ProduktEigenschaftString34Modal").value);
    if (document.getElementById("ProduktEigenschaftString35Modal").value != "")
        ProduktEigenschaftString35 = escape(document.getElementById("ProduktEigenschaftString35Modal").value);
    if (document.getElementById("ProduktEigenschaftString36Modal").value != "")
        ProduktEigenschaftString36 = escape(document.getElementById("ProduktEigenschaftString36Modal").value);
    if (document.getElementById("ProduktEigenschaftString37Modal").value != "")
        ProduktEigenschaftString37 = escape(document.getElementById("ProduktEigenschaftString37Modal").value);
    if (document.getElementById("ProduktEigenschaftString38Modal").value != "")
        ProduktEigenschaftString38 = escape(document.getElementById("ProduktEigenschaftString38Modal").value);
    if (document.getElementById("ProduktEigenschaftString39Modal").value != "")
        ProduktEigenschaftString39 = escape(document.getElementById("ProduktEigenschaftString39Modal").value);
    if (document.getElementById("ProduktEigenschaftString40Modal").value != "")
        ProduktEigenschaftString40 = escape(document.getElementById("ProduktEigenschaftString40Modal").value);
    if (document.getElementById("ProduktEigenschaftString41Modal").value != "")
        ProduktEigenschaftString41 = escape(document.getElementById("ProduktEigenschaftString41Modal").value);
    if (document.getElementById("ProduktEigenschaftString42Modal").value != "")
        ProduktEigenschaftString42 = escape(document.getElementById("ProduktEigenschaftString42Modal").value);
    if (document.getElementById("ProduktEigenschaftString43Modal").value != "")
        ProduktEigenschaftString43 = escape(document.getElementById("ProduktEigenschaftString43Modal").value);
    if (document.getElementById("ProduktEigenschaftString44Modal").value != "")
        ProduktEigenschaftString44 = escape(document.getElementById("ProduktEigenschaftString44Modal").value);
    if (document.getElementById("ProduktEigenschaftString45Modal").value != "")
        ProduktEigenschaftString45 = escape(document.getElementById("ProduktEigenschaftString45Modal").value);
    if (document.getElementById("ProduktEigenschaftString46Modal").value != "")
        ProduktEigenschaftString46 = escape(document.getElementById("ProduktEigenschaftString46Modal").value);
    if (document.getElementById("ProduktEigenschaftString47Modal").value != "")
        ProduktEigenschaftString47 = escape(document.getElementById("ProduktEigenschaftString47Modal").value);
    if (document.getElementById("ProduktEigenschaftString48Modal").value != "")
        ProduktEigenschaftString48 = escape(document.getElementById("ProduktEigenschaftString48Modal").value);
    if (document.getElementById("ProduktEigenschaftString49Modal").value != "")
        ProduktEigenschaftString49 = escape(document.getElementById("ProduktEigenschaftString49Modal").value);
    if (document.getElementById("ProduktEigenschaftString50Modal").value != "")
        ProduktEigenschaftString50 = escape(document.getElementById("ProduktEigenschaftString50Modal").value);

    if (document.getElementById("ProduktEigenschaftInt1Modal").value != "")
        ProduktEigenschaftInt1 = parseInt(document.getElementById("ProduktEigenschaftInt1Modal").value);
    if (document.getElementById("ProduktEigenschaftInt2Modal").value != "")
        ProduktEigenschaftInt2 = parseInt(document.getElementById("ProduktEigenschaftInt2Modal").value);
    if (document.getElementById("ProduktEigenschaftInt3Modal").value != "")
        ProduktEigenschaftInt3 = parseInt(document.getElementById("ProduktEigenschaftInt3Modal").value);
    if (document.getElementById("ProduktEigenschaftInt4Modal").value != "")
        ProduktEigenschaftInt4 = parseInt(document.getElementById("ProduktEigenschaftInt4Modal").value);
    if (document.getElementById("ProduktEigenschaftInt5Modal").value != "")
        ProduktEigenschaftInt5 = parseInt(document.getElementById("ProduktEigenschaftInt5Modal").value);
    if (document.getElementById("ProduktEigenschaftInt6Modal").value != "")
        ProduktEigenschaftInt6 = parseInt(document.getElementById("ProduktEigenschaftInt6Modal").value);
    if (document.getElementById("ProduktEigenschaftInt7Modal").value != "")
        ProduktEigenschaftInt7 = parseInt(document.getElementById("ProduktEigenschaftInt7Modal").value);
    if (document.getElementById("ProduktEigenschaftInt8Modal").value != "")
        ProduktEigenschaftInt8 = parseInt(document.getElementById("ProduktEigenschaftInt8Modal").value);
    if (document.getElementById("ProduktEigenschaftInt9Modal").value != "")
        ProduktEigenschaftInt9 = parseInt(document.getElementById("ProduktEigenschaftInt9Modal").value);
    if (document.getElementById("ProduktEigenschaftInt10Modal").value != "")
        ProduktEigenschaftInt10 = parseInt(document.getElementById("ProduktEigenschaftInt10Modal").value);
    if (document.getElementById("ProduktEigenschaftInt11Modal").value != "")
        ProduktEigenschaftInt11 = parseInt(document.getElementById("ProduktEigenschaftInt11Modal").value);
    if (document.getElementById("ProduktEigenschaftInt12Modal").value != "")
        ProduktEigenschaftInt12 = parseInt(document.getElementById("ProduktEigenschaftInt12Modal").value);
    if (document.getElementById("ProduktEigenschaftInt13Modal").value != "")
        ProduktEigenschaftInt13 = parseInt(document.getElementById("ProduktEigenschaftInt13Modal").value);
    if (document.getElementById("ProduktEigenschaftInt14Modal").value != "")
        ProduktEigenschaftInt14 = parseInt(document.getElementById("ProduktEigenschaftInt14Modal").value);
    if (document.getElementById("ProduktEigenschaftInt15Modal").value != "")
        ProduktEigenschaftInt15 = parseInt(document.getElementById("ProduktEigenschaftInt15Modal").value);
    if (document.getElementById("ProduktEigenschaftInt16Modal").value != "")
        ProduktEigenschaftInt16 = parseInt(document.getElementById("ProduktEigenschaftInt16Modal").value);
    if (document.getElementById("ProduktEigenschaftInt17Modal").value != "")
        ProduktEigenschaftInt17 = parseInt(document.getElementById("ProduktEigenschaftInt17Modal").value);
    if (document.getElementById("ProduktEigenschaftInt18Modal").value != "")
        ProduktEigenschaftInt18 = parseInt(document.getElementById("ProduktEigenschaftInt18Modal").value);
    if (document.getElementById("ProduktEigenschaftInt19Modal").value != "")
        ProduktEigenschaftInt19 = parseInt(document.getElementById("ProduktEigenschaftInt19Modal").value);
    if (document.getElementById("ProduktEigenschaftInt20Modal").value != "")
        ProduktEigenschaftInt20 = parseInt(document.getElementById("ProduktEigenschaftInt20Modal").value);
    if (document.getElementById("ProduktEigenschaftInt21Modal").value != "")
        ProduktEigenschaftInt21 = parseInt(document.getElementById("ProduktEigenschaftInt21Modal").value);
    if (document.getElementById("ProduktEigenschaftInt22Modal").value != "")
        ProduktEigenschaftInt22 = parseInt(document.getElementById("ProduktEigenschaftInt22Modal").value);
    if (document.getElementById("ProduktEigenschaftInt23Modal").value != "")
        ProduktEigenschaftInt23 = parseInt(document.getElementById("ProduktEigenschaftInt23Modal").value);
    if (document.getElementById("ProduktEigenschaftInt24Modal").value != "")
        ProduktEigenschaftInt24 = parseInt(document.getElementById("ProduktEigenschaftInt24Modal").value);
    if (document.getElementById("ProduktEigenschaftInt25Modal").value != "")
        ProduktEigenschaftInt25 = parseInt(document.getElementById("ProduktEigenschaftInt25Modal").value);
    if (document.getElementById("ProduktEigenschaftInt26Modal").value != "")
        ProduktEigenschaftInt26 = parseInt(document.getElementById("ProduktEigenschaftInt26Modal").value);
    if (document.getElementById("ProduktEigenschaftInt27Modal").value != "")
        ProduktEigenschaftInt27 = parseInt(document.getElementById("ProduktEigenschaftInt27Modal").value);
    if (document.getElementById("ProduktEigenschaftInt28Modal").value != "")
        ProduktEigenschaftInt28 = parseInt(document.getElementById("ProduktEigenschaftInt28Modal").value);
    if (document.getElementById("ProduktEigenschaftInt29Modal").value != "")
        ProduktEigenschaftInt29 = parseInt(document.getElementById("ProduktEigenschaftInt29Modal").value);
    if (document.getElementById("ProduktEigenschaftInt30Modal").value != "")
        ProduktEigenschaftInt30 = parseInt(document.getElementById("ProduktEigenschaftInt30Modal").value);
    if (document.getElementById("ProduktEigenschaftInt31Modal").value != "")
        ProduktEigenschaftInt31 = parseInt(document.getElementById("ProduktEigenschaftInt31Modal").value);
    if (document.getElementById("ProduktEigenschaftInt32Modal").value != "")
        ProduktEigenschaftInt32 = parseInt(document.getElementById("ProduktEigenschaftInt32Modal").value);
    if (document.getElementById("ProduktEigenschaftInt33Modal").value != "")
        ProduktEigenschaftInt33 = parseInt(document.getElementById("ProduktEigenschaftInt33Modal").value);
    if (document.getElementById("ProduktEigenschaftInt34Modal").value != "")
        ProduktEigenschaftInt34 = parseInt(document.getElementById("ProduktEigenschaftInt34Modal").value);
    if (document.getElementById("ProduktEigenschaftInt35Modal").value != "")
        ProduktEigenschaftInt35 = parseInt(document.getElementById("ProduktEigenschaftInt35Modal").value);
    if (document.getElementById("ProduktEigenschaftInt36Modal").value != "")
        ProduktEigenschaftInt36 = parseInt(document.getElementById("ProduktEigenschaftInt36Modal").value);
    if (document.getElementById("ProduktEigenschaftInt37Modal").value != "")
        ProduktEigenschaftInt37 = parseInt(document.getElementById("ProduktEigenschaftInt37Modal").value);
    if (document.getElementById("ProduktEigenschaftInt38Modal").value != "")
        ProduktEigenschaftInt38 = parseInt(document.getElementById("ProduktEigenschaftInt38Modal").value);
    if (document.getElementById("ProduktEigenschaftInt39Modal").value != "")
        ProduktEigenschaftInt39 = parseInt(document.getElementById("ProduktEigenschaftInt39Modal").value);
    if (document.getElementById("ProduktEigenschaftInt40Modal").value != "")
        ProduktEigenschaftInt40 = parseInt(document.getElementById("ProduktEigenschaftInt40Modal").value);

    if (document.getElementById("ProduktEigenschaftFloat1Modal").value != "")
        ProduktEigenschaftFloat1 = parseFloat(document.getElementById("ProduktEigenschaftFloat1Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat2Modal").value != "")
        ProduktEigenschaftFloat2 = parseFloat(document.getElementById("ProduktEigenschaftFloat2Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat3Modal").value != "")
        ProduktEigenschaftFloat3 = parseFloat(document.getElementById("ProduktEigenschaftFloat3Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat4Modal").value != "")
        ProduktEigenschaftFloat4 = parseFloat(document.getElementById("ProduktEigenschaftFloat4Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat5Modal").value != "")
        ProduktEigenschaftFloat5 = parseFloat(document.getElementById("ProduktEigenschaftFloat5Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat6Modal").value != "")
        ProduktEigenschaftFloat6 = parseFloat(document.getElementById("ProduktEigenschaftFloat6Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat7Modal").value != "")
        ProduktEigenschaftFloat7 = parseFloat(document.getElementById("ProduktEigenschaftFloat7Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat8Modal").value != "")
        ProduktEigenschaftFloat8 = parseFloat(document.getElementById("ProduktEigenschaftFloat8Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat9Modal").value != "")
        ProduktEigenschaftFloat9 = parseFloat(document.getElementById("ProduktEigenschaftFloat9Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat10Modal").value != "")
        ProduktEigenschaftFloat10 = parseFloat(document.getElementById("ProduktEigenschaftFloat10Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat11Modal").value != "")
        ProduktEigenschaftFloat11 = parseFloat(document.getElementById("ProduktEigenschaftFloat11Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat12Modal").value != "")
        ProduktEigenschaftFloat12 = parseFloat(document.getElementById("ProduktEigenschaftFloat12Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat13Modal").value != "")
        ProduktEigenschaftFloat13 = parseFloat(document.getElementById("ProduktEigenschaftFloat13Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat14Modal").value != "")
        ProduktEigenschaftFloat14 = parseFloat(document.getElementById("ProduktEigenschaftFloat14Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat15Modal").value != "")
        ProduktEigenschaftFloat15 = parseFloat(document.getElementById("ProduktEigenschaftFloat15Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat16Modal").value != "")
        ProduktEigenschaftFloat16 = parseFloat(document.getElementById("ProduktEigenschaftFloat16Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat17Modal").value != "")
        ProduktEigenschaftFloat17 = parseFloat(document.getElementById("ProduktEigenschaftFloat17Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat18Modal").value != "")
        ProduktEigenschaftFloat18 = parseFloat(document.getElementById("ProduktEigenschaftFloat18Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat19Modal").value != "")
        ProduktEigenschaftFloat19 = parseFloat(document.getElementById("ProduktEigenschaftFloat19Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat20Modal").value != "")
        ProduktEigenschaftFloat20 = parseFloat(document.getElementById("ProduktEigenschaftFloat20Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat21Modal").value != "")
        ProduktEigenschaftFloat21 = parseFloat(document.getElementById("ProduktEigenschaftFloat21Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat22Modal").value != "")
        ProduktEigenschaftFloat22 = parseFloat(document.getElementById("ProduktEigenschaftFloat22Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat23Modal").value != "")
        ProduktEigenschaftFloat23 = parseFloat(document.getElementById("ProduktEigenschaftFloat23Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat24Modal").value != "")
        ProduktEigenschaftFloat24 = parseFloat(document.getElementById("ProduktEigenschaftFloat24Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat25Modal").value != "")
        ProduktEigenschaftFloat25 = parseFloat(document.getElementById("ProduktEigenschaftFloat25Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat26Modal").value != "")
        ProduktEigenschaftFloat26 = parseFloat(document.getElementById("ProduktEigenschaftFloat26Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat27Modal").value != "")
        ProduktEigenschaftFloat27 = parseFloat(document.getElementById("ProduktEigenschaftFloat27Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat28Modal").value != "")
        ProduktEigenschaftFloat28 = parseFloat(document.getElementById("ProduktEigenschaftFloat28Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat29Modal").value != "")
        ProduktEigenschaftFloat29 = parseFloat(document.getElementById("ProduktEigenschaftFloat29Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat30Modal").value != "")
        ProduktEigenschaftFloat30 = parseFloat(document.getElementById("ProduktEigenschaftFloat30Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat31Modal").value != "")
        ProduktEigenschaftFloat31 = parseFloat(document.getElementById("ProduktEigenschaftFloat31Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat32Modal").value != "")
        ProduktEigenschaftFloat32 = parseFloat(document.getElementById("ProduktEigenschaftFloat32Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat33Modal").value != "")
        ProduktEigenschaftFloat33 = parseFloat(document.getElementById("ProduktEigenschaftFloat33Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat34Modal").value != "")
        ProduktEigenschaftFloat34 = parseFloat(document.getElementById("ProduktEigenschaftFloat34Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat35Modal").value != "")
        ProduktEigenschaftFloat35 = parseFloat(document.getElementById("ProduktEigenschaftFloat35Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat36Modal").value != "")
        ProduktEigenschaftFloat36 = parseFloat(document.getElementById("ProduktEigenschaftFloat36Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat37Modal").value != "")
        ProduktEigenschaftFloat37 = parseFloat(document.getElementById("ProduktEigenschaftFloat37Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat38Modal").value != "")
        ProduktEigenschaftFloat38 = parseFloat(document.getElementById("ProduktEigenschaftFloat38Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat39Modal").value != "")
        ProduktEigenschaftFloat39 = parseFloat(document.getElementById("ProduktEigenschaftFloat39Modal").value);
    if (document.getElementById("ProduktEigenschaftFloat40Modal").value != "")
        ProduktEigenschaftFloat40 = parseFloat(document.getElementById("ProduktEigenschaftFloat40Modal").value);

    if (document.getElementById("ProduktEigenschaftBIT1Modal").checked)
        ProduktEigenschaftBIT1 = 1;
    if (document.getElementById("ProduktEigenschaftBIT2Modal").checked)
        ProduktEigenschaftBIT2 = 1;
    if (document.getElementById("ProduktEigenschaftBIT3Modal").checked)
        ProduktEigenschaftBIT3 = 1;
    if (document.getElementById("ProduktEigenschaftBIT4Modal").checked)
        ProduktEigenschaftBIT4 = 1;
    if (document.getElementById("ProduktEigenschaftBIT5Modal").checked)
        ProduktEigenschaftBIT5 = 1;
    if (document.getElementById("ProduktEigenschaftBIT6Modal").checked)
        ProduktEigenschaftBIT6 = 1;
    if (document.getElementById("ProduktEigenschaftBIT7Modal").checked)
        ProduktEigenschaftBIT7 = 1;
    if (document.getElementById("ProduktEigenschaftBIT8Modal").checked)
        ProduktEigenschaftBIT8 = 1;
    if (document.getElementById("ProduktEigenschaftBIT9Modal").checked)
        ProduktEigenschaftBIT9 = 1;
    if (document.getElementById("ProduktEigenschaftBIT10Modal").checked)
        ProduktEigenschaftBIT10 = 1;

    var sql = "";
    for (var i = 0; i < ProduktEigenschaftModalArr.length; i++) {
        if (sql != "")
            sql += ",";
        if (String(ProduktEigenschaftModalArr[i]).indexOf("Float") > 0)
            eval('sql += String(ProduktEigenschaftModalArr[i]) + " = "+' + ProduktEigenschaftModalArr[i] + '+"";');
        else if (String(ProduktEigenschaftModalArr[i]).indexOf("Int") > 0 || String(ProduktEigenschaftModalArr[i]).indexOf("BIT") > 0)
            eval('sql += String(ProduktEigenschaftModalArr[i]) + " = "+' + ProduktEigenschaftModalArr[i] + '+"";');
        else
            eval('sql += String(ProduktEigenschaftModalArr[i]) + " = \'"+' + ProduktEigenschaftModalArr[i] + '+"\'";');
    }

    if (document.getElementById("Datum2Modal").value != "")
        sql += ",Datum2='" + escape(document.getElementById("Datum2Modal").value) + "'";
    if (document.getElementById("Datum3Modal").value != "")
        sql += ",Datum3='" + escape(document.getElementById("Datum3Modal").value) + "'";
    if (document.getElementById("Datum4Modal").value != "")
        sql += ",Datum4='" + escape(document.getElementById("Datum4Modal").value) + "'";
    //if(document.getElementById("StatusModal").value!="")	sql += ",Status="+parseInt(document.getElementById("StatusModal").value)+"";	

    sql = "UPDATE `laaver`.Produkt_Eigenschaft SET " + sql + " WHERE prIDX=" + mainIDX + "";

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

function showNewProduktEigenschaftModal() {
    $('#exampleNewModal').modal('show');
}

function saveNewProduktEigenschaft() {
    //新增对象所需的参数
    var ProduktEigenschaftNewArr = ["ProduktEigenschaftString1", "ProduktEigenschaftString2", "ProduktEigenschaftString3", "ProduktEigenschaftString4"];
    var sql = ""
      , sql1 = ""
      , sql2 = "";

    for (var i = 0; i < ProduktEigenschaftNewArr.length; i++) {
        if (sql1 != "")
            sql1 += ",";
        sql1 += String(ProduktEigenschaftNewArr[i]);
    }
    for (var i = 0; i < ProduktEigenschaftNewArr.length; i++) {
        if (sql2 != "")
            sql2 += ",";
        sql2 += "'" + escape(document.getElementById(String(ProduktEigenschaftNewArr[i]) + "New").value) + "'";
    }

    var sql = "INSERT INTO `laaver`.Produkt_Eigenschaft (" + sql1 + ") VALUES (" + sql2 + ")";

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

function showProduktEigenschaftAttributObj(Attribut, Type, indexA, indexB, indexC, indexD, indexE, indexF, lang) {
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

function getProduktEigenschaftAttributName(param) {
    var txt = "";
    for (var i = 0; i < showProduktEigenschaftAttributArr.length; i++) {
        if (showProduktEigenschaftAttributArr[i].Attribut == param)
            txt = unescape(showProduktEigenschaftAttributArr[i].lang[langNum]);
    }

    return txt;
}

document.addEventListener("DOMContentLoaded", function() {
    var PrintArr = new Array()
      , PrintObjTXT1 = ""
      , PrintObjTXT2 = "";
    for (var i = 0; i < showProduktEigenschaftAttributArr.length; i++) {
        showProduktEigenschaftAttributArr.sort(compare('indexD'));
        if (showProduktEigenschaftAttributArr[i].indexD > 0) {
            PrintArr.push(unescape(showProduktEigenschaftAttributArr[i].lang[langNum]));
            PrintObjTXT1 += "" + showProduktEigenschaftAttributArr[i].Attribut + ",";
            PrintObjTXT2 += "this." + showProduktEigenschaftAttributArr[i].Attribut + "=" + showProduktEigenschaftAttributArr[i].Attribut + ";";
        }
    }
    eval("function PrintObj(" + PrintObjTXT1.substring(0, PrintObjTXT1.length - 1) + "){" + PrintObjTXT2 + "}");
});

function exportExcel() {
    showLoadingDiv();
    showProduktEigenschaftAttributArr.sort(compare('indexD'));
    var filename = getDatumInterval(0) + "-" + "ProduktEigenschaft-" + String(new Date().getTime()).substring(6);
    var ExcelHeaderColumns = new Array();
    var ExcelData = new Array();
    var Summe = 0
      , iCount = 0;

    var printTXT1 = ""
      , printTXT2 = "";

    for (var i = 0; i < ProduktEigenschaftArr.length; i++) {
        for (var j = 0; j < showProduktEigenschaftAttributArr.length; j++) {
            eval("if(showProduktEigenschaftAttributArr[j].indexD>0){" + "if(showProduktEigenschaftAttributArr[j].indexD==1) printTXT1 += \"'PE'+parseInt(10000+parseInt(ProduktEigenschaftArr[i]." + showProduktEigenschaftAttributArr[j].Attribut + ")),\";" + "else if(showProduktEigenschaftAttributArr[j].Attribut=='Status'){ " + "for(var m=0;m<ProduktEigenschaftStatusArr.length;m++)if(ProduktEigenschaftStatusArr[m][4]==ProduktEigenschaftArr[i].Status) printTXT1 += \"unescape(getProduktEigenschaftStatusName(ProduktEigenschaftArr[i].Status)),\";}" + "else if(showProduktEigenschaftAttributArr[j].Type=='BIT') printTXT1 += \"(parseInt(ProduktEigenschaftArr[i]." + showProduktEigenschaftAttributArr[j].Attribut + ")==1?'Yes':'No'),\";" + "else printTXT1 += \"unescape(ProduktEigenschaftArr[i]." + showProduktEigenschaftAttributArr[j].Attribut + "),\";" + "}");
        }
        eval("ExcelData.push(new PrintObj(" + printTXT1.substring(0, printTXT1.length - 1) + "));");
        printTXT1 = "";
        Summe += parseFloat(ProduktEigenschaftArr[i].ProduktEigenschaftFloat1);
    }

    printTXT1 = "",
    printTXT2 = "";
    for (var j = 0; j < showProduktEigenschaftAttributArr.length; j++) {
        if (showProduktEigenschaftAttributArr[j].indexD > 0) {
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
            "WorksheetName": "ProduktEigenschaft",
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

function getProduktEigenschaftStatusName(id) {
    if (id != "" && ProduktEigenschaftStatusArr.length > 0) {
        for (var i = 0; i < ProduktEigenschaftStatusArr.length; i++) {
            if (ProduktEigenschaftStatusArr[i][4] == id) {
                return unescape(ProduktEigenschaftStatusArr[i][langNum]);
                break;
            }
        }
    }
}

function getProduktEigenschaftPosition(num) {
    for (let i = 0; i < ProduktEigenschaftInt1Arr.length; i++) {
        if (ProduktEigenschaftInt1Arr[i][4] == num) {
            switch (lang) {
            case "en":
                return ProduktEigenschaftInt1Arr[i][langNum];
            case "de":
                return ProduktEigenschaftInt1Arr[i][langNum];
            case "fr":
                return ProduktEigenschaftInt1Arr[i][langNum];
            case "cn":
                return ProduktEigenschaftInt1Arr[i][langNum];
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
        const fileName = "ProdukeEigenschaft_"+mainIDX;
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
            uploadStatus.innerHTML += "<div style='margin-top:5px;'>" + filename + "</div>";
			BildShow.innerHTML += "<img src='https://intranet.laaver.de/file/upload/" + filename + "' style='width:100%;' />";
        }
        );
    }
    ).catch(error => {
        uploadStatus.innerHTML = "Error: " + error + "";
    }
    );
}
/**** multiple files upload end ****/

/****
CREATE TABLE IF NOT EXISTS `Produkt_Eigenschaft` (
	`prIDX` int(11) NOT NULL AUTO_INCREMENT,
	`frIDX` int(11) DEFAULT NULL,
	`Status` int(11) NOT NULL DEFAULT 1,
	`Datum1` datetime NOT NULL DEFAULT current_timestamp(),
	`Datum2` datetime DEFAULT NULL,
	`Datum3` datetime DEFAULT NULL,
	`Datum4` datetime DEFAULT NULL,
	`ProduktEigenschaftString1` varchar(500) NOT NULL DEFAULT '',
	`ProduktEigenschaftString2` varchar(500) NOT NULL DEFAULT '',
	`ProduktEigenschaftString3` varchar(500) NOT NULL DEFAULT '',
	`ProduktEigenschaftString4` varchar(500) NOT NULL DEFAULT '',
	`ProduktEigenschaftString5` varchar(500) NOT NULL DEFAULT '',
	`ProduktEigenschaftString6` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString7` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString8` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString9` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString10` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString11` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString12` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString13` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString14` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString15` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString16` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString17` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString18` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString19` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString20` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString21` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString22` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString23` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString24` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString25` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString26` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString27` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString28` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString29` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString30` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString31` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString32` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString33` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString34` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString35` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString36` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString37` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString38` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString39` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString40` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString41` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString42` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString43` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString44` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString45` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString46` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString47` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString48` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString49` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftString50` varchar(100) NOT NULL DEFAULT '',
	`ProduktEigenschaftInt1` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt2` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt3` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt4` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt5` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt6` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt7` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt8` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt9` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt10` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt11` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt12` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt13` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt14` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt15` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt16` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt17` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt18` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt19` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt20` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt21` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt22` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt23` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt24` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt25` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt26` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt27` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt28` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt29` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt30` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt31` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt32` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt33` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt34` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt35` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt36` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt37` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt38` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt39` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftInt40` int(11) NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat1` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat2` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat3` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat4` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat5` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat6` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat7` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat8` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat9` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat10` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat11` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat12` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat13` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat14` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat15` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat16` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat17` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat18` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat19` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat20` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat21` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat22` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat23` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat24` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat25` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat26` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat27` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat28` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat29` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat30` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat31` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat32` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat33` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat34` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat35` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat36` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat37` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat38` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat39` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftFloat40` float NOT NULL DEFAULT 0,
	`ProduktEigenschaftBIT1` bit(1) NOT NULL DEFAULT b'0',
	`ProduktEigenschaftBIT2` bit(1) NOT NULL DEFAULT b'0',
	`ProduktEigenschaftBIT3` bit(1) NOT NULL DEFAULT b'0',
	`ProduktEigenschaftBIT4` bit(1) NOT NULL DEFAULT b'0',
	`ProduktEigenschaftBIT5` bit(1) NOT NULL DEFAULT b'0',
	`ProduktEigenschaftBIT6` bit(1) NOT NULL DEFAULT b'0',
	`ProduktEigenschaftBIT7` bit(1) NOT NULL DEFAULT b'0',
	`ProduktEigenschaftBIT8` bit(1) NOT NULL DEFAULT b'0',
	`ProduktEigenschaftBIT9` bit(1) NOT NULL DEFAULT b'0',
	`ProduktEigenschaftBIT10` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`prIDX`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
****/

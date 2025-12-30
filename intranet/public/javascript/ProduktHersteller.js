var globalIDX = 0;
if (String(GetQueryString("prIDX")) != "" && String(GetQueryString("prIDX")) != "null" && String(GetQueryString("prIDX")) != "undefined")
    globalIDX = parseInt(GetQueryString("prIDX"));
var mainIDX = 0;

var ProduktHerstellerArr = new Array();
var showProduktHerstellerAttributArr = new Array();

showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("prIDX","parseInt",1,1,1,1,1,1,new Array("Serial Number","Seriennummer","Numéro de série","序列号")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("frIDX","parseInt",0,0,0,0,0,0,new Array("frIDX", "frIDX", "frIDX", "frIDX")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("Datum1","String",0,0,0,0,0,0,new Array("Creation Date","Erstellungsdatum","Date de création","创建日期")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("Datum2","String",0,0,0,0,0,0,new Array("Modification Date", "Änderungsdatum", "Date de modification", "更改日期")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("Datum3","String",0,0,0,0,0,0,new Array("Datum3","Datum3","Datum3","Datum3")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("Datum4","String",0,0,0,0,0,0,new Array("Datum4","Datum4","Datum4","Datum4")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("Status","parseInt",0,0,0,0,0,0,new Array("Status","Status","Statut","状态")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString1","String",0,10,10,10,10,10,new Array("Manufacturer Name", "Herstellername", "Nom du fabricant", "厂家名")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString2","String",0,11,11,11,11,11,new Array("Manufacturer Code", "Herstellercode", "Code fabricant", "厂家号")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString3","String",0,0,12,12,12,12,new Array("Address", "Adresse", "Adresse", "地址")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString4","String",0,13,13,13,13,13,new Array("Phone", "Telefon", "Téléphone", "电话")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString5","String",0,14,14,14,14,14,new Array("Email", "E-Mail", "Email", "邮件")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString6","String",0,0,15,15,15,15,new Array("Remark", "Bemerkung", "Remarque", "备注")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString7","String",0,0,0,0,0,0,new Array("ProduktHerstellerString7","ProduktHerstellerString7","ProduktHerstellerString7","ProduktHerstellerString7")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString8","String",0,0,0,0,0,0,new Array("ProduktHerstellerString8","ProduktHerstellerString8","ProduktHerstellerString8","ProduktHerstellerString8")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString9","String",0,0,0,0,0,0,new Array("ProduktHerstellerString9","ProduktHerstellerString9","ProduktHerstellerString9","ProduktHerstellerString9")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString10","String",0,0,0,0,0,0,new Array("ProduktHerstellerString10","ProduktHerstellerString10","ProduktHerstellerString10","ProduktHerstellerString10")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString11","String",0,0,0,0,0,0,new Array("ProduktHerstellerString11","ProduktHerstellerString11","ProduktHerstellerString11","ProduktHerstellerString11")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString12","String",0,0,0,0,0,0,new Array("ProduktHerstellerString12","ProduktHerstellerString12","ProduktHerstellerString12","ProduktHerstellerString12")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString13","String",0,0,0,0,0,0,new Array("ProduktHerstellerString13","ProduktHerstellerString13","ProduktHerstellerString13","ProduktHerstellerString13")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString14","String",0,0,0,0,0,0,new Array("ProduktHerstellerString14","ProduktHerstellerString14","ProduktHerstellerString14","ProduktHerstellerString14")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString15","String",0,0,0,0,0,0,new Array("ProduktHerstellerString15","ProduktHerstellerString15","ProduktHerstellerString15","ProduktHerstellerString15")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString16","String",0,0,0,0,0,0,new Array("ProduktHerstellerString16","ProduktHerstellerString16","ProduktHerstellerString16","ProduktHerstellerString16")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString17","String",0,0,0,0,0,0,new Array("ProduktHerstellerString17","ProduktHerstellerString17","ProduktHerstellerString17","ProduktHerstellerString17")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString18","String",0,0,0,0,0,0,new Array("ProduktHerstellerString18","ProduktHerstellerString18","ProduktHerstellerString18","ProduktHerstellerString18")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString19","String",0,0,0,0,0,0,new Array("ProduktHerstellerString19","ProduktHerstellerString19","ProduktHerstellerString19","ProduktHerstellerString19")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString20","String",0,0,0,0,0,0,new Array("ProduktHerstellerString20","ProduktHerstellerString20","ProduktHerstellerString20","ProduktHerstellerString20")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString21","String",0,0,0,0,0,0,new Array("ProduktHerstellerString21","ProduktHerstellerString21","ProduktHerstellerString21","ProduktHerstellerString21")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString22","String",0,0,0,0,0,0,new Array("ProduktHerstellerString22","ProduktHerstellerString22","ProduktHerstellerString22","ProduktHerstellerString22")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString23","String",0,0,0,0,0,0,new Array("ProduktHerstellerString23","ProduktHerstellerString23","ProduktHerstellerString23","ProduktHerstellerString23")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString24","String",0,0,0,0,0,0,new Array("ProduktHerstellerString24","ProduktHerstellerString24","ProduktHerstellerString24","ProduktHerstellerString24")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString25","String",0,0,0,0,0,0,new Array("ProduktHerstellerString25","ProduktHerstellerString25","ProduktHerstellerString25","ProduktHerstellerString25")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString26","String",0,0,0,0,0,0,new Array("ProduktHerstellerString26","ProduktHerstellerString26","ProduktHerstellerString26","ProduktHerstellerString26")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString27","String",0,0,0,0,0,0,new Array("ProduktHerstellerString27","ProduktHerstellerString27","ProduktHerstellerString27","ProduktHerstellerString27")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString28","String",0,0,0,0,0,0,new Array("ProduktHerstellerString28","ProduktHerstellerString28","ProduktHerstellerString28","ProduktHerstellerString28")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString29","String",0,0,0,0,0,0,new Array("ProduktHerstellerString29","ProduktHerstellerString29","ProduktHerstellerString29","ProduktHerstellerString29")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString30","String",0,0,0,0,0,0,new Array("ProduktHerstellerString30","ProduktHerstellerString30","ProduktHerstellerString30","ProduktHerstellerString30")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString31","String",0,0,0,0,0,0,new Array("ProduktHerstellerString31","ProduktHerstellerString31","ProduktHerstellerString31","ProduktHerstellerString31")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString32","String",0,0,0,0,0,0,new Array("ProduktHerstellerString32","ProduktHerstellerString32","ProduktHerstellerString32","ProduktHerstellerString32")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString33","String",0,0,0,0,0,0,new Array("ProduktHerstellerString33","ProduktHerstellerString33","ProduktHerstellerString33","ProduktHerstellerString33")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString34","String",0,0,0,0,0,0,new Array("ProduktHerstellerString34","ProduktHerstellerString34","ProduktHerstellerString34","ProduktHerstellerString34")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString35","String",0,0,0,0,0,0,new Array("ProduktHerstellerString35","ProduktHerstellerString35","ProduktHerstellerString35","ProduktHerstellerString35")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString36","String",0,0,0,0,0,0,new Array("ProduktHerstellerString36","ProduktHerstellerString36","ProduktHerstellerString36","ProduktHerstellerString36")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString37","String",0,0,0,0,0,0,new Array("ProduktHerstellerString37","ProduktHerstellerString37","ProduktHerstellerString37","ProduktHerstellerString37")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString38","String",0,0,0,0,0,0,new Array("ProduktHerstellerString38","ProduktHerstellerString38","ProduktHerstellerString38","ProduktHerstellerString38")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString39","String",0,0,0,0,0,0,new Array("ProduktHerstellerString39","ProduktHerstellerString39","ProduktHerstellerString39","ProduktHerstellerString39")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString40","String",0,0,0,0,0,0,new Array("ProduktHerstellerString40","ProduktHerstellerString40","ProduktHerstellerString40","ProduktHerstellerString40")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString41","String",0,0,0,0,0,0,new Array("ProduktHerstellerString41","ProduktHerstellerString41","ProduktHerstellerString41","ProduktHerstellerString41")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString42","String",0,0,0,0,0,0,new Array("ProduktHerstellerString42","ProduktHerstellerString42","ProduktHerstellerString42","ProduktHerstellerString42")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString43","String",0,0,0,0,0,0,new Array("ProduktHerstellerString43","ProduktHerstellerString43","ProduktHerstellerString43","ProduktHerstellerString43")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString44","String",0,0,0,0,0,0,new Array("ProduktHerstellerString44","ProduktHerstellerString44","ProduktHerstellerString44","ProduktHerstellerString44")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString45","String",0,0,0,0,0,0,new Array("ProduktHerstellerString45","ProduktHerstellerString45","ProduktHerstellerString45","ProduktHerstellerString45")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString46","String",0,0,0,0,0,0,new Array("ProduktHerstellerString46","ProduktHerstellerString46","ProduktHerstellerString46","ProduktHerstellerString46")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString47","String",0,0,0,0,0,0,new Array("ProduktHerstellerString47","ProduktHerstellerString47","ProduktHerstellerString47","ProduktHerstellerString47")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString48","String",0,0,0,0,0,0,new Array("ProduktHerstellerString48","ProduktHerstellerString48","ProduktHerstellerString48","ProduktHerstellerString48")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString49","String",0,0,0,0,0,0,new Array("ProduktHerstellerString49","ProduktHerstellerString49","ProduktHerstellerString49","ProduktHerstellerString49")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerString50","String",0,0,0,0,0,0,new Array("ProduktHerstellerString50","ProduktHerstellerString50","ProduktHerstellerString50","ProduktHerstellerString50")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt1","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt1","ProduktHerstellerInt1","ProduktHerstellerInt1","ProduktHerstellerInt1")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt2","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt2","ProduktHerstellerInt2","ProduktHerstellerInt2","ProduktHerstellerInt2")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt3","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt3","ProduktHerstellerInt3","ProduktHerstellerInt3","ProduktHerstellerInt3")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt4","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt4","ProduktHerstellerInt4","ProduktHerstellerInt4","ProduktHerstellerInt4")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt5","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt5","ProduktHerstellerInt5","ProduktHerstellerInt5","ProduktHerstellerInt5")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt6","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt6","ProduktHerstellerInt6","ProduktHerstellerInt6","ProduktHerstellerInt6")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt7","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt7","ProduktHerstellerInt7","ProduktHerstellerInt7","ProduktHerstellerInt7")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt8","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt8","ProduktHerstellerInt8","ProduktHerstellerInt8","ProduktHerstellerInt8")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt9","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt9","ProduktHerstellerInt9","ProduktHerstellerInt9","ProduktHerstellerInt9")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt10","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt10","ProduktHerstellerInt10","ProduktHerstellerInt10","ProduktHerstellerInt10")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt11","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt11","ProduktHerstellerInt11","ProduktHerstellerInt11","ProduktHerstellerInt11")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt12","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt12","ProduktHerstellerInt12","ProduktHerstellerInt12","ProduktHerstellerInt12")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt13","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt13","ProduktHerstellerInt13","ProduktHerstellerInt13","ProduktHerstellerInt13")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt14","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt14","ProduktHerstellerInt14","ProduktHerstellerInt14","ProduktHerstellerInt14")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt15","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt15","ProduktHerstellerInt15","ProduktHerstellerInt15","ProduktHerstellerInt15")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt16","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt16","ProduktHerstellerInt16","ProduktHerstellerInt16","ProduktHerstellerInt16")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt17","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt17","ProduktHerstellerInt17","ProduktHerstellerInt17","ProduktHerstellerInt17")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt18","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt18","ProduktHerstellerInt18","ProduktHerstellerInt18","ProduktHerstellerInt18")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt19","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt19","ProduktHerstellerInt19","ProduktHerstellerInt19","ProduktHerstellerInt19")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt20","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt20","ProduktHerstellerInt20","ProduktHerstellerInt20","ProduktHerstellerInt20")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt21","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt21","ProduktHerstellerInt21","ProduktHerstellerInt21","ProduktHerstellerInt21")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt22","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt22","ProduktHerstellerInt22","ProduktHerstellerInt22","ProduktHerstellerInt22")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt23","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt23","ProduktHerstellerInt23","ProduktHerstellerInt23","ProduktHerstellerInt23")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt24","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt24","ProduktHerstellerInt24","ProduktHerstellerInt24","ProduktHerstellerInt24")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt25","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt25","ProduktHerstellerInt25","ProduktHerstellerInt25","ProduktHerstellerInt25")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt26","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt26","ProduktHerstellerInt26","ProduktHerstellerInt26","ProduktHerstellerInt26")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt27","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt27","ProduktHerstellerInt27","ProduktHerstellerInt27","ProduktHerstellerInt27")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt28","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt28","ProduktHerstellerInt28","ProduktHerstellerInt28","ProduktHerstellerInt28")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt29","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt29","ProduktHerstellerInt29","ProduktHerstellerInt29","ProduktHerstellerInt29")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt30","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt30","ProduktHerstellerInt30","ProduktHerstellerInt30","ProduktHerstellerInt30")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt31","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt31","ProduktHerstellerInt31","ProduktHerstellerInt31","ProduktHerstellerInt31")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt32","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt32","ProduktHerstellerInt32","ProduktHerstellerInt32","ProduktHerstellerInt32")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt33","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt33","ProduktHerstellerInt33","ProduktHerstellerInt33","ProduktHerstellerInt33")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt34","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt34","ProduktHerstellerInt34","ProduktHerstellerInt34","ProduktHerstellerInt34")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt35","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt35","ProduktHerstellerInt35","ProduktHerstellerInt35","ProduktHerstellerInt35")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt36","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt36","ProduktHerstellerInt36","ProduktHerstellerInt36","ProduktHerstellerInt36")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt37","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt37","ProduktHerstellerInt37","ProduktHerstellerInt37","ProduktHerstellerInt37")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt38","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt38","ProduktHerstellerInt38","ProduktHerstellerInt38","ProduktHerstellerInt38")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt39","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt39","ProduktHerstellerInt39","ProduktHerstellerInt39","ProduktHerstellerInt39")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerInt40","Int",0,0,0,0,0,0,new Array("ProduktHerstellerInt40","ProduktHerstellerInt40","ProduktHerstellerInt40","ProduktHerstellerInt40")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat1","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat1","ProduktHerstellerFloat1","ProduktHerstellerFloat1","ProduktHerstellerFloat1")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat2","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat2","ProduktHerstellerFloat2","ProduktHerstellerFloat2","ProduktHerstellerFloat2")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat3","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat3","ProduktHerstellerFloat3","ProduktHerstellerFloat3","ProduktHerstellerFloat3")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat4","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat4","ProduktHerstellerFloat4","ProduktHerstellerFloat4","ProduktHerstellerFloat4")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat5","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat5","ProduktHerstellerFloat5","ProduktHerstellerFloat5","ProduktHerstellerFloat5")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat6","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat6","ProduktHerstellerFloat6","ProduktHerstellerFloat6","ProduktHerstellerFloat6")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat7","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat7","ProduktHerstellerFloat7","ProduktHerstellerFloat7","ProduktHerstellerFloat7")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat8","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat8","ProduktHerstellerFloat8","ProduktHerstellerFloat8","ProduktHerstellerFloat8")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat9","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat9","ProduktHerstellerFloat9","ProduktHerstellerFloat9","ProduktHerstellerFloat9")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat10","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat10","ProduktHerstellerFloat10","ProduktHerstellerFloat10","ProduktHerstellerFloat10")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat11","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat11","ProduktHerstellerFloat11","ProduktHerstellerFloat11","ProduktHerstellerFloat11")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat12","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat12","ProduktHerstellerFloat12","ProduktHerstellerFloat12","ProduktHerstellerFloat12")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat13","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat13","ProduktHerstellerFloat13","ProduktHerstellerFloat13","ProduktHerstellerFloat13")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat14","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat14","ProduktHerstellerFloat14","ProduktHerstellerFloat14","ProduktHerstellerFloat14")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat15","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat15","ProduktHerstellerFloat15","ProduktHerstellerFloat15","ProduktHerstellerFloat15")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat16","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat16","ProduktHerstellerFloat16","ProduktHerstellerFloat16","ProduktHerstellerFloat16")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat17","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat17","ProduktHerstellerFloat17","ProduktHerstellerFloat17","ProduktHerstellerFloat17")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat18","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat18","ProduktHerstellerFloat18","ProduktHerstellerFloat18","ProduktHerstellerFloat18")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat19","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat19","ProduktHerstellerFloat19","ProduktHerstellerFloat19","ProduktHerstellerFloat19")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat20","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat20","ProduktHerstellerFloat20","ProduktHerstellerFloat20","ProduktHerstellerFloat20")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat21","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat21","ProduktHerstellerFloat21","ProduktHerstellerFloat21","ProduktHerstellerFloat21")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat22","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat22","ProduktHerstellerFloat22","ProduktHerstellerFloat22","ProduktHerstellerFloat22")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat23","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat23","ProduktHerstellerFloat23","ProduktHerstellerFloat23","ProduktHerstellerFloat23")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat24","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat24","ProduktHerstellerFloat24","ProduktHerstellerFloat24","ProduktHerstellerFloat24")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat25","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat25","ProduktHerstellerFloat25","ProduktHerstellerFloat25","ProduktHerstellerFloat25")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat26","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat26","ProduktHerstellerFloat26","ProduktHerstellerFloat26","ProduktHerstellerFloat26")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat27","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat27","ProduktHerstellerFloat27","ProduktHerstellerFloat27","ProduktHerstellerFloat27")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat28","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat28","ProduktHerstellerFloat28","ProduktHerstellerFloat28","ProduktHerstellerFloat28")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat29","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat29","ProduktHerstellerFloat29","ProduktHerstellerFloat29","ProduktHerstellerFloat29")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat30","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat30","ProduktHerstellerFloat30","ProduktHerstellerFloat30","ProduktHerstellerFloat30")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat31","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat31","ProduktHerstellerFloat31","ProduktHerstellerFloat31","ProduktHerstellerFloat31")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat32","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat32","ProduktHerstellerFloat32","ProduktHerstellerFloat32","ProduktHerstellerFloat32")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat33","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat33","ProduktHerstellerFloat33","ProduktHerstellerFloat33","ProduktHerstellerFloat33")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat34","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat34","ProduktHerstellerFloat34","ProduktHerstellerFloat34","ProduktHerstellerFloat34")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat35","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat35","ProduktHerstellerFloat35","ProduktHerstellerFloat35","ProduktHerstellerFloat35")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat36","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat36","ProduktHerstellerFloat36","ProduktHerstellerFloat36","ProduktHerstellerFloat36")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat37","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat37","ProduktHerstellerFloat37","ProduktHerstellerFloat37","ProduktHerstellerFloat37")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat38","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat38","ProduktHerstellerFloat38","ProduktHerstellerFloat38","ProduktHerstellerFloat38")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat39","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat39","ProduktHerstellerFloat39","ProduktHerstellerFloat39","ProduktHerstellerFloat39")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerFloat40","Float",0,0,0,0,0,0,new Array("ProduktHerstellerFloat40","ProduktHerstellerFloat40","ProduktHerstellerFloat40","ProduktHerstellerFloat40")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerBIT1","BIT",0,0,0,0,0,0,new Array("ProduktHerstellerBIT1","ProduktHerstellerBIT1","ProduktHerstellerBIT1","ProduktHerstellerBIT1")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerBIT2","BIT",0,0,0,0,0,0,new Array("ProduktHerstellerBIT2","ProduktHerstellerBIT2","ProduktHerstellerBIT2","ProduktHerstellerBIT2")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerBIT3","BIT",0,0,0,0,0,0,new Array("ProduktHerstellerBIT3","ProduktHerstellerBIT3","ProduktHerstellerBIT3","ProduktHerstellerBIT3")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerBIT4","BIT",0,0,0,0,0,0,new Array("ProduktHerstellerBIT4","ProduktHerstellerBIT4","ProduktHerstellerBIT4","ProduktHerstellerBIT4")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerBIT5","BIT",0,0,0,0,0,0,new Array("ProduktHerstellerBIT5","ProduktHerstellerBIT5","ProduktHerstellerBIT5","ProduktHerstellerBIT5")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerBIT6","BIT",0,0,0,0,0,0,new Array("ProduktHerstellerBIT6","ProduktHerstellerBIT6","ProduktHerstellerBIT6","ProduktHerstellerBIT6")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerBIT7","BIT",0,0,0,0,0,0,new Array("ProduktHerstellerBIT7","ProduktHerstellerBIT7","ProduktHerstellerBIT7","ProduktHerstellerBIT7")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerBIT8","BIT",0,0,0,0,0,0,new Array("ProduktHerstellerBIT8","ProduktHerstellerBIT8","ProduktHerstellerBIT8","ProduktHerstellerBIT8")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerBIT9","BIT",0,0,0,0,0,0,new Array("ProduktHerstellerBIT9","ProduktHerstellerBIT9","ProduktHerstellerBIT9","ProduktHerstellerBIT9")));
showProduktHerstellerAttributArr.push(new showProduktHerstellerAttributObj("ProduktHerstellerBIT10","BIT",0,0,0,0,0,0,new Array("ProduktHerstellerBIT10","ProduktHerstellerBIT10","ProduktHerstellerBIT10","ProduktHerstellerBIT10")));

var ProduktHerstellerStatusArr = new Array();
ProduktHerstellerStatusArr.push(["Active", "Aktiv", "Actif", "有效", 1]);
ProduktHerstellerStatusArr.push(["Deactive", "Deaktiv", "Désactiver", "无效", 9]);

var ProduktHerstellerInt1Arr = new Array();

function GetQueryString(string) {
    var reg = new RegExp('(^|&)' + string + '=([^&]*)(&|$)');
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;
}

function initGUI() {
	document.getElementById("kt_header_menu").innerHTML = ProduktTopText;
	document.getElementById("menu-item-3").classList.add("menu-item-here", "menu-item-rel", "menu-item-active");

	
    showProduktHerstellerAttributArr.sort(compare('indexA'));
    for (var i = 0; i < showProduktHerstellerAttributArr.length; i++) {
        if (showProduktHerstellerAttributArr[i].indexA > 0) {
            eval("if(document.getElementById('" + showProduktHerstellerAttributArr[i].Attribut + "SearchDiv'))document.getElementById('" + showProduktHerstellerAttributArr[i].Attribut + "SearchDiv').style.display='block';");
        }
    }
	document.getElementById("prIDXSearchLabel").innerHTML = showProduktHerstellerAttributArr[0].lang[langNum];
    var sel = document.getElementById("StatusSearch");
    for (var i = 0; i < ProduktHerstellerStatusArr.length; i++) {
        var temp = document.createElement("option");
        temp.value = ProduktHerstellerStatusArr[i][4];
        temp.text = unescape(ProduktHerstellerStatusArr[i][langNum]);
        sel.add(temp, sel.options.length);
    }
    var sel = document.getElementById("StatusModal");
    for (var i = 0; i < ProduktHerstellerStatusArr.length; i++) {
        var temp = document.createElement("option");
        temp.value = ProduktHerstellerStatusArr[i][4];
        temp.text = unescape(ProduktHerstellerStatusArr[i][langNum]);
        if (ProduktHerstellerStatusArr[i][3] == 1)
            temp.selected = "selected";
        sel.add(temp, sel.options.length);
    }

    var sel = document.getElementById("ProduktHerstellerInt1Search");
    for (var i = 0; i < ProduktHerstellerInt1Arr.length; i++) {
        var temp = document.createElement("option");
        temp.value = ProduktHerstellerInt1Arr[i][4];
        temp.text = unescape(ProduktHerstellerInt1Arr[i][langNum]);
        sel.add(temp, sel.options.length);
    }
    var sel = document.getElementById("ProduktHerstellerInt1Modal");
    for (var i = 0; i < ProduktHerstellerInt1Arr.length; i++) {
        var temp = document.createElement("option");
        temp.value = ProduktHerstellerInt1Arr[i][4];
        temp.text = unescape(ProduktHerstellerInt1Arr[i][langNum]);
        if (ProduktHerstellerInt1Arr[i][3] == 1)
            temp.selected = "selected";
        sel.add(temp, sel.options.length);
    }

    document.getElementById("prIDXSearchLabel").innerHTML = getProduktHerstellerAttributName("prIDX");
    document.getElementById("frIDXSearchLabel").innerHTML = getProduktHerstellerAttributName("frIDX");
    document.getElementById("Datum1_1SearchLabel").innerHTML = getProduktHerstellerAttributName("Datum1") + " von";
    document.getElementById("Datum1_2SearchLabel").innerHTML = getProduktHerstellerAttributName("Datum1") + " bis";
    document.getElementById("Datum2_1SearchLabel").innerHTML = getProduktHerstellerAttributName("Datum2") + " von";
    document.getElementById("Datum2_2SearchLabel").innerHTML = getProduktHerstellerAttributName("Datum2") + " bis";
    document.getElementById("Datum3_1SearchLabel").innerHTML = getProduktHerstellerAttributName("Datum3") + " von";
    document.getElementById("Datum3_2SearchLabel").innerHTML = getProduktHerstellerAttributName("Datum3") + " bis";
    document.getElementById("Datum4_1SearchLabel").innerHTML = getProduktHerstellerAttributName("Datum4") + " von";
    document.getElementById("Datum4_2SearchLabel").innerHTML = getProduktHerstellerAttributName("Datum4") + " bis";
    document.getElementById("StatusSearchLabel").innerHTML = getProduktHerstellerAttributName("Status");

    document.getElementById("ProduktHerstellerString1SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString1");
    document.getElementById("ProduktHerstellerString2SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString2");
    document.getElementById("ProduktHerstellerString3SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString3");
    document.getElementById("ProduktHerstellerString4SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString4");
    document.getElementById("ProduktHerstellerString5SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString5");
    document.getElementById("ProduktHerstellerString6SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString6");
    document.getElementById("ProduktHerstellerString7SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString7");
    document.getElementById("ProduktHerstellerString8SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString8");
    document.getElementById("ProduktHerstellerString9SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString9");
    document.getElementById("ProduktHerstellerString10SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString10");
    document.getElementById("ProduktHerstellerString11SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString11");
    document.getElementById("ProduktHerstellerString12SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString12");
    document.getElementById("ProduktHerstellerString13SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString13");
    document.getElementById("ProduktHerstellerString14SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString14");
    document.getElementById("ProduktHerstellerString15SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString15");
    document.getElementById("ProduktHerstellerString16SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString16");
    document.getElementById("ProduktHerstellerString17SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString17");
    document.getElementById("ProduktHerstellerString18SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString18");
    document.getElementById("ProduktHerstellerString19SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString19");
    document.getElementById("ProduktHerstellerString20SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString20");
    document.getElementById("ProduktHerstellerString21SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString21");
    document.getElementById("ProduktHerstellerString22SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString22");
    document.getElementById("ProduktHerstellerString23SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString23");
    document.getElementById("ProduktHerstellerString24SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString24");
    document.getElementById("ProduktHerstellerString25SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString25");
    document.getElementById("ProduktHerstellerString26SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString26");
    document.getElementById("ProduktHerstellerString27SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString27");
    document.getElementById("ProduktHerstellerString28SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString28");
    document.getElementById("ProduktHerstellerString29SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString29");
    document.getElementById("ProduktHerstellerString30SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString30");
    document.getElementById("ProduktHerstellerString31SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString31");
    document.getElementById("ProduktHerstellerString32SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString32");
    document.getElementById("ProduktHerstellerString33SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString33");
    document.getElementById("ProduktHerstellerString34SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString34");
    document.getElementById("ProduktHerstellerString35SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString35");
    document.getElementById("ProduktHerstellerString36SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString36");
    document.getElementById("ProduktHerstellerString37SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString37");
    document.getElementById("ProduktHerstellerString38SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString38");
    document.getElementById("ProduktHerstellerString39SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString39");
    document.getElementById("ProduktHerstellerString40SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString40");
    document.getElementById("ProduktHerstellerString41SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString41");
    document.getElementById("ProduktHerstellerString42SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString42");
    document.getElementById("ProduktHerstellerString43SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString43");
    document.getElementById("ProduktHerstellerString44SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString44");
    document.getElementById("ProduktHerstellerString45SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString45");
    document.getElementById("ProduktHerstellerString46SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString46");
    document.getElementById("ProduktHerstellerString47SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString47");
    document.getElementById("ProduktHerstellerString48SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString48");
    document.getElementById("ProduktHerstellerString49SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString49");
    document.getElementById("ProduktHerstellerString50SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString50");

    document.getElementById("ProduktHerstellerInt1SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt1");
    document.getElementById("ProduktHerstellerInt2SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt2");
    document.getElementById("ProduktHerstellerInt3SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt3");
    document.getElementById("ProduktHerstellerInt4SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt4");
    document.getElementById("ProduktHerstellerInt5SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt5");
    document.getElementById("ProduktHerstellerInt6SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt6");
    document.getElementById("ProduktHerstellerInt7SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt7");
    document.getElementById("ProduktHerstellerInt8SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt8");
    document.getElementById("ProduktHerstellerInt9SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt9");
    document.getElementById("ProduktHerstellerInt10SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt10");
    document.getElementById("ProduktHerstellerInt11SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt11");
    document.getElementById("ProduktHerstellerInt12SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt12");
    document.getElementById("ProduktHerstellerInt13SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt13");
    document.getElementById("ProduktHerstellerInt14SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt14");
    document.getElementById("ProduktHerstellerInt15SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt15");
    document.getElementById("ProduktHerstellerInt16SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt16");
    document.getElementById("ProduktHerstellerInt17SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt17");
    document.getElementById("ProduktHerstellerInt18SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt18");
    document.getElementById("ProduktHerstellerInt19SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt19");
    document.getElementById("ProduktHerstellerInt20SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt20");
    document.getElementById("ProduktHerstellerInt21SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt21");
    document.getElementById("ProduktHerstellerInt22SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt22");
    document.getElementById("ProduktHerstellerInt23SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt23");
    document.getElementById("ProduktHerstellerInt24SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt24");
    document.getElementById("ProduktHerstellerInt25SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt25");
    document.getElementById("ProduktHerstellerInt26SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt26");
    document.getElementById("ProduktHerstellerInt27SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt27");
    document.getElementById("ProduktHerstellerInt28SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt28");
    document.getElementById("ProduktHerstellerInt29SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt29");
    document.getElementById("ProduktHerstellerInt30SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt30");
    document.getElementById("ProduktHerstellerInt31SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt31");
    document.getElementById("ProduktHerstellerInt32SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt32");
    document.getElementById("ProduktHerstellerInt33SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt33");
    document.getElementById("ProduktHerstellerInt34SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt34");
    document.getElementById("ProduktHerstellerInt35SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt35");
    document.getElementById("ProduktHerstellerInt36SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt36");
    document.getElementById("ProduktHerstellerInt37SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt37");
    document.getElementById("ProduktHerstellerInt38SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt38");
    document.getElementById("ProduktHerstellerInt39SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt39");
    document.getElementById("ProduktHerstellerInt40SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt40");

    document.getElementById("ProduktHerstellerFloat1SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat1");
    document.getElementById("ProduktHerstellerFloat2SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat2");
    document.getElementById("ProduktHerstellerFloat3SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat3");
    document.getElementById("ProduktHerstellerFloat4SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat4");
    document.getElementById("ProduktHerstellerFloat5SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat5");
    document.getElementById("ProduktHerstellerFloat6SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat6");
    document.getElementById("ProduktHerstellerFloat7SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat7");
    document.getElementById("ProduktHerstellerFloat8SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat8");
    document.getElementById("ProduktHerstellerFloat9SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat9");
    document.getElementById("ProduktHerstellerFloat10SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat10");
    document.getElementById("ProduktHerstellerFloat11SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat11");
    document.getElementById("ProduktHerstellerFloat12SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat12");
    document.getElementById("ProduktHerstellerFloat13SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat13");
    document.getElementById("ProduktHerstellerFloat14SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat14");
    document.getElementById("ProduktHerstellerFloat15SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat15");
    document.getElementById("ProduktHerstellerFloat16SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat16");
    document.getElementById("ProduktHerstellerFloat17SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat17");
    document.getElementById("ProduktHerstellerFloat18SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat18");
    document.getElementById("ProduktHerstellerFloat19SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat19");
    document.getElementById("ProduktHerstellerFloat20SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat20");
    document.getElementById("ProduktHerstellerFloat21SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat21");
    document.getElementById("ProduktHerstellerFloat22SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat22");
    document.getElementById("ProduktHerstellerFloat23SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat23");
    document.getElementById("ProduktHerstellerFloat24SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat24");
    document.getElementById("ProduktHerstellerFloat25SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat25");
    document.getElementById("ProduktHerstellerFloat26SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat26");
    document.getElementById("ProduktHerstellerFloat27SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat27");
    document.getElementById("ProduktHerstellerFloat28SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat28");
    document.getElementById("ProduktHerstellerFloat29SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat29");
    document.getElementById("ProduktHerstellerFloat30SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat30");
    document.getElementById("ProduktHerstellerFloat31SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat31");
    document.getElementById("ProduktHerstellerFloat32SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat32");
    document.getElementById("ProduktHerstellerFloat33SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat33");
    document.getElementById("ProduktHerstellerFloat34SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat34");
    document.getElementById("ProduktHerstellerFloat35SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat35");
    document.getElementById("ProduktHerstellerFloat36SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat36");
    document.getElementById("ProduktHerstellerFloat37SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat37");
    document.getElementById("ProduktHerstellerFloat38SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat38");
    document.getElementById("ProduktHerstellerFloat39SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat39");
    document.getElementById("ProduktHerstellerFloat40SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat40");

    document.getElementById("ProduktHerstellerBIT1SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT1");
    document.getElementById("ProduktHerstellerBIT2SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT2");
    document.getElementById("ProduktHerstellerBIT3SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT3");
    document.getElementById("ProduktHerstellerBIT4SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT4");
    document.getElementById("ProduktHerstellerBIT5SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT5");
    document.getElementById("ProduktHerstellerBIT6SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT6");
    document.getElementById("ProduktHerstellerBIT7SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT7");
    document.getElementById("ProduktHerstellerBIT8SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT8");
    document.getElementById("ProduktHerstellerBIT9SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT9");
    document.getElementById("ProduktHerstellerBIT10SearchLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT10");

    document.getElementById("prIDXModalLabel").innerHTML = getProduktHerstellerAttributName("prIDX");
    document.getElementById("frIDXModalLabel").innerHTML = getProduktHerstellerAttributName("frIDX");
    document.getElementById("Datum1ModalLabel").innerHTML = getProduktHerstellerAttributName("Datum1");
    document.getElementById("Datum2ModalLabel").innerHTML = getProduktHerstellerAttributName("Datum2");
    document.getElementById("Datum3ModalLabel").innerHTML = getProduktHerstellerAttributName("Datum3");
    document.getElementById("Datum4ModalLabel").innerHTML = getProduktHerstellerAttributName("Datum4");
    document.getElementById("StatusModalLabel").innerHTML = getProduktHerstellerAttributName("Status");

    document.getElementById("ProduktHerstellerString1ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString1");
    document.getElementById("ProduktHerstellerString2ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString2");
    document.getElementById("ProduktHerstellerString3ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString3");
    document.getElementById("ProduktHerstellerString4ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString4");
    document.getElementById("ProduktHerstellerString5ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString5");
    document.getElementById("ProduktHerstellerString6ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString6");
    document.getElementById("ProduktHerstellerString7ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString7");
    document.getElementById("ProduktHerstellerString8ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString8");
    document.getElementById("ProduktHerstellerString9ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString9");
    document.getElementById("ProduktHerstellerString10ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString10");
    document.getElementById("ProduktHerstellerString11ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString11");
    document.getElementById("ProduktHerstellerString12ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString12");
    document.getElementById("ProduktHerstellerString13ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString13");
    document.getElementById("ProduktHerstellerString14ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString14");
    document.getElementById("ProduktHerstellerString15ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString15");
    document.getElementById("ProduktHerstellerString16ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString16");
    document.getElementById("ProduktHerstellerString17ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString17");
    document.getElementById("ProduktHerstellerString18ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString18");
    document.getElementById("ProduktHerstellerString19ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString19");
    document.getElementById("ProduktHerstellerString20ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString20");
    document.getElementById("ProduktHerstellerString21ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString21");
    document.getElementById("ProduktHerstellerString22ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString22");
    document.getElementById("ProduktHerstellerString23ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString23");
    document.getElementById("ProduktHerstellerString24ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString24");
    document.getElementById("ProduktHerstellerString25ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString25");
    document.getElementById("ProduktHerstellerString26ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString26");
    document.getElementById("ProduktHerstellerString27ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString27");
    document.getElementById("ProduktHerstellerString28ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString28");
    document.getElementById("ProduktHerstellerString29ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString29");
    document.getElementById("ProduktHerstellerString30ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString30");
    document.getElementById("ProduktHerstellerString31ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString31");
    document.getElementById("ProduktHerstellerString32ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString32");
    document.getElementById("ProduktHerstellerString33ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString33");
    document.getElementById("ProduktHerstellerString34ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString34");
    document.getElementById("ProduktHerstellerString35ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString35");
    document.getElementById("ProduktHerstellerString36ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString36");
    document.getElementById("ProduktHerstellerString37ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString37");
    document.getElementById("ProduktHerstellerString38ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString38");
    document.getElementById("ProduktHerstellerString39ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString39");
    document.getElementById("ProduktHerstellerString40ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString40");
    document.getElementById("ProduktHerstellerString41ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString41");
    document.getElementById("ProduktHerstellerString42ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString42");
    document.getElementById("ProduktHerstellerString43ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString43");
    document.getElementById("ProduktHerstellerString44ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString44");
    document.getElementById("ProduktHerstellerString45ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString45");
    document.getElementById("ProduktHerstellerString46ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString46");
    document.getElementById("ProduktHerstellerString47ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString47");
    document.getElementById("ProduktHerstellerString48ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString48");
    document.getElementById("ProduktHerstellerString49ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString49");
    document.getElementById("ProduktHerstellerString50ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString50");

    document.getElementById("ProduktHerstellerInt1ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt1");
    document.getElementById("ProduktHerstellerInt2ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt2");
    document.getElementById("ProduktHerstellerInt3ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt3");
    document.getElementById("ProduktHerstellerInt4ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt4");
    document.getElementById("ProduktHerstellerInt5ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt5");
    document.getElementById("ProduktHerstellerInt6ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt6");
    document.getElementById("ProduktHerstellerInt7ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt7");
    document.getElementById("ProduktHerstellerInt8ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt8");
    document.getElementById("ProduktHerstellerInt9ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt9");
    document.getElementById("ProduktHerstellerInt10ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt10");
    document.getElementById("ProduktHerstellerInt11ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt11");
    document.getElementById("ProduktHerstellerInt12ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt12");
    document.getElementById("ProduktHerstellerInt13ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt13");
    document.getElementById("ProduktHerstellerInt14ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt14");
    document.getElementById("ProduktHerstellerInt15ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt15");
    document.getElementById("ProduktHerstellerInt16ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt16");
    document.getElementById("ProduktHerstellerInt17ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt17");
    document.getElementById("ProduktHerstellerInt18ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt18");
    document.getElementById("ProduktHerstellerInt19ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt19");
    document.getElementById("ProduktHerstellerInt20ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt20");
    document.getElementById("ProduktHerstellerInt21ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt21");
    document.getElementById("ProduktHerstellerInt22ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt22");
    document.getElementById("ProduktHerstellerInt23ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt23");
    document.getElementById("ProduktHerstellerInt24ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt24");
    document.getElementById("ProduktHerstellerInt25ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt25");
    document.getElementById("ProduktHerstellerInt26ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt26");
    document.getElementById("ProduktHerstellerInt27ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt27");
    document.getElementById("ProduktHerstellerInt28ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt28");
    document.getElementById("ProduktHerstellerInt29ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt29");
    document.getElementById("ProduktHerstellerInt30ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt30");
    document.getElementById("ProduktHerstellerInt31ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt31");
    document.getElementById("ProduktHerstellerInt32ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt32");
    document.getElementById("ProduktHerstellerInt33ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt33");
    document.getElementById("ProduktHerstellerInt34ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt34");
    document.getElementById("ProduktHerstellerInt35ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt35");
    document.getElementById("ProduktHerstellerInt36ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt36");
    document.getElementById("ProduktHerstellerInt37ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt37");
    document.getElementById("ProduktHerstellerInt38ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt38");
    document.getElementById("ProduktHerstellerInt39ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt39");
    document.getElementById("ProduktHerstellerInt40ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerInt40");

    document.getElementById("ProduktHerstellerFloat1ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat1");
    document.getElementById("ProduktHerstellerFloat2ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat2");
    document.getElementById("ProduktHerstellerFloat3ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat3");
    document.getElementById("ProduktHerstellerFloat4ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat4");
    document.getElementById("ProduktHerstellerFloat5ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat5");
    document.getElementById("ProduktHerstellerFloat6ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat6");
    document.getElementById("ProduktHerstellerFloat7ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat7");
    document.getElementById("ProduktHerstellerFloat8ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat8");
    document.getElementById("ProduktHerstellerFloat9ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat9");
    document.getElementById("ProduktHerstellerFloat10ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat10");
    document.getElementById("ProduktHerstellerFloat11ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat11");
    document.getElementById("ProduktHerstellerFloat12ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat12");
    document.getElementById("ProduktHerstellerFloat13ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat13");
    document.getElementById("ProduktHerstellerFloat14ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat14");
    document.getElementById("ProduktHerstellerFloat15ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat15");
    document.getElementById("ProduktHerstellerFloat16ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat16");
    document.getElementById("ProduktHerstellerFloat17ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat17");
    document.getElementById("ProduktHerstellerFloat18ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat18");
    document.getElementById("ProduktHerstellerFloat19ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat19");
    document.getElementById("ProduktHerstellerFloat20ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat20");
    document.getElementById("ProduktHerstellerFloat21ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat21");
    document.getElementById("ProduktHerstellerFloat22ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat22");
    document.getElementById("ProduktHerstellerFloat23ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat23");
    document.getElementById("ProduktHerstellerFloat24ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat24");
    document.getElementById("ProduktHerstellerFloat25ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat25");
    document.getElementById("ProduktHerstellerFloat26ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat26");
    document.getElementById("ProduktHerstellerFloat27ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat27");
    document.getElementById("ProduktHerstellerFloat28ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat28");
    document.getElementById("ProduktHerstellerFloat29ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat29");
    document.getElementById("ProduktHerstellerFloat30ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat30");
    document.getElementById("ProduktHerstellerFloat31ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat31");
    document.getElementById("ProduktHerstellerFloat32ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat32");
    document.getElementById("ProduktHerstellerFloat33ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat33");
    document.getElementById("ProduktHerstellerFloat34ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat34");
    document.getElementById("ProduktHerstellerFloat35ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat35");
    document.getElementById("ProduktHerstellerFloat36ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat36");
    document.getElementById("ProduktHerstellerFloat37ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat37");
    document.getElementById("ProduktHerstellerFloat38ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat38");
    document.getElementById("ProduktHerstellerFloat39ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat39");
    document.getElementById("ProduktHerstellerFloat40ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerFloat40");

    document.getElementById("ProduktHerstellerBIT1ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT1");
    document.getElementById("ProduktHerstellerBIT2ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT2");
    document.getElementById("ProduktHerstellerBIT3ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT3");
    document.getElementById("ProduktHerstellerBIT4ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT4");
    document.getElementById("ProduktHerstellerBIT5ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT5");
    document.getElementById("ProduktHerstellerBIT6ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT6");
    document.getElementById("ProduktHerstellerBIT7ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT7");
    document.getElementById("ProduktHerstellerBIT8ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT8");
    document.getElementById("ProduktHerstellerBIT9ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT9");
    document.getElementById("ProduktHerstellerBIT10ModalLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerBIT10");

    document.getElementById("ProduktHerstellerString1NewLabel").innerHTML = getProduktHerstellerAttributName("ProduktHerstellerString1");

    hideLoadingDiv();
    searchProduktHersteller();
}

function searchProduktHersteller() {
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
    var ProduktHerstellerString1 = ""
      , ProduktHerstellerString2 = ""
      , ProduktHerstellerString3 = ""
      , ProduktHerstellerString4 = ""
      , ProduktHerstellerString5 = ""
      , ProduktHerstellerString6 = ""
      , ProduktHerstellerString7 = ""
      , ProduktHerstellerString8 = ""
      , ProduktHerstellerString9 = ""
      , ProduktHerstellerString10 = ""
      , ProduktHerstellerString11 = ""
      , ProduktHerstellerString12 = ""
      , ProduktHerstellerString13 = ""
      , ProduktHerstellerString14 = ""
      , ProduktHerstellerString15 = ""
      , ProduktHerstellerString16 = ""
      , ProduktHerstellerString17 = ""
      , ProduktHerstellerString18 = ""
      , ProduktHerstellerString19 = ""
      , ProduktHerstellerString20 = ""
      , ProduktHerstellerString21 = ""
      , ProduktHerstellerString22 = ""
      , ProduktHerstellerString23 = ""
      , ProduktHerstellerString24 = ""
      , ProduktHerstellerString25 = ""
      , ProduktHerstellerString26 = ""
      , ProduktHerstellerString27 = ""
      , ProduktHerstellerString28 = ""
      , ProduktHerstellerString29 = ""
      , ProduktHerstellerString30 = ""
      , ProduktHerstellerString31 = ""
      , ProduktHerstellerString32 = ""
      , ProduktHerstellerString33 = ""
      , ProduktHerstellerString34 = ""
      , ProduktHerstellerString35 = ""
      , ProduktHerstellerString36 = ""
      , ProduktHerstellerString37 = ""
      , ProduktHerstellerString38 = ""
      , ProduktHerstellerString39 = ""
      , ProduktHerstellerString40 = ""
      , ProduktHerstellerString41 = ""
      , ProduktHerstellerString42 = ""
      , ProduktHerstellerString43 = ""
      , ProduktHerstellerString44 = ""
      , ProduktHerstellerString45 = ""
      , ProduktHerstellerString46 = ""
      , ProduktHerstellerString47 = ""
      , ProduktHerstellerString48 = ""
      , ProduktHerstellerString49 = ""
      , ProduktHerstellerString50 = ""
      , ProduktHerstellerInt1 = 0
      , ProduktHerstellerInt2 = 0
      , ProduktHerstellerInt3 = 0
      , ProduktHerstellerInt4 = 0
      , ProduktHerstellerInt5 = 0
      , ProduktHerstellerInt6 = 0
      , ProduktHerstellerInt7 = 0
      , ProduktHerstellerInt8 = 0
      , ProduktHerstellerInt9 = 0
      , ProduktHerstellerInt10 = 0
      , ProduktHerstellerInt11 = 0
      , ProduktHerstellerInt12 = 0
      , ProduktHerstellerInt13 = 0
      , ProduktHerstellerInt14 = 0
      , ProduktHerstellerInt15 = 0
      , ProduktHerstellerInt16 = 0
      , ProduktHerstellerInt17 = 0
      , ProduktHerstellerInt18 = 0
      , ProduktHerstellerInt19 = 0
      , ProduktHerstellerInt20 = 0
      , ProduktHerstellerInt21 = 0
      , ProduktHerstellerInt22 = 0
      , ProduktHerstellerInt23 = 0
      , ProduktHerstellerInt24 = 0
      , ProduktHerstellerInt25 = 0
      , ProduktHerstellerInt26 = 0
      , ProduktHerstellerInt27 = 0
      , ProduktHerstellerInt28 = 0
      , ProduktHerstellerInt29 = 0
      , ProduktHerstellerInt30 = 0
      , ProduktHerstellerInt31 = 0
      , ProduktHerstellerInt32 = 0
      , ProduktHerstellerInt33 = 0
      , ProduktHerstellerInt34 = 0
      , ProduktHerstellerInt35 = 0
      , ProduktHerstellerInt36 = 0
      , ProduktHerstellerInt37 = 0
      , ProduktHerstellerInt38 = 0
      , ProduktHerstellerInt39 = 0
      , ProduktHerstellerInt40 = 0
      , ProduktHerstellerFloat1 = 0
      , ProduktHerstellerFloat2 = 0
      , ProduktHerstellerFloat3 = 0
      , ProduktHerstellerFloat4 = 0
      , ProduktHerstellerFloat5 = 0
      , ProduktHerstellerFloat6 = 0
      , ProduktHerstellerFloat7 = 0
      , ProduktHerstellerFloat8 = 0
      , ProduktHerstellerFloat9 = 0
      , ProduktHerstellerFloat10 = 0
      , ProduktHerstellerFloat11 = 0
      , ProduktHerstellerFloat12 = 0
      , ProduktHerstellerFloat13 = 0
      , ProduktHerstellerFloat14 = 0
      , ProduktHerstellerFloat15 = 0
      , ProduktHerstellerFloat16 = 0
      , ProduktHerstellerFloat17 = 0
      , ProduktHerstellerFloat18 = 0
      , ProduktHerstellerFloat19 = 0
      , ProduktHerstellerFloat20 = 0
      , ProduktHerstellerFloat21 = 0
      , ProduktHerstellerFloat22 = 0
      , ProduktHerstellerFloat23 = 0
      , ProduktHerstellerFloat24 = 0
      , ProduktHerstellerFloat25 = 0
      , ProduktHerstellerFloat26 = 0
      , ProduktHerstellerFloat27 = 0
      , ProduktHerstellerFloat28 = 0
      , ProduktHerstellerFloat29 = 0
      , ProduktHerstellerFloat30 = 0
      , ProduktHerstellerFloat31 = 0
      , ProduktHerstellerFloat32 = 0
      , ProduktHerstellerFloat33 = 0
      , ProduktHerstellerFloat34 = 0
      , ProduktHerstellerFloat35 = 0
      , ProduktHerstellerFloat36 = 0
      , ProduktHerstellerFloat37 = 0
      , ProduktHerstellerFloat38 = 0
      , ProduktHerstellerFloat39 = 0
      , ProduktHerstellerFloat40 = 0
      , ProduktHerstellerBIT1 = 0
      , ProduktHerstellerBIT2 = 0
      , ProduktHerstellerBIT3 = 0
      , ProduktHerstellerBIT4 = 0
      , ProduktHerstellerBIT5 = 0
      , ProduktHerstellerBIT6 = 0
      , ProduktHerstellerBIT7 = 0
      , ProduktHerstellerBIT8 = 0
      , ProduktHerstellerBIT9 = 0
      , ProduktHerstellerBIT10 = 0;

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

    ProduktHerstellerString1 = escape(escape(document.getElementById("ProduktHerstellerString1Search").value));
    ProduktHerstellerString2 = escape(escape(document.getElementById("ProduktHerstellerString2Search").value));
    ProduktHerstellerString3 = escape(escape(document.getElementById("ProduktHerstellerString3Search").value));
    ProduktHerstellerString4 = escape(escape(document.getElementById("ProduktHerstellerString4Search").value));
    ProduktHerstellerString5 = escape(escape(document.getElementById("ProduktHerstellerString5Search").value));
    ProduktHerstellerString6 = escape(escape(document.getElementById("ProduktHerstellerString6Search").value));
    ProduktHerstellerString7 = escape(escape(document.getElementById("ProduktHerstellerString7Search").value));
    ProduktHerstellerString8 = escape(escape(document.getElementById("ProduktHerstellerString8Search").value));
    ProduktHerstellerString9 = escape(escape(document.getElementById("ProduktHerstellerString9Search").value));
    ProduktHerstellerString10 = escape(escape(document.getElementById("ProduktHerstellerString10Search").value));
    ProduktHerstellerString11 = escape(escape(document.getElementById("ProduktHerstellerString11Search").value));
    ProduktHerstellerString12 = escape(escape(document.getElementById("ProduktHerstellerString12Search").value));
    ProduktHerstellerString13 = escape(escape(document.getElementById("ProduktHerstellerString13Search").value));
    ProduktHerstellerString14 = escape(escape(document.getElementById("ProduktHerstellerString14Search").value));
    ProduktHerstellerString15 = escape(escape(document.getElementById("ProduktHerstellerString15Search").value));
    ProduktHerstellerString16 = escape(escape(document.getElementById("ProduktHerstellerString16Search").value));
    ProduktHerstellerString17 = escape(escape(document.getElementById("ProduktHerstellerString17Search").value));
    ProduktHerstellerString18 = escape(escape(document.getElementById("ProduktHerstellerString18Search").value));
    ProduktHerstellerString19 = escape(escape(document.getElementById("ProduktHerstellerString19Search").value));
    ProduktHerstellerString20 = escape(escape(document.getElementById("ProduktHerstellerString20Search").value));
    ProduktHerstellerString21 = escape(escape(document.getElementById("ProduktHerstellerString21Search").value));
    ProduktHerstellerString22 = escape(escape(document.getElementById("ProduktHerstellerString22Search").value));
    ProduktHerstellerString23 = escape(escape(document.getElementById("ProduktHerstellerString23Search").value));
    ProduktHerstellerString24 = escape(escape(document.getElementById("ProduktHerstellerString24Search").value));
    ProduktHerstellerString25 = escape(escape(document.getElementById("ProduktHerstellerString25Search").value));
    ProduktHerstellerString26 = escape(escape(document.getElementById("ProduktHerstellerString26Search").value));
    ProduktHerstellerString27 = escape(escape(document.getElementById("ProduktHerstellerString27Search").value));
    ProduktHerstellerString28 = escape(escape(document.getElementById("ProduktHerstellerString28Search").value));
    ProduktHerstellerString29 = escape(escape(document.getElementById("ProduktHerstellerString29Search").value));
    ProduktHerstellerString30 = escape(escape(document.getElementById("ProduktHerstellerString30Search").value));
    ProduktHerstellerString31 = escape(escape(document.getElementById("ProduktHerstellerString31Search").value));
    ProduktHerstellerString32 = escape(escape(document.getElementById("ProduktHerstellerString32Search").value));
    ProduktHerstellerString33 = escape(escape(document.getElementById("ProduktHerstellerString33Search").value));
    ProduktHerstellerString34 = escape(escape(document.getElementById("ProduktHerstellerString34Search").value));
    ProduktHerstellerString35 = escape(escape(document.getElementById("ProduktHerstellerString35Search").value));
    ProduktHerstellerString36 = escape(escape(document.getElementById("ProduktHerstellerString36Search").value));
    ProduktHerstellerString37 = escape(escape(document.getElementById("ProduktHerstellerString37Search").value));
    ProduktHerstellerString38 = escape(escape(document.getElementById("ProduktHerstellerString38Search").value));
    ProduktHerstellerString39 = escape(escape(document.getElementById("ProduktHerstellerString39Search").value));
    ProduktHerstellerString40 = escape(escape(document.getElementById("ProduktHerstellerString40Search").value));
    ProduktHerstellerString41 = escape(escape(document.getElementById("ProduktHerstellerString41Search").value));
    ProduktHerstellerString42 = escape(escape(document.getElementById("ProduktHerstellerString42Search").value));
    ProduktHerstellerString43 = escape(escape(document.getElementById("ProduktHerstellerString43Search").value));
    ProduktHerstellerString44 = escape(escape(document.getElementById("ProduktHerstellerString44Search").value));
    ProduktHerstellerString45 = escape(escape(document.getElementById("ProduktHerstellerString45Search").value));
    ProduktHerstellerString46 = escape(escape(document.getElementById("ProduktHerstellerString46Search").value));
    ProduktHerstellerString47 = escape(escape(document.getElementById("ProduktHerstellerString47Search").value));
    ProduktHerstellerString48 = escape(escape(document.getElementById("ProduktHerstellerString48Search").value));
    ProduktHerstellerString49 = escape(escape(document.getElementById("ProduktHerstellerString49Search").value));
    ProduktHerstellerString50 = escape(escape(document.getElementById("ProduktHerstellerString50Search").value));

    if (document.getElementById("ProduktHerstellerInt1Search").value != "")
        ProduktHerstellerInt1 = parseInt(document.getElementById("ProduktHerstellerInt1Search").value);
    if (document.getElementById("ProduktHerstellerInt2Search").value != "")
        ProduktHerstellerInt2 = parseInt(document.getElementById("ProduktHerstellerInt2Search").value);
    if (document.getElementById("ProduktHerstellerInt3Search").value != "")
        ProduktHerstellerInt3 = parseInt(document.getElementById("ProduktHerstellerInt3Search").value);
    if (document.getElementById("ProduktHerstellerInt4Search").value != "")
        ProduktHerstellerInt4 = parseInt(document.getElementById("ProduktHerstellerInt4Search").value);
    if (document.getElementById("ProduktHerstellerInt5Search").value != "")
        ProduktHerstellerInt5 = parseInt(document.getElementById("ProduktHerstellerInt5Search").value);
    if (document.getElementById("ProduktHerstellerInt6Search").value != "")
        ProduktHerstellerInt6 = parseInt(document.getElementById("ProduktHerstellerInt6Search").value);
    if (document.getElementById("ProduktHerstellerInt7Search").value != "")
        ProduktHerstellerInt7 = parseInt(document.getElementById("ProduktHerstellerInt7Search").value);
    if (document.getElementById("ProduktHerstellerInt8Search").value != "")
        ProduktHerstellerInt8 = parseInt(document.getElementById("ProduktHerstellerInt8Search").value);
    if (document.getElementById("ProduktHerstellerInt9Search").value != "")
        ProduktHerstellerInt9 = parseInt(document.getElementById("ProduktHerstellerInt9Search").value);
    if (document.getElementById("ProduktHerstellerInt10Search").value != "")
        ProduktHerstellerInt10 = parseInt(document.getElementById("ProduktHerstellerInt10Search").value);
    if (document.getElementById("ProduktHerstellerInt11Search").value != "")
        ProduktHerstellerInt11 = parseInt(document.getElementById("ProduktHerstellerInt11Search").value);
    if (document.getElementById("ProduktHerstellerInt12Search").value != "")
        ProduktHerstellerInt12 = parseInt(document.getElementById("ProduktHerstellerInt12Search").value);
    if (document.getElementById("ProduktHerstellerInt13Search").value != "")
        ProduktHerstellerInt13 = parseInt(document.getElementById("ProduktHerstellerInt13Search").value);
    if (document.getElementById("ProduktHerstellerInt14Search").value != "")
        ProduktHerstellerInt14 = parseInt(document.getElementById("ProduktHerstellerInt14Search").value);
    if (document.getElementById("ProduktHerstellerInt15Search").value != "")
        ProduktHerstellerInt15 = parseInt(document.getElementById("ProduktHerstellerInt15Search").value);
    if (document.getElementById("ProduktHerstellerInt16Search").value != "")
        ProduktHerstellerInt16 = parseInt(document.getElementById("ProduktHerstellerInt16Search").value);
    if (document.getElementById("ProduktHerstellerInt17Search").value != "")
        ProduktHerstellerInt17 = parseInt(document.getElementById("ProduktHerstellerInt17Search").value);
    if (document.getElementById("ProduktHerstellerInt18Search").value != "")
        ProduktHerstellerInt18 = parseInt(document.getElementById("ProduktHerstellerInt18Search").value);
    if (document.getElementById("ProduktHerstellerInt19Search").value != "")
        ProduktHerstellerInt19 = parseInt(document.getElementById("ProduktHerstellerInt19Search").value);
    if (document.getElementById("ProduktHerstellerInt20Search").value != "")
        ProduktHerstellerInt20 = parseInt(document.getElementById("ProduktHerstellerInt20Search").value);
    if (document.getElementById("ProduktHerstellerInt21Search").value != "")
        ProduktHerstellerInt21 = parseInt(document.getElementById("ProduktHerstellerInt21Search").value);
    if (document.getElementById("ProduktHerstellerInt22Search").value != "")
        ProduktHerstellerInt22 = parseInt(document.getElementById("ProduktHerstellerInt22Search").value);
    if (document.getElementById("ProduktHerstellerInt23Search").value != "")
        ProduktHerstellerInt23 = parseInt(document.getElementById("ProduktHerstellerInt23Search").value);
    if (document.getElementById("ProduktHerstellerInt24Search").value != "")
        ProduktHerstellerInt24 = parseInt(document.getElementById("ProduktHerstellerInt24Search").value);
    if (document.getElementById("ProduktHerstellerInt25Search").value != "")
        ProduktHerstellerInt25 = parseInt(document.getElementById("ProduktHerstellerInt25Search").value);
    if (document.getElementById("ProduktHerstellerInt26Search").value != "")
        ProduktHerstellerInt26 = parseInt(document.getElementById("ProduktHerstellerInt26Search").value);
    if (document.getElementById("ProduktHerstellerInt27Search").value != "")
        ProduktHerstellerInt27 = parseInt(document.getElementById("ProduktHerstellerInt27Search").value);
    if (document.getElementById("ProduktHerstellerInt28Search").value != "")
        ProduktHerstellerInt28 = parseInt(document.getElementById("ProduktHerstellerInt28Search").value);
    if (document.getElementById("ProduktHerstellerInt29Search").value != "")
        ProduktHerstellerInt29 = parseInt(document.getElementById("ProduktHerstellerInt29Search").value);
    if (document.getElementById("ProduktHerstellerInt30Search").value != "")
        ProduktHerstellerInt30 = parseInt(document.getElementById("ProduktHerstellerInt30Search").value);
    if (document.getElementById("ProduktHerstellerInt31Search").value != "")
        ProduktHerstellerInt31 = parseInt(document.getElementById("ProduktHerstellerInt31Search").value);
    if (document.getElementById("ProduktHerstellerInt32Search").value != "")
        ProduktHerstellerInt32 = parseInt(document.getElementById("ProduktHerstellerInt32Search").value);
    if (document.getElementById("ProduktHerstellerInt33Search").value != "")
        ProduktHerstellerInt33 = parseInt(document.getElementById("ProduktHerstellerInt33Search").value);
    if (document.getElementById("ProduktHerstellerInt34Search").value != "")
        ProduktHerstellerInt34 = parseInt(document.getElementById("ProduktHerstellerInt34Search").value);
    if (document.getElementById("ProduktHerstellerInt35Search").value != "")
        ProduktHerstellerInt35 = parseInt(document.getElementById("ProduktHerstellerInt35Search").value);
    if (document.getElementById("ProduktHerstellerInt36Search").value != "")
        ProduktHerstellerInt36 = parseInt(document.getElementById("ProduktHerstellerInt36Search").value);
    if (document.getElementById("ProduktHerstellerInt37Search").value != "")
        ProduktHerstellerInt37 = parseInt(document.getElementById("ProduktHerstellerInt37Search").value);
    if (document.getElementById("ProduktHerstellerInt38Search").value != "")
        ProduktHerstellerInt38 = parseInt(document.getElementById("ProduktHerstellerInt38Search").value);
    if (document.getElementById("ProduktHerstellerInt39Search").value != "")
        ProduktHerstellerInt39 = parseInt(document.getElementById("ProduktHerstellerInt39Search").value);
    if (document.getElementById("ProduktHerstellerInt40Search").value != "")
        ProduktHerstellerInt40 = parseInt(document.getElementById("ProduktHerstellerInt40Search").value);

    if (document.getElementById("ProduktHerstellerFloat1Search").value != "")
        ProduktHerstellerFloat1 = parseFloat(document.getElementById("ProduktHerstellerFloat1Search").value);
    if (document.getElementById("ProduktHerstellerFloat2Search").value != "")
        ProduktHerstellerFloat2 = parseFloat(document.getElementById("ProduktHerstellerFloat2Search").value);
    if (document.getElementById("ProduktHerstellerFloat3Search").value != "")
        ProduktHerstellerFloat3 = parseFloat(document.getElementById("ProduktHerstellerFloat3Search").value);
    if (document.getElementById("ProduktHerstellerFloat4Search").value != "")
        ProduktHerstellerFloat4 = parseFloat(document.getElementById("ProduktHerstellerFloat4Search").value);
    if (document.getElementById("ProduktHerstellerFloat5Search").value != "")
        ProduktHerstellerFloat5 = parseFloat(document.getElementById("ProduktHerstellerFloat5Search").value);
    if (document.getElementById("ProduktHerstellerFloat6Search").value != "")
        ProduktHerstellerFloat6 = parseFloat(document.getElementById("ProduktHerstellerFloat6Search").value);
    if (document.getElementById("ProduktHerstellerFloat7Search").value != "")
        ProduktHerstellerFloat7 = parseFloat(document.getElementById("ProduktHerstellerFloat7Search").value);
    if (document.getElementById("ProduktHerstellerFloat8Search").value != "")
        ProduktHerstellerFloat8 = parseFloat(document.getElementById("ProduktHerstellerFloat8Search").value);
    if (document.getElementById("ProduktHerstellerFloat9Search").value != "")
        ProduktHerstellerFloat9 = parseFloat(document.getElementById("ProduktHerstellerFloat9Search").value);
    if (document.getElementById("ProduktHerstellerFloat10Search").value != "")
        ProduktHerstellerFloat10 = parseFloat(document.getElementById("ProduktHerstellerFloat10Search").value);
    if (document.getElementById("ProduktHerstellerFloat11Search").value != "")
        ProduktHerstellerFloat11 = parseFloat(document.getElementById("ProduktHerstellerFloat11Search").value);
    if (document.getElementById("ProduktHerstellerFloat12Search").value != "")
        ProduktHerstellerFloat12 = parseFloat(document.getElementById("ProduktHerstellerFloat12Search").value);
    if (document.getElementById("ProduktHerstellerFloat13Search").value != "")
        ProduktHerstellerFloat13 = parseFloat(document.getElementById("ProduktHerstellerFloat13Search").value);
    if (document.getElementById("ProduktHerstellerFloat14Search").value != "")
        ProduktHerstellerFloat14 = parseFloat(document.getElementById("ProduktHerstellerFloat14Search").value);
    if (document.getElementById("ProduktHerstellerFloat15Search").value != "")
        ProduktHerstellerFloat15 = parseFloat(document.getElementById("ProduktHerstellerFloat15Search").value);
    if (document.getElementById("ProduktHerstellerFloat16Search").value != "")
        ProduktHerstellerFloat16 = parseFloat(document.getElementById("ProduktHerstellerFloat16Search").value);
    if (document.getElementById("ProduktHerstellerFloat17Search").value != "")
        ProduktHerstellerFloat17 = parseFloat(document.getElementById("ProduktHerstellerFloat17Search").value);
    if (document.getElementById("ProduktHerstellerFloat18Search").value != "")
        ProduktHerstellerFloat18 = parseFloat(document.getElementById("ProduktHerstellerFloat18Search").value);
    if (document.getElementById("ProduktHerstellerFloat19Search").value != "")
        ProduktHerstellerFloat19 = parseFloat(document.getElementById("ProduktHerstellerFloat19Search").value);
    if (document.getElementById("ProduktHerstellerFloat20Search").value != "")
        ProduktHerstellerFloat20 = parseFloat(document.getElementById("ProduktHerstellerFloat20Search").value);
    if (document.getElementById("ProduktHerstellerFloat21Search").value != "")
        ProduktHerstellerFloat21 = parseFloat(document.getElementById("ProduktHerstellerFloat21Search").value);
    if (document.getElementById("ProduktHerstellerFloat22Search").value != "")
        ProduktHerstellerFloat22 = parseFloat(document.getElementById("ProduktHerstellerFloat22Search").value);
    if (document.getElementById("ProduktHerstellerFloat23Search").value != "")
        ProduktHerstellerFloat23 = parseFloat(document.getElementById("ProduktHerstellerFloat23Search").value);
    if (document.getElementById("ProduktHerstellerFloat24Search").value != "")
        ProduktHerstellerFloat24 = parseFloat(document.getElementById("ProduktHerstellerFloat24Search").value);
    if (document.getElementById("ProduktHerstellerFloat25Search").value != "")
        ProduktHerstellerFloat25 = parseFloat(document.getElementById("ProduktHerstellerFloat25Search").value);
    if (document.getElementById("ProduktHerstellerFloat26Search").value != "")
        ProduktHerstellerFloat26 = parseFloat(document.getElementById("ProduktHerstellerFloat26Search").value);
    if (document.getElementById("ProduktHerstellerFloat27Search").value != "")
        ProduktHerstellerFloat27 = parseFloat(document.getElementById("ProduktHerstellerFloat27Search").value);
    if (document.getElementById("ProduktHerstellerFloat28Search").value != "")
        ProduktHerstellerFloat28 = parseFloat(document.getElementById("ProduktHerstellerFloat28Search").value);
    if (document.getElementById("ProduktHerstellerFloat29Search").value != "")
        ProduktHerstellerFloat29 = parseFloat(document.getElementById("ProduktHerstellerFloat29Search").value);
    if (document.getElementById("ProduktHerstellerFloat30Search").value != "")
        ProduktHerstellerFloat30 = parseFloat(document.getElementById("ProduktHerstellerFloat30Search").value);
    if (document.getElementById("ProduktHerstellerFloat31Search").value != "")
        ProduktHerstellerFloat31 = parseFloat(document.getElementById("ProduktHerstellerFloat31Search").value);
    if (document.getElementById("ProduktHerstellerFloat32Search").value != "")
        ProduktHerstellerFloat32 = parseFloat(document.getElementById("ProduktHerstellerFloat32Search").value);
    if (document.getElementById("ProduktHerstellerFloat33Search").value != "")
        ProduktHerstellerFloat33 = parseFloat(document.getElementById("ProduktHerstellerFloat33Search").value);
    if (document.getElementById("ProduktHerstellerFloat34Search").value != "")
        ProduktHerstellerFloat34 = parseFloat(document.getElementById("ProduktHerstellerFloat34Search").value);
    if (document.getElementById("ProduktHerstellerFloat35Search").value != "")
        ProduktHerstellerFloat35 = parseFloat(document.getElementById("ProduktHerstellerFloat35Search").value);
    if (document.getElementById("ProduktHerstellerFloat36Search").value != "")
        ProduktHerstellerFloat36 = parseFloat(document.getElementById("ProduktHerstellerFloat36Search").value);
    if (document.getElementById("ProduktHerstellerFloat37Search").value != "")
        ProduktHerstellerFloat37 = parseFloat(document.getElementById("ProduktHerstellerFloat37Search").value);
    if (document.getElementById("ProduktHerstellerFloat38Search").value != "")
        ProduktHerstellerFloat38 = parseFloat(document.getElementById("ProduktHerstellerFloat38Search").value);
    if (document.getElementById("ProduktHerstellerFloat39Search").value != "")
        ProduktHerstellerFloat39 = parseFloat(document.getElementById("ProduktHerstellerFloat39Search").value);
    if (document.getElementById("ProduktHerstellerFloat40Search").value != "")
        ProduktHerstellerFloat40 = parseFloat(document.getElementById("ProduktHerstellerFloat40Search").value);

    if (document.getElementById("ProduktHerstellerBIT1Search").checked)
        ProduktHerstellerBIT1 = 1;
    if (document.getElementById("ProduktHerstellerBIT2Search").checked)
        ProduktHerstellerBIT2 = 1;
    if (document.getElementById("ProduktHerstellerBIT3Search").checked)
        ProduktHerstellerBIT3 = 1;
    if (document.getElementById("ProduktHerstellerBIT4Search").checked)
        ProduktHerstellerBIT4 = 1;
    if (document.getElementById("ProduktHerstellerBIT5Search").checked)
        ProduktHerstellerBIT5 = 1;
    if (document.getElementById("ProduktHerstellerBIT6Search").checked)
        ProduktHerstellerBIT6 = 1;
    if (document.getElementById("ProduktHerstellerBIT7Search").checked)
        ProduktHerstellerBIT7 = 1;
    if (document.getElementById("ProduktHerstellerBIT8Search").checked)
        ProduktHerstellerBIT8 = 1;
    if (document.getElementById("ProduktHerstellerBIT9Search").checked)
        ProduktHerstellerBIT9 = 1;
    if (document.getElementById("ProduktHerstellerBIT10Search").checked)
        ProduktHerstellerBIT10 = 1;

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

    if (ProduktHerstellerString1 != "")
        sql += "AND mainTable.ProduktHerstellerString1 LIKE '%" + ProduktHerstellerString1 + "%' ";
    if (ProduktHerstellerString2 != "")
        sql += "AND mainTable.ProduktHerstellerString2 LIKE '%" + ProduktHerstellerString2 + "%' ";
    if (ProduktHerstellerString3 != "")
        sql += "AND mainTable.ProduktHerstellerString3 LIKE '%" + ProduktHerstellerString3 + "%' ";
    if (ProduktHerstellerString4 != "")
        sql += "AND mainTable.ProduktHerstellerString4 LIKE '%" + ProduktHerstellerString4 + "%' ";
    if (ProduktHerstellerString5 != "")
        sql += "AND mainTable.ProduktHerstellerString5 LIKE '%" + ProduktHerstellerString5 + "%' ";
    if (ProduktHerstellerString6 != "")
        sql += "AND mainTable.ProduktHerstellerString6 LIKE '%" + ProduktHerstellerString6 + "%' ";
    if (ProduktHerstellerString7 != "")
        sql += "AND mainTable.ProduktHerstellerString7 LIKE '%" + ProduktHerstellerString7 + "%' ";
    if (ProduktHerstellerString8 != "")
        sql += "AND mainTable.ProduktHerstellerString8 LIKE '%" + ProduktHerstellerString8 + "%' ";
    if (ProduktHerstellerString9 != "")
        sql += "AND mainTable.ProduktHerstellerString9 LIKE '%" + ProduktHerstellerString9 + "%' ";
    if (ProduktHerstellerString10 != "")
        sql += "AND mainTable.ProduktHerstellerString10 LIKE '%" + ProduktHerstellerString10 + "%' ";
    if (ProduktHerstellerString11 != "")
        sql += "AND mainTable.ProduktHerstellerString11 LIKE '%" + ProduktHerstellerString11 + "%' ";
    if (ProduktHerstellerString12 != "")
        sql += "AND mainTable.ProduktHerstellerString12 LIKE '%" + ProduktHerstellerString12 + "%' ";
    if (ProduktHerstellerString13 != "")
        sql += "AND mainTable.ProduktHerstellerString13 LIKE '%" + ProduktHerstellerString13 + "%' ";
    if (ProduktHerstellerString14 != "")
        sql += "AND mainTable.ProduktHerstellerString14 LIKE '%" + ProduktHerstellerString14 + "%' ";
    if (ProduktHerstellerString15 != "")
        sql += "AND mainTable.ProduktHerstellerString15 LIKE '%" + ProduktHerstellerString15 + "%' ";
    if (ProduktHerstellerString16 != "")
        sql += "AND mainTable.ProduktHerstellerString16 LIKE '%" + ProduktHerstellerString16 + "%' ";
    if (ProduktHerstellerString17 != "")
        sql += "AND mainTable.ProduktHerstellerString17 LIKE '%" + ProduktHerstellerString17 + "%' ";
    if (ProduktHerstellerString18 != "")
        sql += "AND mainTable.ProduktHerstellerString18 LIKE '%" + ProduktHerstellerString18 + "%' ";
    if (ProduktHerstellerString19 != "")
        sql += "AND mainTable.ProduktHerstellerString19 LIKE '%" + ProduktHerstellerString19 + "%' ";
    if (ProduktHerstellerString20 != "")
        sql += "AND mainTable.ProduktHerstellerString20 LIKE '%" + ProduktHerstellerString20 + "%' ";
    if (ProduktHerstellerString21 != "")
        sql += "AND mainTable.ProduktHerstellerString21 LIKE '%" + ProduktHerstellerString21 + "%' ";
    if (ProduktHerstellerString22 != "")
        sql += "AND mainTable.ProduktHerstellerString22 LIKE '%" + ProduktHerstellerString22 + "%' ";
    if (ProduktHerstellerString23 != "")
        sql += "AND mainTable.ProduktHerstellerString23 LIKE '%" + ProduktHerstellerString23 + "%' ";
    if (ProduktHerstellerString24 != "")
        sql += "AND mainTable.ProduktHerstellerString24 LIKE '%" + ProduktHerstellerString24 + "%' ";
    if (ProduktHerstellerString25 != "")
        sql += "AND mainTable.ProduktHerstellerString25 LIKE '%" + ProduktHerstellerString25 + "%' ";
    if (ProduktHerstellerString26 != "")
        sql += "AND mainTable.ProduktHerstellerString26 LIKE '%" + ProduktHerstellerString26 + "%' ";
    if (ProduktHerstellerString27 != "")
        sql += "AND mainTable.ProduktHerstellerString27 LIKE '%" + ProduktHerstellerString27 + "%' ";
    if (ProduktHerstellerString28 != "")
        sql += "AND mainTable.ProduktHerstellerString28 LIKE '%" + ProduktHerstellerString28 + "%' ";
    if (ProduktHerstellerString29 != "")
        sql += "AND mainTable.ProduktHerstellerString29 LIKE '%" + ProduktHerstellerString29 + "%' ";
    if (ProduktHerstellerString30 != "")
        sql += "AND mainTable.ProduktHerstellerString30 LIKE '%" + ProduktHerstellerString30 + "%' ";
    if (ProduktHerstellerString31 != "")
        sql += "AND mainTable.ProduktHerstellerString31 LIKE '%" + ProduktHerstellerString31 + "%' ";
    if (ProduktHerstellerString32 != "")
        sql += "AND mainTable.ProduktHerstellerString32 LIKE '%" + ProduktHerstellerString32 + "%' ";
    if (ProduktHerstellerString33 != "")
        sql += "AND mainTable.ProduktHerstellerString33 LIKE '%" + ProduktHerstellerString33 + "%' ";
    if (ProduktHerstellerString34 != "")
        sql += "AND mainTable.ProduktHerstellerString34 LIKE '%" + ProduktHerstellerString34 + "%' ";
    if (ProduktHerstellerString35 != "")
        sql += "AND mainTable.ProduktHerstellerString35 LIKE '%" + ProduktHerstellerString35 + "%' ";
    if (ProduktHerstellerString36 != "")
        sql += "AND mainTable.ProduktHerstellerString36 LIKE '%" + ProduktHerstellerString36 + "%' ";
    if (ProduktHerstellerString37 != "")
        sql += "AND mainTable.ProduktHerstellerString37 LIKE '%" + ProduktHerstellerString37 + "%' ";
    if (ProduktHerstellerString38 != "")
        sql += "AND mainTable.ProduktHerstellerString38 LIKE '%" + ProduktHerstellerString38 + "%' ";
    if (ProduktHerstellerString39 != "")
        sql += "AND mainTable.ProduktHerstellerString39 LIKE '%" + ProduktHerstellerString39 + "%' ";
    if (ProduktHerstellerString40 != "")
        sql += "AND mainTable.ProduktHerstellerString40 LIKE '%" + ProduktHerstellerString40 + "%' ";
    if (ProduktHerstellerString41 != "")
        sql += "AND mainTable.ProduktHerstellerString41 LIKE '%" + ProduktHerstellerString41 + "%' ";
    if (ProduktHerstellerString42 != "")
        sql += "AND mainTable.ProduktHerstellerString42 LIKE '%" + ProduktHerstellerString42 + "%' ";
    if (ProduktHerstellerString43 != "")
        sql += "AND mainTable.ProduktHerstellerString43 LIKE '%" + ProduktHerstellerString43 + "%' ";
    if (ProduktHerstellerString44 != "")
        sql += "AND mainTable.ProduktHerstellerString44 LIKE '%" + ProduktHerstellerString44 + "%' ";
    if (ProduktHerstellerString45 != "")
        sql += "AND mainTable.ProduktHerstellerString45 LIKE '%" + ProduktHerstellerString45 + "%' ";
    if (ProduktHerstellerString46 != "")
        sql += "AND mainTable.ProduktHerstellerString46 LIKE '%" + ProduktHerstellerString46 + "%' ";
    if (ProduktHerstellerString47 != "")
        sql += "AND mainTable.ProduktHerstellerString47 LIKE '%" + ProduktHerstellerString47 + "%' ";
    if (ProduktHerstellerString48 != "")
        sql += "AND mainTable.ProduktHerstellerString48 LIKE '%" + ProduktHerstellerString48 + "%' ";
    if (ProduktHerstellerString49 != "")
        sql += "AND mainTable.ProduktHerstellerString49 LIKE '%" + ProduktHerstellerString49 + "%' ";
    if (ProduktHerstellerString50 != "")
        sql += "AND mainTable.ProduktHerstellerString50 LIKE '%" + ProduktHerstellerString50 + "%' ";

    if (ProduktHerstellerInt1 != 0)
        sql += "AND mainTable.ProduktHerstellerInt1 = " + ProduktHerstellerInt1 + " ";
    if (ProduktHerstellerInt2 != 0)
        sql += "AND mainTable.ProduktHerstellerInt2 = " + ProduktHerstellerInt2 + " ";
    if (ProduktHerstellerInt3 != 0)
        sql += "AND mainTable.ProduktHerstellerInt3 = " + ProduktHerstellerInt3 + " ";
    if (ProduktHerstellerInt4 != 0)
        sql += "AND mainTable.ProduktHerstellerInt4 = " + ProduktHerstellerInt4 + " ";
    if (ProduktHerstellerInt5 != 0)
        sql += "AND mainTable.ProduktHerstellerInt5 = " + ProduktHerstellerInt5 + " ";
    if (ProduktHerstellerInt6 != 0)
        sql += "AND mainTable.ProduktHerstellerInt6 = " + ProduktHerstellerInt6 + " ";
    if (ProduktHerstellerInt7 != 0)
        sql += "AND mainTable.ProduktHerstellerInt7 = " + ProduktHerstellerInt7 + " ";
    if (ProduktHerstellerInt8 != 0)
        sql += "AND mainTable.ProduktHerstellerInt8 = " + ProduktHerstellerInt8 + " ";
    if (ProduktHerstellerInt9 != 0)
        sql += "AND mainTable.ProduktHerstellerInt9 = " + ProduktHerstellerInt9 + " ";
    if (ProduktHerstellerInt10 != 0)
        sql += "AND mainTable.ProduktHerstellerInt10 = " + ProduktHerstellerInt10 + " ";
    if (ProduktHerstellerInt11 != 0)
        sql += "AND mainTable.ProduktHerstellerInt11 = " + ProduktHerstellerInt11 + " ";
    if (ProduktHerstellerInt12 != 0)
        sql += "AND mainTable.ProduktHerstellerInt12 = " + ProduktHerstellerInt12 + " ";
    if (ProduktHerstellerInt13 != 0)
        sql += "AND mainTable.ProduktHerstellerInt13 = " + ProduktHerstellerInt13 + " ";
    if (ProduktHerstellerInt14 != 0)
        sql += "AND mainTable.ProduktHerstellerInt14 = " + ProduktHerstellerInt14 + " ";
    if (ProduktHerstellerInt15 != 0)
        sql += "AND mainTable.ProduktHerstellerInt15 = " + ProduktHerstellerInt15 + " ";
    if (ProduktHerstellerInt16 != 0)
        sql += "AND mainTable.ProduktHerstellerInt16 = " + ProduktHerstellerInt16 + " ";
    if (ProduktHerstellerInt17 != 0)
        sql += "AND mainTable.ProduktHerstellerInt17 = " + ProduktHerstellerInt17 + " ";
    if (ProduktHerstellerInt18 != 0)
        sql += "AND mainTable.ProduktHerstellerInt18 = " + ProduktHerstellerInt18 + " ";
    if (ProduktHerstellerInt19 != 0)
        sql += "AND mainTable.ProduktHerstellerInt19 = " + ProduktHerstellerInt19 + " ";
    if (ProduktHerstellerInt20 != 0)
        sql += "AND mainTable.ProduktHerstellerInt20 = " + ProduktHerstellerInt20 + " ";
    if (ProduktHerstellerInt21 != 0)
        sql += "AND mainTable.ProduktHerstellerInt21 = " + ProduktHerstellerInt21 + " ";
    if (ProduktHerstellerInt22 != 0)
        sql += "AND mainTable.ProduktHerstellerInt22 = " + ProduktHerstellerInt22 + " ";
    if (ProduktHerstellerInt23 != 0)
        sql += "AND mainTable.ProduktHerstellerInt23 = " + ProduktHerstellerInt23 + " ";
    if (ProduktHerstellerInt24 != 0)
        sql += "AND mainTable.ProduktHerstellerInt24 = " + ProduktHerstellerInt24 + " ";
    if (ProduktHerstellerInt25 != 0)
        sql += "AND mainTable.ProduktHerstellerInt25 = " + ProduktHerstellerInt25 + " ";
    if (ProduktHerstellerInt26 != 0)
        sql += "AND mainTable.ProduktHerstellerInt26 = " + ProduktHerstellerInt26 + " ";
    if (ProduktHerstellerInt27 != 0)
        sql += "AND mainTable.ProduktHerstellerInt27 = " + ProduktHerstellerInt27 + " ";
    if (ProduktHerstellerInt28 != 0)
        sql += "AND mainTable.ProduktHerstellerInt28 = " + ProduktHerstellerInt28 + " ";
    if (ProduktHerstellerInt29 != 0)
        sql += "AND mainTable.ProduktHerstellerInt29 = " + ProduktHerstellerInt29 + " ";
    if (ProduktHerstellerInt30 != 0)
        sql += "AND mainTable.ProduktHerstellerInt30 = " + ProduktHerstellerInt30 + " ";
    if (ProduktHerstellerInt31 != 0)
        sql += "AND mainTable.ProduktHerstellerInt31 = " + ProduktHerstellerInt31 + " ";
    if (ProduktHerstellerInt32 != 0)
        sql += "AND mainTable.ProduktHerstellerInt32 = " + ProduktHerstellerInt32 + " ";
    if (ProduktHerstellerInt33 != 0)
        sql += "AND mainTable.ProduktHerstellerInt33 = " + ProduktHerstellerInt33 + " ";
    if (ProduktHerstellerInt34 != 0)
        sql += "AND mainTable.ProduktHerstellerInt34 = " + ProduktHerstellerInt34 + " ";
    if (ProduktHerstellerInt35 != 0)
        sql += "AND mainTable.ProduktHerstellerInt35 = " + ProduktHerstellerInt35 + " ";
    if (ProduktHerstellerInt36 != 0)
        sql += "AND mainTable.ProduktHerstellerInt36 = " + ProduktHerstellerInt36 + " ";
    if (ProduktHerstellerInt37 != 0)
        sql += "AND mainTable.ProduktHerstellerInt37 = " + ProduktHerstellerInt37 + " ";
    if (ProduktHerstellerInt38 != 0)
        sql += "AND mainTable.ProduktHerstellerInt38 = " + ProduktHerstellerInt38 + " ";
    if (ProduktHerstellerInt39 != 0)
        sql += "AND mainTable.ProduktHerstellerInt39 = " + ProduktHerstellerInt39 + " ";
    if (ProduktHerstellerInt40 != 0)
        sql += "AND mainTable.ProduktHerstellerInt40 = " + ProduktHerstellerInt40 + " ";

    if (ProduktHerstellerFloat1 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat1 = " + ProduktHerstellerFloat1 + " ";
    if (ProduktHerstellerFloat2 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat2 = " + ProduktHerstellerFloat2 + " ";
    if (ProduktHerstellerFloat3 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat3 = " + ProduktHerstellerFloat3 + " ";
    if (ProduktHerstellerFloat4 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat4 = " + ProduktHerstellerFloat4 + " ";
    if (ProduktHerstellerFloat5 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat5 = " + ProduktHerstellerFloat5 + " ";
    if (ProduktHerstellerFloat6 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat6 = " + ProduktHerstellerFloat6 + " ";
    if (ProduktHerstellerFloat7 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat7 = " + ProduktHerstellerFloat7 + " ";
    if (ProduktHerstellerFloat8 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat8 = " + ProduktHerstellerFloat8 + " ";
    if (ProduktHerstellerFloat9 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat9 = " + ProduktHerstellerFloat9 + " ";
    if (ProduktHerstellerFloat10 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat10 = " + ProduktHerstellerFloat10 + " ";
    if (ProduktHerstellerFloat11 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat11 = " + ProduktHerstellerFloat11 + " ";
    if (ProduktHerstellerFloat12 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat12 = " + ProduktHerstellerFloat12 + " ";
    if (ProduktHerstellerFloat13 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat13 = " + ProduktHerstellerFloat13 + " ";
    if (ProduktHerstellerFloat14 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat14 = " + ProduktHerstellerFloat14 + " ";
    if (ProduktHerstellerFloat15 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat15 = " + ProduktHerstellerFloat15 + " ";
    if (ProduktHerstellerFloat16 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat16 = " + ProduktHerstellerFloat16 + " ";
    if (ProduktHerstellerFloat17 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat17 = " + ProduktHerstellerFloat17 + " ";
    if (ProduktHerstellerFloat18 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat18 = " + ProduktHerstellerFloat18 + " ";
    if (ProduktHerstellerFloat19 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat19 = " + ProduktHerstellerFloat19 + " ";
    if (ProduktHerstellerFloat20 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat20 = " + ProduktHerstellerFloat20 + " ";
    if (ProduktHerstellerFloat21 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat21 = " + ProduktHerstellerFloat21 + " ";
    if (ProduktHerstellerFloat22 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat22 = " + ProduktHerstellerFloat22 + " ";
    if (ProduktHerstellerFloat23 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat23 = " + ProduktHerstellerFloat23 + " ";
    if (ProduktHerstellerFloat24 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat24 = " + ProduktHerstellerFloat24 + " ";
    if (ProduktHerstellerFloat25 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat25 = " + ProduktHerstellerFloat25 + " ";
    if (ProduktHerstellerFloat26 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat26 = " + ProduktHerstellerFloat26 + " ";
    if (ProduktHerstellerFloat27 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat27 = " + ProduktHerstellerFloat27 + " ";
    if (ProduktHerstellerFloat28 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat28 = " + ProduktHerstellerFloat28 + " ";
    if (ProduktHerstellerFloat29 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat29 = " + ProduktHerstellerFloat29 + " ";
    if (ProduktHerstellerFloat30 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat30 = " + ProduktHerstellerFloat30 + " ";
    if (ProduktHerstellerFloat31 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat31 = " + ProduktHerstellerFloat31 + " ";
    if (ProduktHerstellerFloat32 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat32 = " + ProduktHerstellerFloat32 + " ";
    if (ProduktHerstellerFloat33 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat33 = " + ProduktHerstellerFloat33 + " ";
    if (ProduktHerstellerFloat34 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat34 = " + ProduktHerstellerFloat34 + " ";
    if (ProduktHerstellerFloat35 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat35 = " + ProduktHerstellerFloat35 + " ";
    if (ProduktHerstellerFloat36 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat36 = " + ProduktHerstellerFloat36 + " ";
    if (ProduktHerstellerFloat37 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat37 = " + ProduktHerstellerFloat37 + " ";
    if (ProduktHerstellerFloat38 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat38 = " + ProduktHerstellerFloat38 + " ";
    if (ProduktHerstellerFloat39 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat39 = " + ProduktHerstellerFloat39 + " ";
    if (ProduktHerstellerFloat40 != 0)
        sql += "AND mainTable.ProduktHerstellerFloat40 = " + ProduktHerstellerFloat40 + " ";

    if (ProduktHerstellerBIT1 != 0)
        sql += "AND mainTable.ProduktHerstellerBIT1 = " + ProduktHerstellerBIT1 + " ";
    if (ProduktHerstellerBIT2 != 0)
        sql += "AND mainTable.ProduktHerstellerBIT2 = " + ProduktHerstellerBIT2 + " ";
    if (ProduktHerstellerBIT3 != 0)
        sql += "AND mainTable.ProduktHerstellerBIT3 = " + ProduktHerstellerBIT3 + " ";
    if (ProduktHerstellerBIT4 != 0)
        sql += "AND mainTable.ProduktHerstellerBIT4 = " + ProduktHerstellerBIT4 + " ";
    if (ProduktHerstellerBIT5 != 0)
        sql += "AND mainTable.ProduktHerstellerBIT5 = " + ProduktHerstellerBIT5 + " ";
    if (ProduktHerstellerBIT6 != 0)
        sql += "AND mainTable.ProduktHerstellerBIT6 = " + ProduktHerstellerBIT6 + " ";
    if (ProduktHerstellerBIT7 != 0)
        sql += "AND mainTable.ProduktHerstellerBIT7 = " + ProduktHerstellerBIT7 + " ";
    if (ProduktHerstellerBIT8 != 0)
        sql += "AND mainTable.ProduktHerstellerBIT8 = " + ProduktHerstellerBIT8 + " ";
    if (ProduktHerstellerBIT9 != 0)
        sql += "AND mainTable.ProduktHerstellerBIT9 = " + ProduktHerstellerBIT9 + " ";
    if (ProduktHerstellerBIT10 != 0)
        sql += "AND mainTable.ProduktHerstellerBIT10 = " + ProduktHerstellerBIT10 + " ";

    if (sql != "")
        sql = "WHERE " + sql.substring(3);
    sql = "SELECT * FROM `laaver`.Produkt_Hersteller AS mainTable " + sql + " ORDER BY mainTable.ProduktHerstellerInt2 LIMIT 500";

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
            ProduktHerstellerArr = new Array();
            if (response.results && Array.isArray(response.results)) {
                response.results.forEach(function(item) {
                    let obj = {};
                    showProduktHerstellerAttributArr.forEach(attr => {
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

                    ProduktHerstellerArr.push(obj);
                });
                showProduktHersteller();
                //document.getElementById('ErgebnisSpan').innerHTML = ProduktHerstellerArr.length;
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

function showProduktHersteller() {
    var txt = "";
    showProduktHerstellerAttributArr.sort(compare('indexB'));
    txt += "<table class='table table-separate table-head-custom table-checkable' id='kt_datatable'><thead><tr>";
    for (var i = 0; i < showProduktHerstellerAttributArr.length; i++) {
        if (showProduktHerstellerAttributArr[i].indexB > 0) {
            txt += "<th>" + unescape(showProduktHerstellerAttributArr[i].lang[langNum]) + "</th>";
        }
    }
    txt += "</tr></thead><tbody>";

    for (var i = 0; i < ProduktHerstellerArr.length; i++) {
        txt += "<tr>";
        for (var j = 0; j < showProduktHerstellerAttributArr.length; j++) {
            eval("if(showProduktHerstellerAttributArr[j].indexB>0){" + "if(showProduktHerstellerAttributArr[j].indexB==1) txt += '<td><a href=\"javascript:showProduktHerstellerModal(" + i + ")\">PH'+parseInt(10000+parseInt(ProduktHerstellerArr[i]." + showProduktHerstellerAttributArr[j].Attribut + "))+'</a></td>';" + "else if(showProduktHerstellerAttributArr[j].Attribut=='Status'){ txt += '<td>';" + "for(var m=0;m<ProduktHerstellerStatusArr.length;m++)if(ProduktHerstellerStatusArr[m][4]==ProduktHerstellerArr[i].Status)txt+=unescape(ProduktHerstellerStatusArr[m][langNum]); txt += '</td>';}" + "else if(showProduktHerstellerAttributArr[j].Attribut=='ProduktHerstellerInt1') txt += '<td>'+getProduktHerstellerPosition(ProduktHerstellerArr[i]." + showProduktHerstellerAttributArr[j].Attribut + ")+'</td>';" + "else if(showProduktHerstellerAttributArr[j].Type=='BIT') txt += '<td>'+(parseInt(ProduktHerstellerArr[i]." + showProduktHerstellerAttributArr[j].Attribut + ")==1?'Yes':'No')+'</td>';" + "else if(parseInt(ProduktHerstellerArr[i]." + showProduktHerstellerAttributArr[j].Attribut + ")==0) txt += '<td> </td>';" + "else txt += '<td>'+unescape(ProduktHerstellerArr[i]." + showProduktHerstellerAttributArr[j].Attribut + ")+'</td>'" + "}");
        }
        txt += "</tr>";
    }
    txt += "</tbody></table>";

    document.getElementById("tableDiv").innerHTML = txt;
    hideLoadingDiv();

    if (globalIDX > 0) {
        showProduktHerstellerModal(0);
        globalIDX = 0;
    }
}

function showProduktHerstellerModal(idx) {
    showProduktHerstellerAttributArr.sort(compare('indexC'));
    for (var i = 0; i < showProduktHerstellerAttributArr.length; i++) {
        if (showProduktHerstellerAttributArr[i].indexC > 0) {
            eval("if(document.getElementById('" + showProduktHerstellerAttributArr[i].Attribut + "ModalDiv'))document.getElementById('" + showProduktHerstellerAttributArr[i].Attribut + "ModalDiv').style.display='block';");
        }
    }

    for (var i = 0; i < ProduktHerstellerArr.length; i++) {
        if (i == idx) {
            mainIDX = parseInt(ProduktHerstellerArr[i].prIDX);

            document.getElementById("prIDXModal").value = "PH" + parseInt(10000 + (ProduktHerstellerArr[i].prIDX));
            document.getElementById("frIDXModal").value = parseInt(ProduktHerstellerArr[i].frIDX);
            document.getElementById("Datum1Modal").value = unescape(ProduktHerstellerArr[i].Datum1);
            document.getElementById("Datum2Modal").value = unescape(ProduktHerstellerArr[i].Datum2);
            document.getElementById("Datum3Modal").value = unescape(ProduktHerstellerArr[i].Datum3);
            document.getElementById("Datum4Modal").value = unescape(ProduktHerstellerArr[i].Datum4);
            document.getElementById("StatusModal").value = parseInt(ProduktHerstellerArr[i].Status);

            document.getElementById("ProduktHerstellerString1Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString1);
            document.getElementById("ProduktHerstellerString2Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString2);
            document.getElementById("ProduktHerstellerString3Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString3);
            document.getElementById("ProduktHerstellerString4Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString4);
            document.getElementById("ProduktHerstellerString5Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString5);
            document.getElementById("ProduktHerstellerString6Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString6);
            document.getElementById("ProduktHerstellerString7Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString7);
            document.getElementById("ProduktHerstellerString8Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString8);
            document.getElementById("ProduktHerstellerString9Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString9);
            document.getElementById("ProduktHerstellerString10Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString10);
            document.getElementById("ProduktHerstellerString11Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString11);
            document.getElementById("ProduktHerstellerString12Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString12);
            document.getElementById("ProduktHerstellerString13Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString13);
            document.getElementById("ProduktHerstellerString14Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString14);
            document.getElementById("ProduktHerstellerString15Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString15);
            document.getElementById("ProduktHerstellerString16Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString16);
            document.getElementById("ProduktHerstellerString17Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString17);
            document.getElementById("ProduktHerstellerString18Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString18);
            document.getElementById("ProduktHerstellerString19Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString19);
            document.getElementById("ProduktHerstellerString20Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString20);
            document.getElementById("ProduktHerstellerString21Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString21);
            document.getElementById("ProduktHerstellerString22Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString22);
            document.getElementById("ProduktHerstellerString23Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString23);
            document.getElementById("ProduktHerstellerString24Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString24);
            document.getElementById("ProduktHerstellerString25Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString25);
            document.getElementById("ProduktHerstellerString26Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString26);
            document.getElementById("ProduktHerstellerString27Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString27);
            document.getElementById("ProduktHerstellerString28Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString28);
            document.getElementById("ProduktHerstellerString29Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString29);
            document.getElementById("ProduktHerstellerString30Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString30);
            document.getElementById("ProduktHerstellerString31Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString31);
            document.getElementById("ProduktHerstellerString32Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString32);
            document.getElementById("ProduktHerstellerString33Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString33);
            document.getElementById("ProduktHerstellerString34Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString34);
            document.getElementById("ProduktHerstellerString35Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString35);
            document.getElementById("ProduktHerstellerString36Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString36);
            document.getElementById("ProduktHerstellerString37Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString37);
            document.getElementById("ProduktHerstellerString38Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString38);
            document.getElementById("ProduktHerstellerString39Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString39);
            document.getElementById("ProduktHerstellerString40Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString40);
            document.getElementById("ProduktHerstellerString41Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString41);
            document.getElementById("ProduktHerstellerString42Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString42);
            document.getElementById("ProduktHerstellerString43Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString43);
            document.getElementById("ProduktHerstellerString44Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString44);
            document.getElementById("ProduktHerstellerString45Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString45);
            document.getElementById("ProduktHerstellerString46Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString46);
            document.getElementById("ProduktHerstellerString47Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString47);
            document.getElementById("ProduktHerstellerString48Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString48);
            document.getElementById("ProduktHerstellerString49Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString49);
            document.getElementById("ProduktHerstellerString50Modal").value = unescape(ProduktHerstellerArr[i].ProduktHerstellerString50);

            document.getElementById("ProduktHerstellerInt1Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt1);
            document.getElementById("ProduktHerstellerInt2Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt2) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt2);
            document.getElementById("ProduktHerstellerInt3Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt3) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt3);
            document.getElementById("ProduktHerstellerInt4Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt4) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt4);
            document.getElementById("ProduktHerstellerInt5Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt5) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt5);
            document.getElementById("ProduktHerstellerInt6Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt6) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt6);
            document.getElementById("ProduktHerstellerInt7Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt7) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt7);
            document.getElementById("ProduktHerstellerInt8Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt8) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt8);
            document.getElementById("ProduktHerstellerInt9Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt9) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt9);
            document.getElementById("ProduktHerstellerInt10Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt10) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt10);
            document.getElementById("ProduktHerstellerInt11Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt11) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt11);
            document.getElementById("ProduktHerstellerInt12Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt12) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt12);
            document.getElementById("ProduktHerstellerInt13Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt13) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt13);
            document.getElementById("ProduktHerstellerInt14Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt14) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt14);
            document.getElementById("ProduktHerstellerInt15Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt15) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt15);
            document.getElementById("ProduktHerstellerInt16Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt16) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt16);
            document.getElementById("ProduktHerstellerInt17Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt17) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt17);
            document.getElementById("ProduktHerstellerInt18Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt18) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt18);
            document.getElementById("ProduktHerstellerInt19Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt19) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt19);
            document.getElementById("ProduktHerstellerInt20Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt20) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt20);
            document.getElementById("ProduktHerstellerInt21Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt21) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt21);
            document.getElementById("ProduktHerstellerInt22Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt22) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt22);
            document.getElementById("ProduktHerstellerInt23Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt23) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt23);
            document.getElementById("ProduktHerstellerInt24Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt24) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt24);
            document.getElementById("ProduktHerstellerInt25Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt25) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt25);
            document.getElementById("ProduktHerstellerInt26Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt26) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt26);
            document.getElementById("ProduktHerstellerInt27Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt27) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt27);
            document.getElementById("ProduktHerstellerInt28Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt28) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt28);
            document.getElementById("ProduktHerstellerInt29Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt29) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt29);
            document.getElementById("ProduktHerstellerInt30Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt30) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt30);
            document.getElementById("ProduktHerstellerInt31Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt31) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt31);
            document.getElementById("ProduktHerstellerInt32Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt32) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt32);
            document.getElementById("ProduktHerstellerInt33Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt33) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt33);
            document.getElementById("ProduktHerstellerInt34Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt34) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt34);
            document.getElementById("ProduktHerstellerInt35Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt35) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt35);
            document.getElementById("ProduktHerstellerInt36Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt36) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt36);
            document.getElementById("ProduktHerstellerInt37Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt37) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt37);
            document.getElementById("ProduktHerstellerInt38Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt38) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt38);
            document.getElementById("ProduktHerstellerInt39Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt39) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt39);
            document.getElementById("ProduktHerstellerInt40Modal").value = parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt40) == 0 ? "" : parseInt(ProduktHerstellerArr[i].ProduktHerstellerInt40);

            document.getElementById("ProduktHerstellerFloat1Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat1) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat1);
            document.getElementById("ProduktHerstellerFloat2Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat2) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat2);
            document.getElementById("ProduktHerstellerFloat3Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat3) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat3);
            document.getElementById("ProduktHerstellerFloat4Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat4) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat4);
            document.getElementById("ProduktHerstellerFloat5Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat5) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat5);
            document.getElementById("ProduktHerstellerFloat6Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat6) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat6);
            document.getElementById("ProduktHerstellerFloat7Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat7) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat7);
            document.getElementById("ProduktHerstellerFloat8Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat8) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat8);
            document.getElementById("ProduktHerstellerFloat9Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat9) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat9);
            document.getElementById("ProduktHerstellerFloat10Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat10) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat10);
            document.getElementById("ProduktHerstellerFloat11Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat11) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat11);
            document.getElementById("ProduktHerstellerFloat12Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat12) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat12);
            document.getElementById("ProduktHerstellerFloat13Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat13) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat13);
            document.getElementById("ProduktHerstellerFloat14Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat14) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat14);
            document.getElementById("ProduktHerstellerFloat15Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat15) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat15);
            document.getElementById("ProduktHerstellerFloat16Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat16) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat16);
            document.getElementById("ProduktHerstellerFloat17Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat17) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat17);
            document.getElementById("ProduktHerstellerFloat18Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat18) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat18);
            document.getElementById("ProduktHerstellerFloat19Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat19) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat19);
            document.getElementById("ProduktHerstellerFloat20Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat20) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat20);
            document.getElementById("ProduktHerstellerFloat21Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat21) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat21);
            document.getElementById("ProduktHerstellerFloat22Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat22) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat22);
            document.getElementById("ProduktHerstellerFloat23Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat23) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat23);
            document.getElementById("ProduktHerstellerFloat24Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat24) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat24);
            document.getElementById("ProduktHerstellerFloat25Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat25) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat25);
            document.getElementById("ProduktHerstellerFloat26Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat26) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat26);
            document.getElementById("ProduktHerstellerFloat27Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat27) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat27);
            document.getElementById("ProduktHerstellerFloat28Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat28) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat28);
            document.getElementById("ProduktHerstellerFloat29Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat29) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat29);
            document.getElementById("ProduktHerstellerFloat30Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat30) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat30);
            document.getElementById("ProduktHerstellerFloat31Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat31) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat31);
            document.getElementById("ProduktHerstellerFloat32Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat32) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat32);
            document.getElementById("ProduktHerstellerFloat33Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat33) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat33);
            document.getElementById("ProduktHerstellerFloat34Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat34) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat34);
            document.getElementById("ProduktHerstellerFloat35Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat35) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat35);
            document.getElementById("ProduktHerstellerFloat36Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat36) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat36);
            document.getElementById("ProduktHerstellerFloat37Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat37) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat37);
            document.getElementById("ProduktHerstellerFloat38Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat38) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat38);
            document.getElementById("ProduktHerstellerFloat39Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat39) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat39);
            document.getElementById("ProduktHerstellerFloat40Modal").value = parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat40) == 0 ? "" : parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat40);

            if (parseInt(ProduktHerstellerArr[i].ProduktHerstellerBIT1) == 0)
                document.getElementById("ProduktHerstellerBIT1Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktHerstellerBIT1Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktHerstellerArr[i].ProduktHerstellerBIT2) == 0)
                document.getElementById("ProduktHerstellerBIT2Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktHerstellerBIT2Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktHerstellerArr[i].ProduktHerstellerBIT3) == 0)
                document.getElementById("ProduktHerstellerBIT3Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktHerstellerBIT3Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktHerstellerArr[i].ProduktHerstellerBIT4) == 0)
                document.getElementById("ProduktHerstellerBIT4Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktHerstellerBIT4Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktHerstellerArr[i].ProduktHerstellerBIT5) == 0)
                document.getElementById("ProduktHerstellerBIT5Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktHerstellerBIT5Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktHerstellerArr[i].ProduktHerstellerBIT6) == 0)
                document.getElementById("ProduktHerstellerBIT6Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktHerstellerBIT6Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktHerstellerArr[i].ProduktHerstellerBIT7) == 0)
                document.getElementById("ProduktHerstellerBIT7Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktHerstellerBIT7Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktHerstellerArr[i].ProduktHerstellerBIT8) == 0)
                document.getElementById("ProduktHerstellerBIT8Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktHerstellerBIT8Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktHerstellerArr[i].ProduktHerstellerBIT9) == 0)
                document.getElementById("ProduktHerstellerBIT9Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktHerstellerBIT9Modal").setAttribute("checked", "checked");
            if (parseInt(ProduktHerstellerArr[i].ProduktHerstellerBIT10) == 0)
                document.getElementById("ProduktHerstellerBIT10Modal").removeAttribute("checked");
            else
                document.getElementById("ProduktHerstellerBIT10Modal").setAttribute("checked", "checked");

            //老板有权限更改 Rolle
            if (ProduktHerstellerArr[i].Status < 7 && Rolle == 1) {
                document.getElementById("prIDXModal").setAttribute('disabled', 'disabled');
                document.getElementById("frIDXModal").setAttribute('disabled', 'disabled');
                document.getElementById("Datum1Modal").setAttribute('disabled', 'disabled');
                document.getElementById("StatusModal").setAttribute('disabled', 'disabled');
                document.getElementById("ProduktHerstellerString1Modal").setAttribute('disabled', 'disabled');

                document.getElementById("button_modal_save").style.display = "inline-block";
            } else {
                for (var i = 0; i < showProduktHerstellerAttributArr.length; i++) {
                    if (showProduktHerstellerAttributArr[i].indexC > 0) {
                        document.getElementById(showProduktHerstellerAttributArr[i].Attribut + "Modal").setAttribute('disabled', 'disabled');
                    }
                }
                document.getElementById("button_modal_save").style.display = "none";
            }
        }
    }
    $('#exampleModal').modal('show');
}

function saveProduktHersteller() {
    //更新对象所需的参数
    var ProduktHerstellerModalArr = ["ProduktHerstellerString4", "ProduktHerstellerString5", "ProduktHerstellerString6", "ProduktHerstellerString7", "ProduktHerstellerString8", "ProduktHerstellerString9", "ProduktHerstellerString10", "ProduktHerstellerString11", "ProduktHerstellerString12", "ProduktHerstellerString13", "ProduktHerstellerString14", "ProduktHerstellerString15", "ProduktHerstellerString16", "ProduktHerstellerString17", "ProduktHerstellerString18", "ProduktHerstellerString19", "ProduktHerstellerString20", "ProduktHerstellerString21", "ProduktHerstellerString22", "ProduktHerstellerString23", "ProduktHerstellerString24", "ProduktHerstellerString25", "ProduktHerstellerString26", "ProduktHerstellerString27", "ProduktHerstellerString28", "ProduktHerstellerString29", "ProduktHerstellerString30", "ProduktHerstellerString31", "ProduktHerstellerString32", "ProduktHerstellerString33", "ProduktHerstellerString34", "ProduktHerstellerString35", "ProduktHerstellerString36", "ProduktHerstellerString37", "ProduktHerstellerString38", "ProduktHerstellerString39", "ProduktHerstellerString40", "ProduktHerstellerString41", "ProduktHerstellerString42", "ProduktHerstellerString43", "ProduktHerstellerString44", "ProduktHerstellerString45", "ProduktHerstellerString46", "ProduktHerstellerString47", "ProduktHerstellerString48", "ProduktHerstellerString49", "ProduktHerstellerString50",
    "ProduktHerstellerInt1", "ProduktHerstellerInt2", "ProduktHerstellerInt3", "ProduktHerstellerInt4", "ProduktHerstellerInt5", "ProduktHerstellerInt6", "ProduktHerstellerInt7", "ProduktHerstellerInt8", "ProduktHerstellerInt9", "ProduktHerstellerInt10", "ProduktHerstellerInt11", "ProduktHerstellerInt12", "ProduktHerstellerInt13", "ProduktHerstellerInt14", "ProduktHerstellerInt15", "ProduktHerstellerInt16", "ProduktHerstellerInt17", "ProduktHerstellerInt18", "ProduktHerstellerInt19", "ProduktHerstellerInt20", "ProduktHerstellerInt21", "ProduktHerstellerInt22", "ProduktHerstellerInt23", "ProduktHerstellerInt24", "ProduktHerstellerInt25", "ProduktHerstellerInt26", "ProduktHerstellerInt27", "ProduktHerstellerInt28", "ProduktHerstellerInt29", "ProduktHerstellerInt30", "ProduktHerstellerInt31", "ProduktHerstellerInt32", "ProduktHerstellerInt33", "ProduktHerstellerInt34", "ProduktHerstellerInt35", "ProduktHerstellerInt36", "ProduktHerstellerInt37", "ProduktHerstellerInt38", "ProduktHerstellerInt39", "ProduktHerstellerInt40",
    "ProduktHerstellerFloat1", "ProduktHerstellerFloat2", "ProduktHerstellerFloat3", "ProduktHerstellerFloat4", "ProduktHerstellerFloat5", "ProduktHerstellerFloat6", "ProduktHerstellerFloat7", "ProduktHerstellerFloat8", "ProduktHerstellerFloat9", "ProduktHerstellerFloat10", "ProduktHerstellerFloat11", "ProduktHerstellerFloat12", "ProduktHerstellerFloat13", "ProduktHerstellerFloat14", "ProduktHerstellerFloat15", "ProduktHerstellerFloat16", "ProduktHerstellerFloat17", "ProduktHerstellerFloat18", "ProduktHerstellerFloat19", "ProduktHerstellerFloat20", "ProduktHerstellerFloat21", "ProduktHerstellerFloat22", "ProduktHerstellerFloat23", "ProduktHerstellerFloat24", "ProduktHerstellerFloat25", "ProduktHerstellerFloat26", "ProduktHerstellerFloat27", "ProduktHerstellerFloat28", "ProduktHerstellerFloat29", "ProduktHerstellerFloat30", "ProduktHerstellerFloat31", "ProduktHerstellerFloat32", "ProduktHerstellerFloat33", "ProduktHerstellerFloat34", "ProduktHerstellerFloat35", "ProduktHerstellerFloat36", "ProduktHerstellerFloat37", "ProduktHerstellerFloat38", "ProduktHerstellerFloat39", "ProduktHerstellerFloat40",
    "ProduktHerstellerBIT1", "ProduktHerstellerBIT2", "ProduktHerstellerBIT3", "ProduktHerstellerBIT4", "ProduktHerstellerBIT5", "ProduktHerstellerBIT6", "ProduktHerstellerBIT7", "ProduktHerstellerBIT8", "ProduktHerstellerBIT9", "ProduktHerstellerBIT10"];

    var prIDX = 0
      , frIDX = 0
      , Datum1 = ""
      , Datum2 = ""
      , Datum3 = ""
      , Datum4 = ""
      , Status = 0;
    var ProduktHerstellerString1 = ""
      , ProduktHerstellerString2 = ""
      , ProduktHerstellerString3 = ""
      , ProduktHerstellerString4 = ""
      , ProduktHerstellerString5 = ""
      , ProduktHerstellerString6 = ""
      , ProduktHerstellerString7 = ""
      , ProduktHerstellerString8 = ""
      , ProduktHerstellerString9 = ""
      , ProduktHerstellerString10 = ""
      , ProduktHerstellerString11 = ""
      , ProduktHerstellerString12 = ""
      , ProduktHerstellerString13 = ""
      , ProduktHerstellerString14 = ""
      , ProduktHerstellerString15 = ""
      , ProduktHerstellerString16 = ""
      , ProduktHerstellerString17 = ""
      , ProduktHerstellerString18 = ""
      , ProduktHerstellerString19 = ""
      , ProduktHerstellerString20 = ""
      , ProduktHerstellerString21 = ""
      , ProduktHerstellerString22 = ""
      , ProduktHerstellerString23 = ""
      , ProduktHerstellerString24 = ""
      , ProduktHerstellerString25 = ""
      , ProduktHerstellerString26 = ""
      , ProduktHerstellerString27 = ""
      , ProduktHerstellerString28 = ""
      , ProduktHerstellerString29 = ""
      , ProduktHerstellerString30 = ""
      , ProduktHerstellerString31 = ""
      , ProduktHerstellerString32 = ""
      , ProduktHerstellerString33 = ""
      , ProduktHerstellerString34 = ""
      , ProduktHerstellerString35 = ""
      , ProduktHerstellerString36 = ""
      , ProduktHerstellerString37 = ""
      , ProduktHerstellerString38 = ""
      , ProduktHerstellerString39 = ""
      , ProduktHerstellerString40 = ""
      , ProduktHerstellerString41 = ""
      , ProduktHerstellerString42 = ""
      , ProduktHerstellerString43 = ""
      , ProduktHerstellerString44 = ""
      , ProduktHerstellerString45 = ""
      , ProduktHerstellerString46 = ""
      , ProduktHerstellerString47 = ""
      , ProduktHerstellerString48 = ""
      , ProduktHerstellerString49 = ""
      , ProduktHerstellerString50 = ""
      , ProduktHerstellerInt1 = 0
      , ProduktHerstellerInt2 = 0
      , ProduktHerstellerInt3 = 0
      , ProduktHerstellerInt4 = 0
      , ProduktHerstellerInt5 = 0
      , ProduktHerstellerInt6 = 0
      , ProduktHerstellerInt7 = 0
      , ProduktHerstellerInt8 = 0
      , ProduktHerstellerInt9 = 0
      , ProduktHerstellerInt10 = 0
      , ProduktHerstellerInt11 = 0
      , ProduktHerstellerInt12 = 0
      , ProduktHerstellerInt13 = 0
      , ProduktHerstellerInt14 = 0
      , ProduktHerstellerInt15 = 0
      , ProduktHerstellerInt16 = 0
      , ProduktHerstellerInt17 = 0
      , ProduktHerstellerInt18 = 0
      , ProduktHerstellerInt19 = 0
      , ProduktHerstellerInt20 = 0
      , ProduktHerstellerInt21 = 0
      , ProduktHerstellerInt22 = 0
      , ProduktHerstellerInt23 = 0
      , ProduktHerstellerInt24 = 0
      , ProduktHerstellerInt25 = 0
      , ProduktHerstellerInt26 = 0
      , ProduktHerstellerInt27 = 0
      , ProduktHerstellerInt28 = 0
      , ProduktHerstellerInt29 = 0
      , ProduktHerstellerInt30 = 0
      , ProduktHerstellerInt31 = 0
      , ProduktHerstellerInt32 = 0
      , ProduktHerstellerInt33 = 0
      , ProduktHerstellerInt34 = 0
      , ProduktHerstellerInt35 = 0
      , ProduktHerstellerInt36 = 0
      , ProduktHerstellerInt37 = 0
      , ProduktHerstellerInt38 = 0
      , ProduktHerstellerInt39 = 0
      , ProduktHerstellerInt40 = 0
      , ProduktHerstellerFloat1 = 0
      , ProduktHerstellerFloat2 = 0
      , ProduktHerstellerFloat3 = 0
      , ProduktHerstellerFloat4 = 0
      , ProduktHerstellerFloat5 = 0
      , ProduktHerstellerFloat6 = 0
      , ProduktHerstellerFloat7 = 0
      , ProduktHerstellerFloat8 = 0
      , ProduktHerstellerFloat9 = 0
      , ProduktHerstellerFloat10 = 0
      , ProduktHerstellerFloat11 = 0
      , ProduktHerstellerFloat12 = 0
      , ProduktHerstellerFloat13 = 0
      , ProduktHerstellerFloat14 = 0
      , ProduktHerstellerFloat15 = 0
      , ProduktHerstellerFloat16 = 0
      , ProduktHerstellerFloat17 = 0
      , ProduktHerstellerFloat18 = 0
      , ProduktHerstellerFloat19 = 0
      , ProduktHerstellerFloat20 = 0
      , ProduktHerstellerFloat21 = 0
      , ProduktHerstellerFloat22 = 0
      , ProduktHerstellerFloat23 = 0
      , ProduktHerstellerFloat24 = 0
      , ProduktHerstellerFloat25 = 0
      , ProduktHerstellerFloat26 = 0
      , ProduktHerstellerFloat27 = 0
      , ProduktHerstellerFloat28 = 0
      , ProduktHerstellerFloat29 = 0
      , ProduktHerstellerFloat30 = 0
      , ProduktHerstellerFloat31 = 0
      , ProduktHerstellerFloat32 = 0
      , ProduktHerstellerFloat33 = 0
      , ProduktHerstellerFloat34 = 0
      , ProduktHerstellerFloat35 = 0
      , ProduktHerstellerFloat36 = 0
      , ProduktHerstellerFloat37 = 0
      , ProduktHerstellerFloat38 = 0
      , ProduktHerstellerFloat39 = 0
      , ProduktHerstellerFloat40 = 0
      , ProduktHerstellerBIT1 = 0
      , ProduktHerstellerBIT2 = 0
      , ProduktHerstellerBIT3 = 0
      , ProduktHerstellerBIT4 = 0
      , ProduktHerstellerBIT5 = 0
      , ProduktHerstellerBIT6 = 0
      , ProduktHerstellerBIT7 = 0
      , ProduktHerstellerBIT8 = 0
      , ProduktHerstellerBIT9 = 0
      , ProduktHerstellerBIT10 = 0;

    if (document.getElementById("ProduktHerstellerString1Modal").value != "")
        ProduktHerstellerString1 = escape(document.getElementById("ProduktHerstellerString1Modal").value);
    if (document.getElementById("ProduktHerstellerString2Modal").value != "")
        ProduktHerstellerString2 = escape(document.getElementById("ProduktHerstellerString2Modal").value);
    if (document.getElementById("ProduktHerstellerString3Modal").value != "")
        ProduktHerstellerString3 = escape(document.getElementById("ProduktHerstellerString3Modal").value);
    if (document.getElementById("ProduktHerstellerString4Modal").value != "")
        ProduktHerstellerString4 = escape(document.getElementById("ProduktHerstellerString4Modal").value);
    if (document.getElementById("ProduktHerstellerString5Modal").value != "")
        ProduktHerstellerString5 = escape(document.getElementById("ProduktHerstellerString5Modal").value);
    if (document.getElementById("ProduktHerstellerString6Modal").value != "")
        ProduktHerstellerString6 = escape(document.getElementById("ProduktHerstellerString6Modal").value);
    if (document.getElementById("ProduktHerstellerString7Modal").value != "")
        ProduktHerstellerString7 = escape(document.getElementById("ProduktHerstellerString7Modal").value);
    if (document.getElementById("ProduktHerstellerString8Modal").value != "")
        ProduktHerstellerString8 = escape(document.getElementById("ProduktHerstellerString8Modal").value);
    if (document.getElementById("ProduktHerstellerString9Modal").value != "")
        ProduktHerstellerString9 = escape(document.getElementById("ProduktHerstellerString9Modal").value);
    if (document.getElementById("ProduktHerstellerString10Modal").value != "")
        ProduktHerstellerString10 = escape(document.getElementById("ProduktHerstellerString10Modal").value);
    if (document.getElementById("ProduktHerstellerString11Modal").value != "")
        ProduktHerstellerString11 = escape(document.getElementById("ProduktHerstellerString11Modal").value);
    if (document.getElementById("ProduktHerstellerString12Modal").value != "")
        ProduktHerstellerString12 = escape(document.getElementById("ProduktHerstellerString12Modal").value);
    if (document.getElementById("ProduktHerstellerString13Modal").value != "")
        ProduktHerstellerString13 = escape(document.getElementById("ProduktHerstellerString13Modal").value);
    if (document.getElementById("ProduktHerstellerString14Modal").value != "")
        ProduktHerstellerString14 = escape(document.getElementById("ProduktHerstellerString14Modal").value);
    if (document.getElementById("ProduktHerstellerString15Modal").value != "")
        ProduktHerstellerString15 = escape(document.getElementById("ProduktHerstellerString15Modal").value);
    if (document.getElementById("ProduktHerstellerString16Modal").value != "")
        ProduktHerstellerString16 = escape(document.getElementById("ProduktHerstellerString16Modal").value);
    if (document.getElementById("ProduktHerstellerString17Modal").value != "")
        ProduktHerstellerString17 = escape(document.getElementById("ProduktHerstellerString17Modal").value);
    if (document.getElementById("ProduktHerstellerString18Modal").value != "")
        ProduktHerstellerString18 = escape(document.getElementById("ProduktHerstellerString18Modal").value);
    if (document.getElementById("ProduktHerstellerString19Modal").value != "")
        ProduktHerstellerString19 = escape(document.getElementById("ProduktHerstellerString19Modal").value);
    if (document.getElementById("ProduktHerstellerString20Modal").value != "")
        ProduktHerstellerString20 = escape(document.getElementById("ProduktHerstellerString20Modal").value);
    if (document.getElementById("ProduktHerstellerString21Modal").value != "")
        ProduktHerstellerString21 = escape(document.getElementById("ProduktHerstellerString21Modal").value);
    if (document.getElementById("ProduktHerstellerString22Modal").value != "")
        ProduktHerstellerString22 = escape(document.getElementById("ProduktHerstellerString22Modal").value);
    if (document.getElementById("ProduktHerstellerString23Modal").value != "")
        ProduktHerstellerString23 = escape(document.getElementById("ProduktHerstellerString23Modal").value);
    if (document.getElementById("ProduktHerstellerString24Modal").value != "")
        ProduktHerstellerString24 = escape(document.getElementById("ProduktHerstellerString24Modal").value);
    if (document.getElementById("ProduktHerstellerString25Modal").value != "")
        ProduktHerstellerString25 = escape(document.getElementById("ProduktHerstellerString25Modal").value);
    if (document.getElementById("ProduktHerstellerString26Modal").value != "")
        ProduktHerstellerString26 = escape(document.getElementById("ProduktHerstellerString26Modal").value);
    if (document.getElementById("ProduktHerstellerString27Modal").value != "")
        ProduktHerstellerString27 = escape(document.getElementById("ProduktHerstellerString27Modal").value);
    if (document.getElementById("ProduktHerstellerString28Modal").value != "")
        ProduktHerstellerString28 = escape(document.getElementById("ProduktHerstellerString28Modal").value);
    if (document.getElementById("ProduktHerstellerString29Modal").value != "")
        ProduktHerstellerString29 = escape(document.getElementById("ProduktHerstellerString29Modal").value);
    if (document.getElementById("ProduktHerstellerString30Modal").value != "")
        ProduktHerstellerString30 = escape(document.getElementById("ProduktHerstellerString30Modal").value);
    if (document.getElementById("ProduktHerstellerString31Modal").value != "")
        ProduktHerstellerString31 = escape(document.getElementById("ProduktHerstellerString31Modal").value);
    if (document.getElementById("ProduktHerstellerString32Modal").value != "")
        ProduktHerstellerString32 = escape(document.getElementById("ProduktHerstellerString32Modal").value);
    if (document.getElementById("ProduktHerstellerString33Modal").value != "")
        ProduktHerstellerString33 = escape(document.getElementById("ProduktHerstellerString33Modal").value);
    if (document.getElementById("ProduktHerstellerString34Modal").value != "")
        ProduktHerstellerString34 = escape(document.getElementById("ProduktHerstellerString34Modal").value);
    if (document.getElementById("ProduktHerstellerString35Modal").value != "")
        ProduktHerstellerString35 = escape(document.getElementById("ProduktHerstellerString35Modal").value);
    if (document.getElementById("ProduktHerstellerString36Modal").value != "")
        ProduktHerstellerString36 = escape(document.getElementById("ProduktHerstellerString36Modal").value);
    if (document.getElementById("ProduktHerstellerString37Modal").value != "")
        ProduktHerstellerString37 = escape(document.getElementById("ProduktHerstellerString37Modal").value);
    if (document.getElementById("ProduktHerstellerString38Modal").value != "")
        ProduktHerstellerString38 = escape(document.getElementById("ProduktHerstellerString38Modal").value);
    if (document.getElementById("ProduktHerstellerString39Modal").value != "")
        ProduktHerstellerString39 = escape(document.getElementById("ProduktHerstellerString39Modal").value);
    if (document.getElementById("ProduktHerstellerString40Modal").value != "")
        ProduktHerstellerString40 = escape(document.getElementById("ProduktHerstellerString40Modal").value);
    if (document.getElementById("ProduktHerstellerString41Modal").value != "")
        ProduktHerstellerString41 = escape(document.getElementById("ProduktHerstellerString41Modal").value);
    if (document.getElementById("ProduktHerstellerString42Modal").value != "")
        ProduktHerstellerString42 = escape(document.getElementById("ProduktHerstellerString42Modal").value);
    if (document.getElementById("ProduktHerstellerString43Modal").value != "")
        ProduktHerstellerString43 = escape(document.getElementById("ProduktHerstellerString43Modal").value);
    if (document.getElementById("ProduktHerstellerString44Modal").value != "")
        ProduktHerstellerString44 = escape(document.getElementById("ProduktHerstellerString44Modal").value);
    if (document.getElementById("ProduktHerstellerString45Modal").value != "")
        ProduktHerstellerString45 = escape(document.getElementById("ProduktHerstellerString45Modal").value);
    if (document.getElementById("ProduktHerstellerString46Modal").value != "")
        ProduktHerstellerString46 = escape(document.getElementById("ProduktHerstellerString46Modal").value);
    if (document.getElementById("ProduktHerstellerString47Modal").value != "")
        ProduktHerstellerString47 = escape(document.getElementById("ProduktHerstellerString47Modal").value);
    if (document.getElementById("ProduktHerstellerString48Modal").value != "")
        ProduktHerstellerString48 = escape(document.getElementById("ProduktHerstellerString48Modal").value);
    if (document.getElementById("ProduktHerstellerString49Modal").value != "")
        ProduktHerstellerString49 = escape(document.getElementById("ProduktHerstellerString49Modal").value);
    if (document.getElementById("ProduktHerstellerString50Modal").value != "")
        ProduktHerstellerString50 = escape(document.getElementById("ProduktHerstellerString50Modal").value);

    if (document.getElementById("ProduktHerstellerInt1Modal").value != "")
        ProduktHerstellerInt1 = parseInt(document.getElementById("ProduktHerstellerInt1Modal").value);
    if (document.getElementById("ProduktHerstellerInt2Modal").value != "")
        ProduktHerstellerInt2 = parseInt(document.getElementById("ProduktHerstellerInt2Modal").value);
    if (document.getElementById("ProduktHerstellerInt3Modal").value != "")
        ProduktHerstellerInt3 = parseInt(document.getElementById("ProduktHerstellerInt3Modal").value);
    if (document.getElementById("ProduktHerstellerInt4Modal").value != "")
        ProduktHerstellerInt4 = parseInt(document.getElementById("ProduktHerstellerInt4Modal").value);
    if (document.getElementById("ProduktHerstellerInt5Modal").value != "")
        ProduktHerstellerInt5 = parseInt(document.getElementById("ProduktHerstellerInt5Modal").value);
    if (document.getElementById("ProduktHerstellerInt6Modal").value != "")
        ProduktHerstellerInt6 = parseInt(document.getElementById("ProduktHerstellerInt6Modal").value);
    if (document.getElementById("ProduktHerstellerInt7Modal").value != "")
        ProduktHerstellerInt7 = parseInt(document.getElementById("ProduktHerstellerInt7Modal").value);
    if (document.getElementById("ProduktHerstellerInt8Modal").value != "")
        ProduktHerstellerInt8 = parseInt(document.getElementById("ProduktHerstellerInt8Modal").value);
    if (document.getElementById("ProduktHerstellerInt9Modal").value != "")
        ProduktHerstellerInt9 = parseInt(document.getElementById("ProduktHerstellerInt9Modal").value);
    if (document.getElementById("ProduktHerstellerInt10Modal").value != "")
        ProduktHerstellerInt10 = parseInt(document.getElementById("ProduktHerstellerInt10Modal").value);
    if (document.getElementById("ProduktHerstellerInt11Modal").value != "")
        ProduktHerstellerInt11 = parseInt(document.getElementById("ProduktHerstellerInt11Modal").value);
    if (document.getElementById("ProduktHerstellerInt12Modal").value != "")
        ProduktHerstellerInt12 = parseInt(document.getElementById("ProduktHerstellerInt12Modal").value);
    if (document.getElementById("ProduktHerstellerInt13Modal").value != "")
        ProduktHerstellerInt13 = parseInt(document.getElementById("ProduktHerstellerInt13Modal").value);
    if (document.getElementById("ProduktHerstellerInt14Modal").value != "")
        ProduktHerstellerInt14 = parseInt(document.getElementById("ProduktHerstellerInt14Modal").value);
    if (document.getElementById("ProduktHerstellerInt15Modal").value != "")
        ProduktHerstellerInt15 = parseInt(document.getElementById("ProduktHerstellerInt15Modal").value);
    if (document.getElementById("ProduktHerstellerInt16Modal").value != "")
        ProduktHerstellerInt16 = parseInt(document.getElementById("ProduktHerstellerInt16Modal").value);
    if (document.getElementById("ProduktHerstellerInt17Modal").value != "")
        ProduktHerstellerInt17 = parseInt(document.getElementById("ProduktHerstellerInt17Modal").value);
    if (document.getElementById("ProduktHerstellerInt18Modal").value != "")
        ProduktHerstellerInt18 = parseInt(document.getElementById("ProduktHerstellerInt18Modal").value);
    if (document.getElementById("ProduktHerstellerInt19Modal").value != "")
        ProduktHerstellerInt19 = parseInt(document.getElementById("ProduktHerstellerInt19Modal").value);
    if (document.getElementById("ProduktHerstellerInt20Modal").value != "")
        ProduktHerstellerInt20 = parseInt(document.getElementById("ProduktHerstellerInt20Modal").value);
    if (document.getElementById("ProduktHerstellerInt21Modal").value != "")
        ProduktHerstellerInt21 = parseInt(document.getElementById("ProduktHerstellerInt21Modal").value);
    if (document.getElementById("ProduktHerstellerInt22Modal").value != "")
        ProduktHerstellerInt22 = parseInt(document.getElementById("ProduktHerstellerInt22Modal").value);
    if (document.getElementById("ProduktHerstellerInt23Modal").value != "")
        ProduktHerstellerInt23 = parseInt(document.getElementById("ProduktHerstellerInt23Modal").value);
    if (document.getElementById("ProduktHerstellerInt24Modal").value != "")
        ProduktHerstellerInt24 = parseInt(document.getElementById("ProduktHerstellerInt24Modal").value);
    if (document.getElementById("ProduktHerstellerInt25Modal").value != "")
        ProduktHerstellerInt25 = parseInt(document.getElementById("ProduktHerstellerInt25Modal").value);
    if (document.getElementById("ProduktHerstellerInt26Modal").value != "")
        ProduktHerstellerInt26 = parseInt(document.getElementById("ProduktHerstellerInt26Modal").value);
    if (document.getElementById("ProduktHerstellerInt27Modal").value != "")
        ProduktHerstellerInt27 = parseInt(document.getElementById("ProduktHerstellerInt27Modal").value);
    if (document.getElementById("ProduktHerstellerInt28Modal").value != "")
        ProduktHerstellerInt28 = parseInt(document.getElementById("ProduktHerstellerInt28Modal").value);
    if (document.getElementById("ProduktHerstellerInt29Modal").value != "")
        ProduktHerstellerInt29 = parseInt(document.getElementById("ProduktHerstellerInt29Modal").value);
    if (document.getElementById("ProduktHerstellerInt30Modal").value != "")
        ProduktHerstellerInt30 = parseInt(document.getElementById("ProduktHerstellerInt30Modal").value);
    if (document.getElementById("ProduktHerstellerInt31Modal").value != "")
        ProduktHerstellerInt31 = parseInt(document.getElementById("ProduktHerstellerInt31Modal").value);
    if (document.getElementById("ProduktHerstellerInt32Modal").value != "")
        ProduktHerstellerInt32 = parseInt(document.getElementById("ProduktHerstellerInt32Modal").value);
    if (document.getElementById("ProduktHerstellerInt33Modal").value != "")
        ProduktHerstellerInt33 = parseInt(document.getElementById("ProduktHerstellerInt33Modal").value);
    if (document.getElementById("ProduktHerstellerInt34Modal").value != "")
        ProduktHerstellerInt34 = parseInt(document.getElementById("ProduktHerstellerInt34Modal").value);
    if (document.getElementById("ProduktHerstellerInt35Modal").value != "")
        ProduktHerstellerInt35 = parseInt(document.getElementById("ProduktHerstellerInt35Modal").value);
    if (document.getElementById("ProduktHerstellerInt36Modal").value != "")
        ProduktHerstellerInt36 = parseInt(document.getElementById("ProduktHerstellerInt36Modal").value);
    if (document.getElementById("ProduktHerstellerInt37Modal").value != "")
        ProduktHerstellerInt37 = parseInt(document.getElementById("ProduktHerstellerInt37Modal").value);
    if (document.getElementById("ProduktHerstellerInt38Modal").value != "")
        ProduktHerstellerInt38 = parseInt(document.getElementById("ProduktHerstellerInt38Modal").value);
    if (document.getElementById("ProduktHerstellerInt39Modal").value != "")
        ProduktHerstellerInt39 = parseInt(document.getElementById("ProduktHerstellerInt39Modal").value);
    if (document.getElementById("ProduktHerstellerInt40Modal").value != "")
        ProduktHerstellerInt40 = parseInt(document.getElementById("ProduktHerstellerInt40Modal").value);

    if (document.getElementById("ProduktHerstellerFloat1Modal").value != "")
        ProduktHerstellerFloat1 = parseFloat(document.getElementById("ProduktHerstellerFloat1Modal").value);
    if (document.getElementById("ProduktHerstellerFloat2Modal").value != "")
        ProduktHerstellerFloat2 = parseFloat(document.getElementById("ProduktHerstellerFloat2Modal").value);
    if (document.getElementById("ProduktHerstellerFloat3Modal").value != "")
        ProduktHerstellerFloat3 = parseFloat(document.getElementById("ProduktHerstellerFloat3Modal").value);
    if (document.getElementById("ProduktHerstellerFloat4Modal").value != "")
        ProduktHerstellerFloat4 = parseFloat(document.getElementById("ProduktHerstellerFloat4Modal").value);
    if (document.getElementById("ProduktHerstellerFloat5Modal").value != "")
        ProduktHerstellerFloat5 = parseFloat(document.getElementById("ProduktHerstellerFloat5Modal").value);
    if (document.getElementById("ProduktHerstellerFloat6Modal").value != "")
        ProduktHerstellerFloat6 = parseFloat(document.getElementById("ProduktHerstellerFloat6Modal").value);
    if (document.getElementById("ProduktHerstellerFloat7Modal").value != "")
        ProduktHerstellerFloat7 = parseFloat(document.getElementById("ProduktHerstellerFloat7Modal").value);
    if (document.getElementById("ProduktHerstellerFloat8Modal").value != "")
        ProduktHerstellerFloat8 = parseFloat(document.getElementById("ProduktHerstellerFloat8Modal").value);
    if (document.getElementById("ProduktHerstellerFloat9Modal").value != "")
        ProduktHerstellerFloat9 = parseFloat(document.getElementById("ProduktHerstellerFloat9Modal").value);
    if (document.getElementById("ProduktHerstellerFloat10Modal").value != "")
        ProduktHerstellerFloat10 = parseFloat(document.getElementById("ProduktHerstellerFloat10Modal").value);
    if (document.getElementById("ProduktHerstellerFloat11Modal").value != "")
        ProduktHerstellerFloat11 = parseFloat(document.getElementById("ProduktHerstellerFloat11Modal").value);
    if (document.getElementById("ProduktHerstellerFloat12Modal").value != "")
        ProduktHerstellerFloat12 = parseFloat(document.getElementById("ProduktHerstellerFloat12Modal").value);
    if (document.getElementById("ProduktHerstellerFloat13Modal").value != "")
        ProduktHerstellerFloat13 = parseFloat(document.getElementById("ProduktHerstellerFloat13Modal").value);
    if (document.getElementById("ProduktHerstellerFloat14Modal").value != "")
        ProduktHerstellerFloat14 = parseFloat(document.getElementById("ProduktHerstellerFloat14Modal").value);
    if (document.getElementById("ProduktHerstellerFloat15Modal").value != "")
        ProduktHerstellerFloat15 = parseFloat(document.getElementById("ProduktHerstellerFloat15Modal").value);
    if (document.getElementById("ProduktHerstellerFloat16Modal").value != "")
        ProduktHerstellerFloat16 = parseFloat(document.getElementById("ProduktHerstellerFloat16Modal").value);
    if (document.getElementById("ProduktHerstellerFloat17Modal").value != "")
        ProduktHerstellerFloat17 = parseFloat(document.getElementById("ProduktHerstellerFloat17Modal").value);
    if (document.getElementById("ProduktHerstellerFloat18Modal").value != "")
        ProduktHerstellerFloat18 = parseFloat(document.getElementById("ProduktHerstellerFloat18Modal").value);
    if (document.getElementById("ProduktHerstellerFloat19Modal").value != "")
        ProduktHerstellerFloat19 = parseFloat(document.getElementById("ProduktHerstellerFloat19Modal").value);
    if (document.getElementById("ProduktHerstellerFloat20Modal").value != "")
        ProduktHerstellerFloat20 = parseFloat(document.getElementById("ProduktHerstellerFloat20Modal").value);
    if (document.getElementById("ProduktHerstellerFloat21Modal").value != "")
        ProduktHerstellerFloat21 = parseFloat(document.getElementById("ProduktHerstellerFloat21Modal").value);
    if (document.getElementById("ProduktHerstellerFloat22Modal").value != "")
        ProduktHerstellerFloat22 = parseFloat(document.getElementById("ProduktHerstellerFloat22Modal").value);
    if (document.getElementById("ProduktHerstellerFloat23Modal").value != "")
        ProduktHerstellerFloat23 = parseFloat(document.getElementById("ProduktHerstellerFloat23Modal").value);
    if (document.getElementById("ProduktHerstellerFloat24Modal").value != "")
        ProduktHerstellerFloat24 = parseFloat(document.getElementById("ProduktHerstellerFloat24Modal").value);
    if (document.getElementById("ProduktHerstellerFloat25Modal").value != "")
        ProduktHerstellerFloat25 = parseFloat(document.getElementById("ProduktHerstellerFloat25Modal").value);
    if (document.getElementById("ProduktHerstellerFloat26Modal").value != "")
        ProduktHerstellerFloat26 = parseFloat(document.getElementById("ProduktHerstellerFloat26Modal").value);
    if (document.getElementById("ProduktHerstellerFloat27Modal").value != "")
        ProduktHerstellerFloat27 = parseFloat(document.getElementById("ProduktHerstellerFloat27Modal").value);
    if (document.getElementById("ProduktHerstellerFloat28Modal").value != "")
        ProduktHerstellerFloat28 = parseFloat(document.getElementById("ProduktHerstellerFloat28Modal").value);
    if (document.getElementById("ProduktHerstellerFloat29Modal").value != "")
        ProduktHerstellerFloat29 = parseFloat(document.getElementById("ProduktHerstellerFloat29Modal").value);
    if (document.getElementById("ProduktHerstellerFloat30Modal").value != "")
        ProduktHerstellerFloat30 = parseFloat(document.getElementById("ProduktHerstellerFloat30Modal").value);
    if (document.getElementById("ProduktHerstellerFloat31Modal").value != "")
        ProduktHerstellerFloat31 = parseFloat(document.getElementById("ProduktHerstellerFloat31Modal").value);
    if (document.getElementById("ProduktHerstellerFloat32Modal").value != "")
        ProduktHerstellerFloat32 = parseFloat(document.getElementById("ProduktHerstellerFloat32Modal").value);
    if (document.getElementById("ProduktHerstellerFloat33Modal").value != "")
        ProduktHerstellerFloat33 = parseFloat(document.getElementById("ProduktHerstellerFloat33Modal").value);
    if (document.getElementById("ProduktHerstellerFloat34Modal").value != "")
        ProduktHerstellerFloat34 = parseFloat(document.getElementById("ProduktHerstellerFloat34Modal").value);
    if (document.getElementById("ProduktHerstellerFloat35Modal").value != "")
        ProduktHerstellerFloat35 = parseFloat(document.getElementById("ProduktHerstellerFloat35Modal").value);
    if (document.getElementById("ProduktHerstellerFloat36Modal").value != "")
        ProduktHerstellerFloat36 = parseFloat(document.getElementById("ProduktHerstellerFloat36Modal").value);
    if (document.getElementById("ProduktHerstellerFloat37Modal").value != "")
        ProduktHerstellerFloat37 = parseFloat(document.getElementById("ProduktHerstellerFloat37Modal").value);
    if (document.getElementById("ProduktHerstellerFloat38Modal").value != "")
        ProduktHerstellerFloat38 = parseFloat(document.getElementById("ProduktHerstellerFloat38Modal").value);
    if (document.getElementById("ProduktHerstellerFloat39Modal").value != "")
        ProduktHerstellerFloat39 = parseFloat(document.getElementById("ProduktHerstellerFloat39Modal").value);
    if (document.getElementById("ProduktHerstellerFloat40Modal").value != "")
        ProduktHerstellerFloat40 = parseFloat(document.getElementById("ProduktHerstellerFloat40Modal").value);

    if (document.getElementById("ProduktHerstellerBIT1Modal").checked)
        ProduktHerstellerBIT1 = 1;
    if (document.getElementById("ProduktHerstellerBIT2Modal").checked)
        ProduktHerstellerBIT2 = 1;
    if (document.getElementById("ProduktHerstellerBIT3Modal").checked)
        ProduktHerstellerBIT3 = 1;
    if (document.getElementById("ProduktHerstellerBIT4Modal").checked)
        ProduktHerstellerBIT4 = 1;
    if (document.getElementById("ProduktHerstellerBIT5Modal").checked)
        ProduktHerstellerBIT5 = 1;
    if (document.getElementById("ProduktHerstellerBIT6Modal").checked)
        ProduktHerstellerBIT6 = 1;
    if (document.getElementById("ProduktHerstellerBIT7Modal").checked)
        ProduktHerstellerBIT7 = 1;
    if (document.getElementById("ProduktHerstellerBIT8Modal").checked)
        ProduktHerstellerBIT8 = 1;
    if (document.getElementById("ProduktHerstellerBIT9Modal").checked)
        ProduktHerstellerBIT9 = 1;
    if (document.getElementById("ProduktHerstellerBIT10Modal").checked)
        ProduktHerstellerBIT10 = 1;

    var sql = "";
    for (var i = 0; i < ProduktHerstellerModalArr.length; i++) {
        if (sql != "")
            sql += ",";
        if (String(ProduktHerstellerModalArr[i]).indexOf("Float") > 0)
            eval('sql += String(ProduktHerstellerModalArr[i]) + " = "+' + ProduktHerstellerModalArr[i] + '+"";');
        else if (String(ProduktHerstellerModalArr[i]).indexOf("Int") > 0 || String(ProduktHerstellerModalArr[i]).indexOf("BIT") > 0)
            eval('sql += String(ProduktHerstellerModalArr[i]) + " = "+' + ProduktHerstellerModalArr[i] + '+"";');
        else
            eval('sql += String(ProduktHerstellerModalArr[i]) + " = \'"+' + ProduktHerstellerModalArr[i] + '+"\'";');
    }

    if (document.getElementById("Datum2Modal").value != "")
        sql += ",Datum2='" + escape(document.getElementById("Datum2Modal").value) + "'";
    if (document.getElementById("Datum3Modal").value != "")
        sql += ",Datum3='" + escape(document.getElementById("Datum3Modal").value) + "'";
    if (document.getElementById("Datum4Modal").value != "")
        sql += ",Datum4='" + escape(document.getElementById("Datum4Modal").value) + "'";
    //if(document.getElementById("StatusModal").value!="")	sql += ",Status="+parseInt(document.getElementById("StatusModal").value)+"";	

    sql = "UPDATE `laaver`.Produkt_Hersteller SET " + sql + " WHERE prIDX=" + mainIDX + "";

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

function showNewProduktHerstellerModal() {
    $('#exampleNewModal').modal('show');
}

function saveNewProduktHersteller() {
    //新增对象所需的参数
    var ProduktHerstellerNewArr = ["ProduktHerstellerString1"];
    var sql = ""
      , sql1 = ""
      , sql2 = "";

    for (var i = 0; i < ProduktHerstellerNewArr.length; i++) {
        if (sql1 != "")
            sql1 += ",";
        sql1 += String(ProduktHerstellerNewArr[i]);
    }
    for (var i = 0; i < ProduktHerstellerNewArr.length; i++) {
        if (sql2 != "")
            sql2 += ",";
        sql2 += "'" + escape(document.getElementById(String(ProduktHerstellerNewArr[i]) + "New").value) + "'";
    }

    var sql = "INSERT INTO `laaver`.Produkt_Hersteller (" + sql1 + ") VALUES (" + sql2 + ")";

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

function showProduktHerstellerAttributObj(Attribut, Type, indexA, indexB, indexC, indexD, indexE, indexF, lang) {
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

function getProduktHerstellerAttributName(param) {
    var txt = "";
    for (var i = 0; i < showProduktHerstellerAttributArr.length; i++) {
        if (showProduktHerstellerAttributArr[i].Attribut == param)
            txt = unescape(showProduktHerstellerAttributArr[i].lang[langNum]);
    }

    return txt;
}

document.addEventListener("DOMContentLoaded", function() {
    var PrintArr = new Array()
      , PrintObjTXT1 = ""
      , PrintObjTXT2 = "";
    for (var i = 0; i < showProduktHerstellerAttributArr.length; i++) {
        showProduktHerstellerAttributArr.sort(compare('indexD'));
        if (showProduktHerstellerAttributArr[i].indexD > 0) {
            PrintArr.push(unescape(showProduktHerstellerAttributArr[i].lang[langNum]));
            PrintObjTXT1 += "" + showProduktHerstellerAttributArr[i].Attribut + ",";
            PrintObjTXT2 += "this." + showProduktHerstellerAttributArr[i].Attribut + "=" + showProduktHerstellerAttributArr[i].Attribut + ";";
        }
    }
    eval("function PrintObj(" + PrintObjTXT1.substring(0, PrintObjTXT1.length - 1) + "){" + PrintObjTXT2 + "}");
});

function exportExcel() {
    showLoadingDiv();
    showProduktHerstellerAttributArr.sort(compare('indexD'));
    var filename = getDatumInterval(0) + "-" + "ProduktHersteller-" + String(new Date().getTime()).substring(6);
    var ExcelHeaderColumns = new Array();
    var ExcelData = new Array();
    var Summe = 0
      , iCount = 0;

    var printTXT1 = ""
      , printTXT2 = "";

    for (var i = 0; i < ProduktHerstellerArr.length; i++) {
        for (var j = 0; j < showProduktHerstellerAttributArr.length; j++) {
            eval("if(showProduktHerstellerAttributArr[j].indexD>0){" + "if(showProduktHerstellerAttributArr[j].indexD==1) printTXT1 += \"'PH'+parseInt(10000+parseInt(ProduktHerstellerArr[i]." + showProduktHerstellerAttributArr[j].Attribut + ")),\";" + "else if(showProduktHerstellerAttributArr[j].Attribut=='Status'){ " + "for(var m=0;m<ProduktHerstellerStatusArr.length;m++)if(ProduktHerstellerStatusArr[m][4]==ProduktHerstellerArr[i].Status) printTXT1 += \"unescape(getProduktHerstellerStatusName(ProduktHerstellerArr[i].Status)),\";}" + "else if(showProduktHerstellerAttributArr[j].Type=='BIT') printTXT1 += \"(parseInt(ProduktHerstellerArr[i]." + showProduktHerstellerAttributArr[j].Attribut + ")==1?'Yes':'No'),\";" + "else printTXT1 += \"unescape(ProduktHerstellerArr[i]." + showProduktHerstellerAttributArr[j].Attribut + "),\";" + "}");
        }
        eval("ExcelData.push(new PrintObj(" + printTXT1.substring(0, printTXT1.length - 1) + "));");
        printTXT1 = "";
        Summe += parseFloat(ProduktHerstellerArr[i].ProduktHerstellerFloat1);
    }

    printTXT1 = "",
    printTXT2 = "";
    for (var j = 0; j < showProduktHerstellerAttributArr.length; j++) {
        if (showProduktHerstellerAttributArr[j].indexD > 0) {
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
            "WorksheetName": "ProduktHersteller",
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

function getProduktHerstellerStatusName(id) {
    if (id != "" && ProduktHerstellerStatusArr.length > 0) {
        for (var i = 0; i < ProduktHerstellerStatusArr.length; i++) {
            if (ProduktHerstellerStatusArr[i][4] == id) {
                return unescape(ProduktHerstellerStatusArr[i][langNum]);
                break;
            }
        }
    }
}

function getProduktHerstellerPosition(num) {
    for (let i = 0; i < ProduktHerstellerInt1Arr.length; i++) {
        if (ProduktHerstellerInt1Arr[i][4] == num) {
            switch (lang) {
            case "en":
                return ProduktHerstellerInt1Arr[i][langNum];
            case "de":
                return ProduktHerstellerInt1Arr[i][langNum];
            case "fr":
                return ProduktHerstellerInt1Arr[i][langNum];
            case "cn":
                return ProduktHerstellerInt1Arr[i][langNum];
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
        const fileName = "ProdukeHersteller_"+mainIDX;
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
CREATE TABLE IF NOT EXISTS `Produkt_Hersteller` (
	`prIDX` int(11) NOT NULL AUTO_INCREMENT,
	`frIDX` int(11) DEFAULT NULL,
	`Status` int(11) NOT NULL DEFAULT 1,
	`Datum1` datetime NOT NULL DEFAULT current_timestamp(),
	`Datum2` datetime DEFAULT NULL,
	`Datum3` datetime DEFAULT NULL,
	`Datum4` datetime DEFAULT NULL,
	`ProduktHerstellerString1` varchar(500) NOT NULL DEFAULT '',
	`ProduktHerstellerString2` varchar(500) NOT NULL DEFAULT '',
	`ProduktHerstellerString3` varchar(500) NOT NULL DEFAULT '',
	`ProduktHerstellerString4` varchar(500) NOT NULL DEFAULT '',
	`ProduktHerstellerString5` varchar(500) NOT NULL DEFAULT '',
	`ProduktHerstellerString6` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString7` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString8` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString9` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString10` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString11` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString12` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString13` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString14` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString15` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString16` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString17` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString18` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString19` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString20` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString21` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString22` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString23` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString24` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString25` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString26` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString27` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString28` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString29` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString30` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString31` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString32` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString33` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString34` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString35` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString36` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString37` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString38` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString39` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString40` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString41` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString42` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString43` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString44` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString45` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString46` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString47` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString48` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString49` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerString50` varchar(100) NOT NULL DEFAULT '',
	`ProduktHerstellerInt1` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt2` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt3` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt4` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt5` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt6` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt7` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt8` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt9` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt10` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt11` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt12` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt13` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt14` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt15` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt16` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt17` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt18` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt19` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt20` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt21` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt22` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt23` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt24` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt25` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt26` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt27` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt28` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt29` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt30` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt31` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt32` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt33` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt34` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt35` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt36` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt37` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt38` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt39` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerInt40` int(11) NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat1` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat2` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat3` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat4` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat5` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat6` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat7` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat8` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat9` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat10` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat11` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat12` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat13` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat14` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat15` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat16` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat17` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat18` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat19` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat20` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat21` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat22` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat23` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat24` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat25` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat26` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat27` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat28` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat29` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat30` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat31` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat32` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat33` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat34` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat35` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat36` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat37` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat38` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat39` float NOT NULL DEFAULT 0,
	`ProduktHerstellerFloat40` float NOT NULL DEFAULT 0,
	`ProduktHerstellerBIT1` bit(1) NOT NULL DEFAULT b'0',
	`ProduktHerstellerBIT2` bit(1) NOT NULL DEFAULT b'0',
	`ProduktHerstellerBIT3` bit(1) NOT NULL DEFAULT b'0',
	`ProduktHerstellerBIT4` bit(1) NOT NULL DEFAULT b'0',
	`ProduktHerstellerBIT5` bit(1) NOT NULL DEFAULT b'0',
	`ProduktHerstellerBIT6` bit(1) NOT NULL DEFAULT b'0',
	`ProduktHerstellerBIT7` bit(1) NOT NULL DEFAULT b'0',
	`ProduktHerstellerBIT8` bit(1) NOT NULL DEFAULT b'0',
	`ProduktHerstellerBIT9` bit(1) NOT NULL DEFAULT b'0',
	`ProduktHerstellerBIT10` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`prIDX`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
****/

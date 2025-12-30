
var globalIDX=0;
if(String(GetQueryString("prIDX"))!="" && String(GetQueryString("prIDX"))!="null" && String(GetQueryString("prIDX"))!="undefined") globalIDX = parseInt(GetQueryString("prIDX"));
var mainIDX=0;

var ArtikelAttributeAllgemeinArr = new Array();
var VertreterArr = new Array();
var showVertreterAttributArr = new Array();
var AgentArr = new Array();


showVertreterAttributArr.push(new showVertreterAttributObj("prIDX", "parseInt", 1, 1, 1, 1, 1, 1, new Array("Seriennummer", "serial number", "Numéro de série", "序号")));
showVertreterAttributArr.push(new showVertreterAttributObj("frIDX", "parseInt", 0, 0, 0, 0, 0, 0, new Array("frIDX", "frIDX", "frIDX", "frIDX")));
showVertreterAttributArr.push(new showVertreterAttributObj("Datum1", "String", 3, 3, 3, 3, 3, 3, new Array("Erstellungsdatum", "creation date", "Date de création", "创建日期")));
showVertreterAttributArr.push(new showVertreterAttributObj("Datum2", "String", 0, 0, 0, 0, 0, 0, new Array("Datum2", "Datum2", "Datum2", "Datum2")));
showVertreterAttributArr.push(new showVertreterAttributObj("Datum3", "String", 0, 0, 0, 0, 0, 0, new Array("Datum3", "Datum3", "Datum3", "Datum3")));
showVertreterAttributArr.push(new showVertreterAttributObj("Datum4", "String", 0, 0, 0, 0, 0, 0, new Array("Datum4", "Datum4", "Datum4", "Datum4")));
showVertreterAttributArr.push(new showVertreterAttributObj("Status", "parseInt", 9, 9, 9, 9, 9, 9, new Array("Status", "Status", "Statut", "状态")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString1", "String", 10, 10, 10, 10, 10, 10, new Array("用户名", "Username", "Nom d'utilisateur", "用户名")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString2", "String", 11, 11, 11, 11, 11, 11, new Array("邮箱", "Email", "E-mail", "邮箱")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString3", "String", 20, 20, 20, 20, 20, 20, new Array("姓名", "Full Name", "Nom complet", "姓名")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString4", "String", 0, 0, 21, 21, 21, 21, new Array("电话", "Phone", "Téléphone", "电话")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString5", "String", 0, 0, 0, 0, 0, 0, new Array("密码", "Password", "Mot de passe", "密码")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString6", "String", 0, 0, 23, 23, 23, 23, new Array("VAT", "VAT", "TVA", "VAT")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString7", "String", 0, 24, 24, 24, 24, 24, new Array("公司名", "Company Name", "Nom de l'entreprise", "公司名")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString8", "String", 0, 0, 0, 0, 0, 0, new Array("VertreterString8", "VertreterString8", "VertreterString8", "VertreterString8")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString9", "String", 0, 0, 0, 0, 0, 0, new Array("VertreterString9", "VertreterString9", "VertreterString9", "VertreterString9")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString10", "String", 0, 0, 0, 0, 0, 0, new Array("VertreterString10", "VertreterString10", "VertreterString10", "VertreterString10")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString11", "String", 0, 0, 0, 0, 0, 0, new Array("VertreterString11", "VertreterString11", "VertreterString11", "VertreterString11")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString12", "String", 0, 0, 0, 0, 0, 0, new Array("VertreterString12", "VertreterString12", "VertreterString12", "VertreterString12")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString13", "String", 0, 0, 0, 0, 0, 0, new Array("VertreterString13", "VertreterString13", "VertreterString13", "VertreterString13")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString14", "String", 0, 0, 0, 0, 0, 0, new Array("VertreterString14", "VertreterString14", "VertreterString14", "VertreterString14")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString15", "String", 0, 0, 0, 0, 0, 0, new Array("VertreterString15", "VertreterString15", "VertreterString15", "VertreterString15")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString16", "String", 0, 0, 0, 0, 0, 0, new Array("VertreterString16", "VertreterString16", "VertreterString16", "VertreterString16")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString17", "String", 0, 0, 0, 0, 0, 0, new Array("VertreterString17", "VertreterString17", "VertreterString17", "VertreterString17")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString18", "String", 0, 0, 0, 0, 0, 0, new Array("VertreterString18", "VertreterString18", "VertreterString18", "VertreterString18")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString19", "String", 0, 0, 0, 0, 0, 0, new Array("VertreterString19", "VertreterString19", "VertreterString19", "VertreterString19")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString20", "String", 0, 0, 30, 30, 30, 30, new Array("Rechnungsfirma", "Billing Company", "Société de facturation", "账单公司名")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString21", "String", 0, 0, 31, 31, 31, 31, new Array("Rechnungsadresse", "Billing Address", "Adresse de facturation", "账单地址")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString22", "String", 0, 0, 32, 32, 32, 32, new Array("Rechnungs-PLZ", "Billing ZIP", "Code postal de facturation", "账单邮编")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString23", "String", 0, 0, 33, 33, 33, 33, new Array("Rechnungsstadt", "Billing City", "Ville de facturation", "账单城市")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString24", "String", 0,0,0,0,0,0, new Array("VertreterString24", "VertreterString24", "VertreterString24", "VertreterString24")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString25", "String", 0,0,50,50,50,50, new Array("Agent Discount Code", "Agenten-Rabattcode", "Code de remise agent", "代理折扣码")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString26", "String", 0,0,0,0,0,0, new Array("VertreterString26", "VertreterString26", "VertreterString26", "VertreterString26")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString27", "String", 0,0,0,0,0,0, new Array("VertreterString27", "VertreterString27", "VertreterString27", "VertreterString27")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString28", "String", 0,0,0,0,0,0, new Array("VertreterString28", "VertreterString28", "VertreterString28", "VertreterString28")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString29", "String", 0,0,0,0,0,0, new Array("VertreterString29", "VertreterString29", "VertreterString29", "VertreterString29")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString30", "String", 0,0,0,0,0,0, new Array("VertreterString30", "VertreterString30", "VertreterString30", "VertreterString30")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString31", "String", 0,0,0,0,0,0, new Array("VertreterString31", "VertreterString31", "VertreterString31", "VertreterString31")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString32", "String", 0,0,0,0,0,0, new Array("VertreterString32", "VertreterString32", "VertreterString32", "VertreterString32")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString33", "String", 0,0,0,0,0,0, new Array("VertreterString33", "VertreterString33", "VertreterString33", "VertreterString33")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString34", "String", 0,0,0,0,0,0, new Array("VertreterString34", "VertreterString34", "VertreterString34", "VertreterString34")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString35", "String", 0,0,0,0,0,0, new Array("VertreterString35", "VertreterString35", "VertreterString35", "VertreterString35")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString36", "String", 0,0,0,0,0,0, new Array("VertreterString36", "VertreterString36", "VertreterString36", "VertreterString36")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString37", "String", 0,0,0,0,0,0, new Array("VertreterString37", "VertreterString37", "VertreterString37", "VertreterString37")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString38", "String", 0,0,0,0,0,0, new Array("VertreterString38", "VertreterString38", "VertreterString38", "VertreterString38")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString39", "String", 0,0,0,0,0,0, new Array("VertreterString39", "VertreterString39", "VertreterString39", "VertreterString39")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString40", "String", 0,0,0,0,0,0, new Array("VertreterString40", "VertreterString40", "VertreterString40", "VertreterString40")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString41", "String", 0,0,0,0,0,0, new Array("VertreterString41", "VertreterString41", "VertreterString41", "VertreterString41")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString42", "String", 0,0,0,0,0,0, new Array("VertreterString42", "VertreterString42", "VertreterString42", "VertreterString42")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString43", "String", 0,0,0,0,0,0, new Array("VertreterString43", "VertreterString43", "VertreterString43", "VertreterString43")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString44", "String", 0,0,0,0,0,0, new Array("VertreterString44", "VertreterString44", "VertreterString44", "VertreterString44")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString45", "String", 0,0,0,0,0,0, new Array("VertreterString45", "VertreterString45", "VertreterString45", "VertreterString45")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString46", "String", 0,0,0,0,0,0, new Array("VertreterString46", "VertreterString46", "VertreterString46", "VertreterString46")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString47", "String", 0,0,0,0,0,0, new Array("VertreterString47", "VertreterString47", "VertreterString47", "VertreterString47")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString48", "String", 0,0,0,0,0,0, new Array("VertreterString48", "VertreterString48", "VertreterString48", "VertreterString48")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString49", "String", 0,0,0,0,0,0, new Array("VertreterString49", "VertreterString49", "VertreterString49", "VertreterString49")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterString50", "String", 0,0,0,0,0,0, new Array("VertreterString50", "VertreterString50", "VertreterString50", "VertreterString50")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt1", "Int", 0,0,0,0,0,0, new Array("VertreterInt1", "VertreterInt1", "VertreterInt1", "VertreterInt1")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt2", "Int", 0,0,0,0,0,0, new Array("VertreterInt2", "VertreterInt2", "VertreterInt2", "VertreterInt2")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt3", "Int", 0,0,0,0,0,0, new Array("VertreterInt3", "VertreterInt3", "VertreterInt3", "VertreterInt3")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt4", "Int", 0,0,0,0,0,0, new Array("VertreterInt4", "VertreterInt4", "VertreterInt4", "VertreterInt4")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt5", "Int", 0,0,0,0,0,0, new Array("VertreterInt5", "VertreterInt5", "VertreterInt5", "VertreterInt5")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt6", "Int", 0,0,0,0,0,0, new Array("VertreterInt6", "VertreterInt6", "VertreterInt6", "VertreterInt6")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt7", "Int", 0,0,0,0,0,0, new Array("VertreterInt7", "VertreterInt7", "VertreterInt7", "VertreterInt7")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt8", "Int", 0,0,0,0,0,0, new Array("VertreterInt8", "VertreterInt8", "VertreterInt8", "VertreterInt8")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt9", "Int", 0,0,0,0,0,0, new Array("VertreterInt9", "VertreterInt9", "VertreterInt9", "VertreterInt9")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt10","Int",0,0,0,0,0,0,new Array("VertreterInt10","VertreterInt10","VertreterInt10","VertreterInt10")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt11","Int",0,0,0,0,0,0,new Array("VertreterInt11","VertreterInt11","VertreterInt11","VertreterInt11")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt12","Int",0,0,0,0,0,0,new Array("VertreterInt12","VertreterInt12","VertreterInt12","VertreterInt12")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt13","Int",0,0,0,0,0,0,new Array("VertreterInt13","VertreterInt13","VertreterInt13","VertreterInt13")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt14","Int",0,0,0,0,0,0,new Array("VertreterInt14","VertreterInt14","VertreterInt14","VertreterInt14")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt15","Int",0,0,0,0,0,0,new Array("VertreterInt15","VertreterInt15","VertreterInt15","VertreterInt15")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt16","Int",0,0,0,0,0,0,new Array("VertreterInt16","VertreterInt16","VertreterInt16","VertreterInt16")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt17","Int",0,0,0,0,0,0,new Array("VertreterInt17","VertreterInt17","VertreterInt17","VertreterInt17")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt18","Int",0,0,0,0,0,0,new Array("VertreterInt18","VertreterInt18","VertreterInt18","VertreterInt18")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt19","Int",0,0,0,0,0,0,new Array("VertreterInt19","VertreterInt19","VertreterInt19","VertreterInt19")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt20","Int",0,0,0,0,0,0,new Array("VertreterInt20","VertreterInt20","VertreterInt20","VertreterInt20")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt21","Int",0,0,0,0,0,0,new Array("VertreterInt21","VertreterInt21","VertreterInt21","VertreterInt21")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt22","Int",0,0,0,0,0,0,new Array("VertreterInt22","VertreterInt22","VertreterInt22","VertreterInt22")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt23","Int",0,0,0,0,0,0,new Array("VertreterInt23","VertreterInt23","VertreterInt23","VertreterInt23")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt24","Int",0,0,0,0,0,0,new Array("VertreterInt24","VertreterInt24","VertreterInt24","VertreterInt24")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt25","Int",0,0,0,0,0,0,new Array("VertreterInt25","VertreterInt25","VertreterInt25","VertreterInt25")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt26","Int",0,0,0,0,0,0,new Array("VertreterInt26","VertreterInt26","VertreterInt26","VertreterInt26")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt27","Int",0,0,0,0,0,0,new Array("VertreterInt27","VertreterInt27","VertreterInt27","VertreterInt27")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt28","Int",0,0,0,0,0,0,new Array("VertreterInt28","VertreterInt28","VertreterInt28","VertreterInt28")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt29","Int",0,0,0,0,0,0,new Array("VertreterInt29","VertreterInt29","VertreterInt29","VertreterInt29")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt30","Int",0,0,0,0,0,0,new Array("VertreterInt30","VertreterInt30","VertreterInt30","VertreterInt30")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt31","Int",0,0,0,0,0,0,new Array("VertreterInt31","VertreterInt31","VertreterInt31","VertreterInt31")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt32","Int",0,0,0,0,0,0,new Array("VertreterInt32","VertreterInt32","VertreterInt32","VertreterInt32")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt33","Int",0,0,0,0,0,0,new Array("VertreterInt33","VertreterInt33","VertreterInt33","VertreterInt33")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt34","Int",0,0,0,0,0,0,new Array("VertreterInt34","VertreterInt34","VertreterInt34","VertreterInt34")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt35","Int",0,0,0,0,0,0,new Array("VertreterInt35","VertreterInt35","VertreterInt35","VertreterInt35")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt36","Int",0,0,0,0,0,0,new Array("VertreterInt36","VertreterInt36","VertreterInt36","VertreterInt36")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt37","Int",0,0,0,0,0,0,new Array("VertreterInt37","VertreterInt37","VertreterInt37","VertreterInt37")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt38","Int",0,0,0,0,0,0,new Array("VertreterInt38","VertreterInt38","VertreterInt38","VertreterInt38")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt39","Int",0,0,0,0,0,0,new Array("VertreterInt39","VertreterInt39","VertreterInt39","VertreterInt39")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterInt40","Int",0,0,0,0,0,0,new Array("VertreterInt40","VertreterInt40","VertreterInt40","VertreterInt40")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat1","Float",0,0,0,0,0,0,new Array("VertreterFloat1","VertreterFloat1","VertreterFloat1","VertreterFloat1")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat2","Float",0,0,0,0,0,0,new Array("VertreterFloat2","VertreterFloat2","VertreterFloat2","VertreterFloat2")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat3","Float",0,0,0,0,0,0,new Array("VertreterFloat3","VertreterFloat3","VertreterFloat3","VertreterFloat3")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat4","Float",0,0,0,0,0,0,new Array("VertreterFloat4","VertreterFloat4","VertreterFloat4","VertreterFloat4")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat5","Float",0,0,60,60,60,60,new Array("Commission for agents", "Provision für Vertreter", "Commission pour les agents", "给代理的提成")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat6","Float",0,0,61,61,61,61,new Array("Discount for customers", "Rabatt für Kunden", "Remise pour les clients", "给客人的优惠")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat7","Float",0,0,0,0,0,0,new Array("VertreterFloat7","VertreterFloat7","VertreterFloat7","VertreterFloat7")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat8","Float",0,0,0,0,0,0,new Array("VertreterFloat8","VertreterFloat8","VertreterFloat8","VertreterFloat8")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat9","Float",0,0,0,0,0,0,new Array("VertreterFloat9","VertreterFloat9","VertreterFloat9","VertreterFloat9")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat10","Float",0,0,0,0,0,0,new Array("VertreterFloat10","VertreterFloat10","VertreterFloat10","VertreterFloat10")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat11","Float",0,0,0,0,0,0,new Array("VertreterFloat11","VertreterFloat11","VertreterFloat11","VertreterFloat11")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat12","Float",0,0,0,0,0,0,new Array("VertreterFloat12","VertreterFloat12","VertreterFloat12","VertreterFloat12")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat13","Float",0,0,0,0,0,0,new Array("VertreterFloat13","VertreterFloat13","VertreterFloat13","VertreterFloat13")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat14","Float",0,0,0,0,0,0,new Array("VertreterFloat14","VertreterFloat14","VertreterFloat14","VertreterFloat14")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat15","Float",0,0,0,0,0,0,new Array("VertreterFloat15","VertreterFloat15","VertreterFloat15","VertreterFloat15")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat16","Float",0,0,0,0,0,0,new Array("VertreterFloat16","VertreterFloat16","VertreterFloat16","VertreterFloat16")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat17","Float",0,0,0,0,0,0,new Array("VertreterFloat17","VertreterFloat17","VertreterFloat17","VertreterFloat17")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat18","Float",0,0,0,0,0,0,new Array("VertreterFloat18","VertreterFloat18","VertreterFloat18","VertreterFloat18")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat19","Float",0,0,0,0,0,0,new Array("VertreterFloat19","VertreterFloat19","VertreterFloat19","VertreterFloat19")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat20","Float",0,0,0,0,0,0,new Array("VertreterFloat20","VertreterFloat20","VertreterFloat20","VertreterFloat20")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat21","Float",0,0,0,0,0,0,new Array("VertreterFloat21","VertreterFloat21","VertreterFloat21","VertreterFloat21")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat22","Float",0,0,0,0,0,0,new Array("VertreterFloat22","VertreterFloat22","VertreterFloat22","VertreterFloat22")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat23","Float",0,0,0,0,0,0,new Array("VertreterFloat23","VertreterFloat23","VertreterFloat23","VertreterFloat23")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat24","Float",0,0,0,0,0,0,new Array("VertreterFloat24","VertreterFloat24","VertreterFloat24","VertreterFloat24")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat25","Float",0,0,0,0,0,0,new Array("VertreterFloat25","VertreterFloat25","VertreterFloat25","VertreterFloat25")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat26","Float",0,0,0,0,0,0,new Array("VertreterFloat26","VertreterFloat26","VertreterFloat26","VertreterFloat26")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat27","Float",0,0,0,0,0,0,new Array("VertreterFloat27","VertreterFloat27","VertreterFloat27","VertreterFloat27")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat28","Float",0,0,0,0,0,0,new Array("VertreterFloat28","VertreterFloat28","VertreterFloat28","VertreterFloat28")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat29","Float",0,0,0,0,0,0,new Array("VertreterFloat29","VertreterFloat29","VertreterFloat29","VertreterFloat29")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat30","Float",0,0,0,0,0,0,new Array("VertreterFloat30","VertreterFloat30","VertreterFloat30","VertreterFloat30")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat31","Float",0,0,0,0,0,0,new Array("VertreterFloat31","VertreterFloat31","VertreterFloat31","VertreterFloat31")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat32","Float",0,0,0,0,0,0,new Array("VertreterFloat32","VertreterFloat32","VertreterFloat32","VertreterFloat32")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat33","Float",0,0,0,0,0,0,new Array("VertreterFloat33","VertreterFloat33","VertreterFloat33","VertreterFloat33")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat34","Float",0,0,0,0,0,0,new Array("VertreterFloat34","VertreterFloat34","VertreterFloat34","VertreterFloat34")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat35","Float",0,0,0,0,0,0,new Array("VertreterFloat35","VertreterFloat35","VertreterFloat35","VertreterFloat35")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat36","Float",0,0,0,0,0,0,new Array("VertreterFloat36","VertreterFloat36","VertreterFloat36","VertreterFloat36")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat37","Float",0,0,0,0,0,0,new Array("VertreterFloat37","VertreterFloat37","VertreterFloat37","VertreterFloat37")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat38","Float",0,0,0,0,0,0,new Array("VertreterFloat38","VertreterFloat38","VertreterFloat38","VertreterFloat38")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat39","Float",0,0,0,0,0,0,new Array("VertreterFloat39","VertreterFloat39","VertreterFloat39","VertreterFloat39")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterFloat40","Float",0,0,0,0,0,0,new Array("VertreterFloat40","VertreterFloat40","VertreterFloat40","VertreterFloat40")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterBIT1","BIT",0,0,0,0,0,0,new Array("VertreterBIT1","VertreterBIT1","VertreterBIT1","VertreterBIT1")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterBIT2","BIT",0,0,0,0,0,0,new Array("VertreterBIT2","VertreterBIT2","VertreterBIT2","VertreterBIT2")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterBIT3","BIT",0,0,0,0,0,0,new Array("VertreterBIT3","VertreterBIT3","VertreterBIT3","VertreterBIT3")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterBIT4","BIT",0,0,0,0,0,0,new Array("VertreterBIT4","VertreterBIT4","VertreterBIT4","VertreterBIT4")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterBIT5","BIT",0,0,0,0,0,0,new Array("VertreterBIT5","VertreterBIT5","VertreterBIT5","VertreterBIT5")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterBIT6","BIT",0,0,0,0,0,0,new Array("VertreterBIT6","VertreterBIT6","VertreterBIT6","VertreterBIT6")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterBIT7","BIT",0,0,0,0,0,0,new Array("VertreterBIT7","VertreterBIT7","VertreterBIT7","VertreterBIT7")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterBIT8","BIT",0,0,0,0,0,0,new Array("VertreterBIT8","VertreterBIT8","VertreterBIT8","VertreterBIT8")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterBIT9","BIT",0,0,0,0,0,0,new Array("VertreterBIT9","VertreterBIT9","VertreterBIT9","VertreterBIT9")));
showVertreterAttributArr.push(new showVertreterAttributObj("VertreterBIT10","BIT",0,0,0,0,0,0,new Array("VertreterBIT10","VertreterBIT10","VertreterBIT10","VertreterBIT10")));



var VertreterStatusArr = new Array();
VertreterStatusArr.push(["Aktiv", "Active", "Actif", "有效", 1]);
VertreterStatusArr.push(["Deaktiv", "Deactive", "Inactif", "无效", 9]);




function GetQueryString(string){
   var reg = new RegExp('(^|&)'+ string +'=([^&]*)(&|$)');
   var r = window.location.search.substr(1).match(reg);
   if(r!=null)return unescape(r[2]); return null;
}

   
function initGUI(){
	let usernameLabel = "";
	let emailLabel = "";
	let passwordLabel = "";

	switch (lang) {
		case "en":
			usernameLabel = "Username";
			emailLabel = "Email";
			passwordLabel = "Password";
			break;
		case "de":
			usernameLabel = "Benutzername";
			emailLabel = "E-Mail";
			passwordLabel = "Passwort";
			break;
		case "fr":
			usernameLabel = "Nom d'utilisateur";
			emailLabel = "E-mail";
			passwordLabel = "Mot de passe";
			break;
		case "cn":
			usernameLabel = "用户名";
			emailLabel = "邮箱";
			passwordLabel = "密码";
			break;
	}

	document.getElementById("VertreterString1NewLabel").innerHTML = usernameLabel;
	document.getElementById("VertreterString2NewLabel").innerHTML = emailLabel;
	document.getElementById("VertreterString5NewLabel").innerHTML = passwordLabel;

	
	showVertreterAttributArr.sort(compare('indexA'));
	for(var i=0; i<showVertreterAttributArr.length; i++){
	  if(showVertreterAttributArr[i].indexA>0){
		 eval("if(document.getElementById('"+showVertreterAttributArr[i].Attribut+"SearchDiv'))document.getElementById('"+showVertreterAttributArr[i].Attribut+"SearchDiv').style.display='block';");
	  }
	}
	var sel=document.getElementById("StatusSearch");
	for(var i=0; i<VertreterStatusArr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=VertreterStatusArr[i][4];
		temp.text=unescape(VertreterStatusArr[i][langNum]);
		sel.add(temp,sel.options.length);
	}
	var sel=document.getElementById("StatusModal");
	for(var i=0; i<VertreterStatusArr.length; i++){ 
		var temp = document.createElement("option");
		temp.value=VertreterStatusArr[i][4];
		temp.text=unescape(VertreterStatusArr[i][langNum]);
		sel.add(temp,sel.options.length);
	}
	
	document.getElementById("prIDXSearchLabel").innerHTML = getVertreterAttributName("prIDX");
	document.getElementById("frIDXSearchLabel").innerHTML = getVertreterAttributName("frIDX");
	document.getElementById("Datum1_1SearchLabel").innerHTML = getVertreterAttributName("Datum1")+" von";
	document.getElementById("Datum1_2SearchLabel").innerHTML = getVertreterAttributName("Datum1")+" bis";
	document.getElementById("Datum2_1SearchLabel").innerHTML = getVertreterAttributName("Datum2")+" von";
	document.getElementById("Datum2_2SearchLabel").innerHTML = getVertreterAttributName("Datum2")+" bis";
	document.getElementById("Datum3_1SearchLabel").innerHTML = getVertreterAttributName("Datum3")+" von";
	document.getElementById("Datum3_2SearchLabel").innerHTML = getVertreterAttributName("Datum3")+" bis";
	document.getElementById("Datum4_1SearchLabel").innerHTML = getVertreterAttributName("Datum4")+" von";
	document.getElementById("Datum4_2SearchLabel").innerHTML = getVertreterAttributName("Datum4")+" bis";
	document.getElementById("StatusSearchLabel").innerHTML = getVertreterAttributName("Status");
	
	document.getElementById("VertreterString1SearchLabel").innerHTML = getVertreterAttributName("VertreterString1");
	document.getElementById("VertreterString2SearchLabel").innerHTML = getVertreterAttributName("VertreterString2");
	document.getElementById("VertreterString3SearchLabel").innerHTML = getVertreterAttributName("VertreterString3");
	document.getElementById("VertreterString4SearchLabel").innerHTML = getVertreterAttributName("VertreterString4");
	document.getElementById("VertreterString5SearchLabel").innerHTML = getVertreterAttributName("VertreterString5");
	document.getElementById("VertreterString6SearchLabel").innerHTML = getVertreterAttributName("VertreterString6");
	document.getElementById("VertreterString7SearchLabel").innerHTML = getVertreterAttributName("VertreterString7");
	document.getElementById("VertreterString8SearchLabel").innerHTML = getVertreterAttributName("VertreterString8");
	document.getElementById("VertreterString9SearchLabel").innerHTML = getVertreterAttributName("VertreterString9");
	document.getElementById("VertreterString10SearchLabel").innerHTML = getVertreterAttributName("VertreterString10");
	document.getElementById("VertreterString11SearchLabel").innerHTML = getVertreterAttributName("VertreterString11");
	document.getElementById("VertreterString12SearchLabel").innerHTML = getVertreterAttributName("VertreterString12");
	document.getElementById("VertreterString13SearchLabel").innerHTML = getVertreterAttributName("VertreterString13");
	document.getElementById("VertreterString14SearchLabel").innerHTML = getVertreterAttributName("VertreterString14");
	document.getElementById("VertreterString15SearchLabel").innerHTML = getVertreterAttributName("VertreterString15");
	document.getElementById("VertreterString16SearchLabel").innerHTML = getVertreterAttributName("VertreterString16");
	document.getElementById("VertreterString17SearchLabel").innerHTML = getVertreterAttributName("VertreterString17");
	document.getElementById("VertreterString18SearchLabel").innerHTML = getVertreterAttributName("VertreterString18");
	document.getElementById("VertreterString19SearchLabel").innerHTML = getVertreterAttributName("VertreterString19");
	document.getElementById("VertreterString20SearchLabel").innerHTML = getVertreterAttributName("VertreterString20");
	document.getElementById("VertreterString21SearchLabel").innerHTML = getVertreterAttributName("VertreterString21");
	document.getElementById("VertreterString22SearchLabel").innerHTML = getVertreterAttributName("VertreterString22");
	document.getElementById("VertreterString23SearchLabel").innerHTML = getVertreterAttributName("VertreterString23");
	document.getElementById("VertreterString24SearchLabel").innerHTML = getVertreterAttributName("VertreterString24");
	document.getElementById("VertreterString25SearchLabel").innerHTML = getVertreterAttributName("VertreterString25");
	document.getElementById("VertreterString26SearchLabel").innerHTML = getVertreterAttributName("VertreterString26");
	document.getElementById("VertreterString27SearchLabel").innerHTML = getVertreterAttributName("VertreterString27");
	document.getElementById("VertreterString28SearchLabel").innerHTML = getVertreterAttributName("VertreterString28");
	document.getElementById("VertreterString29SearchLabel").innerHTML = getVertreterAttributName("VertreterString29");
	document.getElementById("VertreterString30SearchLabel").innerHTML = getVertreterAttributName("VertreterString30");
	document.getElementById("VertreterString31SearchLabel").innerHTML = getVertreterAttributName("VertreterString31");
	document.getElementById("VertreterString32SearchLabel").innerHTML = getVertreterAttributName("VertreterString32");
	document.getElementById("VertreterString33SearchLabel").innerHTML = getVertreterAttributName("VertreterString33");
	document.getElementById("VertreterString34SearchLabel").innerHTML = getVertreterAttributName("VertreterString34");
	document.getElementById("VertreterString35SearchLabel").innerHTML = getVertreterAttributName("VertreterString35");
	document.getElementById("VertreterString36SearchLabel").innerHTML = getVertreterAttributName("VertreterString36");
	document.getElementById("VertreterString37SearchLabel").innerHTML = getVertreterAttributName("VertreterString37");
	document.getElementById("VertreterString38SearchLabel").innerHTML = getVertreterAttributName("VertreterString38");
	document.getElementById("VertreterString39SearchLabel").innerHTML = getVertreterAttributName("VertreterString39");
	document.getElementById("VertreterString40SearchLabel").innerHTML = getVertreterAttributName("VertreterString40");
	document.getElementById("VertreterString41SearchLabel").innerHTML = getVertreterAttributName("VertreterString41");
	document.getElementById("VertreterString42SearchLabel").innerHTML = getVertreterAttributName("VertreterString42");
	document.getElementById("VertreterString43SearchLabel").innerHTML = getVertreterAttributName("VertreterString43");
	document.getElementById("VertreterString44SearchLabel").innerHTML = getVertreterAttributName("VertreterString44");
	document.getElementById("VertreterString45SearchLabel").innerHTML = getVertreterAttributName("VertreterString45");
	document.getElementById("VertreterString46SearchLabel").innerHTML = getVertreterAttributName("VertreterString46");
	document.getElementById("VertreterString47SearchLabel").innerHTML = getVertreterAttributName("VertreterString47");
	document.getElementById("VertreterString48SearchLabel").innerHTML = getVertreterAttributName("VertreterString48");
	document.getElementById("VertreterString49SearchLabel").innerHTML = getVertreterAttributName("VertreterString49");
	document.getElementById("VertreterString50SearchLabel").innerHTML = getVertreterAttributName("VertreterString50");
	
	document.getElementById("VertreterInt1SearchLabel").innerHTML = getVertreterAttributName("VertreterInt1");
	document.getElementById("VertreterInt2SearchLabel").innerHTML = getVertreterAttributName("VertreterInt2");
	document.getElementById("VertreterInt3SearchLabel").innerHTML = getVertreterAttributName("VertreterInt3");
	document.getElementById("VertreterInt4SearchLabel").innerHTML = getVertreterAttributName("VertreterInt4");
	document.getElementById("VertreterInt5SearchLabel").innerHTML = getVertreterAttributName("VertreterInt5");
	document.getElementById("VertreterInt6SearchLabel").innerHTML = getVertreterAttributName("VertreterInt6");
	document.getElementById("VertreterInt7SearchLabel").innerHTML = getVertreterAttributName("VertreterInt7");
	document.getElementById("VertreterInt8SearchLabel").innerHTML = getVertreterAttributName("VertreterInt8");
	document.getElementById("VertreterInt9SearchLabel").innerHTML = getVertreterAttributName("VertreterInt9");
	document.getElementById("VertreterInt10SearchLabel").innerHTML = getVertreterAttributName("VertreterInt10");
	document.getElementById("VertreterInt11SearchLabel").innerHTML = getVertreterAttributName("VertreterInt11");
	document.getElementById("VertreterInt12SearchLabel").innerHTML = getVertreterAttributName("VertreterInt12");
	document.getElementById("VertreterInt13SearchLabel").innerHTML = getVertreterAttributName("VertreterInt13");
	document.getElementById("VertreterInt14SearchLabel").innerHTML = getVertreterAttributName("VertreterInt14");
	document.getElementById("VertreterInt15SearchLabel").innerHTML = getVertreterAttributName("VertreterInt15");
	document.getElementById("VertreterInt16SearchLabel").innerHTML = getVertreterAttributName("VertreterInt16");
	document.getElementById("VertreterInt17SearchLabel").innerHTML = getVertreterAttributName("VertreterInt17");
	document.getElementById("VertreterInt18SearchLabel").innerHTML = getVertreterAttributName("VertreterInt18");
	document.getElementById("VertreterInt19SearchLabel").innerHTML = getVertreterAttributName("VertreterInt19");
	document.getElementById("VertreterInt20SearchLabel").innerHTML = getVertreterAttributName("VertreterInt20");
	document.getElementById("VertreterInt21SearchLabel").innerHTML = getVertreterAttributName("VertreterInt21");
	document.getElementById("VertreterInt22SearchLabel").innerHTML = getVertreterAttributName("VertreterInt22");
	document.getElementById("VertreterInt23SearchLabel").innerHTML = getVertreterAttributName("VertreterInt23");
	document.getElementById("VertreterInt24SearchLabel").innerHTML = getVertreterAttributName("VertreterInt24");
	document.getElementById("VertreterInt25SearchLabel").innerHTML = getVertreterAttributName("VertreterInt25");
	document.getElementById("VertreterInt26SearchLabel").innerHTML = getVertreterAttributName("VertreterInt26");
	document.getElementById("VertreterInt27SearchLabel").innerHTML = getVertreterAttributName("VertreterInt27");
	document.getElementById("VertreterInt28SearchLabel").innerHTML = getVertreterAttributName("VertreterInt28");
	document.getElementById("VertreterInt29SearchLabel").innerHTML = getVertreterAttributName("VertreterInt29");
	document.getElementById("VertreterInt30SearchLabel").innerHTML = getVertreterAttributName("VertreterInt30");
	document.getElementById("VertreterInt31SearchLabel").innerHTML = getVertreterAttributName("VertreterInt31");
	document.getElementById("VertreterInt32SearchLabel").innerHTML = getVertreterAttributName("VertreterInt32");
	document.getElementById("VertreterInt33SearchLabel").innerHTML = getVertreterAttributName("VertreterInt33");
	document.getElementById("VertreterInt34SearchLabel").innerHTML = getVertreterAttributName("VertreterInt34");
	document.getElementById("VertreterInt35SearchLabel").innerHTML = getVertreterAttributName("VertreterInt35");
	document.getElementById("VertreterInt36SearchLabel").innerHTML = getVertreterAttributName("VertreterInt36");
	document.getElementById("VertreterInt37SearchLabel").innerHTML = getVertreterAttributName("VertreterInt37");
	document.getElementById("VertreterInt38SearchLabel").innerHTML = getVertreterAttributName("VertreterInt38");
	document.getElementById("VertreterInt39SearchLabel").innerHTML = getVertreterAttributName("VertreterInt39");
	document.getElementById("VertreterInt40SearchLabel").innerHTML = getVertreterAttributName("VertreterInt40");
	
	document.getElementById("VertreterFloat1SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat1");
	document.getElementById("VertreterFloat2SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat2");
	document.getElementById("VertreterFloat3SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat3");
	document.getElementById("VertreterFloat4SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat4");
	document.getElementById("VertreterFloat5SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat5");
	document.getElementById("VertreterFloat6SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat6");
	document.getElementById("VertreterFloat7SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat7");
	document.getElementById("VertreterFloat8SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat8");
	document.getElementById("VertreterFloat9SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat9");
	document.getElementById("VertreterFloat10SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat10");
	document.getElementById("VertreterFloat11SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat11");
	document.getElementById("VertreterFloat12SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat12");
	document.getElementById("VertreterFloat13SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat13");
	document.getElementById("VertreterFloat14SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat14");
	document.getElementById("VertreterFloat15SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat15");
	document.getElementById("VertreterFloat16SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat16");
	document.getElementById("VertreterFloat17SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat17");
	document.getElementById("VertreterFloat18SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat18");
	document.getElementById("VertreterFloat19SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat19");
	document.getElementById("VertreterFloat20SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat20");
	document.getElementById("VertreterFloat21SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat21");
	document.getElementById("VertreterFloat22SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat22");
	document.getElementById("VertreterFloat23SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat23");
	document.getElementById("VertreterFloat24SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat24");
	document.getElementById("VertreterFloat25SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat25");
	document.getElementById("VertreterFloat26SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat26");
	document.getElementById("VertreterFloat27SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat27");
	document.getElementById("VertreterFloat28SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat28");
	document.getElementById("VertreterFloat29SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat29");
	document.getElementById("VertreterFloat30SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat30");
	document.getElementById("VertreterFloat31SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat31");
	document.getElementById("VertreterFloat32SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat32");
	document.getElementById("VertreterFloat33SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat33");
	document.getElementById("VertreterFloat34SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat34");
	document.getElementById("VertreterFloat35SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat35");
	document.getElementById("VertreterFloat36SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat36");
	document.getElementById("VertreterFloat37SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat37");
	document.getElementById("VertreterFloat38SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat38");
	document.getElementById("VertreterFloat39SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat39");
	document.getElementById("VertreterFloat40SearchLabel").innerHTML = getVertreterAttributName("VertreterFloat40");

	document.getElementById("VertreterBIT1SearchLabel").innerHTML = getVertreterAttributName("VertreterBIT1");
	document.getElementById("VertreterBIT2SearchLabel").innerHTML = getVertreterAttributName("VertreterBIT2");
	document.getElementById("VertreterBIT3SearchLabel").innerHTML = getVertreterAttributName("VertreterBIT3");
	document.getElementById("VertreterBIT4SearchLabel").innerHTML = getVertreterAttributName("VertreterBIT4");
	document.getElementById("VertreterBIT5SearchLabel").innerHTML = getVertreterAttributName("VertreterBIT5");
	document.getElementById("VertreterBIT6SearchLabel").innerHTML = getVertreterAttributName("VertreterBIT6");
	document.getElementById("VertreterBIT7SearchLabel").innerHTML = getVertreterAttributName("VertreterBIT7");
	document.getElementById("VertreterBIT8SearchLabel").innerHTML = getVertreterAttributName("VertreterBIT8");
	document.getElementById("VertreterBIT9SearchLabel").innerHTML = getVertreterAttributName("VertreterBIT9");
	document.getElementById("VertreterBIT10SearchLabel").innerHTML = getVertreterAttributName("VertreterBIT10");

		
	

	document.getElementById("prIDXModalLabel").innerHTML = getVertreterAttributName("prIDX");
	document.getElementById("frIDXModalLabel").innerHTML = getVertreterAttributName("frIDX");
	document.getElementById("Datum1ModalLabel").innerHTML = getVertreterAttributName("Datum1");
	document.getElementById("Datum2ModalLabel").innerHTML = getVertreterAttributName("Datum2");
	document.getElementById("Datum3ModalLabel").innerHTML = getVertreterAttributName("Datum3");
	document.getElementById("Datum4ModalLabel").innerHTML = getVertreterAttributName("Datum4");
	document.getElementById("StatusModalLabel").innerHTML = getVertreterAttributName("Status");
	
	document.getElementById("VertreterString1ModalLabel").innerHTML = getVertreterAttributName("VertreterString1");
	document.getElementById("VertreterString2ModalLabel").innerHTML = getVertreterAttributName("VertreterString2");
	document.getElementById("VertreterString3ModalLabel").innerHTML = getVertreterAttributName("VertreterString3");
	document.getElementById("VertreterString4ModalLabel").innerHTML = getVertreterAttributName("VertreterString4");
	document.getElementById("VertreterString5ModalLabel").innerHTML = getVertreterAttributName("VertreterString5");
	document.getElementById("VertreterString6ModalLabel").innerHTML = getVertreterAttributName("VertreterString6");
	document.getElementById("VertreterString7ModalLabel").innerHTML = getVertreterAttributName("VertreterString7");
	document.getElementById("VertreterString8ModalLabel").innerHTML = getVertreterAttributName("VertreterString8");
	document.getElementById("VertreterString9ModalLabel").innerHTML = getVertreterAttributName("VertreterString9");
	document.getElementById("VertreterString10ModalLabel").innerHTML = getVertreterAttributName("VertreterString10");
	document.getElementById("VertreterString11ModalLabel").innerHTML = getVertreterAttributName("VertreterString11");
	document.getElementById("VertreterString12ModalLabel").innerHTML = getVertreterAttributName("VertreterString12");
	document.getElementById("VertreterString13ModalLabel").innerHTML = getVertreterAttributName("VertreterString13");
	document.getElementById("VertreterString14ModalLabel").innerHTML = getVertreterAttributName("VertreterString14");
	document.getElementById("VertreterString15ModalLabel").innerHTML = getVertreterAttributName("VertreterString15");
	document.getElementById("VertreterString16ModalLabel").innerHTML = getVertreterAttributName("VertreterString16");
	document.getElementById("VertreterString17ModalLabel").innerHTML = getVertreterAttributName("VertreterString17");
	document.getElementById("VertreterString18ModalLabel").innerHTML = getVertreterAttributName("VertreterString18");
	document.getElementById("VertreterString19ModalLabel").innerHTML = getVertreterAttributName("VertreterString19");
	document.getElementById("VertreterString20ModalLabel").innerHTML = getVertreterAttributName("VertreterString20");
	document.getElementById("VertreterString21ModalLabel").innerHTML = getVertreterAttributName("VertreterString21");
	document.getElementById("VertreterString22ModalLabel").innerHTML = getVertreterAttributName("VertreterString22");
	document.getElementById("VertreterString23ModalLabel").innerHTML = getVertreterAttributName("VertreterString23");
	document.getElementById("VertreterString24ModalLabel").innerHTML = getVertreterAttributName("VertreterString24");
	document.getElementById("VertreterString25ModalLabel").innerHTML = getVertreterAttributName("VertreterString25");
	document.getElementById("VertreterString26ModalLabel").innerHTML = getVertreterAttributName("VertreterString26");
	document.getElementById("VertreterString27ModalLabel").innerHTML = getVertreterAttributName("VertreterString27");
	document.getElementById("VertreterString28ModalLabel").innerHTML = getVertreterAttributName("VertreterString28");
	document.getElementById("VertreterString29ModalLabel").innerHTML = getVertreterAttributName("VertreterString29");
	document.getElementById("VertreterString30ModalLabel").innerHTML = getVertreterAttributName("VertreterString30");
	document.getElementById("VertreterString31ModalLabel").innerHTML = getVertreterAttributName("VertreterString31");
	document.getElementById("VertreterString32ModalLabel").innerHTML = getVertreterAttributName("VertreterString32");
	document.getElementById("VertreterString33ModalLabel").innerHTML = getVertreterAttributName("VertreterString33");
	document.getElementById("VertreterString34ModalLabel").innerHTML = getVertreterAttributName("VertreterString34");
	document.getElementById("VertreterString35ModalLabel").innerHTML = getVertreterAttributName("VertreterString35");
	document.getElementById("VertreterString36ModalLabel").innerHTML = getVertreterAttributName("VertreterString36");
	document.getElementById("VertreterString37ModalLabel").innerHTML = getVertreterAttributName("VertreterString37");
	document.getElementById("VertreterString38ModalLabel").innerHTML = getVertreterAttributName("VertreterString38");
	document.getElementById("VertreterString39ModalLabel").innerHTML = getVertreterAttributName("VertreterString39");
	document.getElementById("VertreterString40ModalLabel").innerHTML = getVertreterAttributName("VertreterString40");
	document.getElementById("VertreterString41ModalLabel").innerHTML = getVertreterAttributName("VertreterString41");
	document.getElementById("VertreterString42ModalLabel").innerHTML = getVertreterAttributName("VertreterString42");
	document.getElementById("VertreterString43ModalLabel").innerHTML = getVertreterAttributName("VertreterString43");
	document.getElementById("VertreterString44ModalLabel").innerHTML = getVertreterAttributName("VertreterString44");
	document.getElementById("VertreterString45ModalLabel").innerHTML = getVertreterAttributName("VertreterString45");
	document.getElementById("VertreterString46ModalLabel").innerHTML = getVertreterAttributName("VertreterString46");
	document.getElementById("VertreterString47ModalLabel").innerHTML = getVertreterAttributName("VertreterString47");
	document.getElementById("VertreterString48ModalLabel").innerHTML = getVertreterAttributName("VertreterString48");
	document.getElementById("VertreterString49ModalLabel").innerHTML = getVertreterAttributName("VertreterString49");
	document.getElementById("VertreterString50ModalLabel").innerHTML = getVertreterAttributName("VertreterString50");
	
	document.getElementById("VertreterInt1ModalLabel").innerHTML = getVertreterAttributName("VertreterInt1");
	document.getElementById("VertreterInt2ModalLabel").innerHTML = getVertreterAttributName("VertreterInt2");
	document.getElementById("VertreterInt3ModalLabel").innerHTML = getVertreterAttributName("VertreterInt3");
	document.getElementById("VertreterInt4ModalLabel").innerHTML = getVertreterAttributName("VertreterInt4");
	document.getElementById("VertreterInt5ModalLabel").innerHTML = getVertreterAttributName("VertreterInt5");
	document.getElementById("VertreterInt6ModalLabel").innerHTML = getVertreterAttributName("VertreterInt6");
	document.getElementById("VertreterInt7ModalLabel").innerHTML = getVertreterAttributName("VertreterInt7");
	document.getElementById("VertreterInt8ModalLabel").innerHTML = getVertreterAttributName("VertreterInt8");
	document.getElementById("VertreterInt9ModalLabel").innerHTML = getVertreterAttributName("VertreterInt9");
	document.getElementById("VertreterInt10ModalLabel").innerHTML = getVertreterAttributName("VertreterInt10");
	document.getElementById("VertreterInt11ModalLabel").innerHTML = getVertreterAttributName("VertreterInt11");
	document.getElementById("VertreterInt12ModalLabel").innerHTML = getVertreterAttributName("VertreterInt12");
	document.getElementById("VertreterInt13ModalLabel").innerHTML = getVertreterAttributName("VertreterInt13");
	document.getElementById("VertreterInt14ModalLabel").innerHTML = getVertreterAttributName("VertreterInt14");
	document.getElementById("VertreterInt15ModalLabel").innerHTML = getVertreterAttributName("VertreterInt15");
	document.getElementById("VertreterInt16ModalLabel").innerHTML = getVertreterAttributName("VertreterInt16");
	document.getElementById("VertreterInt17ModalLabel").innerHTML = getVertreterAttributName("VertreterInt17");
	document.getElementById("VertreterInt18ModalLabel").innerHTML = getVertreterAttributName("VertreterInt18");
	document.getElementById("VertreterInt19ModalLabel").innerHTML = getVertreterAttributName("VertreterInt19");
	document.getElementById("VertreterInt20ModalLabel").innerHTML = getVertreterAttributName("VertreterInt20");
	document.getElementById("VertreterInt21ModalLabel").innerHTML = getVertreterAttributName("VertreterInt21");
	document.getElementById("VertreterInt22ModalLabel").innerHTML = getVertreterAttributName("VertreterInt22");
	document.getElementById("VertreterInt23ModalLabel").innerHTML = getVertreterAttributName("VertreterInt23");
	document.getElementById("VertreterInt24ModalLabel").innerHTML = getVertreterAttributName("VertreterInt24");
	document.getElementById("VertreterInt25ModalLabel").innerHTML = getVertreterAttributName("VertreterInt25");
	document.getElementById("VertreterInt26ModalLabel").innerHTML = getVertreterAttributName("VertreterInt26");
	document.getElementById("VertreterInt27ModalLabel").innerHTML = getVertreterAttributName("VertreterInt27");
	document.getElementById("VertreterInt28ModalLabel").innerHTML = getVertreterAttributName("VertreterInt28");
	document.getElementById("VertreterInt29ModalLabel").innerHTML = getVertreterAttributName("VertreterInt29");
	document.getElementById("VertreterInt30ModalLabel").innerHTML = getVertreterAttributName("VertreterInt30");
	document.getElementById("VertreterInt31ModalLabel").innerHTML = getVertreterAttributName("VertreterInt31");
	document.getElementById("VertreterInt32ModalLabel").innerHTML = getVertreterAttributName("VertreterInt32");
	document.getElementById("VertreterInt33ModalLabel").innerHTML = getVertreterAttributName("VertreterInt33");
	document.getElementById("VertreterInt34ModalLabel").innerHTML = getVertreterAttributName("VertreterInt34");
	document.getElementById("VertreterInt35ModalLabel").innerHTML = getVertreterAttributName("VertreterInt35");
	document.getElementById("VertreterInt36ModalLabel").innerHTML = getVertreterAttributName("VertreterInt36");
	document.getElementById("VertreterInt37ModalLabel").innerHTML = getVertreterAttributName("VertreterInt37");
	document.getElementById("VertreterInt38ModalLabel").innerHTML = getVertreterAttributName("VertreterInt38");
	document.getElementById("VertreterInt39ModalLabel").innerHTML = getVertreterAttributName("VertreterInt39");
	document.getElementById("VertreterInt40ModalLabel").innerHTML = getVertreterAttributName("VertreterInt40");
	
	document.getElementById("VertreterFloat1ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat1");
	document.getElementById("VertreterFloat2ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat2");
	document.getElementById("VertreterFloat3ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat3");
	document.getElementById("VertreterFloat4ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat4");
	document.getElementById("VertreterFloat5ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat5");
	document.getElementById("VertreterFloat6ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat6");
	document.getElementById("VertreterFloat7ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat7");
	document.getElementById("VertreterFloat8ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat8");
	document.getElementById("VertreterFloat9ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat9");
	document.getElementById("VertreterFloat10ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat10");
	document.getElementById("VertreterFloat11ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat11");
	document.getElementById("VertreterFloat12ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat12");
	document.getElementById("VertreterFloat13ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat13");
	document.getElementById("VertreterFloat14ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat14");
	document.getElementById("VertreterFloat15ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat15");
	document.getElementById("VertreterFloat16ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat16");
	document.getElementById("VertreterFloat17ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat17");
	document.getElementById("VertreterFloat18ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat18");
	document.getElementById("VertreterFloat19ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat19");
	document.getElementById("VertreterFloat20ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat20");
	document.getElementById("VertreterFloat21ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat21");
	document.getElementById("VertreterFloat22ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat22");
	document.getElementById("VertreterFloat23ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat23");
	document.getElementById("VertreterFloat24ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat24");
	document.getElementById("VertreterFloat25ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat25");
	document.getElementById("VertreterFloat26ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat26");
	document.getElementById("VertreterFloat27ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat27");
	document.getElementById("VertreterFloat28ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat28");
	document.getElementById("VertreterFloat29ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat29");
	document.getElementById("VertreterFloat30ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat30");
	document.getElementById("VertreterFloat31ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat31");
	document.getElementById("VertreterFloat32ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat32");
	document.getElementById("VertreterFloat33ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat33");
	document.getElementById("VertreterFloat34ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat34");
	document.getElementById("VertreterFloat35ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat35");
	document.getElementById("VertreterFloat36ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat36");
	document.getElementById("VertreterFloat37ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat37");
	document.getElementById("VertreterFloat38ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat38");
	document.getElementById("VertreterFloat39ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat39");
	document.getElementById("VertreterFloat40ModalLabel").innerHTML = getVertreterAttributName("VertreterFloat40");

	document.getElementById("VertreterBIT1ModalLabel").innerHTML = getVertreterAttributName("VertreterBIT1");
	document.getElementById("VertreterBIT2ModalLabel").innerHTML = getVertreterAttributName("VertreterBIT2");
	document.getElementById("VertreterBIT3ModalLabel").innerHTML = getVertreterAttributName("VertreterBIT3");
	document.getElementById("VertreterBIT4ModalLabel").innerHTML = getVertreterAttributName("VertreterBIT4");
	document.getElementById("VertreterBIT5ModalLabel").innerHTML = getVertreterAttributName("VertreterBIT5");
	document.getElementById("VertreterBIT6ModalLabel").innerHTML = getVertreterAttributName("VertreterBIT6");
	document.getElementById("VertreterBIT7ModalLabel").innerHTML = getVertreterAttributName("VertreterBIT7");
	document.getElementById("VertreterBIT8ModalLabel").innerHTML = getVertreterAttributName("VertreterBIT8");
	document.getElementById("VertreterBIT9ModalLabel").innerHTML = getVertreterAttributName("VertreterBIT9");
	document.getElementById("VertreterBIT10ModalLabel").innerHTML = getVertreterAttributName("VertreterBIT10");
	
	hideLoadingDiv();
	if(globalIDX>0) searchVertreter();
}

function searchVertreter(){
   showLoadingDiv();
   document.getElementById('ErgebnisSpan').innerHTML = 0;
   document.getElementById('tableDiv').innerHTML = "";
   document.getElementById('button_add_vat').style.display = "none";
   document.getElementById('button_export_excel').style.display = "none";

	var prIDX=0,frIDX=0,Datum1_1="",Datum2_1="",Datum3_1="",Datum4_1="",Datum1_2="",Datum2_2="",Datum3_2="",Datum4_2="",Status=0;
	var VertreterString1="",VertreterString2="",VertreterString3="",VertreterString4="",VertreterString5="",
		VertreterString6="",VertreterString7="",VertreterString8="",VertreterString9="",VertreterString10="",
		VertreterString11="",VertreterString12="",VertreterString13="",VertreterString14="",VertreterString15="",
		VertreterString16="",VertreterString17="",VertreterString18="",VertreterString19="",VertreterString20="",
		VertreterString21="",VertreterString22="",VertreterString23="",VertreterString24="",VertreterString25="",
		VertreterString26="",VertreterString27="",VertreterString28="",VertreterString29="",VertreterString30="",
		VertreterString31="",VertreterString32="",VertreterString33="",VertreterString34="",VertreterString35="",
		VertreterString36="",VertreterString37="",VertreterString38="",VertreterString39="",VertreterString40="",
		VertreterString41="",VertreterString42="",VertreterString43="",VertreterString44="",VertreterString45="",
		VertreterString46="",VertreterString47="",VertreterString48="",VertreterString49="",VertreterString50="",
		VertreterInt1=0,VertreterInt2=0,VertreterInt3=0,VertreterInt4=0,VertreterInt5=0,
		VertreterInt6=0,VertreterInt7=0,VertreterInt8=0,VertreterInt9=0,VertreterInt10=0,
		VertreterInt11=0,VertreterInt12=0,VertreterInt13=0,VertreterInt14=0,VertreterInt15=0,
		VertreterInt16=0,VertreterInt17=0,VertreterInt18=0,VertreterInt19=0,VertreterInt20=0,
		VertreterInt21=0,VertreterInt22=0,VertreterInt23=0,VertreterInt24=0,VertreterInt25=0,
		VertreterInt26=0,VertreterInt27=0,VertreterInt28=0,VertreterInt29=0,VertreterInt30=0,
		VertreterInt31=0,VertreterInt32=0,VertreterInt33=0,VertreterInt34=0,VertreterInt35=0,
		VertreterInt36=0,VertreterInt37=0,VertreterInt38=0,VertreterInt39=0,VertreterInt40=0,
		VertreterFloat1=0,VertreterFloat2=0,VertreterFloat3=0,VertreterFloat4=0,VertreterFloat5=0,
		VertreterFloat6=0,VertreterFloat7=0,VertreterFloat8=0,VertreterFloat9=0,VertreterFloat10=0,
		VertreterFloat11=0,VertreterFloat12=0,VertreterFloat13=0,VertreterFloat14=0,VertreterFloat15=0,
		VertreterFloat16=0,VertreterFloat17=0,VertreterFloat18=0,VertreterFloat19=0,VertreterFloat20=0,
		VertreterFloat21=0,VertreterFloat22=0,VertreterFloat23=0,VertreterFloat24=0,VertreterFloat25=0,
		VertreterFloat26=0,VertreterFloat27=0,VertreterFloat28=0,VertreterFloat29=0,VertreterFloat30=0,
		VertreterFloat31=0,VertreterFloat32=0,VertreterFloat33=0,VertreterFloat34=0,VertreterFloat35=0,
		VertreterFloat36=0,VertreterFloat37=0,VertreterFloat38=0,VertreterFloat39=0,VertreterFloat40=0,
		VertreterBIT1=0,VertreterBIT2=0,VertreterBIT3=0,VertreterBIT4=0,VertreterBIT5=0,
		VertreterBIT6=0,VertreterBIT7=0,VertreterBIT8=0,VertreterBIT9=0,VertreterBIT10=0;


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
		
	VertreterString1 = escape(escape(document.getElementById("VertreterString1Search").value));
	VertreterString2 = escape(escape(document.getElementById("VertreterString2Search").value));
	VertreterString3 = escape(escape(document.getElementById("VertreterString3Search").value));
	VertreterString4 = escape(escape(document.getElementById("VertreterString4Search").value));
	VertreterString5 = escape(escape(document.getElementById("VertreterString5Search").value));
	VertreterString6 = escape(escape(document.getElementById("VertreterString6Search").value));
	VertreterString7 = escape(escape(document.getElementById("VertreterString7Search").value));
	VertreterString8 = escape(escape(document.getElementById("VertreterString8Search").value));
	VertreterString9 = escape(escape(document.getElementById("VertreterString9Search").value));
	VertreterString10 = escape(escape(document.getElementById("VertreterString10Search").value));
	VertreterString11 = escape(escape(document.getElementById("VertreterString11Search").value));
	VertreterString12 = escape(escape(document.getElementById("VertreterString12Search").value));
	VertreterString13 = escape(escape(document.getElementById("VertreterString13Search").value));
	VertreterString14 = escape(escape(document.getElementById("VertreterString14Search").value));
	VertreterString15 = escape(escape(document.getElementById("VertreterString15Search").value));
	VertreterString16 = escape(escape(document.getElementById("VertreterString16Search").value));
	VertreterString17 = escape(escape(document.getElementById("VertreterString17Search").value));
	VertreterString18 = escape(escape(document.getElementById("VertreterString18Search").value));
	VertreterString19 = escape(escape(document.getElementById("VertreterString19Search").value));
	VertreterString20 = escape(escape(document.getElementById("VertreterString20Search").value));
	VertreterString21 = escape(escape(document.getElementById("VertreterString21Search").value));
	VertreterString22 = escape(escape(document.getElementById("VertreterString22Search").value));
	VertreterString23 = escape(escape(document.getElementById("VertreterString23Search").value));
	VertreterString24 = escape(escape(document.getElementById("VertreterString24Search").value));
	VertreterString25 = escape(escape(document.getElementById("VertreterString25Search").value));
	VertreterString26 = escape(escape(document.getElementById("VertreterString26Search").value));
	VertreterString27 = escape(escape(document.getElementById("VertreterString27Search").value));
	VertreterString28 = escape(escape(document.getElementById("VertreterString28Search").value));
	VertreterString29 = escape(escape(document.getElementById("VertreterString29Search").value));
	VertreterString30 = escape(escape(document.getElementById("VertreterString30Search").value));
	VertreterString31 = escape(escape(document.getElementById("VertreterString31Search").value));
	VertreterString32 = escape(escape(document.getElementById("VertreterString32Search").value));
	VertreterString33 = escape(escape(document.getElementById("VertreterString33Search").value));
	VertreterString34 = escape(escape(document.getElementById("VertreterString34Search").value));
	VertreterString35 = escape(escape(document.getElementById("VertreterString35Search").value));
	VertreterString36 = escape(escape(document.getElementById("VertreterString36Search").value));
	VertreterString37 = escape(escape(document.getElementById("VertreterString37Search").value));
	VertreterString38 = escape(escape(document.getElementById("VertreterString38Search").value));
	VertreterString39 = escape(escape(document.getElementById("VertreterString39Search").value));
	VertreterString40 = escape(escape(document.getElementById("VertreterString40Search").value));
	VertreterString41 = escape(escape(document.getElementById("VertreterString41Search").value));
	VertreterString42 = escape(escape(document.getElementById("VertreterString42Search").value));
	VertreterString43 = escape(escape(document.getElementById("VertreterString43Search").value));
	VertreterString44 = escape(escape(document.getElementById("VertreterString44Search").value));
	VertreterString45 = escape(escape(document.getElementById("VertreterString45Search").value));
	VertreterString46 = escape(escape(document.getElementById("VertreterString46Search").value));
	VertreterString47 = escape(escape(document.getElementById("VertreterString47Search").value));
	VertreterString48 = escape(escape(document.getElementById("VertreterString48Search").value));
	VertreterString49 = escape(escape(document.getElementById("VertreterString49Search").value));
	VertreterString50 = escape(escape(document.getElementById("VertreterString50Search").value));

	if(document.getElementById("VertreterInt1Search").value!="") VertreterInt1 = parseInt(document.getElementById("VertreterInt1Search").value);
	if(document.getElementById("VertreterInt2Search").value!="") VertreterInt2 = parseInt(document.getElementById("VertreterInt2Search").value);
	if(document.getElementById("VertreterInt3Search").value!="") VertreterInt3 = parseInt(document.getElementById("VertreterInt3Search").value);
	if(document.getElementById("VertreterInt4Search").value!="") VertreterInt4 = parseInt(document.getElementById("VertreterInt4Search").value);
	if(document.getElementById("VertreterInt5Search").value!="") VertreterInt5 = parseInt(document.getElementById("VertreterInt5Search").value);
	if(document.getElementById("VertreterInt6Search").value!="") VertreterInt6 = parseInt(document.getElementById("VertreterInt6Search").value);
	if(document.getElementById("VertreterInt7Search").value!="") VertreterInt7 = parseInt(document.getElementById("VertreterInt7Search").value);
	if(document.getElementById("VertreterInt8Search").value!="") VertreterInt8 = parseInt(document.getElementById("VertreterInt8Search").value);
	if(document.getElementById("VertreterInt9Search").value!="") VertreterInt9 = parseInt(document.getElementById("VertreterInt9Search").value);
	if(document.getElementById("VertreterInt10Search").value!="") VertreterInt10 = parseInt(document.getElementById("VertreterInt10Search").value);
	if(document.getElementById("VertreterInt11Search").value!="") VertreterInt11 = parseInt(document.getElementById("VertreterInt11Search").value);
	if(document.getElementById("VertreterInt12Search").value!="") VertreterInt12 = parseInt(document.getElementById("VertreterInt12Search").value);
	if(document.getElementById("VertreterInt13Search").value!="") VertreterInt13 = parseInt(document.getElementById("VertreterInt13Search").value);
	if(document.getElementById("VertreterInt14Search").value!="") VertreterInt14 = parseInt(document.getElementById("VertreterInt14Search").value);
	if(document.getElementById("VertreterInt15Search").value!="") VertreterInt15 = parseInt(document.getElementById("VertreterInt15Search").value);
	if(document.getElementById("VertreterInt16Search").value!="") VertreterInt16 = parseInt(document.getElementById("VertreterInt16Search").value);
	if(document.getElementById("VertreterInt17Search").value!="") VertreterInt17 = parseInt(document.getElementById("VertreterInt17Search").value);
	if(document.getElementById("VertreterInt18Search").value!="") VertreterInt18 = parseInt(document.getElementById("VertreterInt18Search").value);
	if(document.getElementById("VertreterInt19Search").value!="") VertreterInt19 = parseInt(document.getElementById("VertreterInt19Search").value);
	if(document.getElementById("VertreterInt20Search").value!="") VertreterInt20 = parseInt(document.getElementById("VertreterInt20Search").value);
	if(document.getElementById("VertreterInt21Search").value!="") VertreterInt21 = parseInt(document.getElementById("VertreterInt21Search").value);
	if(document.getElementById("VertreterInt22Search").value!="") VertreterInt22 = parseInt(document.getElementById("VertreterInt22Search").value);
	if(document.getElementById("VertreterInt23Search").value!="") VertreterInt23 = parseInt(document.getElementById("VertreterInt23Search").value);
	if(document.getElementById("VertreterInt24Search").value!="") VertreterInt24 = parseInt(document.getElementById("VertreterInt24Search").value);
	if(document.getElementById("VertreterInt25Search").value!="") VertreterInt25 = parseInt(document.getElementById("VertreterInt25Search").value);
	if(document.getElementById("VertreterInt26Search").value!="") VertreterInt26 = parseInt(document.getElementById("VertreterInt26Search").value);
	if(document.getElementById("VertreterInt27Search").value!="") VertreterInt27 = parseInt(document.getElementById("VertreterInt27Search").value);
	if(document.getElementById("VertreterInt28Search").value!="") VertreterInt28 = parseInt(document.getElementById("VertreterInt28Search").value);
	if(document.getElementById("VertreterInt29Search").value!="") VertreterInt29 = parseInt(document.getElementById("VertreterInt29Search").value);
	if(document.getElementById("VertreterInt30Search").value!="") VertreterInt30 = parseInt(document.getElementById("VertreterInt30Search").value);
	if(document.getElementById("VertreterInt31Search").value!="") VertreterInt31 = parseInt(document.getElementById("VertreterInt31Search").value);
	if(document.getElementById("VertreterInt32Search").value!="") VertreterInt32 = parseInt(document.getElementById("VertreterInt32Search").value);
	if(document.getElementById("VertreterInt33Search").value!="") VertreterInt33 = parseInt(document.getElementById("VertreterInt33Search").value);
	if(document.getElementById("VertreterInt34Search").value!="") VertreterInt34 = parseInt(document.getElementById("VertreterInt34Search").value);
	if(document.getElementById("VertreterInt35Search").value!="") VertreterInt35 = parseInt(document.getElementById("VertreterInt35Search").value);
	if(document.getElementById("VertreterInt36Search").value!="") VertreterInt36 = parseInt(document.getElementById("VertreterInt36Search").value);
	if(document.getElementById("VertreterInt37Search").value!="") VertreterInt37 = parseInt(document.getElementById("VertreterInt37Search").value);
	if(document.getElementById("VertreterInt38Search").value!="") VertreterInt38 = parseInt(document.getElementById("VertreterInt38Search").value);
	if(document.getElementById("VertreterInt39Search").value!="") VertreterInt39 = parseInt(document.getElementById("VertreterInt39Search").value);
	if(document.getElementById("VertreterInt40Search").value!="") VertreterInt40 = parseInt(document.getElementById("VertreterInt40Search").value);

	if(document.getElementById("VertreterFloat1Search").value!="") VertreterFloat1 = parseFloat(document.getElementById("VertreterFloat1Search").value);
	if(document.getElementById("VertreterFloat2Search").value!="") VertreterFloat2 = parseFloat(document.getElementById("VertreterFloat2Search").value);
	if(document.getElementById("VertreterFloat3Search").value!="") VertreterFloat3 = parseFloat(document.getElementById("VertreterFloat3Search").value);
	if(document.getElementById("VertreterFloat4Search").value!="") VertreterFloat4 = parseFloat(document.getElementById("VertreterFloat4Search").value);
	if(document.getElementById("VertreterFloat5Search").value!="") VertreterFloat5 = parseFloat(document.getElementById("VertreterFloat5Search").value);
	if(document.getElementById("VertreterFloat6Search").value!="") VertreterFloat6 = parseFloat(document.getElementById("VertreterFloat6Search").value);
	if(document.getElementById("VertreterFloat7Search").value!="") VertreterFloat7 = parseFloat(document.getElementById("VertreterFloat7Search").value);
	if(document.getElementById("VertreterFloat8Search").value!="") VertreterFloat8 = parseFloat(document.getElementById("VertreterFloat8Search").value);
	if(document.getElementById("VertreterFloat9Search").value!="") VertreterFloat9 = parseFloat(document.getElementById("VertreterFloat9Search").value);
	if(document.getElementById("VertreterFloat10Search").value!="") VertreterFloat10 = parseFloat(document.getElementById("VertreterFloat10Search").value);
	if(document.getElementById("VertreterFloat11Search").value!="") VertreterFloat11 = parseFloat(document.getElementById("VertreterFloat11Search").value);
	if(document.getElementById("VertreterFloat12Search").value!="") VertreterFloat12 = parseFloat(document.getElementById("VertreterFloat12Search").value);
	if(document.getElementById("VertreterFloat13Search").value!="") VertreterFloat13 = parseFloat(document.getElementById("VertreterFloat13Search").value);
	if(document.getElementById("VertreterFloat14Search").value!="") VertreterFloat14 = parseFloat(document.getElementById("VertreterFloat14Search").value);
	if(document.getElementById("VertreterFloat15Search").value!="") VertreterFloat15 = parseFloat(document.getElementById("VertreterFloat15Search").value);
	if(document.getElementById("VertreterFloat16Search").value!="") VertreterFloat16 = parseFloat(document.getElementById("VertreterFloat16Search").value);
	if(document.getElementById("VertreterFloat17Search").value!="") VertreterFloat17 = parseFloat(document.getElementById("VertreterFloat17Search").value);
	if(document.getElementById("VertreterFloat18Search").value!="") VertreterFloat18 = parseFloat(document.getElementById("VertreterFloat18Search").value);
	if(document.getElementById("VertreterFloat19Search").value!="") VertreterFloat19 = parseFloat(document.getElementById("VertreterFloat19Search").value);
	if(document.getElementById("VertreterFloat20Search").value!="") VertreterFloat20 = parseFloat(document.getElementById("VertreterFloat20Search").value);
	if(document.getElementById("VertreterFloat21Search").value!="") VertreterFloat21 = parseFloat(document.getElementById("VertreterFloat21Search").value);
	if(document.getElementById("VertreterFloat22Search").value!="") VertreterFloat22 = parseFloat(document.getElementById("VertreterFloat22Search").value);
	if(document.getElementById("VertreterFloat23Search").value!="") VertreterFloat23 = parseFloat(document.getElementById("VertreterFloat23Search").value);
	if(document.getElementById("VertreterFloat24Search").value!="") VertreterFloat24 = parseFloat(document.getElementById("VertreterFloat24Search").value);
	if(document.getElementById("VertreterFloat25Search").value!="") VertreterFloat25 = parseFloat(document.getElementById("VertreterFloat25Search").value);
	if(document.getElementById("VertreterFloat26Search").value!="") VertreterFloat26 = parseFloat(document.getElementById("VertreterFloat26Search").value);
	if(document.getElementById("VertreterFloat27Search").value!="") VertreterFloat27 = parseFloat(document.getElementById("VertreterFloat27Search").value);
	if(document.getElementById("VertreterFloat28Search").value!="") VertreterFloat28 = parseFloat(document.getElementById("VertreterFloat28Search").value);
	if(document.getElementById("VertreterFloat29Search").value!="") VertreterFloat29 = parseFloat(document.getElementById("VertreterFloat29Search").value);
	if(document.getElementById("VertreterFloat30Search").value!="") VertreterFloat30 = parseFloat(document.getElementById("VertreterFloat30Search").value);
	if(document.getElementById("VertreterFloat31Search").value!="") VertreterFloat31 = parseFloat(document.getElementById("VertreterFloat31Search").value);
	if(document.getElementById("VertreterFloat32Search").value!="") VertreterFloat32 = parseFloat(document.getElementById("VertreterFloat32Search").value);
	if(document.getElementById("VertreterFloat33Search").value!="") VertreterFloat33 = parseFloat(document.getElementById("VertreterFloat33Search").value);
	if(document.getElementById("VertreterFloat34Search").value!="") VertreterFloat34 = parseFloat(document.getElementById("VertreterFloat34Search").value);
	if(document.getElementById("VertreterFloat35Search").value!="") VertreterFloat35 = parseFloat(document.getElementById("VertreterFloat35Search").value);
	if(document.getElementById("VertreterFloat36Search").value!="") VertreterFloat36 = parseFloat(document.getElementById("VertreterFloat36Search").value);
	if(document.getElementById("VertreterFloat37Search").value!="") VertreterFloat37 = parseFloat(document.getElementById("VertreterFloat37Search").value);
	if(document.getElementById("VertreterFloat38Search").value!="") VertreterFloat38 = parseFloat(document.getElementById("VertreterFloat38Search").value);
	if(document.getElementById("VertreterFloat39Search").value!="") VertreterFloat39 = parseFloat(document.getElementById("VertreterFloat39Search").value);
	if(document.getElementById("VertreterFloat40Search").value!="") VertreterFloat40 = parseFloat(document.getElementById("VertreterFloat40Search").value);

	if(document.getElementById("VertreterBIT1Search").checked) VertreterBIT1 = 1;
	if(document.getElementById("VertreterBIT2Search").checked) VertreterBIT2 = 1;
	if(document.getElementById("VertreterBIT3Search").checked) VertreterBIT3 = 1;
	if(document.getElementById("VertreterBIT4Search").checked) VertreterBIT4 = 1;
	if(document.getElementById("VertreterBIT5Search").checked) VertreterBIT5 = 1;
	if(document.getElementById("VertreterBIT6Search").checked) VertreterBIT6 = 1;
	if(document.getElementById("VertreterBIT7Search").checked) VertreterBIT7 = 1;
	if(document.getElementById("VertreterBIT8Search").checked) VertreterBIT8 = 1;
	if(document.getElementById("VertreterBIT9Search").checked) VertreterBIT9 = 1;
	if(document.getElementById("VertreterBIT10Search").checked) VertreterBIT10 = 1;

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
	
	if(VertreterString1!="") sql += "AND mainTable.VertreterString1 LIKE '%" + VertreterString1 + "%' ";
	if(VertreterString2!="") sql += "AND mainTable.VertreterString2 LIKE '%" + VertreterString2 + "%' ";
	if(VertreterString3!="") sql += "AND mainTable.VertreterString3 LIKE '%" + VertreterString3 + "%' ";
	if(VertreterString4!="") sql += "AND mainTable.VertreterString4 LIKE '%" + VertreterString4 + "%' ";
	if(VertreterString5!="") sql += "AND mainTable.VertreterString5 LIKE '%" + VertreterString5 + "%' ";
	if(VertreterString6!="") sql += "AND mainTable.VertreterString6 LIKE '%" + VertreterString6 + "%' ";
	if(VertreterString7!="") sql += "AND mainTable.VertreterString7 LIKE '%" + VertreterString7 + "%' ";
	if(VertreterString8!="") sql += "AND mainTable.VertreterString8 LIKE '%" + VertreterString8 + "%' ";
	if(VertreterString9!="") sql += "AND mainTable.VertreterString9 LIKE '%" + VertreterString9 + "%' ";
	if(VertreterString10!="") sql += "AND mainTable.VertreterString10 LIKE '%" + VertreterString10 + "%' ";
	if(VertreterString11!="") sql += "AND mainTable.VertreterString11 LIKE '%" + VertreterString11 + "%' ";
	if(VertreterString12!="") sql += "AND mainTable.VertreterString12 LIKE '%" + VertreterString12 + "%' ";
	if(VertreterString13!="") sql += "AND mainTable.VertreterString13 LIKE '%" + VertreterString13 + "%' ";
	if(VertreterString14!="") sql += "AND mainTable.VertreterString14 LIKE '%" + VertreterString14 + "%' ";
	if(VertreterString15!="") sql += "AND mainTable.VertreterString15 LIKE '%" + VertreterString15 + "%' ";
	if(VertreterString16!="") sql += "AND mainTable.VertreterString16 LIKE '%" + VertreterString16 + "%' ";
	if(VertreterString17!="") sql += "AND mainTable.VertreterString17 LIKE '%" + VertreterString17 + "%' ";
	if(VertreterString18!="") sql += "AND mainTable.VertreterString18 LIKE '%" + VertreterString18 + "%' ";
	if(VertreterString19!="") sql += "AND mainTable.VertreterString19 LIKE '%" + VertreterString19 + "%' ";
	if(VertreterString20!="") sql += "AND mainTable.VertreterString20 LIKE '%" + VertreterString20 + "%' ";
	if(VertreterString21!="") sql += "AND mainTable.VertreterString21 LIKE '%" + VertreterString21 + "%' ";
	if(VertreterString22!="") sql += "AND mainTable.VertreterString22 LIKE '%" + VertreterString22 + "%' ";
	if(VertreterString23!="") sql += "AND mainTable.VertreterString23 LIKE '%" + VertreterString23 + "%' ";
	if(VertreterString24!="") sql += "AND mainTable.VertreterString24 LIKE '%" + VertreterString24 + "%' ";
	if(VertreterString25!="") sql += "AND mainTable.VertreterString25 LIKE '%" + VertreterString25 + "%' ";
	if(VertreterString26!="") sql += "AND mainTable.VertreterString26 LIKE '%" + VertreterString26 + "%' ";
	if(VertreterString27!="") sql += "AND mainTable.VertreterString27 LIKE '%" + VertreterString27 + "%' ";
	if(VertreterString28!="") sql += "AND mainTable.VertreterString28 LIKE '%" + VertreterString28 + "%' ";
	if(VertreterString29!="") sql += "AND mainTable.VertreterString29 LIKE '%" + VertreterString29 + "%' ";
	if(VertreterString30!="") sql += "AND mainTable.VertreterString30 LIKE '%" + VertreterString30 + "%' ";
	if(VertreterString31!="") sql += "AND mainTable.VertreterString31 LIKE '%" + VertreterString31 + "%' ";
	if(VertreterString32!="") sql += "AND mainTable.VertreterString32 LIKE '%" + VertreterString32 + "%' ";
	if(VertreterString33!="") sql += "AND mainTable.VertreterString33 LIKE '%" + VertreterString33 + "%' ";
	if(VertreterString34!="") sql += "AND mainTable.VertreterString34 LIKE '%" + VertreterString34 + "%' ";
	if(VertreterString35!="") sql += "AND mainTable.VertreterString35 LIKE '%" + VertreterString35 + "%' ";
	if(VertreterString36!="") sql += "AND mainTable.VertreterString36 LIKE '%" + VertreterString36 + "%' ";
	if(VertreterString37!="") sql += "AND mainTable.VertreterString37 LIKE '%" + VertreterString37 + "%' ";
	if(VertreterString38!="") sql += "AND mainTable.VertreterString38 LIKE '%" + VertreterString38 + "%' ";
	if(VertreterString39!="") sql += "AND mainTable.VertreterString39 LIKE '%" + VertreterString39 + "%' ";
	if(VertreterString40!="") sql += "AND mainTable.VertreterString40 LIKE '%" + VertreterString40 + "%' ";
	if(VertreterString41!="") sql += "AND mainTable.VertreterString41 LIKE '%" + VertreterString41 + "%' ";
	if(VertreterString42!="") sql += "AND mainTable.VertreterString42 LIKE '%" + VertreterString42 + "%' ";
	if(VertreterString43!="") sql += "AND mainTable.VertreterString43 LIKE '%" + VertreterString43 + "%' ";
	if(VertreterString44!="") sql += "AND mainTable.VertreterString44 LIKE '%" + VertreterString44 + "%' ";
	if(VertreterString45!="") sql += "AND mainTable.VertreterString45 LIKE '%" + VertreterString45 + "%' ";
	if(VertreterString46!="") sql += "AND mainTable.VertreterString46 LIKE '%" + VertreterString46 + "%' ";
	if(VertreterString47!="") sql += "AND mainTable.VertreterString47 LIKE '%" + VertreterString47 + "%' ";
	if(VertreterString48!="") sql += "AND mainTable.VertreterString48 LIKE '%" + VertreterString48 + "%' ";
	if(VertreterString49!="") sql += "AND mainTable.VertreterString49 LIKE '%" + VertreterString49 + "%' ";
	if(VertreterString50!="") sql += "AND mainTable.VertreterString50 LIKE '%" + VertreterString50 + "%' ";
	
	if(VertreterInt1 != 0) sql += "AND mainTable.VertreterInt1 = " + VertreterInt1 + " ";
	if(VertreterInt2 != 0) sql += "AND mainTable.VertreterInt2 = " + VertreterInt2 + " ";
	if(VertreterInt3 != 0) sql += "AND mainTable.VertreterInt3 = " + VertreterInt3 + " ";
	if(VertreterInt4 != 0) sql += "AND mainTable.VertreterInt4 = " + VertreterInt4 + " ";
	if(VertreterInt5 != 0) sql += "AND mainTable.VertreterInt5 = " + VertreterInt5 + " ";
	if(VertreterInt6 != 0) sql += "AND mainTable.VertreterInt6 = " + VertreterInt6 + " ";
	if(VertreterInt7 != 0) sql += "AND mainTable.VertreterInt7 = " + VertreterInt7 + " ";
	if(VertreterInt8 != 0) sql += "AND mainTable.VertreterInt8 = " + VertreterInt8 + " ";
	if(VertreterInt9 != 0) sql += "AND mainTable.VertreterInt9 = " + VertreterInt9 + " ";
	if(VertreterInt10 != 0) sql += "AND mainTable.VertreterInt10 = " + VertreterInt10 + " ";
	if(VertreterInt11 != 0) sql += "AND mainTable.VertreterInt11 = " + VertreterInt11 + " ";
	if(VertreterInt12 != 0) sql += "AND mainTable.VertreterInt12 = " + VertreterInt12 + " ";
	if(VertreterInt13 != 0) sql += "AND mainTable.VertreterInt13 = " + VertreterInt13 + " ";
	if(VertreterInt14 != 0) sql += "AND mainTable.VertreterInt14 = " + VertreterInt14 + " ";
	if(VertreterInt15 != 0) sql += "AND mainTable.VertreterInt15 = " + VertreterInt15 + " ";
	if(VertreterInt16 != 0) sql += "AND mainTable.VertreterInt16 = " + VertreterInt16 + " ";
	if(VertreterInt17 != 0) sql += "AND mainTable.VertreterInt17 = " + VertreterInt17 + " ";
	if(VertreterInt18 != 0) sql += "AND mainTable.VertreterInt18 = " + VertreterInt18 + " ";
	if(VertreterInt19 != 0) sql += "AND mainTable.VertreterInt19 = " + VertreterInt19 + " ";
	if(VertreterInt20 != 0) sql += "AND mainTable.VertreterInt20 = " + VertreterInt20 + " ";
	if(VertreterInt21 != 0) sql += "AND mainTable.VertreterInt21 = " + VertreterInt21 + " ";
	if(VertreterInt22 != 0) sql += "AND mainTable.VertreterInt22 = " + VertreterInt22 + " ";
	if(VertreterInt23 != 0) sql += "AND mainTable.VertreterInt23 = " + VertreterInt23 + " ";
	if(VertreterInt24 != 0) sql += "AND mainTable.VertreterInt24 = " + VertreterInt24 + " ";
	if(VertreterInt25 != 0) sql += "AND mainTable.VertreterInt25 = " + VertreterInt25 + " ";
	if(VertreterInt26 != 0) sql += "AND mainTable.VertreterInt26 = " + VertreterInt26 + " ";
	if(VertreterInt27 != 0) sql += "AND mainTable.VertreterInt27 = " + VertreterInt27 + " ";
	if(VertreterInt28 != 0) sql += "AND mainTable.VertreterInt28 = " + VertreterInt28 + " ";
	if(VertreterInt29 != 0) sql += "AND mainTable.VertreterInt29 = " + VertreterInt29 + " ";
	if(VertreterInt30 != 0) sql += "AND mainTable.VertreterInt30 = " + VertreterInt30 + " ";
	if(VertreterInt31 != 0) sql += "AND mainTable.VertreterInt31 = " + VertreterInt31 + " ";
	if(VertreterInt32 != 0) sql += "AND mainTable.VertreterInt32 = " + VertreterInt32 + " ";
	if(VertreterInt33 != 0) sql += "AND mainTable.VertreterInt33 = " + VertreterInt33 + " ";
	if(VertreterInt34 != 0) sql += "AND mainTable.VertreterInt34 = " + VertreterInt34 + " ";
	if(VertreterInt35 != 0) sql += "AND mainTable.VertreterInt35 = " + VertreterInt35 + " ";
	if(VertreterInt36 != 0) sql += "AND mainTable.VertreterInt36 = " + VertreterInt36 + " ";
	if(VertreterInt37 != 0) sql += "AND mainTable.VertreterInt37 = " + VertreterInt37 + " ";
	if(VertreterInt38 != 0) sql += "AND mainTable.VertreterInt38 = " + VertreterInt38 + " ";
	if(VertreterInt39 != 0) sql += "AND mainTable.VertreterInt39 = " + VertreterInt39 + " ";
	if(VertreterInt40 != 0) sql += "AND mainTable.VertreterInt40 = " + VertreterInt40 + " ";
	
	if(VertreterFloat1 != 0) sql += "AND mainTable.VertreterFloat1 = " + VertreterFloat1 + " ";
	if(VertreterFloat2 != 0) sql += "AND mainTable.VertreterFloat2 = " + VertreterFloat2 + " ";
	if(VertreterFloat3 != 0) sql += "AND mainTable.VertreterFloat3 = " + VertreterFloat3 + " ";
	if(VertreterFloat4 != 0) sql += "AND mainTable.VertreterFloat4 = " + VertreterFloat4 + " ";
	if(VertreterFloat5 != 0) sql += "AND mainTable.VertreterFloat5 = " + VertreterFloat5 + " ";
	if(VertreterFloat6 != 0) sql += "AND mainTable.VertreterFloat6 = " + VertreterFloat6 + " ";
	if(VertreterFloat7 != 0) sql += "AND mainTable.VertreterFloat7 = " + VertreterFloat7 + " ";
	if(VertreterFloat8 != 0) sql += "AND mainTable.VertreterFloat8 = " + VertreterFloat8 + " ";
	if(VertreterFloat9 != 0) sql += "AND mainTable.VertreterFloat9 = " + VertreterFloat9 + " ";
	if(VertreterFloat10 != 0) sql += "AND mainTable.VertreterFloat10 = " + VertreterFloat10 + " ";
	if(VertreterFloat11 != 0) sql += "AND mainTable.VertreterFloat11 = " + VertreterFloat11 + " ";
	if(VertreterFloat12 != 0) sql += "AND mainTable.VertreterFloat12 = " + VertreterFloat12 + " ";
	if(VertreterFloat13 != 0) sql += "AND mainTable.VertreterFloat13 = " + VertreterFloat13 + " ";
	if(VertreterFloat14 != 0) sql += "AND mainTable.VertreterFloat14 = " + VertreterFloat14 + " ";
	if(VertreterFloat15 != 0) sql += "AND mainTable.VertreterFloat15 = " + VertreterFloat15 + " ";
	if(VertreterFloat16 != 0) sql += "AND mainTable.VertreterFloat16 = " + VertreterFloat16 + " ";
	if(VertreterFloat17 != 0) sql += "AND mainTable.VertreterFloat17 = " + VertreterFloat17 + " ";
	if(VertreterFloat18 != 0) sql += "AND mainTable.VertreterFloat18 = " + VertreterFloat18 + " ";
	if(VertreterFloat19 != 0) sql += "AND mainTable.VertreterFloat19 = " + VertreterFloat19 + " ";
	if(VertreterFloat20 != 0) sql += "AND mainTable.VertreterFloat20 = " + VertreterFloat20 + " ";
	if(VertreterFloat21 != 0) sql += "AND mainTable.VertreterFloat21 = " + VertreterFloat21 + " ";
	if(VertreterFloat22 != 0) sql += "AND mainTable.VertreterFloat22 = " + VertreterFloat22 + " ";
	if(VertreterFloat23 != 0) sql += "AND mainTable.VertreterFloat23 = " + VertreterFloat23 + " ";
	if(VertreterFloat24 != 0) sql += "AND mainTable.VertreterFloat24 = " + VertreterFloat24 + " ";
	if(VertreterFloat25 != 0) sql += "AND mainTable.VertreterFloat25 = " + VertreterFloat25 + " ";
	if(VertreterFloat26 != 0) sql += "AND mainTable.VertreterFloat26 = " + VertreterFloat26 + " ";
	if(VertreterFloat27 != 0) sql += "AND mainTable.VertreterFloat27 = " + VertreterFloat27 + " ";
	if(VertreterFloat28 != 0) sql += "AND mainTable.VertreterFloat28 = " + VertreterFloat28 + " ";
	if(VertreterFloat29 != 0) sql += "AND mainTable.VertreterFloat29 = " + VertreterFloat29 + " ";
	if(VertreterFloat30 != 0) sql += "AND mainTable.VertreterFloat30 = " + VertreterFloat30 + " ";
	if(VertreterFloat31 != 0) sql += "AND mainTable.VertreterFloat31 = " + VertreterFloat31 + " ";
	if(VertreterFloat32 != 0) sql += "AND mainTable.VertreterFloat32 = " + VertreterFloat32 + " ";
	if(VertreterFloat33 != 0) sql += "AND mainTable.VertreterFloat33 = " + VertreterFloat33 + " ";
	if(VertreterFloat34 != 0) sql += "AND mainTable.VertreterFloat34 = " + VertreterFloat34 + " ";
	if(VertreterFloat35 != 0) sql += "AND mainTable.VertreterFloat35 = " + VertreterFloat35 + " ";
	if(VertreterFloat36 != 0) sql += "AND mainTable.VertreterFloat36 = " + VertreterFloat36 + " ";
	if(VertreterFloat37 != 0) sql += "AND mainTable.VertreterFloat37 = " + VertreterFloat37 + " ";
	if(VertreterFloat38 != 0) sql += "AND mainTable.VertreterFloat38 = " + VertreterFloat38 + " ";
	if(VertreterFloat39 != 0) sql += "AND mainTable.VertreterFloat39 = " + VertreterFloat39 + " ";
	if(VertreterFloat40 != 0) sql += "AND mainTable.VertreterFloat40 = " + VertreterFloat40 + " ";

	if(VertreterBIT1 != 0) sql += "AND mainTable.VertreterBIT1 = " + VertreterBIT1 + " ";
	if(VertreterBIT2 != 0) sql += "AND mainTable.VertreterBIT2 = " + VertreterBIT2 + " ";
	if(VertreterBIT3 != 0) sql += "AND mainTable.VertreterBIT3 = " + VertreterBIT3 + " ";
	if(VertreterBIT4 != 0) sql += "AND mainTable.VertreterBIT4 = " + VertreterBIT4 + " ";
	if(VertreterBIT5 != 0) sql += "AND mainTable.VertreterBIT5 = " + VertreterBIT5 + " ";
	if(VertreterBIT6 != 0) sql += "AND mainTable.VertreterBIT6 = " + VertreterBIT6 + " ";
	if(VertreterBIT7 != 0) sql += "AND mainTable.VertreterBIT7 = " + VertreterBIT7 + " ";
	if(VertreterBIT8 != 0) sql += "AND mainTable.VertreterBIT8 = " + VertreterBIT8 + " ";
	if(VertreterBIT9 != 0) sql += "AND mainTable.VertreterBIT9 = " + VertreterBIT9 + " ";
	if(VertreterBIT10 != 0) sql += "AND mainTable.VertreterBIT10 = " + VertreterBIT10 + " ";



	
	if(sql!="") sql = "WHERE "+sql.substring(3);
	sql = "SELECT *, '' AS VertreterString5 FROM laaver.Vertreter AS mainTable "+sql+" LIMIT 500";


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
			VertreterArr = new Array();
            if (response.results && Array.isArray(response.results)) {				
                response.results.forEach(function (item) {
                    let obj = {};
					showVertreterAttributArr.forEach(attr => {
						let val = item[attr.Attribut];

						// 1. BIT 类型字段：Buffer 转 0/1
						if (val && typeof val === 'object' && val.type === 'Buffer' && Array.isArray(val.data)) {
							obj[attr.Attribut] = val.data[0] ? 1 : 0;
						}

						// 2. 包含 "Datum" 的字段
						else if (attr.Attribut.includes("Datum")) {
							if (val === null || val === undefined) {
								obj[attr.Attribut] = ""; // null 或 undefined → 空字符串
							} else {
								try {
									obj[attr.Attribut] = val.toString().substring(0, 10); // 取 YYYY-MM-DD
								} catch (e) {
									obj[attr.Attribut] = ""; // 容错
								}
							}
						}

						// 3. 其他字段：正常赋值
						else {
							obj[attr.Attribut] = val;
						}
					});
					
					VertreterArr.push(obj);
                });
				showVertreter();
				document.getElementById('ErgebnisSpan').innerHTML = VertreterArr.length;	
				//document.getElementById('button_export_excel').style.display = "inline-block";
            } else {
                document.getElementById("tableDiv").innerHTML = "";
				document.getElementById('ErgebnisSpan').innerHTML = "0";	
				//document.getElementById('button_export_excel').style.display = "none";
            }
        },
        error: function (xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });  
}

function showVertreter(){
	var txt="";
	showVertreterAttributArr.sort(compare('indexB'));
	txt += "<table class='table table-separate table-head-custom table-checkable' id='kt_datatable'><thead><tr>";
	for(var i=0; i<showVertreterAttributArr.length; i++){
	  if(showVertreterAttributArr[i].indexB>0){
		 txt += "<th>"+unescape(showVertreterAttributArr[i].lang[langNum])+"</th>";
	  }
	}
	txt += "</tr></thead><tbody>";

	for(var i=0; i<VertreterArr.length; i++){
	  txt += "<tr>";
	  for(var j=0; j<showVertreterAttributArr.length; j++){
		 eval("if(showVertreterAttributArr[j].indexB>0){"+
			"if(showVertreterAttributArr[j].indexB==1) txt += '<td><a href=\"javascript:showVertreterModal("+i+")\">VE'+parseInt(10000+parseInt(VertreterArr[i]."+showVertreterAttributArr[j].Attribut+"))+'</a></td>';"+
			"else if(showVertreterAttributArr[j].Attribut=='Status'){ txt += '<td>';"+
			"for(var m=0;m<VertreterStatusArr.length;m++)if(VertreterStatusArr[m][4]==VertreterArr[i].Status)txt+=unescape(VertreterStatusArr[m][langNum]); txt += '</td>';}"+
			"else if(showVertreterAttributArr[j].Type=='BIT') txt += '<td>'+(parseInt(VertreterArr[i]."+showVertreterAttributArr[j].Attribut+")==1?'Yes':'No')+'</td>';"+
			"else if(parseInt(VertreterArr[i]."+showVertreterAttributArr[j].Attribut+")==0) txt += '<td> </td>';"+
			"else txt += '<td>'+unescape(VertreterArr[i]."+showVertreterAttributArr[j].Attribut+")+'</td>'"+
			"}");
	  }
	  txt += "</tr>";
	}
	txt += "</tbody></table>";

	document.getElementById("tableDiv").innerHTML = txt;
	hideLoadingDiv();

	if(globalIDX>0){
		showVertreterModal(0);
		globalIDX=0;
	}
}

function showVertreterModal(idx){
   showVertreterAttributArr.sort(compare('indexC'));
   for(var i=0; i<showVertreterAttributArr.length; i++){
      if(showVertreterAttributArr[i].indexC>0){
         eval("if(document.getElementById('"+showVertreterAttributArr[i].Attribut+"ModalDiv'))document.getElementById('"+showVertreterAttributArr[i].Attribut+"ModalDiv').style.display='block';");
      }
   }

   for(var i=0; i<VertreterArr.length; i++){
      if(i==idx){
			mainIDX = parseInt(VertreterArr[i].prIDX);
		  
			document.getElementById("prIDXModal").value="AG"+parseInt(10000+(VertreterArr[i].prIDX));
			document.getElementById("frIDXModal").value=parseInt(VertreterArr[i].frIDX);
			document.getElementById("Datum1Modal").value=unescape(VertreterArr[i].Datum1);
			document.getElementById("Datum2Modal").value=unescape(VertreterArr[i].Datum2);
			document.getElementById("Datum3Modal").value=unescape(VertreterArr[i].Datum3);
			document.getElementById("Datum4Modal").value=unescape(VertreterArr[i].Datum4);
			document.getElementById("StatusModal").value=parseInt(VertreterArr[i].Status);
		   
		   		   
			document.getElementById("VertreterString1Modal").value = unescape(VertreterArr[i].VertreterString1);
			document.getElementById("VertreterString2Modal").value = unescape(VertreterArr[i].VertreterString2);
			document.getElementById("VertreterString3Modal").value = unescape(VertreterArr[i].VertreterString3);
			document.getElementById("VertreterString4Modal").value = unescape(VertreterArr[i].VertreterString4);
			document.getElementById("VertreterString5Modal").value = unescape(VertreterArr[i].VertreterString5);
			document.getElementById("VertreterString6Modal").value = unescape(VertreterArr[i].VertreterString6);
			document.getElementById("VertreterString7Modal").value = unescape(VertreterArr[i].VertreterString7);
			document.getElementById("VertreterString8Modal").value = unescape(VertreterArr[i].VertreterString8);
			document.getElementById("VertreterString9Modal").value = unescape(VertreterArr[i].VertreterString9);
			document.getElementById("VertreterString10Modal").value = unescape(VertreterArr[i].VertreterString10);
			document.getElementById("VertreterString11Modal").value = unescape(VertreterArr[i].VertreterString11);
			document.getElementById("VertreterString12Modal").value = unescape(VertreterArr[i].VertreterString12);
			document.getElementById("VertreterString13Modal").value = unescape(VertreterArr[i].VertreterString13);
			document.getElementById("VertreterString14Modal").value = unescape(VertreterArr[i].VertreterString14);
			document.getElementById("VertreterString15Modal").value = unescape(VertreterArr[i].VertreterString15);
			document.getElementById("VertreterString16Modal").value = unescape(VertreterArr[i].VertreterString16);
			document.getElementById("VertreterString17Modal").value = unescape(VertreterArr[i].VertreterString17);
			document.getElementById("VertreterString18Modal").value = unescape(VertreterArr[i].VertreterString18);
			document.getElementById("VertreterString19Modal").value = unescape(VertreterArr[i].VertreterString19);
			document.getElementById("VertreterString20Modal").value = unescape(VertreterArr[i].VertreterString20);
			document.getElementById("VertreterString21Modal").value = unescape(VertreterArr[i].VertreterString21);
			document.getElementById("VertreterString22Modal").value = unescape(VertreterArr[i].VertreterString22);
			document.getElementById("VertreterString23Modal").value = unescape(VertreterArr[i].VertreterString23);
			document.getElementById("VertreterString24Modal").value = unescape(VertreterArr[i].VertreterString24);
			document.getElementById("VertreterString25Modal").value = unescape(VertreterArr[i].VertreterString25);
			document.getElementById("VertreterString26Modal").value = unescape(VertreterArr[i].VertreterString26);
			document.getElementById("VertreterString27Modal").value = unescape(VertreterArr[i].VertreterString27);
			document.getElementById("VertreterString28Modal").value = unescape(VertreterArr[i].VertreterString28);
			document.getElementById("VertreterString29Modal").value = unescape(VertreterArr[i].VertreterString29);
			document.getElementById("VertreterString30Modal").value = unescape(VertreterArr[i].VertreterString30);
			document.getElementById("VertreterString31Modal").value = unescape(VertreterArr[i].VertreterString31);
			document.getElementById("VertreterString32Modal").value = unescape(VertreterArr[i].VertreterString32);
			document.getElementById("VertreterString33Modal").value = unescape(VertreterArr[i].VertreterString33);
			document.getElementById("VertreterString34Modal").value = unescape(VertreterArr[i].VertreterString34);
			document.getElementById("VertreterString35Modal").value = unescape(VertreterArr[i].VertreterString35);
			document.getElementById("VertreterString36Modal").value = unescape(VertreterArr[i].VertreterString36);
			document.getElementById("VertreterString37Modal").value = unescape(VertreterArr[i].VertreterString37);
			document.getElementById("VertreterString38Modal").value = unescape(VertreterArr[i].VertreterString38);
			document.getElementById("VertreterString39Modal").value = unescape(VertreterArr[i].VertreterString39);
			document.getElementById("VertreterString40Modal").value = unescape(VertreterArr[i].VertreterString40);
			document.getElementById("VertreterString41Modal").value = unescape(VertreterArr[i].VertreterString41);
			document.getElementById("VertreterString42Modal").value = unescape(VertreterArr[i].VertreterString42);
			document.getElementById("VertreterString43Modal").value = unescape(VertreterArr[i].VertreterString43);
			document.getElementById("VertreterString44Modal").value = unescape(VertreterArr[i].VertreterString44);
			document.getElementById("VertreterString45Modal").value = unescape(VertreterArr[i].VertreterString45);
			document.getElementById("VertreterString46Modal").value = unescape(VertreterArr[i].VertreterString46);
			document.getElementById("VertreterString47Modal").value = unescape(VertreterArr[i].VertreterString47);
			document.getElementById("VertreterString48Modal").value = unescape(VertreterArr[i].VertreterString48);
			document.getElementById("VertreterString49Modal").value = unescape(VertreterArr[i].VertreterString49);
			document.getElementById("VertreterString50Modal").value = unescape(VertreterArr[i].VertreterString50);
			
			document.getElementById("VertreterInt1Modal").value = parseInt(VertreterArr[i].VertreterInt1) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt1);
			document.getElementById("VertreterInt2Modal").value = parseInt(VertreterArr[i].VertreterInt2) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt2);
			document.getElementById("VertreterInt3Modal").value = parseInt(VertreterArr[i].VertreterInt3) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt3);
			document.getElementById("VertreterInt4Modal").value = parseInt(VertreterArr[i].VertreterInt4) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt4);
			document.getElementById("VertreterInt5Modal").value = parseInt(VertreterArr[i].VertreterInt5) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt5);
			document.getElementById("VertreterInt6Modal").value = parseInt(VertreterArr[i].VertreterInt6) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt6);
			document.getElementById("VertreterInt7Modal").value = parseInt(VertreterArr[i].VertreterInt7) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt7);
			document.getElementById("VertreterInt8Modal").value = parseInt(VertreterArr[i].VertreterInt8) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt8);
			document.getElementById("VertreterInt9Modal").value = parseInt(VertreterArr[i].VertreterInt9) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt9);
			document.getElementById("VertreterInt10Modal").value = parseInt(VertreterArr[i].VertreterInt10) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt10);
			document.getElementById("VertreterInt11Modal").value = parseInt(VertreterArr[i].VertreterInt11) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt11);
			document.getElementById("VertreterInt12Modal").value = parseInt(VertreterArr[i].VertreterInt12) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt12);
			document.getElementById("VertreterInt13Modal").value = parseInt(VertreterArr[i].VertreterInt13) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt13);
			document.getElementById("VertreterInt14Modal").value = parseInt(VertreterArr[i].VertreterInt14) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt14);
			document.getElementById("VertreterInt15Modal").value = parseInt(VertreterArr[i].VertreterInt15) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt15);
			document.getElementById("VertreterInt16Modal").value = parseInt(VertreterArr[i].VertreterInt16) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt16);
			document.getElementById("VertreterInt17Modal").value = parseInt(VertreterArr[i].VertreterInt17) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt17);
			document.getElementById("VertreterInt18Modal").value = parseInt(VertreterArr[i].VertreterInt18) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt18);
			document.getElementById("VertreterInt19Modal").value = parseInt(VertreterArr[i].VertreterInt19) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt19);
			document.getElementById("VertreterInt20Modal").value = parseInt(VertreterArr[i].VertreterInt20) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt20);
			document.getElementById("VertreterInt21Modal").value = parseInt(VertreterArr[i].VertreterInt21) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt21);
			document.getElementById("VertreterInt22Modal").value = parseInt(VertreterArr[i].VertreterInt22) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt22);
			document.getElementById("VertreterInt23Modal").value = parseInt(VertreterArr[i].VertreterInt23) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt23);
			document.getElementById("VertreterInt24Modal").value = parseInt(VertreterArr[i].VertreterInt24) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt24);
			document.getElementById("VertreterInt25Modal").value = parseInt(VertreterArr[i].VertreterInt25) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt25);
			document.getElementById("VertreterInt26Modal").value = parseInt(VertreterArr[i].VertreterInt26) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt26);
			document.getElementById("VertreterInt27Modal").value = parseInt(VertreterArr[i].VertreterInt27) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt27);
			document.getElementById("VertreterInt28Modal").value = parseInt(VertreterArr[i].VertreterInt28) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt28);
			document.getElementById("VertreterInt29Modal").value = parseInt(VertreterArr[i].VertreterInt29) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt29);
			document.getElementById("VertreterInt30Modal").value = parseInt(VertreterArr[i].VertreterInt30) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt30);
			document.getElementById("VertreterInt31Modal").value = parseInt(VertreterArr[i].VertreterInt31) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt31);
			document.getElementById("VertreterInt32Modal").value = parseInt(VertreterArr[i].VertreterInt32) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt32);
			document.getElementById("VertreterInt33Modal").value = parseInt(VertreterArr[i].VertreterInt33) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt33);
			document.getElementById("VertreterInt34Modal").value = parseInt(VertreterArr[i].VertreterInt34) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt34);
			document.getElementById("VertreterInt35Modal").value = parseInt(VertreterArr[i].VertreterInt35) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt35);
			document.getElementById("VertreterInt36Modal").value = parseInt(VertreterArr[i].VertreterInt36) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt36);
			document.getElementById("VertreterInt37Modal").value = parseInt(VertreterArr[i].VertreterInt37) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt37);
			document.getElementById("VertreterInt38Modal").value = parseInt(VertreterArr[i].VertreterInt38) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt38);
			document.getElementById("VertreterInt39Modal").value = parseInt(VertreterArr[i].VertreterInt39) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt39);
			document.getElementById("VertreterInt40Modal").value = parseInt(VertreterArr[i].VertreterInt40) == 0 ? "" : parseInt(VertreterArr[i].VertreterInt40);
			
			document.getElementById("VertreterFloat1Modal").value = parseFloat(VertreterArr[i].VertreterFloat1) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat1);
			document.getElementById("VertreterFloat2Modal").value = parseFloat(VertreterArr[i].VertreterFloat2) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat2);
			document.getElementById("VertreterFloat3Modal").value = parseFloat(VertreterArr[i].VertreterFloat3) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat3);
			document.getElementById("VertreterFloat4Modal").value = parseFloat(VertreterArr[i].VertreterFloat4) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat4);
			document.getElementById("VertreterFloat5Modal").value = parseFloat(VertreterArr[i].VertreterFloat5) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat5);
			document.getElementById("VertreterFloat6Modal").value = parseFloat(VertreterArr[i].VertreterFloat6) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat6);
			document.getElementById("VertreterFloat7Modal").value = parseFloat(VertreterArr[i].VertreterFloat7) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat7);
			document.getElementById("VertreterFloat8Modal").value = parseFloat(VertreterArr[i].VertreterFloat8) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat8);
			document.getElementById("VertreterFloat9Modal").value = parseFloat(VertreterArr[i].VertreterFloat9) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat9);
			document.getElementById("VertreterFloat10Modal").value = parseFloat(VertreterArr[i].VertreterFloat10) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat10);
			document.getElementById("VertreterFloat11Modal").value = parseFloat(VertreterArr[i].VertreterFloat11) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat11);
			document.getElementById("VertreterFloat12Modal").value = parseFloat(VertreterArr[i].VertreterFloat12) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat12);
			document.getElementById("VertreterFloat13Modal").value = parseFloat(VertreterArr[i].VertreterFloat13) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat13);
			document.getElementById("VertreterFloat14Modal").value = parseFloat(VertreterArr[i].VertreterFloat14) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat14);
			document.getElementById("VertreterFloat15Modal").value = parseFloat(VertreterArr[i].VertreterFloat15) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat15);
			document.getElementById("VertreterFloat16Modal").value = parseFloat(VertreterArr[i].VertreterFloat16) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat16);
			document.getElementById("VertreterFloat17Modal").value = parseFloat(VertreterArr[i].VertreterFloat17) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat17);
			document.getElementById("VertreterFloat18Modal").value = parseFloat(VertreterArr[i].VertreterFloat18) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat18);
			document.getElementById("VertreterFloat19Modal").value = parseFloat(VertreterArr[i].VertreterFloat19) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat19);
			document.getElementById("VertreterFloat20Modal").value = parseFloat(VertreterArr[i].VertreterFloat20) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat20);
			document.getElementById("VertreterFloat21Modal").value = parseFloat(VertreterArr[i].VertreterFloat21) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat21);
			document.getElementById("VertreterFloat22Modal").value = parseFloat(VertreterArr[i].VertreterFloat22) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat22);
			document.getElementById("VertreterFloat23Modal").value = parseFloat(VertreterArr[i].VertreterFloat23) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat23);
			document.getElementById("VertreterFloat24Modal").value = parseFloat(VertreterArr[i].VertreterFloat24) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat24);
			document.getElementById("VertreterFloat25Modal").value = parseFloat(VertreterArr[i].VertreterFloat25) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat25);
			document.getElementById("VertreterFloat26Modal").value = parseFloat(VertreterArr[i].VertreterFloat26) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat26);
			document.getElementById("VertreterFloat27Modal").value = parseFloat(VertreterArr[i].VertreterFloat27) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat27);
			document.getElementById("VertreterFloat28Modal").value = parseFloat(VertreterArr[i].VertreterFloat28) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat28);
			document.getElementById("VertreterFloat29Modal").value = parseFloat(VertreterArr[i].VertreterFloat29) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat29);
			document.getElementById("VertreterFloat30Modal").value = parseFloat(VertreterArr[i].VertreterFloat30) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat30);
			document.getElementById("VertreterFloat31Modal").value = parseFloat(VertreterArr[i].VertreterFloat31) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat31);
			document.getElementById("VertreterFloat32Modal").value = parseFloat(VertreterArr[i].VertreterFloat32) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat32);
			document.getElementById("VertreterFloat33Modal").value = parseFloat(VertreterArr[i].VertreterFloat33) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat33);
			document.getElementById("VertreterFloat34Modal").value = parseFloat(VertreterArr[i].VertreterFloat34) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat34);
			document.getElementById("VertreterFloat35Modal").value = parseFloat(VertreterArr[i].VertreterFloat35) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat35);
			document.getElementById("VertreterFloat36Modal").value = parseFloat(VertreterArr[i].VertreterFloat36) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat36);
			document.getElementById("VertreterFloat37Modal").value = parseFloat(VertreterArr[i].VertreterFloat37) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat37);
			document.getElementById("VertreterFloat38Modal").value = parseFloat(VertreterArr[i].VertreterFloat38) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat38);
			document.getElementById("VertreterFloat39Modal").value = parseFloat(VertreterArr[i].VertreterFloat39) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat39);
			document.getElementById("VertreterFloat40Modal").value = parseFloat(VertreterArr[i].VertreterFloat40) == 0 ? "" : parseFloat(VertreterArr[i].VertreterFloat40);

			if (parseInt(VertreterArr[i].VertreterBIT1) == 0) document.getElementById("VertreterBIT1Modal").removeAttribute("checked"); else document.getElementById("VertreterBIT1Modal").setAttribute("checked", "checked");
			if (parseInt(VertreterArr[i].VertreterBIT2) == 0) document.getElementById("VertreterBIT2Modal").removeAttribute("checked"); else document.getElementById("VertreterBIT2Modal").setAttribute("checked", "checked");
			if (parseInt(VertreterArr[i].VertreterBIT3) == 0) document.getElementById("VertreterBIT3Modal").removeAttribute("checked"); else document.getElementById("VertreterBIT3Modal").setAttribute("checked", "checked");
			if (parseInt(VertreterArr[i].VertreterBIT4) == 0) document.getElementById("VertreterBIT4Modal").removeAttribute("checked"); else document.getElementById("VertreterBIT4Modal").setAttribute("checked", "checked");
			if (parseInt(VertreterArr[i].VertreterBIT5) == 0) document.getElementById("VertreterBIT5Modal").removeAttribute("checked"); else document.getElementById("VertreterBIT5Modal").setAttribute("checked", "checked");
			if (parseInt(VertreterArr[i].VertreterBIT6) == 0) document.getElementById("VertreterBIT6Modal").removeAttribute("checked"); else document.getElementById("VertreterBIT6Modal").setAttribute("checked", "checked");
			if (parseInt(VertreterArr[i].VertreterBIT7) == 0) document.getElementById("VertreterBIT7Modal").removeAttribute("checked"); else document.getElementById("VertreterBIT7Modal").setAttribute("checked", "checked");
			if (parseInt(VertreterArr[i].VertreterBIT8) == 0) document.getElementById("VertreterBIT8Modal").removeAttribute("checked"); else document.getElementById("VertreterBIT8Modal").setAttribute("checked", "checked");
			if (parseInt(VertreterArr[i].VertreterBIT9) == 0) document.getElementById("VertreterBIT9Modal").removeAttribute("checked"); else document.getElementById("VertreterBIT9Modal").setAttribute("checked", "checked");
			if (parseInt(VertreterArr[i].VertreterBIT10) == 0) document.getElementById("VertreterBIT10Modal").removeAttribute("checked"); else document.getElementById("VertreterBIT10Modal").setAttribute("checked", "checked");


			document.getElementById("VertreterLinkModal").value = "https://laaver.com/register?vertreter="+VertreterArr[i].VertreterString25+"";		

			if(VertreterArr[i].Status<7){
				document.getElementById("prIDXModal").setAttribute('disabled','disabled');
				document.getElementById("frIDXModal").setAttribute('disabled','disabled');
				document.getElementById("Datum1Modal").setAttribute('disabled','disabled');
				//document.getElementById("StatusModal").setAttribute('disabled','disabled');
				document.getElementById("VertreterString1Modal").setAttribute('disabled','disabled');
				document.getElementById("VertreterString2Modal").setAttribute('disabled','disabled');
				//document.getElementById("VertreterString3Modal").setAttribute('disabled','disabled');
				//document.getElementById("VertreterString4Modal").setAttribute('disabled','disabled');
				document.getElementById("VertreterString5Modal").setAttribute('disabled','disabled');
				//document.getElementById("VertreterString6Modal").setAttribute('disabled','disabled');
				//document.getElementById("VertreterString7Modal").setAttribute('disabled','disabled');
				document.getElementById("VertreterString8Modal").setAttribute('disabled','disabled');
				document.getElementById("VertreterString9Modal").setAttribute('disabled','disabled');
				document.getElementById("VertreterString10Modal").setAttribute('disabled','disabled');
				//document.getElementById("VertreterString20Modal").setAttribute('disabled','disabled');
				//document.getElementById("VertreterString21Modal").setAttribute('disabled','disabled');
				//document.getElementById("VertreterString22Modal").setAttribute('disabled','disabled');
				//document.getElementById("VertreterString23Modal").setAttribute('disabled','disabled');
				document.getElementById("VertreterString24Modal").setAttribute('disabled','disabled');
				document.getElementById("VertreterString25Modal").setAttribute('disabled','disabled');
				document.getElementById("VertreterString26Modal").setAttribute('disabled','disabled');
				document.getElementById("VertreterString27Modal").setAttribute('disabled','disabled');
				document.getElementById("VertreterString28Modal").setAttribute('disabled','disabled');
				document.getElementById("VertreterString29Modal").setAttribute('disabled','disabled');
				
				if(Rolle!=1){
					document.getElementById("VertreterFloat5Modal").setAttribute('disabled','disabled');
					document.getElementById("VertreterFloat6Modal").setAttribute('disabled','disabled');
				}				
				
				document.getElementById("button_modal_save").style.display = "inline-block";
			}else{
				for(var i=0; i<showVertreterAttributArr.length; i++){
					if(showVertreterAttributArr[i].indexC>0){
						document.getElementById(showVertreterAttributArr[i].Attribut+"Modal").setAttribute('disabled','disabled');
					}
			    }
				document.getElementById("button_modal_save").style.display = "none";
			}
      }
   }
   $('#exampleModal').modal('show');
   searchAgent();
}

function searchAgent(){
	$.ajax({
        type: "POST",
        url: "/General_Select",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        cache: false,
        data: {
			SQL_TXT: escape("SELECT * FROM laaver.vertreter_preis WHERE frIDX="+parseInt(mainIDX)+""),
		},
        success: function (response) {
			AgentArr = new Array();
            if (response.results && Array.isArray(response.results)) {				
                response.results.forEach(function (item) {
				   let obj = {};
					Object.keys(item).forEach(function (key) {
					   let val = item[key];
					   // 1. BIT → 0/1
						if (val && typeof val === "object" && val.type === "Buffer" && Array.isArray(val.data)) {
							obj[key] = val.data[0] ? 1 : 0;
						}
					   // 2. 带 “Datum” 的字段 → YYYY-MM-DD
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
					   // 3. 其他字段
						else {
							obj[key] = val;
						}
					});					
					AgentArr.push(obj);
                });
				searchProduktPreis();			
            }
        },
        error: function (xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });  
}

function searchProduktPreis(){
	$.ajax({
		type: "POST",
		url: "/General_Select",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        cache: false,
        data: {
			SQL_TXT: escape("SELECT mainTable.*,mainTable.prIDX AS sprIDX, mainTable.frIDX AS sfrIDX, Attribute.*,Attribute.prIDX AS AttributeprIDX, Attribute.frIDX AS AttributefrIDX, CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1, CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2, CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3, CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4  FROM laaver.Produkt AS mainTable  INNER JOIN laaver.Produkt_Attribute AS Attribute ON Attribute.frIDX=mainTable.prIDX AND Attribute.AliAttributeBIT1=1  WHERE NOT Status=0"),
		},
		success: function (response) {
		   ArtikelAttributeAllgemeinArr = [];
		   if (response.results && Array.isArray(response.results)) {
			   response.results.forEach(function (item) {
				   let obj = {};
				   // 🔥 自动遍历数据库返回的所有字段，无需 showAgentAttributArr
					Object.keys(item).forEach(function (key) {
					   let val = item[key];
					   // 1. BIT → 0/1
						if (val && typeof val === "object" && val.type === "Buffer" && Array.isArray(val.data)) {
							obj[key] = val.data[0] ? 1 : 0;
						}
					   // 2. 带 “Datum” 的字段 → YYYY-MM-DD
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
					   // 3. 其他字段
						else {
							obj[key] = val;
						}
				   });
				   ArtikelAttributeAllgemeinArr.push(obj);
				});
				
				ArtikelAttributeAllgemeinArr = sortProduktPreis(ArtikelAttributeAllgemeinArr);
				showProduktPreis();
			}
		},
		error: function (xhr, status, error) {
			console.error("Node AJAX 请求失败: ", status, error);
		}
	});

}


function sortProduktPreis(list, extraInfoByFrIDX = {}) {
    const map = {};

    ArtikelAttributeAllgemeinArr.forEach(item => {
        const fr = item.frIDX;

        if (!map[fr]) {
            // 初始化主商品
            map[fr] = {
                prIDX: fr,
                frIDX: 0,
                Datum1: item.Datum1,
                Datum2: item.Datum2,
                Datum3: item.Datum3,
                Datum4: item.Datum4,
                Status: item.Status,

                // 全部 ProduktString 放入
                ProduktString10: item.ProduktString10,
                ProduktString11: item.ProduktString11,
                ProduktString12: item.ProduktString12,
                ProduktString13: item.ProduktString13,
                ProduktString14: item.ProduktString14,
                ProduktString15: item.ProduktString15,
                ProduktString16: item.ProduktString16,
                ProduktString17: item.ProduktString17,
                ProduktString18: item.ProduktString18,
                ProduktString19: item.ProduktString19,
                ProduktString20: item.ProduktString20,
                ProduktString21: item.ProduktString21,
                ProduktString22: item.ProduktString22,
                ProduktString23: item.ProduktString23,
                ProduktString24: item.ProduktString24,
                ProduktString25: item.ProduktString25,
                ProduktString26: item.ProduktString26,
                ProduktString27: item.ProduktString27,
                ProduktString28: item.ProduktString28,
                ProduktString29: item.ProduktString29,

                // Int 系列
                ProduktInt1: item.ProduktInt1,
                ProduktInt2: item.ProduktInt2,
                ProduktInt3: item.ProduktInt3,
                ProduktInt4: item.ProduktInt4,
                ProduktInt5: item.ProduktInt5,

                // Float 系列
                ProduktFloat1: item.ProduktFloat1,
                ProduktFloat2: item.ProduktFloat2,
                ProduktFloat3: item.ProduktFloat3,
                ProduktFloat4: item.ProduktFloat4,
                ProduktFloat5: item.ProduktFloat5,
                ProduktFloat6: item.ProduktFloat6,

                ProduktBIT1: item.ProduktBIT1,
                ProduktBIT2: item.ProduktBIT2,

                Attribute: []
            };
        }

        // Attribute 子项目加入
        map[fr].Attribute.push({
            prIDX: item.prIDX,
            frIDX: item.frIDX,
            showType: "null",
            skuPropertyName: item.skuPropertyName,
            propertyValueDefinitionName: "null",
            propertyValueDisplayName: item.propertyValueDisplayName,
            skuPropertyTips: "null",
            skuPropertyValueTips: "null",
            skuPropertyImagePath: "null",
            skuPropertyImageSummPath: "null",
            ali_order: null,
            skuPropertyId: null,
            skuPropertyValueShowOrder: null,
            propertyValueId: item.propertyValueId,
            propertyValueIdLong: null,
            isShowTypeColor: "null",
            showTypeColor: "null",
            propertyValueName: "null",
            skuColorValue: "null",
            AliAttributeString1: "null",
            AliAttributeString2: "null",
            AliAttributeString3: "null",
            AliAttributeString4: "null",
            AliAttributeString5: "null",
            AliAttributeString6: "null",
            AliAttributeInt1: null,
            AliAttributeInt2: null,
            AliAttributeInt3: null,
            AliAttributeInt4: null,
            AliAttributeFloat1: null,
            AliAttributeFloat2: null,
            AliAttributeFloat3: null,
            AliAttributeFloat4: null,
            AliAttributeBIT1: item.AliAttributeBIT1,
            AliAttributeBIT2: item.AliAttributeBIT2
        });
    });

    return Object.values(map);
}

function showProduktPreis(){   
   var txt = "";
   for(var i=0; i<ArtikelAttributeAllgemeinArr.length; i++){
	   txt += "<div class='col-xl-3 col-md-12' style='padding:15px;border-top: 1px solid #CCC;'><img style='max-width:250px;' src='https://www.leuchtkunstrahmen.com/file/product/"+ArtikelAttributeAllgemeinArr[i].ProduktString29+"' /></div>";
	   txt += "<div class='col-xl-9 col-md-12' style='padding:15px;border-top: 1px solid #CCC;'><div style='font-weight:bold;font-size:16px;'>"+unescape(ArtikelAttributeAllgemeinArr[i].ProduktString16)+"</div><div class='row' style='padding:10px;'>";
	   for(var j=0; j<ArtikelAttributeAllgemeinArr[i].Attribute.length; j++){		   
		    txt += "<div class='col-xl-4 col-md-12 pt-2' style='border:1px solid #FFF;line-height:36px;'>"+unescape(ArtikelAttributeAllgemeinArr[i].Attribute[j].skuPropertyName)+" - "+unescape(ArtikelAttributeAllgemeinArr[i].Attribute[j].propertyValueDisplayName)+":</div>";
			txt += "<div class='col-xl-2 col-md-12 pt-2' style='border:1px solid #FFF;line-height:36px;'>&nbsp;&nbsp;Sale Preis&nbsp;&nbsp;</div>";
			txt += "<div class='col-xl-2 col-md-12 pt-2'><input type='number' class='form-control' style='width:100%;' id='Attribute11_"+i+"_"+j+"' value='";
			
			for(var x=0; x<AgentArr.length; x++){
				for(y=0; y<AgentArr[x].AgentString10.split("##").length; y++){
					if(ArtikelAttributeAllgemeinArr[i].Attribute[j].prIDX==AgentArr[x].AgentString10.split("##")[j]){
						txt += parseFloat(AgentArr[x].AgentString11.split("##")[j]).toFixed(2);						
						break; break;
					}
				}
			}
			
			txt += "' disabled='disabled'/></div>";
			
			txt += "<div class='col-xl-2 col-md-12 pt-2' style='border:1px solid #FFF;line-height:36px;'>&nbsp;&nbsp;Our Preis&nbsp;&nbsp;</div>";
			txt += "<div class='col-xl-2 col-md-12 pt-2'><input type='number' class='form-control' style='width:100%;' id='Attribute12_"+i+"_"+j+"' value='";
			
			for(var x=0; x<AgentArr.length; x++){
				for(y=0; y<AgentArr[x].AgentString10.split("##").length; y++){
					if(ArtikelAttributeAllgemeinArr[i].Attribute[j].prIDX==AgentArr[x].AgentString10.split("##")[j]){
						txt += parseFloat(AgentArr[x].AgentString12.split("##")[j]).toFixed(2);						
						break; break;
					}
				}
			}
			
			txt += "' /></div>";
		   
	   }
	   txt += "</div></div>";
   }
  
   document.getElementById("ProduktPreisDiv").innerHTML = txt;
}

function saveProduktPreis(){	
	var AgentTempArr = new Array(),AgentString10="",AgentString11="",AgentString12="";
	
	for(var i=0; i<ArtikelAttributeAllgemeinArr.length; i++){
		AgentString10="",AgentString11="",AgentString12="";
		for(var j=0; j<ArtikelAttributeAllgemeinArr[i].Attribute.length; j++){
			if(AgentString10!="") AgentString10 += "##";
			if(AgentString11!="") AgentString11 += "##";
			if(AgentString12!="") AgentString12 += "##";
			
			AgentString10 += parseInt(ArtikelAttributeAllgemeinArr[i].Attribute[j].prIDX);
			AgentString11 += document.getElementById("Attribute11_"+i+"_"+j).value==""?0:parseFloat(document.getElementById("Attribute11_"+i+"_"+j).value);
			AgentString12 += document.getElementById("Attribute12_"+i+"_"+j).value==""?0:parseFloat(document.getElementById("Attribute12_"+i+"_"+j).value);
		}
		AgentTempArr.push([mainIDX,ArtikelAttributeAllgemeinArr[i].prIDX,AgentString10,AgentString11,AgentString12]);
	}
   
   $.ajax({
        type: "POST",
        url: "/Vertreter_3",
        contentType: 'application/x-www-form-urlencoded',
        async: true,
        cache: false,
        data: {
			UserID: mainIDX,
			AgentTempArr: JSON.stringify(AgentTempArr),
		},
        success: function (response) {			
			saveVertreter();
        },
        error: function (xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });  
}

function saveVertreter(){
	//更新对象所需的参数
	var VertreterModalArr = [
				  "VertreterString11", "VertreterString12", "VertreterString13", "VertreterString14", "VertreterString15",
				  "VertreterString16", "VertreterString17", "VertreterString18", "VertreterString19", "VertreterString30",
				  "VertreterString31", "VertreterString32", "VertreterString33", "VertreterString34", "VertreterString35",
				  "VertreterString36", "VertreterString37", "VertreterString38", "VertreterString39", "VertreterString40",
				  "VertreterString41", "VertreterString42", "VertreterString43", "VertreterString44", "VertreterString45",
				  "VertreterString46", "VertreterString47", "VertreterString48", "VertreterString49", "VertreterString50",

				  "VertreterInt1", "VertreterInt2", "VertreterInt3", "VertreterInt4", "VertreterInt5",
				  "VertreterInt6", "VertreterInt7", "VertreterInt8", "VertreterInt9", "VertreterInt10",
				  "VertreterInt11", "VertreterInt12", "VertreterInt13", "VertreterInt14", "VertreterInt15",
				  "VertreterInt16", "VertreterInt17", "VertreterInt18", "VertreterInt19", "VertreterInt20",
				  "VertreterInt21", "VertreterInt22", "VertreterInt23", "VertreterInt24", "VertreterInt25",
				  "VertreterInt26", "VertreterInt27", "VertreterInt28", "VertreterInt29", "VertreterInt30",
				  "VertreterInt31", "VertreterInt32", "VertreterInt33", "VertreterInt34", "VertreterInt35",
				  "VertreterInt36", "VertreterInt37", "VertreterInt38", "VertreterInt39", "VertreterInt40",

				  "VertreterFloat1", "VertreterFloat2", "VertreterFloat3", "VertreterFloat4", "VertreterFloat5",
				  "VertreterFloat6", "VertreterFloat7", "VertreterFloat8", "VertreterFloat9", "VertreterFloat10",
				  "VertreterFloat11", "VertreterFloat12", "VertreterFloat13", "VertreterFloat14", "VertreterFloat15",
				  "VertreterFloat16", "VertreterFloat17", "VertreterFloat18", "VertreterFloat19", "VertreterFloat20",
				  "VertreterFloat21", "VertreterFloat22", "VertreterFloat23", "VertreterFloat24", "VertreterFloat25",
				  "VertreterFloat26", "VertreterFloat27", "VertreterFloat28", "VertreterFloat29", "VertreterFloat30",
				  "VertreterFloat31", "VertreterFloat32", "VertreterFloat33", "VertreterFloat34", "VertreterFloat35",
				  "VertreterFloat36", "VertreterFloat37", "VertreterFloat38", "VertreterFloat39", "VertreterFloat40",
				  
				  "VertreterBIT1", "VertreterBIT2", "VertreterBIT3", "VertreterBIT4", "VertreterBIT5",
				  "VertreterBIT6", "VertreterBIT7", "VertreterBIT8", "VertreterBIT9", "VertreterBIT10"
				];
	
	var prIDX=0,frIDX=0,Datum1="",Datum2="",Datum3="",Datum4="",Status=0;
	var VertreterString1="",VertreterString2="",VertreterString3="",VertreterString4="",VertreterString5="",
	VertreterString6="",VertreterString7="",VertreterString8="",VertreterString9="",VertreterString10="",
	VertreterString11="",VertreterString12="",VertreterString13="",VertreterString14="",VertreterString15="",
	VertreterString16="",VertreterString17="",VertreterString18="",VertreterString19="",VertreterString20="",
	VertreterString21="",VertreterString22="",VertreterString23="",VertreterString24="",VertreterString25="",
	VertreterString26="",VertreterString27="",VertreterString28="",VertreterString29="",VertreterString30="",
	VertreterString31="",VertreterString32="",VertreterString33="",VertreterString34="",VertreterString35="",
	VertreterString36="",VertreterString37="",VertreterString38="",VertreterString39="",VertreterString40="",
	VertreterString41="",VertreterString42="",VertreterString43="",VertreterString44="",VertreterString45="",
	VertreterString46="",VertreterString47="",VertreterString48="",VertreterString49="",VertreterString50="",
	VertreterInt1=0,VertreterInt2=0,VertreterInt3=0,VertreterInt4=0,VertreterInt5=0,
	VertreterInt6=0,VertreterInt7=0,VertreterInt8=0,VertreterInt9=0,VertreterInt10=0,
	VertreterInt11=0,VertreterInt12=0,VertreterInt13=0,VertreterInt14=0,VertreterInt15=0,
	VertreterInt16=0,VertreterInt17=0,VertreterInt18=0,VertreterInt19=0,VertreterInt20=0,
	VertreterInt21=0,VertreterInt22=0,VertreterInt23=0,VertreterInt24=0,VertreterInt25=0,
	VertreterInt26=0,VertreterInt27=0,VertreterInt28=0,VertreterInt29=0,VertreterInt30=0,
	VertreterInt31=0,VertreterInt32=0,VertreterInt33=0,VertreterInt34=0,VertreterInt35=0,
	VertreterInt36=0,VertreterInt37=0,VertreterInt38=0,VertreterInt39=0,VertreterInt40=0,
	VertreterFloat1=0,VertreterFloat2=0,VertreterFloat3=0,VertreterFloat4=0,VertreterFloat5=0,
	VertreterFloat6=0,VertreterFloat7=0,VertreterFloat8=0,VertreterFloat9=0,VertreterFloat10=0,
	VertreterFloat11=0,VertreterFloat12=0,VertreterFloat13=0,VertreterFloat14=0,VertreterFloat15=0,
	VertreterFloat16=0,VertreterFloat17=0,VertreterFloat18=0,VertreterFloat19=0,VertreterFloat20=0,
	VertreterFloat21=0,VertreterFloat22=0,VertreterFloat23=0,VertreterFloat24=0,VertreterFloat25=0,
	VertreterFloat26=0,VertreterFloat27=0,VertreterFloat28=0,VertreterFloat29=0,VertreterFloat30=0,
	VertreterFloat31=0,VertreterFloat32=0,VertreterFloat33=0,VertreterFloat34=0,VertreterFloat35=0,
	VertreterFloat36=0,VertreterFloat37=0,VertreterFloat38=0,VertreterFloat39=0,VertreterFloat40=0,
	VertreterBIT1=0,VertreterBIT2=0,VertreterBIT3=0,VertreterBIT4=0,VertreterBIT5=0,
	VertreterBIT6=0,VertreterBIT7=0,VertreterBIT8=0,VertreterBIT9=0,VertreterBIT10=0;	

	if(document.getElementById("VertreterInt1Modal").value!="") VertreterInt1 = parseInt(document.getElementById("VertreterInt1Modal").value);
	if(document.getElementById("VertreterInt2Modal").value!="") VertreterInt2 = parseInt(document.getElementById("VertreterInt2Modal").value);
	if(document.getElementById("VertreterInt3Modal").value!="") VertreterInt3 = parseInt(document.getElementById("VertreterInt3Modal").value);
	if(document.getElementById("VertreterInt4Modal").value!="") VertreterInt4 = parseInt(document.getElementById("VertreterInt4Modal").value);
	if(document.getElementById("VertreterInt5Modal").value!="") VertreterInt5 = parseInt(document.getElementById("VertreterInt5Modal").value);
	if(document.getElementById("VertreterInt6Modal").value!="") VertreterInt6 = parseInt(document.getElementById("VertreterInt6Modal").value);
	if(document.getElementById("VertreterInt7Modal").value!="") VertreterInt7 = parseInt(document.getElementById("VertreterInt7Modal").value);
	if(document.getElementById("VertreterInt8Modal").value!="") VertreterInt8 = parseInt(document.getElementById("VertreterInt8Modal").value);
	if(document.getElementById("VertreterInt9Modal").value!="") VertreterInt9 = parseInt(document.getElementById("VertreterInt9Modal").value);
	if(document.getElementById("VertreterInt10Modal").value!="") VertreterInt10 = parseInt(document.getElementById("VertreterInt10Modal").value);
	if(document.getElementById("VertreterInt11Modal").value!="") VertreterInt11 = parseInt(document.getElementById("VertreterInt11Modal").value);
	if(document.getElementById("VertreterInt12Modal").value!="") VertreterInt12 = parseInt(document.getElementById("VertreterInt12Modal").value);
	if(document.getElementById("VertreterInt13Modal").value!="") VertreterInt13 = parseInt(document.getElementById("VertreterInt13Modal").value);
	if(document.getElementById("VertreterInt14Modal").value!="") VertreterInt14 = parseInt(document.getElementById("VertreterInt14Modal").value);
	if(document.getElementById("VertreterInt15Modal").value!="") VertreterInt15 = parseInt(document.getElementById("VertreterInt15Modal").value);
	if(document.getElementById("VertreterInt16Modal").value!="") VertreterInt16 = parseInt(document.getElementById("VertreterInt16Modal").value);
	if(document.getElementById("VertreterInt17Modal").value!="") VertreterInt17 = parseInt(document.getElementById("VertreterInt17Modal").value);
	if(document.getElementById("VertreterInt18Modal").value!="") VertreterInt18 = parseInt(document.getElementById("VertreterInt18Modal").value);
	if(document.getElementById("VertreterInt19Modal").value!="") VertreterInt19 = parseInt(document.getElementById("VertreterInt19Modal").value);
	if(document.getElementById("VertreterInt20Modal").value!="") VertreterInt20 = parseInt(document.getElementById("VertreterInt20Modal").value);
	if(document.getElementById("VertreterInt21Modal").value!="") VertreterInt21 = parseInt(document.getElementById("VertreterInt21Modal").value);
	if(document.getElementById("VertreterInt22Modal").value!="") VertreterInt22 = parseInt(document.getElementById("VertreterInt22Modal").value);
	if(document.getElementById("VertreterInt23Modal").value!="") VertreterInt23 = parseInt(document.getElementById("VertreterInt23Modal").value);
	if(document.getElementById("VertreterInt24Modal").value!="") VertreterInt24 = parseInt(document.getElementById("VertreterInt24Modal").value);
	if(document.getElementById("VertreterInt25Modal").value!="") VertreterInt25 = parseInt(document.getElementById("VertreterInt25Modal").value);
	if(document.getElementById("VertreterInt26Modal").value!="") VertreterInt26 = parseInt(document.getElementById("VertreterInt26Modal").value);
	if(document.getElementById("VertreterInt27Modal").value!="") VertreterInt27 = parseInt(document.getElementById("VertreterInt27Modal").value);
	if(document.getElementById("VertreterInt28Modal").value!="") VertreterInt28 = parseInt(document.getElementById("VertreterInt28Modal").value);
	if(document.getElementById("VertreterInt29Modal").value!="") VertreterInt29 = parseInt(document.getElementById("VertreterInt29Modal").value);
	if(document.getElementById("VertreterInt30Modal").value!="") VertreterInt30 = parseInt(document.getElementById("VertreterInt30Modal").value);
	if(document.getElementById("VertreterInt31Modal").value!="") VertreterInt31 = parseInt(document.getElementById("VertreterInt31Modal").value);
	if(document.getElementById("VertreterInt32Modal").value!="") VertreterInt32 = parseInt(document.getElementById("VertreterInt32Modal").value);
	if(document.getElementById("VertreterInt33Modal").value!="") VertreterInt33 = parseInt(document.getElementById("VertreterInt33Modal").value);
	if(document.getElementById("VertreterInt34Modal").value!="") VertreterInt34 = parseInt(document.getElementById("VertreterInt34Modal").value);
	if(document.getElementById("VertreterInt35Modal").value!="") VertreterInt35 = parseInt(document.getElementById("VertreterInt35Modal").value);
	if(document.getElementById("VertreterInt36Modal").value!="") VertreterInt36 = parseInt(document.getElementById("VertreterInt36Modal").value);
	if(document.getElementById("VertreterInt37Modal").value!="") VertreterInt37 = parseInt(document.getElementById("VertreterInt37Modal").value);
	if(document.getElementById("VertreterInt38Modal").value!="") VertreterInt38 = parseInt(document.getElementById("VertreterInt38Modal").value);
	if(document.getElementById("VertreterInt39Modal").value!="") VertreterInt39 = parseInt(document.getElementById("VertreterInt39Modal").value);
	if(document.getElementById("VertreterInt40Modal").value!="") VertreterInt40 = parseInt(document.getElementById("VertreterInt40Modal").value);

	if(document.getElementById("VertreterFloat1Modal").value!="") VertreterFloat1 = parseFloat(document.getElementById("VertreterFloat1Modal").value);
	if(document.getElementById("VertreterFloat2Modal").value!="") VertreterFloat2 = parseFloat(document.getElementById("VertreterFloat2Modal").value);
	if(document.getElementById("VertreterFloat3Modal").value!="") VertreterFloat3 = parseFloat(document.getElementById("VertreterFloat3Modal").value);
	if(document.getElementById("VertreterFloat4Modal").value!="") VertreterFloat4 = parseFloat(document.getElementById("VertreterFloat4Modal").value);
	if(document.getElementById("VertreterFloat5Modal").value!="") VertreterFloat5 = parseFloat(document.getElementById("VertreterFloat5Modal").value);
	if(document.getElementById("VertreterFloat6Modal").value!="") VertreterFloat6 = parseFloat(document.getElementById("VertreterFloat6Modal").value);
	if(document.getElementById("VertreterFloat7Modal").value!="") VertreterFloat7 = parseFloat(document.getElementById("VertreterFloat7Modal").value);
	if(document.getElementById("VertreterFloat8Modal").value!="") VertreterFloat8 = parseFloat(document.getElementById("VertreterFloat8Modal").value);
	if(document.getElementById("VertreterFloat9Modal").value!="") VertreterFloat9 = parseFloat(document.getElementById("VertreterFloat9Modal").value);
	if(document.getElementById("VertreterFloat10Modal").value!="") VertreterFloat10 = parseFloat(document.getElementById("VertreterFloat10Modal").value);
	if(document.getElementById("VertreterFloat11Modal").value!="") VertreterFloat11 = parseFloat(document.getElementById("VertreterFloat11Modal").value);
	if(document.getElementById("VertreterFloat12Modal").value!="") VertreterFloat12 = parseFloat(document.getElementById("VertreterFloat12Modal").value);
	if(document.getElementById("VertreterFloat13Modal").value!="") VertreterFloat13 = parseFloat(document.getElementById("VertreterFloat13Modal").value);
	if(document.getElementById("VertreterFloat14Modal").value!="") VertreterFloat14 = parseFloat(document.getElementById("VertreterFloat14Modal").value);
	if(document.getElementById("VertreterFloat15Modal").value!="") VertreterFloat15 = parseFloat(document.getElementById("VertreterFloat15Modal").value);
	if(document.getElementById("VertreterFloat16Modal").value!="") VertreterFloat16 = parseFloat(document.getElementById("VertreterFloat16Modal").value);
	if(document.getElementById("VertreterFloat17Modal").value!="") VertreterFloat17 = parseFloat(document.getElementById("VertreterFloat17Modal").value);
	if(document.getElementById("VertreterFloat18Modal").value!="") VertreterFloat18 = parseFloat(document.getElementById("VertreterFloat18Modal").value);
	if(document.getElementById("VertreterFloat19Modal").value!="") VertreterFloat19 = parseFloat(document.getElementById("VertreterFloat19Modal").value);
	if(document.getElementById("VertreterFloat20Modal").value!="") VertreterFloat20 = parseFloat(document.getElementById("VertreterFloat20Modal").value);
	if(document.getElementById("VertreterFloat21Modal").value!="") VertreterFloat21 = parseFloat(document.getElementById("VertreterFloat21Modal").value);
	if(document.getElementById("VertreterFloat22Modal").value!="") VertreterFloat22 = parseFloat(document.getElementById("VertreterFloat22Modal").value);
	if(document.getElementById("VertreterFloat23Modal").value!="") VertreterFloat23 = parseFloat(document.getElementById("VertreterFloat23Modal").value);
	if(document.getElementById("VertreterFloat24Modal").value!="") VertreterFloat24 = parseFloat(document.getElementById("VertreterFloat24Modal").value);
	if(document.getElementById("VertreterFloat25Modal").value!="") VertreterFloat25 = parseFloat(document.getElementById("VertreterFloat25Modal").value);
	if(document.getElementById("VertreterFloat26Modal").value!="") VertreterFloat26 = parseFloat(document.getElementById("VertreterFloat26Modal").value);
	if(document.getElementById("VertreterFloat27Modal").value!="") VertreterFloat27 = parseFloat(document.getElementById("VertreterFloat27Modal").value);
	if(document.getElementById("VertreterFloat28Modal").value!="") VertreterFloat28 = parseFloat(document.getElementById("VertreterFloat28Modal").value);
	if(document.getElementById("VertreterFloat29Modal").value!="") VertreterFloat29 = parseFloat(document.getElementById("VertreterFloat29Modal").value);
	if(document.getElementById("VertreterFloat30Modal").value!="") VertreterFloat30 = parseFloat(document.getElementById("VertreterFloat30Modal").value);
	if(document.getElementById("VertreterFloat31Modal").value!="") VertreterFloat31 = parseFloat(document.getElementById("VertreterFloat31Modal").value);
	if(document.getElementById("VertreterFloat32Modal").value!="") VertreterFloat32 = parseFloat(document.getElementById("VertreterFloat32Modal").value);
	if(document.getElementById("VertreterFloat33Modal").value!="") VertreterFloat33 = parseFloat(document.getElementById("VertreterFloat33Modal").value);
	if(document.getElementById("VertreterFloat34Modal").value!="") VertreterFloat34 = parseFloat(document.getElementById("VertreterFloat34Modal").value);
	if(document.getElementById("VertreterFloat35Modal").value!="") VertreterFloat35 = parseFloat(document.getElementById("VertreterFloat35Modal").value);
	if(document.getElementById("VertreterFloat36Modal").value!="") VertreterFloat36 = parseFloat(document.getElementById("VertreterFloat36Modal").value);
	if(document.getElementById("VertreterFloat37Modal").value!="") VertreterFloat37 = parseFloat(document.getElementById("VertreterFloat37Modal").value);
	if(document.getElementById("VertreterFloat38Modal").value!="") VertreterFloat38 = parseFloat(document.getElementById("VertreterFloat38Modal").value);
	if(document.getElementById("VertreterFloat39Modal").value!="") VertreterFloat39 = parseFloat(document.getElementById("VertreterFloat39Modal").value);
	if(document.getElementById("VertreterFloat40Modal").value!="") VertreterFloat40 = parseFloat(document.getElementById("VertreterFloat40Modal").value);

	if(document.getElementById("VertreterBIT1Modal").checked) VertreterBIT1 = 1;
	if(document.getElementById("VertreterBIT2Modal").checked) VertreterBIT2 = 1;
	if(document.getElementById("VertreterBIT3Modal").checked) VertreterBIT3 = 1;
	if(document.getElementById("VertreterBIT4Modal").checked) VertreterBIT4 = 1;
	if(document.getElementById("VertreterBIT5Modal").checked) VertreterBIT5 = 1;
	if(document.getElementById("VertreterBIT6Modal").checked) VertreterBIT6 = 1;
	if(document.getElementById("VertreterBIT7Modal").checked) VertreterBIT7 = 1;
	if(document.getElementById("VertreterBIT8Modal").checked) VertreterBIT8 = 1;
	if(document.getElementById("VertreterBIT9Modal").checked) VertreterBIT9 = 1;
	if(document.getElementById("VertreterBIT10Modal").checked) VertreterBIT10 = 1;
	
	
	
	var sql = "";	
	for(var i=0; i<VertreterModalArr.length; i++){
		if(sql!="") sql += ",";
		if(String(VertreterModalArr[i]).indexOf("Float")>0)
			 eval('sql += String(VertreterModalArr[i]) + " = "+'+VertreterModalArr[i]+'+"";');
		else if(String(VertreterModalArr[i]).indexOf("Int")>0 || String(VertreterModalArr[i]).indexOf("BIT")>0)
			 eval('sql += String(VertreterModalArr[i]) + " = "+'+VertreterModalArr[i]+'+"";');
		else eval('sql += String(VertreterModalArr[i]) + " = \'"+'+VertreterModalArr[i]+'+"\'";');
	}
	
	if(document.getElementById("Datum2Modal").value!="")	sql += ",Datum2='"+escape(document.getElementById("Datum2Modal").value)+"'";
	if(document.getElementById("Datum3Modal").value!="")	sql += ",Datum3='"+escape(document.getElementById("Datum3Modal").value)+"'";
	if(document.getElementById("Datum4Modal").value!="")	sql += ",Datum4='"+escape(document.getElementById("Datum4Modal").value)+"'";
	if(document.getElementById("StatusModal").value!="")	sql += ",Status="+parseInt(document.getElementById("StatusModal").value)+"";	
	
	sql = "UPDATE laaver.Vertreter SET " + sql + " WHERE prIDX="+mainIDX+"";
	
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
			switch (lang){
			   case 0: alert(unescape("Daten wurden geändert!")); break;
			   case 1: alert(unescape("Information has been changed!")); break;
			   case 2: alert(unescape("信息已更改！")); break;
			}
			window.location.href = "/Vertreter?prIDX="+mainIDX;
        },
        error: function (xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });  
}

function showNewVertreterModal(){
   $('#exampleNewModal').modal('show');
}

function saveNewVertreter(){
	//新增对象所需的参数
	var VertreterNewArr = ["VertreterString1", "VertreterString2", "VertreterString5"];
	var sql="",sql1="",sql2="";
	
	for(var i=0; i<VertreterNewArr.length; i++){
		if(sql1!="") sql1 += ",";
		sql1 += String(VertreterNewArr[i]);
	}
	for(var i=0; i<VertreterNewArr.length; i++){
		if(sql2!="") sql2 += ",";
		sql2 += "'"+escape(document.getElementById(String(VertreterNewArr[i])+"New").value)+"'";
	}
	
   sql = "INSERT INTO laaver.Vertreter ("+sql1+",VertreterString25) VALUES ("+sql2+",'"+generateRandomCode8()+"')";
   
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
            window.location.href = "/Vertreter?prIDX="+response.results.insertId;
        },
        error: function (xhr, status, error) {
            console.error("Node AJAX 请求失败: ", status, error);
        }
    });  
}

function generateRandomCode8() {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars.charAt(randomIndex);
    }

    return result;
}


function showVertreterAttributObj(Attribut,Type,indexA,indexB,indexC,indexD,indexE,indexF,lang){
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

function getVertreterAttributName(param){
	var txt = "";
	for(var i=0; i<showVertreterAttributArr.length; i++){
		if(showVertreterAttributArr[i].Attribut==param) txt = unescape(showVertreterAttributArr[i].lang[langNum]);
	}
	
	return txt;
}

var PrintArr=new Array(),PrintObjTXT1="",PrintObjTXT2="";
for(var i=0; i<showVertreterAttributArr.length; i++){
	showVertreterAttributArr.sort(compare('indexD'));
	if(showVertreterAttributArr[i].indexD>0){
		PrintArr.push(unescape(showVertreterAttributArr[i].lang[langNum]));
		PrintObjTXT1 += ""+showVertreterAttributArr[i].Attribut+",";
		PrintObjTXT2 += "this."+showVertreterAttributArr[i].Attribut+"="+showVertreterAttributArr[i].Attribut+";";
	}
}
eval("function PrintObj("+PrintObjTXT1.substring(0,PrintObjTXT1.length-1)+"){"+PrintObjTXT2+"}");

function exportExcel(){
	showLoadingDiv();
	showVertreterAttributArr.sort(compare('indexD'));
	var filename = getDatumInterval(0)+"-"+"Vertreter-"+String(new Date().getTime()).substring(6);
	var ExcelHeaderColumns = new Array();
	var ExcelData = new Array();
	var Summe=0,iCount=0;
	
	var printTXT1="",printTXT2="";
	
	for(var i=0; i<VertreterArr .length; i++){
		for(var j=0; j<showVertreterAttributArr.length; j++){
			 eval("if(showVertreterAttributArr[j].indexD>0){"+
				"if(showVertreterAttributArr[j].indexD==1) printTXT1 += \"'VE'+parseInt(10000+parseInt(VertreterArr[i]."+showVertreterAttributArr[j].Attribut+")),\";"+
				"else if(showVertreterAttributArr[j].Attribut=='Status'){ "+
				"for(var m=0;m<VertreterStatusArr.length;m++)if(VertreterStatusArr[m][4]==VertreterArr[i].Status) printTXT1 += \"unescape(getVertreterStatusName(VertreterArr[i].Status)),\";}"+
				"else if(showVertreterAttributArr[j].Type=='BIT') printTXT1 += \"(parseInt(VertreterArr[i]."+showVertreterAttributArr[j].Attribut+")==1?'Yes':'No'),\";"+
				"else printTXT1 += \"unescape(VertreterArr[i]."+showVertreterAttributArr[j].Attribut+"),\";"+				
				"}");
		}
		eval("ExcelData.push(new PrintObj("+printTXT1.substring(0,printTXT1.length-1)+"));");
		printTXT1="";
		Summe += parseFloat(VertreterArr[i].VertreterFloat1);
	}
	
	printTXT1="",printTXT2="";
	for(var j=0; j<showVertreterAttributArr.length; j++){
		if(showVertreterAttributArr[j].indexD>0){
			printTXT1 += "'',";
			if(j>1) printTXT2 += "'',";
		}
	}

	//eval("ExcelData.push(new PrintObj("+printTXT1.substring(0,printTXT1.length-1)+"));");
	//eval("ExcelData.push(new PrintObj('总额',FCommaEUR(Summe)+' €',"+printTXT2.substring(0,printTXT2.length-1)+"));");

	$.ajax({
	   type: "POST",
	   url: "/Excel_Export",
	   contentType: 'application/x-www-form-urlencoded', 
	   xhrFields: { withCredentials: true }, 
	   cache: false,
	   data:{
		   "filename": escape(filename),
		   "WorksheetName": "Vertreter",
		   "ExcelHeaderColumns": JSON.stringify(PrintArr),
		   "ExcelData": JSON.stringify(ExcelData),
	   },
	   success: function (response) {		   		
			setTimeout(function(){
				hideLoadingDiv();
				window.open("https://intranet.leuchtkunstrahmen.com/excel/"+escape(filename)+".xlsx");
			},300);
	   }
	});
}

function getVertreterStatusName(id){
	if(id!="" && VertreterStatusArr.length>0){
		for(var i=0; i<VertreterStatusArr.length; i++){
			if(VertreterStatusArr[i][4]==id){
				return unescape(VertreterStatusArr[i][langNum]);
				break;
			}
		}
	}
}

/****
CREATE TABLE IF NOT EXISTS `Vertreter` (
	`prIDX` int(11) NOT NULL AUTO_INCREMENT,
	`frIDX` int(11) DEFAULT NULL,
	`Status` int(11) NOT NULL DEFAULT 1,
	`Datum1` datetime NOT NULL DEFAULT current_timestamp(),
	`Datum2` datetime DEFAULT NULL,
	`Datum3` datetime DEFAULT NULL,
	`Datum4` datetime DEFAULT NULL,
	`VertreterString1` varchar(500) NOT NULL DEFAULT '',
	`VertreterString2` varchar(500) NOT NULL DEFAULT '',
	`VertreterString3` varchar(500) NOT NULL DEFAULT '',
	`VertreterString4` varchar(500) NOT NULL DEFAULT '',
	`VertreterString5` varchar(500) NOT NULL DEFAULT '',
	`VertreterString6` varchar(100) NOT NULL DEFAULT '',
	`VertreterString7` varchar(100) NOT NULL DEFAULT '',
	`VertreterString8` varchar(100) NOT NULL DEFAULT '',
	`VertreterString9` varchar(100) NOT NULL DEFAULT '',
	`VertreterString10` varchar(100) NOT NULL DEFAULT '',
	`VertreterString11` varchar(100) NOT NULL DEFAULT '',
	`VertreterString12` varchar(100) NOT NULL DEFAULT '',
	`VertreterString13` varchar(100) NOT NULL DEFAULT '',
	`VertreterString14` varchar(100) NOT NULL DEFAULT '',
	`VertreterString15` varchar(100) NOT NULL DEFAULT '',
	`VertreterString16` varchar(100) NOT NULL DEFAULT '',
	`VertreterString17` varchar(100) NOT NULL DEFAULT '',
	`VertreterString18` varchar(100) NOT NULL DEFAULT '',
	`VertreterString19` varchar(100) NOT NULL DEFAULT '',
	`VertreterString20` varchar(100) NOT NULL DEFAULT '',
	`VertreterString21` varchar(100) NOT NULL DEFAULT '',
	`VertreterString22` varchar(100) NOT NULL DEFAULT '',
	`VertreterString23` varchar(100) NOT NULL DEFAULT '',
	`VertreterString24` varchar(100) NOT NULL DEFAULT '',
	`VertreterString25` varchar(100) NOT NULL DEFAULT '',
	`VertreterString26` varchar(100) NOT NULL DEFAULT '',
	`VertreterString27` varchar(100) NOT NULL DEFAULT '',
	`VertreterString28` varchar(100) NOT NULL DEFAULT '',
	`VertreterString29` varchar(100) NOT NULL DEFAULT '',
	`VertreterString30` varchar(100) NOT NULL DEFAULT '',
	`VertreterString31` varchar(100) NOT NULL DEFAULT '',
	`VertreterString32` varchar(100) NOT NULL DEFAULT '',
	`VertreterString33` varchar(100) NOT NULL DEFAULT '',
	`VertreterString34` varchar(100) NOT NULL DEFAULT '',
	`VertreterString35` varchar(100) NOT NULL DEFAULT '',
	`VertreterString36` varchar(100) NOT NULL DEFAULT '',
	`VertreterString37` varchar(100) NOT NULL DEFAULT '',
	`VertreterString38` varchar(100) NOT NULL DEFAULT '',
	`VertreterString39` varchar(100) NOT NULL DEFAULT '',
	`VertreterString40` varchar(100) NOT NULL DEFAULT '',
	`VertreterString41` varchar(100) NOT NULL DEFAULT '',
	`VertreterString42` varchar(100) NOT NULL DEFAULT '',
	`VertreterString43` varchar(100) NOT NULL DEFAULT '',
	`VertreterString44` varchar(100) NOT NULL DEFAULT '',
	`VertreterString45` varchar(100) NOT NULL DEFAULT '',
	`VertreterString46` varchar(100) NOT NULL DEFAULT '',
	`VertreterString47` varchar(100) NOT NULL DEFAULT '',
	`VertreterString48` varchar(100) NOT NULL DEFAULT '',
	`VertreterString49` varchar(100) NOT NULL DEFAULT '',
	`VertreterString50` varchar(100) NOT NULL DEFAULT '',
	`VertreterInt1` int(11) NOT NULL DEFAULT 0,
	`VertreterInt2` int(11) NOT NULL DEFAULT 0,
	`VertreterInt3` int(11) NOT NULL DEFAULT 0,
	`VertreterInt4` int(11) NOT NULL DEFAULT 0,
	`VertreterInt5` int(11) NOT NULL DEFAULT 0,
	`VertreterInt6` int(11) NOT NULL DEFAULT 0,
	`VertreterInt7` int(11) NOT NULL DEFAULT 0,
	`VertreterInt8` int(11) NOT NULL DEFAULT 0,
	`VertreterInt9` int(11) NOT NULL DEFAULT 0,
	`VertreterInt10` int(11) NOT NULL DEFAULT 0,
	`VertreterInt11` int(11) NOT NULL DEFAULT 0,
	`VertreterInt12` int(11) NOT NULL DEFAULT 0,
	`VertreterInt13` int(11) NOT NULL DEFAULT 0,
	`VertreterInt14` int(11) NOT NULL DEFAULT 0,
	`VertreterInt15` int(11) NOT NULL DEFAULT 0,
	`VertreterInt16` int(11) NOT NULL DEFAULT 0,
	`VertreterInt17` int(11) NOT NULL DEFAULT 0,
	`VertreterInt18` int(11) NOT NULL DEFAULT 0,
	`VertreterInt19` int(11) NOT NULL DEFAULT 0,
	`VertreterInt20` int(11) NOT NULL DEFAULT 0,
	`VertreterInt21` int(11) NOT NULL DEFAULT 0,
	`VertreterInt22` int(11) NOT NULL DEFAULT 0,
	`VertreterInt23` int(11) NOT NULL DEFAULT 0,
	`VertreterInt24` int(11) NOT NULL DEFAULT 0,
	`VertreterInt25` int(11) NOT NULL DEFAULT 0,
	`VertreterInt26` int(11) NOT NULL DEFAULT 0,
	`VertreterInt27` int(11) NOT NULL DEFAULT 0,
	`VertreterInt28` int(11) NOT NULL DEFAULT 0,
	`VertreterInt29` int(11) NOT NULL DEFAULT 0,
	`VertreterInt30` int(11) NOT NULL DEFAULT 0,
	`VertreterInt31` int(11) NOT NULL DEFAULT 0,
	`VertreterInt32` int(11) NOT NULL DEFAULT 0,
	`VertreterInt33` int(11) NOT NULL DEFAULT 0,
	`VertreterInt34` int(11) NOT NULL DEFAULT 0,
	`VertreterInt35` int(11) NOT NULL DEFAULT 0,
	`VertreterInt36` int(11) NOT NULL DEFAULT 0,
	`VertreterInt37` int(11) NOT NULL DEFAULT 0,
	`VertreterInt38` int(11) NOT NULL DEFAULT 0,
	`VertreterInt39` int(11) NOT NULL DEFAULT 0,
	`VertreterInt40` int(11) NOT NULL DEFAULT 0,
	`VertreterFloat1` float NOT NULL DEFAULT 0,
	`VertreterFloat2` float NOT NULL DEFAULT 0,
	`VertreterFloat3` float NOT NULL DEFAULT 0,
	`VertreterFloat4` float NOT NULL DEFAULT 0,
	`VertreterFloat5` float NOT NULL DEFAULT 0,
	`VertreterFloat6` float NOT NULL DEFAULT 0,
	`VertreterFloat7` float NOT NULL DEFAULT 0,
	`VertreterFloat8` float NOT NULL DEFAULT 0,
	`VertreterFloat9` float NOT NULL DEFAULT 0,
	`VertreterFloat10` float NOT NULL DEFAULT 0,
	`VertreterFloat11` float NOT NULL DEFAULT 0,
	`VertreterFloat12` float NOT NULL DEFAULT 0,
	`VertreterFloat13` float NOT NULL DEFAULT 0,
	`VertreterFloat14` float NOT NULL DEFAULT 0,
	`VertreterFloat15` float NOT NULL DEFAULT 0,
	`VertreterFloat16` float NOT NULL DEFAULT 0,
	`VertreterFloat17` float NOT NULL DEFAULT 0,
	`VertreterFloat18` float NOT NULL DEFAULT 0,
	`VertreterFloat19` float NOT NULL DEFAULT 0,
	`VertreterFloat20` float NOT NULL DEFAULT 0,
	`VertreterFloat21` float NOT NULL DEFAULT 0,
	`VertreterFloat22` float NOT NULL DEFAULT 0,
	`VertreterFloat23` float NOT NULL DEFAULT 0,
	`VertreterFloat24` float NOT NULL DEFAULT 0,
	`VertreterFloat25` float NOT NULL DEFAULT 0,
	`VertreterFloat26` float NOT NULL DEFAULT 0,
	`VertreterFloat27` float NOT NULL DEFAULT 0,
	`VertreterFloat28` float NOT NULL DEFAULT 0,
	`VertreterFloat29` float NOT NULL DEFAULT 0,
	`VertreterFloat30` float NOT NULL DEFAULT 0,
	`VertreterFloat31` float NOT NULL DEFAULT 0,
	`VertreterFloat32` float NOT NULL DEFAULT 0,
	`VertreterFloat33` float NOT NULL DEFAULT 0,
	`VertreterFloat34` float NOT NULL DEFAULT 0,
	`VertreterFloat35` float NOT NULL DEFAULT 0,
	`VertreterFloat36` float NOT NULL DEFAULT 0,
	`VertreterFloat37` float NOT NULL DEFAULT 0,
	`VertreterFloat38` float NOT NULL DEFAULT 0,
	`VertreterFloat39` float NOT NULL DEFAULT 0,
	`VertreterFloat40` float NOT NULL DEFAULT 0,
	`VertreterBIT1` bit(1) NOT NULL DEFAULT b'0',
	`VertreterBIT2` bit(1) NOT NULL DEFAULT b'0',
	`VertreterBIT3` bit(1) NOT NULL DEFAULT b'0',
	`VertreterBIT4` bit(1) NOT NULL DEFAULT b'0',
	`VertreterBIT5` bit(1) NOT NULL DEFAULT b'0',
	`VertreterBIT6` bit(1) NOT NULL DEFAULT b'0',
	`VertreterBIT7` bit(1) NOT NULL DEFAULT b'0',
	`VertreterBIT8` bit(1) NOT NULL DEFAULT b'0',
	`VertreterBIT9` bit(1) NOT NULL DEFAULT b'0',
	`VertreterBIT10` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`prIDX`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
****/
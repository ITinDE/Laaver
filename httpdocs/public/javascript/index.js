
var ProduktNormalArr = new Array(), ProduktKatalogArr = new Array(), KatalogArr = new Array();
var BlogArr = new Array();

function initGUI(){
	searchNormalArrProdukt();	
	searchKatalog();
	searchBlog();
}


function searchKatalog(){
	KatalogArr = new Array();
	
	$.ajax({
		type: "POST",
		url: "/frontend_index_AJAX_6",
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
				
				searchKatalogArrProdukt();
				showKatalog();
            } else {
                console.error("response.results 不是一个数组或不存在");
            }
		}
	});
}

function showKatalog(){		
	var txt="";
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
		
		txt += "<div class='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6'>"+
				"<div class='collection__single__2'>"+
				"<div class='collection__img__2'>"+
				"<a href='/Shop?katalog="+KatalogArr[i].prIDX+"'><img src='https://intranet.laaver.com/file/product/"+KatalogArr[i].ProduktKatalogString10+"' alt=''></a></div>"+
				"<div class='collection__text__2'>"+
				"<h5><a href='/Shop?katalog="+KatalogArr[i].prIDX+"'>"+Katalogname+"</a></h5>"+
				"</div></div></div>";
	}
	document.getElementById("KatalogDiv").innerHTML = txt;	
}

function searchNormalArrProdukt(){
	ProduktNormalArr = new Array();
	
	$.ajax({
		type: "POST",
		url: "/frontend_index_AJAX_1",
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
					ProduktNormalArr.push(obj);
				});
				
				showNormalArrProdukt();
            } else {
                console.error("response.results 不是一个数组或不存在");
            }
		}
	});
}

function showNormalArrProdukt(){		
	var txt="";
	for(var i=0; i<ProduktNormalArr.length; i++){
		var Produktname = "", ProductDetail = "";
		
		switch (lang) {
			case "en":
				Produktname = unescape(ProduktNormalArr[i].ProduktString4);
				ProductDetail = "Product Detail";
				break;
			case "de":
				Produktname = unescape(ProduktNormalArr[i].ProduktString2);
				ProductDetail = "Produktdetails";
				break;
			case "fr":
				Produktname = unescape(ProduktNormalArr[i].ProduktString5);
				ProductDetail = "Détails du produit";
				break;
			case "cn":
				Produktname = unescape(ProduktNormalArr[i].ProduktString3);
				ProductDetail = "产品详情";
				break;
			default: 
				Produktname = unescape(ProduktNormalArr[i].ProduktString4);
				ProductDetail = "Product Detail";
				break;
		}
		
		txt += "<div class='col-xl-3 column__custom__class'>"+
				"<div class='category__single category__single__2'>"+
				"<div class='category__img__2'>"+
				"<a href='/produkt?prIDX="+ProduktNormalArr[i].prIDX+"'><img src='https://intranet.laaver.com/file/product/"+ProduktNormalArr[i].ProduktString13+"' alt=''></a>"+
				"</div><div class='category__text category__text__2'>"+
				"<h5><a href='/produkt?prIDX="+ProduktNormalArr[i].prIDX+"'>"+Produktname+"</a></h5></div></div></div>";

	}
	document.getElementById("AngebotSilderDiv").innerHTML = txt;	
}

function searchKatalogArrProdukt(){
	ProduktKatalogArr = new Array();
	
	$.ajax({
		type: "POST",
		url: "/frontend_index_AJAX_3",
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
					ProduktKatalogArr.push(obj);
				});
				
				showKatalogArrProdukt();
				showAngebotArrProdukt();
            } else {
                console.error("response.results 不是一个数组或不存在");
            }
		}
	});
}

function showAngebotArrProdukt(){		
	var txt1="",txt2="";
	var Produktname = "";	
	txt1 += "<li class='nav-item' role='presentation'><button class='product__tap__link active' data-bs-toggle='tab' data-bs-target='#projects__B__all' type='button'>Alle</button></li>";	
	
	txt2 += "<div class='tab-pane fade active show' id='projects__B__all' role='tabpanel' aria-labelledby='projects__B__all'>"+
			"<div class='row grid__responsive row__custom__class feature__slider__active slider__default__arrow'>";
		
	for(var j=0; j<ProduktKatalogArr.length; j++){	
		if(ProduktKatalogArr[j].ProduktBIT4==1){
			switch (lang) {
				case "en":
					Produktname = unescape(ProduktKatalogArr[j].ProduktString4);
					break;
				case "de":
					Produktname = unescape(ProduktKatalogArr[j].ProduktString2);
					break;
				case "fr":
					Produktname = unescape(ProduktKatalogArr[j].ProduktString5);
					break;
				case "cn":
					Produktname = unescape(ProduktKatalogArr[j].ProduktString3);
					break;
				default: 
					Produktname = unescape(ProduktKatalogArr[j].ProduktString4);
					break;
			}
			
			
			txt2 += "<div class='col-xl-3 column__custom__class'>"+
					"<div class='grid__wraper'>"+
					"<div class='grid__wraper__img'>"+
					"<div class='grid__wraper__img__inner'>"+
					"<a href='/produkt?prIDX="+ProduktKatalogArr[j].prIDX+"'>"+
					"<img class='primary__image' src='https://intranet.laaver.com/file/product/"+ProduktKatalogArr[j].ProduktString13+"' alt=''>"+
					"</a></div>"+
					"<div class='grid__wraper__badge'>";
			if(ProduktKatalogArr[j].ProduktInt10>0) txt2 += "<span class='sale__badge'>-"+ProduktKatalogArr[j].ProduktInt10+"%</span>";
			txt2 += "</div>"+
					"</div>"+
					"<div class='grid__wraper__info'>"+
					"<h3 class='grid__wraper__tittle'>"+
					"<a href='/produkt?prIDX="+ProduktKatalogArr[j].prIDX+"' tabindex='"+j+"'>"+Produktname+"</a>"+
					"</h3>"+
					"<div class='grid__wraper__price'>";
			
			if(ProduktKatalogArr[j].ProduktInt10>0) txt2 += "<del>"+FCommaEUR(ProduktKatalogArr[j].ProduktEinzelFloat1)+"&nbsp;€</del><span>"+FCommaEUR(ProduktKatalogArr[j].ProduktEinzelFloat2)+"&nbsp;€</span> ";
			else txt2 += "<span style='color:#303030;'>"+FCommaEUR(ProduktKatalogArr[j].ProduktEinzelFloat1)+"&nbsp;€</span> ";
			
			txt2 += "</div></div></div></div>";		
		}		
	}
	txt2 += "</div></div>";

	document.getElementById("myTab2").innerHTML = txt1;	
	document.getElementById("myTabContent2").innerHTML = txt2;	
}

function showKatalogArrProdukt(){		
	var txt1="",txt2="", txt3="";
	var Allname = "", Katalogname = "", Produktname = "";
	switch (lang) {
		case "en":
			Allname = "All";
			break;
		case "de":
			Allname = "Alle";
			break;
		case "fr":
			Allname = "Tous";
			break;
		case "cn":
			Allname = "全部";
			break;
		default: 
			Allname = "All";
			break;
	}
	
	txt1 += "<li class='nav-item' role='presentation'><button class='product__tap__link active' data-bs-toggle='tab' data-bs-target='#projects__A__all' type='button'>"+Allname+"</button></li>";
	txt3 += "<div class='tab-pane fade active show' id='projects__A__all' role='tabpanel' aria-labelledby='projects__A__all'>"+
			"<div class='row grid__responsive row__custom__class feature__slider__active slider__default__arrow'>";
			
	for(var j=0; j<ProduktKatalogArr.length; j++){	
		switch (lang) {
			case "en":
				Produktname = unescape(ProduktKatalogArr[j].ProduktString4);
				break;
			case "de":
				Produktname = unescape(ProduktKatalogArr[j].ProduktString2);
				break;
			case "fr":
				Produktname = unescape(ProduktKatalogArr[j].ProduktString5);
				break;
			case "cn":
				Produktname = unescape(ProduktKatalogArr[j].ProduktString3);
				break;
			default: 
				Produktname = unescape(ProduktKatalogArr[j].ProduktString4);
				break;
		}
		
		
		txt3 += "<div class='col-xl-3 column__custom__class'>"+
				"<div class='grid__wraper'>"+
				"<div class='grid__wraper__img'>"+
				"<div class='grid__wraper__img__inner'>"+
				"<a href='/produkt?prIDX="+ProduktKatalogArr[j].prIDX+"'>"+
				"<img class='primary__image' src='https://intranet.laaver.com/file/product/"+ProduktKatalogArr[j].ProduktString13+"' alt=''>"+
				"</a></div>"+
				"<div class='grid__wraper__badge'>";
		if(ProduktKatalogArr[j].ProduktInt10>0) txt3 += "<span class='sale__badge'>-"+ProduktKatalogArr[j].ProduktInt10+"%</span>";
		txt3 += "</div>"+
				"</div>"+
				"<div class='grid__wraper__info'>"+
				"<h3 class='grid__wraper__tittle'>"+
				"<a href='/produkt?prIDX="+ProduktKatalogArr[j].prIDX+"' tabindex='"+j+"'>"+Produktname+"</a>"+
				"</h3>"+
				"<div class='grid__wraper__price'>";
			
		if(ProduktKatalogArr[j].ProduktInt10>0) txt3 += "<del>"+FCommaEUR(ProduktKatalogArr[j].ProduktEinzelFloat1)+"&nbsp;€</del><span>"+FCommaEUR(ProduktKatalogArr[j].ProduktEinzelFloat2)+"&nbsp;€</span> ";
		else txt3 += "<span style='color:#303030;'>"+FCommaEUR(ProduktKatalogArr[j].ProduktEinzelFloat1)+"&nbsp;€</span> ";
			
		txt3 += "</div></div></div></div>";		
	}
	txt3 += "</div></div>";

	for(var i=0; i<KatalogArr.length; i++){
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
		txt1 += "<li class='nav-item' role='presentation'><button class='product__tap__link__"+i+"' data-bs-toggle='tab' data-bs-target='#projects__A__"+i+"' type='button'>"+Katalogname+"</button></li>";
		
		txt2 += "<div class='tab-pane fade' id='projects__A__"+i+"' role='tabpanel' aria-labelledby='projects__A__"+i+"'>"+
				"<div class='row grid__responsive row__custom__class feature__slider__active slider__default__arrow'>";
			
		for(var j=0; j<ProduktKatalogArr.length; j++){	
			if(KatalogArr[i].prIDX==ProduktKatalogArr[j].ProduktInt1){
				switch (lang) {
					case "en":
						Produktname = unescape(ProduktKatalogArr[j].ProduktString4);
						break;
					case "de":
						Produktname = unescape(ProduktKatalogArr[j].ProduktString2);
						break;
					case "fr":
						Produktname = unescape(ProduktKatalogArr[j].ProduktString5);
						break;
					case "cn":
						Produktname = unescape(ProduktKatalogArr[j].ProduktString3);
						break;
					default: 
						Produktname = unescape(ProduktKatalogArr[j].ProduktString4);
						break;
				}
				
				
				txt2 += "<div class='col-xl-3 column__custom__class'>"+
						"<div class='grid__wraper'>"+
						"<div class='grid__wraper__img'>"+
						"<div class='grid__wraper__img__inner'>"+
						"<a href='single-product.html'>"+
						"<img class='primary__image' src='https://intranet.laaver.com/file/product/"+ProduktKatalogArr[j].ProduktString13+"' alt=''>"+
						"</a></div>"+
						"<div class='grid__wraper__badge'>";
				if(ProduktKatalogArr[j].ProduktInt10>0) txt2 += "<span class='sale__badge'>-"+ProduktKatalogArr[j].ProduktInt10+"%</span>";
				txt2 += "</div>"+
						"</div>"+
						"<div class='grid__wraper__info'>"+
						"<h3 class='grid__wraper__tittle'>"+
						"<a href='/produkt?prIDX="+ProduktKatalogArr[j].prIDX+"' tabindex='"+j+"'>"+Produktname+"</a>"+
						"</h3>"+
						"<div class='grid__wraper__price'>";
				
				if(ProduktKatalogArr[j].ProduktInt10>0) txt2 += "<del>"+FCommaEUR(ProduktKatalogArr[j].ProduktEinzelFloat1)+"&nbsp;€</del><span>"+FCommaEUR(ProduktKatalogArr[j].ProduktEinzelFloat2)+"&nbsp;€</span> ";
				else txt2 += "<span style='color:#303030;'>"+FCommaEUR(ProduktKatalogArr[j].ProduktEinzelFloat1)+"&nbsp;€</span> ";
				
				txt2 += "</div></div></div></div>";		
			}		
		}
		txt2 += "</div></div>";
	}

	document.getElementById("myTab1").innerHTML = txt1;	
	document.getElementById("myTabContent1").innerHTML = txt3 + txt2;	
}

function searchBlog(){
	BlogArr = new Array();
	
	$.ajax({
		type: "POST",
		url: "/frontend_index_AJAX_5",
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
					BlogArr.push(obj);
				});
				
				showBlog();
            } else {
                console.error("response.results 不是一个数组或不存在");
            }
		}
	});
}

function showBlog(){		
	var txt="";
	for(var i=0; i<BlogArr.length; i++){
		var Blogname = "", BlogDetail = "";
		
		switch (lang) {
			case "en":
				Blogname = unescape(BlogArr[i].NewsString4);
				BlogDetail = unescape(BlogArr[i].NewsString5);
				break;
			case "de":
				Blogname = unescape(BlogArr[i].NewsString1);
				BlogDetail = unescape(BlogArr[i].NewsString2);
				break;
			case "fr":
				Blogname = unescape(BlogArr[i].NewsString6);
				BlogDetail = unescape(BlogArr[i].NewsString7);
				break;
			case "cn":
				Blogname = unescape(BlogArr[i].NewsString8);
				BlogDetail = unescape(BlogArr[i].NewsString9);
				break;
			default: 
				Blogname = unescape(BlogArr[i].NewsString4);
				BlogDetail = unescape(BlogArr[i].NewsString7);
				break;
		}
		
		txt += "<div class='col-xl-4 column__custom__class'>"+
				"<div class='blog__single__wrap'>"+
				"<div class='blog__img'>"+
				"<a href='/blog_datail?prIDX="+BlogArr[i].prIDX+"'> <img src='https://intranet.laaver.com/file/news/"+unescape(BlogArr[i].Dateiname)+"' alt=''></a>"+
				"</div><div class='blog__title'>"+
				"<h2><a href='/blog_datail?prIDX="+BlogArr[i].prIDX+"' tabindex='0'>"+Blogname+"</a></h2>"+
				"</div></div></div>";

	}
	document.getElementById("BlogSilderDiv").innerHTML = txt;	
}
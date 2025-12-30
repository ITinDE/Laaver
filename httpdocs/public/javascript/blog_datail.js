
var BlogIDX=0;
if(String(GetQueryString("prIDX"))!="" && String(GetQueryString("prIDX"))!="null" && String(GetQueryString("prIDX"))!="undefined") BlogIDX = parseInt(GetQueryString("prIDX"));

function GetQueryString(string){
   var reg = new RegExp('(^|&)'+ string +'=([^&]*)(&|$)');
   var r = window.location.search.substr(1).match(reg);
   if(r!=null)return unescape(r[2]); return null;
}


var BlogArr = new Array();

function initGUI(){
	if(BlogIDX==0) window.location.href = "/";
	else{
		searchBlog();
	}
}

function searchBlog(){
	BlogArr = new Array();
	
	$.ajax({
		type: "POST",
		url: "/blog_datail_1",
		contentType: 'application/x-www-form-urlencoded',
		async: false, 
		data: {
			prIDX: BlogIDX,
		},
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
		if(i==0){
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
			
			document.getElementById("blog-title").innerHTML = Blogname;	
			document.getElementById("blog-detail").innerHTML = BlogDetail;	
		}

		txt += "<img class='img-fluid' src='https://intranet.laaver.com/file/news/"+unescape(BlogArr[i].Dateiname)+"'>";
	}	
	document.getElementById("blog-bild").innerHTML = txt;	
}
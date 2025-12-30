var vertreter="", vertreterIDX=0;if(String(GetQueryString("vertreter"))!="" && String(GetQueryString("vertreter"))!="null" && String(GetQueryString("vertreter"))!="undefined") vertreter = String(GetQueryString("vertreter"));function initGUI(){	if(vertreter!=""){		searchVertreter();	}}
function searchVertreter(){	$.ajax({		type: "POST",		url: "/frontend_register_4",		contentType: 'application/x-www-form-urlencoded',		async: true,		cache: false,		data: {			vertreter: vertreter		},		success: function (response) {			if(parseInt(response)>0) vertreterIDX = parseInt(response);			console.log(vertreterIDX);		},		error: function (xhr, status, error) {			console.error("AJAX Fehler: ", status, error);		}	});}
function checkRegisterInfo(){
	var username = escape(document.getElementById("username").value);
	var email = escape(document.getElementById("email").value);
	var password = escape(document.getElementById("password").value);
	var password_wiederholen = escape(document.getElementById("password_wiederholen").value);
	var firmaname = escape(document.getElementById("firmaname").value);
	
	var bool=true;
	if(username==""){
		alert("Benutzername kann nicht leer sein!"); bool=false;
	}else if(!validateEmail(email)){
		alert("Email Format ist falsch!"); bool=false;
	}else if(email==""){
		alert("Email Adresse kann nicht leer sein!"); bool=false;
	}else if(password=="" || password!=password_wiederholen){
		alert("falsches Passwort!"); bool=false;
	}
	
	if(bool){
	    $.ajax({
			type: "POST",
			url: "/frontend_register_1",
			contentType: 'application/x-www-form-urlencoded',
			async: true,
			cache: false,
			data: {
				username: username,
				email: email
			},
			success: function (response) {
				var responseCode = parseInt(response);
				if (responseCode === 1) {
					alert("Benutzername ist schon registriert!");
				} else if (responseCode === 2) {
					alert("Email Adresse ist schon registriert!");
				} else {
					// 都没注册 → 发起注册
					registerKunden(username, email, password, firmaname);
				}
			},
			error: function (xhr, status, error) {
				console.error("AJAX Fehler: ", status, error);
			}
		});
	}
}

function registerKunden(username,email,password, firmaname){
	var EmailCode = generateRandomString(32);
		$.ajax({
		type: "POST",
		url: "/frontend_register_2",
		contentType: 'application/x-www-form-urlencoded',
		async: true,
		cache: false,
		data: {
			username: username,
			email: email,
			password: password,
			EmailCode: EmailCode,
			firmaname: firmaname,			vertreterIDX: vertreterIDX
		},
		success: function (response) {
			const newPrIDX = parseInt(response);
			sendRegisterEmail(username, email, EmailCode, newPrIDX);
		},
		error: function (xhr, status, error) {
			console.error("AJAX Fehler: ", status, error);
		}
	});

}

function sendRegisterEmail(Username,Email,EmailCode,UserID){
	$.ajax({
      type: "POST",
         url: "/sendRegisterEmail",
         data:{
			 "Username":unescape(Username),
			 "Email":unescape(Email),
			 "EmailCode":EmailCode,
         },
         cache: false,
         success: function (response) {
			var storage = window.sessionStorage;					
			storage.setItem('Username',Username);
			storage.setItem('UserID',UserID);
			storage.setItem('AnmeldenBleibt',1);
			storage.setItem('lastTime',new Date().getTime());
			 
			document.getElementById("HinweisenModalTitle").style.color = "#0da487";
			document.getElementById("HinweisenModalButton1").style.backgroundColor = "#0da487";
			document.getElementById("HinweisenModalButton2").style.backgroundColor = "#0da487";	
			$('#HinweisenModalFade').modal('show');			
			
			saveVorlaufigDaten(UserID);
         },
         error: function (response) {
            console.log(response);
			
			var storage = window.sessionStorage;					
			storage.setItem('Username',Username);
			storage.setItem('UserID',UserID);
			storage.setItem('AnmeldenBleibt',1);
			storage.setItem('lastTime',new Date().getTime());
			 
			document.getElementById("HinweisenModalTitle").style.color = "#0da487";
			document.getElementById("HinweisenModalButton1").style.backgroundColor = "#0da487";
			document.getElementById("HinweisenModalButton2").style.backgroundColor = "#0da487";							
			$('#HinweisenModalFade').modal('show');			
			
			saveVorlaufigDaten(UserID);
         }
   });
}

function saveVorlaufigDaten(UserID){
	if(VorlaufigKaufwagenArr.length>0 || VorlaufigWunschlisteArr.length>0 ){
		$.ajax({
			type: "POST",
			url: "/frontend_register_3",
			contentType: 'application/x-www-form-urlencoded',
			data: {
				UserID: UserID,
				VorlaufigKaufwagenArr: JSON.stringify(VorlaufigKaufwagenArr),
				VorlaufigWunschlisteArr: JSON.stringify(VorlaufigWunschlisteArr)
			},
			cache: false,
			success: function (response) {
				var storage = window.sessionStorage;
				storage.removeItem('VorlaufigKaufwagenArr');
				storage.removeItem('VorlaufigWunschlisteArr');
								
				setTimeout(function () {
					window.location.href = "/";
				}, 2000);
			},
			error: function (response) {
				console.log(response);
			}
		});

	}else setTimeout(function(){window.location.href="/";},2000);
}

function validateEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function generateRandomString(length) {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  var charactersLength = characters.length;
  
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return result;
}
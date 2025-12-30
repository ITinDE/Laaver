
var oneKunden = new KundenObj();

function showAppleFehlermeldung(){	
	document.getElementById("HinweisenModalInhalt").innerHTML = txt;
	document.getElementById("HinweisenModalTitle").innerHTML = "Anmeldung beim Apple-Konto fehlgeschlagen.";
	document.getElementById("HinweisenModalTitle").style.color = "#dc3545";
	document.getElementById("HinweisenModalButton1").style.backgroundColor = "#dc3545";
	document.getElementById("HinweisenModalButton2").style.backgroundColor = "#dc3545";			
	$('#HinweisenModalFade').modal('show');	
}

function checkLoginInfo(){
	var username = escape(document.getElementById("username").value);
	var password = escape(document.getElementById("password").value);

	var bool=true;
	if(username==""){
		alert("Benutzername kann nicht leer sein!"); bool=false;
	}else if(password==""){
		alert("Passwort kann nicht leer sein!"); bool=false;
	}
	
	if(bool){
	   $.ajax({
		type: "POST",
		url: "/frontend_login_1",
		contentType: 'application/x-www-form-urlencoded',
		data: {
			username: username,
			password: password
		},
		cache: false,
		success: function (response) {
			const responseCode = parseInt(response);
			if (responseCode === 1) {
				alert("Benutzername/Email ist falsch!");
			} else if (responseCode === 2) {
				alert("Benutzername/Email oder Passwort ist falsch!");
			} else {
				const parts = response.split("##");
				oneKunden = new KundenObj();
				oneKunden.prIDX = parseInt(parts[0]);
				oneKunden.KundenString10 = parts[1];
				oneKunden.KundenString11 = parts[2];
				oneKunden.KundenString12 = parts[3];
				oneKunden.KundenString13 = parts[4];

				successLogin();
			}
		},
		error: function (xhr, status, error) {
			console.error("AJAX Fehler:", status, error);
		}
	});

	}
}

function successLogin(){
	var storage = window.sessionStorage;					
	storage.setItem('UserID',oneKunden.prIDX);
	storage.setItem('Username',oneKunden.KundenString10);
	storage.setItem('Email',oneKunden.KundenString11);
	storage.setItem('Vorname',oneKunden.KundenString12);
	storage.setItem('Nachname',oneKunden.KundenString13);
	storage.setItem('lastTime',new Date().getTime());	

	saveVorlaufigDaten();	
}

function saveVorlaufigDaten(){
	if(VorlaufigKaufwagenArr.length>0 || VorlaufigWunschlisteArr.length>0 ){
		$.ajax({
			type: "POST",
			url: "/frontend_login_5",
			contentType: 'application/x-www-form-urlencoded',
			data: {
				UserID: oneKunden.prIDX,
				VorlaufigKaufwagenArr: JSON.stringify(VorlaufigKaufwagenArr),
				VorlaufigWunschlisteArr: JSON.stringify(VorlaufigWunschlisteArr)
			},
			cache: false,
			success: function (response) {
				var storage = window.sessionStorage;
				storage.removeItem('VorlaufigKaufwagenArr');
				storage.removeItem('VorlaufigWunschlisteArr');
				setTimeout(function () {
					window.location.href = "/konto";
				}, 1000);
			},
			error: function (response) {
				console.log(response);
			}
		});

	}else setTimeout(function(){window.location.href="/konto";},1000);
}

function KundenObj(prIDX,frIDX,Datum1,Datum2,Datum3,Datum4,KundenString10,KundenString11,KundenString12,KundenString13,KundenInt1,KundenInt2,KundenInt3,KundenInt4,KundenFloat1,KundenFloat2,KundenFloat3,KundenFloat4,KundenBIT1,KundenBIT2,KundenString14,KundenString15,KundenString16,KundenString17,KundenString18,KundenString19,KundenString20,KundenString21,KundenString22,KundenString23,KundenString24,KundenString25,KundenString26,KundenString27,KundenString28,KundenString29,KundenInt5,Status,KundenFloat5,KundenFloat6){
   this.prIDX=prIDX;
   this.frIDX=frIDX;
   this.Datum1=Datum1;
   this.Datum2=Datum2;
   this.Datum3=Datum3;
   this.Datum4=Datum4;
   this.KundenString10=KundenString10;
   this.KundenString11=KundenString11;
   this.KundenString12=KundenString12;
   this.KundenString13=KundenString13;
   this.KundenInt1=KundenInt1;
   this.KundenInt2=KundenInt2;
   this.KundenInt3=KundenInt3;
   this.KundenInt4=KundenInt4;
   this.KundenFloat1=KundenFloat1;
   this.KundenFloat2=KundenFloat2;
   this.KundenFloat3=KundenFloat3;
   this.KundenFloat4=KundenFloat4;
   this.KundenBIT1=KundenBIT1;
   this.KundenBIT2=KundenBIT2;
   this.KundenString14=KundenString14;
   this.KundenString15=KundenString15;
   this.KundenString16=KundenString16;
   this.KundenString17=KundenString17;
   this.KundenString18=KundenString18;
   this.KundenString19=KundenString19;
   this.KundenString20=KundenString20;
   this.KundenString21=KundenString21;
   this.KundenString22=KundenString22;
   this.KundenString23=KundenString23;
   this.KundenString24=KundenString24;
   this.KundenString25=KundenString25;
   this.KundenString26=KundenString26;
   this.KundenString27=KundenString27;
   this.KundenString28=KundenString28;
   this.KundenString29=KundenString29;
   this.KundenInt5=KundenInt5;
   this.Status=Status;
   this.KundenFloat5=KundenFloat5;
   this.KundenFloat6=KundenFloat6;
}

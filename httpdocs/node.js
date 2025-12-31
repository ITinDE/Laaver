const express = require('express');
const cookieParser = require('cookie-parser');
const upload = require('express-fileupload');
const request = require('request');
const async = require('async');
const bodyParser = require('body-parser');
const validate = require('validate-vat');
const pdf = require("pdf-creator-node");
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const qs = require('qs');
const secretKey = crypto.randomBytes(16).toString('hex');

const app = express();
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'css'));
app.use('/js', express.static(__dirname + 'js'));
app.use('/img', express.static(__dirname + 'img'));

// create application/json parser
const jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/**** Cookies Begin ****/
app.use(cookieParser());
app.get('/setcookieLang', function(req, res){
    res.cookie('lang', req.query.lang, { maxAge: 1000*60*60*24*30, httpOnly: false });
    res.end();
});
/**** Cookies End ****/

/**** mySQL Begin ****/
const mysql = require('mysql');
const con = mysql.createConnection({
  host: "www.laaver.com",
  user: "laaver",
  password: "4&4#TqPq0vweMgyd",
  multipleStatements: true
});
con.connect(function(err) {if (err) throw err;});
/**** mySQL End ****/

/**** Mail Daten Begin ****/
const nodemailer = require('nodemailer');
const mailFrom = "laaver <info@laaver.com>";
const smtpConfig = {
  host: 'laaver.com',
  port: 465,
  secure: true,
  auth: {
	user: 'info@laaver.com',
	pass: '4&4#TqPq0vweMgyd'
  }
};
/**** Mail Daten End ****/


/**** Password Crypto Begin ****/
const saltLength = 16;
const iterations = 100000;
const keyLength = 64;
const digest = 'sha512';
 
function hashPassword(password) {
    const salt = crypto.randomBytes(saltLength).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, iterations, keyLength, digest).toString('hex');
    return `${salt}$${hash}`;
}
 

function verifyPassword(inputPassword, storedHash) {
    const [salt, originalHash] = storedHash.split('$');
    const inputHash = crypto.pbkdf2Sync(inputPassword, salt, iterations, keyLength, digest).toString('hex');
    return inputHash === originalHash;
}
/**** Password Crypto End ****/


/**** FileUpload Begin****/
app.use(upload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.post('/file-upload', function(req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/public/file/'+req.body.ordnername+'/'+req.body.filename;
  var url = String("https://www.laaver.com/"+req.body.ordnername+"?prIDX="+req.body.prIDX);
  
  sampleFile.mv(uploadPath, function(err) {
    if (err) return res.status(500).send(err);
		//res.redirect(url);
		res.end();
  });
});
/**** FileUpload End****/


/**** Excel Export Begin****/
const xl = require('excel4node');
const mime = require('mime');

app.post('/Excel_Export', urlencodedParser, function (req, res, next){
	var filename = unescape(req.body.filename);
	var ExcelFile = __dirname + "/excel/" + filename + ".xlsx";
	var ExcelHeaderColumns = JSON.parse(req.body.ExcelHeaderColumns);
	var ExcelData = JSON.parse(req.body.ExcelData);
	
	const wb = new xl.Workbook();
	const ws = wb.addWorksheet('DHL Daten');	
	let colIndex = 1;
	ExcelHeaderColumns.forEach((item) => {
		ws.cell(1,colIndex++).string(unescape(item));
	});	
	let rowIndex = 2;
	ExcelData.forEach((item) => {
		let columnIndex = 1;
		Object.keys(item).forEach((colName) => {
			ws.cell(rowIndex,columnIndex++).string(unescape(item[colName]));
		});
		rowIndex++;
	});
	
	var myStyle = wb.createStyle({
	  font: {
		bold: true,
	  },
	  alignment: {
		wrapText: false,
		horizontal: 'center',
	  },
	  border: {
		bottom: {
			style: "medium",
            color: "black",
        },
	  },
	});	
	ws.cell(1, 1, 1, parseInt(ExcelHeaderColumns.length)).style(myStyle);
	ws.row(1).setHeight(20);	
	wb.write(__dirname + "/public/excel/datei/" + filename + ".xlsx");
	
	res.end();
});
/**** Excel Export End****/


/**** Website Intranet Begin ****/
app.get('/', function (req, res){
    res.render('index.ejs', { lang: req.cookies['lang'] });
});

app.get('/produkt', function (req, res){
    res.render('produkt.ejs', { lang: req.cookies['lang'] });
});

app.get('/Login', function (req, res){
    res.render('login.ejs', { lang: req.cookies['lang'] });
});

app.get('/blog', function (req, res){
    res.render('blog.ejs', { lang: req.cookies['lang'] });
});

app.get('/blog_datail', function (req, res){
    res.render('blog_datail.ejs', { lang: req.cookies['lang'] });
});

app.get('/login', function (req, res){
    res.render('login.ejs', { lang: req.cookies['lang'] });
});

app.get('/register', function (req, res){
    res.render('register.ejs', { lang: req.cookies['lang'] });
});

app.get('/emailConfirmLink', function (req, res){
    res.render('emailConfirmLink.ejs', { lang: req.cookies['lang'] });
});

app.get('/passwort_forgot', function (req, res){
    res.render('passwort_forgot.ejs');
});

app.get('/PasswortConfirmForgot', function (req, res){
    res.render('PasswortConfirmForgot.ejs');
});

app.get('/einkaufswagen', function (req, res){
    res.render('einkaufswagen.ejs');
});

app.get('/kasse', function (req, res){
    res.render('kasse.ejs');
});

app.get('/konto', function (req, res){
    res.render('konto.ejs');
});

app.get('/shop', function (req, res){
    res.render('shop.ejs');
});

app.get('/about', function (req, res){
    res.render('about.ejs', { lang: req.cookies['lang'] });
});

app.get('/datenschutz', function (req, res){
    res.render('datenschutz.ejs', { lang: req.cookies['lang'] });
});

app.get('/impressum', function (req, res){
    res.render('impressum.ejs', { lang: req.cookies['lang'] });
});

app.get('/widerrufsrecht', function (req, res){
    res.render('widerrufsrecht.ejs', { lang: req.cookies['lang'] });
});

app.get('/AGB', function (req, res){
    res.render('AGB.ejs', { lang: req.cookies['lang'] });
});

app.get('/kontakt', function (req, res){
    res.render('kontakt.ejs', { lang: req.cookies['lang'] });
});
/**** Website Intranet End ****/

/**** mySQL Begin ****/
/****
app.post('/General_Select', urlencodedParser, async function (req, res, next) {
	const sqlQuery = unescape(req.body.SQL_TXT);
 
    con.query(sqlQuery, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({
			results: results
		});
	}); 
});
 
app.post('/General_Update', urlencodedParser, async function (req, res, next) {
	const sqlQuery = unescape(req.body.SQL_TXT);
 
    con.query(sqlQuery, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({
			results: results
		});
	}); 
});
 
app.post('/General_Insert', urlencodedParser, async function (req, res, next) {
	const sqlQuery = unescape(req.body.SQL_TXT);
 
    con.query(sqlQuery, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({
			results: results
		});
	}); 
});
****/
 
app.post('/Katalog_Select', urlencodedParser, async function (req, res, next) {
	const sqlQuery = "SELECT prIDX, ProduktKatalogString1,ProduktKatalogString2,ProduktKatalogString3,ProduktKatalogString4,ProduktKatalogString5,ProduktKatalogString10 AS Bild  FROM laaver.produkt_katalog";
 
    con.query(sqlQuery, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({
			results: results
		});
	}); 
});

app.post('/frontend_index_AJAX_1', urlencodedParser, function (req, res, next) {
	const showMenge = 12; // 控制产品数量
	//P.ProduktBIT4=0 不是特价产品
    const sqlQuery = `SELECT DISTINCT P.*
						FROM laaver.Produkt AS P
						LEFT JOIN laaver.Produkt_Einzel AS PE 
							ON PE.frIDX = P.prIDX
						LEFT JOIN laaver.Produkt_Bild AS PB 
							ON PB.frIDX = P.prIDX 
							AND PB.ProduktBildString10 = 'Banner'
						WHERE P.ProduktBIT1 = 0
						AND EXISTS (
							SELECT 1
							FROM laaver.lager AS L
							WHERE L.LagerInt4 = P.prIDX
							  AND L.Status = 2 AND P.ProduktBIT4 = 0 
						) GROUP BY P.prIDX ORDER BY RAND() LIMIT ${showMenge}`;
 
    con.query(sqlQuery, (error, results) => {
        if (error) {
            return next(error);
        }
 
        res.json(results);
    });
});
 
app.post('/frontend_index_AJAX_2', urlencodedParser, function (req, res, next) {
	const showMenge = 12; // 控制产品数量
    const sql1Query = `SELECT Frontend_HeaderFooterString12 
                       FROM laaver.frontend_headerfooter 
                       WHERE Frontend_HeaderFooterString10 = 'FestivalSilderDiv'`;
 
    con.query(sql1Query, (error, results1) => {
        if (error) {
            return next(error);
        }
 
        if (results1.length > 0) {
            const HeaderFooterString12 = String(results1[0].Frontend_HeaderFooterString12);
            const temp = HeaderFooterString12.replace(/%2C/ig, " ").replace(/\//ig, " ");
            let txt = "";
 
            if (temp.split(" ").length > 1) {
                for (let i = 0; i < temp.split(" ").length; i++) {
                    if (txt != "") txt += "OR ";
                    txt += `P.ProduktString14 LIKE '%${temp.split(" ")[i]}%' `;
                }
            } else if (HeaderFooterString12 != "") {
                txt += `P.ProduktString14 LIKE '%${temp}%' `;
            }
 
            const sql2Query = `SELECT P.prIDX, P.ProduktString2 AS Produktname, P.ProduktString14 AS Tag, P.ProduktInt1 AS Katalog,
                                      PE.ProduktEinzelFloat1 AS Orginalpreis, PE.ProduktEinzelFloat3 AS Salepreis, PE.ProduktEinzelInt10 AS Discount,
                                      MIN(PB.ProduktBildString11) AS ProduktListeString1, '' AS ProduktListeString2, '' AS ProduktListeString3, '' AS ProduktListeString4,
                                      0 AS ProduktListeInt1, 0 AS ProduktListeInt2, 0 AS ProduktListeInt3, 0 AS ProduktListeInt4,
                                      0 AS ProduktListeFloat1, 0 AS ProduktListeFloat2, 0 AS ProduktListeFloat3, 0 AS ProduktListeFloat4
                               FROM laaver.Produkt AS P
                               LEFT JOIN laaver.Produkt_Einzel AS PE ON PE.frIDX = P.prIDX
                               LEFT JOIN laaver.Produkt_Bild AS PB ON PB.frIDX = P.prIDX AND PB.ProduktBildString10 = 'Banner'
                               WHERE (${txt}) AND P.ProduktBIT1 = 0
                               GROUP BY P.prIDX
                               ORDER BY RAND()
                               LIMIT ${showMenge}`;
 
            con.query(sql2Query, (error, results2) => {
                if (error) {
                    return next(error);
                }
 
                res.json({
                    HeaderFooterString12: HeaderFooterString12,
                    results: results2
                });
            });
        } else {
            res.json(1);
        }
    });
});
 
app.post('/frontend_index_AJAX_3', urlencodedParser, function (req, res, next) {
    const sqlQuery = `SELECT 
							DISTINCT P.*,
							PE.ProduktEinzelFloat2,
							PE.ProduktEinzelFloat1
						FROM laaver.Produkt AS P
						LEFT JOIN (
							SELECT 
								frIDX,
								MIN(ProduktEinzelFloat2) AS minFloat2
							FROM laaver.Produkt_Einzel
							GROUP BY frIDX
						) AS PE_MIN
							ON PE_MIN.frIDX = P.prIDX
						LEFT JOIN laaver.Produkt_Einzel AS PE
							ON PE.frIDX = P.prIDX
						   AND PE.ProduktEinzelFloat2 = PE_MIN.minFloat2
						LEFT JOIN laaver.Produkt_Bild AS PB
							ON PB.frIDX = P.prIDX
						   AND PB.ProduktBildString10 = 'Banner'
						WHERE P.ProduktBIT1 = 0
						AND EXISTS (
							SELECT 1
							FROM laaver.lager AS L
							WHERE L.LagerInt4 = P.prIDX
							  AND L.Status = 2
						)
						ORDER BY RAND();`;
 
	con.query(sqlQuery, (error, results) => {
        if (error) {
            return next(error);
        }
 
        res.json(results);
    });
});
 
app.post('/frontend_index_AJAX_4', urlencodedParser, function (req, res, next) {
    const sql = `
        SELECT *, 
            CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%d.%m.%Y') END AS sDatum1,
            CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%d.%m.%Y') END AS sDatum2,
            CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%d.%m.%Y') END AS sDatum3,
            CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%d.%m.%Y') END AS sDatum4
        FROM laaver.Blog AS mainTable 
        WHERE mainTable.BlogBIT1 = 0 
        ORDER BY prIDX DESC 
        LIMIT 12`;
 
    con.query(sql, (error, results) => {
        if (error) {
            return next(error);
        }
 
        if (results.length > 0) {
            res.json({
                results: results
            });
        } else {
            res.json(1);
        }
    });
});

app.post('/frontend_index_AJAX_5', urlencodedParser, function (req, res, next) {
    const sqlQuery = `SELECT 
					mainTable.*,
					subTable.Dateiname
				FROM laaver.news AS mainTable
				LEFT JOIN laaver.news_bild AS subTable  
					ON subTable.frIDX = mainTable.prIDX
				   AND subTable.prIDX = (
						SELECT MIN(nb.prIDX)
						FROM laaver.news_bild AS nb
						WHERE nb.frIDX = mainTable.prIDX
					)
				WHERE mainTable.NewsBIT1 = 0
				ORDER BY mainTable.prIDX DESC LIMIT 12`;
 
    con.query(sqlQuery, (error, results) => {
        if (error) {
            return next(error);
        }
 
        res.json(results);
    });
});

app.post('/frontend_index_AJAX_6', urlencodedParser, function (req, res, next) {
    const sqlQuery = `
        SELECT *, 
            CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%d.%m.%Y') END AS sDatum1,
            CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%d.%m.%Y') END AS sDatum2,
            CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%d.%m.%Y') END AS sDatum3,
            CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%d.%m.%Y') END AS sDatum4
        FROM laaver.produkt_katalog AS mainTable 
        ORDER BY prIDX DESC 
        LIMIT 12`;
 
    con.query(sqlQuery, (error, results) => {
        if (error) {
            return next(error);
        }
 
        res.json(results);
    });
});
 
app.post('/frontend_index_KatalogProdukt1', urlencodedParser, function (req, res, next) {
    const showMenge = 6; // 控制产品数量
	const sql2 = `
		SELECT 
			P.prIDX, P.ProduktString14 AS Tag, P.ProduktString13 AS Foto, P.ProduktInt1 AS Katalog,
			ProduktString1, ProduktString2, ProduktString3, ProduktString4, ProduktString5,  
			P.ProduktFloat1 AS Orginalpreis, P.ProduktFloat3 AS Salepreis, PE.ProduktEinzelInt10 AS Discount,
			MIN(PB.ProduktBildString11) AS ProduktListeString1, '' AS ProduktListeString2, '' AS ProduktListeString3, '' AS ProduktListeString4,
			0 AS ProduktListeInt1, 0 AS ProduktListeInt2, 0 AS ProduktListeInt3, 0 AS ProduktListeInt4,
			0 AS ProduktListeFloat1, 0 AS ProduktListeFloat2, 0 AS ProduktListeFloat3, 0 AS ProduktListeFloat4,
			ProduktKatalogString1, ProduktKatalogString2, ProduktKatalogString3, ProduktKatalogString4  
		FROM 
			laaver.Produkt AS P
		LEFT JOIN 
			laaver.Produkt_Einzel AS PE ON PE.frIDX = P.prIDX
		LEFT JOIN 
			laaver.Produkt_Bild AS PB ON PB.frIDX = P.prIDX AND PB.ProduktBildString10 = 'Banner'
		LEFT JOIN 
			laaver.Produkt_Katalog AS PK ON PK.prIDX = P.ProduktInt1  
		WHERE 
			P.ProduktInt1 = 1 AND P.Status = 1
		GROUP BY 
			P.prIDX
		ORDER BY 
			RAND() 
		LIMIT ${showMenge}`;
 
	con.query(sql2, (error2, results2) => {
		if (error2) {
			return next(error2);
		}
 
		if (results2.length > 0) {
			res.json({
				results: results2
			});
		} else {
			res.json(1);
		}
	});
});
 
app.post('/frontend_index_KatalogProdukt2', urlencodedParser, function (req, res, next) {
    const showMenge = 6; // 控制产品数量
	const sql2 = `
		SELECT 
			P.prIDX, P.ProduktString14 AS Tag, P.ProduktString13 AS Foto, P.ProduktInt1 AS Katalog,
			ProduktString1, ProduktString2, ProduktString3, ProduktString4, ProduktString5,  
			P.ProduktFloat1 AS Orginalpreis, P.ProduktFloat3 AS Salepreis, PE.ProduktEinzelInt10 AS Discount,
			MIN(PB.ProduktBildString11) AS ProduktListeString1, '' AS ProduktListeString2, '' AS ProduktListeString3, '' AS ProduktListeString4,
			0 AS ProduktListeInt1, 0 AS ProduktListeInt2, 0 AS ProduktListeInt3, 0 AS ProduktListeInt4,
			0 AS ProduktListeFloat1, 0 AS ProduktListeFloat2, 0 AS ProduktListeFloat3, 0 AS ProduktListeFloat4,
			ProduktKatalogString1, ProduktKatalogString2, ProduktKatalogString3, ProduktKatalogString4  
		FROM 
			laaver.Produkt AS P
		LEFT JOIN 
			laaver.Produkt_Einzel AS PE ON PE.frIDX = P.prIDX
		LEFT JOIN 
			laaver.Produkt_Bild AS PB ON PB.frIDX = P.prIDX AND PB.ProduktBildString10 = 'Banner'
		LEFT JOIN 
			laaver.Produkt_Katalog AS PK ON PK.prIDX = P.ProduktInt1  
		WHERE 
			P.ProduktInt1 = 2 AND P.Status = 1
		GROUP BY 
			P.prIDX
		ORDER BY 
			RAND() 
		LIMIT ${showMenge}`;
 
	con.query(sql2, (error2, results2) => {
		if (error2) {
			return next(error2);
		}
 
		if (results2.length > 0) {
			res.json({
				results: results2
			});
		} else {
			res.json(1);
		}
	});
});
 
app.post('/frontend_index_KatalogProdukt3', urlencodedParser, function (req, res, next) {
    const showMenge = 6; // 控制产品数量
	const sql2 = `
		SELECT 
			P.prIDX, P.ProduktString14 AS Tag, P.ProduktString13 AS Foto, P.ProduktInt1 AS Katalog,
			ProduktString1, ProduktString2, ProduktString3, ProduktString4, ProduktString5,  
			P.ProduktFloat1 AS Orginalpreis, P.ProduktFloat3 AS Salepreis, PE.ProduktEinzelInt10 AS Discount,
			MIN(PB.ProduktBildString11) AS ProduktListeString1, '' AS ProduktListeString2, '' AS ProduktListeString3, '' AS ProduktListeString4,
			0 AS ProduktListeInt1, 0 AS ProduktListeInt2, 0 AS ProduktListeInt3, 0 AS ProduktListeInt4,
			0 AS ProduktListeFloat1, 0 AS ProduktListeFloat2, 0 AS ProduktListeFloat3, 0 AS ProduktListeFloat4,
			ProduktKatalogString1, ProduktKatalogString2, ProduktKatalogString3, ProduktKatalogString4  
		FROM 
			laaver.Produkt AS P
		LEFT JOIN 
			laaver.Produkt_Einzel AS PE ON PE.frIDX = P.prIDX
		LEFT JOIN 
			laaver.Produkt_Bild AS PB ON PB.frIDX = P.prIDX AND PB.ProduktBildString10 = 'Banner'
		LEFT JOIN 
			laaver.Produkt_Katalog AS PK ON PK.prIDX = P.ProduktInt1  
		WHERE 
			P.ProduktInt1 = 3 AND P.Status = 1
		GROUP BY 
			P.prIDX
		ORDER BY 
			RAND() 
		LIMIT ${showMenge}`;
 
	con.query(sql2, (error2, results2) => {
		if (error2) {
			return next(error2);
		}
 
		if (results2.length > 0) {
			res.json({
				results: results2
			});
		} else {
			res.json(1);
		}
	});
});

app.post('/frontend_shop_1', urlencodedParser, function (req, res, next) {
    const sqlQuery = `
        SELECT *, 
            CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%d.%m.%Y') END AS sDatum1,
            CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%d.%m.%Y') END AS sDatum2,
            CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%d.%m.%Y') END AS sDatum3,
            CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%d.%m.%Y') END AS sDatum4
        FROM laaver.produkt_katalog AS mainTable 
        ORDER BY prIDX DESC 
        LIMIT 12`;
 
    con.query(sqlQuery, (error, results) => {
        if (error) {
            return next(error);
        }
 
        res.json(results);
    });
});

app.post('/frontend_shop_2', urlencodedParser, function (req, res, next) {
    const sqlQuery = `SELECT DISTINCT P.*, PE.ProduktEinzelFloat1
						FROM laaver.Produkt AS P
						INNER JOIN laaver.Produkt_Einzel AS PE 
							ON PE.frIDX = P.prIDX
						INNER JOIN (
							SELECT frIDX, MIN(ProduktEinzelFloat1) AS minPrice
							FROM laaver.Produkt_Einzel
							GROUP BY frIDX
						) AS T
							ON T.frIDX = PE.frIDX
						   AND T.minPrice = PE.ProduktEinzelFloat1
						WHERE P.ProduktBIT1 = 0
						AND EXISTS (
							SELECT 1
							FROM laaver.lager AS L
							WHERE L.LagerInt4 = P.prIDX
							  AND L.status = 2
						)
						ORDER BY RAND();
					`;
 
    con.query(sqlQuery, (error, results) => {
        if (error) {
            return next(error);
        }
 
        res.json(results);
    });
});
 
app.post('/frontend_produkt_1', urlencodedParser, async function (req, res) {
	const prIDX = parseInt(req.body.prIDX);
	const sql = `
		SELECT *,
			CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
			CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
			CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
			CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
		FROM laaver.Produkt AS mainTable 
		WHERE mainTable.prIDX = ?
	`;
 
	const values = [prIDX];
 
	con.query(sql, values, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({ success: true, results });
	});
});
 
app.post('/frontend_produkt_2', urlencodedParser, async function (req, res) {
	const prIDX = parseInt(req.body.prIDX);
	const sql = `
		SELECT 
			mainTable.*,
			(
				SELECT COUNT(*)
				FROM laaver.lager L
				WHERE L.LagerInt1 = mainTable.prIDX
			) AS lagerCount
		FROM laaver.Produkt_Einzel AS mainTable
		WHERE mainTable.frIDX = ?;
		SELECT * FROM laaver.Produkt_Attribute AS mainTable WHERE frIDX = ?;
		SELECT * FROM laaver.Produkt_Bild AS mainTable WHERE frIDX = ?;
		SELECT * FROM laaver.Datei AS mainTable WHERE frIDX = ? AND Source='Produkt';
	`;
 
	const values = [prIDX, prIDX, prIDX, prIDX];
 
	con.query(sql, values, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({ success: true, results });
	});
});
 
app.post('/frontend_produkt_4', urlencodedParser, async function (req, res) {
	const prIDX = req.body.prIDX;
	const UserID = req.body.UserID;
 
	const sql = `
		INSERT INTO laaver.kunden_wunschliste (WunschlisteInt1, WunschlisteInt2)
		SELECT ?, ?
		FROM DUAL
		WHERE NOT EXISTS (
			SELECT 1 FROM laaver.kunden_Einkaufswagen
			WHERE EinkaufswagenInt1 = ? AND EinkaufswagenInt2 = ?
		)
	`;
 
	const values = [UserID, prIDX, UserID, prIDX];
	con.query(sql, values, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({ success: true, results });
	});
});
 
app.post('/frontend_produkt_5', urlencodedParser, async function (req, res) {
	const prIDX = req.body.prIDX;
	const UserID = req.body.UserID;
 
	const sql = `
		DELETE FROM laaver.kunden_wunschliste 
		WHERE WunschlisteInt1 = ? AND WunschlisteInt2 = ?
	`;
 
	const values = [UserID, prIDX];
 
	con.query(sql, values, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({ success: true, results });
	});
});

app.post('/frontend_einkaufswagen_1', urlencodedParser, async function (req, res) {
	const UserID = req.body.UserID;
 
	const sql = `SELECT *, '' AS KundenString14 FROM laaver.Kunden AS mainTable WHERE mainTable.prIDX= ?`;
 
	const values = [UserID];
 
	con.query(sql, values, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({ success: true, results });
	});
});

app.post('/frontend_einkaufswagen_2', urlencodedParser, async function (req, res) {
  const UserID = parseInt(req.body.UserID);

  const sql = `
    SELECT mainTable.*, 
      CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
      CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
      CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
      CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4,
      P.ProduktString11, P.ProduktString16, P.ProduktString13, 
      (SELECT GROUP_CONCAT(CONCAT(pa.ProduktAttributeString1, '%3A%20', REPLACE(pa.ProduktAttributeString2, ' ', '%20')) SEPARATOR '%3Cbr%2F%3E') 
         FROM laaver.produkt_attribute pa 
         WHERE FIND_IN_SET(pa.prIDX, REPLACE(PE.ProduktEinzelString1, ' ', '')) > 0
      ) AS AttributeResult,
      P.prIDX AS Produkt_prIDX,
      COALESCE((SELECT PE2.ProduktEinzelInt1 FROM laaver.Produkt_Einzel AS PE2 WHERE PE2.prIDX = mainTable.EinkaufswagenInt4 ORDER BY PE2.ProduktEinzelInt1 DESC LIMIT 1), 0) AS ProduktEinzelInt1,
      COALESCE((SELECT PE2.ProduktEinzelFloat1 FROM laaver.Produkt_Einzel AS PE2 WHERE PE2.prIDX = mainTable.EinkaufswagenInt4 ORDER BY PE2.ProduktEinzelInt1 DESC LIMIT 1), 0.0) AS ProduktEinzelFloat1,
	  COALESCE((SELECT PE2.ProduktEinzelFloat2 FROM laaver.Produkt_Einzel AS PE2 WHERE PE2.prIDX = mainTable.EinkaufswagenInt4 ORDER BY PE2.ProduktEinzelInt1 DESC LIMIT 1), 0.0) AS ProduktEinzelFloat2
    FROM laaver.Kunden_Einkaufswagen AS mainTable 
    INNER JOIN laaver.produkt_einzel AS PE ON PE.prIDX=mainTable.EinkaufswagenInt4 
    INNER JOIN laaver.produkt AS P ON P.prIDX=PE.frIDX 
    WHERE P.ProduktBIT1=0 AND EinkaufswagenInt1 = ? `;

  con.query(sql, [UserID], (error, results) => {
    if (error) {
      return res.json({ success: false, error: 1 });
    }

    // 返回 JSON 格式数据（不使用 XML）
    res.json({ success: true, results });
  });
});

app.post('/frontend_einkaufswagen_3', urlencodedParser, async function (req, res) {
  const VorlaufigKaufwagenArr = JSON.parse(req.body.VorlaufigKaufwagenArr);

  const results = [];

  for (let i = 0; i < VorlaufigKaufwagenArr.length; i++) {
    const item = VorlaufigKaufwagenArr[i];
    const EinkaufswagenInt2 = parseInt(item[1]);
    const EinkaufswagenInt3 = parseInt(item[2]);
    const EinkaufswagenString10 = item[3];

    const baseData = {
      prIDX: 0,
      frIDX: 0,
      Datum1: '',
      Datum2: '',
      Datum3: '',
      Datum4: '',
      Status: '',
      EinkaufswagenString10,
      EinkaufswagenString11: '',
      EinkaufswagenString12: '',
      EinkaufswagenString13: '',
      EinkaufswagenInt1: 0,
      EinkaufswagenInt2,
      EinkaufswagenInt3,
      EinkaufswagenFloat2: 0,
      EinkaufswagenFloat3: 0,
      EinkaufswagenFloat4: 0,
      EinkaufswagenFloat5: 0,
      EinkaufswagenFloat6: 0,
      EinkaufswagenBIT1: 0,
      EinkaufswagenBIT2: 0,
      EinkaufswagenString14: '',
      EinkaufswagenString15: '',
      EinkaufswagenString16: '',
      EinkaufswagenString17: '',
      EinkaufswagenString18: '',
      EinkaufswagenString19: '',
      EinkaufswagenString20: '',
      EinkaufswagenString21: '',
      EinkaufswagenString22: '',
      EinkaufswagenString23: '',
      EinkaufswagenString24: '',
      EinkaufswagenString25: '',
      EinkaufswagenString26: '',
      EinkaufswagenString27: '',
      EinkaufswagenString28: '',
      EinkaufswagenString29: '',
      EinkaufswagenInt4: 0,
      EinkaufswagenInt5: 0,
      EinkaufswagenFloat1: 0,
	  EinkaufswagenFloat2: 0,
	  AttributeResult: '',
	  ProduktEinzelFloat1: 0,
	  ProduktEinzelFloat2: 0,
	  ProduktString13: '',
	  Produkt_prIDX: parseInt(item[0])
    };

    const attrSql = `
		WITH RECURSIVE split_ids AS (
		SELECT TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(PE.ProduktEinzelString1, ',', numbers.n), ',', -1)) AS prIDX
		FROM laaver.Produkt_Einzel AS PE
		JOIN (SELECT 1 n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5) numbers
		  ON CHAR_LENGTH(PE.ProduktEinzelString1) - CHAR_LENGTH(REPLACE(PE.ProduktEinzelString1, ',', '')) + 1 >= numbers.n
		WHERE PE.prIDX = ${EinkaufswagenInt2}
	  ),
	  filtered_attributes AS (
		SELECT pa.ProduktAttributeString1 
		FROM laaver.produkt_attribute pa
		JOIN split_ids s ON pa.prIDX = s.prIDX
	  ),
	  attribute_result AS (
		SELECT GROUP_CONCAT(CONCAT(ProduktAttributeString1, '%3A%20', REPLACE(ProduktAttributeString1, ' ', '%20')) SEPARATOR '%3Cbr%2F%3E') AS result
		FROM filtered_attributes
	  )
	  SELECT DISTINCT(P.prIDX), P.ProduktString2, P.ProduktString3, P.ProduktString4, P.ProduktString5, P.ProduktString13, ar.result AS AttributeResult
	  FROM laaver.Produkt AS P
	  INNER JOIN laaver.Produkt_Einzel AS PE ON PE.frIDX = P.prIDX
	  INNER JOIN laaver.Produkt_Bild AS PB ON PB.frIDX = P.prIDX AND PB.ProduktBildString10 = 'Banner'
	  CROSS JOIN attribute_result ar
	  WHERE P.ProduktBIT1 = 0 AND PE.prIDX = ${EinkaufswagenInt2}
	  GROUP BY P.ProduktString2, P.ProduktString3, P.ProduktString4, P.ProduktString5, PE.prIDX, P.ProduktString13, ar.result `;

    const aliSql = `
      SELECT
        CASE WHEN PE.ProduktEinzelInt1 IS NULL THEN 0 ELSE PE.ProduktEinzelInt1 END AS ProduktEinzelInt1,
        CASE WHEN PE.ProduktEinzelFloat1 IS NULL THEN 0 ELSE PE.ProduktEinzelFloat1 END AS ProduktEinzelFloat1,
		CASE WHEN PE.ProduktEinzelFloat2 IS NULL THEN 0 ELSE PE.ProduktEinzelFloat2 END AS ProduktEinzelFloat2 
      FROM laaver.Produkt_Einzel AS PE
      WHERE PE.prIDX = ${EinkaufswagenInt2}
      ORDER BY PE.ProduktEinzelInt1 DESC
      LIMIT 1
    `;

    con.query(attrSql, (err1, rows1) => {
      if (!err1 && rows1.length > 0) {
        baseData.EinkaufswagenString2 = rows1[0].ProduktString2 || '';
        baseData.EinkaufswagenString3 = rows1[0].ProduktString3 || '';
        baseData.EinkaufswagenString4 = rows1[0].ProduktString4 || '';
		baseData.EinkaufswagenString5 = rows1[0].ProduktString5 || '';
		baseData.ProduktString13 = rows1[0].ProduktString13 || '';
		baseData.AttributeResult = rows1[0].AttributeResult || '';
        baseData.EinkaufswagenInt4 = rows1[0].prIDX || 0;
      }

      con.query(aliSql, (err2, rows2) => {
        if (!err2 && rows2.length > 0) {
          baseData.EinkaufswagenInt5 = rows2[0].ProduktEinzelInt1 || 0;
          baseData.ProduktEinzelFloat1 = parseFloat(rows2[0].ProduktEinzelFloat1).toFixed(2);
		  baseData.ProduktEinzelFloat2 = parseFloat(rows2[0].ProduktEinzelFloat2).toFixed(2);
        }

        results.push(baseData);

        if (results.length === VorlaufigKaufwagenArr.length) {
          res.json({ success: true, results });
        }
      });
    });
  }
});

app.post('/frontend_einkaufswagen_4', urlencodedParser, function (req, res) {
	const EinkaufswagenArr = JSON.parse(req.body.EinkaufswagenArr);
	let sql = "";
	
	for (let i = 0; i < EinkaufswagenArr.length; i++) {
		sql += `UPDATE laaver.kunden_Einkaufswagen 
		        SET EinkaufswagenInt3=${EinkaufswagenArr[i].EinkaufswagenInt3},
		            EinkaufswagenString10='${EinkaufswagenArr[i].EinkaufswagenString10}'
		        WHERE prIDX=${EinkaufswagenArr[i].prIDX}; `;
	}

	con.query(sql, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({ success: true, results });
	});
});

app.post('/frontend_einkaufswagen_5', urlencodedParser, function (req, res) {
	const prIDX = parseInt(req.body.prIDX);
	const sql = `DELETE FROM laaver.kunden_Einkaufswagen WHERE prIDX=${prIDX}; `;

	con.query(sql, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({ success: true, results });
	});
});

app.post('/frontend_kasse_1', urlencodedParser, (req, res, next) => {
    const userID = req.body.UserID;

    const sqlQuery = `
        SELECT mainTable.*, 
            CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
            CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
            CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
            CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4,
            CASE WHEN V.VertreterFloat6 IS NULL THEN 0 ELSE V.VertreterFloat6 END AS VertreterFloat6 
        FROM laaver.Kunden AS mainTable 
        LEFT JOIN laaver.vertreter AS V ON V.prIDX = mainTable.KundenInt5 
        WHERE mainTable.prIDX = ${userID}`;

    con.query(sqlQuery, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({
			results: results
		});
	}); 
});

app.post('/frontend_kasse_8', urlencodedParser, (req, res, next) => {
     const sqlQuery = `SELECT * FROM laaver.global_countrycode`;

     con.query(sqlQuery, (error, results) => {
        if (error) {
            return next(error);
        }

        if (results.length > 0) {
            res.json(results);
        } else {
            res.json(1);
        }
    });
});

app.post('/frontend_kasse_2', urlencodedParser, (req, res, next) => {
    const userID = parseInt(req.body.UserID);
    const query = `
      SELECT *,
        CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
        CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
        CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
        CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
      FROM laaver.Kunden_Einkaufswagen AS mainTable
      INNER JOIN laaver.produkt_einzel AS PE ON PE.prIDX = mainTable.EinkaufswagenInt4
      INNER JOIN laaver.produkt AS P ON P.prIDX = PE.frIDX
      WHERE P.ProduktBIT1 = 0 AND EinkaufswagenInt1 = ?
    `;

    con.query(query, [userID], (err, results) => {
        if (err) throw err;

        res.setHeader('Content-Type', 'text/xml');
        let responseXML = "<?xml version='1.0' encoding='UTF-8'?><Einkaufswagen>";

        const promises = results.map(row => {
            return new Promise((resolve, reject) => {
                let rowXML = `
                  <Einkaufswagen>
                    <prIDX>${parseInt(row.prIDX)}</prIDX>
                    <frIDX>${parseInt(row.frIDX)}</frIDX>
                    <Datum1>${String(row.sDatum1)}</Datum1>
                    <Datum2>${String(row.sDatum2)}</Datum2>
                    <Datum3>${String(row.sDatum3)}</Datum3>
                    <Datum4>${String(row.sDatum4)}</Datum4>
                    <Status>${parseInt(row.Status)}</Status>
					<ProduktString13>${String(row.ProduktString13)}</ProduktString13>
					<EinkaufswagenString1>${String(row.EinkaufswagenString1)}</EinkaufswagenString1>
					<EinkaufswagenString2>${String(row.EinkaufswagenString2)}</EinkaufswagenString2>
					<EinkaufswagenString3>${String(row.EinkaufswagenString3)}</EinkaufswagenString3>
					<EinkaufswagenString4>${String(row.EinkaufswagenString4)}</EinkaufswagenString4>
					<EinkaufswagenString5>${String(row.EinkaufswagenString5)}</EinkaufswagenString5>
					<EinkaufswagenString6>${String(row.EinkaufswagenString6)}</EinkaufswagenString6>
					<EinkaufswagenString7>${String(row.EinkaufswagenString7)}</EinkaufswagenString7>
					<EinkaufswagenString8>${String(row.EinkaufswagenString8)}</EinkaufswagenString8>
					<EinkaufswagenString9>${String(row.EinkaufswagenString9)}</EinkaufswagenString9>
                    <EinkaufswagenString10>${String(row.EinkaufswagenString10)}</EinkaufswagenString10>
                    <EinkaufswagenString11>${String(row.EinkaufswagenString11)}</EinkaufswagenString11>
                    <EinkaufswagenString12>${String(row.EinkaufswagenString12)}</EinkaufswagenString12>
                    <EinkaufswagenString13>${String(row.EinkaufswagenString13)}</EinkaufswagenString13>
                    <EinkaufswagenInt1>${parseInt(row.EinkaufswagenInt1)}</EinkaufswagenInt1>
                    <EinkaufswagenInt2>${parseInt(row.EinkaufswagenInt2)}</EinkaufswagenInt2>
                    <EinkaufswagenInt3>${parseInt(row.EinkaufswagenInt3)}</EinkaufswagenInt3>
					<EinkaufswagenInt4>${parseInt(row.EinkaufswagenInt4)}</EinkaufswagenInt4>                   
                    <EinkaufswagenFloat3>${parseFloat(row.EinkaufswagenFloat3).toFixed(2)}</EinkaufswagenFloat3>
                    <EinkaufswagenFloat4>${parseFloat(row.EinkaufswagenFloat4).toFixed(2)}</EinkaufswagenFloat4>
                    <EinkaufswagenFloat5>${parseFloat(row.EinkaufswagenFloat5).toFixed(2)}</EinkaufswagenFloat5>
                    <EinkaufswagenFloat6>${parseFloat(row.EinkaufswagenFloat6).toFixed(2)}</EinkaufswagenFloat6>
                    <EinkaufswagenBIT1>${parseInt(row.EinkaufswagenBIT1)}</EinkaufswagenBIT1>
                    <EinkaufswagenBIT2>${parseInt(row.EinkaufswagenBIT2)}</EinkaufswagenBIT2>
                    <EinkaufswagenString14>${String(row.EinkaufswagenString14)}</EinkaufswagenString14>
                    <EinkaufswagenString15>${String(row.EinkaufswagenString15)}</EinkaufswagenString15>
                    <EinkaufswagenString16>${String(row.EinkaufswagenString16)}</EinkaufswagenString16>
                    <EinkaufswagenString17>${String(row.EinkaufswagenString17)}</EinkaufswagenString17>
                    <EinkaufswagenString18>${String(row.EinkaufswagenString18)}</EinkaufswagenString18>
                    <EinkaufswagenString19>${String(row.EinkaufswagenString19)}</EinkaufswagenString19>
                    <EinkaufswagenString20>${String(row.EinkaufswagenString20)}</EinkaufswagenString20>
                    <EinkaufswagenString21>${String(row.EinkaufswagenString21)}</EinkaufswagenString21>
                    <EinkaufswagenString22>${String(row.EinkaufswagenString22)}</EinkaufswagenString22>
                    <EinkaufswagenString23>${String(row.EinkaufswagenString23)}</EinkaufswagenString23>
                    <EinkaufswagenString24>${String(row.EinkaufswagenString24)}</EinkaufswagenString24>
                    <EinkaufswagenString25>${String(row.EinkaufswagenString25)}</EinkaufswagenString25>
                    <EinkaufswagenString26>${String(row.EinkaufswagenString26)}</EinkaufswagenString26>
                `;
                const query1 = `
					WITH RECURSIVE split_ids AS (SELECT TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(PE.ProduktEinzelString1, ',', numbers.n), ',', -1)) AS prIDX  
					FROM laaver.Produkt_Einzel AS PE JOIN  
					(SELECT 1 n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5) numbers ON CHAR_LENGTH(PE.ProduktEinzelString1) - CHAR_LENGTH(REPLACE(PE.ProduktEinzelString1, ',', '')) + 1 >= numbers.n  
					WHERE PE.prIDX = ?), filtered_attributes AS (SELECT pa.ProduktAttributeString1, pa.ProduktAttributeString2 FROM laaver.produkt_attribute pa  
					JOIN split_ids s ON pa.prIDX = s.prIDX), attribute_result AS (SELECT GROUP_CONCAT(CONCAT(ProduktAttributeString1, '%3A%20', REPLACE(ProduktAttributeString2, ' ', '%20')) SEPARATOR '%3Cbr%2F%3E') AS result  
					FROM filtered_attributes) SELECT DISTINCT(P.prIDX), P.ProduktString11, P.ProduktString16, P.ProduktString29, ar.result AS AttributeResult FROM laaver.Produkt AS P  
					INNER JOIN laaver.Produkt_Einzel AS PE ON PE.frIDX = P.prIDX INNER JOIN laaver.Produkt_Bild AS PB ON PB.frIDX = P.prIDX AND PB.ProduktBildString10 = 'Banner'  
					CROSS JOIN attribute_result ar WHERE P.ProduktBIT1 = 0 AND PE.prIDX = ?  
					GROUP BY P.ProduktString11, P.ProduktString16, PE.prIDX, P.ProduktString29, ar.result
                `;

                con.query(query1, [row.EinkaufswagenInt4,row.EinkaufswagenInt4], (err1, results1) => {
                    if (err1) reject(err1);
                    if (results1.length == 0) {
                        rowXML += `
                          <EinkaufswagenString27/>
                          <EinkaufswagenString28/>
                          <EinkaufswagenString29/>
                          <EinkaufswagenInt5>0</EinkaufswagenInt5>
                          <EinkaufswagenFloat1>0</EinkaufswagenFloat1>
                        `;
                        rowXML += '</Einkaufswagen>';
                        resolve(rowXML);
                    } else {
                        const row1 = results1[0];
                        rowXML += `
                          <EinkaufswagenString27>${String(row1.ProduktString16)}</EinkaufswagenString27>
                          <EinkaufswagenString28>${String(row1.AttributeResult)}</EinkaufswagenString28>
                          <EinkaufswagenString29>${String(row1.ProduktString29)}</EinkaufswagenString29>
                        `;

                        const query2 = `
                          SELECT CASE WHEN PE.ProduktEinzelInt1 IS NULL THEN 0 ELSE PE.ProduktEinzelInt1 END AS ProduktEinzelInt1, 
                            CASE WHEN PE.ProduktEinzelFloat1 IS NULL THEN 0 ELSE PE.ProduktEinzelFloat1 END AS ProduktEinzelFloat1, 
							CASE WHEN PE.ProduktEinzelFloat2 IS NULL THEN 0 ELSE PE.ProduktEinzelFloat2 END AS ProduktEinzelFloat2
                          FROM laaver.Produkt_Einzel AS PE
                          WHERE PE.prIDX = ?
                          ORDER BY PE.ProduktEinzelInt1 DESC LIMIT 1
                        `;
                        
                        con.query(query2, [row.EinkaufswagenInt4], (err2, results2) => {
                            if (err2) reject(err2);
                            const row2 = results2[0];
                            rowXML += `
                              <EinkaufswagenInt5>${parseInt(row2.ProduktEinzelInt1)}</EinkaufswagenInt5>
                              <EinkaufswagenFloat1>${parseFloat(row2.ProduktEinzelFloat1).toFixed(2)}</EinkaufswagenFloat1>
							  <EinkaufswagenFloat2>${parseFloat(row2.ProduktEinzelFloat2).toFixed(2)}</EinkaufswagenFloat2>
                            `;
                            rowXML += '</Einkaufswagen>';
                            resolve(rowXML);
                        });
                    }
                });
            });
        });

        Promise.all(promises).then(rowsXML => {
            responseXML += rowsXML.join('');
            responseXML += '</Einkaufswagen>';
            res.send(responseXML);
        }).catch(error => {
            next(error);
        });
    });
});

app.post('/frontend_kasse_6', urlencodedParser, (req, res, next) => {
    const VorlaufigKaufwagenArr = JSON.parse(req.body.VorlaufigKaufwagenArr);

    res.setHeader('Content-Type', 'text/xml');
    let responseXML = "<?xml version='1.0' encoding='UTF-8'?><Einkaufswagen>";

    const promises = VorlaufigKaufwagenArr.map(item => {
        return new Promise((resolve, reject) => {
            let rowXML = `
              <Einkaufswagen>
                <prIDX>0</prIDX>
                <frIDX>0</frIDX>
                <Datum1/>
                <Datum2/>
                <Datum3/>
                <Datum4/>
                <Status/>
                <EinkaufswagenString10>${String(item[3])}</EinkaufswagenString10>
                <EinkaufswagenString11/>
                <EinkaufswagenString12/>
                <EinkaufswagenString13/>
                <EinkaufswagenInt1>0</EinkaufswagenInt1>
                <EinkaufswagenInt2>${parseInt(item[0])}</EinkaufswagenInt2>
                <EinkaufswagenInt3>${parseInt(item[2])}</EinkaufswagenInt3>
				<EinkaufswagenInt4>${parseInt(item[1])}</EinkaufswagenInt4>
                <EinkaufswagenFloat3>0</EinkaufswagenFloat3>
                <EinkaufswagenFloat4>0</EinkaufswagenFloat4>
                <EinkaufswagenFloat5>0</EinkaufswagenFloat5>
                <EinkaufswagenFloat6>0</EinkaufswagenFloat6>
                <EinkaufswagenBIT1>0</EinkaufswagenBIT1>
                <EinkaufswagenBIT2>0</EinkaufswagenBIT2>
                <EinkaufswagenString14/>
                <EinkaufswagenString15/>
                <EinkaufswagenString16/>
                <EinkaufswagenString17/>
                <EinkaufswagenString18/>
                <EinkaufswagenString19/>
                <EinkaufswagenString20/>
                <EinkaufswagenString21/>
                <EinkaufswagenString22/>
                <EinkaufswagenString23/>
                <EinkaufswagenString24/>
                <EinkaufswagenString25/>
                <EinkaufswagenString26/>
            `;

            let query1 = `
				WITH RECURSIVE split_ids AS (SELECT TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(PE.ProduktEinzelString1, ',', numbers.n), ',', -1)) AS prIDX  
				FROM laaver.Produkt_Einzel AS PE JOIN  
				(SELECT 1 n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5) numbers ON CHAR_LENGTH(PE.ProduktEinzelString1) - CHAR_LENGTH(REPLACE(PE.ProduktEinzelString1, ',', '')) + 1 >= numbers.n  
				WHERE PE.prIDX = ?), filtered_attributes AS (SELECT pa.ProduktAttributeString1, pa.ProduktAttributeString2 FROM laaver.produkt_attribute pa  
				JOIN split_ids s ON pa.prIDX = s.prIDX), attribute_result AS (SELECT GROUP_CONCAT(CONCAT(ProduktAttributeString1, '%3A%20', REPLACE(ProduktAttributeString2, ' ', '%20')) SEPARATOR '%3Cbr%2F%3E') AS result  
				FROM filtered_attributes) SELECT DISTINCT(P.prIDX), P.ProduktString11, P.ProduktString16, P.ProduktString29, ar.result AS AttributeResult, P.ProduktString13, 
				P.ProduktString1, P.ProduktString2, P.ProduktString3, P.ProduktString4, P.ProduktString5, P.ProduktString6, P.ProduktString7, P.ProduktString8, P.ProduktString9 
				FROM laaver.Produkt AS P  
				INNER JOIN laaver.Produkt_Einzel AS PE ON PE.frIDX = P.prIDX INNER JOIN laaver.Produkt_Bild AS PB ON PB.frIDX = P.prIDX AND PB.ProduktBildString10 = 'Banner'  
				CROSS JOIN attribute_result ar WHERE P.ProduktBIT1 = 0 AND PE.prIDX = ?  
				GROUP BY P.ProduktString11, P.ProduktString16, PE.prIDX, P.ProduktString29, ar.result
            `;

            con.query(query1, [item[1],item[1]], (err1, results1) => {
                if (err1) return reject(err1);
                if (results1.length == 0) {
                    rowXML += `
                      <EinkaufswagenString27/>
                      <EinkaufswagenString28/>
                      <EinkaufswagenString29/>                      
                      <EinkaufswagenInt5>0</EinkaufswagenInt5>
                      <EinkaufswagenFloat1>0</EinkaufswagenFloat1>
					  <EinkaufswagenFloat2>0</EinkaufswagenFloat2>
					  <ProduktString13/>
					  <EinkaufswagenString1/>
					  <EinkaufswagenString2/>
					  <EinkaufswagenString3/>
					  <EinkaufswagenString4/>
					  <EinkaufswagenString5/>
					  <EinkaufswagenString6/>
					  <EinkaufswagenString7/>
					  <EinkaufswagenString8/>
					  <EinkaufswagenString9/>
                    `;
                    rowXML += '</Einkaufswagen>';
                    resolve(rowXML);
                } else {
                    let row1 = results1[0];
                    rowXML += `
                      <EinkaufswagenString27>${String(row1.ProduktString16)}</EinkaufswagenString27>
                      <EinkaufswagenString28>${String(row1.AttributeResult)}</EinkaufswagenString28>
                      <EinkaufswagenString29>${String(row1.ProduktString29)}</EinkaufswagenString29>
					  <ProduktString13>${String(row1.ProduktString13)}</ProduktString13>
					  <EinkaufswagenString1>${String(row1.ProduktString1)}</EinkaufswagenString1>
					  <EinkaufswagenString2>${String(row1.ProduktString2)}</EinkaufswagenString2>
					  <EinkaufswagenString3>${String(row1.ProduktString3)}</EinkaufswagenString3>
					  <EinkaufswagenString4>${String(row1.ProduktString4)}</EinkaufswagenString4>
					  <EinkaufswagenString5>${String(row1.ProduktString5)}</EinkaufswagenString5>
					  <EinkaufswagenString6>${String(row1.ProduktString6)}</EinkaufswagenString6>
					  <EinkaufswagenString7>${String(row1.ProduktString7)}</EinkaufswagenString7>
				 	  <EinkaufswagenString8>${String(row1.ProduktString8)}</EinkaufswagenString8>
					  <EinkaufswagenString9>${String(row1.ProduktString9)}</EinkaufswagenString9>
                    `;

                    let query2 = `
                      SELECT CASE WHEN PE.ProduktEinzelInt1 IS NULL THEN 0 ELSE PE.ProduktEinzelInt1 END AS ProduktEinzelInt1, 
                        CASE WHEN PE.ProduktEinzelFloat1 IS NULL THEN 0 ELSE PE.ProduktEinzelFloat1 END AS ProduktEinzelFloat1,
						CASE WHEN PE.ProduktEinzelFloat2 IS NULL THEN 0 ELSE PE.ProduktEinzelFloat2 END AS ProduktEinzelFloat2 
                      FROM laaver.Produkt_Einzel AS PE
                      WHERE PE.prIDX = ?
                      ORDER BY PE.ProduktEinzelInt1 DESC LIMIT 1
                    `;
                    
                    con.query(query2, [item[1]], (err2, results2) => {
                        if (err2) return reject(err2);
                        let row2 = results2[0];
                        rowXML += `
                          <EinkaufswagenInt5>${parseInt(row2.ProduktEinzelInt1)}</EinkaufswagenInt5>
                          <EinkaufswagenFloat1>${parseFloat(row2.ProduktEinzelFloat1).toFixed(2)}</EinkaufswagenFloat1>
						  <EinkaufswagenFloat2>${parseFloat(row2.ProduktEinzelFloat2).toFixed(2)}</EinkaufswagenFloat2>
                        `;
                        rowXML += '</Einkaufswagen>';
                        resolve(rowXML);
                    });
                }
            });
        });
    });

    Promise.all(promises).then(rowsXML => {
        responseXML += rowsXML.join('');
        responseXML += '</Einkaufswagen>';
        res.send(responseXML);
    }).catch(error => {
        next(error);
    });
});


app.post('/frontend_kasse_7', urlencodedParser, function (req, res, next){
  const KundenString10 = unescape(req.body.KundenString10) || '';
  const KundenString11 = unescape(req.body.KundenString11) || '';
  const KundenString13 = unescape(req.body.KundenString13) || '';
     
    const querySelect = "SELECT * FROM laaver.Kunden WHERE KundenString10 = ?";
    const queryInsert = "INSERT INTO laaver.Kunden (KundenString10, KundenString11, KundenString13) VALUES (?, ?, ?)";
    const querySelectLast = "SELECT * FROM laaver.Kunden ORDER BY prIDX DESC LIMIT 1";

    con.query(querySelect, [KundenString10], (err, results) => {
      if (err) throw err;

      if (results.length > 0) {
        res.send(String(results[0].prIDX));
      } else {
        con.query(queryInsert, [KundenString10, KundenString11, KundenString13], (errInsert) => {
          if (errInsert) throw errInsert;

          con.query(querySelectLast, (errLast, resultsLast) => {
            if (errLast) throw errLast;

            res.send(String(resultsLast[0].prIDX));
          });
        });
      }
    });
});

app.post('/frontend_kasse_4', urlencodedParser, function (req, res, next){
	const EinkaufswagenArr = JSON.parse(req.body.EinkaufswagenArr);
	const oneKunden = JSON.parse(req.body.oneKunden);
    const oneKundenBilling = JSON.parse(req.body.oneKundenBilling);
    const oneKundenShipping = JSON.parse(req.body.oneKundenShipping);
    const PaymentBetragObj = JSON.parse(req.body.PaymentBetragObj);
    const UserID = req.body.UserID;
    const Email = req.body.Email;
	const RechnungType = req.body.RechnungType;
    const RabatteBeschreibung = req.body.RabatteBeschreibung;
    const globalSumme = parseFloat(req.body.globalSumme);
    const globalCoupon = parseFloat(req.body.globalCoupon);
    const globalRabatte = parseFloat(req.body.globalRabatte);
    const BetragType = PaymentBetragObj.BestellungBetragString10;
    let BestellungInt1 = 1;
    if (BetragType == 'Paypal') BestellungInt1 = 2;
    else if (BetragType == 'Stripe') BestellungInt1 = 3;

    const BestellungFloat5 = parseFloat(globalSumme - globalCoupon - globalRabatte).toFixed(2);

	let queryInsertOrder = "INSERT INTO laaver.bestellung (BestellungInt5, BestellungInt3, BestellungFloat1, BestellungFloat2, BestellungFloat4, BestellungFloat5, BestellungString22, BestellungString25, BestellungString15, BestellungInt1) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
	if(BestellungInt1!=1) queryInsertOrder = "INSERT INTO laaver.bestellung (BestellungInt5, BestellungInt3, BestellungFloat1, BestellungFloat2, BestellungFloat4, BestellungFloat5, BestellungString22, BestellungString25, BestellungString15, BestellungInt1, Datum4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())";


    const queryLastOrder = `
      SELECT * FROM laaver.bestellung ORDER BY prIDX DESC LIMIT 1
    `;

    con.query(queryInsertOrder, [oneKunden.KundenInt5, UserID, globalCoupon, globalRabatte, globalSumme, BestellungFloat5, Email, RabatteBeschreibung, RechnungType, BestellungInt1], (err, result) => {
      if (err) {
        return next(err);
      }

      con.query(queryLastOrder, (errLastOrder, resultLastOrder) => {
        if (errLastOrder) {
          return next(errLastOrder);
        }

        const lastOrderID = resultLastOrder[0].prIDX;

        const queryInsertShipping = `
          INSERT INTO laaver.bestellung_address_shipping (frIDX, BestellungShippingString11, BestellungShippingString13, BestellungShippingString14, BestellungShippingString17, BestellungShippingString15, BestellungShippingString18)
          VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        con.query(queryInsertShipping, [lastOrderID, oneKundenShipping.KundenShippingString10, oneKundenShipping.KundenShippingString11, oneKundenShipping.KundenShippingString12, oneKundenShipping.KundenShippingString13, oneKundenShipping.KundenShippingString14, oneKundenShipping.KundenShippingString15], (errInsertShipping) => {
          if (errInsertShipping) {
            return next(errInsertShipping);
          }
        });

        const queryInsertBilling = `
          INSERT INTO laaver.bestellung_address_billing (frIDX, BestellungBillingString11, BestellungBillingString13, BestellungBillingString14, BestellungBillingString17, BestellungBillingString15, BestellungBillingString18, BestellungBillingString20)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        con.query(queryInsertBilling, [lastOrderID, oneKundenBilling.KundenBillingString10, oneKundenBilling.KundenBillingString11, oneKundenBilling.KundenBillingString12, oneKundenBilling.KundenBillingString13, oneKundenBilling.KundenBillingString14, oneKundenBilling.KundenBillingString15, oneKundenBilling.KundenBillingString16], (errInsertBilling) => {
          if (errInsertBilling) {
            return next(errInsertBilling);
          }
        });

        if (String(BetragType) != "undefined") {
          const queryInsertPayment = `
            INSERT INTO laaver.bestellung_betrag (frIDX, BestellungBetragString10, BestellungBetragString11, BestellungBetragString12, BestellungBetragString13, BestellungBetragString14, BestellungBetragString15, BestellungBetragString16, BestellungBetragString17, BestellungBetragString18, BestellungBetragFloat1, BestellungBetragFloat2, BestellungBetragFloat3)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `;

          con.query(queryInsertPayment, [lastOrderID, PaymentBetragObj.BestellungBetragString10, PaymentBetragObj.BestellungBetragString11, PaymentBetragObj.BestellungBetragString12, PaymentBetragObj.BestellungBetragString13, PaymentBetragObj.BestellungBetragString14, PaymentBetragObj.BestellungBetragString15, PaymentBetragObj.BestellungBetragString16, PaymentBetragObj.BestellungBetragString17, PaymentBetragObj.BestellungBetragString18, PaymentBetragObj.BestellungBetragFloat1, PaymentBetragObj.BestellungBetragFloat2, PaymentBetragObj.BestellungBetragFloat3], (errInsertPayment) => {
            if (errInsertPayment) {
              return next(errInsertPayment);
            }
          });
        }
		
		let sqlQuery = "";
		let finishedCount = 0;
		const totalCount = EinkaufswagenArr.length;
        EinkaufswagenArr.forEach(item => {
          const queryInsertArtikel = `
            INSERT INTO laaver.bestellung_artikel (frIDX, BestellungArtikelString10, BestellungArtikelString11, BestellungArtikelString12, BestellungArtikelString13, BestellungArtikelString14, BestellungArtikelString15, BestellungArtikelString16, BestellungArtikelInt5, BestellungArtikelInt4, BestellungArtikelInt2, BestellungArtikelInt3, BestellungArtikelFloat5, BestellungArtikelFloat3)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
          `;
          con.query(queryInsertArtikel, [lastOrderID, item.EinkaufswagenString2, item.EinkaufswagenString3, item.EinkaufswagenString4, item.EinkaufswagenString5, item.EinkaufswagenString28, item.EinkaufswagenString29, item.EinkaufswagenString10, item.EinkaufswagenInt2, item.EinkaufswagenInt3, item.EinkaufswagenInt4, item.EinkaufswagenInt5, item.EinkaufswagenFloat1, item.EinkaufswagenFloat2], (errInsertArtikel, resultInsertArtikel) => {
            if (errInsertArtikel) { return next(errInsertArtikel); }
				sqlQuery += `
							UPDATE laaver.lager
							SET Status = 3, LagerInt3 = ${resultInsertArtikel.insertId}
							WHERE prIDX IN (
							  SELECT prIDX FROM (
								SELECT prIDX
								FROM laaver.lager
								WHERE LagerInt1 = ${item.EinkaufswagenInt4}
								  AND Status = 2
								ORDER BY prIDX
								LIMIT ${item.EinkaufswagenInt3}
							  ) AS t
							 );
						   `;	

				finishedCount++;
				if (finishedCount === totalCount) {
					con.query(sqlQuery, (errUpdateLager) => {
					  if (errUpdateLager) {
						return next(errUpdateLager);
					  }
					  //console.log('Lager update finished');
					});
				}
          });
        });

        const queryDeleteEinkaufswagen = `
          DELETE FROM laaver.kunden_einkaufswagen WHERE EinkaufswagenInt1 = ?
        `;

        con.query(queryDeleteEinkaufswagen, [UserID], (errDeleteEinkaufswagen) => {
          if (errDeleteEinkaufswagen) {
            return next(errDeleteEinkaufswagen);
          }
        });

        const querySelectOrder = `
          SELECT DISTINCT mainTable.*, 
            CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
            CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
            CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
            CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4 
          FROM laaver.bestellung AS mainTable WHERE prIDX = ?
        `;

        con.query(querySelectOrder, [lastOrderID], (errSelectOrder, resultSelectOrder) => {
			  if (errSelectOrder) {
				return next(errSelectOrder);
			  }
			  res.json(resultSelectOrder);
		 });
		});
	});
});

app.post('/frontend_kasse_5', urlencodedParser, function (req, res, next){
	const prIDX = unescape(req.body.prIDX) || '';
	const queries = [
      `SELECT *, 
        CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
        CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
        CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
        CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
        FROM laaver.Bestellung_Address_Billing AS mainTable WHERE mainTable.frIDX=${prIDX}`,
      
      `SELECT *, 
        CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
        CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
        CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
        CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
        FROM laaver.Bestellung_Address_Shipping AS mainTable WHERE mainTable.frIDX=${prIDX}`,
      
      `SELECT *, 
        CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
        CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
        CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
        CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
        FROM laaver.Bestellung_Artikel AS mainTable WHERE mainTable.frIDX=${prIDX}`,
      
      `SELECT *, 
        CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
        CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
        CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
        CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
        FROM laaver.Bestellung_Betrag AS mainTable WHERE mainTable.frIDX=${prIDX}`
    ];

    const results = { Billing: [], Shipping: [], Artikel: [], Betrag: [] };
	
    const handleQuery = (query, key, callback) => {
      con.query(query, (error, queryResults) => {
        if (error) throw error;
        if (!results[key]) {
          results[key] = [];
        }
        queryResults.forEach(row => {
          results[key].push(row);
        });
        callback();
      });
    };

    handleQuery(queries[0], 'Billing', () => {
      handleQuery(queries[1], 'Shipping', () => {
        handleQuery(queries[2], 'Artikel', () => {
          handleQuery(queries[3], 'Betrag', () => {
            res.set('Content-Type', 'text/xml');
            res.send(`<?xml version='1.0' encoding='UTF-8'?>
              <DATEN>
                ${results.Billing.map(row => `
                  <Billing>
                    <prIDX>${row.prIDX}</prIDX>
                    <frIDX>${row.frIDX}</frIDX>
                    <Datum1>${row.sDatum1}</Datum1>
                    <Datum2>${row.sDatum2}</Datum2>
                    <Datum3>${row.sDatum3}</Datum3>
                    <Datum4>${row.sDatum4}</Datum4>
                    <BestellungBillingString10>${row.BestellungBillingString10}</BestellungBillingString10>
                    <BestellungBillingString11>${row.BestellungBillingString11}</BestellungBillingString11>
                    <BestellungBillingString12>${row.BestellungBillingString12}</BestellungBillingString12>
                    <BestellungBillingString13>${row.BestellungBillingString13}</BestellungBillingString13>
                    <BestellungBillingInt1>${row.BestellungBillingInt1}</BestellungBillingInt1>
                    <BestellungBillingInt2>${row.BestellungBillingInt2}</BestellungBillingInt2>
                    <BestellungBillingInt3>${row.BestellungBillingInt3}</BestellungBillingInt3>
                    <BestellungBillingInt4>${row.BestellungBillingInt4}</BestellungBillingInt4>
                    <BestellungBillingFloat1>${row.BestellungBillingFloat1}</BestellungBillingFloat1>
                    <BestellungBillingFloat2>${row.BestellungBillingFloat2}</BestellungBillingFloat2>
                    <BestellungBillingFloat3>${row.BestellungBillingFloat3}</BestellungBillingFloat3>
                    <BestellungBillingFloat4>${row.BestellungBillingFloat4}</BestellungBillingFloat4>
                    <BestellungBillingBIT1>${parseInt(row.BestellungBillingBIT1)}</BestellungBillingBIT1>
                    <BestellungBillingBIT2>${parseInt(row.BestellungBillingBIT2)}</BestellungBillingBIT2>
                    <BestellungBillingString14>${row.BestellungBillingString14}</BestellungBillingString14>
                    <BestellungBillingString15>${row.BestellungBillingString15}</BestellungBillingString15>
                    <BestellungBillingString16>${row.BestellungBillingString16}</BestellungBillingString16>
                    <BestellungBillingString17>${row.BestellungBillingString17}</BestellungBillingString17>
                    <BestellungBillingString18>${row.BestellungBillingString18}</BestellungBillingString18>
                    <BestellungBillingString19>${row.BestellungBillingString19}</BestellungBillingString19>
                    <BestellungBillingString20>${row.BestellungBillingString20}</BestellungBillingString20>
                    <BestellungBillingString21>${row.BestellungBillingString21}</BestellungBillingString21>
                    <BestellungBillingString22>${row.BestellungBillingString22}</BestellungBillingString22>
                    <BestellungBillingString23>${row.BestellungBillingString23}</BestellungBillingString23>
                    <BestellungBillingString24>${row.BestellungBillingString24}</BestellungBillingString24>
                    <BestellungBillingString25>${row.BestellungBillingString25}</BestellungBillingString25>
                    <BestellungBillingString26>${row.BestellungBillingString26}</BestellungBillingString26>
                    <BestellungBillingString27>${row.BestellungBillingString27}</BestellungBillingString27>
                    <BestellungBillingString28>${row.BestellungBillingString28}</BestellungBillingString28>
                    <BestellungBillingString29>${row.BestellungBillingString29}</BestellungBillingString29>
                    <BestellungBillingInt5>${row.BestellungBillingInt5}</BestellungBillingInt5>
                    <Status>${row.Status}</Status>
                    <BestellungBillingFloat5>${row.BestellungBillingFloat5}</BestellungBillingFloat5>
                    <BestellungBillingFloat6>${row.BestellungBillingFloat6}</BestellungBillingFloat6>
                  </Billing>`).join('')}
                ${results.Shipping.map(row => `
                  <Shipping>
                    <prIDX>${row.prIDX}</prIDX>
                    <frIDX>${row.frIDX}</frIDX>
                    <Datum1>${row.sDatum1}</Datum1>
                    <Datum2>${row.sDatum2}</Datum2>
                    <Datum3>${row.sDatum3}</Datum3>
                    <Datum4>${row.sDatum4}</Datum4>
					<BestellungShippingString10>${row.BestellungShippingString10}</BestellungShippingString10>
                    <BestellungShippingString11>${row.BestellungShippingString11}</BestellungShippingString11>
                    <BestellungShippingString12>${row.BestellungShippingString12}</BestellungShippingString12>
                    <BestellungShippingString13>${row.BestellungShippingString13}</BestellungShippingString13>
                    <BestellungShippingInt1>${row.BestellungShippingInt1}</BestellungShippingInt1>
                    <BestellungShippingInt2>${row.BestellungShippingInt2}</BestellungShippingInt2>
                    <BestellungShippingInt3>${row.BestellungShippingInt3}</BestellungShippingInt3>
                    <BestellungShippingInt4>${row.BestellungShippingInt4}</BestellungShippingInt4>
                    <BestellungShippingFloat1>${row.BestellungShippingFloat1}</BestellungShippingFloat1>
                    <BestellungShippingFloat2>${row.BestellungShippingFloat2}</BestellungShippingFloat2>
                    <BestellungShippingFloat3>${row.BestellungShippingFloat3}</BestellungShippingFloat3>
                    <BestellungShippingFloat4>${row.BestellungShippingFloat4}</BestellungShippingFloat4>
                    <BestellungShippingBIT1>${parseInt(row.BestellungShippingBIT1)}</BestellungShippingBIT1>
                    <BestellungShippingBIT2>${parseInt(row.BestellungShippingBIT2)}</BestellungShippingBIT2>
                    <BestellungShippingString14>${row.BestellungShippingString14}</BestellungShippingString14>
                    <BestellungShippingString15>${row.BestellungShippingString15}</BestellungShippingString15>
                    <BestellungShippingString16>${row.BestellungShippingString16}</BestellungShippingString16>
                    <BestellungShippingString17>${row.BestellungShippingString17}</BestellungShippingString17>
                    <BestellungShippingString18>${row.BestellungShippingString18}</BestellungShippingString18>
                    <BestellungShippingString19>${row.BestellungShippingString19}</BestellungShippingString19>
                    <BestellungShippingString20>${row.BestellungShippingString20}</BestellungShippingString20>
                    <BestellungShippingString21>${row.BestellungShippingString21}</BestellungShippingString21>
                    <BestellungShippingString22>${row.BestellungShippingString22}</BestellungShippingString22>
                    <BestellungShippingString23>${row.BestellungShippingString23}</BestellungShippingString23>
                    <BestellungShippingString24>${row.BestellungShippingString24}</BestellungShippingString24>
                    <BestellungShippingString25>${row.BestellungShippingString25}</BestellungShippingString25>
                    <BestellungShippingString26>${row.BestellungShippingString26}</BestellungShippingString26>
                    <BestellungShippingString27>${row.BestellungShippingString27}</BestellungShippingString27>
                    <BestellungShippingString28>${row.BestellungShippingString28}</BestellungShippingString28>
                    <BestellungShippingString29>${row.BestellungShippingString29}</BestellungShippingString29>
                    <BestellungShippingInt5>${row.BestellungShippingInt5}</BestellungShippingInt5>
                    <Status>${row.Status}</Status>
                    <BestellungShippingFloat5>${row.BestellungShippingFloat5}</BestellungShippingFloat5>
                    <BestellungShippingFloat6>${row.BestellungShippingFloat6}</BestellungShippingFloat6>
                  </Shipping>`).join('')}
                ${results.Artikel.map(row => `
                  <Artikel>
                    <prIDX>${row.prIDX}</prIDX>
                    <frIDX>${row.frIDX}</frIDX>
                    <Datum1>${row.sDatum1}</Datum1>
                    <Datum2>${row.sDatum2}</Datum2>
                    <Datum3>${row.sDatum3}</Datum3>
                    <Datum4>${row.sDatum4}</Datum4>
                    <BestellungArtikelString10>${row.BestellungArtikelString10}</BestellungArtikelString10>
                    <BestellungArtikelString11>${row.BestellungArtikelString11}</BestellungArtikelString11>
                    <BestellungArtikelString12>${row.BestellungArtikelString12}</BestellungArtikelString12>
                    <BestellungArtikelString13>${row.BestellungArtikelString13}</BestellungArtikelString13>
                    <BestellungArtikelInt1>${row.BestellungArtikelInt1}</BestellungArtikelInt1>
                    <BestellungArtikelInt2>${row.BestellungArtikelInt2}</BestellungArtikelInt2>
                    <BestellungArtikelInt3>${row.BestellungArtikelInt3}</BestellungArtikelInt3>
                    <BestellungArtikelInt4>${row.BestellungArtikelInt4}</BestellungArtikelInt4>
                    <BestellungArtikelFloat1>${row.BestellungArtikelFloat1}</BestellungArtikelFloat1>
                    <BestellungArtikelFloat2>${row.BestellungArtikelFloat2}</BestellungArtikelFloat2>
                    <BestellungArtikelFloat3>${row.BestellungArtikelFloat3}</BestellungArtikelFloat3>
                    <BestellungArtikelFloat4>${row.BestellungArtikelFloat4}</BestellungArtikelFloat4>
                    <BestellungArtikelBIT1>${parseInt(row.BestellungArtikelBIT1)}</BestellungArtikelBIT1>
                    <BestellungArtikelBIT2>${parseInt(row.BestellungArtikelBIT2)}</BestellungArtikelBIT2>
                    <BestellungArtikelString14>${row.BestellungArtikelString14}</BestellungArtikelString14>
                    <BestellungArtikelString15>${row.BestellungArtikelString15}</BestellungArtikelString15>
                    <BestellungArtikelString16>${row.BestellungArtikelString16}</BestellungArtikelString16>
                    <BestellungArtikelString17>${row.BestellungArtikelString17}</BestellungArtikelString17>
                    <BestellungArtikelString18>${row.BestellungArtikelString18}</BestellungArtikelString18>
                    <BestellungArtikelString19>${row.BestellungArtikelString19}</BestellungArtikelString19>
                    <BestellungArtikelString20>${row.BestellungArtikelString20}</BestellungArtikelString20>
                    <BestellungArtikelString21>${row.BestellungArtikelString21}</BestellungArtikelString21>
                    <BestellungArtikelString22>${row.BestellungArtikelString22}</BestellungArtikelString22>
                    <BestellungArtikelString23>${row.BestellungArtikelString23}</BestellungArtikelString23>
                    <BestellungArtikelString24>${row.BestellungArtikelString24}</BestellungArtikelString24>
                    <BestellungArtikelString25>${row.BestellungArtikelString25}</BestellungArtikelString25>
                    <BestellungArtikelString26>${row.BestellungArtikelString26}</BestellungArtikelString26>
                    <BestellungArtikelString27>${row.BestellungArtikelString27}</BestellungArtikelString27>
                    <BestellungArtikelString28>${row.BestellungArtikelString28}</BestellungArtikelString28>
                    <BestellungArtikelString29>${row.BestellungArtikelString29}</BestellungArtikelString29>
                    <BestellungArtikelInt5>${row.BestellungArtikelInt5}</BestellungArtikelInt5>
                    <Status>${row.Status}</Status>
                    <BestellungArtikelFloat5>${row.BestellungArtikelFloat5}</BestellungArtikelFloat5>
                    <BestellungArtikelFloat6>${row.BestellungArtikelFloat6}</BestellungArtikelFloat6>
                  </Artikel>`).join('')}
                ${results.Betrag.map(row => `
                  <Betrag>
                    <prIDX>${row.prIDX}</prIDX>
                    <frIDX>${row.frIDX}</frIDX>
                    <Datum1>${row.sDatum1}</Datum1>
                    <Datum2>${row.sDatum2}</Datum2>
                    <Datum3>${row.sDatum3}</Datum3>
                    <Datum4>${row.sDatum4}</Datum4>
                    <BestellungBetragString10>${row.BestellungBetragString10}</BestellungBetragString10>
                    <BestellungBetragString11>${row.BestellungBetragString11}</BestellungBetragString11>
                    <BestellungBetragString12>${row.BestellungBetragString12}</BestellungBetragString12>
                    <BestellungBetragString13>${row.BestellungBetragString13}</BestellungBetragString13>
                    <BestellungBetragInt1>${row.BestellungBetragInt1}</BestellungBetragInt1>
                    <BestellungBetragInt2>${row.BestellungBetragInt2}</BestellungBetragInt2>
                    <BestellungBetragInt3>${row.BestellungBetragInt3}</BestellungBetragInt3>
                    <BestellungBetragInt4>${row.BestellungBetragInt4}</BestellungBetragInt4>
                    <BestellungBetragFloat1>${row.BestellungBetragFloat1}</BestellungBetragFloat1>
                    <BestellungBetragFloat2>${row.BestellungBetragFloat2}</BestellungBetragFloat2>
                    <BestellungBetragFloat3>${row.BestellungBetragFloat3}</BestellungBetragFloat3>
                    <BestellungBetragFloat4>${row.BestellungBetragFloat4}</BestellungBetragFloat4>
                    <BestellungBetragBIT1>${parseInt(row.BestellungBetragBIT1)}</BestellungBetragBIT1>
                    <BestellungBetragBIT2>${parseInt(row.BestellungBetragBIT2)}</BestellungBetragBIT2>
                    <BestellungBetragString14>${row.BestellungBetragString14}</BestellungBetragString14>
                    <BestellungBetragString15>${row.BestellungBetragString15}</BestellungBetragString15>
                    <BestellungBetragString16>${row.BestellungBetragString16}</BestellungBetragString16>
                    <BestellungBetragString17>${row.BestellungBetragString17}</BestellungBetragString17>
                    <BestellungBetragString18>${row.BestellungBetragString18}</BestellungBetragString18>
                    <BestellungBetragString19>${row.BestellungBetragString19}</BestellungBetragString19>
                    <BestellungBetragString20>${row.BestellungBetragString20}</BestellungBetragString20>
                    <BestellungBetragString21>${row.BestellungBetragString21}</BestellungBetragString21>
                    <BestellungBetragString22>${row.BestellungBetragString22}</BestellungBetragString22>
                    <BestellungBetragString23>${row.BestellungBetragString23}</BestellungBetragString23>
                    <BestellungBetragString24>${row.BestellungBetragString24}</BestellungBetragString24>
                    <BestellungBetragString25>${row.BestellungBetragString25}</BestellungBetragString25>
                    <BestellungBetragString26>${row.BestellungBetragString26}</BestellungBetragString26>
                    <BestellungBetragString27>${row.BestellungBetragString27}</BestellungBetragString27>
                    <BestellungBetragString28>${row.BestellungBetragString28}</BestellungBetragString28>
                    <BestellungBetragString29>${row.BestellungBetragString29}</BestellungBetragString29>
                    <BestellungBetragInt5>${row.BestellungBetragInt5}</BestellungBetragInt5>
                    <Status>${row.Status}</Status>
                    <BestellungBetragFloat5>${row.BestellungBetragFloat5}</BestellungBetragFloat5>
                    <BestellungBetragFloat6>${row.BestellungBetragFloat6}</BestellungBetragFloat6>
                  </Betrag>`).join('')}
              </DATEN>`);
          });
        });
      });
    });
                   
});

app.post('/frontend_kasse_3', urlencodedParser, function (req, res, next){
  const gutscheincode = unescape(req.body.Gutscheincode) || '';
   
  const sqlQuery = `
      SELECT * FROM laaver.angebot_main 
      WHERE DATE_FORMAT(NOW(),'%Y-%m-%d') >= DATE_FORMAT(Datum3,'%Y-%m-%d') 
        AND DATE_FORMAT(NOW(),'%Y-%m-%d') <= DATE_FORMAT(Datum4,'%Y-%m-%d') 
        AND Status = 9 
        AND AngebotMainInt3 = 5 
        AND AngebotMainString20 = '${gutscheincode}'
    `;

  con.query(sqlQuery, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({
			results: results
		});
	}); 
});

app.post('/frontend_kasse_9', urlencodedParser, function (req, res, next){
  const EinkaufswagenArr = JSON.parse(req.body.EinkaufswagenArr);
  var txt = "";
  for(var i=0; i<EinkaufswagenArr.length; i++){
	  if(i>0) txt += ",";
	  txt += parseInt(EinkaufswagenArr[i].EinkaufswagenInt4);
  }
  const sqlQuery = `
					SELECT LagerInt1, COUNT(*) AS lagerCount
					FROM laaver.lager
					WHERE LagerInt1 IN (${txt}) AND Status=2
					GROUP BY LagerInt1;
					`;

  con.query(sqlQuery, (error, results) => {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
  
});

app.post('/frontend_konto_4', urlencodedParser, function (req, res, next){
  const UserID = unescape(req.body.UserID) || '';
   
  const sqlQuery = `
      SELECT *,
        CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
        CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
        CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
        CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
      FROM laaver.Kunden_Shipping AS mainTable
      WHERE frIDX = ${UserID}
    `;

  con.query(sqlQuery, (error, results) => {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

app.post('/frontend_konto_5', urlencodedParser, function (req, res, next){
  const UserID = unescape(req.body.UserID) || '';
   
  const sqlQuery = `
      SELECT *,
        CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
        CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
        CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
        CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
      FROM laaver.Kunden_Billing AS mainTable
      WHERE frIDX = ${UserID}
    `;

  con.query(sqlQuery, (error, results) => {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

app.post('/frontend_news_1', urlencodedParser, async function (req, res) {
	const sql = `
		SELECT *,
			CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
			CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
			CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
			CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
		FROM laaver.News AS mainTable ORDER BY prIDX DESC
	`;
 
	con.query(sql, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({ success: true, results });
	});
});

app.post('/frontend_news_2', urlencodedParser, async function (req, res) {
	const sql = `
		SELECT * FROM laaver.News_Bild
	`;
 
	con.query(sql, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({ success: true, results });
	});
});
 
app.post('/produkt_modal_1', urlencodedParser, function (req, res, next) {
    const userID = unescape(req.body.userID) || '';
 
    const sql = `SELECT P.prIDX, P.ProduktString11 AS Produktname, P.ProduktString14 AS Tag, P.ProduktString15 AS Katalog, 
                      PE.ProduktEinzelFloat1 AS Orginalpreis, PE.ProduktEinzelFloat2 AS Salepreis, PE.ProduktEinzelInt1 AS Discount, 
                      MIN(PB.ProduktBildString11) AS ProduktListeString1, '' AS ProduktListeString2, '' AS ProduktListeString3, '' AS ProduktListeString4, 
                      KW.prIDX AS ProduktListeInt1, KW.WunschlisteInt2 AS ProduktListeInt2, 0 AS ProduktListeInt3, 0 AS ProduktListeInt4, 
                      0 AS ProduktListeFloat1, 0 AS ProduktListeFloat2, 0 AS ProduktListeFloat3, 0 AS ProduktListeFloat4 
                      FROM laaver.Produkt AS P 
                      LEFT JOIN laaver.Produkt_Einzel AS PE ON PE.frIDX = P.prIDX 
                      LEFT JOIN laaver.Produkt_Bild AS PB ON PB.frIDX = P.prIDX AND PB.ProduktBildString10 = 'Banner' 
                      LEFT JOIN laaver.kunden_wunschliste AS KW ON KW.WunschlisteInt2 = P.prIDX 
                      WHERE P.ProduktBIT1 = 0 AND KW.WunschlisteInt1 = ${userID} GROUP BY P.prIDX 
                      ORDER BY KW.prIDX DESC LIMIT 300`;
 
    con.query(sql, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({ success: true, results });
	});
});
 
app.post('/produkt_select_1', urlencodedParser, function (req, res, next) {
	const ProduktInt1 = req.body.ProduktInt1;
    const showMenge = 12; // 控制产品数量
	const sql2 = `
		SELECT 
			P.prIDX, P.ProduktString14 AS Tag, P.ProduktString13 AS Foto, P.ProduktInt1 AS Katalog,
			ProduktString1, ProduktString2, ProduktString3, ProduktString4, ProduktString5,  
			P.ProduktFloat1 AS Orginalpreis, P.ProduktFloat3 AS Salepreis, PE.ProduktEinzelInt10 AS Discount,
			MIN(PB.ProduktBildString11) AS ProduktListeString1, '' AS ProduktListeString2, '' AS ProduktListeString3, '' AS ProduktListeString4,
			0 AS ProduktListeInt1, 0 AS ProduktListeInt2, 0 AS ProduktListeInt3, 0 AS ProduktListeInt4,
			0 AS ProduktListeFloat1, 0 AS ProduktListeFloat2, 0 AS ProduktListeFloat3, 0 AS ProduktListeFloat4,
			ProduktKatalogString1, ProduktKatalogString2, ProduktKatalogString3, ProduktKatalogString4  
		FROM 
			laaver.Produkt AS P
		LEFT JOIN 
			laaver.Produkt_Einzel AS PE ON PE.frIDX = P.prIDX
		LEFT JOIN 
			laaver.Produkt_Bild AS PB ON PB.frIDX = P.prIDX AND PB.ProduktBildString10 = 'Banner'
		LEFT JOIN 
			laaver.Produkt_Katalog AS PK ON PK.prIDX = P.ProduktInt1  
		WHERE 
			P.ProduktInt1 = ${ProduktInt1} AND P.Status = 1
		GROUP BY 
			P.prIDX
		ORDER BY 
			RAND() 
		LIMIT ${showMenge}`;
 
	con.query(sql2, (error2, results2) => {
		if (error2) {
			return next(error2);
		}
 
		if (results2.length > 0) {
			res.json({
				results: results2
			});
		} else {
			res.json(1);
		}
	});
});
 
app.post('/produkt_select_2', urlencodedParser, function (req, res, next) {
	const prIDX = req.body.prIDX;
    const UserID = req.body.UserID;
	const sqlQuery = `DELETE FROM laaver.kunden_wunschliste WHERE WunschlisteInt1=${UserID} AND WunschlisteInt2=${prIDX}`;
 
	con.query(sqlQuery, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({
			results: results
		});
	}); 
});
 
app.post('/produkt_save_1', urlencodedParser, function (req, res) {
	const UserID = parseInt(req.body.UserID);
	const Menge = parseInt(req.body.Menge);
	const data = JSON.parse(req.body.oneProdukt);
	const dataEinzel = JSON.parse(req.body.oneProduktEinzel);
	let EinkaufswagenBIT1 = 0, EinkaufswagenInt4 = 0;
	if(String(dataEinzel)!=""){
		EinkaufswagenBIT1 = 1;
		EinkaufswagenInt4 = dataEinzel.prIDX;
	}
 
	const checkSQL = `
		SELECT * 
		FROM laaver.kunden_Einkaufswagen 
		WHERE EinkaufswagenInt1 = ? AND EinkaufswagenInt2 = ?  AND EinkaufswagenInt4 = ?
	`;
 
	con.query(checkSQL, [UserID, data.prIDX, EinkaufswagenInt4], function (err, result) {
		if (err) {
			console.error(err);
			return res.status(500).json({ success: false });
		}
 
		const updateOrInsert = () => {
			if (result.length > 0) {
				// 更新数量（加上现有值）
				const updateSQL = `
					UPDATE laaver.kunden_Einkaufswagen 
					SET EinkaufswagenInt3 = ?, EinkaufswagenString10 = ?, EinkaufswagenString2 = ?, EinkaufswagenString3 = ?, EinkaufswagenString4 = ?, EinkaufswagenString5 = ? 
					WHERE prIDX = ?
				`;
				const newMenge = Menge + parseInt(result[0].EinkaufswagenInt3 || 0);
 
				con.query(updateSQL, [
					newMenge,
					escape(data.ProduktString1),
					escape(data.ProduktString2),
					escape(data.ProduktString3),
					escape(data.ProduktString4),
					escape(data.ProduktString5),
					result[0].prIDX
				], (err2) => {
					if (err2) {
						console.error(err2);
						return res.status(500).json({ success: false });
					}
					deleteFromWunschliste();
				});
			} else {
				// 插入新项
				const insertSQL = `
					INSERT INTO laaver.kunden_Einkaufswagen 
					(EinkaufswagenInt1, EinkaufswagenInt2, EinkaufswagenInt3, EinkaufswagenString10, EinkaufswagenString2, EinkaufswagenString3, EinkaufswagenString4, EinkaufswagenString5, EinkaufswagenInt4, EinkaufswagenBIT1) 
					VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
				`;
 
				con.query(insertSQL, [
					UserID,
					data.prIDX,
					Menge,
					escape(data.ProduktString1),
					escape(data.ProduktString2),
					escape(data.ProduktString3),
					escape(data.ProduktString4),
					escape(data.ProduktString5),
					EinkaufswagenInt4,
					EinkaufswagenBIT1
				], (err2) => {
					if (err2) {
						console.error(err2);
						return res.status(500).json({ success: false });
					}
					deleteFromWunschliste();
				});
			}
		};
 
		const deleteFromWunschliste = () => {
			const deleteSQL = `
				DELETE FROM laaver.kunden_wunschliste 
				WHERE WunschlisteInt1 = ? AND WunschlisteInt2 = ?
			`;
			con.query(deleteSQL, [UserID, data.frIDX], (err3) => {
				if (err3) {
					console.error(err3);
					return res.status(500).json({ success: false });
				}
				getCartCount();
			});
		};
 
		const getCartCount = () => {
			const countSQL = `
				SELECT COUNT(prIDX) AS iCount
				FROM laaver.kunden_Einkaufswagen 
				WHERE EinkaufswagenInt1 = ?
			`;
			con.query(countSQL, [UserID, data.prIDX], (err4, countResult) => {
				if (err4) {
					console.error(err4);
					return res.status(500).json({ success: false });
				}
				const mengeNow = countResult.length > 0 ? countResult[0].iCount : 0;
				res.json({ success: true, count: mengeNow });
			});
		};
 
		updateOrInsert();
	});
});
 
 
 
app.post('/konto_1', urlencodedParser, function (req, res) {
	const UserID = req.body.UserID;
	const sql = `
		SELECT *, 
			CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
			CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
			CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
			CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
		FROM laaver.Kunden AS mainTable 
		WHERE mainTable.prIDX = ${UserID}
	`;
 
	con.query(sql, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({
			results: results
		});
	}); 
});
 
app.post('/konto_2', urlencodedParser, function (req, res) {
	const email = req.body.email;
 
	const sql = `SELECT * FROM laaver.kunden_newsletter WHERE NewsletterString10 = ${email} Frontend_NewsletterBIT1 = 1`;
 
	con.query(sql, (error, results) => {
		if (error) {
			console.error(error);
			return res.json({ result: 0 });
		}
 
		if (results.length === 0) {
			res.json({ result: 1 }); // 没有记录 => 显示 block（即可订阅）
		} else {
			res.json({ result: 0 }); // 已存在记录 => 不显示
		}
	});
});
 
app.post('/konto_3', urlencodedParser, function (req, res) {
	const prIDX = req.body.prIDX;
	const UserID = req.body.UserID;
 
	const sql = `DELETE FROM laaver.kunden_wunschliste WHERE WunschlisteInt1 = ? AND WunschlisteInt2 = ?`;
 
	con.query(sql, [UserID,prIDX], function (error, results) {
		if (error) {
			console.error(error);
			return res.status(500).json({ success: false, error: 1 });
		}
		res.json({ success: true });
	});
});
 
app.post('/konto_4', urlencodedParser, function (req, res) {
	const { UserID, KundenString11, KundenString12, KundenString13, KundenString21 } = req.body;
 
	const checkSQL = `
		SELECT * 
		FROM laaver.Kunden 
		WHERE KundenString11 = ? AND prIDX != ?
	`;
 
	con.query(checkSQL, [KundenString11, UserID], function (error, results) {
		if (error) {
			console.error(error);
			return res.status(500).json({ result: -1 });
		}
 
		if (results.length > 0) {
			// 邮箱已被其他人使用
			return res.json({ result: 1 });
		}
 
		const updateSQL = `
			UPDATE laaver.Kunden 
			SET KundenString11 = ?, KundenString12 = ?, KundenString13 = ?, KundenString21 = ?
			WHERE prIDX = ?
		`;
 
		con.query(updateSQL, [KundenString11, KundenString12, KundenString13, KundenString21, UserID], function (err) {
			if (err) {
				console.error(err);
				return res.status(500).json({ result: -2 });
			}
			res.json({ result: 0 });
		});
	});
});
 
app.post('/konto_5', urlencodedParser, function (req, res) {
    const { UserID, password1, password2 } = req.body;
 
    // 查询用户旧密码哈希
    const checkSQL = `
        SELECT KundenString14 
        FROM laaver.Kunden 
        WHERE prIDX = ?
    `;
 
    con.query(checkSQL, [UserID], function (error, results) {
        if (error) {
            console.error(error);
            return res.status(500).json({ result: -1 }); // 数据库查询错误
        }
 
        if (results.length === 0) {
            return res.status(404).json({ result: -3, message: "用户不存在" });
        }
 
        const storedHash = results[0].KundenString14;
 
        // 验证原密码是否匹配
        if (!verifyPassword(password1, storedHash)) {
            return res.json({ result: 1, message: "原密码错误" });
        }
 
        // 生成新密码哈希
        const newHash = hashPassword(password2);
 
        // 更新新密码
        const updateSQL = `
            UPDATE laaver.Kunden 
            SET KundenString14 = ? 
            WHERE prIDX = ?
        `;
 
        con.query(updateSQL, [newHash, UserID], function (err) {
            if (err) {
                console.error(err);
                return res.status(500).json({ result: -2 });
            }
            res.json({ result: 0 }); // 成功
        });
    });
});
 
app.post('/konto_6', urlencodedParser, function (req, res) {
	const idx = parseInt(req.body.idx);
	const UserID = parseInt(req.body.UserID);
	const data = JSON.parse(req.body.KundenAdresseTempArr);
 
	let tableName = '';
	let columns = {};
	if (idx === 1) {
		tableName = 'Kunden_Shipping';
		columns = {
			col10: 'KundenShippingString10',
			col11: 'KundenShippingString11',
			col12: 'KundenShippingString12',
			col13: 'KundenShippingString13',
			col14: 'KundenShippingString14',
			col15: 'KundenShippingString15'
		};
	} else if (idx === 2) {
		tableName = 'Kunden_Billing';
		columns = {
			col10: 'KundenBillingString10',
			col11: 'KundenBillingString11',
			col12: 'KundenBillingString12',
			col13: 'KundenBillingString13',
			col14: 'KundenBillingString14',
			col15: 'KundenBillingString15'
		};
	} else {
		return res.status(400).json({ success: false, msg: "Invalid idx" });
	}
 
	const checkSQL = `SELECT * FROM laaver.${tableName} WHERE frIDX = ?`;
	con.query(checkSQL, [UserID], function (err, result) {
		if (err) {
			console.error(err);
			return res.status(500).json({ success: false });
		}
 
		const values = [
			data[columns.col10],
			data[columns.col11],
			data[columns.col12],
			data[columns.col13],
			data[columns.col14],
			data[columns.col15]
		];
 
		if (result.length === 0) {
			// 插入新地址
			const insertSQL = `
				INSERT INTO laaver.${tableName} 
				(frIDX, Datum2, ${columns.col10}, ${columns.col11}, ${columns.col12}, ${columns.col13}, ${columns.col14}, ${columns.col15})
				VALUES (?, NOW(), ?, ?, ?, ?, ?, ?)
			`;
			con.query(insertSQL, [UserID, ...values], function (err2) {
				if (err2) {
					console.error(err2);
					return res.status(500).json({ success: false });
				}
				res.json({ success: true });
			});
		} else {
			// 更新已有地址
			const updateSQL = `
				UPDATE laaver.${tableName} 
				SET Datum2 = NOW(), 
					${columns.col10} = ?, 
					${columns.col11} = ?, 
					${columns.col12} = ?, 
					${columns.col13} = ?, 
					${columns.col14} = ?, 
					${columns.col15} = ?
				WHERE prIDX = ?
			`;
			con.query(updateSQL, [...values, result[0].prIDX], function (err3) {
				if (err3) {
					console.error(err3);
					return res.status(500).json({ success: false });
				}
				res.json({ success: true });
			});
		}
	});
});
 
app.post('/konto_7', urlencodedParser, function (req, res) {
	const prIDX = req.body.prIDX;
 
	const sql = `
		SELECT *, 
			CASE WHEN Datum1 IS NULL THEN '' ELSE DATE_FORMAT(Datum1,'%Y-%m-%d') END AS sDatum1,
			CASE WHEN Datum2 IS NULL THEN '' ELSE DATE_FORMAT(Datum2,'%Y-%m-%d') END AS sDatum2,
			CASE WHEN Datum3 IS NULL THEN '' ELSE DATE_FORMAT(Datum3,'%Y-%m-%d') END AS sDatum3,
			CASE WHEN Datum4 IS NULL THEN '' ELSE DATE_FORMAT(Datum4,'%Y-%m-%d') END AS sDatum4
		FROM laaver.Kunden_Shipping 
		WHERE frIDX = ?
	`;
 
	con.query(sql, [prIDX], function (error, results) {
		if (error) {
			console.error(error);
			return res.status(500).json({ results: [] });
		}
 
		res.json({ results });
	});
});
 
app.post('/konto_8', urlencodedParser, function (req, res) {
	const prIDX = req.body.prIDX;
 
	const sql = `
		SELECT *, 
			CASE WHEN Datum1 IS NULL THEN '' ELSE DATE_FORMAT(Datum1,'%Y-%m-%d') END AS sDatum1,
			CASE WHEN Datum2 IS NULL THEN '' ELSE DATE_FORMAT(Datum2,'%Y-%m-%d') END AS sDatum2,
			CASE WHEN Datum3 IS NULL THEN '' ELSE DATE_FORMAT(Datum3,'%Y-%m-%d') END AS sDatum3,
			CASE WHEN Datum4 IS NULL THEN '' ELSE DATE_FORMAT(Datum4,'%Y-%m-%d') END AS sDatum4
		FROM laaver.Kunden_Billing 
		WHERE frIDX = ?
	`;
 
	con.query(sql, [prIDX], function (error, results) {
		if (error) {
			console.error(error);
			return res.status(500).json({ results: [] });
		}
 
		res.json({ results });
	});
});
 
app.post('/konto_9', urlencodedParser, function (req, res) {
	const prIDX = JSON.parse(req.body.prIDX);
 
	// 确保是数组且不为空
	if (!Array.isArray(prIDX) || prIDX.length === 0) {
		return res.json({ results: [] });
	}
 
	const sql = `
		SELECT *, DATE_FORMAT(Datum, '%d.%m %H:%i') AS sDatum 
		FROM laaver.bestellung_kommentar_extern 
		WHERE frIDX IN (?) 
		ORDER BY prIDX ASC
	`;
 
	con.query(sql, [prIDX], function (error, results) {
		if (error) {
			console.error(error);
			return res.status(500).json({ results: [] });
		}
 
		res.json({ results });
	});
});
 
app.post('/konto_10', urlencodedParser, function (req, res) {
	const prIDX = parseInt(req.body.prIDX);
	if (isNaN(prIDX)) return res.status(400).json({ error: 'Invalid prIDX' });
 
	const sql = `
		SELECT mainTable.*, 
			CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
			CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
			CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
			CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
		FROM laaver.Bestellung_Address_Billing AS mainTable
		INNER JOIN laaver.Bestellung AS B ON B.prIDX=mainTable.frIDX
		WHERE B.BestellungInt3=${prIDX};
 
		SELECT mainTable.*, 
			CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
			CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
			CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
			CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
		FROM laaver.Bestellung_Address_Shipping AS mainTable
		INNER JOIN laaver.Bestellung AS B ON B.prIDX=mainTable.frIDX
		WHERE B.BestellungInt3=${prIDX};
 
		SELECT mainTable.*, P.ProduktString13, 
		CASE WHEN PE.prIDX IS NULL THEN '' ELSE (SELECT GROUP_CONCAT(CONCAT(ProduktAttributeString1, '##', ProduktAttributeString2) SEPARATOR '#-#')
		FROM laaver.produkt_attribute 
		WHERE FIND_IN_SET(prIDX, PE.ProduktEinzelString1)) END AS Attribute, 
		CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
		CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
		CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
		CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
		FROM laaver.Bestellung_Artikel AS mainTable
		INNER JOIN laaver.Bestellung AS B ON B.prIDX=mainTable.frIDX
		INNER JOIN laaver.Produkt AS P ON mainTable.BestellungArtikelInt5=P.prIDX
		LEFT JOIN laaver.produkt_einzel AS PE ON mainTable.BestellungArtikelInt2 = PE.prIDX
		WHERE B.BestellungInt3=${prIDX};
 
		SELECT mainTable.*, 
			CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
			CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
			CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
			CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
		FROM laaver.Bestellung_Betrag AS mainTable
		INNER JOIN laaver.Bestellung AS B ON B.prIDX=mainTable.frIDX
		WHERE B.BestellungInt3=${prIDX};
	`;
 
	con.query(sql, [prIDX], function (error, results) {
		if (error) {
			console.error(error);
			return res.status(500).json({ results: [] });
		}
 
		res.json({ results });
	});
});
 
app.post('/konto_11', urlencodedParser, function (req, res) {
	const prIDX = parseInt(req.body.prIDX);
	if (isNaN(prIDX)) return res.status(400).json({ error: 'Invalid prIDX' });
 
	const sql = `
		SELECT COUNT(*) AS iCount FROM laaver.bestellung WHERE NOT Status=8 AND BestellungInt3=${prIDX};
		SELECT COUNT(*) AS iCount FROM laaver.kunden_einkaufswagen WHERE EinkaufswagenInt1=${prIDX};
		SELECT COUNT(*) AS iCount FROM laaver.kunden_wunschliste WHERE WunschlisteInt1=${prIDX};
	`;
 
	con.query(sql, function (error, results) {
		if (error) {
			console.error(error);
			return res.status(500).json({ results: [] });
		}
 
		res.json({ results });
	});
});
 
app.post('/konto_12', urlencodedParser, function (req, res) {
	const prIDX = parseInt(req.body.prIDX);
	if (isNaN(prIDX)) return res.status(400).json({ error: 'Invalid prIDX' });
 
	const sql = `
		SELECT DISTINCT mainTable.*,
			CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
			CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
			CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
			CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
		FROM laaver.Bestellung AS mainTable
		WHERE BestellungInt3 = ${prIDX}
		ORDER BY mainTable.prIDX DESC;
	`;
 
	con.query(sql, [prIDX], function (error, results) {
		if (error) {
			console.error(error);
			return res.status(500).json({ results: [] });
		}
 
		res.json({ results });
	});
});
 
app.post('/konto_13', urlencodedParser, function (req, res) {
	const prIDX = parseInt(req.body.prIDX);
	const bemerkung = req.body.Bemerkung || '';
 
	if (isNaN(prIDX) || bemerkung === '') {
		return res.status(400).json({ error: 'Invalid input' });
	}
 
	const sql = `
		INSERT INTO laaver.bestellung_kommentar_extern (frIDX, Bemerkung)
		VALUES (${prIDX}, '${escape(bemerkung)}');
	`;
 
	con.query(sql, [prIDX], function (error, results) {
		if (error) {
			console.error(error);
			return res.status(500).json({ results: [] });
		}
 
		res.json({ results });
	});
});
 
app.post('/konto_wunschliste_1', urlencodedParser, function (req, res, next) {
	const UserID = parseInt(req.body.UserID);
	const sqlQuery = `
			SELECT P.prIDX, P.ProduktString11 AS Produktname, P.ProduktString14 AS Tag, P.ProduktString15 AS Katalog, P.ProduktString13, P.ProduktString1, P.ProduktString2, P.ProduktString3, P.ProduktString4, P.ProduktString5, 
				   P.ProduktFloat1 AS Orginalpreis, P.ProduktFloat3 AS Salepreis, PE.ProduktEinzelInt1 AS Discount,
				   MIN(PB.ProduktBildString11) AS ProduktListeString1, '' AS ProduktListeString2, '' AS ProduktListeString3, '' AS ProduktListeString4,
				   0 AS ProduktListeInt1, P.prIDX AS ProduktListeInt2, 0 AS ProduktListeInt3, 0 AS ProduktListeInt4,
				   0 AS ProduktListeFloat1, 0 AS ProduktListeFloat2, 0 AS ProduktListeFloat3, 0 AS ProduktListeFloat4
			FROM laaver.Produkt AS P
			INNER JOIN laaver.Kunden_Wunschliste AS PW ON PW.WunschlisteInt2 = P.prIDX
			LEFT JOIN laaver.Produkt_Einzel AS PE ON PE.frIDX = P.prIDX
			LEFT JOIN laaver.Produkt_Bild AS PB ON PB.frIDX = P.prIDX AND PB.ProduktBildString10 = 'Banner'
			WHERE P.ProduktBIT1 = 0 AND PW.WunschlisteInt1 = ${UserID}
			GROUP BY P.prIDX
			ORDER BY P.prIDX DESC
			LIMIT 300;
		`;
 
	con.query(sqlQuery, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		res.json({
			results: results
		});
	}); 
});
 
 
app.post('/frontend_register_1', urlencodedParser, async (req, res) => {
  const username = String(req.body.username);
  const email  = String(req.body.email);
  const sqlQuery1 = "SELECT prIDX FROM laaver.Kunden WHERE KundenString10 = '"+username+"'";
  const sqlQuery2 = "SELECT prIDX FROM laaver.Kunden WHERE KundenString11 = '"+email+"'";
 
  try {
	con.query(sqlQuery1, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}
		if(results.length>0){
			res.send("1"); 
		}else{
			con.query(sqlQuery2, (error, results) => {
				if (error) {
					return res.json({ success: false, error: 1 });
				}
				if(results.length>0){
					res.send("2"); 
				}else{
					res.send("0"); 
 
				}
			}); 
 
		}
	});
  } catch (err) {
    console.error("Error checking username/email:", err);
    res.status(500).send("3"); // 错误状态码
  }
});
 
app.post('/frontend_register_2', urlencodedParser, (req, res) => {
	const { username, email, password, EmailCode, firmaname } = req.body;
 
	// 加密处理
	const hashedPassword = hashPassword(password);
	
	const vertreterIDX = parseInt(req.body.vertreterIDX, 10) || 0;

	// 基础字段
	let fields = [
	  'KundenString10',
	  'KundenString11',
	  'KundenString14',
	  'KundenString15',
	  'KundenString21'
	];

	let values = [
	  con.escape(username),
	  con.escape(email),
	  con.escape(hashedPassword),
	  con.escape(EmailCode),
	  con.escape(firmaname)
	];

	// 如果 vertreterIDX != 0，才加入
	if (vertreterIDX !== 0) {
	  fields.push('KundenInt5');
	  values.push(con.escape(vertreterIDX));
	}

	const sqlInsert = `
	  INSERT INTO laaver.Kunden
	  (${fields.join(', ')})
	  VALUES (${values.join(', ')})
	`;

 
	con.query(sqlInsert, (err, result) => {
		if (err) {
			console.error("Insert error:", err);
			return res.status(500).send("0");
		}
 
		// 获取刚插入的主键 ID
		const sqlLast = "SELECT prIDX FROM laaver.Kunden ORDER BY prIDX DESC LIMIT 1";
		con.query(sqlLast, (err2, result2) => {
			if (err2 || result2.length === 0) {
				console.error("Select last inserted ID failed:", err2);
				return res.status(500).send("0");
			}
 
			res.send(result2[0].prIDX.toString()); // 返回 prIDX
		});
	});
});
 
app.post('/frontend_register_3', urlencodedParser, (req, res) => {
	try {
		const UserID = parseInt(req.body.UserID);
		const WunschlisteArr = JSON.parse(req.body.VorlaufigWunschlisteArr || "[]");
		const KaufwagenArr = JSON.parse(req.body.VorlaufigKaufwagenArr || "[]");
 
		// 插入愿望清单
		for (let i = 0; i < WunschlisteArr.length; i++) {
			const produktID = parseInt(WunschlisteArr[i]);
			const sql = "INSERT INTO laaver.kunden_wunschliste (WunschlisteInt1, WunschlisteInt2) VALUES (?, ?)";
			con.query(sql, [UserID, produktID], (err) => {
				if (err) console.error("Wunschliste insert error:", err);
			});
		}
 
		// 插入购物车
		for (let i = 0; i < KaufwagenArr.length; i++) {
			const [ProduktID, , Menge, UUID] = KaufwagenArr[i]; // [ProduktID, ? , Menge, UUID]
			const sql = `
				INSERT INTO laaver.kunden_einkaufswagen 
				(EinkaufswagenString10, EinkaufswagenInt1, EinkaufswagenInt2, EinkaufswagenInt3) 
				VALUES (?, ?, ?, ?)`;
			con.query(sql, [UUID, UserID, ProduktID, Menge], (err) => {
				if (err) console.error("Kaufwagen insert error:", err);
			});
		}
 
		res.send("1"); // 插入完成后立即返回
 
	} catch (err) {
		console.error("Error in /frontend_register_3:", err);
		res.status(500).send("0");
	}
});

app.post('/frontend_register_4', urlencodedParser, async (req, res) => {
  const vertreter = String(req.body.vertreter);
  const sqlQuery = "SELECT prIDX FROM laaver.vertreter WHERE VertreterString25 = '"+vertreter+"' AND Status=1";
 
  try {
	con.query(sqlQuery, (error, results) => {
		if (error) {
			return res.json({ success: false, error: 1 });
		}

		if(results.length>0){
			res.send(String(results[0].prIDX)); 
		}else{			
			res.send("0"); 
		}
	});
  } catch (err) {
    res.status(500).send("3"); // 错误状态码
  }
});
 
app.post('/emailConfirmLink_1', urlencodedParser, (req, res) => {
	const EmailCode = req.body.EmailCode;
 
	const sqlSelect = "SELECT prIDX FROM laaver.kunden WHERE KundenString15 = ?";
	con.query(sqlSelect, [EmailCode], (err, result) => {
		if (err) {
			console.error("EmailCode SELECT Fehler:", err);
			return res.status(500).send("0");
		}
 
		if (result.length > 0) {
			const prIDX = result[0].prIDX;
			const sqlUpdate = "UPDATE laaver.kunden SET KundenBIT1 = 1, KundenString15 = '' WHERE prIDX = ?";
			con.query(sqlUpdate, [prIDX], (err2) => {
				if (err2) {
					console.error("EmailCode UPDATE Fehler:", err2);
					return res.status(500).send("0");
				}
				res.send("1"); // 成功
			});
		} else {
			res.send("0"); // 没有匹配的记录
		}
	});
});
 
app.post('/frontend_login_1', urlencodedParser, (req, res) => {
	const { username, password } = req.body;
 
	// 查询对应的用户，获取加密后的密码
	const sql = `
		SELECT * FROM laaver.Kunden 
		WHERE KundenString10 = ? OR KundenString11 = ?
	`;
 
	con.query(sql, [username, username], (err, result) => {
		if (err) {
			console.error("Login error:", err);
			return res.status(500).send("1"); // 系统错误，返回失败
		}
 
		if (result.length === 0) {
			return res.send("1"); // 用户不存在
		}
 
		const user = result[0];
		const storedHash = user.KundenString14;
 
		// 使用 verifyPassword 校验输入密码是否匹配
		if (!verifyPassword(password, storedHash)) {
			return res.send("2"); // 密码错误
		}
 
		// 登录成功，返回用户信息
		res.send(`${user.prIDX}##${user.KundenString10}##${user.KundenString11}##${user.KundenString12}##${user.KundenString13}`);
	});
});
 
 
app.post('/frontend_login_2', urlencodedParser, (req, res) => {
	let user;
	try {
		user = JSON.parse(req.body.UserInfoObj || "{}");
	} catch (e) {
		return res.status(400).send("Invalid JSON");
	}
 
	const { email, kid, given_name, family_name } = user;
 
	if (!email || !kid) {
		return res.status(400).send("Missing fields");
	}
 
	const sqlSelect = "SELECT * FROM laaver.Kunden WHERE KundenString11 = ?";
	con.query(sqlSelect, [email], (err, result) => {
		if (err) {
			console.error("Select error:", err);
			return res.status(500).send("0");
		}
 
		if (result.length > 0) {
			// 更新已有用户
			const prIDX = result[0].prIDX;
			const sqlUpdate = `
				UPDATE laaver.Kunden 
				SET KundenString16 = ?, KundenString12 = ?, KundenString13 = ? 
				WHERE prIDX = ?
			`;
			con.query(sqlUpdate, [kid, given_name, family_name, prIDX], (err2) => {
				if (err2) {
					console.error("Update error:", err2);
					return res.status(500).send("0");
				}
 
				const sqlReload = "SELECT * FROM laaver.Kunden WHERE prIDX = ?";
				con.query(sqlReload, [prIDX], (err3, rows) => {
					if (err3 || rows.length === 0) return res.status(500).send("0");
					const row = rows[0];
					res.send(`${row.prIDX}##${row.KundenString10}##${row.KundenString11}##${row.KundenString12}##${row.KundenString13}`);
				});
			});
		} else {
			// 插入新用户
			const sqlInsert = `
				INSERT INTO laaver.Kunden 
				(KundenString10, KundenString11, KundenString12, KundenString13, KundenString16)
				VALUES (?, ?, ?, ?, ?)
			`;
			con.query(sqlInsert, [email, email, given_name, family_name, kid], (errInsert) => {
				if (errInsert) {
					console.error("Insert error:", errInsert);
					return res.status(500).send("0");
				}
 
				const sqlLast = "SELECT * FROM laaver.Kunden ORDER BY prIDX DESC LIMIT 1";
				con.query(sqlLast, (errLast, rowsLast) => {
					if (errLast || rowsLast.length === 0) return res.status(500).send("0");
					const row = rowsLast[0];
					res.send(`${row.prIDX}##${row.KundenString10}##${row.KundenString11}##${row.KundenString12}##${row.KundenString13}`);
				});
			});
		}
	});
});
 
app.post('/frontend_login_3', urlencodedParser, (req, res) => {
	const { surname, givenname, mail, sid } = req.body;
 
	const sqlCheck = "SELECT * FROM laaver.Kunden WHERE KundenString11 = ?";
	con.query(sqlCheck, [mail], (err, result) => {
		if (err) {
			console.error("Login check error:", err);
			return res.status(500).send("0");
		}
 
		if (result.length > 0) {
			const prIDX = result[0].prIDX;
			const sqlUpdate = `
				UPDATE laaver.Kunden 
				SET KundenString18 = ?, KundenString12 = ?, KundenString13 = ? 
				WHERE prIDX = ?
			`;
			con.query(sqlUpdate, [sid, givenname, surname, prIDX], (err2) => {
				if (err2) {
					console.error("Update error:", err2);
					return res.status(500).send("0");
				}
 
				const sqlReload = "SELECT * FROM laaver.Kunden WHERE prIDX = ?";
				con.query(sqlReload, [prIDX], (err3, rows) => {
					if (err3 || rows.length === 0) return res.status(500).send("0");
					const row = rows[0];
					res.send(`${row.prIDX}##${row.KundenString10}##${row.KundenString11}##${row.KundenString12}##${row.KundenString13}`);
				});
			});
		} else {
			const sqlInsert = `
				INSERT INTO laaver.Kunden 
				(KundenString10, KundenString11, KundenString12, KundenString13, KundenString18) 
				VALUES (?, ?, ?, ?, ?)
			`;
 
			con.query(sqlInsert, [mail, mail, givenname, surname, sid], (errInsert) => {
				if (errInsert) {
					console.error("Insert error:", errInsert);
					return res.status(500).send("0");
				}
 
				const sqlLast = "SELECT * FROM laaver.Kunden ORDER BY prIDX DESC LIMIT 1";
				con.query(sqlLast, (errLast, rowsLast) => {
					if (errLast || rowsLast.length === 0) return res.status(500).send("0");
					const row = rowsLast[0];
					res.send(`${row.prIDX}##${row.KundenString10}##${row.KundenString11}##${row.KundenString12}##${row.KundenString13}`);
				});
			});
		}
	});
});
 
app.post('/frontend_login_4', urlencodedParser, (req, res) => {
	const { surname, givenname, mail, sid } = req.body;
 
	const sqlCheck = "SELECT * FROM laaver.Kunden WHERE KundenString11 = ?";
	con.query(sqlCheck, [mail], (err, result) => {
		if (err) {
			console.error("Login check error:", err);
			return res.status(500).send("0");
		}
 
		if (result.length > 0) {
			const prIDX = result[0].prIDX;
			const sqlUpdate = `
				UPDATE laaver.Kunden 
				SET KundenString19 = ?, KundenString12 = ?, KundenString13 = ? 
				WHERE prIDX = ?
			`;
			con.query(sqlUpdate, [sid, givenname, surname, prIDX], (err2) => {
				if (err2) {
					console.error("Update error:", err2);
					return res.status(500).send("0");
				}
 
				const sqlReload = "SELECT * FROM laaver.Kunden WHERE prIDX = ?";
				con.query(sqlReload, [prIDX], (err3, rows) => {
					if (err3 || rows.length === 0) return res.status(500).send("0");
					const row = rows[0];
					res.send(`${row.prIDX}##${row.KundenString10}##${row.KundenString11}##${row.KundenString12}##${row.KundenString13}`);
				});
			});
		} else {
			const sqlInsert = `
				INSERT INTO laaver.Kunden 
				(KundenString10, KundenString11, KundenString12, KundenString13, KundenString19) 
				VALUES (?, ?, ?, ?, ?)
			`;
			con.query(sqlInsert, [mail, mail, givenname, surname, sid], (errInsert) => {
				if (errInsert) {
					console.error("Insert error:", errInsert);
					return res.status(500).send("0");
				}
 
				const sqlLast = "SELECT * FROM laaver.Kunden ORDER BY prIDX DESC LIMIT 1";
				con.query(sqlLast, (errLast, rowsLast) => {
					if (errLast || rowsLast.length === 0) return res.status(500).send("0");
					const row = rowsLast[0];
					res.send(`${row.prIDX}##${row.KundenString10}##${row.KundenString11}##${row.KundenString12}##${row.KundenString13}`);
				});
			});
		}
	});
});
 
app.post('/frontend_login_5', urlencodedParser, (req, res) => {
	try {
		const UserID = parseInt(req.body.UserID);
		const WunschlisteArr = JSON.parse(req.body.VorlaufigWunschlisteArr || "[]");
		const KaufwagenArr = JSON.parse(req.body.VorlaufigKaufwagenArr || "[]");
 
		// 插入愿望清单
		for (let i = 0; i < WunschlisteArr.length; i++) {
			const ProduktID = parseInt(WunschlisteArr[i]);
			const sql = "INSERT INTO laaver.kunden_wunschliste (WunschlisteInt1, WunschlisteInt2) VALUES (?, ?)";
			con.query(sql, [UserID, ProduktID], (err) => {
				if (err) console.error("Wunschliste insert error:", err);
			});
		}
 
		// 插入购物车
		for (let i = 0; i < KaufwagenArr.length; i++) {
			const sql = `
				INSERT INTO laaver.kunden_einkaufswagen 
				(EinkaufswagenString2, EinkaufswagenString3, EinkaufswagenString4, EinkaufswagenString5, EinkaufswagenInt1, EinkaufswagenInt2, EinkaufswagenInt3, EinkaufswagenInt4, EinkaufswagenBIT1)
				VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
			con.query(sql, [escape(KaufwagenArr[i].ProduktString2), escape(KaufwagenArr[i].ProduktString3), escape(KaufwagenArr[i].ProduktString4), escape(KaufwagenArr[i].ProduktString5), 
							UserID, KaufwagenArr[i].prIDX, KaufwagenArr[i].Menge, KaufwagenArr[i].EinzelIdx, (KaufwagenArr[i].EinzelIdx == 0 ? Buffer.from([0]) : Buffer.from([1]))], (err) => {
				if (err) console.error("Kaufwagen insert error:", err);
			});
		}
 
		res.send("1"); // 成功响应
 
	} catch (err) {
		console.error("Error in /frontend_login_5:", err);
		res.status(500).send("0");
	}
});

app.post('/frontend_passwort_forgot_1', urlencodedParser, (req, res) => {
	const { email, EmailCode } = req.body;
 
	const sqlCheck = "SELECT * FROM laaver.Kunden WHERE KundenString11 = ?";
	con.query(sqlCheck, [email], (err, result) => {
		if (err) {
			console.error("Login check error:", err);
			return res.status(500).send("0");
		}
 
		if (result.length > 0) {
			const prIDX = result[0].prIDX;
			const sqlUpdate = `UPDATE laaver.Kunden SET KundenString15 = ? WHERE prIDX = ?`;
			con.query(sqlUpdate, [EmailCode, prIDX], (err2) => {
				if (err2) {
					console.error("Update error:", err2);
					return res.status(500).send("0");
				}
 
				res.end();
			});
		}else {
			res.send(1);
		}
	});
});

app.post('/frontend_passwort_forgot_2', urlencodedParser, (req, res) => {
	const { password, EmailCode } = req.body;
 
	const sqlCheck = "SELECT * FROM laaver.Kunden WHERE KundenString15 = ? AND NOT KundenString15='' ";
	con.query(sqlCheck, [EmailCode], (err, result) => {
		if (err) {
			console.error("Login check error:", err);
			return res.status(500).send("0");
		}
 
		if (result.length > 0) {
			const prIDX = result[0].prIDX;
			const sqlUpdate = `UPDATE laaver.Kunden SET KundenString14 = ?, KundenString15='' WHERE prIDX = ?`;
			con.query(sqlUpdate, [hashPassword(password), prIDX], (err2) => {
				if (err2) {
					console.error("Update error:", err2);
					return res.status(500).send("0");
				}
 
				res.end();
			});
		}else {
			res.send(1);
		}
	});
});
 
app.post('/frontend_header_footer_5', urlencodedParser, function (req, res) {
	const UserID = parseInt(req.body.UserID);
 
	const sql = `
		SELECT COUNT(*) AS iCount 
		FROM laaver.kunden_Einkaufswagen AS mainTable
		INNER JOIN laaver.produkt AS P ON P.prIDX = mainTable.EinkaufswagenInt2
		WHERE P.ProduktBIT1 = 0 AND mainTable.EinkaufswagenInt1 = ?
	`;
 
	con.query(sql, [UserID], function (err, results) {
		if (err) {
			console.error(err);
			return res.status(500).json({ count: 0 });
		}
		res.json({ count: results[0].iCount });
	});
});
 
 
app.post('/shop_select_1', urlencodedParser, function (req, res, next){
  const SQL_TXT = unescape(req.body.SQL_TXT) || '';
  const currentPage = parseInt(req.body.currentPage) || 1;
  const itemsPerPage = parseInt(req.body.itemsPerPage) || 24; // 假设分页为每次12个
  const offset = (currentPage - 1) * itemsPerPage;
 
  const sqlQuery = `SELECT 
						P.prIDX, P.Datum1, 
						P.ProduktString1, P.ProduktString2, P.ProduktString3, P.ProduktString4, P.ProduktString5, P.ProduktString6, P.ProduktString7, P.ProduktString8, P.ProduktString9, P.ProduktString10, 
						P.ProduktString11, P.ProduktString12, P.ProduktString13, P.ProduktString14, P.ProduktString15, 
						PE.ProduktEinzelFloat1 AS Orginalpreis, 
						PE.ProduktEinzelFloat3 AS Salepreis,
						MIN(PB.ProduktBildString11) AS ProduktListeString1, 
						'' AS ProduktListeString2, 
						'' AS ProduktListeString3, 
						'' AS ProduktListeString4, 
						ProduktInt1 AS ProduktListeInt1, 
						0 AS ProduktListeInt2, 
						0 AS ProduktListeInt3, 
						0 AS ProduktListeInt4, 
						0 AS ProduktListeFloat1, 
						0 AS ProduktListeFloat2, 
						0 AS ProduktListeFloat3, 
						0 AS ProduktListeFloat4 
					FROM 
						laaver.Produkt AS P
					LEFT JOIN 
						laaver.Produkt_Katalog AS PK
						ON P.ProduktInt1 = PK.prIDX
					LEFT JOIN 
						laaver.Produkt_Einzel AS PE 
						ON PE.frIDX = P.prIDX
					LEFT JOIN 
						laaver.Produkt_Bild AS PB 
						ON PB.frIDX = P.prIDX AND PB.ProduktBildString10 = 'Banner' 
					WHERE 
						P.ProduktBIT1 = 0 ${SQL_TXT}
					GROUP BY 
						P.prIDX 
					ORDER BY 
						P.ProduktInt1, P.ProduktString1 
					LIMIT 
						${itemsPerPage} OFFSET ${offset};`;
 
  con.query(sqlQuery, (error, results) => {
    if (error) {
      return next(error);
    }
 
    res.json(results);
  });
});
 
app.post('/einkaufswagen_1', urlencodedParser, function (req, res) {
	const UserID = req.body.UserID;
 
	const sql = `
		SELECT *, 
			CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
			CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
			CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
			CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
		FROM laaver.Kunden AS mainTable
		WHERE mainTable.prIDX = ?
	`;
 
	con.query(sql, [UserID], function (err, results) {
		if (err) {
			console.error(err);
			return res.status(500).json({ results: [] });
		}
		res.json({ results });
	});
});
 
app.post('/einkaufswagen_2', urlencodedParser, function (req, res) {
	const UserID = parseInt(req.body.UserID);
 
	const sql = `
		SELECT mainTable.*, mainTable.EinkaufswagenInt3 AS Menge 
		FROM laaver.Kunden_Einkaufswagen AS mainTable
		INNER JOIN laaver.produkt AS P ON P.prIDX = mainTable.EinkaufswagenInt2
		WHERE P.ProduktBIT1 = 0 AND mainTable.EinkaufswagenInt1 = ?
	`;
 
	con.query(sql, [UserID], function (err, results) {
		if (err) {
			console.error(err);
			return res.status(500).json({ results: [] });
		}
		res.json({ results });
	});
});
 
app.post('/einkaufswagen_3', urlencodedParser, function (req, res) {
	const EinkaufswagenArr = JSON.parse(req.body.EinkaufswagenArr);
	let sqlList = [];
 
	for (let i = 0; i < EinkaufswagenArr.length; i++) {
		const item = EinkaufswagenArr[i];
 
		if (item.EinkaufswagenInt4 == 0) {
			sqlList.push(`
				SELECT P.*, P.ProduktFloat1 AS Preis, P.ProduktFloat3 AS Salepreis, '' AS Attribute, 0 AS EinzelIdx 
				FROM laaver.produkt AS P
				WHERE P.prIDX = ${item.EinkaufswagenInt2}
			`);
		} else {
			sqlList.push(`
				SELECT P.*, PE.ProduktEinzelFloat1 AS Preis, PE.ProduktEinzelFloat2 AS Salepreis,
					(SELECT GROUP_CONCAT(CONCAT(ProduktAttributeString1, '##', ProduktAttributeString2) SEPARATOR '#-#')
					 FROM laaver.produkt_attribute 
					 WHERE FIND_IN_SET(prIDX, PE.ProduktEinzelString1)) AS Attribute, 
					 PE.prIDX AS EinzelIdx 
				FROM laaver.produkt AS P
				INNER JOIN laaver.produkt_einzel AS PE ON PE.frIDX = P.prIDX
				WHERE PE.prIDX = ${item.EinkaufswagenInt4}
			`);
		}
	}
 
	const finalSQL = sqlList.join(" UNION ALL ");
 
	con.query(finalSQL, function (err, results) {
		if (err) {
			console.error(err);
			return res.status(500).json({ results: [] });
		}
		res.json({ results });
	});
});
 
 
app.post('/einkaufswagen_4', urlencodedParser, function (req, res) {
	const UserID = parseInt(req.body.UserID);
	const prIDX = parseInt(req.body.prIDX);
 
	if (isNaN(prIDX)) {
		return res.status(400).json({ success: false, message: "Invalid prIDX" });
	}
 
	const sql = `DELETE FROM laaver.kunden_Einkaufswagen WHERE EinkaufswagenInt1 = ? AND EinkaufswagenInt2 = ?`;
 
	con.query(sql, [UserID, prIDX], function (err, result) {
		if (err) {
			console.error(err);
			return res.status(500).json({ success: false });
		}
		res.json({ success: true });
	});
});
 
app.post('/einkaufswagen_5', urlencodedParser, function (req, res) {
	const UserID = parseInt(req.body.UserID);
	const produktIDX = parseInt(req.body.prIDX); // 即 EinkaufswagenInt2
 
	// 删除购物车项
	const deleteSQL = `
		DELETE FROM laaver.kunden_Einkaufswagen 
		WHERE EinkaufswagenInt1 = ? AND EinkaufswagenInt2 = ?
	`;
 
	con.query(deleteSQL, [UserID, produktIDX], function (err) {
		if (err) {
			console.error(err);
			return res.status(500).json({ success: false });
		}
 
		const insertSQL = `
			INSERT INTO laaver.kunden_wunschliste (WunschlisteInt1, WunschlisteInt2) 
			VALUES (?, ?)
		`;
 
		con.query(insertSQL, [UserID, produktIDX], function (err2) {
			if (err2) {
				console.error(err2);
				return res.status(500).json({ success: false });
			}
			res.json({ success: true });
		});
	});
});
 
app.post('/einkaufswagen_6', urlencodedParser, function (req, res) {
	const UserID = parseInt(req.body.UserID);
	let EinkaufswagenArr;
 
	try {
		EinkaufswagenArr = JSON.parse(req.body.EinkaufswagenArr);
	} catch (err) {
		console.error("JSON解析错误:", err);
		return res.status(400).json({ success: false, message: "Ungültige Daten" });
	}
 
	if (!Array.isArray(EinkaufswagenArr)) {
		return res.status(400).json({ success: false, message: "EinkaufswagenArr ist kein Array" });
	}
 
	// 多次更新，用 Promise 包装全部更新操作
	const updatePromises = EinkaufswagenArr.map(item => {
		const Menge = parseInt(item.Menge) || 0;
		const prIDX = parseInt(item.prIDX);
 
		const sql = `
			UPDATE laaver.kunden_Einkaufswagen
			SET EinkaufswagenInt3 = ? WHERE EinkaufswagenInt2 = ? AND EinkaufswagenInt1 = ?
		`;
		const logSQL = mysql.format(sql, [Menge, prIDX, UserID]); // 关键：构建实际 SQL 日志
 
	console.log("[SQL]", logSQL); // 打印带参数的完整 SQL
		return new Promise((resolve, reject) => {
			con.query(sql, [Menge, prIDX, UserID], (err, result) => {
				if (err) {
					console.error("Update-Fehler:", err);
					reject(err);
				} else {
					resolve(result);
				}
			});
		});
	});
 
	// 执行所有更新
	Promise.all(updatePromises)
		.then(() => {
			res.json({ success: true });
		})
		.catch(err => {
			res.status(500).json({ success: false, message: "Fehler beim Speichern" });
		});
});
 
 
app.post('/wunschliste_1', urlencodedParser, function (req, res) {
	const produktIDs = JSON.parse(req.body.produktPrIDXArr);
 
	// 确保是数组且不为空
	if (!Array.isArray(produktIDs) || produktIDs.length === 0) {
		return res.json({ results: [] });
	}
 
	const validIDs = produktIDs.map(id => parseInt(id)).filter(id => !isNaN(id));
 
	const sql = `
		SELECT * 
		FROM laaver.produkt 
		WHERE ProduktBIT1 = 0 AND prIDX IN (?)
	`;
 
	con.query(sql, [validIDs], function (err, results) {
		if (err) {
			console.error(err);
			return res.status(500).json({ results: [] });
		}
		res.json({ results });
	});
});
 
app.post('/kasse_1', urlencodedParser, function (req, res) {
	const UserID = req.body.UserID;
 
	const sql = `
		SELECT *, 
			CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1,'%Y-%m-%d') END AS sDatum1,
			CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2,'%Y-%m-%d') END AS sDatum2,
			CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3,'%Y-%m-%d') END AS sDatum3,
			CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4,'%Y-%m-%d') END AS sDatum4
		FROM laaver.Kunden AS mainTable
		WHERE mainTable.prIDX = ?
	`;
 
	con.query(sql, [UserID], function (err, results) {
		if (err) {
			console.error(err);
			return res.status(500).json({ results: [] });
		}
		res.json({ results });
	});
});
 
app.post('/kasse_2', urlencodedParser, function (req, res) {
    const UserID = parseInt(req.body.UserID);
 
    const result = {
        shipping: [],
        billing: []
    };
 
    const sqlShipping = `
        SELECT mainTable.*, 
            CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1, '%Y-%m-%d') END AS sDatum1,
            CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2, '%Y-%m-%d') END AS sDatum2,
            CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3, '%Y-%m-%d') END AS sDatum3,
            CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4, '%Y-%m-%d') END AS sDatum4
        FROM laaver.Kunden_Shipping AS mainTable
        WHERE frIDX = ?
    `;
 
    const sqlBilling = `
        SELECT mainTable.*, 
            CASE WHEN mainTable.Datum1 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum1, '%Y-%m-%d') END AS sDatum1,
            CASE WHEN mainTable.Datum2 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum2, '%Y-%m-%d') END AS sDatum2,
            CASE WHEN mainTable.Datum3 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum3, '%Y-%m-%d') END AS sDatum3,
            CASE WHEN mainTable.Datum4 IS NULL THEN '' ELSE DATE_FORMAT(mainTable.Datum4, '%Y-%m-%d') END AS sDatum4
        FROM laaver.Kunden_Billing AS mainTable
        WHERE frIDX = ?
    `;
 
    con.query(sqlShipping, [UserID], function (err2, rows2) {
        if (err2) return res.status(500).json({ error: "shipping", detail: err2 });
 
        result.shipping = rows2;
 
        con.query(sqlBilling, [UserID], function (err3, rows3) {
            if (err3) return res.status(500).json({ error: "billing", detail: err3 });
 
            result.billing = rows3;
            res.json(result);
        });
    });
});
 
 
app.post('/kasse_3', (req, res, next) => {
     const sqlQuery = `SELECT * FROM laaver.global_countrycode`;
 
     con.query(sqlQuery, (error, results) => {
        if (error) {
            return next(error);
        }
 
        if (results.length > 0) {
            res.json(results);
        } else {
            res.json(1);
        }
    });
});
 
app.post('/kasse_5', urlencodedParser, function (req, res) {
  const EinkaufswagenArr = JSON.parse(req.body.EinkaufswagenArr || "[]");
  const oneKundenBilling = JSON.parse(req.body.oneKundenBilling || "{}");
  const oneKundenShipping = JSON.parse(req.body.oneKundenShipping || "{}");
  const PaymentBetragObj = JSON.parse(req.body.PaymentBetragObj || "{}");
  const UserID = parseInt(req.body.UserID);
  const Email = req.body.Email;
  const BestellungString30 = req.body.BestellungString30;
  const RabattText = req.body.RabatteBeschreibung || "";
  const BetragType = PaymentBetragObj.BestellungBetragString10 || "";
  const globalSumme = parseFloat(req.body.globalSumme);
  const globalCoupon = parseFloat(req.body.globalCoupon);
  const globalRabatte = parseFloat(req.body.globalRabatte);
  const BetragEnd = parseFloat((globalSumme - globalCoupon - globalRabatte).toFixed(2));
  let BestellungInt1 = 1;
 
  if (BetragType === "Rechnung") BestellungInt1 = 1;
  else if (BetragType === "Paypal") BestellungInt1 = 2;
  else if (BetragType === "Stripe") BestellungInt1 = 3;
 
  const insertOrderSQL = `
    INSERT INTO laaver.bestellung 
    (BestellungInt3, BestellungFloat1, BestellungFloat2, BestellungFloat4, BestellungFloat5, BestellungString22, BestellungString25, BestellungString30, BestellungInt1)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
 
  con.query(insertOrderSQL, [UserID, globalCoupon, globalRabatte, globalSumme, BetragEnd, Email, RabattText, BestellungString30, BestellungInt1], function (err) {
    if (err) return res.status(500).json({ error: "Insert order failed", detail: err });
 
    con.query(`SELECT LAST_INSERT_ID() AS lastID`, function (err2, result2) {
      if (err2) return res.status(500).json({ error: "Fetch order ID failed", detail: err2 });
 
      const lastID = result2[0].lastID;
 
      // 插入送货地址
      const insertShippingSQL = `
        INSERT INTO laaver.bestellung_address_shipping 
        (frIDX, BestellungShippingString11, BestellungShippingString13, BestellungShippingString14, BestellungShippingString17, BestellungShippingString15, BestellungShippingString18) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      con.query(insertShippingSQL, [
        lastID,
        oneKundenShipping.KundenShippingString10,
        oneKundenShipping.KundenShippingString11,
        oneKundenShipping.KundenShippingString12,
        oneKundenShipping.KundenShippingString13,
        oneKundenShipping.KundenShippingString14,
        oneKundenShipping.KundenShippingString15,
      ]);
 
      // 插入账单地址
      const insertBillingSQL = `
        INSERT INTO laaver.bestellung_address_billing 
        (frIDX, BestellungBillingString11, BestellungBillingString13, BestellungBillingString14, BestellungBillingString17, BestellungBillingString15, BestellungBillingString18, BestellungBillingString20)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      con.query(insertBillingSQL, [
        lastID,
        oneKundenBilling.KundenBillingString10,
        oneKundenBilling.KundenBillingString11,
        oneKundenBilling.KundenBillingString12,
        oneKundenBilling.KundenBillingString13,
        oneKundenBilling.KundenBillingString14,
        oneKundenBilling.KundenBillingString15,
        oneKundenBilling.KundenBillingString16,
      ]);
 
      // 插入付款信息（如果有）
      if (BetragType != "Rechnung") {
        const insertBetragSQL = `
          INSERT INTO laaver.bestellung_betrag 
          (frIDX, BestellungBetragString10, BestellungBetragString11, BestellungBetragString12, BestellungBetragString13, BestellungBetragString14, BestellungBetragString15, BestellungBetragString16, BestellungBetragString17, BestellungBetragString18, BestellungBetragFloat1, BestellungBetragFloat2, BestellungBetragFloat3)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        con.query(insertBetragSQL, [
          lastID,
          PaymentBetragObj.BestellungBetragString10,
          PaymentBetragObj.BestellungBetragString11,
          PaymentBetragObj.BestellungBetragString12,
          PaymentBetragObj.BestellungBetragString13,
          PaymentBetragObj.BestellungBetragString14,
          PaymentBetragObj.BestellungBetragString15,
          PaymentBetragObj.BestellungBetragString16,
          PaymentBetragObj.BestellungBetragString17,
          PaymentBetragObj.BestellungBetragString18,
          PaymentBetragObj.BestellungBetragFloat1,
          PaymentBetragObj.BestellungBetragFloat2,
          PaymentBetragObj.BestellungBetragFloat3,
        ]);
      }
 
      // 插入商品明细
      EinkaufswagenArr.forEach(item => {
        const insertArtikelSQL = `
          INSERT INTO laaver.bestellung_artikel 
          (frIDX, BestellungArtikelString10, BestellungArtikelString11, BestellungArtikelString12, BestellungArtikelString13, BestellungArtikelString20, BestellungArtikelInt1, BestellungArtikelInt2, BestellungArtikelInt3, BestellungArtikelFloat1, BestellungArtikelFloat3)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        con.query(insertArtikelSQL, [
          lastID,
		  item.EinkaufswagenString2,
		  item.EinkaufswagenString3,
		  item.EinkaufswagenString4,
		  item.EinkaufswagenString5,
		  item.Foto,
		  item.EinkaufswagenInt2,
		  item.Menge,
		  item.EinkaufswagenInt4,
		  item.Preis,
		  item.Salepreis	  
        ]);
      });
 
      // 清空购物车
      con.query(`DELETE FROM laaver.kunden_einkaufswagen WHERE EinkaufswagenInt1 = ?`, [UserID]);
 
      // 返回订单信息
      const selectSQL = `
        SELECT *, 
          CASE WHEN Datum1 IS NULL THEN '' ELSE DATE_FORMAT(Datum1,'%Y-%m-%d') END AS sDatum1,
          CASE WHEN Datum2 IS NULL THEN '' ELSE DATE_FORMAT(Datum2,'%Y-%m-%d') END AS sDatum2,
          CASE WHEN Datum3 IS NULL THEN '' ELSE DATE_FORMAT(Datum3,'%Y-%m-%d') END AS sDatum3,
          CASE WHEN Datum4 IS NULL THEN '' ELSE DATE_FORMAT(Datum4,'%Y-%m-%d') END AS sDatum4
        FROM laaver.bestellung WHERE prIDX = ?
      `;
      con.query(selectSQL, [lastID], function (errOrder, resultOrder) {
        if (errOrder) return res.status(500).json({ error: "Fetch order failed", detail: errOrder });
        res.json(resultOrder);
      });
    });
  });
});
 
app.post('/kasse_6', urlencodedParser, (req, res) => {
	const KundenString10 = String(req.body.KundenString10);
	const KundenString11 = String(req.body.KundenString11);
	const KundenString13 = String(req.body.KundenString13);
 
	const sqlInsert = `
		INSERT INTO laaver.Kunden 
		(KundenString10, KundenString11, KundenString13) 
		VALUES (?, ?, ?)
	`;
 
	con.query(sqlInsert, [KundenString10, KundenString11, KundenString13], (err, result) => {
		if (err) {
			console.error("Insert error:", err);
			return res.status(500).send("0");
		}
 
		// 获取刚插入的主键 ID
		const sqlLast = "SELECT prIDX FROM laaver.Kunden ORDER BY prIDX DESC LIMIT 1";
		con.query(sqlLast, (err2, result2) => {
			if (err2 || result2.length === 0) {
				console.error("Select last inserted ID failed:", err2);
				return res.status(500).send("0");
			}
 
			res.send(result2[0].prIDX.toString()); // 返回 prIDX
		});
	});
});


app.post('/blog_datail_1', urlencodedParser, function (req, res, next) {
    const sqlQuery = `SELECT mainTable.*, subTable.Dateiname
						FROM laaver.news AS mainTable
						INNER JOIN laaver.news_bild AS subTable ON subTable.frIDX = mainTable.prIDX
						WHERE mainTable.NewsBIT1 = 0 AND mainTable.prIDX = ? 
						ORDER BY mainTable.prIDX DESC`;
 
    con.query(sqlQuery, [req.body.prIDX], (error, results) => {
        if (error) {
            return next(error);
        }
 
        res.json(results);
    });
});

app.post('/blog_1', urlencodedParser, function (req, res, next) {
    const sqlQuery = `SELECT 
							mainTable.*,
							subTable.Dateiname
						FROM laaver.news AS mainTable
						LEFT JOIN laaver.news_bild AS subTable  
							ON subTable.frIDX = mainTable.prIDX
						   AND subTable.prIDX = (
								SELECT MIN(nb.prIDX)
								FROM laaver.news_bild AS nb
								WHERE nb.frIDX = mainTable.prIDX
							)
						WHERE mainTable.NewsBIT1 = 0
						ORDER BY mainTable.prIDX DESC LIMIT 12`;
 
    con.query(sqlQuery, (error, results) => {
        if (error) {
            return next(error);
        }
 
        res.json(results);
    });
});
/**** mySQL End ****/
 
/**** PDF Code Begin****/
app.post('/Rechnung_PDF', urlencodedParser, function (req, res, next){	
	const OneBestellung = JSON.parse(req.body.OneBestellung);
	const OneBillingAdresseAllgemein = JSON.parse(req.body.OneBillingAdresseAllgemein);
	const OneShippingAdresseAllgemein = JSON.parse(req.body.OneShippingAdresseAllgemein);
	const OneArtikelAllgemein = JSON.parse(req.body.OneArtikelAllgemein);
	const OneBetragAllgemein = JSON.parse(req.body.OneBetragAllgemein);
	const filename = String(req.body.filename);
 
	var CouponDivCode1 = "none";
	//if(OneBestellung.BestellungFloat1>0 || OneBestellung.BestellungFloat2>0) CouponDivCode1 = "table-row";
	var CouponDivCode2 = "none";
	if(OneBestellung.BestellungFloat1>0) CouponDivCode2 = "table-row";
	var CouponDivCode3 = "none";
	if(OneBestellung.BestellungFloat2>0) CouponDivCode3 = "table-row";
 
	var tempBestellungArr = new Array();
	for(var i=0; i<OneArtikelAllgemein.length; i++){
		var EinzelPreis = parseFloat(OneArtikelAllgemein[i].BestellungArtikelFloat5);
 
		tempBestellungArr.push(new tempBestellungObj(parseInt(i+1),
													 unescape(OneArtikelAllgemein[i].BestellungArtikelString10),
													 "",
													 "",
													 parseInt(OneArtikelAllgemein[i].BestellungArtikelInt4),
													 FCommaEUR(EinzelPreis),
													 FCommaEUR(parseFloat(EinzelPreis*OneArtikelAllgemein[i].BestellungArtikelInt4))));
	}
 
	var footerTXT = ""+
		"<table style='width:100%;font-size:10px;color:#AAA;border-top:2px solid #AAA;' cellpadding='1'><tr>"+
		"<td style='width:24%;padding-top:5px;vertical-align:top;'>ITinDE UG<br/>Annastraße 97<br/>D-63225 Langen(Hessen)<br/>Germany<br/><br/></td>"+
		"<td style='width:28%;padding-top:5px;vertical-align:top;'>Amtsgericht Offenbach am Main<br/>HRB 52022<br/>Geschäftsführer: Zongwei Lin<br/>Ust-IdNr.: DE328220084<br/><br/></td>"+		
		"<td style='width:20%;padding-top:5px;vertical-align:top;'>Bank: Postbank<br/>Kontoinhaber: Zongwei Lin<br/>IBAN: DE91 4401 0046 0513 1144 69<br/>BIC: PBNKDEFF<br/><br/><div style='text-align:right;'>{{page}}/{{pages}}</div></td>"+
		"<td style='width:100px;padding-top:5px;vertical-align:top;'>&nbsp;</td>"+
		"</tr></table>";
 
 
	var dest_file_path = String(__dirname + "/public/pdf_template/Rechnung.html");
	var htmlFile = fs.readFileSync(dest_file_path, "utf8");
	var document = {
	  html: htmlFile,
	  data: {
				tempBestellungArr: tempBestellungArr,
				BillingName: unescape(OneBillingAdresseAllgemein.BestellungBillingString11),
				BillingAdresse1: unescape(OneBillingAdresseAllgemein.BestellungBillingString13),
				BillingAdresse2: unescape(OneBillingAdresseAllgemein.BestellungBillingString14),
				BillingPLZ: unescape(OneBillingAdresseAllgemein.BestellungBillingString17),
				BillingStadt: unescape(OneBillingAdresseAllgemein.BestellungBillingString15),
				BillingStaat: unescape(OneBillingAdresseAllgemein.BestellungBillingString18),
				Erstellungsdatum: unescape(OneBestellung.Datum1).substring(0,10),
				BestellungNr: String("B"+parseInt(parseInt(OneBestellung.prIDX)+10000)),
				Email: unescape(OneBestellung.BestellungString22),			
				CouponDivCode1: CouponDivCode1,
				CouponDivCode2: CouponDivCode2,
				CouponDivCode3: CouponDivCode3,			
				Zwischensumme: FCommaEUR(parseFloat(OneBestellung.BestellungFloat4)),
				Coupon: FCommaEUR(parseFloat(OneBestellung.BestellungFloat1)),
				Rabatte: FCommaEUR(parseFloat(OneBestellung.BestellungFloat2)),
				Summe: FCommaEUR(parseFloat(OneBestellung.BestellungFloat5)),
 
			},
	  path: "./public/pdf_datei/"+filename+".pdf",
	  type: "",
	};
	var options = {
		format: "A4",
		orientation: "portrait",
		border: "10mm",
		header: {
			height: "5mm"
		},
		footer: {
			height: "20mm",
            contents: {
                default: footerTXT,
            }
		}
	};
	pdf.create(document, options).then((response) => {
		return res.end();
	}).catch((error) => {
		console.error(error);
	});
});
 
app.post('/Bestellung_Erfolgreich_Email', urlencodedParser, function (req, res){
	const OneBestellung = JSON.parse(req.body.OneBestellung);
	const OneBillingAdresseAllgemein = JSON.parse(req.body.OneBillingAdresseAllgemein);
	const OneShippingAdresseAllgemein = JSON.parse(req.body.OneShippingAdresseAllgemein);
	const OneArtikelAllgemein = JSON.parse(req.body.OneArtikelAllgemein);
	const OneBetragAllgemein = JSON.parse(req.body.OneBetragAllgemein);
	const oneKunden = JSON.parse(req.body.oneKunden);
	const filename = String(req.body.filename);
 
	var tempBestellungArr = new Array();
	for(var i=0; i<OneArtikelAllgemein.length; i++){
		var EinzelPreis = parseFloat(OneArtikelAllgemein[i].BestellungArtikelFloat5);
 
		tempBestellungArr.push(new tempBestellungObj(parseInt(i+1),
													 unescape(OneArtikelAllgemein[i].BestellungArtikelString10),
													 "",
													 "",
													 parseInt(OneArtikelAllgemein[i].BestellungArtikelInt4),
													 FCommaEUR(EinzelPreis),
													 FCommaEUR(parseFloat(EinzelPreis*OneArtikelAllgemein[i].BestellungArtikelInt4))));
	}
	var Bestellungliste="",Versandadresse="";
	Versandadresse = unescape(OneShippingAdresseAllgemein.BestellungShippingString11)+"<br/>"+
					 unescape(OneShippingAdresseAllgemein.BestellungShippingString13)+" "+unescape(OneShippingAdresseAllgemein.BestellungShippingString14)+"<br/>"+
					 unescape(OneShippingAdresseAllgemein.BestellungShippingString17)+" "+unescape(OneShippingAdresseAllgemein.BestellungShippingString15)+"<br/>"+
					 unescape(OneShippingAdresseAllgemein.BestellungShippingString18)+"<br/>";
 
	for(var i=0; i<tempBestellungArr.length; i++){
		Bestellungliste += "<table style='width:100%;padding:5px 0px;"+(i>0?"border-top:1px solid #CCC;":"")+"' cellpadding='0'>"+
              "<tr>"+
							"<td style='font-size:14px;width:10%;border:0;'>"+tempBestellungArr[i].iCount+".</td>"+
							"<td style='text-align:left;font-size:14px;text-align:left;width:30%;border:0;'>"+tempBestellungArr[i].Name+"</td>"+
							"<td style='text-align:right;font-size:14px;width:20%;border:0;'>"+tempBestellungArr[i].Einzelpreis+" €</td>"+
							"<td style='text-align:right;font-size:14px;border:0;'>"+tempBestellungArr[i].Menge+"</td>"+
							"<td style='text-align:right;font-size:14px;width:20%;border:0;'>"+tempBestellungArr[i].Zwischensumme+" €</td>"+
							"</tr><tr>"+
              "<td style='border:0;'>&nbsp;</td><td colspan='4' style='font-size: 14px;color: #666;text-align:left;border:0;'>"+tempBestellungArr[i].Attribute+"</td>"+
              "</tr>"+
              (tempBestellungArr[i].Kommentar!=""?"<tr><td style='border:0;'>&nbsp;</td><td colspan='4' style='font-size: 14px;color: #666;text-align:left;border:0;'>Kundennachricht: "+tempBestellungArr[i].Kommentar+"</td></tr>":"")+
              "</table>";
	}	
 
 
	var CouponDivCode1 = "none";
	//if(OneBestellung.BestellungFloat1>0 || OneBestellung.BestellungFloat2>0) CouponDivCode1 = "table-row";
	var CouponDivCode2 = "none";
	if(OneBestellung.BestellungFloat1>0) CouponDivCode2 = "table-row";
	var CouponDivCode3 = "none";
	if(OneBestellung.BestellungFloat2>0) CouponDivCode3 = "table-row";
 
 
	var email = unescape(oneKunden.KundenString11);
	var templateFilename =  "/public/email_template/Bestelung_Erfolgreich.html";
	if(Object.keys(OneBetragAllgemein).length==0) templateFilename =  "/public/email_template/Bestelung_Erfolgreich_Rechnung.html";
	var subject = "[laaver] (Bestellung: #B"+parseInt(parseInt(OneBestellung.prIDX)+10000)+") Bestätigung deiner Bestellung";
 
  let transporter = nodemailer.createTransport(smtpConfig);
 
  fs.readFile(path.join(__dirname, templateFilename), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the template file:', err);
      return res.status(500).send('Internal Server Error');
    }
 
	//将参数Email发送到模板
    let htmlContent = data
      .replace('{{email}}', encodeURIComponent(email))
      .replace('{{Bestellnummer}}', String("B"+parseInt(parseInt(OneBestellung.prIDX)+10000)))
	  .replace('{{Bestellungliste}}', Bestellungliste)
	  .replace('{{Versandadresse}}', Versandadresse)
	  .replace('{{CouponDivCode1}}', CouponDivCode1)
	  .replace('{{CouponDivCode2}}', CouponDivCode2)
	  .replace('{{CouponDivCode3}}', CouponDivCode3)
	  .replace('{{Zwischensumme}}', FCommaEUR(parseFloat(OneBestellung.BestellungFloat4)))
	  .replace('{{Coupon}}', FCommaEUR(parseFloat(OneBestellung.BestellungFloat1)))
	  .replace('{{Rabatte}}', FCommaEUR(parseFloat(OneBestellung.BestellungFloat2)))
	  .replace('{{Summe}}', FCommaEUR(parseFloat(OneBestellung.BestellungFloat5)));
 
    let mailOptions = {
      from: '"laaver" <info@laaver.com>',
      to: email,
      subject: subject,
      html: htmlContent,
	  attachments: [
		{
			filename: String("laaver_Logo.png"),
			path: String( __dirname + "/public/images/laaver_Logo.png"),
			cid: 'ImgDatei1'
		},
		/****
		{
			filename: String(filename+".pdf"),
			path: String( __dirname + "/public/pdf_datei/"+filename+".pdf"),
			cid: 'Rechnung_PDF_Datei'
		},
		****/
	  ]
    };
 
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Failed to send email:', error);
        return res.status(500).send('Failed to send email');
      }
		res.send('Email sent successfully');
    });
  });
});
 
function tempBestellungObj(iCount,Name,Attribute,Kommentar,Menge,Einzelpreis,Zwischensumme){
   this.iCount=iCount;
   this.Name=Name;
   this.Attribute=Attribute;
   this.Kommentar=Kommentar;
   this.Menge=Menge;
   this.Einzelpreis=Einzelpreis;
   this.Zwischensumme=Zwischensumme;
}
 
function  FCommaEUR(SS){ 
	return parseFloat(SS).toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+\,)/g, '$1.'); 
}
/**** PDF Code End****/
 
/**** Send Email Begin ****/
app.post('/sendRegisterEmail', urlencodedParser, function (req, res){
	var email = unescape(req.body.Email);
	var emailCode = unescape(req.body.EmailCode);
	var username = unescape(req.body.Username);
	var templateFilename =  "/public/email_template/Register.html";
	var subject = "laaver: E-Mail Adresse bestätigen";
 
  let transporter = nodemailer.createTransport(smtpConfig);
 
  fs.readFile(path.join(__dirname, templateFilename), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the template file:', err);
      return res.status(500).send('Internal Server Error');
    }
 
	//将参数Email发送到模板
    let htmlContent = data
      .replace('{{email}}', encodeURIComponent(email))
      .replace('{{EmailCode}}', emailCode)
      .replace('{{Username}}', username);
 
    let mailOptions = {
      from: '"laaver" <info@laaver.com>',
      to: email,
      subject: subject,
      html: htmlContent,
	  attachments: [
		{
			filename: String("laaver_Logo"),
			path: String( __dirname + "/public/images/laaver_Logo.png"),
			cid: 'ImgDatei1'
		},
		{
			filename: String("Personalisiert_Register"),
			path: String( __dirname + "/public/images/register.jpg"),
			cid: 'ImgDatei2'
		},
	  ]
    };
 
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Failed to send email:', error);
        return res.status(500).send('Failed to send email');
      }
		res.send('Email sent successfully');
    });
  });
});

app.post('/sendPasswortForgotEmail', urlencodedParser, function (req, res){
	var email = unescape(req.body.Email);
	var emailCode = unescape(req.body.EmailCode);
	var templateFilename =  "/public/email_template/Passwort_Forgot.html";
	var subject = "Laaver: Passwort zurücksetzen";
 
  let transporter = nodemailer.createTransport(smtpConfig);
 
  fs.readFile(path.join(__dirname, templateFilename), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the template file:', err);
      return res.status(500).send('Internal Server Error');
    }
 
	//将参数Email发送到模板
    let htmlContent = data
      .replace('{{email}}', encodeURIComponent(email))
      .replace('{{EmailCode}}', emailCode);
 
    let mailOptions = {
      from: mailFrom,
      to: email,
      subject: subject,
      html: htmlContent,
	  attachments: [
		{
			filename: String("Laaver_Logo"),
			path: String( __dirname + "/public/images/banner.png"),
			cid: 'ImgDatei1'
		},
		{
			filename: String("Laaver_Forgot"),
			path: String( __dirname + "/public/images/forgot.png"),
			cid: 'ImgDatei2'
		},
	  ]
    };
 
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Failed to send email:', error);
        return res.status(500).send('Failed to send email');
      }
		res.send('Email sent successfully');
    });
  });
});

app.post('/frontend_contact_send', urlencodedParser, function (req, res){
	let transporter = nodemailer.createTransport(smtpConfig);
	
	const con_name = unescape(req.body.con_name);
	const con_email = unescape(req.body.con_email);
	const con_message = unescape(req.body.con_message);
 
	//将参数Email发送到模板
    let htmlContent = "Name: "+con_name+"<br/>"+
					  "Email: "+con_email+"<br/>"+
					  "Content: "+con_message+"<br/>";
 
    let mailOptions = {
      from: '"laaver" <info@laaver.com>',
      to: '"laaver" <info@laaver.com>',
      subject: "New contact form message",
      html: htmlContent,
	  attachments: [
		{
			filename: String("laaver_Logo.png"),
			path: String( __dirname + "/public/images/laaver_Logo.png"),
			cid: 'ImgDatei1'
		}
	  ]
    };
 
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Failed to send email:', error);
        return res.status(500).send('Failed to send email');
      }
		res.send('Email sent successfully');
    });
});
/**** Send Email End ****/

app.listen(process.env.PORT);

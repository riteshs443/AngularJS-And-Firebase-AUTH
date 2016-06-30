var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var nodemailer = require("nodemailer");
var app = express();




var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "support@mymissionadmission.com",
        pass: "support_anhad" 
    }
});



app.get('/sendstudentmail',function(req,res){
    hashkey = req.query.hashkey;
    urlId = req.query.urlId;
    link = "http://mymissionadmission.com/#/verify/:"+req.query.urlId+"SimLog"+req.query.hashkey+"mail="+req.query.to;
    var mailOptions={
        to : req.query.to,
        subject: "Welcome to My Mission Admission",
        //text : "Hello! "+req.query.sname+", Thanks for registering with MyMissionAdmission, a platform where you get a lifetime opportunity to have video counselling with top universities/colleges across the country with maximum scholarship and admission opportunities. To select your desired university/college click the following click: " +link+ " Your login ( http://www.mymissionadmission.com/#/login ) details are [ Username/ E-mail: "+req.query.to+" & Password: "+req.query.pass+"]. Thanks & Regards.",
        html: '<div> <div> <div style="margin:0;background-color:#F3F2F2"> <div style="padding:0;margin:0;background:url(http://res.cloudinary.com/anime95/image/upload/v1438173913/Super-Final_mj8mbc.gif) top center repeat-x;background-color:#1fbad6" background="http://res.cloudinary.com/anime95/image/upload/v1438173913/Super-Final_mj8mbc.gif" bgcolor="#1fbad6"> <table border="0" cellpadding="0" cellspacing="0" style="width:100%"> <tbody> <tr> <td style="padding-top:20px;padding-bottom:20px;margin:0;background-color:#F3F2F2;font-family:verdana;letter-spacing:0.2em;color:black;font-size:1.3em;" align="center"> MyMissionAdmission </td></tr></tbody> </table> <div style="background:url(http://res.cloudinary.com/anime95/image/upload/v1438173913/Super-Final_mj8mbc.gif) top center repeat-x #20bad6"> <table border="0" cellspacing="0" cellpadding="0" width="100%" height="100%"> <tbody> <tr> <td align="center" valign="top"> <table border="0" cellpadding="0" cellspacing="0" style="width:100%;max-width:700px"> <tbody><tr> <td style="padding-top:114px;margin:0" align="center"> <table border="0" cellpadding="0" cellspacing="0" style="width:100%"> <tbody> <tr> <td style="padding:0;margin:0;line-height: 2em;background-color:#ffffff;border-radius:0.5em;-webkit-box-shadow: 4px 4px 23px -4px rgba(0,0,0,0.75);-moz-box-shadow: 4px 4px 23px -4px rgba(0,0,0,0.75);box-shadow: 4px 4px 23px -4px rgba(0,0,0,0.75);" align="center"> <table border="0" cellpadding="0" cellspacing="0" style="line-height: 2em; width:62%;max-width:660px;"> <tbody> <div align="left" style="padding-left:1em; padding-top:1em;font-family:verdana;color:#237DAC;font-size:1.2em;">Hello '+req.query.sname+',</div><div align="left" style="padding-left:1.5em; padding-right:1em;font-family:verdana"> <p>Thanks for registering with MyMissionAdmission, a platform where you get a lifetime opportunity to have video counselling with top universities/colleges across the country with maximum scholarship and admission opportunities.</p><p>Click the following link to verify your account: '+link+'</p><br></div><div style="padding-left:1em;font-family:verdana;color:#237DAC" align="left"><span style="font-size: bold;letter-spacing: 1px;">Thanks</span> & <span style="font-size: bold;letter-spacing: 1px;">Regards</span>.</div><div style="padding-left:1em;padding-bottom:1em;font-family:verdana;color:#237DAC" align="left"><span style="font-size: bold;letter-spacing: 1px;"> My Mission Admission Team. </span> </div></tbody> </table> </td></tr></tbody> </table> <table border="0" cellpadding="0" cellspacing="0" style="width:100%"> <tbody> <tr> </tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td style="padding:0;margin:0"> <table border="0" cellpadding="0" cellspacing="0" style="width:100%"> <tbody> <tr> <td style="padding-bottom:25px;margin:0px" align="center"> <table border="0" cellpadding="0" cellspacing="0" style="width:230px;margin:0px auto"> <tbody> <tr> <td style="padding-bottom:30px;margin:0px;color:#ffffff;padding-top:40px;font-size:16px;font-family:Clan,Helvetica,Arial,sans-serif;text-transform:uppercase" align="center">FOLLOW US</td></tr><tr> <td style="padding:0px;margin:0px" align="center"> <table border="0" cellpadding="0" cellspacing="0" style="width:100%"> <tbody> <tr> <td style="padding:0px;margin:0px" align="center"> <a href="https://www.facebook.com/mymissionadmission" target="_blank"> <img src="http://res.cloudinary.com/anime95/image/upload/v1438148041/FB_we8got.png" border="0" style="width: 6em!important;height: 5em !important; margin-bottom:0.8em; padding-right: 1em !important;padding-left: 1em !important;"> </a> </td><td style="padding:0px;margin:0px" width="160" align="center"> <a href="https://www.linkedin.com/company/mymissionadmission-com" target="_blank"> <img src="http://res.cloudinary.com/anime95/image/upload/v1438148041/LinkedIn_qwissh.png" border="0" style="width: 6em!important;height: 6em !important;padding-right: 1em !important;padding-left: 1em !important;"> </a> </td><td style="padding:0px;margin:0px" align="center"> <a href="https://twitter.com/mma_mymission" target="_blank"> <img src="http://res.cloudinary.com/anime95/image/upload/v1438148042/Twitter_ibawpf.png" border="0" style="width: 6em!important;height: 6em !important;padding-right: 1em !important;padding-left: 1em !important;"> </a> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr style="background-color: #02A1BE;color: whitesmoke;"> <td align="center" style="padding-top: 1.5em !important;border-top: 3px solid #188699;border-bottom: 3px solid #188699;"><span style="font-size: 1.9em;">Anhad Edutrain Solutions Pvt Ltd</span><br><br><span>Wz 10c, A2 Janakpuri, New Delhi 110058<br><br>098107 88500</span> <br><br></td></tr></tbody> </table> </td></tr></tbody> </table> <img src="https://ci3.googleusercontent.com/proxy/lJtd2vZH2nvwKrh0EKWjwWBDlX_zhAg2J9cjRRqT4OnNZ0uQoZf9UOKYBAW4VVPLOK-KJyelOS6lmgKZD7r0MuxfMMS_B4Cv1Xig9WCmXlT1eW0h_gTW46dHYmcsjWn1jc3rRH8DdIy8HuKteoydNRMlq13hbXDoa7ERmlpnlLliw-A6_fN_C27KFopu84OH_-x_onzFjjXakJbaQhGVBHeIyLqVSslE6g=s0-d-e1-ft#https://click.et.uber.com/open.aspx?ffcb10-fe9116747766037a73-fe3615727c67047b751474-fe90127371650c7f72-ff66177574-fe5711757c6501747710-ff6b157274" width="1" height="1" class="CToWUd"> <div></div><img src="https://ci5.googleusercontent.com/proxy/Xt4vOfhnIawnfK-6qBwsClR3a1wT1rvKvkx-0w-g-O79h1CKHE2hrdIJbp1GQ5MDIvWXvjsGwd9bN9lxkjQZZvSLZrq3z1nCkB1ADf-OjscN=s0-d-e1-ft#https://2imayap7.emltrk.com/2imayap7?d=divenom.me@gmail.com" width="1" height="1" border="0" class="CToWUd"> <div> <div> <img> </div></div><span><font color="#888888"></font></span> </div><span><font color="#888888"> </font></span> </div></div><div class="yj6qo"></div><div class="adL"> </div></div></div>'
    }
    //console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});

app.get('/sendstudentregistrationmail',function(req,res){
    var mailOptions={
        to : "newusersmma@gmail.com",
        cc : "support@mymissionadmission.com",
        subject: "Urgent! New Student Registered",
        html: '<div> <div> <div style="margin:0;background-color:#F3F2F2"> <div style="padding:0;margin:0;background:url(http://res.cloudinary.com/anime95/image/upload/v1438173913/Super-Final_mj8mbc.gif) top center repeat-x;background-color:#1fbad6" background="http://res.cloudinary.com/anime95/image/upload/v1438173913/Super-Final_mj8mbc.gif" bgcolor="#1fbad6"> <table border="0" cellpadding="0" cellspacing="0" style="width:100%"> <tbody> <tr> <td style="padding-top:20px;padding-bottom:20px;margin:0;background-color:#F3F2F2;font-family:verdana;letter-spacing:0.2em;color:black;font-size:1.3em;" align="center">MyMissionAdmission</td></tr></tbody> </table> <div style="background:url(http://res.cloudinary.com/anime95/image/upload/v1438173913/Super-Final_mj8mbc.gif) top center repeat-x #20bad6"> <table border="0" cellspacing="0" cellpadding="0" width="100%" height="100%"> <tbody> <tr> <td align="center" valign="top"> <table border="0" cellpadding="0" cellspacing="0" style="width:100%;max-width:700px"> <tbody> <tr> <td style="padding-top:114px;margin:0" align="center"> <table border="0" cellpadding="0" cellspacing="0" style="width:100%"> <tbody> <tr> <td style="padding:0;margin:0;line-height: 2em;background-color:#ffffff;border-radius:0.5em;-webkit-box-shadow: 4px 4px 23px -4px rgba(0,0,0,0.75);-moz-box-shadow: 4px 4px 23px -4px rgba(0,0,0,0.75);box-shadow: 4px 4px 23px -4px rgba(0,0,0,0.75);" align="center"> <table border="0" cellpadding="0" cellspacing="0" style="line-height: 2em; width:62%;max-width:660px;"> <tbody> <div align="left" style="padding-left:1em; padding-top:1em;font-family:verdana;color:#237DAC;font-size:1.2em;">Hello Admin ,</div><br><div align="left" style="padding-left:1.5em; padding-right:1em;font-family:verdana"> <div style="font-family: &quot;Nunito&quot;, sans-serif">A new student is registered on our platform. Student Login details are:<br><br>Username/Email : '+req.query.semail+'<br>Password : '+req.query.pass+'<br>Student Name : '+req.query.sname+'.<br>Mobile : '+req.query.smobile+'.<br><br/> <br></div><div style="padding-left:1em;font-family:verdana;color:#237DAC" align="left"><span style="font-size: bold;letter-spacing: 1px;">Thanks</span> & <span style="font-size: bold;letter-spacing: 1px;">Regards</span>.</div><div style="padding-left:1em;padding-bottom:1em;font-family:verdana;color:#237DAC" align="left"><span style="font-size: bold;letter-spacing: 1px;"> My Mission Admission Team. </span> </div></tbody> </table> </td></tr></tbody> </table> <table border="0" cellpadding="0" cellspacing="0" style="width:100%"> <tbody> <tr></tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr> <td style="padding:0;margin:0"> <table border="0" cellpadding="0" cellspacing="0" style="width:100%"> <tbody> <tr> <td style="padding-bottom:25px;margin:0px" align="center"> <table border="0" cellpadding="0" cellspacing="0" style="width:230px;margin:0px auto"> <tbody> <tr> <td style="padding-bottom:30px;margin:0px;color:#ffffff;padding-top:40px;font-size:16px;font-family:Clan,Helvetica,Arial,sans-serif;text-transform:uppercase" align="center">FOLLOW US</td></tr><tr> <td style="padding:0px;margin:0px" align="center"> <table border="0" cellpadding="0" cellspacing="0" style="width:100%"> <tbody> <tr> <td style="padding:0px;margin:0px" align="center"> <a href="https://www.facebook.com/mymissionadmission" target="_blank"> <img src="http://res.cloudinary.com/anime95/image/upload/v1438148041/FB_we8got.png" border="0" style="width: 6em!important;height: 5em !important; margin-bottom:0.8em; padding-right: 1em !important;padding-left: 1em !important;"> </a> </td><td style="padding:0px;margin:0px" width="160" align="center"> <a href="https://www.linkedin.com/company/mymissionadmission-com" target="_blank"> <img src="http://res.cloudinary.com/anime95/image/upload/v1438148041/LinkedIn_qwissh.png" border="0" style="width: 6em!important;height: 6em !important;padding-right: 1em !important;padding-left: 1em !important;"> </a> </td><td style="padding:0px;margin:0px" align="center"> <a href="https://twitter.com/mma_mymission" target="_blank"> <img src="http://res.cloudinary.com/anime95/image/upload/v1438148042/Twitter_ibawpf.png" border="0" style="width: 6em!important;height: 6em !important;padding-right: 1em !important;padding-left: 1em !important;"> </a> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr></tbody> </table> </td></tr><tr style="background-color: #02A1BE;color: whitesmoke;"> <td align="center" style="padding-top: 1.5em !important;border-top: 3px solid #188699;border-bottom: 3px solid #188699;"><span style="font-size: 1.9em;">Anhad Edutrain Solutions Pvt Ltd</span> <br><br><span>Wz 10c, A2 Janakpuri, New Delhi 110058<br><br>098107 88500</span> <br><br></td></tr></tbody> </table> </td></tr></tbody> </table> <img src="https://ci3.googleusercontent.com/proxy/lJtd2vZH2nvwKrh0EKWjwWBDlX_zhAg2J9cjRRqT4OnNZ0uQoZf9UOKYBAW4VVPLOK-KJyelOS6lmgKZD7r0MuxfMMS_B4Cv1Xig9WCmXlT1eW0h_gTW46dHYmcsjWn1jc3rRH8DdIy8HuKteoydNRMlq13hbXDoa7ERmlpnlLliw-A6_fN_C27KFopu84OH_-x_onzFjjXakJbaQhGVBHeIyLqVSslE6g=s0-d-e1-ft#https://click.et.uber.com/open.aspx?ffcb10-fe9116747766037a73-fe3615727c67047b751474-fe90127371650c7f72-ff66177574-fe5711757c6501747710-ff6b157274" width="1" height="1" class="CToWUd"> <div></div><img src="https://ci5.googleusercontent.com/proxy/Xt4vOfhnIawnfK-6qBwsClR3a1wT1rvKvkx-0w-g-O79h1CKHE2hrdIJbp1GQ5MDIvWXvjsGwd9bN9lxkjQZZvSLZrq3z1nCkB1ADf-OjscN=s0-d-e1-ft#https://2imayap7.emltrk.com/2imayap7?d=divenom.me@gmail.com" width="1" height="1" border="0" class="CToWUd"> <div> <div> <img> </div></div><span><font color="#888888"></font></span> </div><span><font color="#888888"> </font></span> </div></div><div class="yj6qo"></div><div class="adL"></div></div></div>'      
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});



app.use(function(req,res,next){
    if (req.url == "/") {
    res.header("Pragma", "no-cache");
    }
    next();
});

app.use(function(req,res,next){
    if (req.url.indexOf('.html') != -1) {
    res.header("Pragma", "no-cache");
    }
    next();
});

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000); 

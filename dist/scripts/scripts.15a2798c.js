"use strict";angular.module("mmaapp",["firebase","angular-md5","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("home",{url:"/",templateUrl:"views/home.html"}).state("register",{url:"/register",templateUrl:"views/register.html",controller:"AuthCtrl"}),b.otherwise("/")}]).constant("FirebaseUrl","https://ashummaapp.firebaseio.com/"),angular.module("mmaapp").controller("AuthCtrl",["$scope","Auth","$http","$location","md5",function(a,b,c,d,e){a.hideButtons=!1,a.countryCheck=function(){c({method:"GET",url:"http://ipinfo.io"}).success(function(b){a.posts=b,console.log(a.posts.country),"BT"===b.country?a.hideButtons=!0:a.hideButtons=!1})},a.countryList=function(){c({method:"GET",url:"https://restcountries.eu/rest/v1/all"}).success(function(b){a.countries=b})},a.changecallingcode=function(){a.user.countrycode=a.user.country.callingCodes[0]},a.register=function(){a.submitbuttondisabled=!0,a.modalShown=!0,a.mobilerror=!1,"undefined"!=typeof a.user.studentmobile?(b.register(a.user).then(function(c){return a.sucess="true",c.md5_hash=e.createHash(a.user.email||""),c.studentname=a.user.studentname,c.studentmobile=a.user.countrycode+"-"+a.user.studentmobile,c.email=angular.lowercase(a.user.email),c.gender=a.user.gender,c.password=a.user.password,c.profiletype="student",c.studentAvailability="offline",c.studentstatus="notverified",c.emailverificationstatus="false",c.referredBy="nobody",c.studentphoto="https://www.filepicker.io/api/file/zEAoaiVbRRW0HrtJApxM",b.createProfile(c)},function(b){a.modalShown=!1,a.submitbuttondisabled=!1,a.error=b.message}),a.message="",a.error=""):(a.mobilerror=!0,a.submitbuttondisabled=!1)}}]),angular.module("mmaapp").service("Auth",["$firebaseAuth","$location","$rootScope","FirebaseUrl","$http","$firebaseObject","$firebaseArray","$q","md5","$filter",function(a,b,c,d,e,f,g,h,i,j){var k=new Firebase(d),l=a(k),m={createProfile:function(a){var b={studentname:a.studentname,studentmobile:a.studentmobile,email:a.email,gender:a.gender,password:a.password,profiletype:a.profiletype,studentAvailability:a.studentAvailability,studentstatus:a.studentstatus,studentphoto:a.studentphoto,emailverificationstatus:a.emailverificationstatus},c=k.child("profileForStudents/"+a.uid);return c.set(b,function(b){var c=new Firebase(d+"/currentUID");c.once("value",function(b){var e=b.val()+1,g=new Firebase(d+"profileForStudents/"+a.uid),h=f(g);h.studentname=a.studentname,h.studentmobile=a.studentmobile,h.email=a.email,h.gender=a.gender,h.dateOfRegistration=j("date")(new Date,"d MMMM yyyy"),h.password=a.password,h.profiletype=a.profiletype,h.studentAvailability=a.studentAvailability,h.studentstatus=a.studentstatus,h.emailverificationstatus=a.emailverificationstatus,h.studentphoto=a.studentphoto,"undefined"!=typeof a.country&&(h.country=a.country),h.studenturlid=e,c.set(e);var i=new Firebase(d+"customUserIdTable/studentCustomId/"+e);i.set(a.uid),h.$save().then(function(b){var c=new Firebase(d+"/DateWiseStuRegInfo");c.once("value",function(b){var d=b.numChildren()+1;c.push({studentId:a.uid,studentNumber:d})});var e=a.email.replace(/\./g,","),f=new Firebase(d+"admin/studentusersbyemail/"+e);f.set(a.uid)},function(a){console.log("Error:",a)})})}),function(a){console.log("Error:",a)}},register:function(a){return console.log(a.email),l.$createUser({email:a.email,password:a.password})},createAdminForStudent:function(a){var b=k.child("admin/studentUsers/"+a.uid);b.set(a.email)}};return m}]);
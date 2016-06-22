angular.module('mmaapp')
.service('Auth', function($firebaseAuth,$location, $rootScope,FirebaseUrl,$http,$firebaseObject, $firebaseArray, $q,md5,$filter) {
	var ref = new Firebase(FirebaseUrl);
    var auth = $firebaseAuth(ref);

		 AdminAuth={


		 	createProfile: function (user) {
      var profile = {
        studentname: user.studentname,
        studentmobile: user.studentmobile,
        email: user.email,
        gender: user.gender,
        password: user.password,
        profiletype: user.profiletype,
        studentAvailability: user.studentAvailability,        
        studentstatus: user.studentstatus,
        studentphoto: user.studentphoto,
        emailverificationstatus : user.emailverificationstatus,
      };
      var profileRef = (ref.child('profileForStudents/' + user.uid));

      return profileRef.set(profile ,function(ref) {
          var useridref = new Firebase(FirebaseUrl + '/' + 'currentUID' );
          useridref.once("value",function(snapshot){
            var currentCount = snapshot.val()+1;
            var newref = new Firebase(FirebaseUrl + 'profileForStudents' + '/' + user.uid);
            var newprofileObj = $firebaseObject(newref);
            newprofileObj.studentname = user.studentname;
            newprofileObj.studentmobile = user.studentmobile;
            newprofileObj.email = user.email;
            newprofileObj.gender = user.gender;
            newprofileObj.dateOfRegistration = $filter('date')(new Date(),'d MMMM yyyy'); 
            newprofileObj.password = user.password;        
            newprofileObj.profiletype = user.profiletype;
            newprofileObj.studentAvailability = user.studentAvailability;
            newprofileObj.studentstatus = user.studentstatus;
            newprofileObj.emailverificationstatus = user.emailverificationstatus;
            newprofileObj.studentphoto = user.studentphoto;
            if(typeof user.country !== 'undefined'){
            newprofileObj.country = user.country;
            }
           
            newprofileObj.studenturlid = currentCount;
            useridref.set(currentCount);
            var idTableRef = new Firebase(FirebaseUrl + "customUserIdTable/studentCustomId/" + currentCount);
            idTableRef.set(user.uid);
          
            newprofileObj.$save().then(function(ref) {
              var stuRef = new Firebase(FirebaseUrl+"/DateWiseStuRegInfo");
              stuRef.once("value",function(students) {
                var index = students.numChildren()+1;
                stuRef.push({studentId:user.uid,studentNumber:index});
              });
              var emails = user.email.replace(/\./g,',');
              var refneww = new Firebase(FirebaseUrl+ "admin/studentusersbyemail/" + emails );
              refneww.set(user.uid);
            }, function(error) {
              console.log("Error:", error);
            });
          });
        }), function(error) {
          console.log("Error:", error);
      };
    },



	    	register: function (user) {   
	              console.log(user.email); 
			      return auth.$createUser({email:user.email, password:user.password}  );
	        },

           createAdminForStudent: function (user) {
            var studentAdminSync = (ref.child('admin/studentUsers/' + user.uid));
            studentAdminSync.set(user.email);
          }, 

	    };
	    return AdminAuth;
	});
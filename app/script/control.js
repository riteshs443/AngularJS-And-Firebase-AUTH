angular.module('mmaapp')
.controller('AuthCtrl', function($scope,Auth,$http,$location,md5) {



    /**************Country Check ****************/
	  $scope.hideButtons = false;
     $scope.countryCheck = function() {
      $http({
      method: 'GET', url: 'http://ipinfo.io'}).success(function(data) {
      $scope.posts = data; // response data 
      console.log($scope.posts.country);
       if(data.country === 'BT'){
         $scope.hideButtons = true;
       }
       else{
         $scope.hideButtons = false;
        }
      });
    };
    /**************End Country Check ****************/





    /**************Country List ****************/
    $scope.countryList = function() {
      $http({
      method: 'GET', url: 'https://restcountries.eu/rest/v1/all'}).success(function(data) {
      $scope.countries = data; 
      });
    };    

    /************** End Country Check ****************/




    /**************Change County Calling Code ****************/
    $scope.changecallingcode = function() {
      $scope.user.countrycode = $scope.user.country.callingCodes[0];  
    };
		 /**************End Change County Calling Code ****************/




      /***********************Register************************/
      $scope.register = function () {
        OneSignal.push(["registerForPushNotifications"]);
        $scope.submitbuttondisabled = true;
        $scope.modalShown = true;
        $scope.mobilerror = false;
        if(typeof $scope.user.studentmobile !== 'undefined'){
            Auth.register($scope.user).then(function(user) {
              $scope.sucess = "true"; 
              user.md5_hash = md5.createHash($scope.user.email || '');
              user.studentname = $scope.user.studentname; 
              user.studentmobile = $scope.user.countrycode +'-'+ $scope.user.studentmobile;
              user.email = angular.lowercase($scope.user.email); 
              user.gender = $scope.user.gender;
              user.password = $scope.user.password;
              if(typeof $scope.user.country !== 'undefined'){
                user.country = $scope.user.country.name;
              }
              user.profiletype = 'student';
              user.studentAvailability = 'offline';
              user.studentstatus = 'notverified';
              user.emailverificationstatus = 'false';
              user.referredBy = 'nobody';
              user.studentphoto ='https://www.filepicker.io/api/file/zEAoaiVbRRW0HrtJApxM';
              return Auth.createProfile(user);
              $scope.modalShown = false;
              var urlId = user.uid;
              Auth.createAdminForStudent(user);
                var dataToPost = {
                                to: user.email, 
                                pass: $scope.user.password, 
                                sname: $scope.user.studentname,
                                hashkey : user.md5_hash,
                                semail : $scope.user.email,
                                smobile : $scope.user.studentmobile,
                                urlId : urlId
                            };
                $http({
                url: "/sendstudentmail", 
                method: "GET",
                params: {   to: dataToPost.to,
                            sname: dataToPost.sname,
                            pass : dataToPost.pass,
                            hashkey : dataToPost.hashkey,
                            urlId : dataToPost.urlId
                        }
                }).success(function(serverResponse) {
                    console.log(serverResponse);
                }).error(function(serverResponse) {
                    console.log(serverResponse);
                });
                $http({
                url: "/sendstudentregistrationmail", 
                method: "GET",
                params: {   to: dataToPost.to,
                            semail : dataToPost.semail,
                            sname: dataToPost.sname,
                            pass : dataToPost.pass,
                            smobile : dataToPost.smobile,
                        }
                }).success(function(serverResponse) {
                    console.log(serverResponse);
                }).error(function(serverResponse) {
                    console.log(serverResponse);
                });

            }, function(error) {
            $scope.modalShown = false;
            $scope.submitbuttondisabled = false;
            $scope.error = error.message;
          });
          $scope.message = "";
          $scope.error ="";
        }
        else{
          $scope.mobilerror = true;
            $scope.submitbuttondisabled = false;
        }
     };
    /*********************End Register*********************/

	});
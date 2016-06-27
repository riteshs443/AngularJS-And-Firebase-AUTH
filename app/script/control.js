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
            var OneSignal = OneSignal || [];
     OneSignal.push(["registerForPushNotifications", {
     /* appId: "cb5eaf7c-d708-4ccf-a114-3cbdb9489d2e",
       subdomainName: 'mymissionadmission.onesignal.com',*/  
       appId: "58564b32-afe3-44f2-ab38-c7764f1d88ed",
       subdomainName: 'mmaregister.onesignal.com', 
        notifyButton: {
          enable: true, /* Set to false to hide */
          displayPredicate: function() {
            return OneSignal.isPushNotificationsEnabled()
                .then(function(isPushEnabled) {
                    /* The user is subscribed, so we want to return "false" to hide the notify button */
                    return !isPushEnabled;
                });
            },
        },
        promptOptions: {
        showCredit: false, // Hide Powered by OneSignal
        actionMessage: 'wants to show notifications:',
        exampleNotificationTitleDesktop: 'This is an mma notification',
        exampleNotificationMessageDesktop: 'Notifications will appear on your desktop',
        exampleNotificationTitleMobile: ' mma notification',
        exampleNotificationMessageMobile: 'Notifications will appear on your device',
        exampleNotificationCaption: '(you can unsubscribe anytime)',
        acceptButtonText: 'Continue'.toUpperCase(),
        cancelButtonText: 'No Thanks'.toUpperCase()
        }
     }]);
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
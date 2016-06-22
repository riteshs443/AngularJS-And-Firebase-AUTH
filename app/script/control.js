angular.module('mmaapp')
.controller("AdminAuth", function($scope,AdminAuth,$http,$location,md5) {


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



    $scope.countryList = function() {
      $http({
      method: 'GET', url: 'https://restcountries.eu/rest/v1/all'}).success(function(data) {
      $scope.countries = data; 
      });
    };    



    $scope.changecallingcode = function() {
      $scope.user.countrycode = $scope.user.country.callingCodes[0];  
    };



    $scope.register = function () {
    $scope.submitbuttondisabled = true;
    $scope.modalShown = true;
    $scope.mobilerror = false;
    if(typeof $scope.user.studentmobile !== 'undefined'){
      AdminAuth.register($scope.user).then(function(user) {
          $scope.sucess = "true";
          user.md5_hash = md5.createHash($scope.user.email || '');
          user.studentname = $scope.user.studentname; 
          user.studentmobile = $scope.user.countrycode +'-'+ $scope.user.studentmobile;
          user.email = angular.lowercase($scope.user.email); 
          user.gender = $scope.user.gender;
          user.password = $scope.user.password;
          user.profiletype = 'student';
          user.studentAvailability = 'offline';
          user.studentstatus = 'notverified';
          user.emailverificationstatus = 'false';
          user.referredBy = 'nobody';
          user.studentphoto ='https://www.filepicker.io/api/file/zEAoaiVbRRW0HrtJApxM';
          return AdminAuth.createProfile(user);
          $scope.modalShown = false;
          var urlId = user.uid;
          AdminAuth.createAdminForStudent(user);
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
		


	});
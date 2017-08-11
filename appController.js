app.controller("appController", ['$scope', 'homeService', 'apiService', function($scope, homeService, apiService) {
  var ip = '';
  $scope.userModel = {};

  $scope.userList = [];
  $scope.addData = function() {
    homeService
      .getVerification()
      .then(function(data) {
        console.log(data, "data");
        ip = data.data.ip;
        console.log(ip, "ip");
        $scope.ip = ip;

      })
      .catch(function(err) {
        console.log(err);
      });
    var value = apiService.method1();
    console.log(value, "value");


    var _user = {
      name: $scope.userModel.name,
      email: $scope.userModel.email,
      college: $scope.userModel.college,
      regNo: $scope.userModel.regNo,

    };

    $scope.userList.push(_user);
    clearModel();
  };

  function clearModel() {
    $scope.userModel.name = '';
    $scope.userModel.email = '';
    $scope.userModel.college = '';
    $scope.userModel.regNo = 0;


  }

  $scope.bindSelectedData = function(user) {
    $scope.userModel.name = user.name;
    $scope.userModel.email = user.email;
    $scope.userModel.college = user.college;
    $scope.userModel.regNo = user.regNo;



  }

  $scope.deleteData = function(user) {
    var _index = $scope.userList.indexOf(user);
    $scope.userList.splice(_index, 1);

  }



}]);

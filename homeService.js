angular.module('myApp')
  .factory('homeService', ['$http', function($http) {
    function getVerification() {
      return $http({
        method: 'GET',
        url: 'http://ip.jsontest.com/'
      });
    }
    return {
      getVerification: getVerification
    };
  }]);

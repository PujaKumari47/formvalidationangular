angular.module('myApp')
  .service('apiService', function() {
    this.method1 = function() {

      //  return $http ({
      //   method: 'GET',
      //   url: 'http://ip.jsontest.com/'
      // });
      return 5;
    }
  });

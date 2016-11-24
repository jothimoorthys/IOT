(function() {
 // 'use strict';

  angular
    .module('frontResources')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,$log,$http) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1479821555385;
    vm.showToastr = showToastr;
    vm.postMessage = postMessage;
    vm.getMessages= getMessages;


    activate();
    vm.getMessages();


    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }

    function getMessages(){
        $http.get('http://localhost:5000/api/message').then(function(result){
            vm.messages=result.data;
            console.log(result);
        });
     }

   function postMessage() {
        console.log('posted working');
       $http.post('http://localhost:5000/api/message',{ msg: vm.message});
               console.log(vm.message);

    }

  }
})();

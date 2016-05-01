(function () {
  'use strict';

  angular
    .module('cyber.controllers')
    .controller('HomeController', HomeController)

  HomeController.$inject = ['$modal'];

  function HomeController($modal) {
    var vm = this;

    vm.showAlertDialog = showAlertDialog;

    function showAlertDialog() {
      //display modal
      $modal.open({
        templateUrl: '../../views/modals/alert-dialog.html',
        controller: ['$modalInstance', 'AlertService', 'EventService', AlertDialogController],
        controllerAs: 'vm',
        size: 'md'
      });
    }
  }

  function AlertDialogController($modalInstance, AlertService, EventService) {
    var vm = this;

    vm.events = new EventService();
    vm.alert = new AlertService();
    vm.logAlert = logAlert;

    function logAlert() {
      vm.alert.$save(function (u, putResponseHeaders) {
        console.log('alert saved!')
        $modalInstance.close();
      });
    }

    
    vm.logEvent = logEvent;
    console.log(AlertService, EventService)
    console.log(vm.alert, vm.events)
    function logEvent(){
      vm.events.$save(function (u, putResponseHeaders) {
        
        $modalInstance.close();
      });
    }
  }

})();

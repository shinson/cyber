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
        controller: ['$modalInstance', 'AlertService', AlertDialogController],
        controllerAs: 'vm',
        size: 'md'
      });
    }
  }

  function AlertDialogController($modalInstance, AlertService) {
    var vm = this;

    vm.alert = new AlertService();
    vm.logAlert = logAlert;

    function logAlert() {
      vm.alert.$save(function (u, putResponseHeaders) {
        console.log('alert saved!')
        $modalInstance.close();
      });
    }
  }

})();

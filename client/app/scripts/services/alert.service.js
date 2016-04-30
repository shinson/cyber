(function() {
    'use strict';

    angular
        .module('cyber.services')
        .factory('AlertService', AlertService)

    AlertService.$inject = ['$resource'];

    function AlertService($resource) {
        return $resource('alerts/:alertId',
            {
                alertId: '@alertId'
            },
            {
                'query': {
                    method: 'GET',
                    isArray: true
                }
            });
    }
})();
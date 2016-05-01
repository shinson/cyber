(function() {
    'use strict';

    angular
        .module('cyber.services')
        .factory('EventService', EventService)

    EventService.$inject = ['$resource'];

    function EventService($resource) {
        return $resource('events/:eventId',
            {
                eventId: '@eventId'
            },
            {
                'query': {
                    method: 'GET',
                    isArray: true
                }
            });
    }
})();
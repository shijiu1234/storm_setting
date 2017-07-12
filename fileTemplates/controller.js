
campusApp.config(['$stateProvider', '$resourceProvider',
    function ($stateProvider) {
        $stateProvider
            .state('arrange', {
                url: '/arrange',
                templateUrl: 'app/timetable/arrange.html',
                controller: 'timetableController',
                needLogin: true
            })
        ;
    }
]);

campusApp.controller('timetableController', function ($scope) {
    
    
});
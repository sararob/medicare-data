'use strict';

/* App Module */
angular.module('medicare', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/procedures', {templateUrl: 'partials/procedure-list.html', controller: ProcedureCtrl}).
            when('/procedures/:procedureDischarges', {templateUrl: 'partials/procedure-detail.html', controller: ProcedureCtrl}).
            otherwise({redirectTo: '/procedures'});
    }]);

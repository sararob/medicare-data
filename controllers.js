'use strict';

/* Controllers */
function ProcedureCtrl($scope, $http) {
    $http.get('procedures/procedures.json').success(function(data) {
        $scope.procedures = data;
    });

    $scope.orderProp = 'discharges';
}

ProcedureCtrl.$inject = ['$scope', '$http'];

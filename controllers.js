'use strict';


/* Controllers */
function ProcedureCtrl($scope, $http) {
    $http.get('procedures/procedures.json').success(function(data) {
        $scope.procedures = data;
    });

    $scope.orderProp = 'discharges';
    $scope.id = function (definition) {
        return definition.substring(0,3);
    }

    $scope.name = function (definition) {
        return definition.substring(6, definition.length)
    }
}

ProcedureCtrl.$inject = ['$scope', '$http'];

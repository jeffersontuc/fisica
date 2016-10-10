angular.module('fisica', ['ngMaterial'])

.controller('questionsController', function ($scope) {
    $scope.titulo = 'Questão 1';
    $scope.q1;
    $scope.q2;
    $scope.exp1;
    $scope.exp2;
    $scope.dist;
    $scope.k = 8990000000;
    $scope.result;



    $scope.rfio;
    $scope.rbateria;
    $scope.eletromotriz;
    $scope.tempo;
    $scope.energia;



    $scope.calculaForca = function(){
    	var expRes = parseInt($scope.exp2) + parseInt($scope.exp1);
    	$scope.result = parseFloat($scope.k) * parseFloat($scope.q1) * parseFloat($scope.q2) / Math.pow(parseFloat($scope.dist), 2);
    	if(isNaN(expRes)){
    		expRes = " N";
    	}else{
    		expRes = 'x10^' + expRes + " N";
    	}
    	$scope.result += expRes;
    	stringResult = procuraZero(JSON.stringify($scope.result));
    };

    $scope.calculaEnergia = function(){
    	$scope.energia = Math.pow(parseFloat($scope.eletromotriz), 2) * parseFloat($scope.tempo) * 60 / (parseFloat($scope.rfio) + parseFloat($scope.rbateria));
    	$scope.energia += " J";
    };

    $scope.currentNavItem = 'page1';
});


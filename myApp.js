var myApp = angular.module('myApp',[]);

myApp.controller('appControl', function ($scope) {

	$scope.list = [];
	index = 0;

    $scope.add = function() {
		$scope.list.push({
			index	: index, 
			date	: new Date(),
			message	: $scope.message, 
			done	: false
		});
		$scope.message = "";
		index++;
    };

    $scope.remove = function(del_id){
    	var i;
    	var id;
    	var len = $scope.list.length;

		for(i = 0 ; i < len ; i++){
    		id = $scope.list[i].index;
    		if(id === del_id){
				$scope.list.splice(i,1);
    		}
    	}
    }

});

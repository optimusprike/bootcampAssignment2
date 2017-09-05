angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.IsVisible = false;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function(index) {
    	//return (row.listings.toLowerCase().indexOf($scope.searchBar.toLowerCase() || '') !== -1);
    	$scope.listings.push({
    		"code": $scope.buildingCode,
    		"address": $scope.buildingAddress,
    		"name": $scope.buildingName
    		});
    };
    $scope.deleteListing = function(index) {
    	$scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
    	$scope.IsVisible = $scope.IsVisible ? false : true;
    	$scope.detailedInfo = $scope.listings[index];
    	
    };
  }
]);
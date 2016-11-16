/**
 * Created by jenniferbrown on 11/15/16.
 */
// 2nd argument defines your dependencies
angular.module('puppyApp')
    .controller('puppyCtrl', function($scope, $http) {

        $scope.getPuppies = function() {
            $http.get('http://localhost:9292/dogs/')
                .then(function(response) {
                    console.log(response.data, ' this contains an array of our objects from our server')
                    $scope.puppies = response.data;
                })
        };

        $scope.whoAmI = function() {
            console.log("I'm a real boy!")
        };
    });
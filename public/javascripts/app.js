console.log('loaded');

// you can specify angular features in the array below
var CatsApp = angular.module('CatsApp', ['ngRoute']);
//var DogsApp = angular.module('DogsApp', []);

// CatsApp.controller('PlaygroundCtrl', function($scope, $http) {
//     $scope.url = 'http://www.omdbapi.com/?t=empire+strikes&y=&plot=short&r=json';
//     $scope.movie = undefined;
//     $scope.fetch = function() {
//         $http.get($scope.url).success(function(data) {
//             console.log(data);
//             $scope.movie = data;
//         });
//     }
//     $scope.changeMovie = function() {
//         $scope.url = 'http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json';
//         $scope.fetch();
//     }
//     $scope.fetch();
// });


// // $scope replaces .this
// CatsApp.controller('CatsCtrl', function($scope) {
//     $scope.cats = [];
//
//     $scope.addCat = function(name, note) {
//         var cat = {name: name, note: note};
//         $scope.cats.push(cat);
//         console.log($scope.cats);
//     };
// });

CatsApp.controller('CatsCtrl', function($scope, $http) {
    $scope.cats = [];
    $scope.urlHost = 'http://localhost:9292';
    $scope.message = '';

    $scope.addCat = function(name, note) {
        // var cat = {name: name, note: note};
        // $scope.cats.push(cat);
        // console.log($scope.cats);
        $http({
            url: $scope.urlHost + '/cats',
            method: 'post',
            params: { name: name, note: note }
        }).success(function(data) {
            console.log(data);
            $scope.populateList();
        });
    };

    $scope.populateList = function() {
        $http.get($scope.urlHost + '/cats').success(function(data) {
            console.log(data);
            $scope.cats = data;
        });
    };

    $scope.adoptCat = function(event) {
        console.log(event.cat);
        $http.delete($scope.urlHost + '/cats/' + event.cat.id).success(function(data) {
            console.log('Your cat is adopted :)');
            $scope.message = data.message;
            $scope.populateList();
        });
    }

    // run code now that everything is defined :)
    $scope.populateList();

});



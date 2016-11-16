/**
 * Created by jenniferbrown on 11/15/16.
 */
var BlogApp = angular.module('BlogApp', ['ngRoute']);

/**
 * This is where we can submit new blog posts.
 */
// BlogApp.controller('BlogApp', function($scope, $http) {
//     $scope.blogs = [];
//     $scope.urlHost = 'http://localhost:9292';
//     $scope.message = '';
//
//     $scope.addBlog = function(title, contents, tags) {
//         // var cat = {name: name, note: note};
//         // $scope.cats.push(cat);
//         // console.log($scope.cats);
//         $http({
//             url: $scope.urlHost + '/blogs',
//             method: 'post',
//             params: { title: title, contents: contents, tags: tags }
//         }).success(function(data) {
//             console.log(data);
//             $scope.populateList();
//         });
//     };
//
//     $scope.populateList = function() {
//         $http.get($scope.urlHost + '/blogs').success(function(data) {
//             console.log(data);
//             $scope.blogs = data;
//         });
//     };
//
//     $scope.deleteBlog = function(event) {
//         console.log(event.blog);
//         $http.delete($scope.urlHost + '/blogs/' + event.blog.id).success(function(data) {
//             console.log('Your blog post has been deleted.');
//             $scope.message = data.message;
//             $scope.populateList();
//         });
//     }
//
//     // run code now that everything is defined :)
//     $scope.populateList();
// });

// Create 2 controllers: `AddBlogEntryCtrl` and `BlogEntryListCtrl`. Re-create the steps from class today/yesterday to `get` and `post` results. Bonus for `patch` and `delete`.
BlogApp.controller('AddBlogEntryCtrl', function($scope, $http) {

    $scope.url = 'http://localhost:9292/blogs';

    $scope.create = function(title, contents, tags) {
        $http({
            url: $scope.url,
            params: { title: title, contents: contents, tags: tags },
            method: 'POST'
        }).success(function(data){
            alert('Your post has been added. Please refresh to see!');
        });
    };
});

/**
 * This is my controller for fetching from /blogs/
 */
BlogApp.controller('BlogEntryListCtrl', function($scope, $http) {

    $scope.url = 'http://localhost:9292/blogs';
    $scope.blogs = [];

    $scope.fetch = function() {
        $http.get($scope.url).success(function(data) {
            $scope.blogs = data;
        });
    };

    $scope.delete = function() {

    };

    // upon controller instantition
    // new Controller();
    // we fetch() our model data from an API
    $scope.fetch();
});
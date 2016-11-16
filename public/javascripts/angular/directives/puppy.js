/**
 * Created by jenniferbrown on 11/15/16.
 */
angular.module('puppyApp')
    .directive('puppies', function() {
        return {
            templateUrl: 'javascripts/angular/templates/puppies.html',
            //controller: "puppyCtrl"
        }
    });
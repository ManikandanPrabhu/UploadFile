'use strict';
angular.module('todoApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {

   $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/App/Views/Home.html"
    }).when("/TodoList", {
        controller: "todoListCtrl",
        templateUrl: "/App/Views/TodoList.html",
        requireADLogin: false,  
    }).when("/UserData", {
        controller: "userDataCtrl",
        templateUrl: "/App/Views/UserData.html",
        requireADLogin: false
    }).otherwise({ redirectTo: "/Home" });

   adalProvider.init(
        {
            instance: 'https://login.microsoftonline.com/',
            tenant: 'connectionseducation.com',
            clientId: '73ae8258-0840-4f56-90f2-006584f99e90',
            extraQueryParameter: 'nux=1',

           cacheLocation: 'localStorage' // enable this for IE, as sessionStorage does not work for localhost.
        },
        $httpProvider
        );
   
}]);
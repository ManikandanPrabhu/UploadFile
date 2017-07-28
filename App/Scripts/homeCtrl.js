'use strict';
angular.module('todoApp')
.controller('homeCtrl', ['$scope', '$http', 'adalAuthenticationService','$location', function ($scope, $http, adalService, $location) {
    $scope.login = function () {
        adalService.login();
    };
    $scope.logout = function () {
        adalService.logOut();
    };
    $scope.isActive = function (viewLocation) {        
        return viewLocation === $location.path();
    };
    $scope.onclick = function (picFile, event) {
    	var form = new FormData();
		form.append("", "StudyIsland.csv");

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://intpcx-ltibridgeconfigurationservice.v3nonprod.connexus.com/v1/uploadProvisionedUser/toolProvider/8",
		  "method": "PUT",
		  "headers": {
		    "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlZXVkljMVdEMVRrc2JiMzAxc2FzTTVrT3E1USIsImtpZCI6IlZXVkljMVdEMVRrc2JiMzAxc2FzTTVrT3E1USJ9.eyJhdWQiOiI3M2FlODI1OC0wODQwLTRmNTYtOTBmMi0wMDY1ODRmOTllOTAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9hYWU5ODM0Mi0zNjAxLTQwYzYtYTM1OS1kNmYyOWQ0ZjFjMGYvIiwiaWF0IjoxNTAxMjM1ODgzLCJuYmYiOjE1MDEyMzU4ODMsImV4cCI6MTUwMTIzOTc4MywiYWlvIjoiQVNRQTIvOERBQUFBNnAwMzI4azd1RGpUcmRuSFhhSDdBbXdOVzJEVGR2N2pzYlhITTBxdld3TT0iLCJhbXIiOlsicHdkIl0sImZhbWlseV9uYW1lIjoiU2VsdmFuIiwiZ2l2ZW5fbmFtZSI6Ik1hbmlrYW5kYSIsImdyb3VwcyI6WyJmYTY0NjY4MC04NzQ0LTQwOTUtOTAwMS1mMTkzYjI5OWE3NDUiXSwiaXBhZGRyIjoiMTU5LjE4Mi4xLjQiLCJuYW1lIjoiTWFuaWthbmRhIFNlbHZhbiIsIm5vbmNlIjoiYWYxN2ZiYTYtYjUwZC00MzA0LWI2MzctMGZmZjFjODU4NjVjIiwib2lkIjoiNDE1OTI0NmYtMWU3ZC00MGQ2LWE4OWQtZDliOWUzMmZlMTY0Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTEzNDMwMjQwOTEtMTA2MDI4NDI5OC02ODIwMDMzMzAtODEwMjEiLCJwbGF0ZiI6IjMiLCJzdWIiOiJuaHBhSTl0N1h0SnFETVhBYlZfVE0yNlFWMXZ6dXA0dGpTeW4teEtkT3IwIiwidGlkIjoiYWFlOTgzNDItMzYwMS00MGM2LWEzNTktZDZmMjlkNGYxYzBmIiwidW5pcXVlX25hbWUiOiJtc2VsdmFuQGNvbm5lY3Rpb25zZWR1Y2F0aW9uLmNvbSIsInVwbiI6Im1zZWx2YW5AY29ubmVjdGlvbnNlZHVjYXRpb24uY29tIiwidmVyIjoiMS4wIn0.WjPDmFQRHo__54x_XcRf5tS02EvuVzdftOw_ilZriLvWrvHpGrVnpAR50uja9cIkO8QnXoLgMMdSWYFGa9x_0XVUGnWNhJiw_ZQOjg7UTduE40kRC3AFr-lTjN2Z6GuSQoMBrjOC4nOFKuQOlu-FFsUwduvEg1-84ZX3R2izLzTyIG7rMSr0raFR8YZYdE9JWuwRItKXjKcU5JlVOhZGEwURVMiSQNvmuEXVtWAEMWR-xz9O9biQu7BL40pPnsa8dbHklSGp7fEiGNbQZyWFxM6e6avalHNnOyk0cL9jgggTaO0AW6cuQ3cXgCgxig6J5UVMa5Y2K0EKqvfK1DF6hQ",
		    "cache-control": "no-cache",
		    "postman-token": "7908f06b-2b65-811c-5ae5-3c500e5cae79"
		  },
		  "processData": false,
		  "contentType": false,
		  "mimeType": "multipart/form-data",
		  "data": form
		}

		$.ajax(settings).done(function (response) {
		  console.log(response);
		});
		event.preventDefault();
    };
}]);
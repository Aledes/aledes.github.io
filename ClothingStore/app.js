//Hard-coding a model - Now in clothes.JSON
//Module Creation
//Creating new custom module called "myApp"
//I can now use on the page. If I pass one argument to the module method, I'm "fetching" an existing module. If I pass two arguments to the module method, I'm creating a new module (the brackets),
var app = angular.module("myApp", ["storeProducts", "ngRoute"]);

//Router
app.config(function ($routeProvider, $locationProvider) {
    //$location.html5Mode(true);
    $routeProvider.when("/", {
        templateUrl: "templates/home.html"
    }).when("/page1", {
        templateUrl: "templates/page1.html"
    }).when("/page2", {
        templateUrl: "templates/page2.html"
    }).when("/login", {
        templateUrl: "templates/login.html"
    });
});
/*Once I have a reference to the app, I can add other services, controllers, filters, and directives to it using built-in functions. In this case, passing two arguments to the controller method will*/
function myController($scope, $http) {
    $scope.Initialized = function () {
        $http.get("clothes.json").then(function (result) {
            $scope.models = result.data;
        });
    };
}

app.controller("myController", ['$scope', '$http', myController]);

app.controller("userController", function ($scope) {

    $scope.register = function (email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    $scope.login = function (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password);
    };

    $scope.logout = function () {
        firebase.auth().signOut()
    };

    $scope.onAuthStateChanged = firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            $scope.user = user;
            $scope.apply();
        } else {
            $scope.user = null;
            $scope.$apply();
        }
    });
});

angular.module("Demo")
    .component("routeComponent", {
      templateUrl: "components/routeComponent/routeComponent.html",
      controllerAs: "routeComponentCtrl",
      controller: routeComponentController,
      $routeConfig: [
          {
              path : "/loginPage",
              name : "LoginComponent",
              component : "loginComponent"
          }
      ]
});

function routeComponentController($location, $http, $injector, $rootScope){
  var routeComponentCtrl = this;
    
    console.log("Inside Route Compoenent");
};
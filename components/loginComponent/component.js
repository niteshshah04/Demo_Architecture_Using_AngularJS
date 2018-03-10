angular.module("Demo")
    .component("loginComponent", {
      templateUrl: "components/loginComponent/template.html",
      controllerAs: "loginComponentCtrl",
      controller: loginComponentController
});

function loginComponentController($location, $http){
  var loginComponentCtrl = this;
    
    console.log("Inside Login");
};
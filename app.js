document.getElementById('writeHere').contentWindow.document.designMode="on";

var jwApp = angular.module('jwApp', []);


jwApp.controller('jwController', function($scope) {



$scope.boldText = function ()
    {  
       var boldIt = document.getElementById("writeHere").contentWindow;
       boldIt.document.execCommand("bold", false, ""); 
       console.log("bold");
    }

$scope.italicizeText = function ()
     {  
        var italicizeIt = document.getElementById("writeHere").contentWindow;
        italicizeIt.document.execCommand("italic", false, ""); 
        console.log("bold");
     }

})
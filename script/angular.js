var myApp = angular.module('myApp',[]);
myApp.controller('myController', function($scope){
	var person = {
		firstName: "Vimlesh",
		lastName: "Singh",
		email: "vimleshsinghk@googlemail.com",
		mobile: "+44-7720271194",
		webSite: "http://www.vimleshsinghk.com",
		birthDate:new Date(1980,04,17),
		gender: "male",
		work: "Web Developer",
		projects:["images/ATH.jpg"],
		avatar: "images/vimlesh.jpg"
	};
	$scope.person = person;
	$scope.mycolor = "rgba(123,15,255,1.0)";
	//$scope.bgcolor = "rgba(156,231,211,1.0)";
});

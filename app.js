
var slider = document.getElementById("myRange");
var output = document.getElementById("currentPrice");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};


var app = angular.module('HotelApp', []);



app.controller("HotelController", function ($scope, $http) {

    var url = "data.json";

    //window.setInterval(function () {

    //}, 5000);
    FetchData();

    function FetchData() {
        $http.get(url)
            .then(function (response) {


                $scope.Hotels = response.data[1].entries;

                var prices = [];
                for (var i in $scope.Hotels) {
                    prices.push($scope.Hotels[i].price);
                }
                $scope.max = Math.max(...prices);
                $scope.rangemax = $scope.max;


            }, function myError(response) {
                console.log(response);
            });
    }


    $scope.filterPrice = function (obj) {
        return obj.price > 0 && obj.price <= $scope.max;
    };
});




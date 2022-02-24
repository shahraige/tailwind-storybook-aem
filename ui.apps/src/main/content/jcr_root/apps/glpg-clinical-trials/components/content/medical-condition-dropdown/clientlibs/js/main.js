angularApp.controller('medicalConditionController', ['$http', '$scope', '$timeout', function ($http, $scope, $timeout) {
    var _this = this;
    _this.medicalConditions = [];

    var urlMapping = "/bin/public/glpg-clinicaltrials/common-data";

    var selectorMapping = {
        medicalConditions: ".conditions",
        countries: ".countries",
        zips: ".zips"
    }

    var extensionMapping = ".html";


    _this.fetchData = function(url, itemName) {
        $http.get(url)
            .then(function successCallback(response) {
                var results = response.data.data;
                if (results && results.length > 0) {
                    _this[itemName] = results.map(item => item);
                    localStorage.setItem(itemName, JSON.stringify(_this[itemName]));
                }
            }, function errorCallback(error) {
                console.log('Error!!!: ', error);
            });
    }

    _this.getDataFromApiOrLocalStorage = function (itemName) {

        if (localStorage.getItem(itemName)) {
            var jsonData = localStorage.getItem(itemName);
            if (jsonData && jsonData.length > 0) {
                var objectData = JSON.parse(jsonData);
                _this[itemName] = objectData.map(item => item);
            }
        } else {
            var resourcePath = $('#currentPagePath').val();
            var url = urlMapping + selectorMapping[itemName] + extensionMapping + '?resourcePath=' + resourcePath;

            if (resourcePath) {
                _this.fetchData(url, itemName);
            } else {
                console.log("Resource path not found!");
            }
        }
    }

    _this.getDataFromApiOrLocalStorage("medicalConditions");
}]);

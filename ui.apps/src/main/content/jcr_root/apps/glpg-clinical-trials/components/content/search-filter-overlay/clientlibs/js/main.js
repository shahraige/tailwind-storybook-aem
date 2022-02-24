angularApp.controller('searchFilterController', ['$http', '$scope', '$timeout', function ($http, $scope, $timeout) {
    var _this = this;
    _this.data = {
        keyword: "",
        condition: "",
        country: "",
        zip: "",
        recruit: false
    };
    _this.medicalConditions = [];
    _this.countries = [];
    _this.zipCodes = [];
    _this.validation = true;
    _this.zipDisabled = true;

    var urlMapping = "/bin/public/glpg-clinicaltrials/common-data";

    var selectorMapping = {
        medicalConditions: ".conditions",
        countries: ".countries",
        zips: ".zips"
    }

    var extensionMapping = ".html";

    $("#country").change(function () {
        _this.data.countryName = this.innerText;
        if (this.innerText) {
            _this.zipDisabled = false;
        }
    })

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

    _this.postData = function(url, body) {
        $http.post(url, body)
            .then(function successCallback(response) {
                var results = response.data.data;
                _this.validation = results;
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
            var resourcePath = $('#searchFilterResource').val();
            var url = urlMapping + selectorMapping[itemName] + extensionMapping + '?resourcePath=' + resourcePath;

            if (resourcePath) {
                _this.fetchData(url, itemName);
            } else {
                console.log("Resource path not found!");
            }
        }
    }

    _this.getDataFromApiOrLocalStorage("medicalConditions");
    _this.getDataFromApiOrLocalStorage("countries");
    //_this.getDataFromApiOrLocalStorage("zipCodes");

    _this.validate = function () {
        var country = _this.data.countryName;
        var zipcode = _this.data.zip;
        var itemName = "zips";

        if (country && zipcode) {
            var requestObject = {
                country,
                zipcode
            };

            var resourcePath = $('#searchFilterResource').val();
            var url = urlMapping + selectorMapping[itemName] + extensionMapping + '?resourcePath=' + resourcePath;
            _this.validation = false;
            _this.postData(url, requestObject);
        }
    }

    _this.submit = function (redirectUrl, target) {
        console.log("submitting form: ", redirectUrl);
        if (_this.validation) {
            window.open(redirectUrl + `?Keyword=${_this.data.keyword}&condition=${_this.data.condition}&country=${_this.data.country}&zip=${_this.data.zip}&recruit=${_this.data.recruit}`, target);
        }
    }
}]);

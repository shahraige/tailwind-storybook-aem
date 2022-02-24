angularApp.controller('searchResultController',['$http','$scope', '$timeout', function($http, $scope, $timeout) {
    var _this = this;
    _this.queryData = {
        expression: '',
        conditions: [],
        studyStatus: [],
        phases: [],
        ages: [],
        genders: [],
        itemPerPage: 5,
        pageNo: 1,
        currentPagePath: ''
    };

    _this.results = [];
    _this.requestData = {};

    _this.increasePageNo = function() {
        _this.requestData.pageNo++;
        _this.fetchData();
    }

    _this.getSearchResult = function () {

        _this.queryData.pageNo = 1;
        _this.queryData.itemPerPage = $("#itemPerPage").val();
        _this.queryData.currentPagePath = $("#currentPagePath").val();

        _this.makeRequestFromQueryData();
        _this.results = [];
        _this.fetchData();
    };

    _this.fetchData = function() {
        var url = '/bin/public/glpg-clinicaltrial/get-search-results';
        $http.post(url, _this.requestData)
            .then(function successCallback(response) {
                _this.results = _this.results.concat(response.data.data.search_result);
            }, function errorCallback(error) {
                console.log('Error!!!: ', error);
            });
    }

    _this.makeRequestFromQueryData = function () {
        _this.requestData = {};
        _this.requestData.expression = _this.queryData.expression;
        _this.requestData.conditions = _this.queryData.conditions;
        _this.requestData.studyStatus = _this.makeArrayFromObject(_this.queryData.studyStatus);
        _this.requestData.phases = _this.makeArrayFromObject(_this.queryData.phases);
        _this.requestData.ages = _this.makeArrayFromObject(_this.queryData.ages);
        _this.requestData.genders = _this.makeArrayFromObject(_this.queryData.genders);
        _this.requestData.itemPerPage = _this.queryData.itemPerPage;
        _this.requestData.pageNo = _this.queryData.pageNo;
        _this.requestData.currentPagePath = _this.queryData.currentPagePath;
    }

    _this.makeArrayFromObject = function (content) {
        var newArray = [];
        for (var item of Object.keys(content)) {
            if (item && content[item] !== '') {
                newArray.push(content[item]);
            }

            if (item && content[item] === 'All') {
                newArray = [];
                newArray.push("");
                break;
            }
        }

        return newArray;
    }

    _this.viewDetails = function (id) {
        var detailsPageUrl = $('#detailsPageUrl').val();
        // var wcmmode = $('#wcmmode').length > 0 ? `&wcmmode=${$('#wcmmode').val()}` : '';
        // location.href = `${detailsPageUrl}.html?${new Date().getTime()}&id=${id}${wcmmode}`;
        location.href = `${detailsPageUrl}.html?${new Date().getTime()}&id=${id}`;
    }
}]);

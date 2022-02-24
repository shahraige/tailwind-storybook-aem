var angularApp = angular.module("clinicalTrialApp",['ngSanitize','chieffancypants.loadingBar'])
    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);

angularApp.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('scope.stored', function (event, data) {
    });
}]);

angularApp.factory('Scopes', ['$rootScope', function ($rootScope) {
    var mem = {};

    return {
        store: function (key, value) {
            $rootScope.$emit('scope.stored', key);
            mem[key] = value;
        },
        get: function (key) {
            return mem[key];
        }
    };
}]);

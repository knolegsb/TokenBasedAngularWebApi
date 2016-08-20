app.service('employeeService', function ($http) {
    this.get = function () {
        var accessToken = sessionStorage.getItem('accessToken');

        var authHeaders = {};
        if (accessToken) {
            authHeaders.Authorization = 'Bearer ' + accessToken;
        }

        var response = $http({
            url: "api/employeeapi",
            method: "GET",
            headers: authHeaders
        });
        return response;
    };
});

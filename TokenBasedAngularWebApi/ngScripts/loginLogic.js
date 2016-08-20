app.service('loginService', function ($http) {
    this.register = function (userInfo) {
        var resp = $http({
            url: "/api/Account/Register",
            method: "POST",
            data: userInfo,
        });
        return resp;
    };

    this.login = function (userLogin) {
        var resp = $http({
            url: "/Token",
            method: "POST",
            data: $.param({ grant_type: 'password', username: userLogin.username, password: userLogin.password }),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        return resp;
    };
});

app.controller('loginController', function ($scope, loginService) {

    //var vm = this;

    $scope.responseData = "";
    $scope.userName = "";
    $scope.userRegistrationEmail = "";
    $scope.userRegistrationPassword = "";
    $scope.userRegistrationConfirmPassword = "";

    $scope.userLoginEmail = "";
    $scope.refreshToken = "";

    $scope.registerUser = function () {
        $scope.responseData = "";

        var userRegistrationInfo = {
            Email: $scope.userRegistrationEmail,
            Password: $scope.userRegistrationPassword,
            ConfirmPassword: $scope.userRegistrationConfirmPassword
        };

        var promiseRegister = loginService.register(userRegistrationInfo);

        promiseRegister.then(function (resp) {
            $scope.responseData = "User is successfully";
            $scope.userRegistrationEmail = "";
            $scope.userRegistrationPassword = "";
            $scope.userRegistrationConfirmPassword = "";
        }, function (err) {
            $scope.responseData = "Error" + err.status;
        });
    };

    $scope.redirect = function () {
        window.location.href = '/Employee/Index';
    };


})
app.controller("employeeController", function ($scope, employeeService) {
    $scope.Employees = [];

    $scope.Message = "";
    $scope.userName = sessionStorage.getItem('userName');

    loadEmployees();

    function loadEmployees() {
        var promise = employeeService.get();
        promise.then(function (resp) {
            $scope.Employees = resp.data;
            $scope.Message = "Call completed successfully";
        }, function (err) {
            $scope.Message = "Error!!!" + err.status
        });
    };

    $scope.logout = function(){
        sessionStorage.removeItem('accessToken');
        window.location.href = '/Login/SecurityInfo';
    };
});
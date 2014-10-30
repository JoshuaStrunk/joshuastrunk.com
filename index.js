function indexController($scope) {
    $scope.warningFlag = true;
    $scope.warningSeen = function() {
        $scope.warningFlag = false;
    }
}
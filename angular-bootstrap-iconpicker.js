var app = angular.module('bootstrap-iconpicker', []);
app.directive('iconpicker', function(){
    return {
        restrict: 'A',
        scope: {
            iconChanged: '&'
        },
        require: 'ngModel',
        link: function($scope, elem, attr, ngModel) {
            $(elem).iconpicker();
            $(elem).on('change', function(e) {
                ngModel.$setViewValue(e.icon);
                if($scope.iconChanged())
                    $scope.iconChanged()({scope: $scope, elem: elem, icon: e.icon});
            });
            $scope.$watch(function() {
                return ngModel.$modelValue;
            }, function(modelValue) {
                $(elem).iconpicker('setIcon', modelValue);
            });
        }
    }
});

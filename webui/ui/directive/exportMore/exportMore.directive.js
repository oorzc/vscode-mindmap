angular.module('kityminderEditor')
  .directive('exportMore', function () {
    return {
      restrict: 'E',
      templateUrl: 'ui/directive/exportMore/exportMore.html',
      scope: {
        minder: '='
      },
      replace: true,
      link: function ($scope) {

      }
    }
  });

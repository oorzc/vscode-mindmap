angular.module('kityminderEditor')
	.directive('progressEditor', ['commandBinder', function(commandBinder) {
		return {
			restrict: 'E',
			templateUrl: 'ui/directive/progressEditor/progressEditor.html',
			scope: {
				minder: '='
			},
            replace: true,
			link: function($scope) {
				var minder = $scope.minder;
				var lang = editor.lang.t ;
				var progresses = [];

				for (var i = 0; i < 10; i++) {
					progresses.push(i);
				}

				commandBinder.bind(minder, 'progress', $scope);

				$scope.progresses = progresses;

				$scope.getProgressTitle = function(p) {
					return lang('p'+p,'ui/progress') ;
					//switch(p) {
					//	case 0: return lang('p1','ui/progress');
					//	case 1: return '未开始';
					//	case 9: return lang('p9','ui/progress');
					//	default: return '完成' + (p - 1) + '/8';

					//}
				}
			}
		}
	}])

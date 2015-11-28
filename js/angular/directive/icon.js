/**
 * @ngdoc directive
 * @name icon
 * @module ionic
 * @restrict E
 *
 * @description
 *
 * @usage
 * ```html
 * <icon name="home"></icon>
 * ```
 */
IonicModule
.directive('icon', ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    controller: '$ionInfiniteScroll',
    link: function($scope, $element, $attrs, ctrls) {
      $element.addClass('ion-ios-' + $scope.name);
    }
  }
}]);

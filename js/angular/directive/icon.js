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
      var name = $scope.name;
      if(ionic.Platform.isIOS() && isDefined($attrs.ios)) {
        name = $attrs.ios;
      } else if(ionic.Platform.isAndroid() && isDefined($attrs.md)) {
        name = $attrs.md;
      } else if(!name) {
        var ele = $element[0];
        for(var i = 0, l = ele.attributes.length; i < l; i++) {
          if (ele.attributes[i].value === '' && /_|item-|is-active|large|small|class/.test(ele.attributes[i].name) !== true) {
            name = ele.attributes[i].name;
            break;
          }
        }
      }

      var mode = ionic.Platform.isAndroid() ? 'md' : 'ios';
      var isActive = true;
      var _name;

      if (!(/^ion-/.test(name))) {
        // not an exact icon being used
        // add mode specific prefix
        name = 'ion-' + mode + '-' + name;
      }

      console.log('Icon on platform', $scope.name);

      $element.addClass('ion-ios-' + $scope.name);

      update();

      function update() {
        if (name && mode == 'ios') {

          if (isActive) {
            if (/-outline/.test(name)) {
              name = name.replace('-outline', '');
            }
          } else if (!(/-outline/.test(name))) {
            name += '-outline';
          }

        }

        if (_name !== name) {
          if (_name) {
            $element.removeClass(_name);
          }
          _name = name;
          $element.addClass(name);

          $attrs['aria-label'] = name.replace('ion-', '').replace('ios-', '').replace('md-', '').replace('-', ' ');
        }
      }
    }
  }
}]);

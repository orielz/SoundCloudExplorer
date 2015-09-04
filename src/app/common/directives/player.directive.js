(function(app) {
    'use strict';

    app.directive('soundcloudPlayer', soundcloudPlayer);

    soundcloudPlayer.$inject = ['$timeout'];

    function soundcloudPlayer($timeout) {

        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs) {

            var widgetIframe = document.getElementById('sc-widget'),
                widget       = SC.Widget(widgetIframe);

            scope.$on('playItem', function(currentScope, item) {

                widget.load(item.uri, {
                    show_artwork: false
                });

            });

        }

    }

})(angular.module('Tradency'));




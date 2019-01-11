(function () {
    'use strict';

    angular
        .module ('maphighmap')
        .directive ('highMap', directive);

    directive.$inject = ['$window'];

    function directive($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            template:'<div>{{user.name}}</div>',
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();
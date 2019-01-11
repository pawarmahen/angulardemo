(function () {
    'use strict';

    angular
        .module ('maphighmap')
        .directive ('usMap', directive);

    directive.$inject = ['$window'];

    function directive($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            scope:{
                mapOptions:"=mapOptions"
            },
            template:'<div id="container-map"></div>'
            //templateUrl:"Js/directives/usmap/usmap.html"
        };
        return directive;
        
        function link(scope, element, attrs) {
            countrymap(scope.mapOptions);
        }

        function countrymap(options){
            var highchart = Highcharts.mapChart("container-map", {
                chart: {
                    map: options.countryKey,
                    borderWidth: 0,
                    backgroundColor: options.backgroundColor
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                tooltip: { enabled: false },
                plotOptions: {
                    series: {
                        point: {
                            events: {
                                click: function () {
                                    var code = this.code;
                                }
                            }
                        }
                    }
                },
                series: [{
                    allAreas: true,
                    joinBy: ['hc-key', 'code'],
                    nullColor: options.DefaultColor,
                    data: $.map(options.data, function (code) {
                        return {
                            'code': code,
                            color: '#00BBE4', // scope.mapOptions.statehoverColor
                        };
                    }),
                    showInLegend: false,
                }]
            });
        }
    }

})();
(function () {
    'use strict';

    angular
        .module ('maphighmap')
        .directive ('worldMap', directive);

    directive.$inject = ['$window'];

    function directive($window) {
        // Usage:
        //     <directive></directive>
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'EA',
            template:"<div id='container'></div>",
            scope:{
                mapOptions:"=mapOptions"
            }
        };
        return directive;

        function link(scope, element, attrs) {
            console.log(scope.mapOptions);
            worldmap(scope.mapOptions);
        }
        function worldmap(options){
             Highcharts.mapChart('container', {
                chart: {
                    backgroundColor: options.backgroundColor
                },
                mapNavigation: {
                    enabled: true
                },
                title: {
                    text: ''
                },
                tooltip: { enabled: false },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        point: {
                            events: {
                                click: function () {
                                }
                            }
                        }
                    }
                },
                series: [{
                    allAreas: true,
                    mapData: Highcharts.maps[options.mapkey],
                    nullColor: options.DefaultColor,
                    showInLegend: false,
                }, {
                    allAreas: false,
                    joinBy: ['iso-a2', 'code'],
                    mapData: Highcharts.maps[options.mapkey],
                    data: $.map(options.data, function (code) {
                        return {
                            code: code.Code,
                            color: code.Color,//mapOptions.CountryColor,
                            man: code.Man,
                            title: code.Title
                        };
                    }),
                }]
            });
        }
    }

})();
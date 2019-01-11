(function(){
    'use strict';

    angular
        .module('maphighmap')
        .controller('mapCtrl', controller)

    controller.$inject = ['$scope','mapDataService'];

    function controller($scope,mapDataService) {
        /* jshint validthis:true */
        var vm = $scope;
        
        activate();

        function activate() {
            vm.message = "This is from controller";
            vm.mapOptions={
                containerId:"container",
                CountryColor: '#939598',
                CountryHoverColor: '#4187BE',
                DefaultColor: '#cfd1d1',
                backgroundColor: "#f3f3f4",
                countryKey:'countries/us/us-all',
                data : ['us-tx', 'us-wv', 'us-il', 'us-nj', 'pr-3614', 'us-vt']
            };

            vm.worldMapOptions = mapDataService.getWorldMapData("","","");
         }
    }
})();
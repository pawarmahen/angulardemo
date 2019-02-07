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
                CountryColor: '#00b5e6',
                CountryHoverColor: '#008cb2',
                DefaultColor: '#cfd1d0',
                backgroundColor: "#f2f2f2",
				StateDefaultColor: "#cfd1d0",
				StateColor: "#00b5e6",
				StateHoverColor: "#008cb2",
				CityPinColor: "#00b5e6",
				CityPinHoverColor: "#008cb2",
				BackgroundColor: "#f2f2f2",
                countryKey:'countries/us/us-all',
                data : ['us-tx', 'us-wv', 'us-il', 'us-nj', 'pr-3614', 'us-vt']
            };

            vm.worldMapOptions = mapDataService.getWorldMapData("","","");
         }
    }
})();
(function(){
    'use strict';

    angular
        .module('maphighmap')
        .service('mapDataService', service)

    service.$inject = ['$http'];

    function service($http) {
        this.getWorldMapData = getWorldMapData;

        function getWorldMapData(controller,action,params) {
            return {
                CountryColor: '#939598',
                CountryHoverColor: '#4187BE',
                DefaultColor: '#cfd1d1',
                backgroundColor: "#f3f3f4",
                mapkey:'custom/world-highres3',
                data:[{ Code: 'US', Color: '#00BBE4', Man: 10, Title: 'North America' }, { Code: 'CA', Color: '#00BBE4', Man: 10, Title: 'North America' },
                { Code: 'FR', Color: '#C72263', Man: 12, Title: 'Europe' }, { Code: 'DE', Color: '#C72263', Man: 12, Title: 'Europe' }, { Code: 'IT', Color: '#C72263', Man: 12, Title: 'Europe' }, { Code: 'IE', Color: '#C72263', Man: 12, Title: 'Europe' }, { Code: 'HU', Color: '#C72263', Man: 12, Title: 'Europe' }, { Code: 'PL', Color: '#C72263', Man: 12, Title: 'Europe' },
                { Code: 'IN', Color: '#E7711F', Man: 25, Title: 'Rest of the World' }, { Code: 'AU', Color: '#E7711F', Man: 25, Title: 'Rest of the World' }, { Code: 'JP', Color: '#E7711F', Man: 25, Title: 'Rest of the World' }, { Code: 'ZM', Color: '#E7711F', Man: 25, Title: 'Rest of the World' }]
            };
         }
    }
})();
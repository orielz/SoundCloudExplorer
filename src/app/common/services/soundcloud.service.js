(function (app) {
    'use strict';


    var serviceId = 'soundcloudService';

    app.factory(serviceId, ['constant', '$http', soundCloudService]);



    function soundCloudService(constant, $http) {

        return {
            search: search
        };

        function search(query) {
            var resourceUrl = [constant.soundCloudEP, constant.soundCloudToken, "&q=" + query, "&limit=40"].join("");
            return $http.get(resourceUrl);
        }
    
    }

})(angular.module('Tradency'));
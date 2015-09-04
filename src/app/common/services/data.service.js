(function (app) {
    'use strict';


    var serviceId = 'dataService';

    app.factory(serviceId, ['$localStorage', dataService]);

    function dataService($localStorage) {

        return {
            addHistory: addHistory,
            getHistory: getHistory
        };

        function addHistory(query) {

            if (!$localStorage.historyItems) {
                $localStorage.historyItems = [query];
            } else if ($.inArray(query, $localStorage.historyItems) == -1) {

                $localStorage.historyItems.push(query);

                // Save only 6 items in history
                if ($localStorage.historyItems.length == 6)
                    $localStorage.historyItems.splice(0,1);
            }
        }

        function getHistory() {

            if (!$localStorage.historyItems || $localStorage.historyItems == 0)
                return null;

            return $localStorage.historyItems;
        }
    
    }

})(angular.module('Tradency'));
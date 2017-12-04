/* global angular */
(function () {
    'use strict';

    angular.module('myApp')
        .component('searchTicker', { // <search-ticker></search-ticker>
            bindings: {},
            controller: searchTickerController,
            templateUrl: 'app/search-ticker/search-ticker.html'
        });

    function searchTickerController(SearchTickerService) {
        var $ctrl = this;

        $ctrl.search = function search() {
            SearchTickerService.getTicker($ctrl.ticker)
                .then($ctrl.tickerReceived)
                .catch(error => {
                    console.error('We got an error:', error);
                    $ctrl.error = error;
                });
        };

        $ctrl.tickerReceived = ({
            symbol,
            companyName,
            latestPrice,
            change,
            changePercent
        }) => {
            Object.assign($ctrl, {
                symbol,
                companyName,
                latestPrice,
                change,
                changePercent
            });
            $ctrl.error = companyName ? '' : 'Invalid ticker!';
        };
    }
})();

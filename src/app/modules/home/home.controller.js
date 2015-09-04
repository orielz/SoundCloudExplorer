(function (app) {

	'use strict';

	var controllerId = 'HomeController';

	app.controller(controllerId, ['$scope', 'dataService', 'soundcloudService', home]);

	function home($scope, dataService, soundcloudService) {

		var vm = this;

		activate();

		/**
		 * Activate view data on load
		 */
		function activate() {
			vm.itemsPerPage = 6;
			vm.currentPage = 1;
			vm.history = dataService.getHistory();
		}

		/**
		 * Submit the search form
		 * @param {object} form - angular form
		 * @return undefined
		 */
		vm.submit = function(form) {

			if (form.$valid) {
				vm.search(vm.model.query);
			}
		};

		/**
		 * Perform the search action - call the soundcloud service
		 * @param {string} query - the query to search
		 * @return undefined
		 */
		vm.search = function(query) {

			soundcloudService.search(query).then(function(results) {
				if (!results.data || results.data.length == 0)
					return;

				vm.results = results.data;
				initPagination();
				dataService.addHistory(query);
				vm.history = dataService.getHistory();
			});
		}

		/**
		 * Initialize the pagination component
		 * @return undefined
		 */
		function initPagination() {
			$scope.totalItems = vm.results.length;
			vm.pageChanged();
		}

		/**
		 * Calc the pagination
		 * @return undefined
		 */
		vm.pageChanged = function(){
			var begin = ((vm.currentPage - 1) * vm.itemsPerPage);
			var end = begin + vm.itemsPerPage;
			vm.filteredResults = vm.results.slice(begin, end);
		}

		/**
		 * Play specific track
		 * Send broadcast event to player directive
		 * param {object} item - the item to play
		 * @return undefined
		 */
		vm.play = function(item) {
			vm.played = true;
			$scope.$broadcast('playItem', item);
		};
	}

})(angular.module('Tradency'));

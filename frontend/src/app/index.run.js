(function() {
  'use strict';

  angular
    .module('frontResources')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

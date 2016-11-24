/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('frontResources')
    .constant('malarkey', malarkey)
    .constant('API_URL', 'http://localhost:5000')
    .constant('moment', moment);

})();

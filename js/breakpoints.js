const drupalBreakpoints = require('drupal-breakpoints-scss');

const { name } = require('../package.json');

var defaultOpts = {
  map: true, // Output as a sass map
  mapName: 'drupal-breakpoints', // Name of the map
  vars: false,  // Output breakpoints as vars
  varsPrefix: '' // Prefix vars
}

drupalBreakpoints.read('./' + name + '.breakpoints.yml', defaultOpts)
  .pipe(drupalBreakpoints.write('./scss/vendor/_drupal-breakpoints.scss'));

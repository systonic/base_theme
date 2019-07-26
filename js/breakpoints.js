const drupalBreakpoints = require('drupal-breakpoints-scss');

const { name } = require('../package.json');

var defaultOpts = {
  map: false, // Output as a sass map
  mapName: 'drupal-breakpoints', // Name of the map
  vars: true,  // Output breakpoints as vars
  varsPrefix: '' // Prefix vars
}

drupalBreakpoints.read('./' + name + '.breakpoints.yml', defaultOpts)
  .pipe(drupalBreakpoints.write('./scss/_breakpoints.scss'));
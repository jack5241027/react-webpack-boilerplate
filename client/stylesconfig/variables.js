/* -------------------------------------
//   Base
// ------------------------------------- */

let baseConfig = {}

/* ----- Borders & Box Shadow ----- */

baseConfig['b-borderRadius'] = '3px'
baseConfig['b-borderStyle'] = 'solid'
baseConfig['b-borderWidth'] = '2px'
baseConfig['b-boxShadow'] = '0 2px 0 rgba($jet, 0.25)'

/* ----- Typography ----- */

baseConfig['b-fontFamily-heading'] = 'OpenSans, sans-serif'
baseConfig['b-fontFamily'] = 'Open Sans, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, sans-serif !default'
baseConfig['b-fontSize'] = '16px'
baseConfig['b-fontSize-s'] = '75%'
baseConfig['b-fontSize-m'] = '90%'
baseConfig['b-fontSize-l'] = '115%'
baseConfig['b-lineHeight'] = '1.5'

/* ----- Sizing ----- */

baseConfig['b-space'] = 'calc(20 / 16 * 1em)'
baseConfig['b-space-xs'] = baseConfig['b-space']
baseConfig['b-space-s'] = `calc(0.5 * ${baseConfig['b-space']})`
baseConfig['b-space-l'] = `calc(2 * ${baseConfig['b-space']})`
baseConfig['b-space-xl'] = `calc(4 * ${baseConfig['b-space']})`

/* -------------------------------------
//   Components
// ------------------------------------- */

/* ----- Grid ----- */

baseConfig['g-s'] = '640px'
baseConfig['g-m'] = '960px'
baseConfig['g-l'] = '1441px'

/* -------------------------------------
//   Structures
// ------------------------------------- */

module.exports = baseConfig

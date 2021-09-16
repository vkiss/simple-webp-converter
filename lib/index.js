/**
 * -----------------------------
 * Requires
 * -----------------------------
 */
const batchWebpConvert = require( "./batchWebpConvert" );
const validateOptions = require( "./validateOptions" );

/**
 * ----------------------------------------------------------
 */

const simpleWebpConverter = ( options = null ) => {
  batchWebpConvert( validateOptions( options ) );
};

module.exports = simpleWebpConverter;

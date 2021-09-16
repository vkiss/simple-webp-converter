/**
 * -----------------------------
 * Requires
 * -----------------------------
 */

const webp = require( "webp-converter" );
const glob = require( "glob" );
const chalk = require( "chalk" );

const { info } = console;

/**
 * ----------------------------------------------------------
 */

/**
 * Scan options using glob and create webp files using webp-converter
 * @param options { Object }
 */
const batchWebpConvert = ( options ) => {
  webp.grant_permission();

  const globPattern = options.src;

  glob( globPattern, { "ignore": [ "node_modules/**/*.*" ] }, ( err, res ) => {
    if ( err ) {
      info( chalk.white.bgRed( `! Glob error: ${err}` ) );
    } else {
      if ( res.length === 0 ) {
        info( chalk.red( "No files corresponded to the pattern " ), chalk.white.bgRed( globPattern ) );
      }
      for ( const filePath of res ) {
        // mount destination path
        const filePathSplittedByDot = filePath.split( "." );
        const fileExtension = filePathSplittedByDot[ filePathSplittedByDot.length - 1 ];
        const destinationPath = filePath.replace( fileExtension, "webp" );

        const result = webp.cwebp( filePath, destinationPath, "-q 80", "-v" );
        result.then( () => {
          info( chalk.gray( ">" ), chalk.cyan( "created", destinationPath ) );
        } );
      }
    }
  } );
};

module.exports = batchWebpConvert;

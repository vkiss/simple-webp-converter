/**
 * -----------------------------
 * Requires
 * -----------------------------
 */

const webp = require( "webp-converter" );
const { Glob } = require( "glob" );
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

  try {
    const files = new Glob(globPattern, { "ignore": [ "node_modules/**/*.*" ] });

    let listedFiles = 0;
    for (const filePath of files) {
      listedFiles = listedFiles + 1;
      const filePathSplittedByDot = filePath.split( "." );
      const fileExtension = filePathSplittedByDot[ filePathSplittedByDot.length - 1 ];
      const destinationPath = filePath.replace( fileExtension, "webp" );

      const result = webp.cwebp( filePath, destinationPath, "-q 80", "-v" );
      result.then( () => {
        info( chalk.gray( ">" ), chalk.cyan( "created", destinationPath ) );
      } );
    }

    if (listedFiles === 0) {
      info( chalk.red( "No files corresponded to the pattern " ), chalk.white.bgRed( globPattern ) );
    }
  } catch (err) {
    info( chalk.white.bgRed( `! Glob error: ${err}` ) );
  }
};

module.exports = batchWebpConvert;

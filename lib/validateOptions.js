/**
* Runs options validation. Throws error if the config is not valid.
* @param options { Object }
* @returns config { Object }
*/
const validateOptions = ( options ) => {
  if ( options === null ) {
    // default config
    return {
      src: "**/*.{png,jpg}"
    };
  }
  if ( !options.config.src ) {
    throw new Error( "Simple Webp Converter: Wrong configuration settings" );
  }
  return options.config;
};

module.exports = validateOptions;

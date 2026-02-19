/**
 * Runs options validation. Throws error if the config is not valid.
 * @param options { Object }
 * @returns config { Object }
 */
const validateOptions = (options) => {
  if (!options) {
    // default config
    return {
      src: "**/*.{png,jpg}",
      quality: 80,
    };
  }
  // Handle both cosmiconfig format (options.config) and direct options
  const config = options.config || options;
  if (!config.src) {
    throw new Error("Simple Webp Converter: Wrong configuration settings");
  }
  return {
    src: config.src,
    quality: config.quality || 80,
  };
};

module.exports = validateOptions;

/**
 * -----------------------------
 * Requires
 * -----------------------------
 */
const batchWebpConvert = require("./batchWebpConvert");
const validateOptions = require("./validateOptions");

/**
 * ----------------------------------------------------------
 */

const simpleWebpConverter = async (options = null) => {
  await batchWebpConvert(validateOptions(options));
};

module.exports = simpleWebpConverter;

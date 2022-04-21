import batchWebpConvert from "./batchWebpConvert.js";
import validateOptions from "./validateOptions.js";

const simpleWebpConverter = ( options = null ) => {
  batchWebpConvert( validateOptions( options ) );
};

export default simpleWebpConverter;

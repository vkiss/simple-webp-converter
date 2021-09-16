#!/usr/bin/env node

const { cosmiconfig } = require( "cosmiconfig" );
const chalk = require( "chalk" );

const simpleWebpConverter = require( "../lib" );

const { info } = console;

/**
* ----------------------------------------------------------
*/

const runScript = () => {
  // Script start message
  info( chalk.gray( "> simple-webp-converter.js" ) );

  const explorer = cosmiconfig( "simple-webp-converter" );

  explorer.search()
    .then( ( result ) => {
      simpleWebpConverter( result );
    } )
    .catch( ( error ) => {
      info( chalk.red( error ) );
    } );
};

runScript();

#!/usr/bin/env node
import { cosmiconfig } from "cosmiconfig";
import chalk from "chalk";
import simpleWebpConverter from "../lib/index.js";

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

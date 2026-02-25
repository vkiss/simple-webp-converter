#!/usr/bin/env node

const simpleWebpConverter = require("../lib");

const { info } = console;

/**
 * ----------------------------------------------------------
 */

const runScript = async () => {
  const cosmiconfig = (await import("cosmiconfig")).cosmiconfig;
  const chalk = (await import("chalk")).default;
  // Script start message
  info(chalk.gray("> simple-webp-converter.js"));

  const explorer = cosmiconfig("simple-webp-converter");

  explorer
    .search()
    .then((result) => {
      simpleWebpConverter(result);
    })
    .catch((error) => {
      info(chalk.red(error));
    });
};

runScript();

const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

const validateOptions = require("../lib/validateOptions");

describe("validateOptions", () => {
  it("uses the default pattern and quality when options are omitted", () => {
    assert.deepEqual(validateOptions(), {
      src: "**/*.{png,jpg}",
      quality: 80,
    });
  });

  it("normalizes direct options", () => {
    assert.deepEqual(validateOptions({ src: "assets/**/*.jpg", quality: 90 }), {
      src: "assets/**/*.jpg",
      quality: 90,
    });
  });

  it("normalizes cosmiconfig results", () => {
    assert.deepEqual(validateOptions({ config: { src: "images/**/*.png", quality: 75 } }), {
      src: "images/**/*.png",
      quality: 75,
    });
  });

  it("defaults quality when it is omitted", () => {
    assert.deepEqual(validateOptions({ src: "images/**/*.png" }), {
      src: "images/**/*.png",
      quality: 80,
    });
  });

  it("preserves quality zero", () => {
    assert.deepEqual(validateOptions({ src: "images/**/*.png", quality: 0 }), {
      src: "images/**/*.png",
      quality: 0,
    });
  });

  it("rejects configurations without a source pattern", () => {
    assert.throws(() => validateOptions({ quality: 90 }), {
      message: "Simple Webp Converter: Wrong configuration settings",
    });
  });
});

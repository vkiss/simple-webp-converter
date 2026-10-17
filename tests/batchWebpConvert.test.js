const assert = require("node:assert/strict");
const { describe, it } = require("node:test");

const webpModulePath = require.resolve("webp-converter");
require(webpModulePath);
const originalWebpCacheEntry = require.cache[webpModulePath];
const conversions = [];
const logs = [];
let permissionRequests = 0;
const mockedWebp = {
  grant_permission() {
    permissionRequests += 1;
  },
  cwebp(...args) {
    conversions.push(args);
    return Promise.resolve();
  },
};
const originalConsoleInfo = console.info;

require.cache[webpModulePath] = {
  ...originalWebpCacheEntry,
  exports: mockedWebp,
};
console.info = (...args) => logs.push(args);
const simpleWebpConverter = require("../lib");
console.info = originalConsoleInfo;
require.cache[webpModulePath] = originalWebpCacheEntry;

describe("simpleWebpConverter", () => {
  it("converts matched files to WebP using the configured quality", async () => {
    conversions.length = 0;
    logs.length = 0;
    permissionRequests = 0;

    await simpleWebpConverter({ src: "test/**/*.jpg", quality: 67 });
    await new Promise(setImmediate);

    assert.equal(permissionRequests, 1);
    assert.equal(conversions.length, 1);
    assert.deepEqual(conversions[0], [
      "test\\photo_848211330806687948_c.jpg",
      "test\\photo_848211330806687948_c.webp",
      "-q 67",
      "-v",
    ]);
    assert.ok(logs.some((args) => args.join(" ").includes("created")));
  });

  it("reports when no files match and skips conversion", async () => {
    conversions.length = 0;
    logs.length = 0;

    await simpleWebpConverter({ src: "test/no-matching-fixture-*.jpg" });

    assert.deepEqual(conversions, []);
    assert.ok(logs.some((args) => args.join(" ").includes("No files corresponded to the pattern")));
  });
});

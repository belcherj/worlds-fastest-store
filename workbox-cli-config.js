module.exports = {
  "globDirectory": "build/es6-unbundled/",
  "globPatterns": [
    "**/*.{json,html,js,md,map,jpg,png}"
  ],
  "swSrc": "sw.js",
  "swDest": "build/es6-unbundled/sw.js",
  "globIgnores": [
    "../../workbox-cli-config.js"
  ]
};

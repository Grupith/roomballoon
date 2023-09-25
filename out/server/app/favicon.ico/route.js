"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 9324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(9513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGj0lEQVR4nO2ceYhVVRzHvxq2aGZahqhFWWKmoSClzZzzHhqTSouJS4tgIRFEhUmFIZn1TxQaaUX9lxC0OC7vOZahzX2i3jtqWslIbjkuuQtKlpX57txvnOdM+d7c64zLu+duH/jCcO/AO+f7O/tygYSEhISEhADD+3EDBcZT4j1KLKfEdkocp8Q/TTre9Gw5BeZQYhyHoZvudIcaVqAzKzGFAmso0UgJXqAaKbCaEk8zjWt15yc0UKArBWZR4sRFmO4lVUNmMo3rdecv0FBgAiWOXUbjWwZC4FkC7XTnNVDwPtxEgRVlNL5U3zKNG3XnOxBQYCglDvho/lkJ7GcK9yDOMIXhlPi9LYY5E/uw8e0ptJd8Qnt9LfMN25g/+CvzB/Yyv6Oe9vcG7QXzCv/Dsb3aGoRTlBiJOMIUqpqGkN4GDe9AZ+YE2tZy5o8ebruOHKK9dhmd6WPIdPvWgnCaAvcjTlBgSGsl35n2AO369d4mH9xHO7eIjfOm0Xl5FJ3H+5KjuxSCxhFXkQ91pzN5IJ0n+7WlNpxkBQYjDqihIAX2eJpR1Yl29Yeextt1K9j41iRy5HWXu1/YF4vJGyWWeJowpgftjTl349etpPNCutydczWiTGGJ4Hzmb9nQ0vz9e9j4zjNk+oryj4yUUngEUYRD0LFQzb2anY0tS779o0lnUn9/jG+WwG4OwzWIGkxhqlembZc23za/IUd39df8//U8ogSHoAMFfvUa7eTdzK/qpMt8pb0qzYgKrMRY14wO79BiqKmaHY0lP5p9gdfIx5k5sbj0H9hLZ/IA/eZHaUSkOjQK/O2WSbtkhlsY7eg3vll/MY2rEXbUNN+19D/Wp8U437ehZlslkEbYocSbbplTi2b5cwLgwyTrYgLwBsKOaktdm5/FHxctL2g3211fIuxQYrNrADbU/t/2q7Ud/Wa71YAfEXYocMQtc/mGrf+tapZhYe1yBeAQwg4l/nQNgNpMOXqYtrFQv9HeAfgDYYcCtmsA1E7W0cOF9fwAB8BG2FGlyDUAO+rPjn6mjdRvtLdOIuyodtQtc2oPN68CoHay9BvtpYMIO5T4yTUAC+YVAsDR1+s2+XzahKiuAzVPxKj2cPUb7aWFCDsUmO2auUd7Fk4vFDbQ9RvtpXcRdijwhFcG7bXLCqcXAmC0u1KYiLDDNO7wyqAzfUyQlp/ddBvCjjoI63ngNt2+red2/JeawUflEC8lvtBuqLxgfYaoQImnAmAoL1CTEBUo0J0C+QCYyjbqTOSOrxfO5Os3lm2SwNeIGqzEZO3Gyhg2P82oi3IU+C0A5rIVnVCn+BBFKPB+CJqf2YgqTKHvRV45pU9qZAVuR5ShwIIAl/7PEXUocFcga4GAzRT6Iw6okqbdcBnhmW9rMI3eTTcUGRD9yUrcgjhBidcD1PzMQNzgKFxFgS0BML9epQVxhBUY3Opd4fKaf5qVGIQ4Q4nXNNaAVxB3qDZsBL7SUPoXRWbD5VJhFTp5HV8pk/k/RHa955I+WSPxsw8B2M40eujObyBhBXpSYkcZS/62xPzWgjAM3ShglMH8NWpnzp+iFIV7xRIfUMK5DOY7FJgbqXu/fkGBSgpsvYRS/wslRujOR6jhXbiysJ15IbNmgZ2FTyNE4ZppwOYLQ9XNxXwltp2pAB1xVupv9azwaUqJe5PxfZlpGID5DQPBIg3A/HL/bkITuwZgT2kA1LPm9wllZM8g3Nqi9DdJvUvMLzO77sbTXgFQ75IA6Gj/Byb9gNb2vyHpB/xlae3aKmvGc/8Zv+GFCXt9TkK8yRjmvGzO4rpXpxSUMcy5utMUG2bNYvtMzjygAnCOHtSdrtiQNaxUkfmG+VdNzaZkc8UvMob5UUkAMr79eAKQMayNRQFYZY1PfPGRrGEdOzcAmdWrb04C4COZnHmqqAaYZuckAD6SNcz6ohqQM8clAfA3AHOKAmCYO6vr6qL3se2gUrPKujObs+zieYAZ3WtFQSSTsz4pqQVOpnbtw7rTFRuqv9vUJZOz9pUE4bB6rjttsSFTa8qWTZE1VXe6YkXWMN8pCUCd7jTFiuxKs2dxM2Sd0J2mWFFTs6ljyZzglO40xYqsYfYrDoC1T3eaYkXGMF8sGQlF7ysnQYVku6xhbi3pA5IrR36Rqa17qWQEZC+rrevlWwLiTtYwl5V0wJ/qTlOsyJpm52zO2txk/pGvV21Irh35zeJV63tnDGv3UsNK7gDoojpZik5ISEjARfIvaW2L33ii8aYAAAAASUVORK5CYII=", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5CDylan%5CDesktop%5CRB1%5Croomballoon%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!C:\\Users\\Dylan\\Desktop\\RB1\\roomballoon\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(9324)));
module.exports = __webpack_exports__;

})();
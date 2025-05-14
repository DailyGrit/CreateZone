"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Home)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./lib/supabase.ts + 1 modules
var supabase = __webpack_require__(736);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./pages/index.tsx




function Home() {
    const [posts, setPosts] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        const fetchPosts = async ()=>{
            const { data  } = await supabase/* supabase.from */.O.from("posts").select("*").order("created_at", {
                ascending: false
            });
            setPosts(data || []);
        };
        fetchPosts();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "max-w-5xl mx-auto px-4 py-6",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-2xl font-bold text-indigo-700 mb-4",
                children: "Createzone 커뮤니티"
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: "/write",
                className: "text-sm text-white bg-indigo-600 px-4 py-2 rounded",
                children: "글쓰기"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6",
                children: posts.map((post)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                        href: `/post/${post.id}`,
                        className: "bg-white shadow p-4 rounded hover:shadow-md",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                                className: "text-lg font-semibold",
                                children: post.title
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-sm text-gray-600",
                                children: post.summary
                            })
                        ]
                    }, post.id))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F&absolutePagePath=private-next-pages%2Findex.tsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ supabase)
});

;// CONCATENATED MODULE: external "@supabase/supabase-js"
const supabase_js_namespaceObject = require("@supabase/supabase-js");
;// CONCATENATED MODULE: ./lib/supabase.ts

const supabaseUrl = "https://vyyzimksztofhrpkvqdl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eXppbWtzenRvZmhycGt2cWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMjYwNjMsImV4cCI6MjA2MjgwMjA2M30.uvB93khLu9Iv3t1n1O61KOO6_ufAf9l4bt1DNPu-SIo";
const supabase = (0,supabase_js_namespaceObject.createClient)(supabaseUrl, supabaseAnonKey);


/***/ }),

/***/ 280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664], () => (__webpack_exec__(599)));
module.exports = __webpack_exports__;

})();
"use strict";
(() => {
var exports = {};
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ WritePage)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./lib/supabase.ts + 1 modules
var supabase = __webpack_require__(736);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./pages/write.tsx




function WritePage() {
    const [title, setTitle] = (0,external_react_.useState)("");
    const [summary, setSummary] = (0,external_react_.useState)("");
    const [content, setContent] = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const { data , error  } = await supabase/* supabase.from */.O.from("posts").insert([
            {
                title,
                summary,
                content
            }
        ]);
        if (!error) {
            alert("게시글이 등록되었습니다!");
            router.push("/");
        } else {
            alert("오류 발생: " + error.message);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "max-w-2xl mx-auto mt-10 p-4 bg-white shadow rounded",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-2xl font-bold mb-4 text-indigo-700",
                children: "글쓰기"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "text",
                        placeholder: "제목",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        className: "w-full border px-3 py-2 rounded",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "text",
                        placeholder: "요약",
                        value: summary,
                        onChange: (e)=>setSummary(e.target.value),
                        className: "w-full border px-3 py-2 rounded",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                        placeholder: "내용을 입력하세요...",
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        className: "w-full border px-3 py-2 rounded h-40",
                        required: true
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        type: "submit",
                        className: "bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700",
                        children: "등록하기"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fwrite&absolutePagePath=private-next-pages%2Fwrite.tsx&preferredRegion=!

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

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(240)));
module.exports = __webpack_exports__;

})();
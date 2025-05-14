"use strict";
(() => {
var exports = {};
exports.id = 687;
exports.ids = [687];
exports.modules = {

/***/ 275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ PostDetail)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./lib/supabase.ts + 1 modules
var supabase = __webpack_require__(736);
;// CONCATENATED MODULE: ./pages/post/[id].tsx




function PostDetail() {
    const router = (0,router_.useRouter)();
    const { id  } = router.query;
    const [post, setPost] = (0,external_react_.useState)(null);
    const [comments, setComments] = (0,external_react_.useState)([]);
    const [newComment, setNewComment] = (0,external_react_.useState)("");
    const [user, setUser] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const fetchUser = async ()=>{
            const { data: { user  }  } = await supabase/* supabase.auth.getUser */.O.auth.getUser();
            setUser(user);
        };
        fetchUser();
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (!id) return;
        const fetchPost = async ()=>{
            const { data , error  } = await supabase/* supabase.from */.O.from("posts").select("*").eq("id", id).single();
            if (!error) setPost(data);
        };
        const fetchComments = async ()=>{
            const { data , error  } = await supabase/* supabase.from */.O.from("comments").select("*").eq("post_id", id).order("created_at", {
                ascending: true
            });
            if (!error) setComments(data);
        };
        fetchPost();
        fetchComments();
    }, [
        id
    ]);
    const handleCommentSubmit = async (e)=>{
        e.preventDefault();
        if (!newComment.trim() || !user) return;
        const { error  } = await supabase/* supabase.from */.O.from("comments").insert([
            {
                post_id: id,
                content: newComment,
                user_id: user.id
            }
        ]);
        if (!error) {
            setNewComment("");
            const { data  } = await supabase/* supabase.from */.O.from("comments").select("*").eq("post_id", id).order("created_at", {
                ascending: true
            });
            setComments(data || []);
        }
    };
    if (!post) return /*#__PURE__*/ jsx_runtime.jsx("p", {
        className: "p-6 text-gray-600",
        children: "불러오는 중..."
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "max-w-3xl mx-auto p-6 bg-white shadow rounded mt-8",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-2xl font-bold text-indigo-700",
                children: post.title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-sm text-gray-500 mt-1",
                children: post.summary
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mt-6 text-gray-800 whitespace-pre-line",
                children: post.content
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mt-10 border-t pt-6",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "text-lg font-bold mb-4",
                        children: "댓글"
                    }),
                    comments.map((comment)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-sm text-gray-700 whitespace-pre-line",
                                    children: comment.content
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-xs text-gray-400",
                                    children: new Date(comment.created_at).toLocaleString()
                                })
                            ]
                        }, comment.id)),
                    user ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                        onSubmit: handleCommentSubmit,
                        className: "mt-4 space-y-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                className: "w-full border px-3 py-2 rounded",
                                placeholder: "댓글을 입력하세요...",
                                value: newComment,
                                onChange: (e)=>setNewComment(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                type: "submit",
                                className: "bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700",
                                children: "등록"
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-sm text-gray-500 mt-4",
                        children: "로그인 후 댓글을 작성할 수 있습니다."
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2Fpost%2F%5Bid%5D&absolutePagePath=private-next-pages%2Fpost%2F%5Bid%5D.tsx&preferredRegion=!

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(275)));
module.exports = __webpack_exports__;

})();
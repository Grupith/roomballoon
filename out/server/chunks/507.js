exports.id = 507;
exports.ids = [507];
exports.modules = {

/***/ 6219:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 774));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 62))

/***/ }),

/***/ 3417:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9571, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FirebaseProvider: () => (/* binding */ FirebaseProvider),
  useFirebase: () => (/* binding */ useFirebase)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/index.mjs + 3 modules
var dist = __webpack_require__(8241);
// EXTERNAL MODULE: ./node_modules/firebase/app/dist/index.mjs
var app_dist = __webpack_require__(2856);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/index.mjs + 2 modules
var firestore_dist = __webpack_require__(1522);
;// CONCATENATED MODULE: ./app/firebase.ts
// Import the functions you need from the SDKs you need



const firebaseConfig = {
    apiKey: "AIzaSyCNqkn4TU4Z8EB_4pDWEbV_-4hX8oBpbnY",
    authDomain: "roomballoon-3218c.firebaseapp.com",
    projectId: "roomballoon-3218c",
    storageBucket: "roomballoon-3218c.appspot.com",
    messagingSenderId: "421190084372",
    appId: "1:421190084372:web:0d10cd130b9108ae390401",
    mesurementId: "G-4GJ5SSHF4G"
};
// Initialize Firebase
const app = (0,app_dist/* initializeApp */.ZF)(firebaseConfig);
const auth = (0,dist/* getAuth */.v0)(app);
const db = (0,firestore_dist/* getFirestore */.ad)(app);

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./app/FirebaseContext.tsx
/* __next_internal_client_entry_do_not_use__ useFirebase,FirebaseProvider auto */ 





const FirebaseContext = /*#__PURE__*/ (0,react_.createContext)(undefined);
function useFirebase() {
    const context = (0,react_.useContext)(FirebaseContext);
    if (!context) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return context;
}
function FirebaseProvider({ children }) {
    const [user, setUser] = (0,react_.useState)(null);
    const router = (0,navigation.useRouter)();
    (0,react_.useEffect)(()=>{
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if (authUser) {
                setUser(authUser);
                // Check if the user document exists in database
                const CheckUserExists = async ()=>{
                    const userDocRef = (0,firestore_dist/* doc */.JU)(db, "users", authUser.uid);
                    const userDocSnapshot = await (0,firestore_dist/* getDoc */.QT)(userDocRef);
                    // If doc does not exist, create one in users collection
                    if (!userDocSnapshot.exists()) {
                        await (0,firestore_dist/* setDoc */.pl)(userDocRef, {
                            name: authUser.displayName,
                            email: authUser.email,
                            uid: authUser.uid,
                            created_at: firestore_dist/* Timestamp */.EK.now()
                        });
                        console.log("Added user to the database");
                    } else {
                        console.log("User already exists in database");
                    }
                };
                CheckUserExists();
            } else {
                setUser(null);
            }
        });
        return ()=>unsubscribe();
    }, []);
    const signInWithGoogle = async ()=>{
        const provider = new dist/* GoogleAuthProvider */.hJ();
        try {
            await (0,dist/* signInWithRedirect */.F6)(auth, provider);
        } catch (error) {
            console.error("Google Sign in Error", error);
        }
    };
    const signOut = async ()=>{
        await auth.signOut();
    };
    const value = {
        user,
        signInWithGoogle,
        signOut
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(FirebaseContext.Provider, {
        value: value,
        children: children
    });
}


/***/ }),

/***/ 62:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8342);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FirebaseContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(774);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Navbar() {
    const [isActive, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { signOut, user } = (0,_FirebaseContext__WEBPACK_IMPORTED_MODULE_4__.useFirebase)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const toggleMenu = ()=>{
        setIsActive(!isActive);
    };
    const handleSignOut = ()=>{
        if (user) {
            signOut();
            router.push("/");
        } else {
            console.log("user not signed in");
        }
        setIsActive(false);
    };
    // Close nav menu when user clicks outside
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (isActive && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return ()=>{
            document.removeEventListener("click", handleClickOutside);
        };
    }, [
        isActive
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: "fixed w-full top-0 text-white pt-1",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between mx-4 text-xl py-3 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                src: "/assets/balloonlogo.png",
                                alt: "Balloon Logo",
                                height: 35,
                                width: 35
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "font-semibold",
                                children: "RoomBalloon"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center sm:hidden",
                        children: user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: user?.photoURL,
                            width: 30,
                            height: 30,
                            className: "rounded-full cursor-pointer",
                            alt: "Profile Photo",
                            onClick: toggleMenu
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: toggleMenu,
                            className: "cursor-pointer transition-all relative",
                            children: !isActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_lu__WEBPACK_IMPORTED_MODULE_6__/* .LuMenu */ .bqP, {
                                size: "25"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_lu__WEBPACK_IMPORTED_MODULE_6__/* .LuAlignCenter */ .dZD, {
                                size: "25"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "hidden sm:flex items-center space-x-6 text-lg font-light",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/dashboard",
                                className: "transition-all hover:font-normal",
                                children: "Dashboard"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/household",
                                className: "transition-all hover:font-normal",
                                children: "Household"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/settings",
                                className: "transition-all hover:font-normal",
                                children: "Settings"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: handleSignOut,
                                className: "cursor-pointer transition-all hover:font-normal",
                                children: user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "py-2",
                                    children: "Sign Out"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "py-2 line-through",
                                    children: "Sign Out"
                                })
                            })
                        ]
                    })
                ]
            }),
            isActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: menuRef,
                className: "bg-stone-100 text-gray-800 w-44 absolute top-16 right-4 p-3 rounded-lg shadow-lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "font-normal",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/dashboard",
                            onClick: toggleMenu,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center cursor-pointer px-1 hover:bg-gray-300 rounded-md",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_lu__WEBPACK_IMPORTED_MODULE_6__/* .LuArrowRight */ .D3e, {
                                        className: "mr-1"
                                    }),
                                    user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "py-2",
                                        children: "Dashboard"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "py-2 line-through",
                                        children: "Dashboard"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/household",
                            onClick: toggleMenu,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center cursor-pointer px-1 hover:bg-gray-300 rounded-md",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_lu__WEBPACK_IMPORTED_MODULE_6__/* .LuArrowRight */ .D3e, {
                                        className: "mr-1"
                                    }),
                                    user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "py-2",
                                        children: "Household"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "py-2 line-through",
                                        children: "HouseHold"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/settings",
                            onClick: toggleMenu,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center cursor-pointer px-1 hover:bg-gray-300 rounded-md",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_lu__WEBPACK_IMPORTED_MODULE_6__/* .LuArrowRight */ .D3e, {
                                        className: "mr-1"
                                    }),
                                    user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "py-2",
                                        children: "Settings"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "py-2 line-through",
                                        children: "Settings"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: handleSignOut,
                            className: "flex items-center cursor-pointer px-1 hover:bg-gray-300 rounded-md",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_lu__WEBPACK_IMPORTED_MODULE_6__/* .LuArrowRight */ .D3e, {
                                    className: "mr-1"
                                }),
                                user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "py-2",
                                    children: "Sign Out"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "py-2 line-through",
                                    children: "Sign Out"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 9090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Montserrat","arguments":[{"subsets":["latin"]}],"variableName":"mont"}
var target_path_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_mont_ = __webpack_require__(6962);
var target_path_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_mont_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_mont_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./app/components/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Dylan\Desktop\RB1\roomballoon\app\components\Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
;// CONCATENATED MODULE: ./app/FirebaseContext.tsx

const FirebaseContext_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Dylan\Desktop\RB1\roomballoon\app\FirebaseContext.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: FirebaseContext_esModule, $$typeof: FirebaseContext_$$typeof } = FirebaseContext_proxy;
const FirebaseContext_default_ = FirebaseContext_proxy.default;

const e0 = FirebaseContext_proxy["useFirebase"];

const e1 = FirebaseContext_proxy["FirebaseProvider"];

;// CONCATENATED MODULE: ./app/layout.tsx





const metadata = {
    title: "RoomBalloon",
    description: "Elevate your Roommate Experiance"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_app_layout_tsx_import_Montserrat_arguments_subsets_latin_variableName_mont_default()).className,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e1, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                        className: "text-center text-white py-2 bg-gradient-to-r from-slate-900 to-slate-700 text-sm",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "\xa9 2023 RoomBalloon. All rights reserved."
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 6330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);


function loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
        className: "min-h-screen overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 pt-16 flex justify-center text-white",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
            role: "status",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",
                children: "Loading..."
            })
        })
    });
}


/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"96x96"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[191],{3073:function(e,t,s){Promise.resolve().then(s.bind(s,6254))},5817:function(e,t,s){"use strict";s.r(t),s.d(t,{FirebaseProvider:function(){return x},useFirebase:function(){return h}});var o=s(7437),n=s(2265),l=s(3085),r=s(994),a=s(4086);let i=(0,r.ZF)({apiKey:"AIzaSyCNqkn4TU4Z8EB_4pDWEbV_-4hX8oBpbnY",authDomain:"roomballoon-3218c.firebaseapp.com",projectId:"roomballoon-3218c",storageBucket:"roomballoon-3218c.appspot.com",messagingSenderId:"421190084372",appId:"1:421190084372:web:0d10cd130b9108ae390401",mesurementId:"G-4GJ5SSHF4G"}),d=(0,l.v0)(i),u=(0,a.ad)(i);var c=s(4033);let m=(0,n.createContext)(void 0);function h(){let e=(0,n.useContext)(m);if(!e)throw Error("useFirebase must be used within a FirebaseProvider");return e}function x(e){let{children:t}=e,[s,r]=(0,n.useState)(null);(0,c.useRouter)(),(0,n.useEffect)(()=>{let e=d.onAuthStateChanged(e=>{if(e){r(e);let t=async()=>{let t=(0,a.JU)(u,"users",e.uid),s=await (0,a.QT)(t);s.exists()?console.log("User already exists in database"):(await (0,a.pl)(t,{name:e.displayName,email:e.email,uid:e.uid,created_at:a.EK.now()}),console.log("Added user to the database"))};t()}else r(null)});return()=>e()},[]);let i=async()=>{let e=new l.hJ;try{await (0,l.F6)(d,e)}catch(e){console.error("Google Sign in Error",e)}},h=async()=>{await d.signOut()};return(0,o.jsx)(m.Provider,{value:{user:s,signInWithGoogle:i,signOut:h},children:t})}},8871:function(e,t,s){"use strict";var o=s(7437),n=s(2265),l=s(4033),r=s(5817);t.Z=e=>{let{children:t}=e,{user:s}=(0,r.useFirebase)(),a=(0,l.useRouter)();return(0,n.useEffect)(()=>{s||a.push("/")},[s,a]),(0,o.jsx)(o.Fragment,{children:t})}},6254:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});var o=s(7437);s(2265);var n=s(8871);function l(){return(0,o.jsxs)("div",{className:"bg-white/90 rounded-lg shadow-lg p-6 mx-4 mt-4 md:mx-auto md:max-w-md",children:[(0,o.jsx)("h2",{className:"text-3xl font-semibold text-gray-800 mb-6",children:"Create Household"}),(0,o.jsxs)("form",{children:[(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{htmlFor:"householdName",className:"block text-gray-600 text-lg font-semibold mb-1",children:"Household Name"}),(0,o.jsx)("p",{className:"text-gray-500 text-sm mb-2",children:"The household name is what others will see."}),(0,o.jsx)("input",{type:"text",id:"householdName",name:"householdName",className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",placeholder:"Enter HouseHold Name"})]}),(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{htmlFor:"nickname",className:"block text-gray-600 text-lg font-semibold mb-1",children:"Household Nickname"}),(0,o.jsx)("p",{className:"text-gray-500 text-sm mb-2",children:"Your household nickname for this household. Others can change their nicknames too."}),(0,o.jsx)("input",{type:"text",id:"nickname",name:"nickname",className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",placeholder:"Enter Your Nickname"})]}),(0,o.jsx)("div",{className:"text-center",children:(0,o.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",children:"Create"})})]})]})}function r(){return(0,o.jsxs)("div",{className:"bg-white/90 rounded-lg shadow-lg p-6 mx-4 mt-4 md:mx-auto md:max-w-md",children:[(0,o.jsx)("h2",{className:"text-3xl font-semibold text-gray-800 mb-6",children:"Join Household"}),(0,o.jsxs)("form",{children:[(0,o.jsxs)("div",{className:"mb-4",children:[(0,o.jsx)("label",{htmlFor:"householdId",className:"block text-gray-600 text-lg font-semibold mb-1",children:"Household ID"}),(0,o.jsx)("p",{className:"text-gray-500 text-sm mb-2",children:"Enter the Household ID provided by the household owner to join."}),(0,o.jsx)("input",{type:"text",id:"householdId",name:"householdId",className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",placeholder:"Enter Household ID"})]}),(0,o.jsx)("div",{className:"text-center",children:(0,o.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400",children:"Join"})})]})]})}function a(){return(0,o.jsx)(n.Z,{children:(0,o.jsxs)("main",{className:"min-h-screen overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 pt-16",children:[(0,o.jsx)("h1",{className:"text-white text-center text-2xl font-semibold py-2",children:"Household"}),(0,o.jsx)(l,{}),(0,o.jsx)(r,{})]})})}}},function(e){e.O(0,[358,214,316,971,596,744],function(){return e(e.s=3073)}),_N_E=e.O()}]);
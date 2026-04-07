module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/projects/reforma/reforma/config/navigation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNavigationItems",
    ()=>getNavigationItems
]);
const getNavigationItems = ()=>{
    return [
        {
            key: 'home',
            href: `/`,
            ariaLabel: 'Strona główna'
        },
        {
            key: 'aboutMe',
            href: `/o-mnie`,
            ariaLabel: 'O mnie'
        },
        {
            key: 'offer',
            href: `/oferta`,
            ariaLabel: 'Oferta'
        },
        {
            key: 'prices',
            href: `/cennik`,
            ariaLabel: 'Cennik'
        },
        {
            key: 'contact',
            href: `/kontakt`,
            ariaLabel: 'Kontakt'
        }
    ];
};
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/projects/reforma/reforma/utils/consts/paths.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ABOUT_PATH",
    ()=>ABOUT_PATH,
    "HOME_PATH",
    ()=>HOME_PATH,
    "THANK_YOU_PATH",
    ()=>THANK_YOU_PATH
]);
const HOME_PATH = '/';
const THANK_YOU_PATH = '/thank-you';
const ABOUT_PATH = '/o-mnie';
}),
"[project]/Desktop/projects/reforma/reforma/components/Layout/Navigation/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$config$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/config/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/utils/consts/paths.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Navigation({ isSticky }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('navigation');
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const navigationItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$config$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNavigationItems"])();
    const isHomePage = pathname === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOME_PATH"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex space-x-6 mx-auto py-1 md:mr-8 md:ml-auto",
        children: navigationItems.map((item)=>{
            const isActive = pathname === item.href;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: item.href,
                "aria-label": item.ariaLabel,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("px-3 py-1 rounded-md transition-colors duration-40 text-white hover:text-cyan-50", {
                    'font-bold pointer-events-none': isActive
                }),
                children: t(item.key)
            }, item.key, false, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Navigation/index.tsx",
                lineNumber: 25,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Navigation/index.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/projects/reforma/reforma/utils/consts/scroll.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SCROLL_DEFAULT_THRESHOLD",
    ()=>SCROLL_DEFAULT_THRESHOLD,
    "SCROLL_HEADER_THRESHOLD",
    ()=>SCROLL_HEADER_THRESHOLD,
    "SCROLL_TOP_BUTTON_HIRE_ME",
    ()=>SCROLL_TOP_BUTTON_HIRE_ME,
    "TOP_ZERO",
    ()=>TOP_ZERO
]);
const SCROLL_DEFAULT_THRESHOLD = 300;
const SCROLL_HEADER_THRESHOLD = 65;
const SCROLL_TOP_BUTTON_HIRE_ME = 600;
const TOP_ZERO = 0;
}),
"[project]/Desktop/projects/reforma/reforma/utils/enums/scroll.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollDirection",
    ()=>ScrollDirection
]);
var ScrollDirection = /*#__PURE__*/ function(ScrollDirection) {
    ScrollDirection["UP"] = "up";
    ScrollDirection["DOWN"] = "down";
    ScrollDirection["BOTH"] = "both";
    return ScrollDirection;
}({});
}),
"[project]/Desktop/projects/reforma/reforma/hooks/useScrollVisibility.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/utils/consts/scroll.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/utils/enums/scroll.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const useScrollVisibility = ({ threshold = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_DEFAULT_THRESHOLD"], direction = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDirection"].DOWN })=>{
    const [isSticky, setIsSticky] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollDirection, setScrollDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsSticky(window.scrollY > threshold);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let lastScrollY = window.scrollY;
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            const currentDirecrtion = currentScrollY > lastScrollY ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDirection"].DOWN : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDirection"].UP;
            setScrollDirection(currentDirecrtion);
            setScrollY(currentScrollY);
            let shouldBeVisible = false;
            switch(direction){
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDirection"].UP:
                    shouldBeVisible = currentScrollY < threshold;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDirection"].DOWN:
                    shouldBeVisible = currentScrollY > threshold;
                    break;
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDirection"].BOTH:
                    shouldBeVisible = currentScrollY > threshold || currentScrollY < threshold;
                    break;
                default:
                    shouldBeVisible = false;
            }
            setIsSticky(shouldBeVisible);
            lastScrollY = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll);
    }, [
        threshold,
        direction
    ]);
    return {
        isSticky,
        scrollY,
        scrollDirection,
        isScrollingUp: scrollDirection === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDirection"].UP,
        isScrollingDown: scrollDirection === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDirection"].DOWN
    };
};
const __TURBOPACK__default__export__ = useScrollVisibility;
}),
"[project]/Desktop/projects/reforma/reforma/components/UI/Logo/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
const Logo = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        src: "/images/logo.jpg",
        alt: "Logo",
        width: 200,
        height: 200,
        className: "",
        priority: true
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/UI/Logo/index.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Logo;
}),
"[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Desktop/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Layout$2f$Navigation$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/Layout/Navigation/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$hooks$2f$useScrollVisibility$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/hooks/useScrollVisibility.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/utils/consts/scroll.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$UI$2f$Logo$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/UI/Logo/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/utils/consts/paths.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/utils/enums/scroll.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const HeaderDesktop = ()=>{
    const { isSticky } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$hooks$2f$useScrollVisibility$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
        threshold: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SCROLL_HEADER_THRESHOLD"],
        direction: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$scroll$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDirection"].DOWN
    });
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHomePage = pathname === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$paths$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOME_PATH"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("hidden md:flex top-0 left-0 w-full py-3 px-4 z-header items-center h-20 bg-black", {}),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$UI$2f$Logo$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Desktop/index.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Desktop/index.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Layout$2f$Navigation$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isSticky: isSticky
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Desktop/index.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Desktop/index.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HeaderDesktop;
}),
"[project]/Desktop/projects/reforma/reforma/components/UI/Blackout/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
const Blackout = ({ isActive, onClick, onKeyDown })=>{
    if (!isActive) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-0 bottom-0 left-0 right-0 w-full h-hull bg-black/60 z-blackout",
        onClick: onClick,
        onKeyDown: onKeyDown,
        tabIndex: 0,
        role: "button",
        "aria-label": "Close modal by clicking on the backdrop"
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/UI/Blackout/index.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Blackout;
}),
"[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const initialState = {
    isNavigationOpen: false,
    handlerCloseNavigation: ()=>{}
};
const HeaderMobileContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(initialState);
const __TURBOPACK__default__export__ = HeaderMobileContext;
}),
"[project]/Desktop/projects/reforma/reforma/utils/consts/keys.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTER_KEY",
    ()=>ENTER_KEY,
    "ESCAPE_KEY",
    ()=>ESCAPE_KEY,
    "SPACE_KEY",
    ()=>SPACE_KEY
]);
const ENTER_KEY = 'Enter';
const ESCAPE_KEY = 'Escape';
const SPACE_KEY = ' ';
}),
"[project]/Desktop/projects/reforma/reforma/components/Layout/NavigationMobile/Header/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Layout$2f$Headers$2f$Mobile$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/utils/consts/keys.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const NavigationMobileHeader = ()=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('mobileMenu');
    const { handlerCloseNavigation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Layout$2f$Headers$2f$Mobile$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const onClickClose = ()=>{
        handlerCloseNavigation();
    };
    const onKeyDownClose = (event)=>{
        if (event.key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTER_KEY"]) {
            handlerCloseNavigation();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-4 py-4 flex items-center border-b border-white-primary dark:border-black-primary",
        children: [
            "MagdaFotografka.pl",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "ml-auto mr-2",
                "aria-label": t('closeMenu'),
                onKeyDown: onKeyDownClose,
                onClick: onClickClose,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faClose"],
                    className: "text-xl text-white"
                }, void 0, false, {
                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/NavigationMobile/Header/index.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/NavigationMobile/Header/index.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/NavigationMobile/Header/index.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NavigationMobileHeader;
}),
"[project]/Desktop/projects/reforma/reforma/components/Layout/NavigationMobile/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$config$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/config/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Layout$2f$Headers$2f$Mobile$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Layout$2f$NavigationMobile$2f$Header$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/Layout/NavigationMobile/Header/index.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
const NavigationMobile = ()=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('navigation');
    const { isNavigationOpen, handlerCloseNavigation } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Layout$2f$Headers$2f$Mobile$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    const navigationItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$config$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNavigationItems"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("fixed top-0 left-0 w-[80%] h-[100vh] bg-white dark:bg-black-secondary z-mobile-navigation transition-transform duration-300 ease-in-out", {
            "translate-x-0": isNavigationOpen,
            "-translate-x-full": !isNavigationOpen
        }),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-purple-primary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Layout$2f$NavigationMobile$2f$Header$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/NavigationMobile/index.tsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/NavigationMobile/index.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col gap-2 px-2 space-y-1 mt-4",
                children: navigationItems.map((item)=>{
                    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("px-3 pt-1 pb-4 text-sm border-b border-neutral-300 dark:border-neutral-800", {
                            'text-purple-primary dark:text-purple-300 font-semibold': isActive,
                            'text-black-primary dark:text-white-primary hover:underline': !isActive
                        }),
                        onClick: handlerCloseNavigation,
                        children: t(item.key)
                    }, item.key, false, {
                        fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/NavigationMobile/index.tsx",
                        lineNumber: 35,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/NavigationMobile/index.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/NavigationMobile/index.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NavigationMobile;
}),
"[project]/Desktop/projects/reforma/reforma/utils/helpers/onBodyNoScrollable.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onBodyNoScrollable",
    ()=>onBodyNoScrollable
]);
const onBodyNoScrollable = (isActive)=>{
    if (isActive) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
};
}),
"[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$UI$2f$Blackout$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/UI/Blackout/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Layout$2f$NavigationMobile$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/Layout/NavigationMobile/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Layout$2f$Headers$2f$Mobile$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$helpers$2f$onBodyNoScrollable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/utils/helpers/onBodyNoScrollable.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const HeaderMobile = ()=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('mobileHeader');
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isNavigationOpen, setIsNavigationOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearchActive, setIsSearchActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchButtonLabel = isSearchActive ? t('closeSearch') : t('openSearch');
    const navButtonLabel = isNavigationOpen ? t('closeMenu') : t('openMenu');
    const handlerOpenNavigation = ()=>{
        setIsNavigationOpen(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$helpers$2f$onBodyNoScrollable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onBodyNoScrollable"])(true);
    };
    const handlerCloseNavigation = ()=>{
        setIsNavigationOpen(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$helpers$2f$onBodyNoScrollable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onBodyNoScrollable"])(false);
    };
    const handleOpenSearch = ()=>{
        setIsSearchActive((prevState)=>!prevState);
        if (isSearchActive) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$helpers$2f$onBodyNoScrollable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onBodyNoScrollable"])(false);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$helpers$2f$onBodyNoScrollable$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onBodyNoScrollable"])(true);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsSearchActive(false);
    }, [
        pathname
    ]);
    const valueContext = {
        isNavigationOpen,
        handlerCloseNavigation
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Layout$2f$Headers$2f$Mobile$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Provider, {
            value: valueContext,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex md:hidden w-full h-[60px] sticky top-0 left-0 z-mobile-header  bg-[rgba(77,19,109,0.9)] items-center px-4 shadow-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "ml-auto mr-2 text-white",
                            "aria-label": searchButtonLabel,
                            onClick: handleOpenSearch,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: isSearchActive ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faClose"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faSearch"]
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/index.tsx",
                                lineNumber: 56,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/index.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "ml-4 text-white",
                            "aria-label": navButtonLabel,
                            onClick: handlerOpenNavigation,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faNavicon"]
                            }, void 0, false, {
                                fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/index.tsx",
                                lineNumber: 59,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/index.tsx",
                            lineNumber: 58,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/index.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Layout$2f$NavigationMobile$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/index.tsx",
                    lineNumber: 62,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$UI$2f$Blackout$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    isActive: isNavigationOpen,
                    onClick: handlerCloseNavigation
                }, void 0, false, {
                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/index.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/projects/reforma/reforma/components/Layout/Headers/Mobile/index.tsx",
            lineNumber: 52,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
const __TURBOPACK__default__export__ = HeaderMobile;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5f832129._.js.map
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__edb0ec61._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Desktop/projects/reforma/reforma/utils/consts/locale.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LANGUAGE",
    ()=>DEFAULT_LANGUAGE,
    "LANGUAGES",
    ()=>LANGUAGES
]);
const LANGUAGES = [
    'en',
    'pl'
];
const DEFAULT_LANGUAGE = 'pl';
}),
"[project]/Desktop/projects/reforma/reforma/utils/consts/routes.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOCALIZED_ROUTES",
    ()=>LOCALIZED_ROUTES,
    "PATHS",
    ()=>PATHS,
    "REDIRECT_MAP",
    ()=>REDIRECT_MAP,
    "ROUTES",
    ()=>ROUTES
]);
const ROUTES = {
    HOME: '/',
    CONTACT: '/contact',
    ABOUT: '/about-me',
    OFFER: '/offer',
    PORTFOLIO: '/portfolio'
};
const PATHS = {
    HOME: '/',
    // English
    CONTACT_EN: '/contact',
    ABOUT_EN: '/about',
    PORTFOLIO_EN: '/portfolio',
    OFFER_EN: '/offer',
    // Polish
    CONTACT_PL: '/kontakt',
    ABOUT_PL: '/o-mnie',
    OFFER_PL: '/oferta',
    PORTFOLIO_PL: '/portfolio'
};
const LOCALIZED_ROUTES = {
    [ROUTES.HOME]: PATHS.HOME,
    [ROUTES.CONTACT]: {
        en: PATHS.CONTACT_EN,
        pl: PATHS.CONTACT_PL
    },
    [ROUTES.ABOUT]: {
        en: PATHS.ABOUT_EN,
        pl: PATHS.ABOUT_PL
    },
    [ROUTES.OFFER]: {
        en: PATHS.OFFER_EN,
        pl: PATHS.OFFER_PL
    },
    [ROUTES.PORTFOLIO]: {
        en: PATHS.PORTFOLIO_EN,
        pl: PATHS.PORTFOLIO_PL
    }
};
const REDIRECT_MAP = {
    // PL to EN
    [`/en${PATHS.CONTACT_PL}`]: `/${PATHS.CONTACT_EN}`,
    [`/en${PATHS.ABOUT_PL}`]: `/${PATHS.ABOUT_EN}`,
    [`/en${PATHS.OFFER_PL}`]: `/${PATHS.OFFER_EN}`,
    [`/en${PATHS.PORTFOLIO_PL}`]: `/${PATHS.PORTFOLIO_EN}`,
    // EN to PL
    [`/pl${PATHS.CONTACT_EN}`]: `/pl${PATHS.CONTACT_PL}`,
    [`/pl${PATHS.ABOUT_EN}`]: `/pl${PATHS.ABOUT_PL}`,
    [`/pl${PATHS.PORTFOLIO_EN}`]: `/pl${PATHS.PORTFOLIO_PL}`,
    [`/pl${PATHS.OFFER_EN}`]: `/pl${PATHS.OFFER_PL}`,
    [`/pl${PATHS.PORTFOLIO_EN}`]: `/pl${PATHS.PORTFOLIO_PL}`
};
}),
"[project]/Desktop/projects/reforma/reforma/lib/middlewares/intl.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleLocaleDetection",
    ()=>handleLocaleDetection,
    "intlMiddleware",
    ()=>intlMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$locale$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/utils/consts/locale.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/utils/consts/routes.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next-intl/dist/esm/development/middleware/middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
;
;
;
const locales = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$locale$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LANGUAGES"];
const defaultLocale = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$locale$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"];
const intlMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$locale$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["LANGUAGES"],
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$locale$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["DEFAULT_LANGUAGE"],
    localePrefix: "as-needed"
});
function handleLocaleDetection(request) {
    const { pathname } = request.nextUrl;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["REDIRECT_MAP"][pathname]) {
        const redirectUrl = new URL(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["REDIRECT_MAP"][pathname], request.url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl);
    }
    if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.startsWith("/static") || pathname.includes(".")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    return null;
}
}),
"[project]/Desktop/projects/reforma/reforma/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$lib$2f$middlewares$2f$intl$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/lib/middlewares/intl.ts [middleware-edge] (ecmascript)");
;
function middleware(request) {
    const detectionResponse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$lib$2f$middlewares$2f$intl$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["handleLocaleDetection"])(request);
    if (detectionResponse) return detectionResponse;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$lib$2f$middlewares$2f$intl$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["intlMiddleware"])(request);
}
const config = {
    matcher: [
        '/',
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__edb0ec61._.js.map
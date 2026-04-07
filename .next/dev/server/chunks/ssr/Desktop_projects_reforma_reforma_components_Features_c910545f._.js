module.exports = [
"[project]/Desktop/projects/reforma/reforma/components/Features/Dropdown/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const Dropdown = ({ childrenTitle, childrenBody, isDefaultOpened = false })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isDefaultOpened);
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("cursor-pointer p-3 flex items-center rounded-lg transition duration-600 border border-gray-200 dark:border-neutral-900", {
                    "bg-gray-200 dark:bg-neutral-800 text-black-primary dark:text-white-primary": isOpen,
                    "bg-white dark:bg-neutral-950 hover:bg-white-tertiary dark:hover:bg-black-tertiary text-black-primary dark:text-white-primary": !isOpen
                }),
                onClick: toggleDropdown,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: childrenTitle
                    }, void 0, false, {
                        fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Dropdown/index.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["faChevronDown"],
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("ml-auto mr-4 transition duration-500", {
                            "rotate-180": isOpen
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Dropdown/index.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Dropdown/index.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: childrenBody
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Dropdown/index.tsx",
                lineNumber: 33,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Dropdown;
}),
"[project]/Desktop/projects/reforma/reforma/components/Features/Breadcrumb/index.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const Breadcrumb = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranslations"])('commons');
    const formatSegmentToTitle = (segment)=>{
        return segment.replace(/-/g, ' ').replace(/\b\w/g, (letter)=>letter.toUpperCase());
    };
    const segments = pathname.split('/').filter(Boolean).filter((seg)=>seg !== locale);
    let href = '';
    const breadcrumbItems = [
        {
            label: t('home'),
            href: '/',
            active: false
        },
        ...segments.map((segment, idx)=>{
            href += `/${segment}`;
            return {
                label: formatSegmentToTitle(segment),
                href: idx === segments.length - 1 ? '' : href,
                active: idx === segments.length - 1
            };
        })
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex items-center space-x-1 px-2 md:px-4 py-4 md:py-3 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-900 overflow-x-auto",
        "aria-label": "Breadcrumb",
        children: breadcrumbItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    index > 0 && item.label !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-1 md:mx-2 w-3 h-3 text-gray-400 text-xs",
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Breadcrumb/index.tsx",
                        lineNumber: 41,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    item.active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sky-600 dark:text-sky-400 font-semibold flex items-center text-xs md:text-sm",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Breadcrumb/index.tsx",
                        lineNumber: 45,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        className: "hover:text-sky-600 dark:hover:text-sky-400 transition-colors duration-200 flex items-center text-xs md:text-sm",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Breadcrumb/index.tsx",
                        lineNumber: 49,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Breadcrumb/index.tsx",
                lineNumber: 39,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Breadcrumb/index.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Breadcrumb;
}),
];

//# sourceMappingURL=Desktop_projects_reforma_reforma_components_Features_c910545f._.js.map
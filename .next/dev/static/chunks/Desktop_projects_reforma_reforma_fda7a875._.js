(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/projects/reforma/reforma/components/Features/Slider/hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useDetectVisibility = (carouselRef)=>{
    _s();
    const [visibility, setVisibility] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        firstChildVisible: false,
        lastChildVisible: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDetectVisibility.useEffect": ()=>{
            if (!carouselRef.current) {
                return;
            }
            ;
            const observerOptions = {
                root: carouselRef.current,
                threshold: 0.9
            };
            const firstChild = carouselRef.current.firstElementChild;
            const lastChild = carouselRef.current.lastElementChild;
            const observerCallback = {
                "useDetectVisibility.useEffect.observerCallback": (entries)=>{
                    entries.forEach({
                        "useDetectVisibility.useEffect.observerCallback": (entry)=>{
                            if (entry.target === firstChild) {
                                setVisibility({
                                    "useDetectVisibility.useEffect.observerCallback": (prev)=>({
                                            ...prev,
                                            firstChildVisible: entry.isIntersecting
                                        })
                                }["useDetectVisibility.useEffect.observerCallback"]);
                            } else if (entry.target === lastChild) {
                                setVisibility({
                                    "useDetectVisibility.useEffect.observerCallback": (prev)=>({
                                            ...prev,
                                            lastChildVisible: entry.isIntersecting
                                        })
                                }["useDetectVisibility.useEffect.observerCallback"]);
                            }
                        }
                    }["useDetectVisibility.useEffect.observerCallback"]);
                }
            }["useDetectVisibility.useEffect.observerCallback"];
            const observer = new IntersectionObserver(observerCallback, observerOptions);
            if (firstChild) {
                observer.observe(firstChild);
            }
            if (lastChild) {
                observer.observe(lastChild);
            }
            return ({
                "useDetectVisibility.useEffect": ()=>{
                    if (firstChild) {
                        observer.unobserve(firstChild);
                    }
                    if (lastChild) {
                        observer.unobserve(lastChild);
                    }
                }
            })["useDetectVisibility.useEffect"];
        }
    }["useDetectVisibility.useEffect"], [
        carouselRef
    ]);
    return visibility;
};
_s(useDetectVisibility, "Vc8UhKAL5uTqrrVO6mWlQBzBas4=");
const __TURBOPACK__default__export__ = useDetectVisibility;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/reforma/reforma/components/UI/Arrows/ButtonLeft/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ButtonArrowLeft = ({ size, arrowClasses, isVisible, onPrev })=>{
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])('buttons');
    if (!isVisible) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('left-2', arrowClasses),
        onClick: onPrev,
        "aria-label": t('previous'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faArrowLeft"],
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-black-tertiary", size)
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/reforma/reforma/components/UI/Arrows/ButtonLeft/index.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/UI/Arrows/ButtonLeft/index.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ButtonArrowLeft, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = ButtonArrowLeft;
const __TURBOPACK__default__export__ = ButtonArrowLeft;
var _c;
__turbopack_context__.k.register(_c, "ButtonArrowLeft");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/reforma/reforma/components/UI/Arrows/ButtonRight/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ButtonArrowRight = ({ size, arrowClasses, isVisible, onNext })=>{
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])('buttons');
    if (!isVisible) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('right-2', arrowClasses),
        "aria-label": t('next'),
        onClick: onNext,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faArrowRight"],
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-black-tertiary", size)
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/reforma/reforma/components/UI/Arrows/ButtonRight/index.tsx",
            lineNumber: 25,
            columnNumber: 14
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/UI/Arrows/ButtonRight/index.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ButtonArrowRight, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = ButtonArrowRight;
const __TURBOPACK__default__export__ = ButtonArrowRight;
var _c;
__turbopack_context__.k.register(_c, "ButtonArrowRight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/reforma/reforma/components/Features/Slider/Slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$UI$2f$Arrows$2f$ButtonLeft$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/UI/Arrows/ButtonLeft/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$UI$2f$Arrows$2f$ButtonRight$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/UI/Arrows/ButtonRight/index.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const Slider = ({ children, isLeftArrowVisible, isRightArrowVisible, arrowClasses, sliderRef, sliderContainerClasses, onNext, onPrev })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$UI$2f$Arrows$2f$ButtonLeft$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "text-md",
                isVisible: isLeftArrowVisible,
                arrowClasses: arrowClasses,
                onPrev: onPrev
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Slider/Slider.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$UI$2f$Arrows$2f$ButtonRight$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                size: "text-md",
                isVisible: isRightArrowVisible,
                arrowClasses: arrowClasses,
                onNext: onNext
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Slider/Slider.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(sliderContainerClasses),
                ref: sliderRef,
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Slider/Slider.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Slider/Slider.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c = Slider;
const __TURBOPACK__default__export__ = Slider;
var _c;
__turbopack_context__.k.register(_c, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/reforma/reforma/components/Features/Slider/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Features$2f$Slider$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/Features/Slider/hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Features$2f$Slider$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/Features/Slider/Slider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SliderContainer = ({ sliderContainerClasses, children })=>{
    _s();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { firstChildVisible, lastChildVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Features$2f$Slider$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(sliderRef);
    const scrollBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SliderContainer.useCallback[scrollBy]": (val)=>{
            const scrollWidth = sliderRef?.current?.children[0].scrollWidth;
            const left = val * scrollWidth;
            sliderRef?.current?.scrollBy({
                left,
                behavior: 'smooth'
            });
        }
    }["SliderContainer.useCallback[scrollBy]"], []);
    const onNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SliderContainer.useCallback[onNext]": (e)=>{
            e.preventDefault();
            scrollBy(1);
        }
    }["SliderContainer.useCallback[onNext]"], [
        scrollBy
    ]);
    const onPrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SliderContainer.useCallback[onPrev]": (e)=>{
            e.preventDefault();
            scrollBy(-1);
        }
    }["SliderContainer.useCallback[onPrev]"], [
        scrollBy
    ]);
    const props = {
        children,
        sliderRef,
        isLeftArrowVisible: !firstChildVisible,
        isRightArrowVisible: !lastChildVisible,
        arrowClasses: 'absolute top-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-black size-10 cursor-pointer transition duration-400 shadow-xl z-10',
        sliderContainerClasses,
        onNext,
        onPrev
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Features$2f$Slider$2f$Slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Slider/index.tsx",
        lineNumber: 49,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SliderContainer, "mLtP92rsr1fbauwVrv/0TXgKOwA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Features$2f$Slider$2f$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = SliderContainer;
const __TURBOPACK__default__export__ = SliderContainer;
var _c;
__turbopack_context__.k.register(_c, "SliderContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/reforma/reforma/components/Features/Opinions/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Features$2f$Slider$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/components/Features/Slider/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/free-solid-svg-icons/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const data = [
    {
        author: "Adam",
        content: "Dobry masaż, głębokich tkanek, komfortowa atmosfera",
        source: "",
        slug: "adam-dobra-masaz"
    },
    {
        author: "Natalia",
        content: "Bardzo polecam Pana Mateusza, po jednym masażu poczułam ulgę oraz puściły mnie całe napięcia mięśniowe.",
        source: "",
        slug: "natalia-bardzo-polecam-pana-mateusza"
    },
    {
        author: "Karolina",
        content: "Jestem bardzo zadowolona z usług p. Mateusza. To profesjonalista w swoim fachu! Każdy ruch jest celowany dokładnie w miejsce które jest bolesne. Mnie masaże p. Mateusza 	postawiły na przysłowiowe nogi po okresie wzmożonej pracy zawodowej, gdzie miałam już problemy nie tylko z kręgosłupem (praca siedząca) ale także z początkiem cieśni nadgarstka. Dzięki regularnym mocnym masażom spięcia puściły i przestałam mieć dolegliwości bólowe i mrowienia. Jak dla mnie ten Pan czyni cuda! ",
        source: "",
        slug: "karolina-jestem-bardzo-zadowolona-z-uslug-p-mateusza"
    },
    {
        author: "Aleksandara",
        content: "Masaż przyniósł mi upragnioną ulgę i odprężenie. Długi czasem walczyłam ze spięciem i w końcu po tej wizycie poczułam ulgę. Czułam się zaopiekowana - każdy ruch był przemyślany i dobrany pod konkretny problem. Polecam serdecznie",
        source: "",
        slug: "aleksandra-masaz-przyniosl-mi-upragniona-ulge-i-odprezenie"
    },
    {
        author: "Krysiek",
        content: "Polecam serdecznie pana Mateusza",
        source: "",
        slug: "krysiek-polecam-serdecznie-pana-mateusza"
    },
    {
        author: "Martyna",
        content: "Bardzo duża ulga dla pleców i profesjonalne podejście! Polecam!",
        source: "",
        slug: "martyna-bardzo-duza-ulga-dla-plecow-i-profesjonalne-podejscie-polecam"
    },
    {
        author: "Anna",
        content: "Polecam z całego serca. Dziękuje za pomoc.nMasaż wykonany profesjonalnie. Po jednym masażu puściło mi napięcie mięśniowe w okolicach karku, szczękościsk oraz spięcie między łopatkamiĺ",
        source: "",
        slug: "anna-polecam-z-calego-serca-dziekuje-za-pomoc-masaz-wykonany-profesjonalnie"
    },
    {
        author: "Paweł",
        content: "Masaż u Mateusza to natychmiastowa ulga dla ciała i duszy:) polecam serdecznie",
        source: "",
        slug: "pawel-masaz-u-mateusza-to-natychmiastowa-ulga-dla-ciala-i-duszy-polecam-serdecznie"
    }
];
const Opinions = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-4 md:py-20 px-4 md:px-0 bg-gray-200 dark:bg-neutral-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto md:w-[80%]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-3xl font-bold",
                    children: "Opinie"
                }, void 0, false, {
                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Opinions/index.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 mb-4 text-xs",
                    children: "Sprawdź, co mówią o mnie klienci"
                }, void 0, false, {
                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Opinions/index.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$components$2f$Features$2f$Slider$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    sliderContainerClasses: "flex justify-start items-start w-full lg:w-full overflow-x-scroll hide-scrollbar snap-x snap-start gap-4 mx-auto",
                    children: data.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("border border-gray-300 dark:border-gray-950 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 shrink-0 w-[400px] p-8 h-[300px] overflow-y-auto bg-white dark:bg-black", {
                                'snap-start': index === 0,
                                'snap-end': index === data.length - 1
                            }),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faQuoteLeft"],
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-black dark:text-white w-3 h-3")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Opinions/index.tsx",
                                    lineNumber: 73,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    className: "text-black dark:text-white italic text-sm px-2",
                                    children: item.content
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Opinions/index.tsx",
                                    lineNumber: 74,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$free$2d$solid$2d$svg$2d$icons$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["faQuoteRight"],
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("text-black dark:text-white w-3 h-3")
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Opinions/index.tsx",
                                    lineNumber: 75,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-semibold mt-4 text-right text-black dark:text-white",
                                    children: item.author
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Opinions/index.tsx",
                                    lineNumber: 76,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, item.slug, true, {
                            fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Opinions/index.tsx",
                            lineNumber: 69,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Opinions/index.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Opinions/index.tsx",
            lineNumber: 63,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/Features/Opinions/index.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Opinions;
const __TURBOPACK__default__export__ = Opinions;
var _c;
__turbopack_context__.k.register(_c, "Opinions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/reforma/reforma/utils/enums/links.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinksStyleType",
    ()=>LinksStyleType
]);
var LinksStyleType = /*#__PURE__*/ function(LinksStyleType) {
    LinksStyleType["primary"] = "primary";
    LinksStyleType["secondary"] = "secondary";
    return LinksStyleType;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/reforma/reforma/components/UI/LinkHome/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/utils/enums/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const LinkHome = ({ href, arialLabel, type, wrapperStyle, children })=>{
    _s();
    const style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LinkHome.useMemo[style]": ()=>{
            switch(type){
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinksStyleType"].primary:
                    return 'text-white bg-sky-600 hover:bg-sky-500';
                case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$enums$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinksStyleType"].secondary:
                    return 'text-gray-700 bg-gray-200 hover:bg-gray-400';
                default:
                    return '';
            }
        }
    }["LinkHome.useMemo[style]"], [
        type
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("w-full flex justify-center items-center", wrapperStyle),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            "aria-label": arialLabel,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('px-6 py-2 rounded-xl text-sm font-semibold transition duration-600 ease-in-out uppercase flex items-center justify-center gap-2', style),
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/projects/reforma/reforma/components/UI/LinkHome/index.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/projects/reforma/reforma/components/UI/LinkHome/index.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LinkHome, "03TOej/Atx47IHUj0GasUXSIbAc=");
_c = LinkHome;
const __TURBOPACK__default__export__ = LinkHome;
var _c;
__turbopack_context__.k.register(_c, "LinkHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/projects/reforma/reforma/components/UI/Video/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/@fortawesome/react-fontawesome/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/utils/consts/keys.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const VidePlayer = ({ autoPlay, muted, loop, playsInline, srcVideo, hasIconsPlayStop = false, classNameVideo })=>{
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const handleVideoClick = ()=>{
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };
    const handleKeyDownVideo = (e)=>{
        if (e.key === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$utils$2f$consts$2f$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPACE_KEY"]) {
            handleVideoClick();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: autoPlay,
                muted: muted,
                loop: loop,
                playsInline: playsInline,
                src: srcVideo,
                className: classNameVideo
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/UI/Video/index.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            hasIconsPlayStop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white-main p-4 flex-center size-20 text-2xl rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-400",
                onClick: handleVideoClick,
                onKeyDown: handleKeyDownVideo,
                onTouchStartCapture: handleVideoClick,
                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                    icon: "stop",
                    className: "size-10"
                }, void 0, false, {
                    fileName: "[project]/Desktop/projects/reforma/reforma/components/UI/Video/index.tsx",
                    lineNumber: 65,
                    columnNumber: 29
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f40$fortawesome$2f$react$2d$fontawesome$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FontAwesomeIcon"], {
                    icon: "play",
                    className: "size-10"
                }, void 0, false, {
                    fileName: "[project]/Desktop/projects/reforma/reforma/components/UI/Video/index.tsx",
                    lineNumber: 65,
                    columnNumber: 83
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/projects/reforma/reforma/components/UI/Video/index.tsx",
                lineNumber: 59,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(VidePlayer, "9pOH48xZeyeRaYey3cHpvK78R9c=");
_c = VidePlayer;
const __TURBOPACK__default__export__ = VidePlayer;
var _c;
__turbopack_context__.k.register(_c, "VidePlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_projects_reforma_reforma_fda7a875._.js.map
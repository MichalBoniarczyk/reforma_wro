module.exports = [
"[project]/Desktop/projects/reforma/reforma/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Desktop/projects/reforma/reforma/node_modules/next-intl/dist/esm/development/server/react-server/getTranslations.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getTranslations_default
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next-intl/dist/esm/development/server/react-server/getConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getServerTranslator$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next-intl/dist/esm/development/server/react-server/getServerTranslator.js [app-rsc] (ecmascript)");
;
;
;
// Maintainer note: `getTranslations` has two different call signatures.
// We need to define these with function overloads, otherwise TypeScript
// messes up the return type.
// Call signature 1: `getTranslations(namespace)`
// Call signature 2: `getTranslations({locale, namespace})`
// Implementation
async function getTranslations(namespaceOrOpts) {
    let namespace;
    let locale;
    if (typeof namespaceOrOpts === 'string') {
        namespace = namespaceOrOpts;
    } else if (namespaceOrOpts) {
        locale = namespaceOrOpts.locale;
        namespace = namespaceOrOpts.namespace;
    }
    const config = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(locale);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getServerTranslator$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(config, namespace);
}
var getTranslations_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(getTranslations);
;
}),
"[project]/Desktop/projects/reforma/reforma/node_modules/next-intl/dist/esm/development/server/react-server/getTranslations.js [app-rsc] (ecmascript) <export default as getTranslations>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTranslations",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$projects$2f$reforma$2f$reforma$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/projects/reforma/reforma/node_modules/next-intl/dist/esm/development/server/react-server/getTranslations.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=32005_6f0c70c5._.js.map
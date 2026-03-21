(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/cart-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const addItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[addItem]": (item)=>{
            setItems({
                "CartProvider.useCallback[addItem]": (prev)=>{
                    const existing = prev.find({
                        "CartProvider.useCallback[addItem].existing": (i)=>i.id === item.id
                    }["CartProvider.useCallback[addItem].existing"]);
                    if (existing) {
                        return prev.map({
                            "CartProvider.useCallback[addItem]": (i)=>i.id === item.id ? {
                                    ...i,
                                    quantity: i.quantity + 1
                                } : i
                        }["CartProvider.useCallback[addItem]"]);
                    }
                    return [
                        ...prev,
                        {
                            ...item,
                            quantity: 1
                        }
                    ];
                }
            }["CartProvider.useCallback[addItem]"]);
            setIsCartOpen(true);
        }
    }["CartProvider.useCallback[addItem]"], []);
    const removeItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[removeItem]": (id)=>{
            setItems({
                "CartProvider.useCallback[removeItem]": (prev)=>prev.filter({
                        "CartProvider.useCallback[removeItem]": (i)=>i.id !== id
                    }["CartProvider.useCallback[removeItem]"])
            }["CartProvider.useCallback[removeItem]"]);
        }
    }["CartProvider.useCallback[removeItem]"], []);
    const updateQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[updateQuantity]": (id, quantity)=>{
            if (quantity <= 0) {
                removeItem(id);
                return;
            }
            setItems({
                "CartProvider.useCallback[updateQuantity]": (prev)=>prev.map({
                        "CartProvider.useCallback[updateQuantity]": (i)=>i.id === id ? {
                                ...i,
                                quantity
                            } : i
                    }["CartProvider.useCallback[updateQuantity]"])
            }["CartProvider.useCallback[updateQuantity]"]);
        }
    }["CartProvider.useCallback[updateQuantity]"], [
        removeItem
    ]);
    const clearCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CartProvider.useCallback[clearCart]": ()=>{
            setItems([]);
        }
    }["CartProvider.useCallback[clearCart]"], []);
    const totalItems = items.reduce((sum, item)=>sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item)=>sum + item.price * item.quantity, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            items,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            totalItems,
            totalPrice,
            isCartOpen,
            setIsCartOpen
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/cart-context.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(CartProvider, "Zo+1AEs5RmP+ljCQZldwuuivFC4=");
_c = CartProvider;
function useCart() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/currency-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CurrencyProvider",
    ()=>CurrencyProvider,
    "regions",
    ()=>regions,
    "useCurrency",
    ()=>useCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const exchangeRates = {
    USD: 1,
    MXN: 17.50,
    EUR: 0.92
};
const regionToCurrency = {
    USA: 'USD',
    MX: 'MXN',
    LATAM: 'MXN',
    EU: 'EUR'
};
const currencySymbols = {
    USD: '$',
    MXN: '$',
    EUR: '€'
};
const CurrencyContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CurrencyProvider({ children }) {
    _s();
    const [region, setRegionState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('LATAM');
    const currency = regionToCurrency[region];
    const exchangeRate = exchangeRates[currency];
    const setRegion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CurrencyProvider.useCallback[setRegion]": (newRegion)=>{
            setRegionState(newRegion);
        }
    }["CurrencyProvider.useCallback[setRegion]"], []);
    const convertPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CurrencyProvider.useCallback[convertPrice]": (priceUSD)=>{
            return priceUSD * exchangeRate;
        }
    }["CurrencyProvider.useCallback[convertPrice]"], [
        exchangeRate
    ]);
    const formatPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CurrencyProvider.useCallback[formatPrice]": (priceUSD)=>{
            const converted = convertPrice(priceUSD);
            const symbol = currencySymbols[currency];
            if (currency === 'MXN') {
                return `${symbol}${converted.toFixed(2)} MXN`;
            }
            if (currency === 'EUR') {
                return `${converted.toFixed(2)}${symbol}`;
            }
            return `${symbol}${converted.toFixed(2)}`;
        }
    }["CurrencyProvider.useCallback[formatPrice]"], [
        currency,
        convertPrice
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyContext.Provider, {
        value: {
            region,
            currency,
            exchangeRate,
            setRegion,
            formatPrice,
            convertPrice
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/currency-context.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(CurrencyProvider, "yoioAYlJ6bkFO1ZJldYUiFZSFZA=");
_c = CurrencyProvider;
function useCurrency() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
}
_s1(useCurrency, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const regions = [
    {
        id: 'USA',
        name: 'Estados Unidos',
        flag: '🇺🇸'
    },
    {
        id: 'MX',
        name: 'México',
        flag: '🇲🇽'
    },
    {
        id: 'LATAM',
        name: 'Latinoamérica',
        flag: '🌎'
    },
    {
        id: 'EU',
        name: 'Europa',
        flag: '🇪🇺'
    }
];
var _c;
__turbopack_context__.k.register(_c, "CurrencyProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/theme-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const defaultValue = {
    theme: 'dark',
    toggleTheme: ()=>{}
};
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultValue);
function ThemeProvider({ children }) {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            setMounted(true);
            const saved = localStorage.getItem('randomplay-theme');
            if (saved) {
                setTheme(saved);
            }
        }
    }["ThemeProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            if (mounted) {
                localStorage.setItem('randomplay-theme', theme);
                document.documentElement.classList.toggle('light', theme === 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
            }
        }
    }["ThemeProvider.useEffect"], [
        theme,
        mounted
    ]);
    const toggleTheme = ()=>{
        setTheme((prev)=>prev === 'dark' ? 'light' : 'dark');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/theme-context.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "TYAL0cX8zabvZV1Dr1hQyVjLqVw=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
}
_s1(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/game-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "games",
    ()=>games,
    "genres",
    ()=>genres,
    "platforms",
    ()=>platforms,
    "productTypes",
    ()=>productTypes,
    "regions",
    ()=>regions
]);
const games = [
    {
        id: '1',
        title: 'Elden Ring',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg',
        price: 35.99,
        originalPrice: 59.99,
        discount: 40,
        platform: [
            'steam',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'RPG',
            'Action'
        ],
        type: 'game',
        rating: 4.9,
        inStock: true
    },
    {
        id: '2',
        title: 'Cyberpunk 2077',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
        price: 29.99,
        originalPrice: 59.99,
        discount: 50,
        platform: [
            'steam',
            'gog'
        ],
        region: 'Global',
        genre: [
            'RPG',
            'Action'
        ],
        type: 'game',
        rating: 4.5,
        inStock: true
    },
    {
        id: '3',
        title: 'Red Dead Redemption 2',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
        price: 23.99,
        originalPrice: 59.99,
        discount: 60,
        platform: [
            'steam',
            'rockstar'
        ],
        region: 'Global',
        genre: [
            'Action',
            'Adventure'
        ],
        type: 'game',
        rating: 4.8,
        inStock: true
    },
    {
        id: '4',
        title: 'God of War Ragnarok',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2322010/header.jpg',
        price: 49.99,
        originalPrice: 69.99,
        discount: 29,
        platform: [
            'playstation',
            'steam'
        ],
        region: 'Global',
        genre: [
            'Action',
            'Adventure'
        ],
        type: 'game',
        rating: 4.9,
        inStock: true
    },
    {
        id: '5',
        title: 'Hogwarts Legacy',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg',
        price: 39.99,
        originalPrice: 59.99,
        discount: 33,
        platform: [
            'steam',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'RPG',
            'Adventure'
        ],
        type: 'game',
        rating: 4.6,
        inStock: true
    },
    {
        id: '6',
        title: 'EA Sports FC 24',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg',
        price: 34.99,
        originalPrice: 69.99,
        discount: 50,
        platform: [
            'steam',
            'origin',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'Sports'
        ],
        type: 'game',
        rating: 4.2,
        inStock: true
    },
    {
        id: '7',
        title: 'Grand Theft Auto V',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg',
        price: 14.99,
        originalPrice: 29.99,
        discount: 50,
        platform: [
            'steam',
            'rockstar'
        ],
        region: 'Global',
        genre: [
            'Action',
            'Adventure'
        ],
        type: 'game',
        rating: 4.7,
        inStock: true
    },
    {
        id: '8',
        title: 'The Witcher 3: Wild Hunt GOTY',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg',
        price: 9.99,
        originalPrice: 49.99,
        discount: 80,
        platform: [
            'steam',
            'gog'
        ],
        region: 'Global',
        genre: [
            'RPG',
            'Action'
        ],
        type: 'game',
        rating: 4.9,
        inStock: true
    },
    {
        id: '9',
        title: 'Baldurs Gate 3',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
        price: 49.99,
        originalPrice: 59.99,
        discount: 17,
        platform: [
            'steam',
            'gog'
        ],
        region: 'Global',
        genre: [
            'RPG',
            'Strategy'
        ],
        type: 'game',
        rating: 4.9,
        inStock: true
    },
    {
        id: '10',
        title: 'Starfield',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg',
        price: 44.99,
        originalPrice: 69.99,
        discount: 36,
        platform: [
            'steam',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'RPG',
            'Sci-Fi'
        ],
        type: 'game',
        rating: 4.3,
        inStock: true
    },
    {
        id: '11',
        title: 'Diablo IV',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2344520/header.jpg',
        price: 39.99,
        originalPrice: 69.99,
        discount: 43,
        platform: [
            'battlenet',
            'playstation',
            'xbox',
            'steam'
        ],
        region: 'Global',
        genre: [
            'RPG',
            'Action'
        ],
        type: 'game',
        rating: 4.4,
        inStock: true
    },
    {
        id: '12',
        title: 'Call of Duty: Modern Warfare III',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2519060/header.jpg',
        price: 49.99,
        originalPrice: 69.99,
        discount: 29,
        platform: [
            'steam',
            'battlenet',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'FPS',
            'Action'
        ],
        type: 'game',
        rating: 4.1,
        inStock: true
    },
    {
        id: '13',
        title: 'Assassins Creed Mirage',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2248450/header.jpg',
        price: 34.99,
        originalPrice: 49.99,
        discount: 30,
        platform: [
            'ubisoft',
            'steam'
        ],
        region: 'Global',
        genre: [
            'Action',
            'Adventure'
        ],
        type: 'game',
        rating: 4.2,
        inStock: true
    },
    {
        id: '14',
        title: 'Horizon Forbidden West',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2420110/header.jpg',
        price: 44.99,
        originalPrice: 59.99,
        discount: 25,
        platform: [
            'steam',
            'playstation'
        ],
        region: 'Global',
        genre: [
            'Action',
            'Adventure',
            'RPG'
        ],
        type: 'game',
        rating: 4.7,
        inStock: true
    },
    {
        id: '15',
        title: 'Spider-Man Remastered',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg',
        price: 39.99,
        originalPrice: 59.99,
        discount: 33,
        platform: [
            'steam',
            'playstation'
        ],
        region: 'Global',
        genre: [
            'Action',
            'Adventure'
        ],
        type: 'game',
        rating: 4.8,
        inStock: true
    },
    {
        id: '16',
        title: 'Spider-Man: Miles Morales',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1817190/header.jpg',
        price: 34.99,
        originalPrice: 49.99,
        discount: 30,
        platform: [
            'steam',
            'playstation'
        ],
        region: 'Global',
        genre: [
            'Action',
            'Adventure'
        ],
        type: 'game',
        rating: 4.7,
        inStock: true
    },
    {
        id: '17',
        title: 'Resident Evil 4 Remake',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg',
        price: 39.99,
        originalPrice: 59.99,
        discount: 33,
        platform: [
            'steam',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'Horror',
            'Action'
        ],
        type: 'game',
        rating: 4.8,
        inStock: true
    },
    {
        id: '18',
        title: 'Dead Space Remake',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1693980/header.jpg',
        price: 29.99,
        originalPrice: 59.99,
        discount: 50,
        platform: [
            'steam',
            'origin',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'Horror',
            'Action'
        ],
        type: 'game',
        rating: 4.6,
        inStock: true
    },
    {
        id: '19',
        title: 'Monster Hunter Rise',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/header.jpg',
        price: 19.99,
        originalPrice: 39.99,
        discount: 50,
        platform: [
            'steam',
            'nintendo'
        ],
        region: 'Global',
        genre: [
            'Action',
            'RPG'
        ],
        type: 'game',
        rating: 4.5,
        inStock: true
    },
    {
        id: '20',
        title: 'Sekiro: Shadows Die Twice',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/814380/header.jpg',
        price: 29.99,
        originalPrice: 59.99,
        discount: 50,
        platform: [
            'steam',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'Action',
            'Adventure'
        ],
        type: 'game',
        rating: 4.8,
        inStock: true
    },
    {
        id: '21',
        title: 'Dark Souls III',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/374320/header.jpg',
        price: 14.99,
        originalPrice: 59.99,
        discount: 75,
        platform: [
            'steam',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'RPG',
            'Action'
        ],
        type: 'game',
        rating: 4.8,
        inStock: true
    },
    {
        id: '22',
        title: 'Hades',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg',
        price: 12.49,
        originalPrice: 24.99,
        discount: 50,
        platform: [
            'steam',
            'nintendo',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'Action',
            'RPG'
        ],
        type: 'game',
        rating: 4.9,
        inStock: true
    },
    {
        id: '23',
        title: 'Hollow Knight',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg',
        price: 7.49,
        originalPrice: 14.99,
        discount: 50,
        platform: [
            'steam',
            'nintendo',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'Action',
            'Adventure'
        ],
        type: 'game',
        rating: 4.9,
        inStock: true
    },
    {
        id: '24',
        title: 'Stardew Valley',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg',
        price: 10.04,
        originalPrice: 14.99,
        discount: 33,
        platform: [
            'steam',
            'nintendo',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'Simulation',
            'RPG'
        ],
        type: 'game',
        rating: 4.9,
        inStock: true
    },
    {
        id: '25',
        title: 'Minecraft Java & Bedrock',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1672970/header.jpg',
        price: 19.99,
        originalPrice: 29.99,
        discount: 33,
        platform: [
            'steam'
        ],
        region: 'Global',
        genre: [
            'Simulation',
            'Adventure'
        ],
        type: 'game',
        rating: 4.8,
        inStock: true
    },
    {
        id: '26',
        title: 'Palworld',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg',
        price: 22.49,
        originalPrice: 29.99,
        discount: 25,
        platform: [
            'steam',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'Adventure',
            'Simulation'
        ],
        type: 'game',
        rating: 4.4,
        inStock: true
    },
    {
        id: '27',
        title: 'Lethal Company',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1966720/header.jpg',
        price: 7.99,
        originalPrice: 9.99,
        discount: 20,
        platform: [
            'steam'
        ],
        region: 'Global',
        genre: [
            'Horror',
            'Action'
        ],
        type: 'game',
        rating: 4.7,
        inStock: true
    },
    {
        id: '28',
        title: 'Lies of P',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1627720/header.jpg',
        price: 35.99,
        originalPrice: 59.99,
        discount: 40,
        platform: [
            'steam',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'Action',
            'RPG'
        ],
        type: 'game',
        rating: 4.6,
        inStock: true
    },
    {
        id: '29',
        title: 'Alan Wake 2',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2098510/header.jpg',
        price: 44.99,
        originalPrice: 59.99,
        discount: 25,
        platform: [
            'steam',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'Horror',
            'Action'
        ],
        type: 'game',
        rating: 4.7,
        inStock: true
    },
    {
        id: '30',
        title: 'The Last of Us Part I',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/header.jpg',
        price: 39.99,
        originalPrice: 59.99,
        discount: 33,
        platform: [
            'steam',
            'playstation'
        ],
        region: 'Global',
        genre: [
            'Action',
            'Adventure'
        ],
        type: 'game',
        rating: 4.8,
        inStock: true
    },
    // Gift Cards
    {
        id: '31',
        title: 'Steam Gift Card $50',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/9300/header.jpg',
        price: 47.50,
        originalPrice: 50.00,
        discount: 5,
        platform: [
            'steam'
        ],
        region: 'USA',
        genre: [],
        type: 'giftcard',
        rating: 5.0,
        inStock: true
    },
    {
        id: '32',
        title: 'Xbox Game Pass Ultimate 3 Meses',
        image: 'https://store-images.s-microsoft.com/image/apps.10842.14486854268142852.1fcb9593-97c0-4172-bb93-655017cee024.08a4f1d5-6f56-44e3-8ee7-9b454fe5bd79',
        price: 32.99,
        originalPrice: 44.99,
        discount: 27,
        platform: [
            'xbox'
        ],
        region: 'Global',
        genre: [],
        type: 'giftcard',
        rating: 4.8,
        inStock: true
    },
    {
        id: '33',
        title: 'PlayStation Plus Premium 12 Meses',
        image: 'https://store-images.s-microsoft.com/image/apps.55986.13729179547764290.de7b700f-8ae8-4c2f-938b-0f3af8ee01dd.e1a61c68-80eb-4f6f-b0b3-c3ed50e6aa44',
        price: 89.99,
        originalPrice: 119.99,
        discount: 25,
        platform: [
            'playstation'
        ],
        region: 'USA',
        genre: [],
        type: 'giftcard',
        rating: 4.7,
        inStock: true
    },
    {
        id: '34',
        title: 'Nintendo eShop $50',
        image: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/merchandising/curated%20list/Games/Nintendo%20Switch%20Games',
        price: 47.50,
        originalPrice: 50.00,
        discount: 5,
        platform: [
            'nintendo'
        ],
        region: 'USA',
        genre: [],
        type: 'giftcard',
        rating: 4.9,
        inStock: true
    },
    // DLC
    {
        id: '35',
        title: 'Elden Ring: Shadow of the Erdtree',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2778580/header.jpg',
        price: 34.99,
        originalPrice: 39.99,
        discount: 13,
        platform: [
            'steam',
            'playstation',
            'xbox'
        ],
        region: 'Global',
        genre: [
            'RPG',
            'Action'
        ],
        type: 'dlc',
        rating: 4.8,
        inStock: true
    },
    {
        id: '36',
        title: 'Cyberpunk 2077: Phantom Liberty',
        image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2138330/header.jpg',
        price: 24.99,
        originalPrice: 29.99,
        discount: 17,
        platform: [
            'steam',
            'gog'
        ],
        region: 'Global',
        genre: [
            'RPG',
            'Action'
        ],
        type: 'dlc',
        rating: 4.7,
        inStock: true
    }
];
const platforms = [
    {
        id: 'steam',
        name: 'Steam',
        icon: 'steam'
    },
    {
        id: 'playstation',
        name: 'PlayStation',
        icon: 'playstation'
    },
    {
        id: 'xbox',
        name: 'Xbox',
        icon: 'xbox'
    },
    {
        id: 'nintendo',
        name: 'Nintendo',
        icon: 'nintendo'
    },
    {
        id: 'origin',
        name: 'EA App',
        icon: 'origin'
    },
    {
        id: 'ubisoft',
        name: 'Ubisoft',
        icon: 'ubisoft'
    },
    {
        id: 'gog',
        name: 'GOG',
        icon: 'gog'
    },
    {
        id: 'battlenet',
        name: 'Battle.net',
        icon: 'battlenet'
    },
    {
        id: 'rockstar',
        name: 'Rockstar',
        icon: 'rockstar'
    }
];
const genres = [
    'Action',
    'Adventure',
    'RPG',
    'FPS',
    'Sports',
    'Strategy',
    'Simulation',
    'Horror',
    'Racing',
    'Sci-Fi'
];
const regions = [
    'Global',
    'USA',
    'Europe',
    'LATAM',
    'Asia'
];
const productTypes = [
    {
        id: 'game',
        name: 'Juegos'
    },
    {
        id: 'dlc',
        name: 'DLC'
    },
    {
        id: 'giftcard',
        name: 'Tarjetas de Regalo'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/currency-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Header({ onSearch, searchQuery, onLoginClick }) {
    _s();
    const { totalItems, setIsCartOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { region, setRegion, currency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"])();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRegionOpen, setIsRegionOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentRegion = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["regions"].find((r)=>r.id === region);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("sticky top-0 z-50 border-b transition-colors", theme === 'dark' ? "bg-[#101014] border-[#2d2d35]" : "bg-white border-gray-200"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between h-16 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#00e5ff] bg-clip-text text-transparent",
                                children: "RANDOMPLAY"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 text-sm transition-colors rounded-lg", theme === 'dark' ? "text-[#9ca3af] hover:text-white hover:bg-[#1a1a1f]" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"),
                                    children: "Juegos"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-2 text-sm transition-colors rounded-lg", theme === 'dark' ? "text-[#9ca3af] hover:text-white hover:bg-[#1a1a1f]" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"),
                                    children: "DLC"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#nuestra-historia",
                                    className: "px-3 py-2 text-sm text-[#7c3aed] hover:text-[#9d6eff] transition-colors rounded-lg hover:bg-[#7c3aed]/10 font-medium",
                                    children: "Nosotros"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex flex-1 max-w-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400")
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Buscar juegos, DLC, tarjetas de regalo...",
                                        value: searchQuery,
                                        onChange: (e)=>onSearch(e.target.value),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full pl-10 pr-4 py-2.5 border rounded-lg transition-all focus:outline-none focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed]", theme === 'dark' ? "bg-[#1a1a1f] border-[#2d2d35] text-white placeholder-[#9ca3af]" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400")
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleTheme,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2.5 transition-colors rounded-lg", theme === 'dark' ? "text-[#9ca3af] hover:text-white hover:bg-[#1a1a1f]" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"),
                                    "aria-label": "Toggle theme",
                                    children: theme === 'dark' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                        lineNumber: 99,
                                        columnNumber: 35
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                        lineNumber: 99,
                                        columnNumber: 65
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative hidden sm:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsRegionOpen(!isRegionOpen),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1.5 px-3 py-2 text-sm transition-colors rounded-lg", theme === 'dark' ? "text-[#9ca3af] hover:text-white hover:bg-[#1a1a1f]" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg",
                                                    children: currentRegion?.flag
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: currency
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 transition-transform", isRegionOpen && "rotate-180")
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        isRegionOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-full right-0 mt-2 w-48 border rounded-lg shadow-xl animate-fade-in overflow-hidden", theme === 'dark' ? "bg-[#1a1a1f] border-[#2d2d35]" : "bg-white border-gray-200"),
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["regions"].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setRegion(r.id);
                                                        setIsRegionOpen(false);
                                                    },
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full px-4 py-2.5 text-left text-sm transition-colors flex items-center gap-3", theme === 'dark' ? "hover:bg-[#252529]" : "hover:bg-gray-50", region === r.id ? "text-[#7c3aed]" : theme === 'dark' ? "text-white" : "text-gray-900"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg",
                                                            children: r.flag
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: r.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, r.id, true, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative p-2.5 transition-colors rounded-lg", theme === 'dark' ? "text-[#9ca3af] hover:text-white hover:bg-[#1a1a1f]" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsCartOpen(true),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative p-2.5 transition-colors rounded-lg", theme === 'dark' ? "text-[#9ca3af] hover:text-white hover:bg-[#1a1a1f]" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -top-0.5 -right-0.5 min-w-[20px] h-5 flex items-center justify-center px-1.5 text-xs font-bold text-white bg-[#7c3aed] rounded-full animate-pulse-glow",
                                            children: totalItems
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onLoginClick,
                                    className: "hidden sm:flex items-center gap-2 px-4 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Entrar"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("md:hidden p-2.5 transition-colors", theme === 'dark' ? "text-[#9ca3af] hover:text-white" : "text-gray-500 hover:text-gray-900"),
                                    children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                        lineNumber: 195,
                                        columnNumber: 35
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                        lineNumber: 195,
                                        columnNumber: 63
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden pb-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400")
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Buscar juegos...",
                                value: searchQuery,
                                onChange: (e)=>onSearch(e.target.value),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full pl-10 pr-4 py-2.5 border rounded-lg transition-all focus:outline-none focus:border-[#7c3aed]", theme === 'dark' ? "bg-[#1a1a1f] border-[#2d2d35] text-white placeholder-[#9ca3af]" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400")
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("md:hidden border-t py-4 animate-fade-in", theme === 'dark' ? "border-[#2d2d35]" : "border-gray-200"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 rounded-lg", theme === 'dark' ? "text-white hover:bg-[#1a1a1f]" : "text-gray-900 hover:bg-gray-100"),
                                children: "Juegos"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                lineNumber: 229,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 rounded-lg", theme === 'dark' ? "text-white hover:bg-[#1a1a1f]" : "text-gray-900 hover:bg-gray-100"),
                                children: "DLC"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 rounded-lg", theme === 'dark' ? "text-white hover:bg-[#1a1a1f]" : "text-gray-900 hover:bg-gray-100"),
                                children: "Tarjetas de Regalo"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#nuestra-historia",
                                className: "px-4 py-2 text-[#7c3aed] hover:bg-[#7c3aed]/10 rounded-lg font-medium",
                                children: "Nuestra Historia"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                lineNumber: 241,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onLoginClick,
                                className: "mx-4 mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium rounded-lg transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Iniciar Sesion"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                lineNumber: 244,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t mt-2 pt-2", theme === 'dark' ? "border-[#2d2d35]" : "border-gray-200"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2 text-sm", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"),
                                        children: "Region y Moneda"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                        lineNumber: 256,
                                        columnNumber: 17
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["regions"].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setRegion(r.id),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full px-4 py-2 text-left rounded-lg flex items-center gap-3", region === r.id ? "text-[#7c3aed] bg-[#7c3aed]/10" : theme === 'dark' ? "text-white" : "text-gray-900"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg",
                                                    children: r.flag
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: r.name
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, r.id, true, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                                lineNumber: 252,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                        lineNumber: 228,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
                    lineNumber: 224,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Header, "f8zdtV4NgLzIDW7vzRIA/tWZ/8E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroCarousel",
    ()=>HeroCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const slides = [
    {
        id: 1,
        title: 'OFERTAS DE PRIMAVERA',
        subtitle: 'Hasta 80% de descuento en los mejores juegos',
        discount: '-80%',
        image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&h=400&fit=crop',
        bgColor: 'from-[#7c3aed]/30 to-[#101014]'
    },
    {
        id: 2,
        title: 'LANZAMIENTOS 2024',
        subtitle: 'Pre-ordena los juegos mas esperados',
        discount: 'PRE-ORDER',
        image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=400&fit=crop',
        bgColor: 'from-[#00e5ff]/30 to-[#101014]'
    },
    {
        id: 3,
        title: 'TARJETAS DE REGALO',
        subtitle: 'Steam, PlayStation, Xbox y mas',
        discount: '-5%',
        image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=1200&h=400&fit=crop',
        bgColor: 'from-[#10b981]/30 to-[#101014]'
    },
    {
        id: 4,
        title: 'GAME PASS ULTIMATE',
        subtitle: 'Acceso a cientos de juegos por un precio increible',
        discount: '-27%',
        image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=1200&h=400&fit=crop',
        bgColor: 'from-[#ef4444]/30 to-[#101014]'
    }
];
function HeroCarousel() {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoPlaying, setIsAutoPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const nextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroCarousel.useCallback[nextSlide]": ()=>{
            setCurrentSlide({
                "HeroCarousel.useCallback[nextSlide]": (prev)=>(prev + 1) % slides.length
            }["HeroCarousel.useCallback[nextSlide]"]);
        }
    }["HeroCarousel.useCallback[nextSlide]"], []);
    const prevSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeroCarousel.useCallback[prevSlide]": ()=>{
            setCurrentSlide({
                "HeroCarousel.useCallback[prevSlide]": (prev)=>(prev - 1 + slides.length) % slides.length
            }["HeroCarousel.useCallback[prevSlide]"]);
        }
    }["HeroCarousel.useCallback[prevSlide]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroCarousel.useEffect": ()=>{
            if (!isAutoPlaying) return;
            const interval = setInterval(nextSlide, 5000);
            return ({
                "HeroCarousel.useEffect": ()=>clearInterval(interval)
            })["HeroCarousel.useEffect"];
        }
    }["HeroCarousel.useEffect"], [
        isAutoPlaying,
        nextSlide
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-xl",
        onMouseEnter: ()=>setIsAutoPlaying(false),
        onMouseLeave: ()=>setIsAutoPlaying(true),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full transition-transform duration-500 ease-out",
                style: {
                    transform: `translateX(-${currentSlide * 100}%)`
                },
                children: slides.map((slide)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-shrink-0 w-full h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-cover bg-center",
                                style: {
                                    backgroundImage: `url(${slide.image})`
                                }
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 bg-gradient-to-r", slide.bgColor)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-full flex flex-col justify-end p-6 sm:p-8 md:p-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block px-3 py-1 mb-3 text-sm font-bold text-white bg-[#ef4444] rounded-md",
                                            children: slide.discount
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2",
                                            children: slide.title
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base md:text-lg text-[#9ca3af] mb-4",
                                            children: slide.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-6 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors",
                                            children: "Ver Ofertas"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, slide.id, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: prevSlide,
                className: "absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors",
                "aria-label": "Slide anterior",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: nextSlide,
                className: "absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors",
                "aria-label": "Siguiente slide",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2",
                children: slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentSlide(index),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 rounded-full transition-all", currentSlide === index ? "w-6 bg-[#7c3aed]" : "bg-white/50 hover:bg-white/70"),
                        "aria-label": `Ir al slide ${index + 1}`
                    }, index, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(HeroCarousel, "h5y3tuPzyI3RMnQiCr76xAM6qY4=");
_c = HeroCarousel;
var _c;
__turbopack_context__.k.register(_c, "HeroCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlatformIcon",
    ()=>PlatformIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
function PlatformIcon({ platform, className }) {
    const iconClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", className);
    switch(platform.toLowerCase()){
        case 'steam':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: iconClass,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this);
        case 'playstation':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: iconClass,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.151.794-.991.636.181.76.814.76 1.505v5.876c2.441 1.193 4.362-.002 4.362-3.153 0-3.237-1.126-4.675-4.438-5.827-1.307-.448-3.728-1.186-5.391-1.502h-.002zm4.656 16.242l6.296-2.275c.715-.258.826-.625.246-.818-.586-.192-1.637-.139-2.357.123l-4.205 1.5v-2.385l.24-.085s1.201-.42 2.913-.615c1.696-.18 3.785.029 5.437.661 1.848.601 2.041 1.472 1.576 2.072s-1.622 1.036-1.622 1.036l-8.544 3.107v-2.297l.02-.024zM1.348 18.18c-1.907-.453-2.247-1.398-1.378-1.936.803-.496 2.171-.9 2.171-.9l5.604-1.988v2.321l-4.025 1.439c-.715.257-.826.624-.246.817.585.191 1.637.138 2.357-.123l1.914-.696v2.073c-.124.021-.249.04-.376.057-1.768.236-3.651-.012-6.021-.064z"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this);
        case 'xbox':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: iconClass,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4.102 21.033C6.211 22.881 8.977 24 12 24c3.026 0 5.789-1.119 7.902-2.967 1.877-1.912-4.316-8.709-7.902-11.417-3.582 2.708-9.779 9.505-7.898 11.417zm11.16-14.406c2.5 2.961 7.484 10.313 6.076 12.912C23.056 17.036 24 14.62 24 12c0-5.29-3.438-9.79-8.205-11.387.602.49 1.203 1.359 1.467 2.014-.964.639-2 2.058-2 4zm-6.524 0c0-1.942-1.036-3.361-2-4-.266-.655-.865-1.524-1.467-2.014C.562 2.21 0 6.71 0 12c0 2.62.944 5.036 2.662 6.539-1.408-2.599 3.576-9.951 6.076-12.912z"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this);
        case 'nintendo':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: iconClass,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.176 24h5.574c2.257 0 4.104-1.847 4.104-4.104V4.104C23.854 1.847 22.007 0 19.75 0h-5.574v24zm-4.348 0V0H4.25C1.993 0 .146 1.847.146 4.104v15.792C.146 22.153 1.993 24 4.25 24h5.578zM4.75 5c1.38 0 2.5 1.12 2.5 2.5S6.13 10 4.75 10s-2.5-1.12-2.5-2.5S3.37 5 4.75 5z"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this);
        case 'origin':
        case 'ea':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: iconClass,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.243 16.021l-1.096-1.096a5.14 5.14 0 01-6.414 0l-1.096 1.096a6.664 6.664 0 008.606 0zm.728-.728a6.664 6.664 0 000-8.606l-1.096 1.096a5.14 5.14 0 010 6.414l1.096 1.096zm-9.942 0l1.096-1.096a5.14 5.14 0 010-6.414l-1.096-1.096a6.664 6.664 0 000 8.606zM12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-6.521a5.14 5.14 0 013.207 1.139l1.096-1.096a6.664 6.664 0 00-8.606 0l1.096 1.096A5.14 5.14 0 0112 6.979z"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this);
        case 'ubisoft':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: iconClass,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23.561 13.015c-.18.239-.525.338-.916.338h-.406a9.04 9.04 0 01-2.664 5.338 9.038 9.038 0 01-6.413 2.662 9.039 9.039 0 01-6.412-2.662 9.04 9.04 0 01-2.664-5.338h-.525c-.391 0-.737-.099-.917-.338-.18-.24-.12-.579.12-.878l3.123-3.871c.24-.299.63-.479 1.021-.479.39 0 .78.18 1.02.479l3.123 3.871c.24.299.3.638.12.878-.18.24-.525.338-.917.338h-.465a5.543 5.543 0 001.613 3.273 5.543 5.543 0 003.88 1.614 5.543 5.543 0 003.881-1.614 5.543 5.543 0 001.613-3.273h-.406c-.391 0-.736-.099-.916-.338-.18-.24-.12-.579.12-.878l3.122-3.871c.24-.299.63-.479 1.021-.479.39 0 .78.18 1.02.479l3.123 3.871c.24.299.3.638.12.878z"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this);
        case 'gog':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: iconClass,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zm0-16.8c-3.976 0-7.2 3.224-7.2 7.2s3.224 7.2 7.2 7.2 7.2-3.224 7.2-7.2-3.224-7.2-7.2-7.2zm0 12c-2.65 0-4.8-2.15-4.8-4.8s2.15-4.8 4.8-4.8 4.8 2.15 4.8 4.8-2.15 4.8-4.8 4.8z"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this);
        case 'battlenet':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: iconClass,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10.457 0c-1.024.256-1.763.764-2.576 1.632-1.14.892-2.22 2.66-2.724 4.428-.288 1.016-.348 1.052-.828.504-.804-.916-.912-1.076-1.38-2.012C2.565 3.792 2.3 3.504 2.012 3.46c-.228-.036-.456.112-.66.344-.348.396-.396.612-.396 1.632 0 1.656.456 3.552 1.236 5.148.408.828.408.864.06 1.2-.204.192-.384.66-.408 1.032-.024.468.048.732.288 1.032.168.216.552.492.852.624.492.216.54.276.504.624-.06.576.312 1.476.792 1.92.22.2.58.42.804.496.348.12.396.18.36.468-.06.468.204 1.128.624 1.596.192.216.576.468.852.564.456.156.504.204.504.504 0 .576.6 1.356 1.272 1.644.456.192.708.228 1.428.192.78-.036.936-.084 1.416-.408l.54-.372.444.276c.876.552 2.208.804 3.276.624 1.008-.168 1.68-.444 2.316-.936l.516-.408.6.336c1.512.84 3.276.528 3.996-.708.24-.408.264-.528.192-.924-.12-.684-.648-1.068-1.668-1.236l-.792-.132-.372-.516c-.204-.288-.444-.588-.528-.672-.144-.132-.132-.168.168-.54.492-.624.66-1.056.66-1.68 0-.54-.036-.612-.48-1.056-.264-.264-.66-.54-.888-.612-.336-.12-.384-.192-.336-.468.036-.18-.012-.564-.108-.852-.18-.552-.588-.924-1.092-.996-.24-.036-.276-.108-.276-.552 0-.684-.252-1.212-.768-1.62-.24-.18-.54-.396-.672-.48-.228-.132-.264-.228-.264-.708 0-1.272-.96-1.884-2.1-1.344-.312.144-.42.132-.78-.084-.564-.324-1.044-.396-1.596-.228-.48.144-.516.132-.948-.228-.636-.54-1.092-.66-1.788-.492z"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this);
        case 'rockstar':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: iconClass,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.971 6.816l-.857 4.063h2.57l-.856-4.063zm7.6 0l-.856 4.063h2.57l-.857-4.063zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.857 18H5.143L6.857 6h1.714l1.286 6.122L11.143 6h1.714l1.286 6.122L15.429 6h1.714l1.714 12z"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: iconClass,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this);
    }
}
_c = PlatformIcon;
var _c;
__turbopack_context__.k.register(_c, "PlatformIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/currency-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$platform$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ProductCard({ game }) {
    _s();
    const { addItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { formatPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isWishlisted, setIsWishlisted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAdding, setIsAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleAddToCart = ()=>{
        setIsAdding(true);
        addItem({
            id: game.id,
            title: game.title,
            image: game.image,
            price: game.price,
            originalPrice: game.originalPrice,
            platform: game.platform[0],
            region: game.region
        });
        setTimeout(()=>setIsAdding(false), 300);
    };
    const fallbackImage = `https://placehold.co/460x215/1a1a1f/7c3aed?text=${encodeURIComponent(game.title)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer", theme === 'dark' ? "bg-[#1a1a1f]" : "bg-white border border-gray-200", isHovered && "transform -translate-y-1 shadow-xl shadow-[#7c3aed]/10"),
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[3/4] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageError ? fallbackImage : game.image,
                        alt: game.title,
                        onError: ()=>setImageError(true),
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60", theme === 'dark' ? "from-[#1a1a1f]" : "from-white")
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    game.discount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3 px-2 py-1 bg-[#ef4444] text-white text-xs font-bold rounded",
                        children: [
                            "-",
                            game.discount,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            setIsWishlisted(!isWishlisted);
                        },
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute top-3 right-3 p-2 rounded-full transition-all", isWishlisted ? "bg-[#ef4444] text-white" : "bg-black/50 text-white hover:bg-black/70"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4", isWishlisted && "fill-current")
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-0 left-0 right-0 p-3 transform transition-all duration-300", isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                handleAddToCart();
                            },
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all", isAdding ? "bg-[#10b981] text-white" : "bg-[#7c3aed] hover:bg-[#6d28d9] text-white"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                isAdding ? 'Agregado!' : 'Agregar al carrito'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    game.platform.slice(0, 3).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$platform$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlatformIcon"], {
                                                platform: p,
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        }, p, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this)),
                                    game.platform.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"),
                                        children: [
                                            "+",
                                            game.platform.length - 3
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-xs", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    game.region
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold text-sm leading-tight mb-3 line-clamp-2 min-h-[2.5rem]", theme === 'dark' ? "text-white" : "text-gray-900"),
                        children: game.title
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-baseline gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-bold text-[#00e5ff]",
                                children: formatPrice(game.price)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            game.originalPrice > game.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm line-through", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"),
                                children: formatPrice(game.originalPrice)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(ProductCard, "PO8UNBt0PQioZ74umtWxErXdeeQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-grid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductGrid",
    ()=>ProductGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-card.tsx [app-client] (ecmascript)");
"use client";
;
;
function ProductGrid({ games }) {
    if (games.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-16 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24 h-24 mb-6 text-[#3f3f46]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-grid.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-grid.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-grid.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold text-white mb-2",
                    children: "No se encontraron resultados"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-grid.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#9ca3af] max-w-md",
                    children: "No encontramos juegos que coincidan con tu busqueda. Intenta con otros filtros o terminos de busqueda."
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-grid.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-grid.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4",
        children: games.map((game)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$product$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductCard"], {
                game: game
            }, game.id, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-grid.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-grid.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = ProductGrid;
var _c;
__turbopack_context__.k.register(_c, "ProductGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarFilters",
    ()=>SidebarFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/game-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$platform$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FilterSection({ title, children, defaultOpen = true }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-[#2d2d35] pb-4 mb-4 last:border-0 last:pb-0 last:mb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center justify-between w-full text-left mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 text-[#9ca3af] transition-transform", isOpen && "rotate-180")
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: children
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                lineNumber: 42,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(FilterSection, "QSEG/+wAbCqYSsrjeAEeSTwR0QA=");
_c = FilterSection;
function SidebarFilters({ filters, onFiltersChange, isMobileOpen, onMobileClose }) {
    const handleTypeToggle = (typeId)=>{
        const newTypes = filters.types.includes(typeId) ? filters.types.filter((t)=>t !== typeId) : [
            ...filters.types,
            typeId
        ];
        onFiltersChange({
            ...filters,
            types: newTypes
        });
    };
    const handlePlatformToggle = (platformId)=>{
        const newPlatforms = filters.platforms.includes(platformId) ? filters.platforms.filter((p)=>p !== platformId) : [
            ...filters.platforms,
            platformId
        ];
        onFiltersChange({
            ...filters,
            platforms: newPlatforms
        });
    };
    const handleGenreToggle = (genre)=>{
        const newGenres = filters.genres.includes(genre) ? filters.genres.filter((g)=>g !== genre) : [
            ...filters.genres,
            genre
        ];
        onFiltersChange({
            ...filters,
            genres: newGenres
        });
    };
    const handleRegionToggle = (region)=>{
        const newRegions = filters.regions.includes(region) ? filters.regions.filter((r)=>r !== region) : [
            ...filters.regions,
            region
        ];
        onFiltersChange({
            ...filters,
            regions: newRegions
        });
    };
    const handlePriceChange = (value, index)=>{
        const newRange = [
            ...filters.priceRange
        ];
        newRange[index] = value;
        if (index === 0 && value > newRange[1]) newRange[1] = value;
        if (index === 1 && value < newRange[0]) newRange[0] = value;
        onFiltersChange({
            ...filters,
            priceRange: newRange
        });
    };
    const clearFilters = ()=>{
        onFiltersChange({
            types: [],
            platforms: [],
            genres: [],
            regions: [],
            priceRange: [
                0,
                100
            ]
        });
    };
    const hasActiveFilters = filters.types.length > 0 || filters.platforms.length > 0 || filters.genres.length > 0 || filters.regions.length > 0 || filters.priceRange[0] > 0 || filters.priceRange[1] < 100;
    const filterContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                className: "w-5 h-5 text-[#7c3aed]"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-white",
                                children: "Filtros"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearFilters,
                        className: "text-sm text-[#7c3aed] hover:text-[#9d6aff] transition-colors",
                        children: "Limpiar todo"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                title: "Tipo de Producto",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productTypes"].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-3 cursor-pointer group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 rounded border-2 flex items-center justify-center transition-colors", filters.types.includes(type.id) ? "bg-[#7c3aed] border-[#7c3aed]" : "border-[#3f3f46] group-hover:border-[#7c3aed]"),
                                children: filters.types.includes(type.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3 h-3 text-white",
                                    viewBox: "0 0 12 12",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10 3L4.5 8.5L2 6",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                        lineNumber: 132,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-[#9ca3af] group-hover:text-white transition-colors",
                                children: type.name
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, type.id, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                title: "Plataforma",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["platforms"].map((platform)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handlePlatformToggle(platform.id),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all", filters.platforms.includes(platform.id) ? "bg-[#7c3aed] text-white" : "bg-[#252529] text-[#9ca3af] hover:bg-[#2d2d35] hover:text-white"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$platform$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlatformIcon"], {
                                    platform: platform.id,
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate",
                                    children: platform.name
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, platform.id, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                title: "Genero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genres"].map((genre)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleGenreToggle(genre),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-3 py-1.5 rounded-full text-xs font-medium transition-all", filters.genres.includes(genre) ? "bg-[#7c3aed] text-white" : "bg-[#252529] text-[#9ca3af] hover:bg-[#2d2d35] hover:text-white"),
                            children: genre
                        }, genre, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                title: "Rango de Precio",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-[#9ca3af] mb-1 block",
                                            children: "Min"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]",
                                                    children: "$"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    max: "100",
                                                    value: filters.priceRange[0],
                                                    onChange: (e)=>handlePriceChange(Number(e.target.value), 0),
                                                    className: "w-full pl-7 pr-3 py-2 bg-[#252529] border border-[#2d2d35] rounded-lg text-white text-sm focus:outline-none focus:border-[#7c3aed]"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#9ca3af] mt-5",
                                    children: "-"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-[#9ca3af] mb-1 block",
                                            children: "Max"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]",
                                                    children: "$"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: "0",
                                                    max: "100",
                                                    value: filters.priceRange[1],
                                                    onChange: (e)=>handlePriceChange(Number(e.target.value), 1),
                                                    className: "w-full pl-7 pr-3 py-2 bg-[#252529] border border-[#2d2d35] rounded-lg text-white text-sm focus:outline-none focus:border-[#7c3aed]"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative pt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: "0",
                                max: "100",
                                value: filters.priceRange[1],
                                onChange: (e)=>handlePriceChange(Number(e.target.value), 1),
                                className: "w-full h-1 bg-[#252529] rounded-lg appearance-none cursor-pointer accent-[#7c3aed]",
                                style: {
                                    background: `linear-gradient(to right, #7c3aed ${filters.priceRange[0]}%, #7c3aed ${filters.priceRange[1]}%, #252529 ${filters.priceRange[1]}%)`
                                }
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                title: "Region",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["regions"].map((region)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-3 cursor-pointer group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 rounded border-2 flex items-center justify-center transition-colors", filters.regions.includes(region) ? "bg-[#7c3aed] border-[#7c3aed]" : "border-[#3f3f46] group-hover:border-[#7c3aed]"),
                                children: filters.regions.includes(region) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3 h-3 text-white",
                                    viewBox: "0 0 12 12",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10 3L4.5 8.5L2 6",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                        lineNumber: 246,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-[#9ca3af] group-hover:text-white transition-colors",
                                children: region
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this)
                        ]
                    }, region, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hidden lg:block w-64 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-20 bg-[#1a1a1f] rounded-xl p-5 max-h-[calc(100vh-6rem)] overflow-y-auto",
                    children: filterContent
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            isMobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed inset-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                        onClick: onMobileClose
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#1a1a1f] animate-slide-in overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-0 bg-[#1a1a1f] flex items-center justify-between p-4 border-b border-[#2d2d35]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold text-white",
                                        children: "Filtros"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onMobileClose,
                                        className: "p-2 text-[#9ca3af] hover:text-white transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5",
                                children: filterContent
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky bottom-0 bg-[#1a1a1f] p-4 border-t border-[#2d2d35]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onMobileClose,
                                    className: "w-full py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors",
                                    children: "Aplicar Filtros"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                                lineNumber: 293,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                        lineNumber: 276,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx",
                lineNumber: 268,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_c1 = SidebarFilters;
var _c, _c1;
__turbopack_context__.k.register(_c, "FilterSection");
__turbopack_context__.k.register(_c1, "SidebarFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartDrawer",
    ()=>CartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/currency-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$platform$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/platform-icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CartDrawer({ onCheckout }) {
    _s();
    const { items, removeItem, updateQuantity, totalItems, totalPrice, isCartOpen, setIsCartOpen, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { formatPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"])();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    if (!isCartOpen) return null;
    const handleCheckout = ()=>{
        setIsCartOpen(false);
        onCheckout();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in",
                onClick: ()=>setIsCartOpen(false)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute right-0 top-0 bottom-0 w-full max-w-md animate-slide-in shadow-2xl flex flex-col", theme === 'dark' ? "bg-[#1a1a1f]" : "bg-white"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between p-4 border-b", theme === 'dark' ? "border-[#2d2d35]" : "border-gray-200"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        className: "w-5 h-5 text-[#7c3aed]"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-bold", theme === 'dark' ? "text-white" : "text-gray-900"),
                                        children: "Carrito"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 text-xs font-bold text-white bg-[#7c3aed] rounded-full",
                                        children: totalItems
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsCartOpen(false),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 transition-colors rounded-lg", theme === 'dark' ? "text-[#9ca3af] hover:text-white hover:bg-[#252529]" : "text-gray-400 hover:text-gray-900 hover:bg-gray-100"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4",
                        children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center h-full text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-20 h-20 mb-4", theme === 'dark' ? "text-[#3f3f46]" : "text-gray-300"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                        className: "w-full h-full"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold mb-2", theme === 'dark' ? "text-white" : "text-gray-900"),
                                    children: "Tu carrito esta vacio"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm mb-6", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"),
                                    children: "Agrega algunos juegos increibles a tu carrito"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsCartOpen(false),
                                    className: "px-6 py-2.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors",
                                    children: "Explorar Tienda"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex gap-4 p-3 rounded-xl", theme === 'dark' ? "bg-[#252529]" : "bg-gray-50"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-20 h-24 rounded-lg overflow-hidden flex-shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.image,
                                                alt: item.title,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between gap-2 mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold text-sm leading-tight line-clamp-2", theme === 'dark' ? "text-white" : "text-gray-900"),
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeItem(item.id),
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1 transition-colors flex-shrink-0", theme === 'dark' ? "text-[#9ca3af] hover:text-[#ef4444]" : "text-gray-400 hover:text-red-500"),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                            lineNumber: 122,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$platform$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlatformIcon"], {
                                                                platform: item.platform,
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"),
                                                            children: item.region
                                                        }, void 0, false, {
                                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQuantity(item.id, item.quantity - 1),
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1 rounded transition-colors", theme === 'dark' ? "text-[#9ca3af] hover:text-white hover:bg-[#3f3f46]" : "text-gray-400 hover:text-gray-900 hover:bg-gray-200"),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium w-6 text-center", theme === 'dark' ? "text-white" : "text-gray-900"),
                                                                    children: item.quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQuantity(item.id, item.quantity + 1),
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1 rounded transition-colors", theme === 'dark' ? "text-[#9ca3af] hover:text-white hover:bg-[#3f3f46]" : "text-gray-400 hover:text-gray-900 hover:bg-gray-200"),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                                        lineNumber: 173,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[#00e5ff] font-bold",
                                                                    children: formatPrice(item.price * item.quantity)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 25
                                                                }, this),
                                                                item.quantity > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-400"),
                                                                    children: [
                                                                        formatPrice(item.price),
                                                                        " c/u"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                                    lineNumber: 181,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t p-4 space-y-4", theme === 'dark' ? "border-[#2d2d35]" : "border-gray-200"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clearCart,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full py-2 text-sm transition-colors", theme === 'dark' ? "text-[#9ca3af] hover:text-[#ef4444]" : "text-gray-500 hover:text-red-500"),
                                children: "Vaciar carrito"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500",
                                        children: "Subtotal"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xl font-bold", theme === 'dark' ? "text-white" : "text-gray-900"),
                                        children: formatPrice(totalPrice)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCheckout,
                                className: "w-full py-3.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Proceder al Pago"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                        lineNumber: 230,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#00e5ff]",
                                        children: formatPrice(totalPrice)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs text-center", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"),
                                children: "Pago seguro. Entrega instantanea por email."
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(CartDrawer, "tsVPlGjGv0Xv3oqYQpLEFeWfSt8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = CartDrawer;
var _c;
__turbopack_context__.k.register(_c, "CartDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscordIcon",
    ()=>DiscordIcon,
    "FacebookIcon",
    ()=>FacebookIcon,
    "InstagramIcon",
    ()=>InstagramIcon,
    "SocialLinks",
    ()=>SocialLinks,
    "TikTokIcon",
    ()=>TikTokIcon,
    "TwitchIcon",
    ()=>TwitchIcon,
    "TwitterIcon",
    ()=>TwitterIcon,
    "YouTubeIcon",
    ()=>YouTubeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function FacebookIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", className),
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = FacebookIcon;
function InstagramIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", className),
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = InstagramIcon;
function TwitterIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", className),
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = TwitterIcon;
function TikTokIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", className),
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c3 = TikTokIcon;
function YouTubeIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", className),
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c4 = YouTubeIcon;
function DiscordIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", className),
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c5 = DiscordIcon;
function TwitchIcon({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", className),
        viewBox: "0 0 24 24",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c6 = TwitchIcon;
function SocialLinks({ className, iconClassName, variant = 'default' }) {
    const links = [
        {
            icon: FacebookIcon,
            href: "https://facebook.com/randomplay",
            label: "Facebook",
            hoverColor: "hover:bg-[#1877f2]"
        },
        {
            icon: InstagramIcon,
            href: "https://instagram.com/randomplay",
            label: "Instagram",
            hoverColor: "hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888]"
        },
        {
            icon: TwitterIcon,
            href: "https://twitter.com/randomplay",
            label: "X (Twitter)",
            hoverColor: "hover:bg-black"
        },
        {
            icon: TikTokIcon,
            href: "https://tiktok.com/@randomplay",
            label: "TikTok",
            hoverColor: "hover:bg-black"
        },
        {
            icon: YouTubeIcon,
            href: "https://youtube.com/@randomplay",
            label: "YouTube",
            hoverColor: "hover:bg-[#ff0000]"
        },
        {
            icon: DiscordIcon,
            href: "https://discord.gg/randomplay",
            label: "Discord",
            hoverColor: "hover:bg-[#5865f2]"
        },
        {
            icon: TwitchIcon,
            href: "https://twitch.tv/randomplay",
            label: "Twitch",
            hoverColor: "hover:bg-[#9146ff]"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2", className),
        children: links.map(({ icon: Icon, href, label, hoverColor })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": label,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2.5 rounded-lg transition-all duration-300", variant === 'colored' ? `bg-[#252529] text-white ${hoverColor} hover:scale-110` : "bg-[#252529] text-[#9ca3af] hover:text-white hover:bg-[#7c3aed]", iconClassName),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this)
            }, label, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c7 = SocialLinks;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "FacebookIcon");
__turbopack_context__.k.register(_c1, "InstagramIcon");
__turbopack_context__.k.register(_c2, "TwitterIcon");
__turbopack_context__.k.register(_c3, "TikTokIcon");
__turbopack_context__.k.register(_c4, "YouTubeIcon");
__turbopack_context__.k.register(_c5, "DiscordIcon");
__turbopack_context__.k.register(_c6, "TwitchIcon");
__turbopack_context__.k.register(_c7, "SocialLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$social$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function AboutSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "nuestra-historia",
        className: "relative py-20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/70 z-10"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        className: "absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                        src: "https://www.youtube.com/embed/-BXiVs8n2ek?autoplay=1&mute=1&loop=1&playlist=-BXiVs8n2ek&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1",
                        title: "Background Video",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: true
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 max-w-[1200px] mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block px-4 py-1.5 bg-[#7c3aed]/20 border border-[#7c3aed]/30 rounded-full text-[#7c3aed] text-sm font-medium mb-4",
                                children: "Conoce al Equipo"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-bold text-white mb-4",
                                children: [
                                    "Nuestra ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gradient-to-r from-[#7c3aed] to-[#00e5ff] bg-clip-text text-transparent",
                                        children: "Historia"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 29,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-[#9ca3af] max-w-2xl mx-auto",
                                children: "Una aventura que comenzo con la pasion por los videojuegos y el deseo de crear algo increible"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#1a1a1f]/90 backdrop-blur-sm border border-[#2d2d35] rounded-2xl p-8 md:p-12 mb-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row gap-8 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#00e5ff] p-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full rounded-2xl bg-[#101014] flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                                                className: "w-16 h-16 md:w-20 md:h-20 text-[#00e5ff]"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                            lineNumber: 42,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 text-center lg:text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center lg:justify-start gap-2 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    className: "w-5 h-5 text-[#7c3aed]"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#7c3aed] font-semibold",
                                                    children: "Orizaba, Veracruz"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl md:text-3xl font-bold text-white mb-4",
                                            children: "Estudiantes con una Mision"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9ca3af] leading-relaxed mb-6",
                                            children: [
                                                "Somos un grupo de estudiantes del ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-semibold",
                                                    children: "8vo semestre de la carrera de Ingenieria"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 51
                                                }, this),
                                                " en Orizaba, Veracruz. Unidos por nuestra pasion por los videojuegos, decidimos crear ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#00e5ff] font-semibold",
                                                    children: "RANDOMPLAY"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 80
                                                }, this),
                                                ", una plataforma donde los gamers puedan encontrar los mejores juegos a precios increibles."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9ca3af] leading-relaxed mb-6",
                                            children: "Cada linea de codigo, cada diseno y cada funcion de esta tienda fue creada con amor y dedicacion. Creemos que los videojuegos son mas que entretenimiento: son arte, son historias, son conexiones. Y queremos compartir esa magia contigo."
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center lg:items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-[#9ca3af]",
                                                    children: "Siguenos en redes sociales:"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$social$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLinks"], {
                                                    variant: "colored"
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group bg-[#1a1a1f]/90 backdrop-blur-sm border border-[#2d2d35] rounded-xl p-6 hover:border-[#7c3aed] transition-all duration-300 hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center mb-4 group-hover:bg-[#7c3aed]/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                            className: "w-7 h-7 text-[#7c3aed]"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-bold text-white mb-2",
                                        children: "Innovacion Estudiantil"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#9ca3af] text-sm leading-relaxed",
                                        children: "Como futuros ingenieros, aplicamos todo lo aprendido en nuestra carrera para crear una experiencia de compra unica y moderna."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group bg-[#1a1a1f]/90 backdrop-blur-sm border border-[#2d2d35] rounded-xl p-6 hover:border-[#00e5ff] transition-all duration-300 hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-xl bg-[#00e5ff]/20 flex items-center justify-center mb-4 group-hover:bg-[#00e5ff]/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-7 h-7 text-[#00e5ff]"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-bold text-white mb-2",
                                        children: "Pasion por el Gaming"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#9ca3af] text-sm leading-relaxed",
                                        children: "No solo vendemos juegos, los jugamos. Entendemos lo que los gamers buscan porque somos parte de la comunidad."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group bg-[#1a1a1f]/90 backdrop-blur-sm border border-[#2d2d35] rounded-xl p-6 hover:border-[#10b981] transition-all duration-300 hover:-translate-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 rounded-xl bg-[#10b981]/20 flex items-center justify-center mb-4 group-hover:bg-[#10b981]/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-7 h-7 text-[#10b981]"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-bold text-white mb-2",
                                        children: "Comunidad Primero"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#9ca3af] text-sm leading-relaxed",
                                        children: "Construimos RANDOMPLAY pensando en ti. Precios justos, entrega instantanea y soporte de gamers para gamers."
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#252529]/80 backdrop-blur-sm rounded-xl p-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl md:text-4xl font-bold text-[#7c3aed] mb-1",
                                        children: "8vo"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-[#9ca3af]",
                                        children: "Semestre"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#252529]/80 backdrop-blur-sm rounded-xl p-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl md:text-4xl font-bold text-[#00e5ff] mb-1",
                                        children: "100%"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-[#9ca3af]",
                                        children: "Pasion"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#252529]/80 backdrop-blur-sm rounded-xl p-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl md:text-4xl font-bold text-[#10b981] mb-1",
                                        children: "24/7"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-[#9ca3af]",
                                        children: "Gaming"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#252529]/80 backdrop-blur-sm rounded-xl p-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-1 text-3xl md:text-4xl font-bold text-white mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                className: "w-6 h-6 md:w-8 md:h-8"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "VER"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-[#9ca3af]",
                                        children: "Veracruz"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoginModal",
    ()=>LoginModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LoginModal({ isOpen, onClose }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLogin, setIsLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('main');
    if (!isOpen) return null;
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Handle login/register logic here
        console.log('Submit:', {
            email,
            password,
            isLogin
        });
    };
    const renderMainOptions = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setStep('email'),
                    className: "w-full flex items-center gap-4 p-4 bg-[#252529] dark:bg-[#252529] light:bg-gray-100 hover:bg-[#2d2d35] dark:hover:bg-[#2d2d35] light:hover:bg-gray-200 rounded-xl transition-colors group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-xl bg-[#7c3aed]/20 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                className: "w-6 h-6 text-[#7c3aed]"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 34,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-white dark:text-white light:text-gray-900",
                                    children: "Direccion de correo"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-[#9ca3af]",
                                    children: "Inicia sesion o crea una cuenta"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 39,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 37,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5 text-[#9ca3af] group-hover:text-white transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 41,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setStep('console'),
                    className: "w-full flex items-center gap-4 p-4 bg-[#252529] dark:bg-[#252529] light:bg-gray-100 hover:bg-[#2d2d35] dark:hover:bg-[#2d2d35] light:hover:bg-gray-200 rounded-xl transition-colors group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-xl bg-[#00e5ff]/20 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                                className: "w-6 h-6 text-[#00e5ff]"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 49,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-white dark:text-white light:text-gray-900",
                                    children: "Solo has jugado en consola?"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 53,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-[#9ca3af]",
                                    children: "Inicia sesion y recupera tu progreso"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 52,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5 text-[#9ca3af] group-hover:text-white transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 56,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 45,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative my-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full border-t border-[#2d2d35]"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 60,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-4 bg-[#1a1a1f] text-sm text-[#9ca3af]",
                                children: "o continua con"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 63,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 59,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex flex-col items-center gap-2 p-4 bg-[#252529] hover:bg-[#003791] rounded-xl transition-colors group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8 text-white",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M9.5 4v15.5l3.5 1V6.5l2.5-1v12.5l3.5-1.5V4.5L9.5 4zM4 15.5l3.5 1.5V7L4 8.5v7z"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-[#9ca3af] group-hover:text-white",
                                    children: "PlayStation"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 71,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex flex-col items-center gap-2 p-4 bg-[#252529] hover:bg-[#107c10] rounded-xl transition-colors group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8 text-white",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5c-2.5-2-4-4.5-4-6.5 0-1.5 1-2.5 2-2.5s2 1 2 1 1-1 2-1 2 1 2 2.5c0 2-1.5 4.5-4 6.5z"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 80,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-[#9ca3af] group-hover:text-white",
                                    children: "Xbox"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 83,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 79,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex flex-col items-center gap-2 p-4 bg-[#252529] hover:bg-[#e60012] rounded-xl transition-colors group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-8 h-8 text-white",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6V4zm-3 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm13-14h-6v16h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-[#9ca3af] group-hover:text-white",
                                    children: "Nintendo"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 87,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 69,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-6 space-y-3 border-t border-[#2d2d35] mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full flex items-center gap-3 p-3 text-[#9ca3af] hover:text-white hover:bg-[#252529] rounded-lg transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: "Tienes problemas para iniciar sesion?"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 97,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full flex items-center gap-3 p-3 text-[#9ca3af] hover:text-white hover:bg-[#252529] rounded-lg transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: "Politica de privacidad"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 103,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 101,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 96,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, this);
    const renderEmailForm = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setStep('main'),
                    className: "flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4 rotate-180"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 115,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Volver"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 116,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 111,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex bg-[#252529] rounded-lg p-1 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsLogin(true),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-2.5 rounded-md text-sm font-medium transition-colors", isLogin ? "bg-[#7c3aed] text-white" : "text-[#9ca3af] hover:text-white"),
                            children: "Iniciar Sesion"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 121,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setIsLogin(false),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex-1 py-2.5 rounded-md text-sm font-medium transition-colors", !isLogin ? "bg-[#7c3aed] text-white" : "text-[#9ca3af] hover:text-white"),
                            children: "Crear Cuenta"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 130,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 120,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-[#9ca3af] mb-2",
                                    children: "Correo electronico"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                            lineNumber: 146,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            placeholder: "tu@email.com",
                                            className: "w-full pl-12 pr-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                            lineNumber: 147,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 145,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 143,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-[#9ca3af] mb-2",
                                    children: "Contrasena"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 160,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: showPassword ? 'text' : 'password',
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            placeholder: "••••••••",
                                            className: "w-full pl-4 pr-12 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                            lineNumber: 162,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowPassword(!showPassword),
                                            className: "absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-white transition-colors",
                                            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                                lineNumber: 175,
                                                columnNumber: 31
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                                lineNumber: 175,
                                                columnNumber: 64
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                            lineNumber: 170,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 161,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 159,
                            columnNumber: 9
                        }, this),
                        !isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-[#9ca3af] mb-2",
                                    children: "Confirmar contrasena"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: showPassword ? 'text' : 'password',
                                        placeholder: "••••••••",
                                        className: "w-full pl-4 pr-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        isLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "text-sm text-[#7c3aed] hover:text-[#9d6eff] transition-colors",
                                children: "Olvidaste tu contrasena?"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "w-full py-3.5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold rounded-lg transition-colors",
                            children: isLogin ? 'Iniciar Sesion' : 'Crear Cuenta'
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 202,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 141,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
            lineNumber: 110,
            columnNumber: 5
        }, this);
    const renderConsoleOptions = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setStep('main'),
                    className: "flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4 rotate-180"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 218,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Volver"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 219,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 214,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-white mb-2",
                            children: "Recupera tu progreso"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 223,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[#9ca3af]",
                            children: "Conecta tu cuenta de consola para sincronizar tus compras"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 224,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 222,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full flex items-center gap-4 p-4 bg-[#003791] hover:bg-[#0044ad] rounded-xl transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8 text-white",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M9.5 4v15.5l3.5 1V6.5l2.5-1v12.5l3.5-1.5V4.5L9.5 4zM4 15.5l3.5 1.5V7L4 8.5v7z"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 229,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-white",
                                    children: "PlayStation Network"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 233,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-blue-200",
                                    children: "Conectar cuenta PSN"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 234,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 232,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5 text-white/70"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 236,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 228,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full flex items-center gap-4 p-4 bg-[#107c10] hover:bg-[#128c12] rounded-xl transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8 text-white",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15.5c-2.5-2-4-4.5-4-6.5 0-1.5 1-2.5 2-2.5s2 1 2 1 1-1 2-1 2 1 2 2.5c0 2-1.5 4.5-4 6.5z"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 241,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-white",
                                    children: "Red Xbox"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 245,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-green-200",
                                    children: "Conectar cuenta Xbox Live"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 246,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 244,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5 text-white/70"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 248,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 240,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full flex items-center gap-4 p-4 bg-[#e60012] hover:bg-[#ff1a1a] rounded-xl transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8 text-white",
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6V4zm-3 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm13-14h-6v16h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 253,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-white",
                                    children: "Cuenta de Nintendo"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 257,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-red-200",
                                    children: "Conectar Nintendo Account"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 258,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 256,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5 text-white/70"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                            lineNumber: 260,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                    lineNumber: 252,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
            lineNumber: 213,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-md bg-[#1a1a1f] rounded-2xl shadow-2xl animate-fade-in overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-[#2d2d35]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-white",
                                        children: step === 'main' ? 'Bienvenido a RANDOMPLAY' : step === 'email' ? isLogin ? 'Iniciar Sesion' : 'Crear Cuenta' : 'Conectar Consola'
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[#9ca3af] mt-1",
                                        children: step === 'main' ? 'Elige como quieres continuar' : step === 'email' ? 'Ingresa tus datos' : 'Selecciona tu plataforma'
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 text-[#9ca3af] hover:text-white transition-colors rounded-lg hover:bg-[#252529]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 max-h-[70vh] overflow-y-auto",
                        children: [
                            step === 'main' && renderMainOptions(),
                            step === 'email' && renderEmailForm(),
                            step === 'console' && renderConsoleOptions()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
_s(LoginModal, "+JZEa9newIGvvQuNBxlySB3hZrk=");
_c = LoginModal;
var _c;
__turbopack_context__.k.register(_c, "LoginModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckoutModal",
    ()=>CheckoutModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bitcoin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bitcoin$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/bitcoin.js [app-client] (ecmascript) <export default as Bitcoin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/currency-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function CheckoutModal({ isOpen, onClose }) {
    _s();
    const { items, totalPrice, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { formatPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"])();
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('card');
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('method');
    const [cardNumber, setCardNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [cardName, setCardName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [cardExpiry, setCardExpiry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [cardCvv, setCardCvv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    if (!isOpen) return null;
    const handlePayment = (e)=>{
        e.preventDefault();
        // Simulate payment processing
        setTimeout(()=>{
            setStep('success');
            setTimeout(()=>{
                clearCart();
                onClose();
                setStep('method');
            }, 3000);
        }, 1500);
    };
    const formatCardNumber = (value)=>{
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];
        for(let i = 0, len = match.length; i < len; i += 4){
            parts.push(match.substring(i, i + 4));
        }
        return parts.length ? parts.join(' ') : value;
    };
    const formatExpiry = (value)=>{
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (v.length >= 2) {
            return v.substring(0, 2) + '/' + v.substring(2, 4);
        }
        return v;
    };
    const renderMethodSelection = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-white mb-4",
                    children: "Selecciona tu metodo de pago"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 62,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setPaymentMethod('card');
                        setStep('details');
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all", paymentMethod === 'card' ? "border-[#7c3aed] bg-[#7c3aed]/10" : "border-[#2d2d35] bg-[#252529] hover:border-[#7c3aed]/50"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                className: "w-6 h-6 text-white"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 77,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-white",
                                    children: "Tarjeta de Credito/Debito"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-[#9ca3af]",
                                    children: "Visa, Mastercard, American Express"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 80,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5 text-[#9ca3af]"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 84,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 65,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setPaymentMethod('paypal');
                        setStep('details');
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all", paymentMethod === 'paypal' ? "border-[#00457C] bg-[#00457C]/10" : "border-[#2d2d35] bg-[#252529] hover:border-[#00457C]/50"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-xl bg-[#00457C] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                className: "w-6 h-6 text-white"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 100,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-white",
                                    children: "PayPal"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-[#9ca3af]",
                                    children: "Pago rapido y seguro"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 103,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5 text-[#9ca3af]"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 107,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 88,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setPaymentMethod('crypto');
                        setStep('details');
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all", paymentMethod === 'crypto' ? "border-[#f7931a] bg-[#f7931a]/10" : "border-[#2d2d35] bg-[#252529] hover:border-[#f7931a]/50"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-xl bg-gradient-to-br from-[#f7931a] to-[#ffb84d] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bitcoin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bitcoin$3e$__["Bitcoin"], {
                                className: "w-6 h-6 text-white"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 123,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-white",
                                    children: "Criptomonedas"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-[#9ca3af]",
                                    children: "Bitcoin, Ethereum, USDT"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 128,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 126,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5 text-[#9ca3af]"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 130,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 111,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 p-4 bg-[#252529] rounded-xl mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                            className: "w-5 h-5 text-[#10b981]"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 135,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-[#9ca3af]",
                            children: "Todos los pagos estan protegidos con encriptacion SSL"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 136,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 134,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
            lineNumber: 61,
            columnNumber: 5
        }, this);
    const renderCardForm = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handlePayment,
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setStep('method'),
                    className: "flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4 rotate-180"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 150,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Cambiar metodo"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 151,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 145,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 p-4 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-xl mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                            className: "w-5 h-5 text-[#7c3aed]"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 155,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-white font-medium",
                            children: "Pago con Tarjeta"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 156,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 154,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm text-[#9ca3af] mb-2",
                            children: "Numero de tarjeta"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 161,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: cardNumber,
                            onChange: (e)=>setCardNumber(formatCardNumber(e.target.value)),
                            placeholder: "1234 5678 9012 3456",
                            maxLength: 19,
                            className: "w-full px-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 162,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 160,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm text-[#9ca3af] mb-2",
                            children: "Nombre en la tarjeta"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 175,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: cardName,
                            onChange: (e)=>setCardName(e.target.value),
                            placeholder: "NOMBRE APELLIDO",
                            className: "w-full px-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors uppercase",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 176,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 174,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-[#9ca3af] mb-2",
                                    children: "Vencimiento"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 189,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: cardExpiry,
                                    onChange: (e)=>setCardExpiry(formatExpiry(e.target.value)),
                                    placeholder: "MM/YY",
                                    maxLength: 5,
                                    className: "w-full px-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 190,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 188,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm text-[#9ca3af] mb-2",
                                    children: "CVV"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 201,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: cardCvv,
                                    onChange: (e)=>setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 4)),
                                    placeholder: "123",
                                    maxLength: 4,
                                    className: "w-full px-4 py-3 bg-[#252529] border border-[#2d2d35] rounded-lg text-white placeholder-[#9ca3af] focus:outline-none focus:border-[#7c3aed] transition-colors",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 202,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 200,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 187,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "w-full py-4 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Pagar"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 218,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#00e5ff]",
                            children: formatPrice(totalPrice)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 219,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 214,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
            lineNumber: 144,
            columnNumber: 5
        }, this);
    const renderPayPalForm = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setStep('method'),
                    className: "flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4 rotate-180"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 231,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Cambiar metodo"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 232,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 226,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 p-4 bg-[#00457C]/20 border border-[#00457C]/30 rounded-xl mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                            className: "w-5 h-5 text-[#00457C]"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 236,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-white font-medium",
                            children: "Pago con PayPal"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 237,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 235,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 mx-auto mb-4 rounded-full bg-[#00457C] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                className: "w-10 h-10 text-white"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 241,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#9ca3af] mb-6",
                            children: "Seras redirigido a PayPal para completar tu pago de forma segura."
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 244,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setStep('success'),
                            className: "w-full py-4 bg-[#00457C] hover:bg-[#003d6b] text-white font-bold rounded-lg transition-colors",
                            children: [
                                "Continuar con PayPal - ",
                                formatPrice(totalPrice)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 247,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 240,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
            lineNumber: 225,
            columnNumber: 5
        }, this);
    const renderCryptoForm = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setStep('method'),
                    className: "flex items-center gap-2 text-[#9ca3af] hover:text-white transition-colors mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-4 h-4 rotate-180"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 264,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Cambiar metodo"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 265,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 259,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 p-4 bg-[#f7931a]/20 border border-[#f7931a]/30 rounded-xl mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bitcoin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bitcoin$3e$__["Bitcoin"], {
                            className: "w-5 h-5 text-[#f7931a]"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 269,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-white font-medium",
                            children: "Pago con Criptomonedas"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 270,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 268,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 gap-3 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-4 bg-[#252529] hover:bg-[#f7931a]/20 border border-[#2d2d35] hover:border-[#f7931a] rounded-xl transition-all flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "₿"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 275,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-[#9ca3af]",
                                    children: "Bitcoin"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 276,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 274,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-4 bg-[#252529] hover:bg-[#627eea]/20 border border-[#2d2d35] hover:border-[#627eea] rounded-xl transition-all flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "Ξ"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 279,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-[#9ca3af]",
                                    children: "Ethereum"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 280,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 278,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-4 bg-[#252529] hover:bg-[#26a17b]/20 border border-[#2d2d35] hover:border-[#26a17b] rounded-xl transition-all flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "₮"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 283,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-[#9ca3af]",
                                    children: "USDT"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 284,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 282,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 273,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setStep('success'),
                    className: "w-full py-4 bg-gradient-to-r from-[#f7931a] to-[#ffb84d] hover:opacity-90 text-white font-bold rounded-lg transition-opacity",
                    children: [
                        "Generar direccion de pago - ",
                        formatPrice(totalPrice)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 288,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
            lineNumber: 258,
            columnNumber: 5
        }, this);
    const renderSuccess = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 mx-auto mb-6 rounded-full bg-[#10b981] flex items-center justify-center animate-pulse",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "w-10 h-10 text-white"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 299,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-2xl font-bold text-white mb-2",
                    children: "Pago Exitoso!"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 302,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#9ca3af] mb-4",
                    children: "Tu pedido ha sido procesado correctamente"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 303,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2 text-[#00e5ff]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 307,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Las claves seran enviadas a tu correo"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                            lineNumber: 308,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                    lineNumber: 306,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
            lineNumber: 298,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-md bg-[#1a1a1f] rounded-2xl shadow-2xl animate-fade-in overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-[#2d2d35]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-white",
                                        children: "Checkout"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[#9ca3af] mt-1",
                                        children: [
                                            items.length,
                                            " ",
                                            items.length === 1 ? 'producto' : 'productos',
                                            " - ",
                                            formatPrice(totalPrice)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 text-[#9ca3af] hover:text-white transition-colors rounded-lg hover:bg-[#252529]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                    lineNumber: 335,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                        lineNumber: 324,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 max-h-[70vh] overflow-y-auto",
                        children: [
                            step === 'method' && renderMethodSelection(),
                            step === 'details' && paymentMethod === 'card' && renderCardForm(),
                            step === 'details' && paymentMethod === 'paypal' && renderPayPalForm(),
                            step === 'details' && paymentMethod === 'crypto' && renderCryptoForm(),
                            step === 'success' && renderSuccess()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx",
        lineNumber: 314,
        columnNumber: 5
    }, this);
}
_s(CheckoutModal, "mKYeNID4lgHrxuPyhm2l3wEY8bU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrency"]
    ];
});
_c = CheckoutModal;
var _c;
__turbopack_context__.k.register(_c, "CheckoutModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/whatsapp-button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppButton",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function WhatsAppButton() {
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTooltip, setShowTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Replace with your actual WhatsApp number
    const whatsappNumber = "5212345678901";
    const message = "Hola! Me interesa obtener mas informacion sobre los juegos de RANDOMPLAY";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-6 right-6 z-40 flex items-center gap-3",
        children: [
            showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-white rounded-lg shadow-lg p-3 animate-fade-in max-w-[200px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowTooltip(false),
                        className: "absolute -top-2 -right-2 w-5 h-5 bg-[#252529] rounded-full flex items-center justify-center text-white hover:bg-[#3f3f46] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/whatsapp-button.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/whatsapp-button.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-800 font-medium",
                        children: "Necesitas ayuda? Escribenos!"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/whatsapp-button.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/whatsapp-button.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: whatsappUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105", isHovered ? "pr-6" : ""),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                        className: "w-6 h-6 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/whatsapp-button.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden transition-all duration-300 whitespace-nowrap", isHovered ? "w-auto opacity-100" : "w-0 opacity-0"),
                        children: "WhatsApp"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/whatsapp-button.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/whatsapp-button.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/whatsapp-button.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(WhatsAppButton, "xGgOCgDPlLDl1TmCSHxllOLs/PQ=");
_c = WhatsAppButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/currency-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/theme-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/game-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$hero$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/hero-carousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$product$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/product-grid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$sidebar$2d$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/sidebar-filters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$cart$2d$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/cart-drawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$about$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/about-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$login$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/login-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$checkout$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/checkout-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$whatsapp$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/whatsapp-button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$social$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/components/social-icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
;
;
;
;
;
;
;
const initialFilters = {
    types: [],
    platforms: [],
    genres: [],
    regions: [],
    priceRange: [
        0,
        100
    ]
};
function StoreContent() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFilters);
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('relevance');
    const [isLoginOpen, setIsLoginOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const filteredGames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StoreContent.useMemo[filteredGames]": ()=>{
            let result = [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$game$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["games"]
            ];
            // Search filter
            if (searchQuery) {
                const query = searchQuery.toLowerCase();
                result = result.filter({
                    "StoreContent.useMemo[filteredGames]": (game)=>game.title.toLowerCase().includes(query) || game.genre.some({
                            "StoreContent.useMemo[filteredGames]": (g)=>g.toLowerCase().includes(query)
                        }["StoreContent.useMemo[filteredGames]"]) || game.platform.some({
                            "StoreContent.useMemo[filteredGames]": (p)=>p.toLowerCase().includes(query)
                        }["StoreContent.useMemo[filteredGames]"])
                }["StoreContent.useMemo[filteredGames]"]);
            }
            // Type filter
            if (filters.types.length > 0) {
                result = result.filter({
                    "StoreContent.useMemo[filteredGames]": (game)=>filters.types.includes(game.type)
                }["StoreContent.useMemo[filteredGames]"]);
            }
            // Platform filter
            if (filters.platforms.length > 0) {
                result = result.filter({
                    "StoreContent.useMemo[filteredGames]": (game)=>game.platform.some({
                            "StoreContent.useMemo[filteredGames]": (p)=>filters.platforms.includes(p)
                        }["StoreContent.useMemo[filteredGames]"])
                }["StoreContent.useMemo[filteredGames]"]);
            }
            // Genre filter
            if (filters.genres.length > 0) {
                result = result.filter({
                    "StoreContent.useMemo[filteredGames]": (game)=>game.genre.some({
                            "StoreContent.useMemo[filteredGames]": (g)=>filters.genres.includes(g)
                        }["StoreContent.useMemo[filteredGames]"])
                }["StoreContent.useMemo[filteredGames]"]);
            }
            // Region filter
            if (filters.regions.length > 0) {
                result = result.filter({
                    "StoreContent.useMemo[filteredGames]": (game)=>filters.regions.includes(game.region)
                }["StoreContent.useMemo[filteredGames]"]);
            }
            // Price filter
            result = result.filter({
                "StoreContent.useMemo[filteredGames]": (game)=>game.price >= filters.priceRange[0] && game.price <= filters.priceRange[1]
            }["StoreContent.useMemo[filteredGames]"]);
            // Sorting
            switch(sortBy){
                case 'price-asc':
                    result.sort({
                        "StoreContent.useMemo[filteredGames]": (a, b)=>a.price - b.price
                    }["StoreContent.useMemo[filteredGames]"]);
                    break;
                case 'price-desc':
                    result.sort({
                        "StoreContent.useMemo[filteredGames]": (a, b)=>b.price - a.price
                    }["StoreContent.useMemo[filteredGames]"]);
                    break;
                case 'discount':
                    result.sort({
                        "StoreContent.useMemo[filteredGames]": (a, b)=>b.discount - a.discount
                    }["StoreContent.useMemo[filteredGames]"]);
                    break;
                default:
                    // relevance - keep original order or sort by rating
                    result.sort({
                        "StoreContent.useMemo[filteredGames]": (a, b)=>b.rating - a.rating
                    }["StoreContent.useMemo[filteredGames]"]);
            }
            return result;
        }
    }["StoreContent.useMemo[filteredGames]"], [
        searchQuery,
        filters,
        sortBy
    ]);
    const activeFilterCount = filters.types.length + filters.platforms.length + filters.genres.length + filters.regions.length + (filters.priceRange[0] > 0 || filters.priceRange[1] < 100 ? 1 : 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-h-screen transition-colors", theme === 'dark' ? "bg-[#101014]" : "bg-gray-50"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                onSearch: setSearchQuery,
                searchQuery: searchQuery,
                onLoginClick: ()=>setIsLoginOpen(true)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-[1400px] mx-auto px-4 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$hero$2d$carousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroCarousel"], {}, void 0, false, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$sidebar$2d$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarFilters"], {
                                filters: filters,
                                onFiltersChange: setFilters,
                                isMobileOpen: isMobileFiltersOpen,
                                onMobileClose: ()=>setIsMobileFiltersOpen(false)
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-bold mb-1", theme === 'dark' ? "text-white" : "text-gray-900"),
                                                        children: "Todos los Juegos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"),
                                                        children: [
                                                            filteredGames.length,
                                                            " productos encontrados"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setIsMobileFiltersOpen(true),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("lg:hidden flex items-center gap-2 px-4 py-2.5 border rounded-lg transition-colors", theme === 'dark' ? "bg-[#1a1a1f] border-[#2d2d35] text-white hover:border-[#7c3aed]" : "bg-white border-gray-200 text-gray-900 hover:border-[#7c3aed]"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Filtros"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 19
                                                            }, this),
                                                            activeFilterCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-1.5 py-0.5 text-xs font-bold bg-[#7c3aed] text-white rounded-full",
                                                                children: activeFilterCount
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: sortBy,
                                                        onChange: (e)=>setSortBy(e.target.value),
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:border-[#7c3aed] cursor-pointer", theme === 'dark' ? "bg-[#1a1a1f] border-[#2d2d35] text-white" : "bg-white border-gray-200 text-gray-900"),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "relevance",
                                                                children: "Relevancia"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "price-asc",
                                                                children: "Precio: Menor a Mayor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "price-desc",
                                                                children: "Precio: Mayor a Menor"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "discount",
                                                                children: "Mayor Descuento"
                                                            }, void 0, false, {
                                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$product$2d$grid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProductGrid"], {
                                        games: filteredGames
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    filteredGames.length >= 18 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-8 py-3 font-semibold rounded-lg transition-colors border", theme === 'dark' ? "bg-[#252529] hover:bg-[#2d2d35] text-white border-[#2d2d35] hover:border-[#7c3aed]" : "bg-white hover:bg-gray-50 text-gray-900 border-gray-200 hover:border-[#7c3aed]"),
                                            children: "Cargar mas productos"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$about$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t mt-12", theme === 'dark' ? "border-[#2d2d35] bg-[#101014]" : "border-gray-200 bg-white"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1400px] mx-auto px-4 py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold mb-4", theme === 'dark' ? "text-white" : "text-gray-900"),
                                            children: "Productos"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-2 text-sm", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "Juegos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "DLC"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "Tarjetas de Regalo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "Game Pass"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold mb-4", theme === 'dark' ? "text-white" : "text-gray-900"),
                                            children: "Plataformas"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-2 text-sm", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "Steam"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "PlayStation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "Xbox"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "Nintendo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold mb-4", theme === 'dark' ? "text-white" : "text-gray-900"),
                                            children: "Soporte"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-2 text-sm", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "Centro de Ayuda"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "Contacto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "FAQ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "Reembolsos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold mb-4", theme === 'dark' ? "text-white" : "text-gray-900"),
                                            children: "Legal"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 265,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-2 text-sm", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "Terminos de Servicio"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "Politica de Privacidad"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#7c3aed] transition-colors",
                                                        children: "Cookies"
                                                    }, void 0, false, {
                                                        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t", theme === 'dark' ? "border-[#2d2d35]" : "border-gray-200"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center md:items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"),
                                            children: "Siguenos en redes sociales"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$social$2d$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SocialLinks"], {}, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://cdn-icons-png.flaticon.com/128/349/349221.png",
                                            alt: "Visa",
                                            className: "h-8 opacity-60 hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://cdn-icons-png.flaticon.com/128/349/349228.png",
                                            alt: "Mastercard",
                                            className: "h-8 opacity-60 hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://cdn-icons-png.flaticon.com/128/174/174861.png",
                                            alt: "PayPal",
                                            className: "h-8 opacity-60 hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://cdn-icons-png.flaticon.com/128/5968/5968260.png",
                                            alt: "Bitcoin",
                                            className: "h-8 opacity-60 hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t", theme === 'dark' ? "border-[#2d2d35]" : "border-gray-200"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#00e5ff] bg-clip-text text-transparent",
                                    children: "RANDOMPLAY"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm", theme === 'dark' ? "text-[#9ca3af]" : "text-gray-500"),
                                    children: "2024 RANDOMPLAY. Todos los derechos reservados. Hecho con amor en Orizaba, Veracruz."
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$cart$2d$drawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartDrawer"], {
                onCheckout: ()=>setIsCheckoutOpen(true)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$login$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoginModal"], {
                isOpen: isLoginOpen,
                onClose: ()=>setIsLoginOpen(false)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$checkout$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckoutModal"], {
                isOpen: isCheckoutOpen,
                onClose: ()=>setIsCheckoutOpen(false)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$components$2f$whatsapp$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppButton"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(StoreContent, "W+Mqbd6fHR1v4cuCsSrnUmC9w3Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = StoreContent;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$theme$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$currency$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CurrencyProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$lib$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Documentos$2f$ProgITSZ$2f$Lenguajes__Web$2f$randomPlay$2f$randomPlay$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StoreContent, {}, void 0, false, {
                    fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                    lineNumber: 337,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
                lineNumber: 336,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
            lineNumber: 335,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Documentos/ProgITSZ/Lenguajes Web/randomPlay/randomPlay/frontend/app/page.tsx",
        lineNumber: 334,
        columnNumber: 5
    }, this);
}
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "StoreContent");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=13466_Documentos_ProgITSZ_Lenguajes%20Web_randomPlay_randomPlay_frontend_cc79cfe2._.js.map
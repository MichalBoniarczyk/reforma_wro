'use client'
import { createContext } from "react";

type ContextProps = {
    isNavigationOpen: boolean
    handlerCloseNavigation: () => void
}

const initialState = {
    isNavigationOpen: false,
    handlerCloseNavigation: () => {},
}

const HeaderMobileContext = createContext<ContextProps>(initialState);

export default HeaderMobileContext;
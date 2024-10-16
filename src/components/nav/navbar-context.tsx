import {
    Accessor,
    createContext,
    createSignal,
    JSX,
    Setter,
    splitProps,
    useContext,
} from "solid-js";

export type InteractType = "click" | "hover";

export type NavbarContextProps = {
    topNavbarRef: Accessor<HTMLDivElement | undefined>;
    setTopNavbarRef: Setter<HTMLDivElement | undefined>;
    isMenuOpen: Accessor<boolean>;
    interactType: InteractType;
    openMenu: () => void;
    closeMenu: () => void;
    toggleMenu: () => void;
};

export type NavbarProviderProps = {
    defaultOpen?: boolean;
    children: JSX.Element;
    interactType?: InteractType;
};

export const NavbarContext = createContext<NavbarContextProps>();
export const useNavbar = () => {
    const value = useContext(NavbarContext);
    if (!value)
        throw new Error("useNavbar must be used within a NavbarProvider");
    return value;
};

export const NavbarProvider = (props: NavbarProviderProps) => {
    const [local, defaultValues] = splitProps(props, [
        "children",
        "interactType",
    ]);
    const [isMenuOpen, setIsMenuOpen] = createSignal(
        defaultValues.defaultOpen || false,
    );
    const [topNavbarRef, setTopNavbarRef] = createSignal<HTMLDivElement>();
    const contextValue: NavbarContextProps = {
        topNavbarRef: topNavbarRef,
        setTopNavbarRef: setTopNavbarRef,
        isMenuOpen: isMenuOpen,
        interactType: local?.interactType || "click",
        openMenu: () => setIsMenuOpen(true),
        closeMenu: () => setIsMenuOpen(false),
        toggleMenu: () => setIsMenuOpen(!isMenuOpen()),
    };

    return (
        <NavbarContext.Provider value={contextValue}>
            {local.children}
        </NavbarContext.Provider>
    );
};

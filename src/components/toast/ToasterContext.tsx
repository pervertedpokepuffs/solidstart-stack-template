import { createToaster, CreateToasterReturn } from "@ark-ui/solid";
import { createContext, JSX, useContext } from "solid-js";

const ToasterContext = createContext<CreateToasterReturn>();

export const useToaster = () => {
    const context = useContext(ToasterContext);
    if (!context) throw new Error("useToaster: cannot find a ToasterContext");
    return context;
};

export const ToasterProvider = (props: { children: JSX.Element }) => {
    const toaster = createToaster({
        placement: "bottom-end",
        gap: 24,
        overlap: true,
    });

    return (
        <ToasterContext.Provider value={toaster}>
            {props.children}
        </ToasterContext.Provider>
    );
};

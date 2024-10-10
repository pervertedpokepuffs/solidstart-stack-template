import { createToaster, CreateToasterReturn } from "@ark-ui/solid";
import { createContext, JSX, useContext } from "solid-js";

const defaultToaster = createToaster({
    placement: "bottom-end",
    gap: 24,
    overlap: true,
});

const ToasterContext = createContext<CreateToasterReturn>(defaultToaster);

export const useToaster = () => useContext(ToasterContext);

export const ToasterProvider = (props: { children: JSX.Element }) => {
    return (
        <ToasterContext.Provider value={defaultToaster}>
            {props.children}
        </ToasterContext.Provider>
    );
};

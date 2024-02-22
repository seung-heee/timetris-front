import { useMediaQuery } from "react-responsive"

export const SmallPC = ({ children }) => {
    const isSmallPC = useMediaQuery({
        query: "(max-width:660px)"
    });
    return <>{isSmallPC && children}</>
}

export const PC = ({ children }) => {
    const isPC = useMediaQuery({
        query: "(min-width:661px)"
    });
    return <>{isPC && children}</>
}

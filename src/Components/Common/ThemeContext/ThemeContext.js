import {createContext} from "react";

const MyThemeContext = createContext({
    theme: "light",
    setTheme: () => {}
});

export default MyThemeContext;
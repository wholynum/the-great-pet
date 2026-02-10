import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemePrivider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";

import './styles/index.scss'

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter />
            <button onClick={toggleTheme} >Toggle theme</button>
        </div>
    );
};

export default App;
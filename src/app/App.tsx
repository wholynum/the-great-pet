import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemePrivider";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";

import './styles/index.scss'
import { Sidebar } from "widgets/sidebar";
import { Suspense } from "react";

const App = () => {

    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter />
                </div>
            </Suspense>
            
        </div>
    );
};

export default App;
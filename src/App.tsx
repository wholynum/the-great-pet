import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { Link } from "react-router-dom";
import { AboutPageLazy } from "./pages/about/AboutPage.lazy";
import { MainPageLazy } from "./pages/main/MainPage.lazy";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme} >Toggle theme</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>loading</div>}>
                <Routes>
                    <Route path="/about" element={ <AboutPageLazy/> } />
                    <Route path="/" element={ <MainPageLazy/> } />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
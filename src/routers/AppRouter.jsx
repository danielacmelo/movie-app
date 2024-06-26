import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Favourites from "../pages/Favourites";
import Movie from "../pages/Movie";
import Header from "../components/Header";
import NotFound from "../pages/NotFound";
import Footer from "../components/Footer";
import { appAuthor, appTitle } from '../globals/globalVariables';
import { APP_FOLDER_NAME } from '../globals';

const AppRouter = () => (
    <BrowserRouter basename={`/${APP_FOLDER_NAME}`}>
        <div className="wrapper">
            <Header title={appTitle} />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer author={appAuthor} />
        </div>
    </BrowserRouter>
);

export default AppRouter;   

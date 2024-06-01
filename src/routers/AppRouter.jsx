import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Favourites from "../pages/Favourites";
import Movie from "../pages/Movie";
import Header from "../components/Header";
import NotFound from "../pages/NotFound";

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        {/* TODO: footer */}
    </BrowserRouter>
);

export default AppRouter;   

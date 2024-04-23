import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import TopPage from "./TopPage";
import AboutPage from "./AboutPage";
import ArticlePage from "./ArticlePage";

const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TopPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/article" element={<ArticlePage />} />
    </>
  )
);

export default routesBasic;

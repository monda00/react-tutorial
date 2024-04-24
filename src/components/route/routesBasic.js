import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RouterApp from "./RouterApp";
import TopPage from "./TopPage";
import AboutPage from "./AboutPage";
import ArticlePage from "./ArticlePage";

const routesBasic = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouterApp />}>
      <Route path="" element={<TopPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="article" element={<ArticlePage />} />
    </Route>
  )
);

export default routesBasic;

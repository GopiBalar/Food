import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import Favourite from "./page/Favourite";
import Detaile from "./page/Detaile";
import Context from "./context/Context";

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="favourite" element={<Favourite />} />
            <Route path="recipe-item/:id" element={<Detaile />} />
          </Route>
        </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default App;

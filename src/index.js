import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Page718 from "./page/Page718";
import {Header} from './App';

export {Header}

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Page718" element={<Page718 />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
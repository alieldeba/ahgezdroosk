import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { lazy, Suspense } from "react";

const App = lazy(() => import("./App"));
import Loader from "./components/Loader";

import "./styles/index.css";
import "./styles/extras.css";
import "./styles/global.css";
import "./styles/print.css";
import "./styles/scrollbar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </Router>
);

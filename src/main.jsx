import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";

const App = lazy(() => import("./App"));
import Loader from "./components/Loader";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </Router>
);

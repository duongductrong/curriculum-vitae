import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import SwitchRoutes from "./router";
import Navbar from "./views/layouts/Navbar/Navbar";
import LayoutGeneral from "./views/layouts/LayoutGeneral/LayoutGeneral";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <Router>
      <div className="App">
        <LayoutGeneral left={<Navbar />}>
          <Suspense fallback={<Loading />}>
            <SwitchRoutes />
          </Suspense>
        </LayoutGeneral>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;

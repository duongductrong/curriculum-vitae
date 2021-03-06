import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";

import SwitchRoutes from "./router";
import Navbar from "./views/layouts/Navbar/Navbar";
import LayoutGeneral from "./views/layouts/LayoutGeneral/LayoutGeneral";
import Loading from "./components/Loading/Loading";
import Button from "./components/Button/Button";
import Icon from "react-icons-kit";
import { ic_file_download } from "react-icons-kit/md/ic_file_download";
import PointerMouse from "./components/Pointer/PointerMouse";
import apiService from "./core/services/api.service";

function App() {
  useEffect(() => {
    // set title page
    document.title = "Curriculum Vitae - Duong Duc Trong";
  }, []);

  return (
    <Router>
      <div className="App">
        <LayoutGeneral left={<Navbar />}>
          <Suspense fallback={<Loading />}>
            <SwitchRoutes />

            <div className="App-cv">
              <a href="https://www.topcv.vn/download-cv?cv_id=deca51a3d9a09bfd4f9adbddd8650b1a&t=1593280690">
                <Button style={{ padding: "10px 15px" }}>
                  Download CV <Icon icon={ic_file_download} />
                </Button>
              </a>
            </div>
          </Suspense>
        </LayoutGeneral>

        <ToastContainer />
      </div>
      <PointerMouse width={30} height={30} />
    </Router>
  );
}

export default App;

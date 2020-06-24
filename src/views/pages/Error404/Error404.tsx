import React from "react";
import "./error-404.scss";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error-404">
      <h1 className="error-404__title">404 Not Found</h1>

      <div className="error-404__prev">
          <Link to="/"><Button>Back to home</Button></Link>
      </div>
    </div>
  );
}

export default Error404;

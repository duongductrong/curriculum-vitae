import React, { FC, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ErrorPage from "./views/pages/Error404/Error404";

const SwitchRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/cv" />} />
      <Route
        path="/cv"
        component={lazy(() => import("./views/pages/Home/Home"))}
        exact={true}
      />
      <Route
        path="/cv/about"
        component={lazy(() => import("./views/pages/About/About"))}
      />
      <Route
        path="/cv/skills"
        component={lazy(() => import("./views/pages/Skills/Skills"))}
      />
      <Route
        path="/cv/project"
        component={lazy(() => import("./views/pages/Portfolio/Portfolio"))}
      />
      <Route path="/cv/contact"
      component={lazy(() => import("./views/pages/Contact/Contact")) } />

      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};

export default SwitchRoutes;

import React, { FC, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ErrorPage from "./views/pages/Error404/Error404";

const SwitchRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/curriculum-vitae" />} />
      <Route
        path="/curriculum-vitae"
        component={lazy(() => import("./views/pages/Home/Home"))}
        exact={true}
      />
      <Route
        path="/curriculum-vitae/about"
        component={lazy(() => import("./views/pages/About/About"))}
      />
      <Route
        path="/curriculum-vitae/skills"
        component={lazy(() => import("./views/pages/Skills/Skills"))}
      />
      <Route
        path="/curriculum-vitae/project"
        component={lazy(() => import("./views/pages/Portfolio/Portfolio"))}
      />
      <Route path="/curriculum-vitae/contact"
      component={lazy(() => import("./views/pages/Contact/Contact")) } />

      <Route path="*" component={ErrorPage} />
    </Switch>
  );
};

export default SwitchRoutes;

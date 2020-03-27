import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";

const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;

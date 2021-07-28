import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./config";
import Footer from "../components/Footer/Footer.js";
const Router = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;

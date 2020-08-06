import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./GoodFastCheapStyles";
import GoodFastCheap from "./GoodFastCheap";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/:first-:second-:third"
            render={(routeProps) => <GoodFastCheap options={routeProps} />}
          />
          <Redirect to="/good-fast-cheap" />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "../src/components/layout/Navbar";
import Contact from "../src/components/layout/Contact";
import AlertBox from "../src/components/layout/AlertBox";

import Home from "../src/components/homePage/Home";
import Display from "../src/components/viewPage/Display";
import AdminWorks from "../src/components/adminPage/AdminWorks";
import Login from "../src/components/auth/Login";

import { ThemeProvider, Container } from "@material-ui/core";
import Theme from "./Theme";
import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Provider store={store}>
          <Router>
            <div>
              <Navbar />
              <Route exact path='/' component={Home} />
              <Switch>
                <Container maxWidth='md'>
                  <Route exact path='/admin' component={AdminWorks} />
                  <Route exact path='/auth' component={Login} />
                  <Route exact path='/work/:id' component={Display} />
                </Container>
              </Switch>
              <AlertBox />
              <Contact />
            </div>
          </Router>
        </Provider>
      </ThemeProvider>
    </div>
  );
}
export default App;

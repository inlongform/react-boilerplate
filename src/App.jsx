import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';

import NotFound from './components/not-found/NotFound';
import TopNav from './components/layout/TopNav';
import Landing from './components/layout/Landing';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <TopNav />
          <Container fluid id="main">
            <Switch>

              <Route exact path="/" component={Landing} />
              <Route exact component={NotFound} />
            </Switch>
          </Container>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

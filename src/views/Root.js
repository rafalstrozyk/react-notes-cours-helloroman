import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainTemplate from 'templates/MainTemplate';
import Twitters from 'views/Twitters';
import Articles from 'views/Articles';
import store from 'store';
import Notes from 'views/Notes';
import DetalisPage from 'views/DetailsPage';
import { routes } from 'routes/index';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
          <Route exact path={routes.notes} component={Notes} />
          <Route path={routes.note} component={DetalisPage} />
          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={DetalisPage} />
          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={DetalisPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;

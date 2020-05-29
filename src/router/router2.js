import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types'
const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return null;
  }
  if (error) {
    
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  return null;
};

const HomeItem = Loadable({
  loader: () => import('../pages/Home'),
  loading: MyLoadingComponent
});

const CountItem = Loadable({
  loader: () => import('../pages/Count'),
  loading: MyLoadingComponent
});
const Demo1 = Loadable({
  loader: ()=> import('../pages/demo1/demo1'),
  loading: MyLoadingComponent,
})

const Demo2 = Loadable({
  loader: ()=> import ('../pages/demo2/demo2'),
  loading: MyLoadingComponent,
})

const Demo3 = Loadable({
  loader: ()=> import ('../pages/demo3/demo3'),
  loading: MyLoadingComponent,
})

const BgAttachment = Loadable({
  loader: ()=> import ('../pages/bgAttachment/index'),
  loading: MyLoadingComponent,
})
const Routes = ({ history }) => (
  <Router history={history}>
    <>
      <Switch>
        <Route exact path="/" component={HomeItem} />
        <Route exact path="/count" component={CountItem} />
        <Route exact path='/demo1' component={Demo1}></Route>
        <Route exact path='/demo2' component={Demo2}></Route>
        <Route exact path='/demo3' component={Demo3}></Route>
        <Route exact path='/bg_attachment' component={BgAttachment}></Route>
      </Switch>
    </>
  </Router>
);
MyLoadingComponent.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.bool
};

MyLoadingComponent.defaultProps = {
  isLoading: true,
  error: false
};

Routes.propTypes = {
  history: PropTypes.object
};

Routes.defaultProps = {
  history: {}
};

export default Routes;
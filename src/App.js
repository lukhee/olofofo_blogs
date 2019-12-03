import React from 'react';
import {Route, Switch } from 'react-router-dom'

import Header from './Components/Header'
import Blogs from './Containers/BlogsConntainer'
import CreateBlog from './Containers/CreateBlog'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route exact path='/Blogs' component={Blogs} />
        <Route path='/Blogs/create' component={CreateBlog} />
        <Route exact path='/Blogs/:category' component={Blogs} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

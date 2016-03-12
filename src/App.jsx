
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {DefaultRoute, Route, Router ,IndexRoute, browserHistory} from 'react-router';
import {render} from 'react-dom';

import {DefaultLayout} from './components/layouts/Default';
import {HomePage} from './pages/Home';
import {TodosPage} from './pages/Todos';
import {TodoDetails} from './components/todo/Details';
import {TodoEdit} from './components/todo/Edit';
import {AboutUsPage} from './pages/AboutUs';
import {ContactUsPage} from './pages/ContactUs';
import {ErrorPage} from './pages/Error';

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

render((    	
	<Router history={browserHistory} >
		<Route name="app" path="/" component={DefaultLayout}>
	      <IndexRoute  name="home-default" component={ HomePage} />      
	      <Route  name="home" path="home" component={ HomePage} />    
		  <Route name="todos" path='todos' component={TodosPage} />
		  <Route name="details" path="todo/:id" component={TodoDetails} />	 
		  <Route name="edit" path="todo/edit/:id" component={TodoEdit} />	 
		  <Route name="aboutUs" path="aboutUs" component={AboutUsPage} />
		  <Route name="contactUs" path="contactUs" component={ContactUsPage} />
		  <Route path="*" component={ErrorPage}/>
	    </Route>
	</Router>
   ), document.getElementById('myApp'));



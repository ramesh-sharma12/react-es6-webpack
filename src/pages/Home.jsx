

'use strict';

import React from 'react';
import {Link} from 'react-router';
import {TodoList} from '../components/todo/List.jsx';

export class HomePage  extends React.Component{
		constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
	      <div className="col-sm-12">
			<div className="col-sm-5"> <h3> Upcoming Tasks. </h3>
			</div>					
			<div className="col-sm-4 btn-new"> 
				<Link className="btn btn-primary" to={`/todos`}>{ 'New'} </Link> 
			</div>					
		  </div>
          <TodoList />		
      </div>

    );
  }
}
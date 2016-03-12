﻿
'use strict';

import React from 'react';
import {Link} from 'react-router';


class TodoList2 extends React.Component{

    constructor(props) {
    super(props);
  }

  render() {
    var _this = this;

    var createItem = function(item, index) {
      return (
        <div className="col-sm-12" key={ index }>
          <div className="col-sm-4"><Link to={`/todo/${item.id}`}> { item.title } </Link> </div>
		      <div className="col-sm-6">{item.description} </div>
          <div className="col-sm-1" onClick={ _this.props.removeItem.bind(null, item.id) }
                style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}
				        title="Click to delete">
            X
          </div>
        </div>
		);
    };
    return ( <div className="todoResults col-sm-12"> 
			   { this.props.items.map(createItem) }
			</div>
			);
		
  }
}

export class TodoList extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      items:[]
    };
  }
  
  componentWillMount() {
    this.firebaseRef = new Firebase('https://ng2do.firebaseio.com/data/');
    this.firebaseRef.on('value', function(dataSnapshot) {
      var items = [];
      dataSnapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val(); 
		    item.id = childSnapshot.name();       
        items.push(item);
      }.bind(this));

      this.setState({
        items: items
      });

    }.bind(this));
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

   removeItem(key) {
    var firebaseRef = new Firebase('https://ng2do.firebaseio.com/data/');
    firebaseRef.child(key).remove();
  }

  render() {
     return (
      <div className="todoList">
  	    <div className="header col-sm-12">
    			<span className="col-sm-4">  {'Title'} </span>
    			<span className="col-sm-6"> {'Description'} </span>
    			<span className="col-sm-1">  </span>
		    </div>	            
        <TodoList2 items={ this.state.items }  removeItem={ this.removeItem }/>
	 </div>
	);
	}
}


'use strict';

import React from 'react';

import {TodoList} from '../components/todo/List.jsx';
import {TodoCreate} from '../components/todo/Create.jsx';

export class TodosPage  extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
	   <TodoCreate />
       <TodoList />
      </div>
    );
  }
}
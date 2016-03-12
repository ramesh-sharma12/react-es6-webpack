
'use strict';

import React from 'react';

import {Link} from 'react-router';

export class Navbar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar-top">
        <div className="container">
    		 <Link className="navbar-brand" to="/home">         
                {' Home'}
          </Link>
  		   <Link className="navbar-brand" to="/todos">         
              {' Todos'}
          </Link>
    		  <Link className="navbar-brand" to="/aboutUs">         
                {' About Us'}
          </Link>
      		<Link className="navbar-brand" to="/contactUs">         
                  {' Contact Us'}
          </Link>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
            <div className="header-logo">
              <i className="icon_homedepot"></i>
            </div>

             <div className="header-info">
                 <label className="product-info">W/MRI</label>
             </div>
       </div>
    );
  }
}


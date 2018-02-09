import React, { Component } from 'react';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
            <div className="header-logo">
              <i className="icon_homedepot"></i>
            </div>

             <div className="header-info">
               <div className="product-info">W/MRI</div>
               <div className="user-info">User Name | Store #0000 | Atlanta, GA</div>
           </div>
            <div className="header-search">
                <input type="search" placeholder="Search Here"/>
                <i className="icon_search"></i>
            </div>
            <div className="header-actions">
                <div className="active"><i class="icon_bell"></i>Active Link</div>
                <div><i className="icon_cart"></i>Nav Link</div>
                <div><i className="icon_exit-to-app"></i>Nav Link</div>
            </div>
         </div>
    );
  }
}


             // <div className="header-info">
             //     <label className="product-info">W/MRI</label>
             // </div>


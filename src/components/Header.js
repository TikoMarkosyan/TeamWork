import React, {Component} from 'react';
import Search from './Search'
import '../all_css/Header.css'
export default class Header extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="Header">
        <div>
              <div className="Header-logo">
                  <img src='/logoh32.png' />
              </div>
              <div className="Header-logo-text">
                  <span>Coins</span>
              </div>
        </div>
            <Search />
      </div>
    )
  }
}

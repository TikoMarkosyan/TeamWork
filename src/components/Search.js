import React, {Component} from 'react';

export default class Search extends Component{
    constructor(props){
      super(props)
    }
    render(){
      return (
        <div className="search">
            <input type="text" className="Header-input" placeholder=" Currency name"/>
        </div>
      )
    }
}

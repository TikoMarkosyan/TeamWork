import React, {Component} from 'react';
import Header from './Header';
import Table from './Table'
import Lodding from './Lodding'
const BASE_URL = 'https://api.udilia.com/coins/v1/cryptocurrencies';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      info:null
    }
  }
  componentDidMount(){
    fetch(BASE_URL)
    .then(data => data.json())
    .then(res => {
      this.setState({
        info: res.currencies,
      });
    })
  }
  render(){
    return(
      <div>
        <Header />
      { this.state.info != null ? <Table data={this.state.info}/> : <Lodding />}
      </div>
    )
  }
}

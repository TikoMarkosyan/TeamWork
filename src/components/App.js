import React, {Component,useState,useEffect } from 'react';
import Header from './Header';
import Table from './Table'
import Lodding from './Lodding'
import Pagination from './Pagination'
import {Context} from './context'
const BASE_URL = 'https://api.udilia.com/coins/v1/';

export default function App(){
  const [info,setInfo] = useState([]);
  const [pages,setPages] = useState(1);
  const [showsPagesCount,setShowsPagesCount] = useState(20);
   useEffect(() => {
     fetches(pages,showsPagesCount);
   },[])

   const fetches = (pages,showsPagesCount) => {
     console.log(pages)
     fetch(`${BASE_URL}cryptocurrencies?page=${pages}&perPage=${showsPagesCount}`)
     .then(data => data.json())
     .then(res => {
          setInfo(res.currencies);
     })
   }
   const nextpage = number => {
      fetches(number,20)
   }
   console.log(info)
  return(
        <div>
          <div>
            <Header />
            { info.length !== 0 ? <Table data={info}/> : <Lodding />}
          </div>
          <div>
            <Context.Provider value={{
                  nextpage,
              }}>
              <Pagination  />
               </Context.Provider>
          </div>
       </div>
  )
}







/*
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
}*/

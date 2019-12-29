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
  const [totalPages,setTotalPages] = useState(0);
  const [showsPagesCount,setShowsPagesCount] = useState(20);
   useEffect(() => {
     fetches(pages,showsPagesCount);
   },[])

   const fetches = (pages,showsPagesCount) => {
     fetch(`${BASE_URL}cryptocurrencies?page=${pages}&perPage=${showsPagesCount}`)
     .then(data => data.json())
     .then(res => {
          setTotalPages(res.totalPages);
          setInfo(res.currencies);
     })
   }
   const nextpage = number => {
      fetches(number,20)
   }
  return(
    <Context.Provider value={{
          nextpage,
      }}>
          <div>
            <div>
              { info.length !== 0 ? <Header data={info} /> : null}
              { info.length !== 0 ? <Table data={info}/> : <Lodding />}
            </div>
            <div>
                <Pagination   totalpages={totalPages}/>
            </div>
         </div>
    </Context.Provider>
  )
}

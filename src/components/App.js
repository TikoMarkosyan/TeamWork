import React, {Component, useState, useEffect } from 'react';
import Header from './headercomponent/header/Header';
import Table from './body-components/table/Table'
import Lodding from './body-components/loadding/Lodding'
import Pagination from './body-components/table/helper/Pagination'
import {Context} from './utility/context'

const BASE_URL = 'https://api.udilia.com/coins/v1/';
export default function App(){
  const [info,setInfo] = useState([]);
  const [pages,setPages] = useState(1);
  const [totalPages,setTotalPages] = useState(0);
  const [showsPagesCount,setShowsPagesCount] = useState(20);
   useEffect(() => {
     getData(pages,showsPagesCount);
   },[])

   const getData = (pages,showsPagesCount) => {
     fetch(`${BASE_URL}cryptocurrencies?page=${pages}&perPage=${showsPagesCount}`)
     .then(data => data.json())
     .then(res => {
          setTotalPages(res.totalPages);
          setInfo(res.currencies);
     })
   }
   const nextpage = number => {
      getData(number,20)
   }
  return(
    <Context.Provider value={{
          nextpage,
      }}>
          <div>
            <div>
              { info.length && <Header data={info} /> }
              { info.length !== 0 ? <Table data={info}/> : <Lodding />}
            </div>
            <div>
                <Pagination   totalpages={totalPages}/>
            </div>
         </div>
    </Context.Provider>
  )
}

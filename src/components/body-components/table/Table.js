import React, { useState, useEffect, useContext, useRef, memo } from 'react';
import  Changeitem from './helper/Changeitem';
import {Context} from '../../utility/context'
export default function Table(props) {
  
    const [data,setData] =  useState(props.data);
    const [openOrClose,setopenOrClose] = useState(false);
    const [needToChange,setNeedToChange] = useState(null);

    const getHeader = () => {

        let header = Object.keys(data[0]);
        return header.map((key, index) => {
           return <th className="Table-head" onClick={()=>{sortByPercentChange(key)}} key={index}>{key.toUpperCase()}</th>
        })

      }

  const sortByPercentChange = (field) => {

    let sortedData = data.slice().sort((a, b) => {
          if(field === "name" || field === 'id'){
            if(a[field] < b[field]) {
              return -1;
            }
            if(a[field] > b[field]) { return 1; }
            return 0;
          }else{
            if(Number(a[field].split(',').join("")) > Number(b[field].split(',').join(""))) { return 1; }
            if(Number(a[field].split(',').join("")) < Number(b[field].split(',').join("")))  { return -1; }
            return 0;
          }
      });
        setData(sortedData);

    }
    const getTableData = (el) =>{
        const res = [];
        Object.keys(el).forEach(key => {
          (key === "percentChange24h" && el[key].includes('-')) ? res.push(<td className="Red">{el[key]}%{<img src="download-arrow.png"/>}</td>) :
              (key === "percentChange24h") ? res.push(<td  className="Green">{el[key]}%{<img src="up-arrow.png"/>}</td>) :
            (key === "price" || key === "marketCap")  ? res.push(<td>${el[key]}</td>) : res.push(<td >{el[key]}</td>)
                })
        return res;
      }

    const chengitem = (el) => {

      setopenOrClose(true)
      setNeedToChange(el);

    }

    const changedata = (item) => {

    const result = data.map(el => {
        if(el.id === item.id){
          return item;
        }
        return el;
      })
        setData(result);

    }

    useEffect(() => {
          setData(props.data)
    }, [props.data])
    return(
        <Context.Provider value={{
              changedata,
          }}>
              <div className="Table-container">
                  <table className="Table">
                    {
                      <tbody className="Table-body">
                        { getHeader() }
                        {
                          data.map(el => {
                            return ( <tr key={el.id} onClick={()=> {chengitem(el)}}>
                              {getTableData(el)}
                            </tr> )
                          })
                        }
                        </tbody>
                      }
                  </table>
                  {openOrClose ? <Changeitem item={needToChange} openPopus={openOrClose}/> : null }
              </div>
        </Context.Provider>
    )
}

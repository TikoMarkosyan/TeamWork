import React, {useState,useEffect,useContext,useRef,memo} from 'react';
import Popups from './Popups';
export default function Search(props){
    const [data,setData] =  useState(props.data);
    const [dataFilter,setDataFilter] =  useState([]);
    const [openOrClose,setopenOrClose] = useState(false)

    const change = (e) => {
        e.target.value.length !== 0 ? setopenOrClose(true) : setopenOrClose(false);
        const res = e.target.value.length !== 0 ? data.filter(el => el.id.includes(e.target.value)) : [];
        setDataFilter(res);
    }
    console.log(openOrClose)
  return (
    <div className="search">
        <input type="text" className="Header-input" placeholder=" Currency name" onChange={change}/>
        <div>
            <Popups data={dataFilter} openPopus={openOrClose}/>
        </div>
    </div>
  )
}

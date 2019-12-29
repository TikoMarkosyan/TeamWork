import React, {useState,useEffect,useContext,useRef,memo} from 'react';
import Search from './Search'
import '../all_css/Header.css'
export default function Header(props){
      const [data,setData] =  useState(props.data);
      console.log(data)
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
          <Search data={data}/>
    </div>
  )
}

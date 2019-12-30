import React, { useState, useEffect, useContext, useRef, memo } from 'react';
import {Context} from '../../../utility/context'
import _ from 'lodash';

export default function Changeitem(props) {

  const [data,setData] = useState(props.item);
  const [openOrClose,setOpenOrClose] = useState(props.openPopus);
  const info = _.cloneDeep(data);
  const {changedata} = useContext(Context);
  const divStyle = openOrClose ? {
      visibility:'visible',
      opacity: '1'
    } : {
      visibility:'hidden',
      opacity: '0'
    }

  const cancel = (e) => {
      setOpenOrClose(!openOrClose);
  }

  const changed = (el) => {
    setData(el.target.value)
      for (const property in info) {
            if(property === el.target.name){
                info[property] = el.target.value;
            }
      }
      if(!_.isEqual(info,data)){
        setData(info);
      }
  }

  const save = () =>{
    changedata(info);
    setOpenOrClose(!openOrClose);
  }

  const currencyFormat = (num) => {
       return  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }

  const percentageNumber = (e) => {
      let res =  e.target.value.match(/\d+/g);
      res.splice(res.length-1, 0, ".")
      const originNumber = res.join("");
      const percentage = (res.join("") /100) * 5;
      let result;
      if(e.target.name === "increase"){
                result = _.round(originNumber) +  _.round(percentage);
        }
      else{
                result = _.round(originNumber) -  _.round(percentage);
      }
      result = currencyFormat(result);
      info.price = result;
      setData(info);
      }

  useEffect(() => {
        setData(props.item);
        setOpenOrClose(props.openPopus);
  }, [props.item, props.openPopus])

  return(
    <div className="mycss2" style={divStyle}>
         	<div className="popup">
             		<div className="content">
             			  <p className="mycss">Name:</p> <input type="text" value={data.name} name="name" onChange={changed} />
                     <p className="mycss">marketCap:</p> <input type="text" value={data.marketCap} name="marketCap" onChange={changed} />
                     <p className="mycss">percentChange24h:</p> <input type="number" value={data.percentChange24h} name="percentChange24h" onChange={changed} />
                       <div>
                       <p className="mycss">balance:</p><h1>{data.price}</h1>
                       <button  name="increase" value={data.price} onClick={percentageNumber}>increase by 5%</button>
                       <button name="decrease" value={data.price} onClick={percentageNumber}>decrease by 5%</button>
                       </div>
             		</div>
                 <div>
                 <button onClick={save}>Save</button>
                 <button onClick={cancel}>cancel</button>
                 </div>
         	</div>
      </div>
  )
}

import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../../../utility/context';
export default function Pagination (props){

  const page = props.totalpages;
  const [count,setCount] = useState(1);
  const [leftdisabled,setLeftDisabled] = useState(true);
  const [rightdisabled,setRightDisabled] = useState(false);
  const {nextpage} = useContext(Context);

  const counted = (nextOrPrev) => {
  let number = nextOrPrev === "next" ? count + 1 : count - 1
      setLeftDisabled(false);
      setRightDisabled(false);
    if(number < 1){
      number = 1;
      setLeftDisabled(true);
      setRightDisabled(false);
    }else if(number > 5){
      number = 5;
      setLeftDisabled(false);
      setRightDisabled(true);
    }
    setCount(number);
    nextpage(number);
  }
  
  return (
    <div className="center">
      <button class="Button" disabled={leftdisabled} onClick={() => { counted("prev") }}>&larr;</button>
      <span>{count + " : " + page}</span>
      <button  class="Button" disabled={rightdisabled} onClick={() => { counted("next") }}>&rarr;</button>
    </div>
  )
}

import React, {useState,useEffect,useContext} from 'react';
import {Context} from './context';
export default function Pagination (){
  const [count,setCount] = useState(1);
  const {nextpage} = useContext(Context);
  const counted = (nextOrPrev) => {
    const number = nextOrPrev === "next" ? count + 1 : count - 1
    setCount(number);
    nextpage(number);
  }
  return (
    <div>
      <button onClick={() => { counted("next") }}>left</button>
      <button onClick={() => { counted("prev") }}>right</button>
    </div>
  )
}

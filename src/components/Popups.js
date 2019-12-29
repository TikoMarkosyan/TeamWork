import React, {useState,useEffect,useContext,useRef,memo} from 'react';

export default function Popups(props) {
  const [data,setData] = useState(props.data);
  const [open,setOpen] = useState(props.openPopus);
  useEffect(() => {
        setOpen(props.openPopus)
        setData(props.data);
  }, [props.openPopus,props.data])
  const divStyle = open ? {
      visibility:'visible',
      opacity: '1'
    } : {
      visibility:'hidden',
      opacity: '0'
    }
    console.log(data)
  return (
      <div className="overlay" style={divStyle}>
          <div className="popup">
                <div className="content">
                  {
                  data.map(el => {
                    return ( <p className='p' key={el.id}>
                        {el.id}
                    </p> )
                  })
                }
                </div>
          </div>
    </div>
  )
}

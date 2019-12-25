import React, {Component} from 'react';

export default class Table extends Component {
  constructor(props){
    super(props);
    this.state={
      ...props
    }
  }
  // Draw table Header
  getHeader = () => {
    let header = Object.keys(this.state.data[0])
    return header.map((key, index) => {
       return <th className="Table-head" key={index}>{key.toUpperCase()}</th>
    })
  }
    // Draw table body
  getTableData = (el) =>{
    const res = [];
    Object.keys(el).forEach(key => {
            res.push(<td>{el[key]}</td>)
            })
    return res;
  }

  render(){
    const { data } = this.state
    return(
      <div className="Table-container">
        <table className="Table">
          {
            <tbody className="Table-body">
              { this.getHeader() }
              {
                data.map(el => {
                  return ( <tr key={el.id}>
                    {this.getTableData(el)}
                  </tr> )
                })
              }

            </tbody>
          }
        </table>
    </div>
    )
  }
}

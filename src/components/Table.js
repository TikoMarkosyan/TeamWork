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
      if(key === "percentChange24h") {
        return (<th className="Table-head" key={index}>
          {key.toUpperCase()}
          <button onClick={this.sortByPercentChange} className="Table-SortButton"><img src="up-arrow.png"/></button>
        </th>)
      }else{
       return <th className="Table-head" key={index}>{key.toUpperCase()}</th>
       }
    })
  }
  sortByPercentChange = (el) => {
      const sorted = this.state.data.sort((a,b) => {
      return  +a.percentChange24h - +b.percentChange24h
    });
      this.setState({
        data: sorted,
      });
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

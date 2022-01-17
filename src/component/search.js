import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Search extends React.Component {
    state = {
      data,
      filteredData: data
    };
  
    _handleSearchChange = e => {
      const  value  = e.target.value;
      const lowercasedValue = value.toLowerCase();
  
      this.setState(prevState => {
        const filteredData = prevState.data.filter(el =>
          el.dataConnectionName.toLowerCase().includes(lowercasedValue)
        );
  
        return { filteredData };
      });
    };
  
    render() {
      const { filteredData } = this.state;
  
      return (
        <div>
          <input onChange={this._handleSearchChange} placeholder="Search"/>
          {filteredData.map(el => (
            <div key={el.key}>
              <div>
                {el.dataConnectionName} - {el.pluginName} - {el.createdDate} - {el.createBy}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }

export default Search ;
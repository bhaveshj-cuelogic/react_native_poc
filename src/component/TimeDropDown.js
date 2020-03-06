import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
 
export default  class TimeDropDown extends Component {
  render() {
    let data = [
        {
      value: 'Morning',
    }, 
    {
      value: 'Afternoon',
    },
    {
        value: 'Evening',
    },
    {
        value: 'Anytime',
    }
];
 
    return (
      <Dropdown
        label='BEST TIME TO CALL'
        data={data}
        labelFontSize = "18"
        onChangeText={this.props.onChangeText}


      />
    );
  }
}
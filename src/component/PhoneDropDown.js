import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
 
export default  class PhoneDropDown extends Component {
  render() {
    let data = [{
      value: 'Email',
    }, {
      value: 'Phone',
    },
    {
        value: 'Email & Phone',
    }
];
 
    return (
      <Dropdown
        label='PREFERRED METHOD OF COMMUNICATION'
        data={data}
        labelFontSize = "18"
        onChangeText={this.props.onChangeText}

      />
    );
  }
}
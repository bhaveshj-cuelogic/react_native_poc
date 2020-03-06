import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
 
export default  class DropdownComponent extends Component {
  render() {
    let dataarray = [{
      value: 'Written Consultation',
    }, {
      value: 'Video Consultation',
    }];
 
    return (
      <Dropdown
        label='CASE TYPE'
        data={dataarray}
        labelFontSize = "18"
        onChangeText={this.props.onChangeText}
        />
    );
  }

}
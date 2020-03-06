import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
 
export default  class CategoryDropdownComponent extends Component {
  render() {
    let data = [{ 
      value: 'Behavioral Health',
    }, 
    {
      value: 'Blood (Hematology)',
    },
    {
        value: 'Cancer (oncology)',
      },
      {
        value: 'Cardiology/Cardiovascular',
      },
    {
        value: 'Dermatology',
      },
      {
        value: 'Ear Nose & Throat ENT',
      },
      {
        value: 'Endocrinology',
      },
      {
        value: 'Gastroenterology (Digestive System)',
      },{
        value: 'Genetic Disorders',
      },
      {
        value: 'Gynecology',
      },
      {
        value: 'Immune Diseases and Disorders',
      },
      {
        value: 'Infectious Diseases',
      },
      {
        value: 'Kidney and Urinary Tract',
      },
      {
        value: 'Neurology',
      },
      {
        value: 'Ophthalmology',
      },
      {
        value: 'Orthopedic and Muscular',
      },
      {
        value: 'Pain Management',
      },
      {
        value: 'Pediatrics',
      },
      {
        value: 'Reproductive Health',
      },
      {
        value: 'Urology',
      },
      {
        value: 'Other Specialties',
      }
];
 
    return (
      <Dropdown
        label='CATEGORY'
        data={data}
        labelFontSize = "18"
        onChangeText={this.props.onChangeText}

      />
    );
  }
}


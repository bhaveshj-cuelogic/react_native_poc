import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View, Platform ,Alert} from "react-native";
import colors from '../styles/Colors';

class Input extends Component {
  render() {
     const type = this.props.type || {};
    return (
        <View
          style={styles.inputHolder}
          backgroundColor={this.props.backgroundColor}
        //   borderColor={this.props.borderColor}
        borderColor= "white"
        >
          <TextInput
            onChangeText={this.props.onChangeText}
            onEndEditing={this.props.onEndEditing}
            onFocus={this.props.onFocus}
            keyboardType= "default"
            underlineColorAndroid="gary"
            fontWeight="500"
            multiline={this.props.multiline}
            value={this.props.value}
            placeholder={this.props.placeholder}
            placeholderStyle={{
              fontSize: 18,
              letterSpacing: 0.44,
              //color: colors.btnGray
            }}
            placeholderTextColor={this.props.placeholderTextColor}
            style={[styles.default, styles[type], this.props.style || {}]}
          />
        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  // Border button type by default
  default: {
    height: 70,
    flexDirection: "row",
    //color: colors.txtDark,
    letterSpacing: 0.44,
    fontSize: 18,
    textAlignVertical: "center",
    fontWeight: "500",
    // fontFamily: 'Poppins-Regular',
    flex: 1,
    paddingLeft: 13
  },
  defaultTxt: {
    color: colors.txtWhite,
    fontWeight: "700"
    // fontFamily: 'Poppins-Regular',
  },
  defaultHolder: {
    borderBottomWidth: 1,
    borderColor: colors.bdWhite
  },
  inputHolder: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: colors.txtWhite,
    borderWidth: 1,
    marginBottom: 15,
  }
});

module.exports = Input;

import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, ScrollView } from 'react-native';
import DropDownComponent from '../component/CaseTypeDropdown';
import CategoryDropdownComponent from '../component/CategoryTypeDropDown';
import Input from '../component/InputField';
import Colors from '../styles/Colors';
import PhoneDropDown from '../component/PhoneDropDown';
import TimeDropDown from '../component/TimeDropDown';

export default class ContactInfo extends React.Component {

    state = {
        resonText: "",
        ContactType: "",
        bestTime: "",
    };

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{ alignItems: "center", marginTop: 0, height: "100%", }}>
                <ScrollView style = {{height: "70%" ,width : "100%", }}>
                <Text style={{ fontWeight: "bold", fontSize: 22, color: "#5DADE2", marginTop: 20, alignContent: "center",textAlign: "center" }}>CONTACT INFORMATION
                </Text>
                <View style={{ height: 20 }}></View>
                <View style={{ marginLeft: 20, marginRight: 20 }}>
                    <PhoneDropDown
                     onChangeText={text => this.setState({ ContactType: text })}
                    ></PhoneDropDown>
                </View>
                <View style={{ height: 20 }}></View>
                <View style={{ marginLeft: 20, marginRight: 20 }}>
                    <TimeDropDown
                     onChangeText={text => this.setState({ bestTime: text })}
                    ></TimeDropDown>
                </View>
                <View style={{ marginLeft: 15, marginRight: 15 }}>
                    <Text style={{ fontSize: 18, color: Colors.txtMessage, marginBottom: 10, marginTop: 30,marginLeft:5, alignContent: "center" }}>BEST NUMBER TO REACH YOU AT

                </Text>
                    <Input
                        onChangeText={text => this.setState({ resonText: text })}
                        placeholder="Enter here"
                        value={this.state.resonText}
                        borderColor={Colors.btnGray}
                        backgroundColor={Colors.editPageBackground}
                        placeholderTextColor={Colors.txtPlaceholder}
                    />
                </View>
                </ScrollView>
                <View style={{ alignItems: "center", marginTop: 5, height: "12%", justifyContent: "flex-start" }}>
                    <View style={styles.alternativeLayoutButtonContainer}>
                    <TouchableNativeFeedback onPress={() =>  this.props.navigation.pop()}>
                            <Text style={styles.Faqtext}>
                                Back
                        </Text>
                        </TouchableNativeFeedback>
                        <View style={{ width: 30 }}></View>
                        {/* <TouchableNativeFeedback onPress={() => navigate('FinishScreen')}> */}
                        <TouchableNativeFeedback onPress={this._onPressButton.bind(this)}> 
                            <Text style={styles.Phonetext}>
                                SUBMIT
                        </Text>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
        )
    }

    _onPressButton =() => {
        const { navigate } = this.props.navigation;
         if(this.state.ContactType == ""){
         alert("Please enter PREFERRED METHOD OF COMMUNICATION");
         return;
        }
        else if(this.state.bestTime == ""){
            alert("Please enter BEST TIME TO CALL");
            return;
        }
        else if(this.state.resonText == ""){
            alert("Please enter contact number");
            return;
           }
        this.props.navigation.navigate('FinishScreen')
       }


}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    Faqtext: {
        textAlign: "center",
        width: 170,
        height: 50,
        borderRadius: 10,
        borderWidth: 0,
        paddingTop: 12,
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: '#154360'
    },
    AddQuestion: {
        textAlign: "center",
        width: 170,
        height: 40,
        borderRadius: 15,
        borderWidth: 0,
        paddingTop: 7,
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: Colors.txtDark
    },
    header: {
        textAlign: "center",
        width: "100%",
        borderWidth: 0,
        padding: 18,
        fontSize: 23,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: Colors.txtDark
    },
    Phonetext: {
        textAlign: "center",
        width: 170,
        height: 50,
        borderRadius: 10,
        borderWidth: 0,
        paddingTop: 12,
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: '#1ABC9C'
    },
    alternativeLayoutButtonContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});
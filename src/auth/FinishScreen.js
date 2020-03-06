
import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, ScrollView } from 'react-native';
import DropDownComponent from '../component/CaseTypeDropdown';
import CategoryDropdownComponent from '../component/CategoryTypeDropDown';
import Input from '../component/InputField';
import Colors from '../styles/Colors';
import PhoneDropDown from '../component/PhoneDropDown';
import TimeDropDown from '../component/TimeDropDown';

export default class FinishScreen extends React.Component {

    state = {
        resonText: "",
    };

    render() {
        return(
            <View style={{ alignItems: "center", marginTop: 0, height: "100%", }}>
                <ScrollView style = {{height: "70%" ,width : "100%", }}>
                <Text style={{ fontWeight: "bold", fontSize: 22, color: "#5DADE2", marginTop: 20, alignContent: "center",textAlign: "center" }}>NEW CASE INITIATED
                </Text>
                <View style={{ height: 10 }}></View>
                <Text style={{ fontWeight: "bold", fontSize: 20, color: Colors.txtDescription ,marginLeft: 20, marginRight: 20 ,marginTop: 20, alignContent: "center", textAlign: "left" }}>Your Virtual Second Opinion Request has been sent.
                </Text>

                <View style={{ height: 10 }}></View>
                <Text style={{ fontWeight: "bold", fontSize: 20, color: Colors.txtDescription ,marginLeft: 20, marginRight: 20 ,marginTop: 20, alignContent: "center", textAlign: "left" }}>You will be receiving a phone call or email within one business day from your ConsumerMedical Ally.
                </Text>

                <View style={{ height: 10 }}></View>
                <Text style={{ fontWeight: "bold", fontSize: 20, color: Colors.txtDescription ,marginLeft: 20, marginRight: 20 ,marginTop: 20, alignContent: "center", textAlign: "left" }}>If you have any questions, please feel free to contact us at (844) 259-5761 (toll-free), Monday – Friday, 8:30am to 11:00pm Eastern Time.
                </Text>

                </ScrollView>
                <View style={{ alignItems: "center", marginTop: 5, height: "12%", justifyContent: "flex-start" }}>
                   
                        <TouchableNativeFeedback>
                            <Text style={styles.Phonetext}>
                                FINISH
                        </Text>
                        </TouchableNativeFeedback>
                   
                </View>
            </View>
        )
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

import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, ScrollView } from 'react-native';
import DropDownComponent from '../component/CaseTypeDropdown';
import CategoryDropdownComponent from '../component/CategoryTypeDropDown';
import Input from '../component/InputField';
import Colors from '../styles/Colors';
import colors from '../styles/Colors';
import { StackActions } from '@react-navigation/native';


export default class PhysicianQuestion extends React.Component {

    state = {
        QuestionText: "",
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ alignItems: "center", marginTop: 0, height: "100%" }}>
               
                <View style={{ alignItems: "center", marginTop: 0, height: "88%", width: "100%" }}>
                    <ScrollView>
                        <Text style={{ fontWeight: "bold", fontSize: 22, color: "#5DADE2", marginTop: 20, alignContent: "center",textAlign: "center" }}>PHYSICIAN QUESTION
                </Text>
                        <Text style={{ fontWeight: "bold", fontSize: 20, color: colors.txtDark ,marginLeft: 20, marginRight: 20 ,marginTop: 20, alignContent: "center", textAlign: "left" }}>What questions would you like a physician to answer for you?
                </Text>

                <View style={{ marginLeft: 15, marginRight: 15 }}>
                    <Text style={{ fontSize: 18, color: Colors.txtMessage, marginBottom: 10, marginTop: 30, alignContent: "center" }}>QUESTION 1
                </Text>
                    <Input
                        onChangeText={text => this.setState({ QuestionText: text })}
                        placeholder="What is your physician question?"
                        value={this.state.QuestionText}
                        borderColor={Colors.btnGray}
                        backgroundColor={Colors.editPageBackground}
                        placeholderTextColor={Colors.txtPlaceholder}
                    />
                </View>
                <View style={{ alignItems: "center", marginTop: 20, justifyContent: "center" }}>
                    <TouchableNativeFeedback>
                        <Text style={styles.AddQuestion}>
                            ADD QUESTION
                                </Text>
                    </TouchableNativeFeedback>
                </View>

                    </ScrollView>
                </View>
                <View style={{ alignItems: "center", marginTop: 0, height: "12%" ,justifyContent: "flex-start" }}>
                    <View style={styles.alternativeLayoutButtonContainer}>
                        <TouchableNativeFeedback onPress={() =>  this.props.navigation.pop()}>
                            <Text style={styles.Faqtext}>
                                Back
                        </Text>
                        </TouchableNativeFeedback>
                        <View style={{ width: 30 }}></View>
                        <TouchableNativeFeedback onPress={this._onPressButton.bind(this)}> 
                            <Text style={styles.Phonetext}>
                                NEXT
                        </Text>
                        </TouchableNativeFeedback>
                    </View>

                </View>

            </View>
        )
    }

    _onPressButton =() => {
        const { navigate } = this.props.navigation;
         if(this.state.QuestionText == ""){
         alert("Please enter Question");
         return;
        }
        this.props.navigation.navigate('ContactInfo')
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
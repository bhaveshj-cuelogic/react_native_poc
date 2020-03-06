
import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, ScrollView } from 'react-native';
import DropDownComponent from '../component/CaseTypeDropdown';
import CategoryDropdownComponent from '../component/CategoryTypeDropDown';
import Input from '../component/InputField';
import Colors from '../styles/Colors';
import ModalDropdown from 'react-native-modal-dropdown';


export default class CaseInfo extends React.Component {
    

    state = {
        resonText: "",
        caseType: "",
        category: "",
    };
    
    constructor(props) {
        super(props);
        console.log(this.props);
    }


    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={{ alignItems: "center", marginTop: 0, height: "100%", }}>
                <ScrollView style = {{height: "70%" ,width : "100%", }}>
                <Text style={{ fontWeight: "bold", fontSize: 22, color: "#5DADE2", marginTop: 20, alignContent: "center",textAlign: "center" }}>CASE INFORMATION
                </Text>
                <View style={{ height: 20 }}></View>
                <View style={{ marginLeft: 20, marginRight: 20 }}>
                    <DropDownComponent
                     onChangeText={text => this.setState({ caseType: text })}
                    ></DropDownComponent>

                </View>
                <View style={{ height: 20 }}></View>
                <View style={{ marginLeft: 20, marginRight: 20 }}>
                    <CategoryDropdownComponent
                    onChangeText={text => this.setState({ category: text })}
                    ></CategoryDropdownComponent>
                </View>
                <View style={{ marginLeft: 15, marginRight: 15 }}>
                    <Text style={{ fontSize: 18, color: Colors.txtMessage, marginBottom: 10, marginTop: 30,marginLeft:5, alignContent: "center" }}>REQUEST REASON / DIAGNOSIS


                </Text>
                    <Input
                        onChangeText={text => this.setState({ resonText: text })}
                        placeholder="what is the reason for your request?"
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
                        {/* navigate('PhysicianQuestion') */}
                         <TouchableNativeFeedback onPress={this._onPressButton.bind(this)}> 
                            <Text style={styles.Phonetext}>
                                Next
                        </Text>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
        );
        
    }
    _onPressButton =() => {
       const { navigate } = this.props.navigation;
       if(this.state.caseType == ""){
           alert("Please enter Case Type");
           return;
       }
       else if(this.state.category == ""){
        alert("Please enter category");
        return;
       }
       else if(this.state.resonText == ""){
        alert("Please enter REQUEST REASON / DIAGNOSIS");
        return;
       }
       navigate('PhysicianQuestion')
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

import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { Colors } from '../styles/Colors';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Home extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ alignItems: "center", marginTop: 0, backgroundColor: "white", height: "100%" }}>

                <View style={{ alignItems: "center", marginTop: 0, height: "8%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 22, color: "#5DADE2", marginTop: 20, }}>YOUR MEDICAL ALLY </Text>
                </View>
                <View style={{ alignItems: "center", marginTop: 40, height: "20%" }}>
                   
           <Text style={{ fontWeight: "bold", fontSize: 20, color: "#757575" ,marginLeft: 20, marginRight: 20 ,marginTop: 0, alignContent: "center", textAlign: "center" }}>You may now start or track a virtual second opinion with a top specialist. Review the FAQ to see if a virtual second opinion is right for you.
                </Text>
                </View>
                <View style={{ alignItems: "center", marginTop: 0, height: "75%", alignContent: "center" }}>
                    <View style={{ alignItems: "center", marginTop: 0, height: "10%", alignContent: "center" }}></View>
                    <View style={styles.alternativeLayoutButtonContainer}>
                        <TouchableNativeFeedback onPress={() => navigate('CaseInfo')}>
                            <Text style={styles.NewCasetext}>
                                NEW CASE
                        </Text>
                        </TouchableNativeFeedback>
                        <View style={{ width: 30 }}></View>
                        <TouchableNativeFeedback>
                            <Text style={styles.Statetext}>
                                CASE STATUS
                        </Text>
                        </TouchableNativeFeedback>
                    </View>

                    <View style={{ height: 10 }}></View>

                    <View style={styles.alternativeLayoutButtonContainer}>
                        <TouchableNativeFeedback>
                            <Text style={styles.Faqtext}>
                                FAQ
                        </Text>
                        </TouchableNativeFeedback>
                        <View style={{ width: 30 }}></View>
                        <TouchableNativeFeedback>
                            <Text style={styles.Phonetext}>
                                (844) 259-5761
                        </Text>
                        </TouchableNativeFeedback>
                    </View>


                </View>

            </View>

        );

        return (
            <View>
                <View style={{ alignItems: "center", marginTop: 0, backgroundColor: "white", }}>
                    <Text style={{ fontWeight: "bold", fontSize: 22, color: "#5DADE2", marginTop: 20, alignContent: "center", textAlign: "center" }}>YOUR MEDICAL ALLY

                </Text>
                    <Text style={{ textAlign: "center", fontSize: 20, color: "black", marginTop: 20, alignContent: "center", marginLeft: 10, marginRight: 10 }}>You may now start or track a virtual second opinion with a top specialist. Review the FAQ to see if a virtual second opinion is right for you.
                </Text>
                </View>
                <View style={{ height: 20 }}></View>
                <View style={{ alignItems: "center", marginTop: 10, height: 350 }}>
                    <View style={styles.alternativeLayoutButtonContainer}>
                        <TouchableNativeFeedback onPress={() => navigate('CaseInfo')}>
                            <Text style={styles.NewCasetext}>
                                NEW CASE
                        </Text>
                        </TouchableNativeFeedback>
                        <View style={{ width: 30 }}></View>
                        <TouchableNativeFeedback>
                            <Text style={styles.Statetext}>
                                CASE STATUS
                        </Text>
                        </TouchableNativeFeedback>
                    </View>

                    <View style={{ height: 10 }}></View>

                    <View style={styles.alternativeLayoutButtonContainer}>
                        <TouchableNativeFeedback>
                            <Text style={styles.Faqtext}>
                                FAQ
                        </Text>
                        </TouchableNativeFeedback>
                        <View style={{ width: 30 }}></View>
                        <TouchableNativeFeedback>
                            <Text style={styles.Phonetext}>
                                (844) 259-5761
                        </Text>
                        </TouchableNativeFeedback>
                    </View>

                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    NewCasetext: {
        textAlign: "center",
        width: 170,
        height: 70,
        borderRadius: 10,
        borderWidth: 0,
        paddingTop: 20,
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: '#5DADE2'
    },
    Statetext: {
        textAlign: "center",
        width: 170,
        height: 70,
        borderRadius: 10,
        borderWidth: 0,
        paddingTop: 20,
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: '#2874A6'
    },
    Faqtext: {
        textAlign: "center",
        width: 170,
        height: 70,
        borderRadius: 10,
        borderWidth: 0,
        paddingTop: 22,
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: '#154360'
    },
    Phonetext: {
        textAlign: "center",
        width: 170,
        height: 70,
        borderRadius: 10,
        borderWidth: 0,
        paddingTop: 20,
        fontSize: 16,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: '#1ABC9C'
    },
    alternativeLayoutButtonContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
});
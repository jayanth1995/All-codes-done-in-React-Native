import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const contactIcon = require("../../assets/Icons/contact.png");
const doctorIcon = require("../../assets/Icons/doctor.png");
const peopleIcon = require("../../assets/Icons/people.png");
const paymentIcon = require("../../assets/Icons/payment.png");

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.dayText}>Friday,Mar 26</Text>
        <Text style={styles.priceText}>$200</Text>
        <Text style={styles.txt}>Earnings</Text>
        <Text style={styles.text}>Orders Received:10</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity style={styles.box}>
          <Image style={styles.icon} source={doctorIcon} resizeMode="contain" />
          <Text style={styles.inside}>Your service</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Image style={styles.icon} source={peopleIcon} />
          <Text style={styles.inside}>Client Support</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity style={styles.box}>
          <Image style={styles.icon} source={contactIcon} />
          <Text style={styles.inside}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <Image style={styles.icon} source={paymentIcon} />
          <Text style={styles.inside}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    borderBottomWidth:0.35,
    marginBottom:34.5,
    marginColor:"#707070"

   
  },
  priceText: {
    fontSize: 30,
    marginBottom: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  dayText: {
    fontSize: 16,
    color: "#A2A2A2",
    marginBottom: 26,
  },
  txt: {
    fontSize: 14,
    marginBottom: 23,
  },
  text: {
    fontSize: 18,
    marginBottom: 59,
    
  },
  box: {
    
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.35,
    borderRadius: 12,
    marginBottom: 30,
    width:148,
    height:139
  },
  inside: {
    color: "#A2A2A2",
    marginTop: 16,
  },
  icon: {
    height: 64,
    width: 64,
  },
});

export default Dashboard;

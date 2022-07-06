import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Color from "../../../../constants/Color";

const BusinessRegistration = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Next Payout amount:</Text>
        <Text style={styles.textView}>$10.00</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Pending amount:</Text>
        <Text style={styles.textView}>$70.00</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Lifetime earning:</Text>
        <Text style={styles.textView}>$70.00</Text>
      </View>

      <View style={styles.paymentView}>
        <Text style={styles.mainText}>Payments Received</Text>
        <View style={styles.mainField}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>$20.00</Text>
            <Text style={{ color: Color.gray }}>Deposited on Nov 05, 2021</Text>
          </View>

          <Text style={{ fontSize: 16 }}>Via Bank Transfer</Text>
        </View>

        <View style={styles.mainField}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>$20.00</Text>
            <Text style={{ color: Color.gray }}>Deposited on Nov 05, 2021</Text>
          </View>

          <Text style={{ fontSize: 16 }}>Via Bank Transfer</Text>
        </View>

        <View style={styles.mainField}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>$20.00</Text>
            <Text style={{ color: Color.gray }}>Deposited on Nov 05, 2021</Text>
          </View>

          <Text style={{ fontSize: 16 }}>Via Bank Transfer</Text>
        </View>


        <View style={styles.mainField}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>$20.00</Text>
            <Text style={{ color: Color.gray }}>Deposited on Nov 05, 2021</Text>
          </View>

          <Text style={{ fontSize: 16 }}>Via Bank Transfer</Text>
        </View>

        <View style={styles.mainField}>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>$20.00</Text>
            <Text style={{ color: Color.gray }}>Deposited on Nov 05, 2021</Text>
          </View>

          <Text style={{ fontSize: 16 }}>Via Bank Transfer</Text>
        </View>
      </View>
    </View>
  );
};

export default BusinessRegistration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backgroundLight,
    paddingHorizontal: 16,
  },
  content: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: Color.gray,
  },
  textView: {
    fontSize: 16,
  },
  paymentView: {
    marginTop: 43,
  },
  mainField: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 25.5,
    paddingBottom: 8.5,
    borderBottomWidth: 1,
    borderBottomColor: Color.grayBorder,
  },
  mainText: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: Color.grayBorder,
    paddingBottom: 8.5,
  },
});

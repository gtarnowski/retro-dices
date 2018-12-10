import React from "react";
import { Text, View } from "react-native";
import {FONT_MONTSERRAT_EXTRA_BOLD, FONT_WORKSANS_THIN} from '../lib/constants'

const Summary = ({ value }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
    }}
  >
    <Text style={{ color: "white", fontSize: 20, fontWeight: "100", fontFamily: FONT_WORKSANS_THIN }}>
      RESULT:{" "}
    </Text>
    <Text style={{ color: "white", fontSize: 20, marginBottom: 3, fontWeight: "900", fontFamily: FONT_MONTSERRAT_EXTRA_BOLD }}>
      {value}
    </Text>
  </View>
);

export default Summary;

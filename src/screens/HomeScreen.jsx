import React from "react";
import { View, ScrollView, Button } from "react-native";
import HomeTab from "../components/Home/HomeTab";

import { useNavigation } from "@react-navigation/native";
import { hashTags } from "../utils/testData";

const HomeScreen = () => {
  const n = useNavigation();
  // console.log("hashTags:", JSON.stringify(hashTags, null, 2));
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <HomeTab />
    </View>
  );
};

export default HomeScreen;

import { View, Text } from "react-native";
import React from "react";
import { Button } from "tamagui";

const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome, 🎉</Text>
      <Button>Profile</Button>
    </View>
  );
};

export default Profile;

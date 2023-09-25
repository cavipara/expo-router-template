import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsPage = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#6c47ff",
        },
        headerTintColor: "#fff",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
        // redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          headerTitle: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
        // redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;

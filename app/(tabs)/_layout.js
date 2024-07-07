import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="home" />;
            }
            return <Ionicons size={size} color={color} name="home-outline" />;
          },
        }}
      />
      <Tabs.Screen
        name="passwords"
        options={{
          title: "Senhas Salvas",
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="lock-closed" />;
            }
            return (
              <Ionicons size={size} color={color} name="lock-closed-outline" />
            );
          },
        }}
      />
    </Tabs>
  );
}

import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function AdminLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "dashboard/index") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "events") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "categories") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "profile") {
            iconName = focused ? "person" : "person-outline";
          } else {
            iconName = "help-circle"; // Icône par défaut
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#59570C",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#f8f9fa" },
      })}
    >
      <Tabs.Screen name="dashboard/index" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="events" options={{ title: "Événements" }} />
      <Tabs.Screen name="categories" options={{ title: "Catégories" }} />
      <Tabs.Screen name="profile" options={{ title: "Profil" }} />
    </Tabs>
  );
}


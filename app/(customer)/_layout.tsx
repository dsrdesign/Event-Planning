import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CustomerLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "events") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "reservations") {
            iconName = focused ? "bookmarks" : "bookmarks-outline";
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
      <Tabs.Screen
        name="events"
        options={{
          title: "Événements",
        }}
      />
      <Tabs.Screen
        name="reservations"
        options={{
          title: "Réservations",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
        }}
      />
    </Tabs>
  );
}

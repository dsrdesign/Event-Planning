import { Tabs } from "expo-router";

export default function AdminLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard/index" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="events/index" options={{ title: "Evénements" }} />
      <Tabs.Screen name="categories/index" options={{ title: "Catégories" }} />
      <Tabs.Screen name="profile" options={{ title: "Profil" }} />
    </Tabs>
  );
}

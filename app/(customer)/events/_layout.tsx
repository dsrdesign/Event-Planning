import { Stack } from "expo-router";

export default function EventsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Tous les événements" }} />
      <Stack.Screen name="[id]" options={{ title: "Détail événement" }} />
    </Stack>
  );
}

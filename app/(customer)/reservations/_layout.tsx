import { Stack } from "expo-router";

export default function EventsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Tous les reservations" }} />
      <Stack.Screen name="[id]" options={{ title: "Détail reservation" }} />
    </Stack>
  );
}

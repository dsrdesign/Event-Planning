import { Stack } from "expo-router";

export default function EventLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Tous les evenments" }} />
      <Stack.Screen name="[id]" options={{ title: "Détail d'un événement" }} />
      <Stack.Screen name="new" options={{ title: "Créer un événement" }} />
    </Stack>
  );
}

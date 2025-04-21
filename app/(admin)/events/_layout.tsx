import { Stack } from "expo-router";

export default function EventLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Tous les evenments" }} />
      <Stack.Screen name="new" options={{ title: "Créer un événement" }} />
      <Stack.Screen name="reservation/[id]" options={{ title: "Reservation d'un événement" }} />
      <Stack.Screen name="update/[id]" options={{ title: "Mise à jour d'un événement" }} />
    </Stack>
  );
}

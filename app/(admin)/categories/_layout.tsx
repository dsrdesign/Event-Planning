import { Stack } from "expo-router";

export default function CategoryLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Tous les categories" }} />
      <Stack.Screen name="[id]" options={{ title: "Détail catégorie" }} />
      <Stack.Screen name="new" options={{ title: "Créer une catégorie" }} />
    </Stack>
  );
}

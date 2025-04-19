import { AuthProvider } from "@/contexts/auth-provider";
import RepositoryProvider from "@/contexts/repository-provider";
import { Stack, Slot } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <RepositoryProvider>
        <Stack screenOptions={{ headerShown: false }}>
          {/* Slot permet à expo-router de gérer dynamiquement les routes */}
          <Slot />
        </Stack>
      </RepositoryProvider>
    </AuthProvider>
  );
}


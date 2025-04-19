import { Redirect, Slot } from "expo-router";
import { useAuth } from "@/contexts/auth-provider";
import { ActivityIndicator, View, Text } from "react-native";

export default function RootLayout() {
  const { user, loading } = useAuth();

  console.log("RootLayout: loading =", loading, "user =", user);

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //       <Text>Chargement en cours...</Text>
  //     </View>
  //   );
  // }

  // if (!user) {
  //   console.log("RootLayout: No user found, redirecting to login...");
  //   return <Redirect href="/login" />;
  // }

  if (true) {
    console.log("RootLayout: Admin user detected, redirecting to dashboard...");
    return <Redirect href="/(admin)/dashboard" />;
  }

  console.log("RootLayout: Customer user detected, redirecting to events...");
  return <Redirect href="/(customer)/events" />;
}

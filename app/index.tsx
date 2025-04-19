import { useAuth } from "@/contexts/auth-provider";
import { Redirect } from "expo-router";
import { Text } from "react-native";
import { ActivityIndicator, View } from "react-native";

const App = () => {

     const { user, loading } = useAuth();

  if (loading) {
    console.log("RootLayout: Loading...");
      return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#59570C" }}>
            <Text style={{alignSelf: 'center', color:"#ffffff", fontSize: 24, fontWeight: 'bold', marginBottom: 20}}>{`Event Planning`}</Text>
            <Text style={{alignSelf: 'center', color:"#ffffff", fontSize: 14, }}>{`Loading...`}</Text>

          </View>
        );
  }

  if (!user) {
    console.log("RootLayout: No user detected, redirecting to login...");
    return <Redirect href="/login" />;
  }

  if (user.role === "ADMIN") {
    console.log("RootLayout: Admin user detected, redirecting to dashboard...");
    return <Redirect href="/(admin)/dashboard" />;
  }

  
  console.log("RootLayout: Customer user detected, redirecting to events...", user);
  return <Redirect href="/(customer)/events" />;
  
};

export default App;



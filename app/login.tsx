import { RootView } from "@/components/RootView";
import { COLORS } from "@/constants/colors";
import { useAuth } from "@/contexts/auth-provider";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Button, Pressable, Text, TextInput, ToastAndroid, View } from "react-native";

const Login = () => {
  const { login, user } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const success = login(email, password);
    if (!success) {
      setError("Invalid credentials")
      showToast("Oups, vérifiez vos identifiants et réessayer !")
      return
    };
    showToast("Vous êtes connnecté !")
    console.log("Login: User logged in successfully", user);

    // Redirige vers layout, il gère la suite
    if (user?.role === "ADMIN") {
      console.log("Login: Admin user detected, redirecting to dashboard...");
      router.replace("/");
    } else {
      console.log("Login: Customer user detected, redirecting to events...");
      router.replace("/");
    }

  };

  const showToast = (message: string) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };

  return (
    <RootView style={{width: '100%', justifyContent: 'center'}}>
      <View style={{ paddingHorizontal: 20, gap: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#59570C' }}>Connectez Vous</Text>
        <Text style={{ fontSize: 24 }}>
          {`Bon retour,vous nous \navez manqué`}
        </Text>

        <View style={{ gap: 15 }}>
          <TextInput onChangeText={setEmail} value={email} autoCapitalize="none" style={{ borderStyle: 'solid', borderWidth: 1, borderRadius: 5, padding: 15 }} placeholder="Email"></TextInput>
          <TextInput onChangeText={setPassword} value={password} secureTextEntry style={{ borderStyle: 'solid', borderWidth: 1, borderRadius: 5, padding: 15 }} placeholder="Mot de pase"></TextInput>
        </View>

        <Text style={{ alignSelf: 'flex-end' }}>Mot de passe oubliè ?</Text>

        <Pressable onPress={handleLogin} style={{ backgroundColor: COLORS.primary, padding: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
          <Text style={{ color: COLORS.grayWhite }}>Se connecter</Text>
        </Pressable>


        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>Vous n’avez pas de compte ? </Text>
          <Pressable onPress={() => router.push(`/register`)}>
            <Text style={{ fontWeight: 'bold' }}>S’inscrire</Text>
          </Pressable>
        </View>

      </View>
    </RootView>

  )
};

export default Login;
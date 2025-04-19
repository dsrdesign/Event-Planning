import { useAuth } from "@/contexts/auth-provider";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, ToastAndroid, View } from "react-native";

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
    <View style={{ paddingHorizontal: 20, paddingTop: 100, gap: 20 }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#59570C' }}>Connectez Vous</Text>
      <Text style={{ fontSize: 28 }}>
        {`Bon retour,\nVous nous avez \nmanqué`}
      </Text>
      <View style={{ gap: 15 }}>
        <TextInput onChangeText={setEmail} value={email} autoCapitalize="none" style={{ borderStyle: 'solid', borderWidth: 1, padding: 15 }} placeholder="Email"></TextInput>
        <TextInput onChangeText={setPassword} value={password} secureTextEntry style={{ borderStyle: 'solid', borderWidth: 1, padding: 15 }} placeholder="Mot de pase"></TextInput>
      </View>
      <Button color={"#59570C"} title="Se connecter" onPress={handleLogin} />
      {/* <Link href={{ pathname: "/admin" }} asChild>
                      <TouchableOpacity style={{ width: '100%', height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#59570C', borderRadius: 10 }}>
                           <Text style={{ color: 'white' }}>Se connecter</Text>
                      </TouchableOpacity>
                 </Link> */}

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text>Vous n’avez pas de compte ? </Text>
        <Link href={{ pathname: "/register" }} asChild>
          <Text style={{ fontWeight: 'bold' }}>S’inscrire</Text>
        </Link>
      </View>

    </View>
  )
};

export default Login;
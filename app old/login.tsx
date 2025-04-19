import { useAuth } from "@/contexts/auth-provider";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {

     const { login, user } = useAuth();
     const router = useRouter();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [error, setError] = useState("");
   
     const handleLogin = () => {
       const success = login(email, password);
       if (!success) return setError("Invalid credentials");
   
       // Redirige vers layout, il gère la suite
       if (user?.role === "ADMIN") {
          router.replace("/(admin)/dashboard");
        } else {
          router.replace("/(customer)/events");
        }
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
               <Button title="Se connecter" onPress={handleLogin} />
               {/* <Link href={{ pathname: "/admin" }} asChild>
                    <TouchableOpacity style={{ width: '100%', height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#59570C', borderRadius: 10 }}>
                         <Text style={{ color: 'white' }}>Se connecter</Text>
                    </TouchableOpacity>
               </Link> */}

               <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text>Vous n’avez pas de compte ? </Text>
                    <Link href={{ pathname: "/register" }} asChild>
                    <Text style={{fontWeight: 'bold'}}>S’inscrire</Text>
                    </Link>
               </View>

          </View>
     )
}
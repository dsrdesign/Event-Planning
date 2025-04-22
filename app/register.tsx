import { useState } from "react";
import { RootView } from "@/components/RootView";
import { COLORS } from "@/constants/colors";
import { router } from "expo-router";
import { Pressable, Text, TextInput, View, Alert, StyleSheet } from "react-native";
import { User } from "@/domain/models/User";
import { CreateUserDTO } from "@/domain/dtos/user/create-user.dto";
import { CreateUserUseCase } from "@/domain/use-cases/user/create-user.use-case";
import { useRepositories } from "@/hooks/useRepositorie";

export default function Register() {

     const { userRepository } = useRepositories();
     const createUserUseCase = new CreateUserUseCase(userRepository);

     const [form, setForm] = useState({
          name: "",
          phone: "",
          email: "",
          password: "",
          role: "CUSTOMER" as User["role"],
     });

     const handleChange = (field: keyof typeof form, value: string) => {
          setForm(prev => ({ ...prev, [field]: value }));
     };

     const handleSubmit = () => {
          // Simule une inscription pour l’instant
          if (!form.name || !form.phone || !form.email || !form.password) {
               Alert.alert("Erreur", "Tous les champs sont obligatoires");
               return;
          }

          const payload: CreateUserDTO = {
               ...form,
               phone: Number(form.phone),
          };

          // Exemple : tu pourrais appeler un useCase ici ou faire un fetch/axios
          console.log("Données utilisateur :", payload);

          createUserUseCase.execute(payload)
          Alert.alert("Succès", "Inscription réussie");
          router.push("/login");
     };

     return (
          <RootView style={{ width: '100%', justifyContent: 'center' }}>
               <View style={{ paddingHorizontal: 20, gap: 20 }}>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#59570C' }}>Inscrivez-vous</Text>
                    <Text style={{ fontSize: 18 }}>{`Bon retour, vous nous avez manqué.`}</Text>

                    <View style={{ gap: 15 }}>
                         <TextInput
                              value={form.name}
                              onChangeText={text => handleChange("name", text)}
                              style={styles.input}
                              placeholder="Nom complet"
                         />
                         <TextInput
                              value={form.phone}
                              onChangeText={text => handleChange("phone", text)}
                              style={styles.input}
                              placeholder="Téléphone"
                              keyboardType="phone-pad"
                         />
                         <TextInput
                              value={form.email}
                              onChangeText={text => handleChange("email", text)}
                              style={styles.input}
                              placeholder="Email"
                              keyboardType="email-address"
                              autoCapitalize="none"
                         />
                         <TextInput
                              value={form.password}
                              onChangeText={text => handleChange("password", text)}
                              style={styles.input}
                              placeholder="Mot de passe"
                              secureTextEntry
                         />
                    </View>

                    <Pressable onPress={handleSubmit} style={styles.button}>
                         <Text style={{ color: COLORS.grayWhite }}>S'inscrire</Text>
                    </Pressable>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                         <Text>Vous avez un compte ? </Text>
                         <Pressable onPress={() => router.push("/login")}>
                              <Text style={{ fontWeight: 'bold' }}>Se connecter</Text>
                         </Pressable>
                    </View>
               </View>
          </RootView>
     );
}

const styles = StyleSheet.create({
     input: {
          borderStyle: 'solid',
          borderWidth: 1,
          borderRadius: 5,
          padding: 15
     },
     button: {
          backgroundColor: COLORS.primary,
          padding: 15,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5
     }
});

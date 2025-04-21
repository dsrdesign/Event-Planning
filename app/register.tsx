import { RootView } from "@/components/RootView";
import { COLORS } from "@/constants/colors";
import { Link, router } from "expo-router";
import { Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register() {
     return (
          <RootView style={{ width: '100%', justifyContent: 'center' }}>

               <View style={{ paddingHorizontal: 20, gap: 20 }}>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#59570C' }}>Incrivez Vous</Text>
                    <Text style={{ fontSize: 18 }}>
                         {`Bon retour,Vous nous avez manqué`}
                    </Text>
                    <View style={{ gap: 15 }}>
                         <TextInput style={{ borderStyle: 'solid', borderWidth: 1, borderRadius: 5, padding: 15 }} placeholder="Nom complet"></TextInput>
                         <TextInput style={{ borderStyle: 'solid', borderWidth: 1, borderRadius: 5, padding: 15 }} placeholder="Téléphone"></TextInput>
                         <TextInput style={{ borderStyle: 'solid', borderWidth: 1, borderRadius: 5, padding: 15 }} placeholder="Email"></TextInput>
                         <TextInput style={{ borderStyle: 'solid', borderWidth: 1, borderRadius: 5, padding: 15 }} placeholder="Mot de pase"></TextInput>
                    </View>
                    <Pressable onPress={() => router.push(`/login`)} style={{ backgroundColor: COLORS.primary, padding: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                         <Text style={{ color: COLORS.grayWhite }}>S'inscrire</Text>
                    </Pressable>

                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                         <Text>Vous avez un compte ? </Text>
                         <Pressable onPress={() => router.push(`/login`)}>
                              <Text style={{ fontWeight: 'bold' }}>Se connecter</Text>
                         </Pressable>
                    </View>

               </View>

          </RootView>


     )
}
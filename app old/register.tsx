import { Link } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register() {
     return (
          <ScrollView>
 <View style={{ paddingHorizontal: 20, paddingTop: 100, paddingBottom: 20, gap: 20 }}>
               <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#59570C' }}>Incrivez Vous</Text>
               <Text style={{ fontSize: 18 }}>
                    {`Bon retour,Vous nous avez manqué`}
               </Text>
               <View style={{ gap: 15 }}>
                    <TextInput style={{ borderStyle: 'solid', borderWidth: 1, padding: 15 }} placeholder="Nom complet"></TextInput>
                    <TextInput style={{ borderStyle: 'solid', borderWidth: 1, padding: 15 }} placeholder="Téléphone"></TextInput>
                    <TextInput style={{ borderStyle: 'solid', borderWidth: 1, padding: 15 }} placeholder="Email"></TextInput>
                    <TextInput style={{ borderStyle: 'solid', borderWidth: 1, padding: 15 }} placeholder="Mot de pase"></TextInput>
               </View>
               <Link href={{ pathname: "/" }} asChild>
                    <TouchableOpacity style={{ width: '100%', height: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: '#59570C', borderRadius: 10 }}>
                         <Text style={{ color: 'white' }}>S’inscrire</Text>
                    </TouchableOpacity>
               </Link>

               <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text>Vous avez un compte ? </Text>
                    <Link href={{ pathname: "/login" }} asChild>
                    <Text style={{fontWeight: 'bold'}}>Se connecter </Text>
                    </Link>
               </View>

          </View>
          </ScrollView>
         
     )
}
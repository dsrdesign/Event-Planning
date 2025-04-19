import { RootView } from "@/components/RootView";
import { COLORS } from "@/constants/colors";
import { useAuth } from "@/contexts/auth-provider";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, Button, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

export default function AdminProfile() {
  const { logout, user } = useAuth();

  const handlelogout = async () => {
    try {
      await logout();
      router.replace("/");
    } catch (error) {
      console.log("logout error:", error);
    }
  };
  const idUser = user ? +user.id : 1
  const colors = COLORS

  return (
    <ScrollView>
      <RootView style={{ paddingBottom: 30, flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>

        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          <View>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="notifications-outline" size={24} color={colors.grayDark} />
            </TouchableOpacity>
          </View>
          <View >
            <Text style={{ fontSize: 28, color: colors.primary, fontWeight: 'bold', marginTop: 20 }}>{`Mon Profil`}</Text>

            <Text style={{ fontSize: 18, marginTop: 20 }}>Retrouvez vos information personnelles</Text>

            <View style={{gap: 30, marginTop:30}}>
              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Name</Text>
                <Text>{user?.name}</Text>
              </View>

              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Télephone</Text>
                <Text>{user?.phone}</Text>
              </View>

              <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Email</Text>
                <Text>{user?.email}</Text>
              </View>
            </View>


          </View>
        </View>





        <View style={{ paddingHorizontal: 20, flex: 1, marginTop: 20 }}>
          <Button title="Se déconnecter" color={colors.primary} onPress={handlelogout} />
        </View>
      </RootView>
    </ScrollView>

  );
}

const styles = StyleSheet.create({

  button: {
    width: 50,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  }
});
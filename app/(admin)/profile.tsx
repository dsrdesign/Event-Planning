import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { COLORS } from "@/constants/colors";
import { useAuth } from "@/contexts/auth-provider";
import { AntDesign, FontAwesome, Fontisto, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, Button, ScrollView, TouchableOpacity, StyleSheet, Pressable } from "react-native";

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
      <RootView>
        <View style={{ padding: 25, backgroundColor: '#FFFFFF', marginTop: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#59570C' }}>Mon Profil</Text>

        </View>
        <ScrollView>

        <View style={{ paddingHorizontal: 20, paddingVertical: 15, flex: 1, justifyContent: 'space-between', gap: 10 }}>


          <Text style={{ fontSize: 18,}}>{`Retrouvez vos informations \npersonnelles`}</Text>

          <View style={{ gap: 10 }}>
            <View style={{ backgroundColor: colors.grayWhite, padding: 20, borderRadius: 5 }}>
              <Row gap={10}>
                <AntDesign name="user" size={38} color="black" />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Name</Text>
                  <Text>{user?.name}</Text>
                </View>
              </Row>

            </View>

            <View style={{ backgroundColor: colors.grayWhite, padding: 20, borderRadius: 5 }}>
              <Row gap={10}>
                <FontAwesome name="phone" size={38} color="black" />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Télephone</Text>
                  <Text>{user?.phone}</Text>
                </View>
              </Row>

            </View>

            <View style={{ backgroundColor: colors.grayWhite, padding: 20, borderRadius: 5 }}>
              <Row gap={10}>
                <Fontisto name="email" size={38} color="black" />
                <View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Email</Text>
                  <Text>{user?.email}</Text>
                </View>
              </Row>
            </View>
          </View>

          <Pressable onPress={handlelogout} style={{ backgroundColor: COLORS.primary, padding: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
          <Text style={{ color: COLORS.grayWhite }}>Se déconnecter</Text>
        </Pressable>
        </View>
        </ScrollView>



      </RootView>

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
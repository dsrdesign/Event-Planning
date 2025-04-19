import { ScrollView, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={{
      flex: 1,
    }}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 25,
            paddingTop: 50,
            paddingBottom: 100,
            gap: 10
          }}
        >
          <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20 }}>Dashboard</Text>

          <View style={{ padding: 20, borderStyle: 'solid', borderWidth: 1, borderRadius: 10 }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>25</Text>
            <Text>Evènements en cours</Text>
            <Text style={{ color: 'green', marginTop: 10 }}>+10%</Text>
          </View>

          <View style={{ padding: 20, borderStyle: 'solid', borderWidth: 1, borderRadius: 10 }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>73</Text>
            <Text>Reservations actives</Text>
            <Text style={{ color: 'red', marginTop: 10 }}>-10%</Text>
          </View>

          <View style={{ padding: 20, borderStyle: 'solid', borderWidth: 1, borderRadius: 10 }}>
            <Text style={{ fontSize: 32, fontWeight: 'bold' }}>12</Text>
            <Text>Nouveaux utilisateurs </Text>
            <Text style={{ color: 'green', marginTop: 10 }}>+10%</Text>
          </View>
        </View>
      </ScrollView>

{/* 
      <View style={{ position: 'absolute', bottom: 0, width: '100%', padding: 20, backgroundColor: 'white', elevation: 30, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
        <Link href={{ pathname: "/admin" }} >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="pie-chart-sharp" size={24} color="#59570C" />
            <Text style={{ fontSize: 12 }}>Dasboard</Text>
          </View>
        </Link>

        <Link href={{ pathname: "/admin/categories" }} >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="settings" size={24} color="#1B1B1B" />
            <Text style={{ fontSize: 12 }}>Catégories</Text>
          </View>
        </Link>

        <Link href={{ pathname: "/admin/events" }} >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="timer" size={24} color="#1B1B1B" />
            <Text style={{ fontSize: 12 }}>Evènements</Text>
          </View>
        </Link>

        <Link href={{ pathname: "/admin/profile" }} >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="man-sharp" size={24} color="#1B1B1B" />
            <Text style={{ fontSize: 12 }}>Profil</Text>
          </View>
        </Link>

      </View> */}

    </View>


  );
}

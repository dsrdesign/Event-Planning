import { ScrollView, Text, View } from "react-native";

export default function AdminDashboard() {
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
  
  
  
      </View>
  )
}

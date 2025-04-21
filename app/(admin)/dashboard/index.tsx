import { RootView } from "@/components/RootView";
import { COLORS } from "@/constants/colors";
import { ScrollView, Text, View } from "react-native";

export default function AdminDashboard() {
  return (
    <RootView>

      <View style={{
        flex: 1,
      }}>
          <View style={{ padding: 25, backgroundColor: '#FFFFFF', marginTop: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: COLORS.primary }}>Dashboard</Text>
          </View>
          <ScrollView>

          <View
            style={{
              flex: 1,
              paddingHorizontal: 25,
              paddingTop: 30,
              paddingBottom: 30,
              gap: 10
            }}
          >


            <View style={{ paddingHorizontal: 20, paddingVertical: 15, borderStyle: 'solid', borderColor: COLORS.grayLight, borderWidth: 1, borderRadius: 10 }}>
              <Text style={{ fontSize: 28, fontWeight: 'bold' }}>25</Text>
              <Text>Evènements en cours</Text>
              <Text style={{ color: 'green', marginTop: 10 }}>+10%</Text>
            </View>

            <View style={{ paddingHorizontal: 20, paddingVertical: 15, borderStyle: 'solid', borderColor: COLORS.grayLight, borderWidth: 1, borderRadius: 10 }}>
              <Text style={{ fontSize: 28, fontWeight: 'bold' }}>75</Text>
              <Text>Reservations actives</Text>
              <Text style={{ color: 'red', marginTop: 10 }}>-10%</Text>
            </View>

            <View style={{ paddingHorizontal: 20, paddingVertical: 15, borderStyle: 'solid', borderColor: COLORS.grayLight, borderWidth: 1, borderRadius: 10 }}>
              <Text style={{ fontSize: 28, fontWeight: 'bold' }}>12</Text>
              <Text>Nouveaux utilisateurs </Text>
              <Text style={{ color: 'green', marginTop: 10 }}>+10%</Text>
            </View>
          </View>
        </ScrollView>



      </View>
    </RootView>
  )
}

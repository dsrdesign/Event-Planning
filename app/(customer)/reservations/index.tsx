import { ReservationCard } from "@/components/event/ReservationCard";
import { RootView } from "@/components/RootView";
import { COLORS } from "@/constants/colors";
import { useAuth } from "@/contexts/auth-provider";
import { Reservation } from "@/core/models/Reservation";
import { GetReservationsByCustomerUseCase } from "@/core/use-cases/reservation/get-reservation-byCustomer.use-case";
import { useRepositories } from "@/hooks/useRepositorie";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import {FlatList, ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";

export default function CustomerReservations() {
  const {user} = useAuth()
  const idUser =  user ? +user.id : 1
  const colors = COLORS
  // const reservations = ReservationGateway.getReservationsByCustomer(+idUser)
  const { reservationRepository } = useRepositories();
  const getReservationsByCustomerUseCase = new GetReservationsByCustomerUseCase(reservationRepository);
  const [reservations, setReservations] = useState<Reservation[]>([])

  useFocusEffect(() => {
    const newReservations = getReservationsByCustomerUseCase.execute(idUser)
    setReservations(newReservations);
  }, );

  return (
    <ScrollView>
      <RootView style={{ paddingBottom: 30 }}>
        <View style={{ paddingHorizontal: 20 }}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="notifications-outline" size={24} color={colors.grayDark} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 20, paddingTop: 0 }}>
          <Text style={{ fontSize: 28, color: colors.primary, fontWeight: 'bold' }}>{`Mes reservations`}</Text>
        </View>
        

        <View>
          <FlatList
            data={reservations}
            nestedScrollEnabled
            contentContainerStyle={[styles.gridGap, styles.list]}
            renderItem={({ item }) =>
              <ReservationCard reservation={item} style={{flex: 1}}/>
              
            }
            keyExtractor={(item) => item.id.toString()} />

        </View>

      </RootView>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  button: {
    width: 50,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  gridGap: {
    gap: 8
  },
  list: {
    padding: 12
  },
  form: {
    paddingHorizontal: 20
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15
  }
});
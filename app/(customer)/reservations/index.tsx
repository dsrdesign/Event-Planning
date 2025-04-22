import { ReservationCard } from "@/components/reservation/ReservationCard";
import { RootView } from "@/components/RootView";
import { COLORS } from "@/constants/colors";
import { useAuth } from "@/contexts/auth-provider";
import { Reservation } from "@/domain/models/Reservation";
import { GetReservationsByCustomerUseCase } from "@/domain/use-cases/reservation/get-reservation-byCustomer.use-case";
import { useRepositories } from "@/hooks/useRepositorie";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
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
  }, undefined );

  return (
      <RootView style={{ paddingBottom: 30 }}>
       
        <View style={{ padding: 25, backgroundColor: '#FFFFFF', marginTop: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 28, color: colors.primary, fontWeight: 'bold' }}>{`Mes reservations`}</Text>
        </View>
        

        <View style={{flex:1}}>
          {
            reservations.length === 0 && (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: colors.primary }}>Aucune réservation trouvée</Text>
              </View>
            )
          }
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
import { Event } from "@/domain/models/Event"
import { Ionicons } from "@expo/vector-icons"
import { Image, TouchableOpacity, View, ViewStyle } from "react-native"
import { Row } from "../Row"
import { Text } from "react-native"
import { COLORS } from "@/constants/colors"
import { router } from "expo-router"
import { useState } from "react"
import { Reservation } from "@/domain/models/Reservation"

type Props = {
  style?: ViewStyle,
  reservation: Reservation
}

export const ReservationCard = ({ reservation, style }: Props) => {
  const colors = COLORS
  return (
    <TouchableOpacity onPress={() => router.push(`/reservations/${reservation.id}`)} style={[style, { borderWidth: 1, padding: 10, borderRadius: 5, borderColor: colors.grayLight }]}>
      <View >
        {/* <Image style={{ width: '100%', height: 100, borderRadius: 7 }} source={require("@/assets/images/koc.png")} /> */}
        <View style={{ marginVertical: 5, gap: 10 }}>
          <Row gap={5}>
            <View style={[{ paddingHorizontal: 10, paddingVertical: 3, backgroundColor: colors.grayLight, borderRadius: 20 }]}>
              <Text style={{ fontSize: 14, color: colors.grayDark }}>{`${reservation.event?.category.title}`}</Text>
            </View>

          </Row>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.primary }}>{reservation.event?.title}</Text>
          <Row>

            <View style={[{ paddingHorizontal: 5, paddingVertical: 3, backgroundColor: colors.grayDark }]}>
              <Row gap={5}>
                <Ionicons name="ticket-outline" size={16} color={colors.grayWhite} />
                <Text style={{ fontSize: 12, color: colors.grayWhite }}>{`${reservation.numberPlace} Places reservées`}</Text>
              </Row>
            </View>



          </Row>
          <View style={[{}]}>
            <Row gap={5}>
              <Ionicons name="location-outline" size={16} color={colors.grayDark} />
              <Text style={{ fontSize: 12, color: colors.grayDark }}>{reservation.event?.location}</Text>
            </Row>
          </View>

          <View style={[{}]}>
            <Row gap={5}>
              <Ionicons name="calendar-outline" size={16} color={colors.grayDark} />
              <Text style={{ fontSize: 12, color: colors.grayDark }}>{`${reservation.event?.date.toUTCString()}`}</Text>
            </Row>
          </View>

          <View style={[{ paddingHorizontal: 0, paddingVertical: 3 }]}>
            <Row gap={5}>
              <Ionicons name="timer-outline" size={16} color={colors.grayDark} />
              <Text style={{ fontSize: 12, color: colors.grayDark }}>{reservation.event?.time}</Text>
            </Row>
          </View>



        </View>

      </View>
    </TouchableOpacity>

  )
}
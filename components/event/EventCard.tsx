import { Event } from "@/domain/models/Event"
import { Ionicons } from "@expo/vector-icons"
import { Image, TouchableOpacity, View, ViewStyle } from "react-native"
import { Row } from "../Row"
import { Text } from "react-native"
import { COLORS } from "@/constants/colors"
import { Href, router } from "expo-router"
import { useState } from "react"

type Props = {
  style?: ViewStyle,
  event: Event,
  path: Href,
}

export const EventCard = ({ event, style, path }: Props) => {
  const colors = COLORS

  const formatDate = (date: any) => {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Mois de 0 à 11
    const day = String(date.getUTCDate()).padStart(2, '0'); // Jour du mois

    return `${year}-${month}-${day}`;
  };

  return (
    <TouchableOpacity onPress={() => router.push(path)} style={[style, { borderWidth: 1, borderColor: colors.grayLight, padding: 10, borderRadius: 10 }]}>
      <View >
        {/* <Image style={{ width: '100%', height: 100, borderRadius: 7 }} source={require("@/assets/images/koc.png")} /> */}
        <View style={{ marginVertical: 5, gap: 5 }}>
          <Row gap={5}>
            <View style={[{ paddingHorizontal: 10, paddingVertical: 3, backgroundColor: colors.grayLight, borderRadius: 20 }]}>
              <Text style={{ fontSize: 10, color: colors.grayDark }}>{`${event?.category?.title}`}</Text>
            </View>


          </Row>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.primary }}>{event?.title}</Text>
          <Row>

            {
              event.capacity === 0
                ?

                <View style={[{ paddingHorizontal: 5, paddingVertical: 3, backgroundColor: colors.grayDark }]}>
                  <Row gap={2}>
                    <Ionicons name="ticket-outline" size={12} color={colors.grayWhite} />
                    <Text style={{ fontSize: 8, color: colors.grayWhite }}>{`Evènement Complet`}</Text>
                  </Row>
                </View>

                :
                <View style={[{ paddingHorizontal: 5, paddingVertical: 3, backgroundColor: colors.grayDark }]}>
                  <Row gap={2}>
                    <Ionicons name="ticket-outline" size={12} color={colors.grayWhite} />
                    <Text style={{ fontSize: 8, color: colors.grayWhite }}>{`${event.capacity} Places`}</Text>
                  </Row>
                </View>
            }
          </Row>
          <View style={[{}]}>
            <Row gap={2}>
              <Ionicons name="location-outline" size={12} color={colors.grayDark} />
              <Text style={{ fontSize: 8, color: colors.grayDark }}>{event.location}</Text>
            </Row>
          </View>

          <View style={[{}]}>
            <Row gap={2}>
              <Ionicons name="calendar-outline" size={12} color={colors.grayDark} />
              <Text style={{ fontSize: 8, color: colors.grayDark }}>{`${formatDate(event.date)}`}</Text>
            </Row>
          </View>

          <View style={[{ paddingHorizontal: 0, paddingVertical: 3 }]}>
            <Row gap={2}>
              <Ionicons name="timer-outline" size={12} color={colors.grayDark} />
              <Text style={{ fontSize: 8, color: colors.grayDark }}>{event.time}</Text>
            </Row>
          </View>



        </View>

      </View>
    </TouchableOpacity>

  )
}
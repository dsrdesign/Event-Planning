import { View, Text, Image, ScrollView, Button, Pressable, ToastAndroid } from "react-native";
import { useRouter, useLocalSearchParams, Stack } from "expo-router";
import { Row } from "@/components/Row";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { EventGateway, ReservationGateway } from "@/config/providers";
import { RootView } from "@/components/RootView";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-provider";
import { Reservation } from "@/domain/models/Reservation";
import Toast from 'react-native-toast-message';


const ReservationDetails = () => {

  const { id } = useLocalSearchParams();
  const reservation = ReservationGateway.getOneReservation(+id)
  const colors = COLORS


  return (
    <ScrollView>

      <RootView style={{zIndex: -1}}>
        <Row style={{paddingHorizontal: 10, marginBottom: 10}}>
          <AntDesign name="arrowleft" size={30}/>
        </Row>
        <Image style={{ width: '100%', height: 250, borderRadius: 7 }} source={require("@/assets/images/koc.png")} />
        <View style={{ marginVertical: 5, paddingHorizontal: 30, gap: 15 }}>
        <Row>
          <View style={[{ paddingHorizontal: 10, paddingVertical: 3, backgroundColor: colors.grayLight, borderRadius:20 }]}>
              <Text style={{ fontSize: 14, color: colors.grayDark }}>{`${reservation.event?.category.title}`}</Text>
          </View>
          </Row>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: colors.primary }}>{reservation.event?.title}</Text>
          <Text style={{ fontSize: 14, }}>{reservation.event?.description}</Text>
          <Row>

            <View style={[{ paddingHorizontal: 5, paddingVertical: 3, backgroundColor: colors.grayDark }]}>
              <Row gap={2}>
                <Ionicons name="ticket-outline" size={16} color={colors.grayWhite} />
                <Text style={{ fontSize: 14, color: colors.grayWhite }}>{`${reservation.numberPlace} Places reservées`}</Text>
              </Row>
            </View>
          </Row>
          <View style={[{}]}>
            <Row gap={2}>
              <Ionicons name="location-outline" size={16} color={colors.grayDark} />
              <Text style={{ fontSize: 14, color: colors.grayDark }}>{reservation.event?.location}</Text>
            </Row>
          </View>

          <View style={[{}]}>
            <Row gap={2}>
              <Ionicons name="calendar-outline" size={16} color={colors.grayDark} />
              <Text style={{ fontSize: 14, color: colors.grayDark }}>{`${reservation.event?.date?.toUTCString()}`}</Text>
            </Row>
          </View>

          <View style={[{ paddingHorizontal: 0, paddingVertical: 3 }]}>
            <Row gap={2}>
              <Ionicons name="timer-outline" size={16} color={colors.grayDark} />
              <Text style={{ fontSize: 14, color: colors.grayDark }}>{reservation.event?.time}</Text>
            </Row>
          </View>
          

        </View>

      </RootView>
    </ScrollView>


  );
};

export default ReservationDetails;
import { View, Text, Image, ScrollView, Button, Pressable, ToastAndroid, Alert } from "react-native";
import { useRouter, useLocalSearchParams, Stack, useFocusEffect } from "expo-router";
import { Row } from "@/components/Row";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";
import { RootView } from "@/components/RootView";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-provider";
import { GetOneEventUseCase } from "@/domain/use-cases/event/getOne-event.use-case";
import { CreateReservationUseCase } from "@/domain/use-cases/reservation/create-reservation.use-case";
import { UpdateCapacityEventUseCase } from "@/domain/use-cases/event/update-capacity-event.use-case";
import { useRepositories } from "@/hooks/useRepositorie";
import { Event } from "@/domain/models/Event";


const EventDetails = () => {
  const { user } = useAuth()
  const { id } = useLocalSearchParams();

  const { eventRepository, reservationRepository } = useRepositories();
  const getOneEventUseCase = new GetOneEventUseCase(eventRepository);
  const updateCapacityEventUseCase = new UpdateCapacityEventUseCase(eventRepository);
  const createReservationUseCase = new CreateReservationUseCase(reservationRepository);

  const [event, setEvent] = useState<Event>()
  const [isReseve, setIsReserve] = useState(false)
  const [numberPlace, setNumberPlace] = useState(1)
  const colors = COLORS

  const handleReserve = () => {

    if (user && event) {
      const data = createReservationUseCase.execute({ idEvent: event?.id, idUser: user, numberPlace: numberPlace })
      const updateCapacity = updateCapacityEventUseCase.execute(event?.id, (event?.capacity - numberPlace))
      event.capacity = event?.capacity - numberPlace
    }
    if (!true) {
      Alert.alert("Oups", "La reseravtion n'a pas pu être enregistré, veuillez réessayer !");
      return
    }

    console.log("Reservation effectuée :", user);
    Alert.alert("Succès", "Reservation effectuée avec success !");
    setIsReserve(false)

  }



  const showToast = (message: string) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
  };

  useFocusEffect(() => {
    const newEvent = getOneEventUseCase.execute(+id)
    console.log("Mon event", newEvent, id);
    setEvent(newEvent);
  }, undefined);

  return (
    <ScrollView>
      {/* <Toast ref={(ref) => Toast.setRef(ref)} style={{ zIndex: 1000, position: 'absolute' }} /> */}

      <RootView style={{ zIndex: -1 }}>
        <Row style={{ paddingHorizontal: 10, marginBottom: 10 }}>
          <AntDesign name="arrowleft" size={30} />
        </Row>
        <Image style={{ width: '100%', height: 250, borderRadius: 7 }} source={require("@/assets/images/koc.png")} />
        <View style={{ marginVertical: 5, paddingHorizontal: 30, gap: 15 }}>
          <Row>
            <View style={[{ paddingHorizontal: 10, paddingVertical: 3, backgroundColor: colors.grayLight, borderRadius: 20 }]}>
              <Text style={{ fontSize: 14, color: colors.grayDark }}>{`${event?.category.title}`}</Text>
            </View>
          </Row>

          <Text style={{ fontSize: 28, fontWeight: 'bold', color: colors.primary }}>{event?.title}</Text>
          <Text style={{ fontSize: 14, }}>{event?.description}</Text>
          <Row>

            {
              event?.capacity === 0
                ?

                <View style={[{ paddingHorizontal: 5, paddingVertical: 3, backgroundColor: colors.grayDark }]}>
                  <Row gap={2}>
                    <Ionicons name="ticket-outline" size={16} color={colors.grayWhite} />
                    <Text style={{ fontSize: 14, color: colors.grayWhite }}>{`Evènement Complet`}</Text>
                  </Row>
                </View>

                :
                <View style={[{ paddingHorizontal: 5, paddingVertical: 3, backgroundColor: colors.grayDark }]}>
                  <Row gap={2}>
                    <Ionicons name="ticket-outline" size={16} color={colors.grayWhite} />
                    <Text style={{ fontSize: 14, color: colors.grayWhite }}>{`${event?.capacity} Places`}</Text>
                  </Row>
                </View>
            }


          </Row>
          <View style={[{}]}>
            <Row gap={2}>
              <Ionicons name="location-outline" size={16} color={colors.grayDark} />
              <Text style={{ fontSize: 14, color: colors.grayDark }}>{event?.location}</Text>
            </Row>
          </View>

          <View style={[{}]}>
            <Row gap={2}>
              <Ionicons name="calendar-outline" size={16} color={colors.grayDark} />
              <Text style={{ fontSize: 14, color: colors.grayDark }}>{`${event?.date}`}</Text>
            </Row>
          </View>

          <View style={[{ paddingHorizontal: 0, paddingVertical: 3 }]}>
            <Row gap={2}>
              <Ionicons name="timer-outline" size={16} color={colors.grayDark} />
              <Text style={{ fontSize: 14, color: colors.grayDark }}>{event?.time}</Text>
            </Row>
          </View>
          <View>
            {isReseve
              ? <View>

                <Row style={{ justifyContent: 'space-between', padding: 10, borderWidth: 1, borderRadius: 5 }}>
                  <Row gap={15}>
                    <Pressable onPress={() => setNumberPlace(numberPlace > 1 ? numberPlace - 1 : numberPlace)}>
                      <AntDesign name="minus" size={30} color="black" />
                    </Pressable>
                    <View style={{ borderWidth: 1, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 20 }}>{numberPlace}</Text>
                    </View>
                    {
                      event
                        ?
                        <Pressable onPress={() => setNumberPlace(numberPlace < event?.capacity ? numberPlace + 1 : numberPlace)}>
                          <AntDesign name="plus" size={30} color="black" />
                        </Pressable> :
                        <View></View>
                    }

                  </Row>
                  <Row gap={20}>
                    <Pressable onPress={() => setIsReserve(false)}>
                      <AntDesign name="close" size={30} color="red" />
                    </Pressable>
                    <Pressable onPress={() => handleReserve()}>
                      <AntDesign name="checkcircle" size={30} color={colors.primary} />
                    </Pressable>
                  </Row>
                </Row>

              </View>
              : <View>
                {
                  event

                    ?
                    <Button disabled={(event?.capacity) <= 0 ? true : false} color={colors.primary} onPress={() => setIsReserve(true)} title={event?.capacity <= 0 ? "Evènement complet" : "Reservers des places"} />
                    :
                    <View></View>
                }
              </View>}
          </View>

        </View>

      </RootView>
    </ScrollView>


    //   <View>
    //   <Text>Détails de l'événemen : {id}</Text>
    // </View>
  );
};

export default EventDetails;

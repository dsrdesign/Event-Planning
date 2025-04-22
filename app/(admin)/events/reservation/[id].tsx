import { DeleteModal } from "@/components/deleteModal";
import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import { COLORS } from "@/constants/colors";
import { Reservation } from "@/domain/models/Reservation";
import { DeleteEventUseCase } from "@/domain/use-cases/event/delete-event.use-case";
import { GetOneEventUseCase } from "@/domain/use-cases/event/getOne-event.use-case";
import { GetReservationsByEventUseCase } from "@/domain/use-cases/reservation/get-reservattion-byEvent.use-case";
import { useRepositories } from "@/hooks/useRepositorie";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import { Alert, FlatList, Image, Pressable, ScrollView, Text, View } from "react-native";

const ReservationsEvent = () => {

  const { id } = useLocalSearchParams();
  const colors = COLORS

  const { eventRepository, reservationRepository } = useRepositories();
  const getOneEventUseCase = new GetOneEventUseCase(eventRepository);
  const getReservationsByEventUseCase = new GetReservationsByEventUseCase(reservationRepository);
  const deleteEventUseCase = new DeleteEventUseCase(eventRepository);

  const data = getReservationsByEventUseCase.execute(+id)
  const [reservations, setReservations] = useState<Reservation[]>(data)
  const [seeReservation, setSeeReservation] = useState(false)
  const reservationRef = useRef<View | null>(null);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const event = getOneEventUseCase.execute(+id)

  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [eventToDelete, setEventToDelete] = useState<null | number>(null);

  const handleDelete = (confirmed: boolean) => {
    setModalVisible(false); // Fermer le modal
    if (confirmed && eventToDelete) {
      // Logique pour gérer la confirmation
      deleteEventUseCase.execute(eventToDelete);
      Alert.alert("Succès", "Evènement supprimé avec succès !");
      console.log("L'utilisateur a confirmé la suppression de la catégorie :", eventToDelete);
      router.push(`/(admin)/events`)
      // Ajoutez ici la logique pour supprimer la catégorie
    } else {
      console.log("L'utilisateur a annulé la suppression.");
    }
  };

  const handleSeeReservation = () => {
    setSeeReservation(prev => !prev);

    if (reservationRef.current && scrollViewRef.current) {
      reservationRef.current.measure((x, y, width, height, pageX, pageY) => {
        if (scrollViewRef.current) {
          scrollViewRef.current.scrollTo({ y: pageY, animated: true });
        }
      });
    }
  }

  return (
    <ScrollView ref={scrollViewRef}>

      <RootView style={{ zIndex: -1, paddingBottom: 10 }}>
        <Row style={{ paddingHorizontal: 10, marginBottom: 10 }}>
          <AntDesign name="arrowleft" size={30} />
        </Row>
        <Image style={{ width: '100%', height: 250, borderRadius: 7 }} source={require("@/assets/images/koc.png")} />
        <View style={{ marginVertical: 5, paddingHorizontal: 30, gap: 15 }}>
          <Row gap={5} style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <Pressable onPress={() => router.push(`/(admin)/events/update/${id}`)} style={{ flexDirection: 'row', alignSelf: 'flex-end', borderWidth: 1, padding: 8, borderRadius: 5 }}>
              <Ionicons name="pencil-outline" size={18} color="#59570C" />
              <Text>Modifier</Text>

            </Pressable>
            <Pressable
              style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 8, borderColor: 'red', borderRadius: 5 }}
              onPress={() => {
                setEventToDelete(+id); // Mettre à jour l'ID de la catégorie à supprimer
                setModalVisible(true);
              }}
            ><Ionicons name="trash" size={18} color="red" />
            <Text style={{ color: 'red' }}>Supprimer</Text>
          </Pressable>

          </Row>

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
          <View style={[{ paddingHorizontal: 0, paddingVertical: 3, alignItems: 'center', justifyContent: 'center' }]}>
            <Text style={{ marginBottom: 10 }}>{reservations.length} reservations</Text>
            <Pressable onPress={handleSeeReservation}>
              <Row gap={2} style={{ paddingHorizontal: 10, paddingVertical: 5, borderWidth: 1, borderColor: colors.grayDark }}>
                <Ionicons name="ticket-outline" size={16} color={colors.grayDark} />
                <Text style={{ fontSize: 14, color: colors.grayDark }}>{seeReservation ? 'Masquer' : 'Voir'} les réservations</Text>
              </Row>
            </Pressable>
          </View>

        </View>

        {
          seeReservation
            ?

            reservations.length > 0

              ?
              <View style={{ paddingHorizontal: 20, marginBottom: 0, width: '100%', }}>
                <View style={{ paddingHorizontal: 20, paddingTop: 30, width: '100%', justifyContent: 'center', borderWidth: 1, borderColor: colors.grayLight, borderRadius: 5 }}>
                  <Text style={{ fontSize: 24, alignSelf: 'center', fontWeight: 'bold', marginBottom: 20 }}>Les reservations</Text>
                  <View ref={reservationRef}>
                    <FlatList
                      data={reservations}

                      contentContainerStyle={[{ gap: 10 }, { paddingVertical: 12 }]}
                      renderItem={({ item }) =>
                        <View style={{ backgroundColor: colors.grayWhite, padding: 20, borderRadius: 5, gap: 10 }}>
                          <Text style={{ fontWeight: 'bold' }}>{item.user?.name}</Text>
                          <Row gap={15}>
                            <View style={[{ paddingVertical: 3, }]}>
                              <Row gap={5}>
                                <Feather name="phone" size={16} color={colors.grayDark} />
                                <Text style={{ fontSize: 14, color: colors.grayDark }}>{item.user?.phone}</Text>
                              </Row>
                            </View>

                            <View style={[{ paddingHorizontal: 5, paddingVertical: 3, backgroundColor: colors.grayDark }]}>
                              <Row gap={2}>
                                <Ionicons name="ticket-outline" size={16} color={colors.grayWhite} />
                                <Text style={{ fontSize: 14, color: colors.grayWhite }}>{`${item?.numberPlace} Places`}</Text>
                              </Row>
                            </View>
                          </Row>

                        </View>
                      }
                      keyExtractor={(item) => item.id.toString()} />
                  </View>
                </View>
              </View>

              :
              <View style={{ padding: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 12, color: colors.grayDark }}>Aucune réservation trouvée !</Text>
              </View>

            :
            <View></View>
        }

        <DeleteModal
          message={`Voulez-vous vraiment supprimer l'evenement : ${event?.title} ?`}
          isVisible={isModalVisible}
          onConfirm={handleDelete}
        />

      </RootView>
    </ScrollView>

  );
}


export default ReservationsEvent
import { EventCard } from "@/components/event/EventCard";
import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import SearchBar from "@/components/SearchBar";
import { EventGateway } from "@/config/providers";
import { CATEGORIES } from "@/constants/categories";
import { COLORS } from "@/constants/colors";
import { EVENTS } from "@/constants/events";
import { Category } from "@/core/models/Category";
import { Event } from "@/core/models/Event";
import { GetAllCategoriesUseCase } from "@/core/use-cases/category/getAll-categories.use-case";
import { GetAllEventsUseCase } from "@/core/use-cases/event/getAll-event.use-case";
import { useRepositories } from "@/hooks/useRepositorie";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator, FlatList, Image, Pressable, ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const Events = () => {
  const colors = COLORS

  const { eventRepository, categoryRepository } = useRepositories();
  const [events, setEvents] = useState<Event[]>([])
  const getAllEventsUseCase = new GetAllEventsUseCase(eventRepository);
  const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoryRepository);
  const categories = getAllCategoriesUseCase.execute()
  const [checkCategory, setCheckCategory] = useState(0)
  const [sortKey, setSortKey] = useState<"id" | "title">("title")
  const [search, setSearch] = useState('')

  const filteredEvents = events
  .filter(event => 
    !search || event.title.toLowerCase().includes(search.toLowerCase()) || event.location.toLowerCase().includes(search.toLowerCase())
  )
  .filter(event => 
    checkCategory === 0 || event.category.id === checkCategory
  )
  .sort((a, b) => (a[sortKey] < b[sortKey] ? -1 : 1));

  useFocusEffect(() => {
    const newEvents = getAllEventsUseCase.execute()
    setEvents(newEvents);
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
          <Text style={{ fontSize: 28, color: colors.primary, fontWeight: 'bold' }}>{`Découvrez les \nEvènements`}</Text>
        </View>
        <Row gap={16} style={styles.form}>
          <SearchBar value={search} onChange={setSearch} />
        </Row>

        <Row gap={10} style={{ paddingHorizontal: 20, paddingTop: 20 }}>

          <FlatList
            data={categories}
            horizontal
            nestedScrollEnabled
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Pressable onPress={() => setCheckCategory(item.id)}>
                <View style={[styles.item, { backgroundColor: checkCategory === item.id ? colors.grayDark : colors.grayWhite }]}>
                  <Text style={{ fontSize: 12, color: checkCategory === item.id ? colors.grayWhite : colors.grayDark }}>
                    {item.title}
                  </Text>
                </View>
              </Pressable>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 5 }}// Masquer la barre de défilement
          />
        </Row>

        <View>
          {
            !filteredEvents.length 
            ? 
            <Text style={{alignSelf : 'center',marginTop: 20}}>Aucun evènement trouvé !</Text>
            : <FlatList
            data={filteredEvents}
            nestedScrollEnabled
            numColumns={2}
            contentContainerStyle={[styles.gridGap, styles.list]}
            columnWrapperStyle={styles.gridGap}
            renderItem={({ item }) =>
              <EventCard event={item} style={{flex: 1 / 2}}/>
              
            }
            keyExtractor={(item) => item.id.toString()} /> 
          }
          

        </View>

      </RootView>
    </ScrollView>


  );
};

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

export default Events;

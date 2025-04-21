import { EventCard } from "@/components/event/EventCard";
import { RootView } from "@/components/RootView";
import { Row } from "@/components/Row";
import SearchBar from "@/components/SearchBar";
import { SortButton } from "@/components/SortButton";
import { EventGateway } from "@/config/providers";
import { CATEGORIES } from "@/constants/categories";
import { COLORS } from "@/constants/colors";
import { EVENTS } from "@/constants/events";
import { Category } from "@/domain/models/Category";
import { Event } from "@/domain/models/Event";
import { GetAllCategoriesUseCase } from "@/domain/use-cases/category/getAll-categories.use-case";
import { GetAllEventsUseCase } from "@/domain/use-cases/event/getAll-event.use-case";
import { useRepositories } from "@/hooks/useRepositorie";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, FlatList, Image, Pressable, ScrollView, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";

const Events = () => {
  const colors = COLORS

  const { eventRepository, categoryRepository } = useRepositories();
  const [events, setEvents] = useState<Event[]>([])
  const getAllEventsUseCase = new GetAllEventsUseCase(eventRepository);
  const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoryRepository);
  const [categories, setCategories] = useState<Category[]>([])
  const [checkCategory, setCheckCategory] = useState(0)
  const [sortKey, setSortKey] = useState<"location" | "title">("title")
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
    const newCategories = getAllCategoriesUseCase.execute()
    // newCategories.unshift({id: 0,title: 'Tous', description: "Toutes les categorie"})
    setCategories([{id: 0,title: 'Tous', description: "Toutes les categorie"}, ...newCategories]);
    const newEvents = getAllEventsUseCase.execute()
    setEvents(newEvents);
  },undefined);
  
  return (
    // <ScrollView>
      <RootView>
        {/* <View style={{ paddingHorizontal: 20 }}>
          <TouchableOpacity style={styles.notif}>
            <Ionicons name="notifications-outline" size={24} color={colors.grayDark} />
          </TouchableOpacity>
        </View> */}
        <View style={{ padding: 25, backgroundColor: '#FFFFFF', marginTop: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#59570C' }}>Découvrez les évènements</Text>
          
        </View>
        <Row gap={16} style={styles.form}>
          <SearchBar value={search} onChange={setSearch} />
          <SortButton value={sortKey} onChange={setSortKey} />
        </Row>

        <Row gap={10} style={{ paddingHorizontal: 20, paddingTop: 20 }}>

          <FlatList
            data={categories}
            horizontal
            nestedScrollEnabled
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setCheckCategory(item.id)}>
                <View style={[styles.item, { backgroundColor: checkCategory === item.id ? colors.grayDark : colors.grayWhite }]}>
                  <Text style={{ fontSize: 12, color: checkCategory === item.id ? colors.grayWhite : colors.grayDark }}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 5 }}// Masquer la barre de défilement
          />
        </Row>

        <View style={{flex: 1}}>
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
              <EventCard event={item} style={{flex: 1 / 2}} path={`/(customer)/events/${item.id}`}/>
              
            }
            keyExtractor={(item) => item.id.toString()} /> 
          }
          

        </View>

      </RootView>
    // </ScrollView>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  notif: {
    width: 50,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderColor: "#59570C",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
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

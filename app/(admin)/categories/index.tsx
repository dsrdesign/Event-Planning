import { Category } from "@/core/models/Category";
import { Ionicons } from "@expo/vector-icons";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native";
import { CATEGORIES } from "@/constants/categories";
import { router, useFocusEffect } from "expo-router";
import { GetAllCategoriesUseCase } from "@/core/use-cases/category/getAll-categories.use-case";
import { useRepositories } from "@/hooks/useRepositorie";
import { useState } from "react";

export default function AdminCategories() {

  const { categoryRepository } = useRepositories();
  const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoryRepository);
  const [categories, setCategories] = useState<Category[]>([])

  useFocusEffect(() => {
    const newCategories = getAllCategoriesUseCase.execute()
    setCategories(newCategories);
  }, );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{
        flex: 1,
        // paddingHorizontal: 25,
        // paddingTop: 50,
        // paddingBottom: 100,
        backgroundColor: '#F4F4F4',
        gap: 10
      }}>
        <View style={{ padding: 25, backgroundColor: '#FFFFFF', marginTop: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#59570C' }}>List des categories</Text>
          <TouchableOpacity  onPress={() => router.push(`/categories/new`)} style={styles.button} >
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={{ gap: 10, flex: 1 }}>
          <FlatList
            data={categories}
            contentContainerStyle={{ gap: 8, padding: 12 }}

            renderItem={({ item }) =>

              <View style={{
                padding: 25,
                backgroundColor: '#FFFFFF',
                gap: 10,
              }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                <Text>{item.description}</Text>
                <View style={{ marginTop: 15 }}>
                  <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Ionicons name="pencil-outline" size={18} color="#59570C" />
                      <Text>Modifier</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Ionicons name="trash" size={18} color="red" />
                      <Text style={{ color: 'red' }}>Supprimer</Text>
                    </View>
                  </View>
                </View>

              </View>

            } keyExtractor={(item) => item.id.toString()} />


        </View>
      </View>


    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 10, // Ajoutez du padding pour rendre le bouton plus grand
    backgroundColor: "#59570C", // Couleur de fond
    borderRadius: 5, // Arrondi des coins
    alignItems: 'center', // Centrer l'icône
    justifyContent: 'center', // Centrer l'icône verticalement
  },
});
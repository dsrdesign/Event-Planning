import { Category } from "@/domain/models/Category";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, TouchableOpacity, View, FlatList, Alert } from "react-native";
import { router, useFocusEffect } from "expo-router";
import { GetAllCategoriesUseCase } from "@/domain/use-cases/category/getAll-categories.use-case";
import { useRepositories } from "@/hooks/useRepositorie";
import { useState } from "react";
import { DeleteModal } from "@/components/deleteModal";
import { DeleteCategoryUseCase } from "@/domain/use-cases/category/delete-categoy.use-case";
import { COLORS } from "@/constants/colors";
import { RootView } from "@/components/RootView";

export default function AdminCategories() {
  const { categoryRepository } = useRepositories();
  const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoryRepository);
  const deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepository);

  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [categoryToDelete, setCategoryToDelete] = useState<null | number>(null); // État pour l'ID de la catégorie à supprimer

  const handleDelete = (confirmed: boolean) => {
    setModalVisible(false); // Fermer le modal
    if (confirmed && categoryToDelete) {
      // Logique pour gérer la confirmation
      deleteCategoryUseCase.execute(categoryToDelete);
      Alert.alert("Succès", "Catégorie supprimée avec success !");
      console.log("L'utilisateur a confirmé la suppression de la catégorie :", categoryToDelete);
      // Ajoutez ici la logique pour supprimer la catégorie
    } else {
      console.log("L'utilisateur a annulé la suppression.");
    }
  };

  useFocusEffect(() => {
    const newCategories = getAllCategoriesUseCase.execute();
    setCategories(newCategories);
  }, undefined);

  return (
    <RootView>
 <View style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        backgroundColor: '#F4F4F4',
        gap: 10
      }}>
        <View style={{ padding: 25, backgroundColor: '#FFFFFF', marginTop: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#59570C' }}>Catégories</Text>
          <Pressable onPress={() => router.push(`/categories/new`)} style={styles.button}>
            <Ionicons name="add" size={24} color={COLORS.primary} />
          </Pressable>
        </View>

        <View style={{ gap: 10, flex: 1 }}>
          {
            categories.length === 0
              ?
              <Text style={{alignSelf : 'center',marginTop: 20}}>Aucune catégorie disponible !</Text>
              :
              <FlatList
              data={categories}
              contentContainerStyle={{ gap: 8, padding: 12 }}
              renderItem={({ item }) =>
                <View style={{
                  padding: 25,
                  backgroundColor: '#FFFFFF',
                  gap: 10, borderWidth: 1, borderRadius: 5, borderColor: COLORS.grayLight
                }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                  <Text>{item.description}</Text>
                  <View style={{ marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                      <Pressable  onPress={() => router.push(`/categories/${item.id}`)} style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 8, borderRadius: 5 }}>
                        <Ionicons name="pencil-outline" size={18} color="#59570C" />
                        <Text>Modifier</Text>
                      </Pressable>
                      <Pressable
                        style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 8, borderColor: 'red', borderRadius: 5 }}
                        onPress={() => {
                          setCategoryToDelete(item.id); // Mettre à jour l'ID de la catégorie à supprimer
                          setModalVisible(true);
                        }}
                      >
                        <Ionicons name="trash" size={18} color="red" />
                        <Text style={{ color: 'red' }}>Supprimer</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              }
              keyExtractor={(item) => item.id.toString()}
            />
          }
         
        </View>
      </View>

      <DeleteModal
        message={`Voulez-vous vraiment supprimer la catégorie : ${categoryToDelete} ?`}
        isVisible={isModalVisible}
        onConfirm={handleDelete}
      />
    </View>
    </RootView>
   
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderColor: "#59570C",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
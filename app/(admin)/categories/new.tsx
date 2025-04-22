import { COLORS } from "@/constants/colors";
import { CreateCategoryUseCase } from "@/domain/use-cases/category/create-category.use-case";
import { useRepositories } from "@/hooks/useRepositorie";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, Button, TextInput, ToastAndroid, Pressable, Alert } from "react-native";

export default function NewCategory() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({
    title: false,
    description: false,
  });

  const { categoryRepository } = useRepositories();
  const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

  const showToast = (message: string) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setErrors((prev) => ({ ...prev, title: value.trim() === '' }));
  };

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
    setErrors((prev) => ({ ...prev, description: value.trim() === '' }));
  };

  const handleSubmit = () => {
    const newErrors = {
      title: title.trim() === '',
      description: description.trim() === '',
    };

    setErrors(newErrors); // Met à jour les erreurs

    if (newErrors.title || newErrors.description) {
      showToast("Tous les champs sont requis.");
      return;
    }
    createCategoryUseCase.execute({ title, description })
    // Logique d'enregistrement de la catégorie
    Alert.alert("Succès", "Catégorie enregistrée avec succès !");
    // Redirigez l'utilisateur ou effectuez d'autres actions
    router.push("/(admin)/categories"); // Exemple de redirection
  };

  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 30, flex:1, justifyContent: 'space-between' }}>
      <View style={{gap: 20 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#59570C' }}>Nouvelle catégorie</Text>
        <Text style={{ fontSize: 18 }}>
          {`Veuillez à bien remplir les champs`}
        </Text>
        <View style={{ gap: 15 }}>
          <TextInput
            onChangeText={handleTitleChange}
            value={title}
            autoCapitalize="none"
            style={{
              borderStyle: 'solid',
              borderWidth: 1,
              padding: 15,
              borderRadius: 5,
              borderColor: errors.title ? 'red' : '#000', // Couleur de la bordure pour l'erreur
            }}
            placeholder="Titre"
          />
          {errors.title && (
            <Text style={{ color: 'red' }}>Le titre est requis.</Text>
          )}
          <TextInput
            onChangeText={handleDescriptionChange}
            value={description}
            style={{
              borderStyle: 'solid',
              borderWidth: 1,
              borderRadius: 5,
              padding: 15,
              height: 150,
              textAlignVertical: 'top',
              borderColor: errors.description ? 'red' : '#000', // Couleur de la bordure pour l'erreur
            }}
            placeholder="Description"
            multiline={true}
          />
          {errors.description && (
            <Text style={{ color: 'red' }}>La description est requise.</Text>
          )}
        </View>
      </View>

      <Pressable onPress={handleSubmit} style={{ backgroundColor: COLORS.primary, padding: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
        <Text style={{ color: COLORS.grayWhite }}>Enregistrer</Text>
      </Pressable>
    </View>
  );
}
import React, { useState } from "react";
import { View, TextInput, Button, Text, ScrollView, StyleSheet, Pressable, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from "@react-native-picker/picker";
import { COLORS } from "@/constants/colors";
import { router, useFocusEffect } from "expo-router";
import { GetAllCategoriesUseCase } from "@/domain/use-cases/category/getAll-categories.use-case";
import { useRepositories } from "@/hooks/useRepositorie";
import { Category } from "@/domain/models/Category";
import { CreateEventUseCase } from "@/domain/use-cases/event/create-event.use-case";


type EventFormData = {
    title: string;
    description: string;
    location: string;
    time: string;
    capacity: string; // on gère en string pour simplifier l'input
    idCategory: number;
    date: Date;
};

const CreateEvent = () => {
    
    const { eventRepository, categoryRepository } = useRepositories();
    const [show, setShow] = useState(false)
    const [categories, setCategories] = useState<Category[]>([])
    const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoryRepository);
    const createEventUseCase = new CreateEventUseCase(eventRepository);

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<EventFormData>({
        defaultValues: {
            title: "",
            description: "",
            location: "",
            time: "",
            capacity: "10",
            idCategory: categories[0]?.id || 1,
            date: new Date(),
        },
    });

    const onSubmit = (data: EventFormData) => {
        // Validation manuelle
        if (!data.title.trim()) {
            setError("title", { message: "Le titre est requis" });
            Alert.alert("Echec", "Le titre est requis !");
            return;
        }

        if (!data.description.trim()) {
            setError("description", { message: "La description est requise" });
            Alert.alert("Echec", "La description est requise !");
            return;
        }

        if (isNaN(Number(data.capacity)) || Number(data.capacity) <= 0) {
            Alert.alert("Echec", "Capacité invalide !");
            setError("capacity", { message: "Capacité invalide" });
            return;
        }

        // Transformer les données
        const payload = {
            ...data,
            capacity: Number(data.capacity),
        };
        
        createEventUseCase.execute(payload)
        console.log("Événement à créer :", payload);
        Alert.alert("Succès", "Événement crée avec success !");
        router.push("/(admin)/events");
        // Appelle ton use case ici
    };

    useFocusEffect(() => {
        const newCategories = getAllCategoriesUseCase.execute()
        // newCategories.unshift({id: 0,title: 'Tous', description: "Toutes les categorie"})
        setCategories(newCategories);
    }, undefined);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#59570C' }}>Nouveau évènement</Text>
            <Text style={{ fontSize: 18 }}>
                {`Veuillez à bien remplir les champs`}
            </Text>
            <Text style={styles.label}>Titre</Text>
            <Controller
                control={control}
                name="title"
                render={({ field: { onChange, value } }) => (
                    <TextInput style={styles.input} placeholder="Titre" value={value} onChangeText={onChange} />
                )}
            />
            {errors.title && <Text style={styles.error}>{errors.title.message}</Text>}

            <Text style={styles.label}>Description</Text>
            <Controller
                control={control}
                name="description"
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={[styles.input, { height: 100 }]}
                        placeholder="Description"
                        value={value}
                        onChangeText={onChange}
                        multiline
                    />
                )}
            />
            {errors.description && <Text style={styles.error}>{errors.description.message}</Text>}

            <Text style={styles.label}>Lieu</Text>
            <Controller
                control={control}
                name="location"
                render={({ field: { onChange, value } }) => (
                    <TextInput style={styles.input} placeholder="Lieu" value={value} onChangeText={onChange} />
                )}
            />

            <Text style={styles.label}>Heure</Text>
            <Controller
                control={control}
                name="time"
                render={({ field: { onChange, value } }) => (
                    <TextInput style={styles.input} placeholder="Heure (ex: 14:00)" value={value} onChangeText={onChange} />
                )}
            />

            <Text style={styles.label}>Capacité</Text>
            <Controller
                control={control}
                name="capacity"
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Capacité"
                        value={value}
                        onChangeText={onChange}
                        keyboardType="numeric"
                    />
                )}
            />
            {errors.capacity && <Text style={styles.error}>{errors.capacity.message}</Text>}

            <Text style={styles.label}>Date</Text>
            <Controller
                control={control}
                name="date"
                render={({ field: { value, onChange } }) => (
                    <View>
                        <Pressable onPress={() => setShow(true)} style={{ borderStyle: 'solid', borderWidth: 1, borderColor: COLORS.grayLight, padding: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                            <Text style={{ color: COLORS.grayLight }}>{value.toString()}</Text>
                        </Pressable>
                        {show && (
                            <DateTimePicker
                                style={{ width: 320, backgroundColor: COLORS.grayDark, }}
                                value={value}
                                accentColor="#000"
                                textColor="#000"
                                mode="date"
                                display="default"
                                onChange={(event, selectedDate) => {
                                    setShow(false);
                                    if (selectedDate) {
                                        onChange(selectedDate);
                                    }
                                }}
                            />
                        )}
                    </View>
                )}
            />

            <Text style={styles.label}>Catégorie</Text>
            <Controller
                control={control}
                name="idCategory"
                render={({ field: { value, onChange } }) => (
                    <View style={[{ borderStyle: 'solid', borderWidth: 1, borderColor: COLORS.grayLight, borderRadius: 6 }]}>
                        <Picker
                            selectedValue={value}
                            onValueChange={onChange}
                            style={{ height: 50, width: '100%' }} // min de style ici
                        >
                            {categories.map((category) => (
                                <Picker.Item key={category.id} label={category.title} value={category.id} />
                            ))}
                            
                        </Picker>
                    </View>

                )}
            />

            <Pressable onPress={handleSubmit(onSubmit)} style={{ backgroundColor: COLORS.primary, padding: 15, alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginTop: 20 }}>
                <Text style={{ color: COLORS.grayWhite }}>Créer l'événement</Text>
            </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.grayLight,
        borderRadius: 5,
        padding: 10,
        marginBottom: 4,
    },
    label: {
        fontWeight: "bold",
        marginTop: 3,
    },
    error: {
        color: "red",
        marginBottom: 8,
    }
});

export default CreateEvent 
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

type Categorie = {
  id: number,
  name: string,
  description: string
}

export default function Index() {
  const categories: Categorie[] = [
    {
      id: 1,
      name: 'Culturels',
      description: 'Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origin'
    },
    {
      id: 2,
      name: 'Sportifs',
      description: 'Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origin'
    },
    {
      id: 3,
      name: 'Professionnels',
      description: 'Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origin'
    }
  ]

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 50,
        paddingBottom: 100,
        backgroundColor: '#F4F4F4',
        gap: 10
      }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>List des categories</Text>

        <View style={{ gap: 10 }}>
          <FlatList
            data={categories}
            contentContainerStyle={{ gap: 8, padding: 12 }}

            renderItem={({ item }) =>

              <View style={{
                padding: 25,
                backgroundColor: '#FFFFFF',
                gap: 10,
              }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                <Text>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origin</Text>
                <View style={{ marginTop: 15 }}>
                  <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Ionicons name="pencil-sharp" size={18} color="#59570C" />
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


      <View style={{ position: 'absolute', bottom: 0, width: '100%', padding: 20, backgroundColor: 'white', elevation: 30, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
        <Link href={{ pathname: "/admin" }} >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="pie-chart-sharp" size={24} color="#59570C" />
            <Text style={{ fontSize: 12 }}>Dasboard</Text>
          </View>
        </Link>

        <Link href={{ pathname: "/admin/categories" }} >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="settings" size={24} color="#1B1B1B" />
            <Text style={{ fontSize: 12 }}>Catégories</Text>
          </View>
        </Link>

        <Link href={{ pathname: "/admin/events" }} >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="timer" size={24} color="#1B1B1B" />
            <Text style={{ fontSize: 12 }}>Evènements</Text>
          </View>
        </Link>

        <Link href={{ pathname: "/admin/profile" }} >
          <View style={{ alignItems: 'center' }}>
            <Ionicons name="man-sharp" size={24} color="#1B1B1B" />
            <Text style={{ fontSize: 12 }}>Profil</Text>
          </View>
        </Link>

      </View>
    </View>
  );
}

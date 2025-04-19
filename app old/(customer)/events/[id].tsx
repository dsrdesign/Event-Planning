import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Event () {

     const params = useLocalSearchParams() as { id: string }

     return (
          <View>
               <Text> Evenement {params.id}</Text>
          </View>
     )
}
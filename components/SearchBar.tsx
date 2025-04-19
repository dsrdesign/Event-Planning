import { Image, StyleSheet, TextInput, View } from "react-native"
import { Row } from "@/components/Row"
import { COLORS } from "@/constants/colors"
import { SHADOWS } from "@/constants/shadows"

type Props = {
     value: string,
     onChange: (s: string) => void
}


export default function SearchBar({ value, onChange }: Props) {
     const colors = COLORS
     return (
          <Row
               gap={8}
               style={[styles.wrapper, { backgroundColor: colors.grayWhite }]}
          >
               <Image
                    source={require('@/assets/images/search.png')}
                    width={16}
                    height={16}
               />
               <TextInput placeholder="Rechercher un évènement..." style={styles.input} onChangeText={onChange} value={value} />
          </Row>
     )
}

const styles = StyleSheet.create({
     wrapper: {
          flex: 1,
          borderRadius: 5,
          height: 50,
          paddingHorizontal: 20,
          ...SHADOWS.shadow1,
     },
     input: {
          flex: 1,
          height: 100,
          fontSize: 10,
          lineHeight: 16
     }
})
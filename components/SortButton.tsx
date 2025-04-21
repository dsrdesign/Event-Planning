import React, { useRef } from "react"
import { useState } from "react"
import { Dimensions, Image, Modal, Pressable, StyleSheet, Text, View } from "react-native"
import { Card } from "./Card"
import { Row } from "./Row"
import { Radio } from "./Radio"
import { COLORS } from "@/constants/colors"
import { SHADOWS } from "@/constants/shadows"
import { FontAwesome, Ionicons } from "@expo/vector-icons"

type Props = {
  value: "location" | "title",
  onChange: (v: "location" | "title") => void
}
const options = [
  { label: "A-Z", value: "title" },
  { label: "Lieu", value: "location" }
] as const

export function SortButton({ value, onChange }: Props) {
  const buttonRef = useRef<View>(null)
  const colors = COLORS
  const [isModalVisibility, setIsModalViibility] = useState(false)
  const [position, setPosition] = useState<null | {
    top: number;
    right: number;
  }>(null);
  const onButtonPress = () => {
    buttonRef.current?.measureInWindow((x, y, width, height) => {
      setPosition({
        top: y + height,
        right: Dimensions.get("window").width - x - width
      })
      setIsModalViibility(true)
    })
  }
  const onClose = () => {
    setIsModalViibility(false)
  }
  return (
    <>
      <Pressable onPress={onButtonPress}>
        <View
          ref={buttonRef}
          style={[styles.button, { backgroundColor: colors.grayWhite }]}
        >
          {
            value === "location"
              ?
              <Ionicons name="location-outline" size={24} color="black" />
              :
              <FontAwesome name="sort-alpha-asc" size={16} color="black" />

          }
        </View>
      </Pressable>

      <Modal animationType="fade" transparent visible={isModalVisibility} onRequestClose={onClose}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={[styles.popup, { backgroundColor: colors.primary, ...position }]}>
          <Text style={[styles.title, { color: colors.grayWhite }]} >Filtrer par:</Text>
          <Card style={[styles.card]}>
            {options.map(option => (
              <Pressable key={option.value} onPress={() => onChange(option.value)}>
                <Row gap={8}>
                  <Radio checked={option.value === value} />
                  <Text>{option.label}</Text>
                </Row>
              </Pressable>

            ))}
          </Card>
        </View>
        {/* <Text>Hello</Text> */}
      </Modal>
    </>
  )

}

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    borderRadius: 32,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },
  popup: {
    position: 'absolute',
    width: 113,
    padding: 4,
    paddingTop: 16,
    gap: 16,
    borderRadius: 12,
    ...SHADOWS.shadow1,

  },
  title: {
    paddingLeft: 20,
    fontSize: 14
  },
  card: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    gap: 16
  }
})
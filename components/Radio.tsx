import { COLORS } from "@/constants/colors";
import { StyleSheet, View } from "react-native"

type Props = {
  checked: boolean
}

export function Radio({ checked }: Props) {
  const colors = COLORS
  return (
    <View style={[styles.radio, { borderColor: colors.primary }]}>
      {checked && (
        <View style={[styles.radioInner, { backgroundColor: colors.primary }]} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  radio: {
    width: 14,
    height: 14,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioInner: {
    borderRadius: 6,
    width: 6,
    height: 6
  }
})
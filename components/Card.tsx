
import { COLORS } from "@/constants/colors";
import { SHADOWS } from "@/constants/shadows";
import { View, ViewStyle, type ViewProps } from "react-native";

type Props = ViewProps

export function Card({ style, ...rest }: Props) {
  const colors = COLORS
  return <View style={[style, styles, { backgroundColor: colors.grayWhite }]} {...rest} />
}

const styles = {
  borderRadius: 8,
  overflow: 'hidden',
  ...SHADOWS.shadow1
} satisfies ViewStyle
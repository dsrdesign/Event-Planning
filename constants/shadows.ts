import { ViewStyle } from "react-native";

export const SHADOWS = {
     shadow1: {
          shadowOpacity: 0.5,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 5},
          shadowRadius: 1,
          elevation: 5
     },
} satisfies Record<string, ViewStyle>
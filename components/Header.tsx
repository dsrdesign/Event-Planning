import { Text, View } from "react-native";

export const Header = () => {
	return (
		<View style={{ backgroundColor: 'blue', justifyContent: 'space-between', padding: 10, }}>
			<Text style={{ color: 'white' }}>Logo</Text>
		</View>
	)
}
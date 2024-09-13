import { View } from "react-native";

const CardBackground = ({ children }: { children: any }) => {
    return <View style={{ backgroundColor: '#FFFFFF', borderRadius: 16, padding: 10 }}>
        {children}
    </View>
}

export default CardBackground;
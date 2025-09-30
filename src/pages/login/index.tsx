import react from "react";
import { View, Text } from "react-native";
import { styles } from ".\\styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.boxTop}>
        <Text>top</Text>
      </View>
      <View style={styles.boxMid}>
        <Text>mid</Text>
      </View>
      <View style={styles.boxBottom}>
        <Text>bottom</Text>
      </View>
    </View>
  );
}

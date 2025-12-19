import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Hello World!</Text>
      <Text style={styles.subtitle}>Mobile App Ready for CI/CD</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6B6B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    opacity: 0.9,
  },
});

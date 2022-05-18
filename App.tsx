import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import HomeCard from './components/HomeCard';

export default function App() {
  const cardData = {
    title: "ここに講義名がはいるよ",
    start: "13:00",
    end: "14:30",
    place: "ここに開講場所が入るよ",
    color: "lime",
  }
  const cardData2 = {
    title: "ネットワーク管理技術および演習",
    start: "14:40",
    end: "16:10",
    place: "70-512Lab",
    color: "cyan",
  }
  return (
    <View style={styles.container}>

      {/* カードデザイン案 */}
      <HomeCard title={cardData.title} start={cardData.start} end={cardData.end} place={cardData.place} color={cardData.color} />
      <HomeCard title={cardData2.title} start={cardData2.start} end={cardData2.end} place={cardData2.place} color={cardData2.color} />
      <Text>これはカード表示の例だよ</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

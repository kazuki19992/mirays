import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={styles.container}>

      {/* カードデザイン案 */}
      <View style={tw.style('shadow-xl', 'rounded-xl', 'mb-5', 'p-2', 'w-4/5')}>
        <div style={tw.style('flex', 'justify-between', 'w-full', 'flex-row', 'items-center')}>
          <Text style={tw.style('font-bold', 'pr-1')}>あああ</Text>
          <div style={tw.style('bg-cyan-500', 'h-5', 'w-4/5', 'rounded')}></div>
        </div>
        <Text style={tw.style('font-bold', 'text-2xl')}>aaaaaaaa</Text>
        <Text style={tw.style('text-sm')}>12:34 - 23:45 Lab-01</Text>
        <hr style={tw.style('w-full')}/>
        <div style={tw.style('flex', 'justify-between', 'space-x-1')}>
          <div style={tw.style('w-1/2', 'mr-1')}>
            {/* 予定 */}
            <div style={tw.style('flex', 'items-center', 'px-1')}>
              <div style={tw.style('w-2', 'h-2', 'rounded-full', 'bg-red-500', 'mr-1')} />
              <Text style={tw.style('font-bold', 'text-red-500', 'text-sm')}>超重要なタスク</Text>
            </div>
            <div style={tw.style('flex', 'items-center', 'px-1')}>
              <div style={tw.style('w-2', 'h-2', 'rounded-full', 'bg-amber-500', 'mr-1')} />
              <Text style={tw.style('font-bold', 'text-amber-500', 'text-sm')}>重要なタスク</Text>
            </div>
            <div style={tw.style('flex', 'items-center', 'px-1')}>
              <div style={tw.style('w-2', 'h-2', 'rounded-full', 'bg-green-500', 'mr-1')} />
              <Text style={tw.style('font-bold', 'text-green-500', 'text-sm')}>タスク</Text>
            </div>
            <div style={tw.style('flex', 'items-center', 'rounded-full', 'bg-gray-200', 'px-1')}>
              <div style={tw.style('w-2', 'h-2', 'rounded-full', 'bg-gray-700', 'mr-1')} />
              <Text style={tw.style('font-bold', 'text-gray-700', 'text-sm')}>他1件のタスク</Text>
            </div>
          </div>
          {/* 予定追加ボタン */}
          <div style={tw.style('bg-gray-200', 'text-gray-700', 'w-1/2', 'flex', 'justify-center', 'items-center', 'rounded')}>
            <Text>タスクの追加</Text>
          </div>
        </div>
      </View>
      <Text>Open up App.tsx to start working on your app!</Text>
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

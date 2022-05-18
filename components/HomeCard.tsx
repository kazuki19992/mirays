import tw from 'twrnc';
import { Button, StyleSheet, Text, View } from 'react-native';

interface Task {
  title: string,
  color: string,
};

interface Props {
  title: string,
  start: string,
  end: string,
  place: string,
  color: string,
  tasks?: Task[],
}

const HomeCard = (props: Props) => {
  return (
    <View style={tw.style('shadow-xl', 'rounded-xl', 'mb-5', 'p-2', 'w-4/5', 'bg-white')}>
        <View style={tw.style('flex', 'justify-between', 'w-full', 'flex-row', 'items-center')}>
          <Text style={tw.style('font-bold', 'pr-1')}>講義中……</Text>
          <View style={tw.style(`bg-${props.color}-500`, 'h-4', 'grow', 'rounded')}></View>
        </View>
        <Text style={tw.style('font-bold', 'text-2xl', 'mt-2')}>{props.title}</Text>
        <Text style={tw.style('text-sm')}>{props.start} - {props.end} <Text style={tw.style('italic')}>{props.place}</Text></Text>

        {/* hr */}
        <View style={tw.style('border-b', 'my-2', 'border-gray-500')} />

        <View style={tw.style('flex', 'justify-between', 'flex-row')}>
          <View style={tw.style('w-1/2', 'mr-1')}>
            {/* 予定 */}
            <View style={tw.style('flex', 'items-center', 'px-1', 'flex-row')}>
              <View style={tw.style('w-2', 'h-2', 'rounded-full', 'bg-red-500', 'mr-1')} />
              <Text style={tw.style('font-bold', 'text-red-500', 'text-sm')}>超重要なタスク</Text>
            </View>
            <View style={tw.style('flex', 'items-center', 'px-1', 'flex-row')}>
              <View style={tw.style('w-2', 'h-2', 'rounded-full', 'bg-amber-500', 'mr-1')} />
              <Text style={tw.style('font-bold', 'text-amber-500', 'text-sm')}>重要なタスク</Text>
            </View>
            <View style={tw.style('flex', 'items-center', 'px-1', 'flex-row')}>
              <View style={tw.style('w-2', 'h-2', 'rounded-full', 'bg-green-500', 'mr-1')} />
              <Text style={tw.style('font-bold', 'text-green-500', 'text-sm')}>タスク</Text>
            </View>
            <View style={tw.style('flex', 'items-center', 'rounded-full', 'bg-gray-200', 'px-1', 'flex-row')}>
              <View style={tw.style('w-2', 'h-2', 'rounded-full', 'bg-gray-700', 'mr-1')} />
              <Text style={tw.style('font-bold', 'text-gray-700', 'text-sm')}>他1件のタスク</Text>
            </View>
          </View>
          {/* 予定追加ボタン */}
          <View style={tw.style('bg-gray-200', 'text-gray-700', 'grow', 'flex', 'justify-center', 'items-center', 'rounded')}>
            <Text>タスクの追加</Text>
          </View>
        </View>
      </View>
  )
}

export default HomeCard;
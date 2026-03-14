import { StatusBar } from 'expo-status-bar';
import { View, FlatList } from 'react-native';
import './global.css'
import books from './src/dummyBooks'
import BookListItem from './src/components/BookListItem';

export default function App() {
  return (
    <View className='bg-slate-800 flex-1 p-4 justify-center pt-20'>

      <FlatList 
        data={books} 
        contentContainerClassName='gap-4'
        renderItem={({item}) => <BookListItem book={item} />} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

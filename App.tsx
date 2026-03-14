import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import './global.css'
import books from './src/dummyBooks'
import BookListItem from './src/components/BookListItem';

export default function App() {
  return (
    <View className='bg-slate-800 flex-1 p-4 justify-center'>
      {books.map((book, i) => (
        <BookListItem key={i} book={book}/>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

import { Text, View, Image } from 'react-native';
import { Book } from '../dummyBooks';
import { AntDesign } from '@expo/vector-icons';

export default function BookListItem({book}: {book: Book}) {
  return (
       <View className='flex-row gap-4 items-center mb-4'>
          <Image source={{uri: book.thumbnail_url}} className='w-16 aspect-square rounded-lg' />
          <View className='gap-1 flex-1'>
            <Text className='text-2xl text-gray-100 font-bold'>{book.title}</Text>
            <Text className='text-gray-400'>{book.author}</Text>
          </View>
        <AntDesign name='play-circle' size={24} color='gainsboro' />
      </View>
  )
}
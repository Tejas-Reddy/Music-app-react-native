import { useState } from "react";
import { GestureResponderEvent, Pressable, Text, View } from "react-native";

type PlayBackBarProps = {
  currentTime: number;
  duration: number;
  onSeek: (seconds: number) => void;
};

export default function PlaybackBar({
  currentTime,
  duration,
  onSeek
}: PlayBackBarProps) {

    const [width, setWidth] = useState(0)

  const progress = currentTime / duration;

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2,'0')}`
  };

  const onHandleSeek = (event: GestureResponderEvent) => {
    const pressX = event.nativeEvent.locationX
    const precentage = pressX / width
    const seekToSeconds = Math.min(Math.max(duration * precentage, 0), duration)
    onSeek(seekToSeconds)
  }

  return (
    <View className="gap-4">
      <Pressable onLayout={(event) => setWidth(event.nativeEvent.layout.width)} onPress={onHandleSeek} className="w-full bg-gray-800 h-2 rounded-full justify-center">
        <View
          className="bg-orange-400 h-full rounded-full"
          style={{ width: `${progress * 100}%` }}
        />
        <View
          className="absolute w-3 h-3 -translate-x-1/2 rounded-full bg-orange-400"
          style={{ left: `${progress * 100}%` }}
        />
      </Pressable>
      <View className="flex-row items-center justify-between">
        <Text className="text-gray-400">{formatTime(currentTime)}</Text>
        <Text className="text-gray-400">{formatTime(duration)}</Text>
      </View>
    </View>
  );
}

import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const Banner: FC = () => {
	const { navigate } = useTypedNavigation()

	return (
		<View className='mt-5 w-full bg-[#47AA52] px-5 py-5 rounded-2xl justify-between flex-row'>
			<View>
				<Text className='w-56 text-xl font-medium text-white'>
					Fast delivery - delicious choice every time!
				</Text>

				<Pressable
					onPress={() => navigate('Explorer')}
					className='py-2 mt-4 bg-black rounded-full w-28'
				>
					<Text className='font-medium text-center text-white'>
						Order now
					</Text>
				</Pressable>
			</View>

			<View className='absolute bottom-0 right-4 w-28 h-28'>
				<Image
					source={require('@/assets/images/banner.png')}
					className='w-full h-full'
				/>
			</View>
		</View>
	)
}

export default Banner

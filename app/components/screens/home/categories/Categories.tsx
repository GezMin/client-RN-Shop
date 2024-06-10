import { useGetAllCategories } from './useGetAllCategory'
import Heading from '@/components/ui/Heading'
import Loader from '@/components/ui/Loader'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { getMediaSource } from '@/utils/getMediaSource'
import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

const Categories: FC = () => {
	const { categories, isLoading } = useGetAllCategories()

	const { navigate } = useTypedNavigation()

	return isLoading ? (
		<Loader />
	) : (
		<View className='flex flex-col mt-5 mb-4'>
			<Heading>Categories</Heading>

			<View className='flex-row justify-center mt-5'>
				{categories?.map(category => (
					<Pressable
						onPress={() =>
							navigate('Category', { slug: category.slug })
						}
						key={category.id}
						className='p-5 mx-2 bg-gray-100 rounded-xl'
					>
						<Image
							source={getMediaSource(category.image)}
							className='w-10 h-8 p-3 mb-2'
							style={{
								resizeMode: 'cover'
							}}
						/>
						<Text className='text-xs font-normal text-center'>
							{category.name}
						</Text>
					</Pressable>
				))}
			</View>
		</View>
	)
}

export default Categories

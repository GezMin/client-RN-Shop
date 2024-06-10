import CartIActions from './CartActions'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { ICartItem } from '@/types/cart.interface'
import { convertPrice } from '@/utils/convertPrice'
import { getMediaSource } from '@/utils/getMediaSource'
import { FC } from 'react'
import { Image, Pressable, Text, View } from 'react-native'

interface ICartItemProps {
	item: ICartItem
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
	const { navigate } = useTypedNavigation()

	return (
		<View className='flex-row mt-5'>
			<Pressable
				onPress={() => navigate('Product', { slug: item.product.slug })}
				className='items-center px-3 py-3 overflow-hidden bg-gray-100 rounded-xl w-28'
			>
				<Image
					source={getMediaSource(item.product.image)}
					width={80}
					height={80}
				/>
			</Pressable>

			<View className='mt-2 ml-5'>
				<Text className='text-xl font-semibold'>
					{item.product.name}
				</Text>
				<Text className='mt-1'>{convertPrice(item.price)}</Text>
				<CartIActions item={item} />
			</View>
		</View>
	)
}

export default CartItem

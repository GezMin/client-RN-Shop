import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { ICartItem } from '@/types/cart.interface'
import { AntDesign } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

interface ICartActions {
	item: ICartItem
}

const CartActions: FC<ICartActions> = ({ item }) => {
	const { changeQuantity } = useActions()

	const { items } = useCart()

	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<View className='flex-row items-center mt-4 gap-x-4'>
			<Pressable
				onPress={() => changeQuantity({ id: item.id, type: 'minus' })}
				disabled={quantity === 1}
			>
				<AntDesign name='minus' size={18} />
			</Pressable>
			<Text>{quantity}</Text>
			<Pressable
				onPress={() => changeQuantity({ id: item.id, type: 'plus' })}
			>
				<AntDesign name='plus' size={18} />
			</Pressable>
		</View>
	)
}

export default CartActions

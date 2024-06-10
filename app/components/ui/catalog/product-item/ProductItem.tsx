import ProductInfo from './ProductInfo'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { IProduct } from '@/types/product.interface'
import { getMediaSource } from '@/utils/getMediaSource'
import { FC } from 'react'
import { Image, Pressable, View } from 'react-native'

interface IProductItem {
	product: IProduct
}

const ProductItem: FC<IProductItem> = ({ product }) => {
	const { navigate } = useTypedNavigation()

	return (
		<View className='rounded-lg flex-col mb-3.5'>
			<Pressable
				onPress={() => navigate('Product', { slug: product.slug })}
				className='relative flex items-center justify-center p-5 overflow-hidden bg-gray-100 rounded-xl'
			>
				<Image
					source={getMediaSource(product.image)}
					width={130}
					height={130}
				/>
			</Pressable>
			<ProductInfo product={product} />
		</View>
	)
}

export default ProductItem

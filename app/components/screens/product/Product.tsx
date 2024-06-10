import { useProduct } from './useProduct'
import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/Loader'
import { getMediaSource } from '@/utils/getMediaSource'
import { FC } from 'react'
import { Image, View } from 'react-native'

const Product: FC = () => {
	const { isLoading, product } = useProduct()

	if (isLoading) return <Loader />
	if (!product) return null

	return (
		<Layout>
			<View className='items-center justify-center mt-4'>
				<Image
					source={getMediaSource(product.image)}
					width={260}
					height={260}
				/>
			</View>
		</Layout>
	)
}

export default Product

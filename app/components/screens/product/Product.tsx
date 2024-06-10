import { useProducts } from './useProducts'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'
import { FC } from 'react'

const Products: FC = () => {
	const { isLoading, products } = useProducts()

	return isLoading ? (
		<Loader />
	) : (
		<Catalog title='Products' products={products || []} />
	)
}

export default Products

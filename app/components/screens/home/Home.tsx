import Products from '../product/Product'
import Header from './Headers'
import Banner from './banner/Banner'
import Categories from './categories/Categories'
import Layout from '@/components/layout/Layout'
import { FC } from 'react'

const Home: FC = () => {
	return (
		<Layout>
			<Header />
			<Banner />
			<Categories />
			<Products />
		</Layout>
	)
}

export default Home

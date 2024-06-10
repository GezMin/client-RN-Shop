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
		</Layout>
	)
}

export default Home

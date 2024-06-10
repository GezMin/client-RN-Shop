import { request } from './api/request.api'
import { getProductsUrl } from '@/config/api.config'
import { IProduct } from '@/types/product.interface'

export const ProductService = {
	async getAll(searchTerm?: string) {
		return request<IProduct[]>({
			url: getProductsUrl(''),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
					}
				: {}
		})
	},

	async getBySlug(slug: string) {
		return request<IProduct>({
			url: getProductsUrl(`/by-slug/${slug}`),
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return request<IProduct>({
			url: getProductsUrl(`/by-category/${categorySlug}`),
			method: 'GET',
			data: { categorySlug }
		})
	}
}

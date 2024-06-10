import { request } from './api/request.api'
import { getCategoriesUrl } from '@/config/api.config'
import { ICategory } from '@/types/category.interface'

export const CategoryService = {
	async getAll() {
		return request<ICategory[]>({
			url: getCategoriesUrl(''),
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return request<ICategory>({
			url: getCategoriesUrl(`/by-slug/${slug}`),
			method: 'GET'
		})
	}
}

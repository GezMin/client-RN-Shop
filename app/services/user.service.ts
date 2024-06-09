import { request } from './api/request.api'
import { getUsersUrl } from '@/config/api.config'
import { IUser } from '@/types/user.interface'

export const UserService = {
	async getProfile() {
		return request<IUser>({
			url: getUsersUrl('/profile'),
			method: 'GET'
		})
	},

	async toggleFavorite(productId: string) {
		return request<IUser>({
			url: getUsersUrl(`/profile/favorites/${productId}`),
			method: 'PATCH'
		})
	}
}

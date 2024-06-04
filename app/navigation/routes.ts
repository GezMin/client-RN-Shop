import { IRoute } from './navigation.type'
import Home from '@/components/screens/Home'
import Auth from '@/components/screens/auth/Auth'

export const routes: IRoute[] = [
	{
		name: 'Auth',
		component: Auth
	},
	{
		name: 'Home',
		component: Home
	}
]

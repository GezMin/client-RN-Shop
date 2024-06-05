import { IRoute } from './navigation.type'
import Home from '@/components/screens/Home'
import Auth from '@/components/screens/auth/Auth'
import Explorer from '@/components/screens/explorer/Explorer'
import Favorites from '@/components/screens/favorites/Favorites'
import Profile from '@/components/screens/profile/Profile'
import Search from '@/components/screens/search/Search'

export const routes: IRoute[] = [
	{
		name: 'Auth',
		component: Auth
	},
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Explorer',
		component: Explorer
	},
	{
		name: 'Profile',
		component: Profile
	}
]

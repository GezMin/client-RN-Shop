import { TypeRootStackParamList } from './navigation.type'
import { routes } from './routes'
import Auth from '@/components/screens/auth/Auth'
import { useAuth } from '@/hooks/useAuth'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FC } from 'react'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigator: FC = () => {
	const { user } = useAuth()

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: '#fff' }
			}}
		>
			{user ? (
				routes.map(route => (
					<Stack.Screen key={route.name} {...route} />
				))
			) : (
				<Stack.Screen name='Auth' component={Auth} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigator

import PrivateNavigator from './PrivateNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { FC } from 'react'

const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<PrivateNavigator />
		</NavigationContainer>
	)
}

export default Navigation

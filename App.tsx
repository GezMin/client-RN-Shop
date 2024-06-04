import Navigation from '@/navigation/Navigation'
import { StatusBar, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<Navigation />
			</SafeAreaProvider>
			<StatusBar barStyle='light-content' />
		</>
	)
}

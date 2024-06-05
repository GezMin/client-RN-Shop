import Navigation from '@/navigation/Navigation'
import AuthProvider from '@/providers/auth/AuthProvider'
import { StatusBar, Text } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
	return (
		<>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
				<StatusBar barStyle='light-content' />
			</AuthProvider>
		</>
	)
}

import { IContext, TypeUserState } from './auth-provider.interface'
import { IUser } from '@/types/user.interface'
import * as SplashScreen from 'expo-splash-screen'
import {
	createContext,
	FC,
	PropsWithChildren,
	useEffect,
	useState
} from 'react'

export const AuthContext = createContext({} as IContext)

let ignore = SplashScreen.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>({} as IUser)

	useEffect(() => {
		let mounted = true

		const checkAccessToken = async () => {
			try {
			} catch {
			} finally {
				await SplashScreen.hideAsync()
			}
		}

		let ignore = checkAccessToken()

		return () => {
			mounted = false
		}
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider

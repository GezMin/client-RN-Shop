import { useProfile } from './useProfile'
import Layout from '@/components/layout/Layout'
import Heading from '@/components/ui/Heading'
import Button from '@/components/ui/button/Button'
import { useAuth } from '@/hooks/useAuth'
import { AuthService } from '@/services/auth/auth.service'
import { FC } from 'react'
import { Image, Text, View } from 'react-native'

const Profile: FC = () => {
	const { setUser } = useAuth()

	const { profile } = useProfile()

	return (
		<Layout>
			<Heading isCenter>Profile</Heading>

			<View className='items-center justify-center my-6'>
				<Image
					source={{ uri: profile?.avatarPath }}
					className='w-40 h-40 rounded-full'
				/>
			</View>
			<View className='flex flex-row items-center justify-around w-full h-[40px] gap-3 '>
				<Text className='mt-4 text-lg font-medium'>
					Login: {profile?.name}
				</Text>
				<Text className='mt-4 text-lg font-medium'>
					Email: {profile?.email}
				</Text>
			</View>
			<Button
				onPress={() => AuthService.logout().then(() => setUser(null))}
				className='mt-5'
			>
				Logout
			</Button>
		</Layout>
	)
}

export default Profile

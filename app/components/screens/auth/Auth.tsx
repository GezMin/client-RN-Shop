import AuthFields from './AuthFields'
import { useAuthMutations } from './useAuthMutations'
import Loader from '@/components/ui/Loader'
import Button from '@/components/ui/button/Button'
import { IAuthFormData } from '@/types/auth.interface'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

const Auth: FC = () => {
	const [isReg, setIsReg] = useState(false)

	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { isLoading, registerSync, loginSync } = useAuthMutations(reset)

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		if (isReg) registerSync(data)
		else loginSync(data)
	}

	return (
		<View className='items-center justify-center h-full mx-2'>
			<View className='w-9/12'>
				<Text className='mb-8 text-3xl font-medium text-center text-black'>
					{isReg ? 'Sign Up' : 'Login'}
				</Text>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<AuthFields control={control} isPassRequired />

						<Button onPress={handleSubmit(onSubmit)}>
							{isReg ? 'Sign Up' : 'Login'}
						</Button>

						<Pressable onPress={() => setIsReg(!isReg)}>
							<Text className='mt-6 text-base text-center text-black'>
								{isReg
									? 'Already have an account? '
									: "Don't have an account? "}
								<Text className='text-[#47AA52]'>
									{isReg ? 'Login' : 'Sign up'}
								</Text>
							</Text>
						</Pressable>
					</>
				)}
			</View>
		</View>
	)
}

export default Auth

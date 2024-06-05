import MenuItem from './MenuItem'
import { menuItems } from './menu.data'
import { TypeNavigate } from './menu.interface'
import { FC } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface IBootomMenu {
	nav: TypeNavigate
	currentRoute?: string
}

const BottomMenu: FC<IBootomMenu> = props => {
	const { bottom } = useSafeAreaInsets()

	return (
		<View
			className='pt-5 px-2 flex-row justify-between items-center w-full border-t border-t-solid border-t-[#bbbbbb] bg-white'
			style={{
				paddingBottom: bottom + 20
			}}
		>
			{menuItems.map(item => (
				<MenuItem key={item.path} item={item} {...props} />
			))}
		</View>
	)
}

export default BottomMenu

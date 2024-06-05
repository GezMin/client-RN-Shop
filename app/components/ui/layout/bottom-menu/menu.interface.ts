import { TypeRootStackParamList } from '@/navigation/navigation.type'
import { TypeFeatherIconsNames } from '@/types/icon.interface'

export interface IMenuItem {
	icon: TypeFeatherIconsNames
	path: keyof TypeRootStackParamList
}

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void

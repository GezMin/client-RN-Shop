import { ISearchFormData } from './search.interface'
import { useDebounce } from '@/hooks/useDebounce'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'

export const useSearchForm = () => {
	const { control, watch } = useForm<ISearchFormData>({
		mode: 'onChange'
	})

	const searchTerm = watch('searchTerm')
	const debouncedSearch = useDebounce(searchTerm, 500)

	return useMemo(
		() => ({ debouncedSearch, searchTerm, control }),
		[searchTerm]
	)
}

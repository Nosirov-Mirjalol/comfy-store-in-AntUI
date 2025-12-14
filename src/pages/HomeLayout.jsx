import { Outlet, useNavigation } from 'react-router'
const HomeLayout = () => {
	const navigation = useNavigation()
	const isPageLoading = navigation.state === 'loading'
	return (
		<>
			
		</>
	)
}

export default HomeLayout

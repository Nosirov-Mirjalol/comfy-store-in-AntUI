import { useRouteError, Link } from 'react-router'
const Error = () => {
	const error = useRouteError()
	if (error.status === 404) {
		return (
			<>
			</>
		)
	}
	return (
		<main className='grid min-h-screen place-items-center px-8'>
			<h4 className='text-center font-bold text-4xl'>There was an error...</h4>
		</main>
	)
}

export default Error
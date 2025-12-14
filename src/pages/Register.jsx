import { Form, Link, redirect } from 'react-router'
import { customFetch } from '../utils'
import { toast } from 'sonner'

export const action = async ({ request }) => {
	const formData = await request.formData()
	const data = Object.fromEntries(formData)
	try {
		const response = await customFetch.post('/auth/local/register', data)
		toast.success('account created succesfully')
		return redirect('/login')
	} catch (error) {
		console.log(error)

		const errorMessage = error?.response?.data?.error?.message||'please double check your credintials '
		toast.error(errorMessage)
		return null
	}
}
const Register = () => {
	return (<></>
	)
}

export default Register

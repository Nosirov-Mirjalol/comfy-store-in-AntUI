import { Form, Link, redirect, useNavigate } from 'react-router'
import { customFetch } from '../utils'
import { toast } from 'sonner'
import { loginUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'

export const action =
	(store) =>
		async ({ request }) => {
			const formData = await request.formData()
			const data = Object.fromEntries(formData)

			try {
				const response = await customFetch.post('/auth/local', data)
				store.dispatch(loginUser(response.data))
				toast.success('logged in successfully')
				return redirect('/')
			} catch (error) {
				const errorMessage =
					error?.response?.data?.error?.message ||
					'please double check your credentials'
				toast.error(errorMessage)
				return null
			}
		}

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const loginAsGuestUser = async () => {
		try {
			const response = await customFetch.post('auth/local', {
				identifier: 'test@test.com',
				password: 'secret'
			})
			dispatch(loginUser(response.data))
			toast.success('welcome guest user')
			navigate('/')
		} catch (err) {
			console.log(err)
			toast.error('guest user login error. Please try agaij')
		}
	}
	return (
		<></>
	)
}
export default Login

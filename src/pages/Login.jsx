import { Form, Link, redirect, useNavigate } from 'react-router'
import { FormInput, Submitbtn } from '../components'
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
        password: 'secret',
      })
      dispatch(loginUser(response.data))
      toast.success('welcome guest user')
      navigate('/')
    } catch (err) {
      toast.error('guest user login error. Please try again')
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900">
      <Form
        method="post"
        className="w-96 rounded-2xl border border-slate-800 bg-slate-950 p-8 flex flex-col gap-3"
      >
        <h4 className="text-center text-3xl font-bold text-white">
          Login
        </h4>

        <FormInput type="email" label="email" name="identifier" />
        <FormInput type="password" label="password" name="password" />

        <div className="mt-2">
          <Submitbtn size="w-full" text="login" />
        </div>

        <button
          type="button"
          onClick={loginAsGuestUser}
          className="w-full mt-2 rounded-lg bg-pink-500 py-2 font-semibold text-white hover:bg-pink-600 transition"
        >
          guest user
        </button>

        <p className="text-center text-slate-300 mt-2">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 text-indigo-400 hover:underline capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  )
}

export default Login

import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { clearCart } from '../Features/Cart/CartSlice'
import { logoutUser } from '../features/user/userSlice'
import { Button, Flex } from 'antd'
import { useQueryClient } from '@tanstack/react-query'

const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const queryClient=useQueryClient()
	const user = useSelector((state) => state.userState.user)
	const handleLogout = () => {
		navigate('/')
		dispatch(clearCart())
		dispatch(logoutUser())
		queryClient.removeQueries()
	}

	return (
		<header className='bg-[#00001A] py-2 text-neutral-content'>
			<Flex className='align-element justify-center sm:justify-end'>
				{
					user ? (
						<Flex className='gap-x-2 sm:gap-x-8 items-center'>
							<p className='text-xs sm:text-sm'>Hello, {user.username}</p>
							<Button style={{backgroundColor:'transparent',border:"2px solid #000080",color:"white"}} onClick={handleLogout }>logout</Button>
						</Flex>
					) : (
						<Flex className='flex gap-x-6 justify-center items-center'>
							<Link to='/login' className='link link-hover text-xs sm:text-sm'>
								Sign in / Guest
							</Link>
							<Link to='/register' className='link link-hover text-xs sm:text-sm'>
								Create Account
							</Link>
						</Flex>
					)
				}

			</Flex>
		</header>
	)
}

export default Header

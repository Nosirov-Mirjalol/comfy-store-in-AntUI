import { useSelector } from 'react-redux'
import { Link } from 'react-router'
const Cart = () => {
	//temp
	const user = JSON.parse(localStorage.getItem('user')) || null
	const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

	if (numItemsInCart === 0) {
		return <></>
	}
	return (
		<>
			
		</>
	)
}

export default Cart

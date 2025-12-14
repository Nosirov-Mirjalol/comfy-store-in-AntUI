import { useLoaderData, Link } from 'react-router'
import { formatPrice, customFetch, generateAmountOptions } from '../utils'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'


const singleProductQuery = (id) => {
	return {
		queryKey: ['singleProduct', id],
		queryFn: () => customFetch(`/products/${id}`)
	}
}


export const loader = (queryClient) => async ({ params }) => {
	const response = await queryClient.ensureQueryData(singleProductQuery(params.id))

	return { product: response.data.data }
}

const SingleProduct = () => {
	const { product } = useLoaderData()
	const { image, title, price, description, colors, company } = product.attributes
	const dollars = formatPrice(price)
	const [productColor, setProductColor] = useState(colors[0])
	const [amount, setAmount] = useState(1)
	console.log(product)

	const handleAmount = (e) => {
		setAmount(parseInt(e.target.value))
	}
	const cartProduct = {
		cartID: product.id + productColor,
		productID: product.id,
		image,
		title,
		price,
		company,
		productColor,
		amount
	}
	const dispatch = useDispatch()

	const addToCart = () => {
		dispatch(addItem({ product: cartProduct }))
	}
	return (
		<></>
	)
}

export default SingleProduct
import { Select, Button } from 'antd'
import { formatPrice, generateAmountOptions } from '../utils'
import { removeItem, editItem } from '../Features/Cart/CartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({ cartItem }) => {
	const dispatch = useDispatch()

	const removeItemFromTheCart = () => {
		dispatch(removeItem({ cartID }))
	}

	const handleAmount = (value) => {
		dispatch(editItem({ cartID, amount: parseInt(value) }))
	}

	const { cartID, title, price, image, amount, company, productColor } =
		cartItem

	return (
		<article className='mb-8 flex flex-col sm:flex-row items-start gap-6 border-b border-base-300 pb-6'>
			{/* IMAGE */}
			<img
				src={image}
				alt={title}
				className='h-24 w-24 sm:h-28 sm:w-28 rounded-lg object-cover'
			/>

			{/* INFO */}
			<div className='flex-1'>
				<h3 className='font-medium capitalize'>{title}</h3>
				<p className='text-sm text-neutral-content mt-1 capitalize'>
					{company}
				</p>

				<div className='mt-3 flex items-center gap-2 text-sm'>
					color :
					<span
						className='inline-block h-4 w-4 rounded-full border'
						style={{ backgroundColor: productColor }}
					/>
				</div>
			</div>

			{/* ACTIONS */}
			<div className='flex flex-col items-start gap-2 min-w-[100px]'>
				<span className='text-sm'>Amount</span>

				<Select
					value={amount}
					onChange={handleAmount}
					size='small'
					style={{ width: 80 }}
					options={Array.from({ length: amount + 5 }, (_, i) => ({
						value: i + 1,
						label: i + 1,
					}))}
				/>

				<Button
					type='link'
					danger
					className='p-0 h-auto text-sm'
					onClick={removeItemFromTheCart}
				>
					remove
				</Button>
			</div>

			{/* PRICE */}
			<p className='font-medium sm:ml-auto'>
				{formatPrice(price)}
			</p>
		</article>
	)
}

export default CartItem
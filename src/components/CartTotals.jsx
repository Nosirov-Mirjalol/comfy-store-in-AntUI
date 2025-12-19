import { useSelector } from 'react-redux'
import { formatPrice } from '../utils'
import { Flex } from 'antd'

const CartTotals = () => {
	const { cartTotal, shipping, tax, orderTotal } = useSelector(
		(state) => state.cartState
	)

	return (
		<div className='w-full max-w-sm rounded-xl bg-base-200 p-6 shadow-sm flex flex-col gap-4 '>
			{/* SUBTOTAL */}
			<Flex className='justify-between items-center text-sm border-b border-base-300 pb-2'>
				<span className='text-neutral-content'>Subtotal</span>
				<span className='font-medium'>
					{formatPrice(cartTotal)}
				</span>
			</Flex>

			{/* SHIPPING */}
			<Flex className='justify-between items-center text-sm border-b border-base-300 py-2'>
				<span className='text-neutral-content'>Shipping</span>
				<span className='font-medium'>
					{formatPrice(shipping)}
				</span>
			</Flex>

			{/* TAX */}
			<Flex className='justify-between items-center text-sm border-b border-base-300 py-2'>
				<span className='text-neutral-content'>Tax</span>
				<span className='font-medium'>
					{formatPrice(tax)}
				</span>
			</Flex>

			{/* ORDER TOTAL */}
			<Flex className='justify-between items-center text-base font-semibold mt-4'>
				<span>Order Total</span>
				<span>{formatPrice(orderTotal)}</span>
			</Flex>
		</div>
	)
}

export default CartTotals

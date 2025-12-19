import day from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { useLoaderData } from 'react-router'
import { Table } from 'antd'
import './orders-table.css'

day.extend(advancedFormat)

const OrdersList = () => {
	const { orders, meta } = useLoaderData()

	const columns = [
		{ title: 'Name', dataIndex: 'name' },
		{ title: 'Address', dataIndex: 'address' },
		{
			title: 'Products',
			dataIndex: 'numItemsInCart',
			align: 'center',
		},
		{
			title: 'Cost',
			dataIndex: 'orderTotal',
			render: (val) => <span className='price'>{val}</span>,
		},
		{
			title: 'Date',
			dataIndex: 'date',
			className: 'date-col',
		},
	]

	const dataSource = orders.map((order) => {
		const { id } = order
		const {
			name,
			address,
			numItemsInCart,
			orderTotal,
			createdAt,
		} = order.attributes

		return {
			key: id,
			name,
			address,
			numItemsInCart,
			orderTotal,
			date: day(createdAt).format('hh:mm a - MMM D, YYYY'),
		}
	})

	return (
		<div className='orders-wrapper'>
			<h4 className='orders-title'>
				Total Orders: {meta.pagination.total}
			</h4>

			<Table
				className='orders-table'
				columns={columns}
				dataSource={dataSource}
				pagination={false}
			/>
		</div>
	)
}

export default OrdersList

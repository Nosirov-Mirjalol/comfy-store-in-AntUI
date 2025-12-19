import { Button, Spin } from 'antd'
import { useNavigation } from 'react-router'

const SubmitBtn = ({ text, size }) => {
	const navigation = useNavigation()
	const isSubmitting = navigation.state === 'submitting'

	return (
		<Button
			type='primary'
			htmlType='submit'
			block
			disabled={isSubmitting}
			size={size === 'btn-xl' ? 'large' : 'middle'}
			className='rounded-lg flex items-center justify-center gap-2'
		>
			{isSubmitting ? (
				<>
					<Spin size='small' />
					<span style={{color:"white"}} className='pl-3'>sending...</span>
				</>
			) : (
				text || 'submit'
			)}
		</Button>
	)
}

export default SubmitBtn

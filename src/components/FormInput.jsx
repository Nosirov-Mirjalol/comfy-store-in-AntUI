import { Input } from 'antd'

const FormInput = ({ type, defaultValue, label, size, name }) => {
	return (
		<div className='py-3'>
			<label className='block mb-1 text-sm font-medium'>
				{label}
			</label>

			<Input
				type={type}
				name={name}
				defaultValue={defaultValue}
				size={size === 'input-lg' ? 'large' : 'middle'}
				className='rounded-lg'
				style={{backgroundColor:"rgba(255,255,255,0.3)"}}
			/>
		</div>
	)
}

export default FormInput

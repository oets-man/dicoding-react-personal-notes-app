export default function OptionsCheck({ onChange, options }) {
	const name = 'opt-' + Math.random().toString(16).slice(2, 10);
	return (
		<div className='gap-3 d-flex justify-content-center'>
			{options.map((option, index) => (
				<input
					key={index}
					type='radio'
					name={name}
					onChange={onChange}
					label={option.label}
					value={option.value}
					defaultChecked={option.defaultChecked}
				/>
			))}
		</div>
	);
}

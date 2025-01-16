import PropTypes from 'prop-types';

function OptionsCheck({ onChange, options }) {
	const name = 'opt-' + Math.random().toString(16).slice(2, 10);
	return (
		<div className='flex gap-2 mt-2 justify-evenly'>
			{options.map((option, index) => (
				<div key={index} className='w-1/5'>
					<label className='flex items-center'>
						<input
							type='radio'
							name={name}
							onChange={onChange}
							value={option.value}
							defaultChecked={option.defaultChecked}
						/>
						<span className='ml-2'>{option.label}</span>
					</label>
				</div>
			))}
		</div>
	);
}

OptionsCheck.propTypes = {
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired,
			defaultChecked: PropTypes.bool,
		}),
	).isRequired,
};

export default OptionsCheck;

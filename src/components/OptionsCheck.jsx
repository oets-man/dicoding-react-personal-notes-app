import PropTypes from 'prop-types';

function OptionsCheck({ onChange, options }) {
	const name = 'opt-' + Math.random().toString(16).slice(2, 10);
	return (
		<div className='flex gap-2 p-2 border rounded-md bg-slate-100 justify-evenly border-slate-300 focus-within:ring-1 focus-within:ring-slate-500 dark:bg-slate-700'>
			{options.map((option, index) => (
				<div key={index} className=''>
					<label className='flex items-center dark:text-slate-300'>
						<input
							type='radio'
							name={name}
							onChange={onChange}
							value={option.value}
							defaultChecked={option.defaultChecked}
						/>
						<span className='ml-2'>{option?.label || 'Opsi'}</span>
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
			label: PropTypes.string,
			value: PropTypes.string.isRequired,
			defaultChecked: PropTypes.bool,
		}),
	).isRequired,
};

export default OptionsCheck;

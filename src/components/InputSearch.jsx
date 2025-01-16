import { ButtonNormal } from './Buttons';
import OptionsCheck from './OptionsCheck';
import PropTypes from 'prop-types';

function InputSearch({ strSearch, onChangeSearch, onReset, onChangeOption }) {
	const options = [
		{ value: 'searchTitle', label: 'Judul', defaultChecked: true },
		{ value: 'searchBody', label: 'Isi', defaultChecked: false },
		{ value: 'searchAll', label: 'Semua', defaultChecked: false },
	];

	return (
		<div className='p-2 mx-auto bg-slate-200 rounded-lg max-w-[500px] mb-4 border-slate-300 border'>
			<div className='flex'>
				<input
					className='w-full p-2 rounded-md'
					placeholder='Masukkan teks pencarian'
					aria-label='Masukkan teks pencarian'
					aria-describedby='pencarian'
					value={strSearch}
					onChange={onChangeSearch}
				/>
				<ButtonNormal onClick={onReset} iconName='carbon:reset'>
					Reset
				</ButtonNormal>
			</div>
			<OptionsCheck onChange={onChangeOption} options={options} />
		</div>
	);
}

InputSearch.propTypes = {
	strSearch: PropTypes.string.isRequired,
	onChangeSearch: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	onChangeOption: PropTypes.func.isRequired,
};

export default InputSearch;

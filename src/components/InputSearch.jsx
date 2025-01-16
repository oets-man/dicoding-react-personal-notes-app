import { ButtonNormal } from './Buttons';
import OptionsCheck from './OptionsCheck';
import PropTypes from 'prop-types';

function InputSearch({ search, onSearch, onReset, onChangeOption }) {
	const options = [
		{ value: 'title', label: 'Judul', defaultChecked: search.option === 'title' },
		{ value: 'body', label: 'Isi', defaultChecked: search.option === 'body' },
		{ value: 'any', label: 'Semua', defaultChecked: search.option === 'any' },
	];

	return (
		<div className='p-2 mx-auto bg-slate-200 rounded-lg max-w-[500px] mb-4 border-slate-300 border'>
			<div className='flex'>
				<input
					className='w-full p-2 rounded-md'
					placeholder='Masukkan teks pencarian'
					aria-label='Masukkan teks pencarian'
					aria-describedby='pencarian'
					value={search.text}
					onChange={onSearch}
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
	onSearch: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	onChangeOption: PropTypes.func.isRequired,
	search: PropTypes.shape({
		option: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	}),
};

export default InputSearch;

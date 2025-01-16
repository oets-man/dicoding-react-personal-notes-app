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
		<div className='grid grid-cols-5 grid-rows-2 bg-slate-200 rounded-lg max-w-xl mb-4 border-slate-300 border mx-auto'>
			<div className='col-span-4 row-span-1 py-2 pl-2'>
				<input
					className='p-2 rounded-md w-full focus:ring-1 focus:ring-slate-500'
					placeholder='Masukkan teks pencarian'
					aria-label='Masukkan teks pencarian'
					aria-describedby='pencarian'
					value={search.text}
					onChange={onSearch}
				/>
			</div>

			<div className='col-span-1 row-span-1 relative'>
				<div className='absolute right-0'>
					<ButtonNormal onClick={onReset} iconName='carbon:reset'>
						Reset
					</ButtonNormal>
				</div>
			</div>

			<div className='col-span-4 row-span-1 pl-2 mt-2'>
				<OptionsCheck onChange={onChangeOption} options={options} />
			</div>
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

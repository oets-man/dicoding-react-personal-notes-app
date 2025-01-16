import OptionsCheck from './OptionsCheck';

export default function InputSearch({ strSearch, onChangeSearch, onReset, optSearch }) {
	const options = [
		{ value: 'searchAll', label: 'Semua', defaultChecked: false },
		{ value: 'searchTitle', label: 'Judul', defaultChecked: true },
		{ value: 'searchBody', label: 'Isi', defaultChecked: false },
	];
	return (
		<div className='p-2 mx-auto col-sm-12 col-md-6 col-lg-4' style={{ minWidth: '375px' }}>
			<input
				className='mb-2'
				placeholder='Masukkan teks pencarian'
				aria-label='Masukkan teks pencarian'
				aria-describedby='pencarian'
				value={strSearch}
				onChange={onChangeSearch}
			/>
			<button className='px-4' onClick={onReset}>
				Reset
			</button>
			<OptionsCheck onChange={optSearch} options={options} />
		</div>
	);
}

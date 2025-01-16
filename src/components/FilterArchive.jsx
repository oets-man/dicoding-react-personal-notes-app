import OptionsCheck from './OptionsCheck';

export default function FilterArchive({ optArchived }) {
	const options = [
		{ value: 'all', label: 'Semua', defaultChecked: true },
		{ value: 'active', label: 'Aktif', defaultChecked: false },
		{ value: 'archive', label: 'Arsip', defaultChecked: false },
	];
	return (
		<div className='mt-3'>
			<div className='py-2 mx-auto card col-sm-12 col-md-6 col-lg-4' style={{ minWidth: '375px' }}>
				<p className='m-0 text-center fw-bold'>Tampilkan Catatan</p>
				<OptionsCheck onChange={optArchived} options={options} />
			</div>
		</div>
	);
}

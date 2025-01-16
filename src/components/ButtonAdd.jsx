import { Icon } from '@iconify/react/dist/iconify.js';

export default function ButtonAdd({ handleShowModal }) {
	return (
		<div className='m-3 mx-auto d-grid col-sm-12 col-md-6 col-lg-4' style={{ minWidth: '375px' }}>
			<button onClick={handleShowModal}>
				<Icon icon='material-symbols:note-add' width='1.5em' height='1.5em' />
				<span style={{ marginLeft: '4px' }}>Buat Baru</span>
			</button>
		</div>
	);
}

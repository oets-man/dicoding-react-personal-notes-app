import ListItems from './ListItems';

export default function ListContainer({ notes, toggleArchived, onDelete }) {
	if (notes.length) {
		return (
			<div>
				{notes.map((note) => (
					<div key={note.id} className='p-2'>
						<ListItems {...note} toggleArchived={toggleArchived} onDelete={onDelete} />
					</div>
				))}
			</div>
		);
	} else {
		return (
			<div className='text-center'>
				<p className='m-0  fw-bold'>Tidak ada data untuk ditampilkan!</p>
				<p className='m-0 fst-italic'>Buat baru, ubah tampilan, atau coba kata kunci yang lain!</p>
			</div>
		);
	}
}

import PropTypes from 'prop-types';
import ListItems from './ListItems';
import NotFound from './NotFound';

function ListContainer({ notes, onUpdate }) {
	if (notes.length) {
		return (
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
					{notes.map((note) => (
						<div key={note.id} className=''>
							<ListItems {...note} onUpdate={onUpdate} />
						</div>
					))}
				</div>
			</div>
		);
	} else {
		return <NotFound>Tidak ada data untuk ditampilkan!</NotFound>;
	}
}

ListContainer.propTypes = {
	notes: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string.isRequired,
			createdAt: PropTypes.string.isRequired,
			archived: PropTypes.bool.isRequired,
		}),
	).isRequired,
	onUpdate: PropTypes.func.isRequired,
};

export default ListContainer;

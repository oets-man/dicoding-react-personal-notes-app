import { Link } from 'react-router-dom';
import showFormattedDate from '../utils/format-date';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { archiveNote, getNote, unarchiveNote } from '../utils/local-data';
import alertify from 'alertifyjs';
import SwitchField from './SwitchField';

function ListItems({ title, body, createdAt, archived, onUpdate, id, Component }) {
	const onChange = () => {
		const note = getNote(id);
		note.archived ? unarchiveNote(id) : archiveNote(id);
		note.archived != true
			? alertify.success('Catatan dipindahkan ke arsip')
			: alertify.success('Catatan dihapus dari arsip');
		onUpdate();
	};

	return (
		<div className='overflow-hidden border rounded-lg shadow-md border-slate-200'>
			<div className='flex items-center justify-between bg-slate-400 text-slate-800'>
				<div className='p-2 hover:text-slate-500'>
					<Link to={`/notes/${id}`}>
						<h2 className='text-lg font-bold'>{title}</h2>
					</Link>
				</div>
				{Component && <Component />}
			</div>
			<div className='p-2'>
				<div className='font-light text-justify'>{parser(body)}</div>
			</div>
			<div className='flex justify-between p-2 bg-slate-300'>
				<SwitchField label='Arsip' checked={archived} onChange={onChange} />
				<div className='italic font-light text-slate-700'>
					<small> &mdash; dibuat: {showFormattedDate(createdAt)}</small>
				</div>
			</div>
		</div>
	);
}

ListItems.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
	id: PropTypes.string.isRequired,
	Component: PropTypes.elementType,
	onUpdate: PropTypes.func.isRequired,
};

export default ListItems;

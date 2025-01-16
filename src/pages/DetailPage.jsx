import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/local-data';
import NotFound from '../components/NotFound';
import ListItems from '../components/ListItems';
import alertify from 'alertifyjs';
import { useState } from 'react';
import { ButtonDanger, ButtonNormal } from '../components/Buttons';

function DetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [note, setNote] = useState(getNote(id));
	const onToggleArchived = (id) => {
		const note = getNote(id);
		note.archived ? unarchiveNote(id) : archiveNote(id);
		note.archived != true
			? alertify.success('Catatan dipindahkan ke arsip')
			: alertify.success('Catatan dihapus dari arsip');
		setNote(getNote(id));
	};

	const handleEdit = () => {
		navigate(`/notes/${id}/edit`);
	};

	const handleDelete = () => {
		const confirmed = window.confirm('Apakah Anda yakin akan menghapus catatan ini?');
		if (!confirmed) return;

		deleteNote(id);
		alertify.success('Catatan berhasil dihapus');
		navigate('/');
	};

	const buttons = () => (
		<div className='flex'>
			<ButtonNormal onClick={handleEdit} iconName='material-symbols:edit'>
				Edit
			</ButtonNormal>
			<ButtonDanger onClick={handleDelete} iconName='weui:delete-outlined'>
				Hapus
			</ButtonDanger>
		</div>
	);

	return (
		<div>
			{note ? (
				<div className='max-w-4xl mx-auto'>
					<ListItems {...note} onToggleArchived={onToggleArchived} Component={buttons}></ListItems>
				</div>
			) : (
				<NotFound>Catatan tidak temukan</NotFound>
			)}
		</div>
	);
}

export default DetailPage;

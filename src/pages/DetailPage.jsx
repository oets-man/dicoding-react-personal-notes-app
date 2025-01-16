import { useNavigate, useParams } from 'react-router-dom';
import { deleteNote, getNote } from '../utils/local-data';
import NotFound from '../components/NotFound';
import ListItems from '../components/ListItems';
import alertify from 'alertifyjs';
import { useState } from 'react';
import { ButtonDanger, ButtonNormal } from '../components/Buttons';

function DetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [note, setNote] = useState(getNote(id));

	const handleEdit = () => {
		navigate(`/notes/${note.id}/edit`);
	};

	const handleDelete = () => {
		alertify.confirm(
			'Konfirmasi',
			'Apakah Anda yakin akan menghapus catatan ini?',
			() => {
				deleteNote(note.id);
				alertify.success('Catatan berhasil dihapus');
				navigate('/');
			},
			() => alertify.warning('Catatan gagal dihapus'),
		);
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
					<ListItems {...note} onUpdate={() => setNote(getNote(note.id))} Component={buttons}></ListItems>
				</div>
			) : (
				<NotFound>Catatan tidak temukan</NotFound>
			)}
		</div>
	);
}

export default DetailPage;

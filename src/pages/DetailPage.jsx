import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../components/NotFound';
import ListItems from '../components/ListItems';
import alertify from 'alertifyjs';
import { useEffect, useState } from 'react';
import { ButtonDanger, ButtonNormal } from '../components/Buttons';
import { deleteNote, getNote } from '../utils/api';

function DetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [note, setNote] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		getNote(id).then(({ error, data }) => {
			setIsLoading(false);
			if (!error) {
				setNote(data);
			}
		});
	}, [id]);

	const handleEdit = () => {
		// navigate(`/notes/${note.id}/edit`);
		alertify.error('Fitur (API) belum tersedia');
	};

	const handleDelete = () => {
		alertify.confirm(
			'Konfirmasi',
			'Apakah Anda yakin akan menghapus catatan ini?',
			() => {
				setIsLoading(true);
				deleteNote(note.id).then(({ error }) => {
					setIsLoading(false);
					if (error) {
						return alertify.error('Catatan gagal dihapus');
					}
					alertify.success('Catatan berhasil dihapus');
					navigate('/');
				});
			},
			() => {},
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
			{isLoading ? (
				<p>Loading...</p>
			) : note ? (
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

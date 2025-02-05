import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../components/NotFound';
import ListItems from '../components/ListItems';
import alertify from 'alertifyjs';
import { useEffect, useState } from 'react';
import { ButtonDanger, ButtonNormal } from '../components/Buttons';
import { deleteNote, getNote } from '../utils/api';
import LoadingSpinner from '../components/LoadingSpinner';
import useLocale from '../hooks/use-locale';

function DetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [note, setNote] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const { label } = useLocale();
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
				{label.edit}
			</ButtonNormal>
			<ButtonDanger onClick={handleDelete} iconName='weui:delete-outlined'>
				{label.delete}
			</ButtonDanger>
		</div>
	);

	return (
		<div>
			{isLoading ? (
				<LoadingSpinner />
			) : note ? (
				<div className='max-w-4xl mx-auto'>
					<ListItems
						{...note}
						onUpdate={() => {
							// setRerender((prev) => !prev);
							setNote((prev) => ({ ...prev, archived: !prev.archived }));
						}}
						Component={buttons}
					/>
				</div>
			) : (
				<NotFound>Catatan tidak temukan</NotFound>
			)}
		</div>
	);
}

export default DetailPage;

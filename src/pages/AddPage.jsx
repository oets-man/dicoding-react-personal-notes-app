import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import alertify from 'alertifyjs';
import NoteForm from '../components/NoteForm';
import { addNote } from '../utils/api';
import LoadingOverlay from '../components/LoadingOverlay';
import useLocale from '../hooks/use-locale';

function AddPage() {
	const initNote = {
		title: '',
		body: '',
	};

	const [note, setNote] = useState(initNote);
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();
	const { label } = useLocale();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!note.body || !note.title) {
			return alertify.error('Judul dan catatan tidak boleh kosong');
		}

		setIsLoading(true);
		addNote(note).then(({ error, data }) => {
			setIsLoading(false);
			if (error) {
				return alertify.error('Catatan gagal ditambahkan');
			}
			alertify.success('Catatan berhasil ditambahkan');
			navigate(`/notes/${data.id}`);
		});
	};

	const handleReset = (e) => {
		e.preventDefault();
		setNote(initNote);
	};

	return (
		<div className='container mx-auto'>
			<div className='overflow-hidden border rounded-lg shadow-md border-slate-200'>
				<div className='p-2 text-xl bg-slate-400 text-slate-800'>{label.createNote}</div>
				<LoadingOverlay isLoading={isLoading} />
				<NoteForm note={note} setNote={setNote} handleSubmit={handleSubmit} handleReset={handleReset} />
			</div>
		</div>
	);
}

export default AddPage;

import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';
import { useState } from 'react';
import alertify from 'alertifyjs';
import NoteForm from '../components/NoteForm';

function AddPage() {
	const initNote = {
		title: '',
		body: '',
	};

	const [note, setNote] = useState(initNote);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!note.body || !note.title) {
			return alertify.error('Judul dan catatan tidak boleh kosong');
		}

		const { id } = addNote(note);
		alertify.success('Catatan berhasil ditambahkan');
		navigate(`/notes/${id}`);
	};

	const handleReset = (e) => {
		e.preventDefault();
		setNote(initNote);
	};

	return (
		<div className='container mx-auto'>
			<div className='overflow-hidden border rounded-lg shadow-md border-slate-200'>
				<div className='p-2 text-xl bg-slate-400 text-slate-800'>Edit Catatan</div>
				<NoteForm note={note} setNote={setNote} handleSubmit={handleSubmit} handleReset={handleReset} />
			</div>
		</div>
	);
}

export default AddPage;

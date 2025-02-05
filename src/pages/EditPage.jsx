import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { editNote, getNote } from '../utils/local-data';
import NotFound from '../components/NotFound';
import { useState } from 'react';
import alertify from 'alertifyjs';
import NoteForm from '../components/NoteForm';

/**
 * @throws Fitur (API) belum tersedia
 *
 * @description
 * - Halaman untuk mengedit catatan
 * - Sisa submission sebelumnya
 *
 * @note
 * - API belum tersedia
 * - Tidak perlu ditinjau
 *
 * @returns Navigate to Page Detail
 */

function EditPage() {
	const { id } = useParams();
	const [originalNote] = useState(getNote(id));
	const [note, setNote] = useState(originalNote);
	const navigate = useNavigate();

	const handleReset = (e) => {
		e.preventDefault();
		setNote(originalNote);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!note.body || !note.title) {
			return alertify.error('Judul dan catatan tidak boleh kosong');
		}

		editNote(note);
		alertify.success('Catatan berhasil diubah');
		navigate(`/notes/${note.id}`);
	};

	return (
		<div>
			{/*
				Always redirect to note
				API belum tersedia
			*/}
			<Navigate to={`/notes/${id}`} />
			{note ? (
				<div className='max-w-4xl mx-auto'>
					<div className='overflow-hidden border rounded-lg shadow-md border-slate-200'>
						<div className='p-2 text-xl bg-slate-400 text-slate-800'>Edit Catatan</div>
						<NoteForm note={note} setNote={setNote} handleSubmit={handleSubmit} handleReset={handleReset} />
					</div>
				</div>
			) : (
				<NotFound>Catatan tidak temukan</NotFound>
			)}
		</div>
	);
}

export default EditPage;

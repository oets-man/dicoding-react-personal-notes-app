import PropTypes from 'prop-types';
import { ButtonDanger, ButtonNormal } from './Buttons';
import {
	BtnBold,
	BtnClearFormatting,
	BtnItalic,
	BtnLink,
	BtnRedo,
	BtnStrikeThrough,
	BtnUnderline,
	BtnUndo,
	Editor,
	EditorProvider,
	Separator,
	Toolbar,
} from 'react-simple-wysiwyg';
import InputField from './InputField';

function NoteForm({ note, setNote, handleSubmit, handleReset }) {
	return (
		<form onReset={handleReset} onSubmit={handleSubmit}>
			<InputField
				label='Judul'
				id='title'
				name='title'
				value={note.title}
				onChange={(e) => {
					setNote({ ...note, title: e.target.value });
				}}
			/>

			<div className='p-2'>
				<label className='block font-medium text-gray-900 text-sm/6'>Catatan:</label>
				<EditorProvider>
					<Editor
						value={note.body}
						onChange={(e) => {
							setNote({ ...note, body: e.target.value });
						}}
					>
						<Toolbar>
							<BtnUndo />
							<BtnRedo />
							<Separator />
							<BtnBold />
							<BtnItalic />
							<BtnUnderline />
							<BtnStrikeThrough />
							<Separator />
							<BtnLink />
							<BtnClearFormatting />
						</Toolbar>
					</Editor>
				</EditorProvider>
			</div>

			<div className='flex p-2 bg-slate-300'>
				<ButtonDanger iconName='carbon:reset' type='reset'>
					Reset
				</ButtonDanger>
				<ButtonNormal onClick={() => {}} iconName='material-symbols-light:save-outline' type='submit'>
					Simpan
				</ButtonNormal>
			</div>
		</form>
	);
}

NoteForm.propTypes = {
	note: PropTypes.shape({
		title: PropTypes.string,
		body: PropTypes.string,
	}).isRequired,
	setNote: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleReset: PropTypes.func.isRequired,
};

export default NoteForm;

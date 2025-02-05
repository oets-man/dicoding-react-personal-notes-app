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
import useLocale from '../hooks/use-locale';

function NoteForm({ note, setNote, handleSubmit, handleReset }) {
	const { label } = useLocale();
	return (
		<form onReset={handleReset} onSubmit={handleSubmit}>
			<InputField
				label={label.title}
				id='title'
				name='title'
				value={note.title}
				onChange={(e) => {
					setNote({ ...note, title: e.target.value });
				}}
			/>

			<div className='p-2'>
				<label className='block font-medium text-slate-900 dark:text-slate-100 text-sm/6'>
					{label.content}
				</label>
				<EditorProvider>
					<Editor
						value={note.body}
						onChange={(e) => {
							setNote({ ...note, body: e.target.value });
						}}
						className='bg-slate-50 text-slate-950 dark:bg-slate-800 dark:text-slate-50'
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

			<div className='flex p-2 bg-slate-300 dark:bg-slate-700'>
				<ButtonDanger iconName='carbon:reset' type='reset'>
					{label.reset}
				</ButtonDanger>
				<ButtonNormal onClick={() => {}} iconName='material-symbols-light:save-outline' type='submit'>
					{label.save}
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

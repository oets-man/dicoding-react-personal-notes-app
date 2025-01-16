import { Link } from 'react-router-dom';
import showFormattedDate from '../utils/format-date';
import { Field, Label, Switch } from '@headlessui/react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { archiveNote, getNote, unarchiveNote } from '../utils/local-data';
import alertify from 'alertifyjs';

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
				<Field className='flex gap-x-2 sm:col-span-2'>
					<div className='flex items-center h-6'>
						<Switch
							checked={archived}
							onChange={onChange}
							className='group flex w-8 flex-none cursor-pointer rounded-full bg-slate-200 p-px ring-1 ring-inset ring-slate-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 data-[checked]:bg-slate-600'
						>
							<span className='sr-only'>Arsip</span>
							<span
								aria-hidden='true'
								className='size-4 transform rounded-full bg-white shadow-sm ring-1 ring-slate-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5'
							/>
						</Switch>
					</div>
					<Label className='text-slate-700 text-sm/6'>Arsip</Label>
				</Field>
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

import { Link } from 'react-router-dom';
import showFormattedDate from '../utils/format-date';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import alertify from 'alertifyjs';
import SwitchField from './SwitchField';
import { archiveNote, unarchiveNote } from '../utils/api';
import { useState } from 'react';
import useLocale from '../hooks/use-locale';

function ListItems({ title, body, createdAt, archived, onUpdate, id, Component }) {
	const [check, setCheck] = useState(archived);
	const { label } = useLocale();

	const onChange = async () => {
		setCheck(!check);
		if (check) {
			const { error } = await unarchiveNote(id);
			if (error) {
				setCheck(true);
				return alertify.error('Gagal dihapus dari arsip');
			}
			alertify.success('Catatan dihapus dari arsip');
			return onUpdate();
		} else {
			const { error } = await archiveNote(id);
			if (error) {
				setCheck(false);
				return alertify.error('Gagal dipindahkan ke arsip');
			}
			alertify.success('Catatan dipindahkan ke arsip');
			return onUpdate();
		}
	};

	return (
		<div className='overflow-hidden border rounded-lg shadow-md border-slate-200'>
			<div className='flex items-center justify-between bg-slate-400 text-slate-800 dark:bg-slate-800 dark:text-slate-200'>
				<div className='p-2 hover:text-slate-500'>
					<Link to={`/notes/${id}`}>
						<h2 className='text-lg font-bold'>{title}</h2>
					</Link>
				</div>
				{Component && <Component />}
			</div>
			<div className='p-2'>
				<div className='font-light text-justify dark:text-slate-100'>{parser(body)}</div>
			</div>
			<div className='flex justify-between p-2 text-slate-700 bg-slate-300 dark:bg-slate-700 dark:text-slate-300'>
				<SwitchField label={label.archive} checked={check} onChange={onChange} />
				<div className='ml-2 italic font-light'>
					<small>
						&mdash; {label.createdAt} {showFormattedDate(createdAt, label.locale)}
					</small>
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

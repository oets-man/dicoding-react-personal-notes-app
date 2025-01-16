import showFormattedDate from '../utils/format-date';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function ListItems({ title, body, createdAt, archived, toggleArchived, id, onDelete }) {
	return (
		<div>
			<div>
				<div className='m-0'>
					<h2 className='m-0 fw-normal fs-4'>{title}</h2>
				</div>
			</div>
			<div className='p-3'>
				<div className='' style={{ textAlign: 'justify' }}>
					{body}
				</div>
				<div className='text-end fst-italic'>
					<small> &mdash; dibuat: {showFormattedDate(createdAt)}</small>
				</div>
			</div>
			<div className='d-flex align-items-center justify-content-between'>
				<button onClick={() => onDelete(id)}>
					<Icon icon='mdi:trash' width='1.25em' height='1.25em' />
					<span style={{ marginLeft: '4px' }}>Hapus</span>
				</button>

				<input
					type='checkbox'
					key={archived}
					checked={archived}
					onChange={() => toggleArchived(id)}
					label='Arsipkan!'
					className=''
				/>
			</div>
		</div>
	);
}

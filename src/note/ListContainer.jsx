/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ListItems from './ListItems';

export default function ListContainer({ notes }) {
	return (
		<div className='row'>
			{notes.map((note) => (
				<div className='col-12 col-md-6 col-xl-4' key={note.id}>
					<ListItems  {...note} />
				</div>
			))}
		</div>
	);
}

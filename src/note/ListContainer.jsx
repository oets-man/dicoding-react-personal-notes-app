/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ListItems from './ListItems';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ListContainer({ notes, toggleArchived, view }) {
	let localNotes = notes;
	if (view == 'isArchived') localNotes = notes.filter((note) => note.archived == true);
	if (view == 'isNotArchived') localNotes = notes.filter((note) => note.archived == false);

	// console.log(localNotes);

	return (
		<Row>
			{localNotes.map((note) => (
				<Col sm="12" md="6" lg="4" key={note.id} className="p-2">
					<ListItems {...note} toggleArchived={toggleArchived} />
				</Col>
			))}
		</Row>
	);
}

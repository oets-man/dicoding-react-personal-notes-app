/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ListItems from './ListItems';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ListContainer({ notes, toggleArchived, view }) {
	let filteredNotes = notes;
	if (view == 'isArchived') filteredNotes = notes.filter((note) => note.archived == true);
	if (view == 'isNotArchived') filteredNotes = notes.filter((note) => note.archived == false);

	return (
		<Row>
			{filteredNotes.map((note) => (
				<Col sm="12" md="6" lg="4" key={note.id} className="p-2">
					<ListItems {...note} toggleArchived={toggleArchived} />
				</Col>
			))}
		</Row>
	);
}

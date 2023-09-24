/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import showFormattedDate from '../utils/format-date';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function ListItems({ title, body, createdAt, archived, toggleArchived, id }) {
	return (
		<Card className="p-3">
			<Card.Title className="row">
				<h2 className="col-auto fw-normal fs-4">{title}</h2>
				<div className="col text-end">
					<Form.Check // prettier-ignore
						type="switch"
						key={archived}
						checked={archived}
						onChange={() => toggleArchived(id)}
					/>
					<p className="small fw-light fs-6 m-0">Arsipkan!</p>
				</div>
			</Card.Title>
			<Card.Body className="p-0">
				{/* <p>{archived ? 'ya' : 'tidak'}</p> */}
				<p>{body}</p>
				<hr />
				<p className="m-0">{showFormattedDate(createdAt)}</p>
			</Card.Body>
		</Card>
	);
}

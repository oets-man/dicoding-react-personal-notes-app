/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import showFormattedDate from '../utils/format-date';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ListItems({ title, body, createdAt, archived, toggleArchived, id, onDelete }) {
	return (
		<Card>
			<Card.Header>
				<Card.Title className='m-0'>
					<h2 className="fw-normal fs-4 m-0">{title}</h2>
				</Card.Title>
			</Card.Header>
			<Card.Body className="p-3">
				<Card.Text className="" style={{ textAlign: 'justify' }}>
					{body}
				</Card.Text>
				<Card.Text className="text-end fst-italic">
					<small> &mdash; dibuat: {showFormattedDate(createdAt)}</small>
				</Card.Text>

			</Card.Body>

			<Card.Footer className="d-flex align-items-center justify-content-between">
					<Button variant="danger"  onClick={() => onDelete(id)}>
						Hapus
					</Button>
					<Form.Check 
						type="switch"
						key={archived}
						checked={archived}
						onChange={() => toggleArchived(id)}
						label="Arsipkan!"
						className=""
					/>
			</Card.Footer>
		</Card>
	);
}

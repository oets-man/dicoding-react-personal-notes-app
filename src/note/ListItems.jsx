/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import showFormattedDate from '../utils/format-date';
import { Button } from 'react-bootstrap';


export default function ListItems({ title, body, createdAt }) {
	return (
		<>
      <Button variant="primary">Primary</Button>{' '}

			<h2>{title}</h2>
			<p>{body}</p>
			<p>{showFormattedDate(createdAt)}</p>
		</>
	);
}

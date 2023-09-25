/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function InputSearch({ strSearch, onChangeSearch, onReset }) {
	return (
		<div className="col-sm-12 col-md-6 col-lg-4 mx-auto" style={{minWidth:'375px'}}>
			<InputGroup>
				<Form.Control
					placeholder="Masukkan teks pencarian"
					aria-label="Masukkan teks pencarian"
					aria-describedby="pencarian"
					value={strSearch}
					onChange={onChangeSearch}
				/>
				<Button variant="outline-primary" className="px-4" onClick={onReset}>
					Reset
				</Button>
			</InputGroup>
		</div>
	);
}

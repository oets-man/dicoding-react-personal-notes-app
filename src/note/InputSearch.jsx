/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import OptionsCheck from './OptionsCheck';

export default function InputSearch({
	strSearch,
	onChangeSearch,
	onReset,
	optSearch,
}) {
	const options = [
		{ value: 'searchAll', label: 'Semua', defaultChecked: false },
		{ value: 'searchTitle', label: 'Judul', defaultChecked: true },
		{ value: 'searchBody', label: 'Isi', defaultChecked: false },
	];
	return (
		<Card
			className="col-sm-12 col-md-6 col-lg-4 mx-auto p-2"
			style={{ minWidth: '375px' }}
		>
			<InputGroup className="mb-2">
				<Form.Control
					placeholder="Masukkan teks pencarian"
					aria-label="Masukkan teks pencarian"
					aria-describedby="pencarian"
					value={strSearch}
					onChange={onChangeSearch}
				/>
				<Button
					variant="outline-primary"
					className="px-4"
					onClick={onReset}
				>
					Reset
				</Button>
			</InputGroup>
			<OptionsCheck onChange={optSearch} options={options} />
		</Card>
	);
}

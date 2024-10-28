/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Form from 'react-bootstrap/Form';

export default function OptionsCheck({ onChange, options }) {
	const name = 'opt-' + Math.random().toString(16).slice(2, 10);
	return (
		<div className="d-flex justify-content-center gap-3">
			{options.map((option, index) => (
				<Form.Check
					key={index}
					type="radio"
					name={name}
					onChange={onChange}
					label={option.label}
					value={option.value}
					defaultChecked={option.defaultChecked}
				/>
			))}
		</div>
	);
}

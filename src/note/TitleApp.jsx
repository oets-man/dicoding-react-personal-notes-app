/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function TitleApp({ children }) {
	return (
		<>
			<h1 className="text-center p-1 mt-4">{children}</h1>
			<hr />
		</>
	);
}

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

class CounterApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			s: 0,
		};

		this.onIncrease_ev = this.onIncrease_ev.bind(this);
		this.onReset_ev = this.onReset_ev.bind(this);
	}

	onIncrease_ev() {
		this.setState((state) => {
			return {
				count: state.count + 1,
			};
		});
	}

	onReset_ev() {
		this.setState(() => {
			return {
				count: 0,
			};
		});
	}

	render() {
		return (
			<div>
				<CounterDisplay count={this.state.count} />
				<IncreaseButton increase={this.onIncrease_ev} />
				<ResetButton reset={this.onReset_ev} />
			</div>
		);
	}
}

function CounterDisplay({ count }) {
	if (count == 0) return <p>nol</p>;
	if (count % 5 === 0 && count % 7 === 0) return <p>kelipatan 5 & 7</p>;
	if (count % 5 === 0) return <p>kelipatan 5</p>;
	if (count % 7 === 0) return <p>kelipatan 7</p>;

	return <p>{count}</p>;
}

function IncreaseButton({ increase }) {
	return <button onClick={increase}>+ increase</button>;
}

function ResetButton({ reset }) {
	return <button onClick={reset}>+ reset</button>;
}

export default CounterApp;

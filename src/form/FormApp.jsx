import React from 'react';

export class FormApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			gender: 'Man',
		};
        this.onNameChange_ev=this.onNameChange_ev.bind(this)
        this.onEmailChange_ev=this.onEmailChange_ev.bind(this)
        this.onGenderChange_ev=this.onGenderChange_ev.bind(this)
        this.onSubmit_ev = this.onSubmit_ev.bind(this);

	}

	onNameChange_ev(e) {
        // function return object
		this.setState(() => {
            return { name: e.target.value };
		});
	}

    onEmailChange_ev(e) {
        // object
        this.setState({ email: e.target.value });
	}
    
    onGenderChange_ev(e) {
        //  object
		this.setState({ gender: e.target.value });
	}

    onSubmit_ev(e){
        e.preventDefault();
 
        const message = `
          Name: ${this.state.name}
          Email: ${this.state.email}
          Gender: ${this.state.gender}
        `;
      
        alert(message);
     
    }

	render() {
		return (
			<div>
				<h1> Register Form</h1>
				<form onSubmit={this.onSubmit_ev}>
					<label htmlFor="name">Name: </label>
					<input id="name" type="text" value={this.state.name} onChange={this.onNameChange_ev}/>
					<br />
					<label htmlFor="email">Email: </label>
					<input id="email" type="text" value={this.state.email} onChange={this.onEmailChange_ev}/>
					<br />
					<label htmlFor="gender">Gender: </label>
					<select id="gender" value={this.state.gender} onChange={this.onGenderChange_ev}>
						<option value="Man">Man</option>
						<option value="Woman">Woman</option>
					</select>
					<br />
					<button type="submit">submit</button>
				</form>
			</div>
		);
	}
}

export default FormApp;

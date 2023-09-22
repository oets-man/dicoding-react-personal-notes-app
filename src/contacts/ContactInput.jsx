/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

export default class ContactInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			tag: '',
		};
        this.changeName=this.changeName.bind(this)
        this.changeTag=this.changeTag.bind(this)
        this.submitForm=this.submitForm.bind(this)
	}
    changeName(e){
        this.setState({name:e.target.value})
    }
    changeTag(e){
        this.setState({tag:e.target.value})
    }
    submitForm(e){
        e.preventDefault()
        this.props.addContact(this.state);
    }
    
	render() {
		return (
			<form className="contact-input" onSubmit={this.submitForm}>
				<input type="text" placeholder="Nama" value={this.state.name} onChange={this.changeName}/>
				<input type="text" placeholder="Tag" value={this.state.tag} onChange={this.changeTag}/>
				<button type="submit">Tambah</button>
			</form>
		);
	}
}

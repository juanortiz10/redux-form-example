import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Home extends Component {
	handleSubmit = formValues => {
		console.log(formValues);
	};
	render() {
		return(
			<form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
				<div>
					<label>Email</label>
					<Field name="email" type="email" component="input"/>
				</div>
				<div>
					<label>Password</label>
					<Field name="password" type="password" component="input"/>
				</div>
				<button type="submit">Login</button>
			</form>
	);
	}
}


export default reduxForm({ form: 'loginForm'})(Home);

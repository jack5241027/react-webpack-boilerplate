import { Component } from 'react'

export var ThemeTest = class extends Component{
	constructor(props, context) {
		super(props, context)
	}

	speak() {
		console.log(this.name + ' makes a noise.');
	}

	render() {
		return (
			<div className={this.props.theme.outer}>
				This is Theme.
			</div>
		);
	}
};

import { Component } from 'react'

//Return 繼承 React.Component 的 Class Component
export var Enhance = ComposedComponent => class extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = { data: null };
	}

    componentDidMount() {
        this.setState({ data: 'This is Enhance Component. Like Mixin' });
    }
    render() {
        return <ComposedComponent {...this.props} data={this.state.data} />;
    }
};

import React, { Component, PropTypes }  from 'react'
import { bindActionCreators }           from 'redux'
import { connect, Provider }            from 'react-redux'
import DevTools                     	from './DevTools'
import Header							from '../components/Header'

import { Enhance }			from '../components/EnhanceTemplate'
import { ThemeTest }			from '../components/ThemeTemplate'
import themeA from './themeA.css'
import themeB from './themeB.css'

class Root extends Component {
	constructor(props, context) {
		super(props, context)
	}
	//getDefaultProps
	static defaultProps = {
	};
	//Type Define
	static propTypes = {
	};

	//getInitialState
	state = {
	}

	//Once
	componentDidMount() {
		// $.ajax({
		//   success: this.onDataReceived
		// });
		// window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount(){
	}

	//skip if no props change
	componentWillReceiveProps(nextProps,nextContext) {
		if (nextProps!== this.props) {
		}
		this.setState({
		});
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
	  return true;
	}

	componentDidUpdate(prevProps,prevState,prevContext) {
	}

	onDataReceived(data) {
		var quote = data.quote;
		if(this.isMounted()){
		  this.setState({
			quotes: quote
		  });
		}
	}

	get devTools () {
		if (process.env.NODE_ENV !== 'production') {
		  return <DevTools/>
		  // return this.state.isMounted && <DevTools/>
		}
	}

	render() {
		var temp = (() => {
			if (!this.props.data) {
				return  <div>Waiting...</div>;
			}else{
				return <div>{this.props.data}</div>;
			}
		})();

		return (
	      <Provider store={this.props.store}>
	        <div>
	          <Header/>
	          {(!this.props.data) && <div>Waiting...</div>}
	          {(this.props.data) && <div>{this.props.data}</div>}
	          <ThemeTest theme={themeA} />
	          <ThemeTest theme={themeB} />
	          {	this.devTools }
	        </div>
	      </Provider>
		)
	}
}

export default connect()(Enhance(Root))

import CSSModules from 'react-css-modules'
import styles from './styles.css'

class Header extends React.Component {
	constructor(props, context) {
		super(props, context)

		//GetInitialState (Better)
        // this.state = {
        // };

        // 在 Constructor 內先綁定 this
        this._method = this._method.bind(this);
	}

	//GetDefaultProps
	static defaultProps = {
	};
	//Type Define
	static propTypes = {
	};

	//GetInitialState (Normal)
	state = {
	}

    componentWillMount(){
        // document.addEventListener('change', this._method);
    }
    componentWillUnmount(){
        // document.removeEventListener('change', this._method);
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

	_method(event){
    }

    _methodAutoBind = (event) => {
        //把方法直接作為一個arrow function的屬性來定義，初始化的時候就繫結好了this指針
    }

	render() {
		return (
			<header>
				<h2 styleName='title'>React & Redux & Webpack Boilerplate</h2>
			</header>
		)
	}
}
export default CSSModules(Header, styles)

import styles from './styles.css'
import React from 'react'

class SearchBar extends React.Component {
    render() {
        return (
          <div className={styles.searchBar}>
            <input className="" placeholder="Search" />
          </div>
        )
    }
}

class Header extends React.Component {
    constructor(props, context) {
        super(props, context)

        // GetInitialState (Better)
        // this.state = {
        // }

        // 在 Constructor 內先綁定 this
        this._method = this._method.bind(this)
    }

    // GetDefaultProps
    static defaultProps = {
    }
    // Type Define
    static propTypes = {
        additionalClass: React.PropTypes.string
    }
    // GetInitialState (Normal)
    state = {
    }

    componentWillMount() {
        // document.addEventListener('change', this._method)
    }
    componentWillUnmount() {
        // document.removeEventListener('change', this._method)
    }

	// Once
    componentDidMount() {
		// $.ajax({
		//   success: this.onDataReceived
		// })
		// window.addEventListener('resize', this.handleResize)
    }

    // skip if no props change
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps !== this.props) {
        }
        this.setState({
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true
    }

    _method(event) {
    }

    _methodAutoBind = (event) => {
        // 把方法直接作為一個arrow function的屬性來定義，初始化的時候就繫結好了this指針
    }

    render() {
        let {additionalClass} = this.props
        return (
          <header className={styles.header} data-role={additionalClass}>
            <div className={styles.header_container}>
              <div className={styles.header_rightContent}>
                <div className={styles.userprofilelink}>
                  <img className={styles.userprofilelink_icon} src="https://s-passets-cache-ak0.pinimg.com/images/user/default_30.png" alt="JackChan" />
                  <span className={styles.userprofilelink_name}>JackChan
                  </span>
                </div>
              </div>
              <div className={styles.header_leftContent}>
                <SearchBar />
              </div>
            </div>
          </header>
        )
    }
}
export default Header

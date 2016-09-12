import React, { PropTypes } from 'react'
import classNames from 'classnames'
import Header from '../../../components/Header/'
import styles from './styles.css'

class Index extends React.Component {
    constructor(props, context) {
        super(props, context)

        // GetInitialState (Better)
        this.state = {
            theme: props.theme
        }
        // 在 Constructor 內先綁定 this
        this._method = this._method.bind(this)
    }

    // GetDefaultProps
    static defaultProps = {
    }
    // Type Define
    static propTypes = {
        theme: PropTypes.string.isRequired
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
        const {theme} = this.state
        return (
          <div className={classNames(theme)}>
            <Header />
            Index
          </div>
        )
    }
}
export default Index

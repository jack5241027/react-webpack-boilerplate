import React, { Component, PropTypes } from 'react'
import { connect, Provider } from 'react-redux'
import DevTools from './DevTools'
import { Router } from 'react-router'
// import { Enhance } from '../components/EnhanceTemplate'
// import { ThemeTest } from '../components/ThemeTemplate'
// import themeA from './themeA.css'
// import themeB from './themeB.css'

class Root extends Component {
    constructor(props, context) {
        super(props, context)
    }
    // getDefaultProps
    static defaultProps = {
    };
    // Type Define
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        routes: PropTypes.element.isRequired
    }

    // getInitialState
    state = {
    }

    // Once
    componentDidMount() {
        // $.ajax({
        //   success: this.onDataReceived
        // });
        // window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
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

    componentDidUpdate(prevProps, prevState, prevContext) {
    }

    onDataReceived(data) {
        var quote = data.quote
        if (this.isMounted()) {
            this.setState({
                quotes: quote
            })
        }
    }

    get devTools() {
        if (process.env.NODE_ENV !== 'production') {
            return <DevTools />
            // return this.state.isMounted && <DevTools/>
        }
    }

    render() {
        let { store, routes, history } = this.props

        return (
          <Provider store={store}>
            <div>
              <Router history={history}>
                {routes}
              </Router>
              { this.devTools }
            </div>
          </Provider>
        )
    }
}

export default connect()(Root)

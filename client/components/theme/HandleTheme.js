import React, { Component } from 'react'
import themeStyles from './theme.css'

export var HandleTheme = ComposedComponent => class extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'Red'
        }
    }

    componentDidMount() {
        // this.setState({ theme: 'default' })
    }

    render() {
        let {theme} = this.state
        return <ComposedComponent theme={`global${theme}`} themeStyles={themeStyles} />
    }
}

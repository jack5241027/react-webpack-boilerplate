import React, { Component } from 'react'

// Return 繼承 React.Component 的 Class Component
export var Enhance = ComposedComponent => class extends Component {
    constructor(props) {
        super(props)
        this.state = { wording: null }
    }

    componentDidMount() {
        this.setState({ wording: 'This is Enhance Component. Like Mixin' })
    }
    render() {
        let {wording} = this.state
        return <ComposedComponent {...this.props} wording={wording} />
    }
}

import React, { Component, PropTypes } from 'react'

export var ThemeTest = class extends Component{
    constructor(props, context) {
        super(props, context)
    }

    // Type Define
    static propTypes = {
        theme: PropTypes.object.isRequired
    }

    speak() {
        console.log(this.name + ' makes a noise.')
    }

    render() {
        let { theme } = this.props
        return (
          <div className={theme.outer}>
                This is Theme.
          </div>
        )
    }
}

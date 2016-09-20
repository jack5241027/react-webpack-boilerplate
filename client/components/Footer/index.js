import styles from './styles.css'
import React from 'react'

class Footer extends React.Component {
    static propTypes = {
        children: React.PropTypes.object.isRequired
    };
    render() {
        let {children} = this.props
        return (
          <footer className={styles.footer}>
              {children}
          </footer>
        )
    }
}
export default Footer

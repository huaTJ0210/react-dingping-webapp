import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import styles from './index.less'

class NavgationBar extends Component {
  render() {
    const { children, history } = this.props
    return (
      <NavBar
        className={styles.navBar}
        onBack={() => {
          history.goBack()
        }}
      >
        {children}
      </NavBar>
    )
  }
}

export default withRouter(NavgationBar)

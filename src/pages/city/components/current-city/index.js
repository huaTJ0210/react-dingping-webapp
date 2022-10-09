import React, { Component } from 'react'
import styles from './index.less'

export default class CurrentCity extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{this.props.title}</h2>
      </div>
    )
  }
}

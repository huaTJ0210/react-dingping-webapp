import React, { Component } from 'react'
import { Rate } from 'antd-mobile'
import { UserCircleOutline } from 'antd-mobile-icons'

import styles from './index.less'

export default class Comment extends Component {
  render() {
    const { username, star, comment } = this.props.comment
    return (
      <div className={styles.container}>
        <div className={styles.user}>
          <UserCircleOutline style={{ fontSize: 18 }} />
          <span>{username}</span>
        </div>
        <Rate readOnly allowHalf value={star} style={{ '--active-color': 'var(--red-color)' }} />
        <p className={styles.comment}>{comment}</p>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import styles from './index.less'

export default class SMSCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 60,
      disable: false,
    }
  }

  onClickHandler() {
    if (typeof this.props.sendSMSCode === 'function') {
      this.props.sendSMSCode() // 触发发送验证码
    }
    this.timer = setInterval(() => {
      this.setState((preState) => {
        const seconds = preState.seconds - 1
        if (seconds === 0) {
          clearInterval(this.timer)
          return { seconds: 60, disable: false }
        } else {
          return { seconds: preState.seconds - 1, disable: true }
        }
      })
    }, 1000)
  }
  render() {
    const { seconds, disable } = this.state
    return (
      <div className={styles.container}>
        <Button
          disabled={disable}
          onClick={() => {
            this.onClickHandler()
          }}
        >
          {seconds === 60 ? '发送验证码' : `${seconds}s`}
        </Button>
      </div>
    )
  }
}

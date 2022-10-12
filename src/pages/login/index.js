import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { userInfoActionCreators } from '@store/userinfo'

import NavgationBar from '@components/nav-bar'
import SMSCode from '@components/sms-code'
import { Form, Input, Button } from 'antd-mobile'

import styles from './index.less'
import { login } from '@services/user'

class Login extends Component {
  login(values) {
    // 发起登录
    login(values).then((res) => {
      // 登录成功后
      localStorage.setItem('x-token', res.token)
      this.props.setToken(res.token)
      this.props.history.push('/')
    })
  }

  // #region -- 表单数据验证函数 --
  checkMobile(_, phone) {
    if (!phone || phone.length === 0) {
      return Promise.reject(new Error('手机号不能为空!'))
    }
    if (/\d{11}/.test(phone)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请输入正确的手机号!'))
  }
  checkSMSCode(_, code) {
    if (code && code.length === 0) {
      return Promise.resolve()
    }
    if (/\d{6}/.test(code)) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('请输入正确的验证码!'))
  }
  // #endregion

  render() {
    return (
      <div className={styles.container}>
        <NavgationBar>登录</NavgationBar>
        <Form
          className={styles.loginForm}
          layout="horizontal"
          footer={
            <Button
              style={{ backgroundColor: 'red', border: 'none' }}
              block
              type="submit"
              color="primary"
              size="large"
            >
              提交
            </Button>
          }
          onFinish={() => {
            this.login()
          }}
        >
          <Form.Item name="phone" label="手机号" rules={[{ validator: this.checkMobile }]}>
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="smsCode"
            label="验证码"
            rules={[{ validator: this.checkSMSCode }]}
            extra={
              <SMSCode
                sendSMSCode={() => {
                  console.log('发送验证码')
                }}
              />
            }
          >
            <Input placeholder="请输入验证码" />
          </Form.Item>
        </Form>
      </div>
    )
  }
}
const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => bindActionCreators(userInfoActionCreators, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login)

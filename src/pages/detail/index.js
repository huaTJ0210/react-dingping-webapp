import React, { Component } from 'react'
import style from './index.less'

import { List } from 'antd-mobile'
import NavigationBar from '@components/nav-bar'
import ShopDetail from '@components/shop-detail'
import Comment from '@components/comment'
import { getShopDetail } from '@services/cms'

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      detail: null,
      comments: [],
    }
  }
  componentDidMount() {
    getShopDetail().then((res) => {
      this.setState({
        detail: res,
        comments: res.comments,
      })
    })
  }
  render() {
    return (
      <div className={style.container}>
        <NavigationBar>商户详情</NavigationBar>
        <ShopDetail detail={this.state.detail} />
        <List header="用户点评">
          {this.state.comments.map((item) => {
            return (
              <List.Item key={item.username}>
                <Comment comment={item} />
              </List.Item>
            )
          })}
        </List>
      </div>
    )
  }
}

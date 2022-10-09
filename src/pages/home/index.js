import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List } from 'antd-mobile'

import styles from './index.less'

import SearchHeader from '@components/search-header'
import ShopItem from '@components/shop-item'
import Catagory from './components/catagory/index'
import Discount from './components/discount/index'

import { getShopList } from '@services/cms'

import { actionCreators } from '@store/userinfo'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shopList: [],
    }
  }

  componentDidMount() {
    getShopList().then((res) => {
      this.setState({
        shopList: res,
      })
    })
  }

  // 导航到地区选择页面
  toDistrictPage() {
    this.props.history.push('/city')
  }
  // 导航到搜索页面
  toSearchPage() {
    this.props.history.push('/search')
  }
  // 导航到登录或者个人页面
  toUserOrLoginPage() {
    this.props.history.push('/user')
  }

  render() {
    return (
      <div>
        {/* 头部导航栏 */}
        <SearchHeader
          title="北京"
          toDistrictPage={() => {
            this.toDistrictPage()
          }}
          toSearchPage={() => {
            this.toSearchPage()
          }}
          toUserOrLoginPage={() => {
            this.toUserOrLoginPage()
          }}
        />
        <List
          style={{
            marginTop: 44,
            '--border-inner': 'none',
          }}
          className={styles.list}
        >
          <List.Item key="home-catagory">
            {/* 分类 */}
            <Catagory />
          </List.Item>
          <List.Item key="home-ad" className={styles['home-ad']}>
            {/* 广告推荐 */}
            <Discount />
          </List.Item>
        </List>
        <List header="猜你喜欢">
          {this.state.shopList.map((item) => {
            return (
              <List.Item key={item.id}>
                <ShopItem {...item} />
              </List.Item>
            )
          })}
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cityName: state.userInfo.cityName,
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch),
})

/*
  actions.updateCity(cityName)
*/

export default connect(mapStateToProps, mapDispatchToProps)(Home)

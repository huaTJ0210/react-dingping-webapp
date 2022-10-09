import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, PullToRefresh, InfiniteScroll } from 'antd-mobile'

import styles from './index.less'

import SearchHeader from '@components/search-header'
import ShopItem from '@components/shop-item'
import Catagory from './components/catagory/index'
import Discount from './components/discount/index'

import { getShopList, getCatagoryList, getDiscountList } from '@services/cms'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shopList: [],
      catagoryList: [],
      discountList: [],
      hasMore: true,
    }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    // 获取分类列表
    getCatagoryList().then((res) => {
      this.setState({ catagoryList: res })
    })
    // 获取优惠列表
    getDiscountList().then((res) => {
      this.setState({
        discountList: res,
      })
    })
    // 获取商店列表
    getShopList().then((res) => {
      this.setState({
        shopList: res,
        hasMore: true,
      })
    })
  }

  loadMoreShop() {
    getShopList().then((res) => {
      this.setState(
        (preState) => ({
          shopList: preState.shopList.concat(res),
        }),
        () => {
          // 模拟结束加载更多
          if (this.state.shopList.length > 10) {
            this.setState({
              hasMore: false,
            })
          }
        },
      )
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
          title={this.props.cityName}
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
        <PullToRefresh
          onRefresh={() => {
            this.loadData()
          }}
        >
          <List
            style={{
              '--border-inner': 'none',
            }}
            className={styles.list}
          >
            <List.Item key="home-catagory">
              {/* 分类 */}
              <Catagory catagoryList={this.state.catagoryList} />
            </List.Item>
            <List.Item key="home-ad" className={styles['home-ad']}>
              {/* 广告推荐 */}
              <Discount discountList={this.state.discountList} />
            </List.Item>
          </List>
          <List header="猜你喜欢">
            {this.state.shopList.map((item) => {
              return (
                <List.Item key={item.id + Math.floor(Math.random() * 100000)}>
                  <ShopItem {...item} />
                </List.Item>
              )
            })}
          </List>
        </PullToRefresh>
        <InfiniteScroll
          loadMore={() => {
            this.loadMoreShop()
          }}
          hasMore={this.state.hasMore}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cityName: state.userInfo.cityName,
})

export default connect(mapStateToProps)(Home)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { List, PullToRefresh, InfiniteScroll } from 'antd-mobile'

import styles from './index.less'

import SearchHeader from '@components/search-header'
import ShopItem from '@components/shop-item'
import Catagory from './components/catagory'
import Discount from './components/discount'

import { cmsActionCreators } from '@store/cms'

import { getShopList } from '@services/cms'

class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      shopList: [],
      hasMore: true,
    }
    this.currentPage = 0
    this.loadData = this.loadData.bind(this)
    this.loadMoreShop = this.loadMoreShop.bind(this)
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    const { getCatagoryList, getDiscountList } = this.props
    // 获取分类列表
    getCatagoryList()
    // 获取优惠列表
    getDiscountList()
    // 获取商店列表
    this.currentPage = 0
    getShopList({ currentPage: 0 }).then((res) => {
      this.setState({
        shopList: res,
        hasMore: true,
      })
    })
  }

  loadMoreShop() {
    getShopList({ currentPage: ++this.currentPage }).then((res) => {
      // 当res返回为空数组则代表没有更多的数据了
      if (res.length === 0) {
        this.setState({
          hasMore: false,
        })
      } else {
        this.setState((preState) => ({
          shopList: preState.shopList.concat(res),
        }))
      }
    })
  }

  render() {
    const { history } = this.props
    return (
      <div>
        {/* 头部导航栏 */}
        <SearchHeader
          title={this.props.cityName}
          push={(path) => {
            this.props.history.push(path)
          }}
        />
        <PullToRefresh onRefresh={this.loadData}>
          <List
            style={{
              '--border-inner': 'none',
            }}
            className={styles.list}
          >
            <List.Item key="home-catagory">
              {/* 分类 */}
              <Catagory catagoryList={this.props.catagoryList} />
            </List.Item>
            <List.Item key="home-ad" className={styles['home-ad']}>
              {/* 广告推荐 */}
              <Discount discountList={this.props.discountList} />
            </List.Item>
          </List>
          <List header="猜你喜欢">
            {this.state.shopList.map((item) => {
              return (
                <List.Item
                  key={item.id}
                  onClick={() => {
                    history.push(`/detail/${item.id}`)
                  }}
                  arrow={false}
                >
                  <ShopItem {...item} />
                </List.Item>
              )
            })}
          </List>
        </PullToRefresh>
        <InfiniteScroll loadMore={this.loadMoreShop} hasMore={this.state.hasMore} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cityName: state.userInfo.cityName,
  catagoryList: state.cms.catagoryList,
  discountList: state.cms.discountList,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(cmsActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

import React, { Component } from 'react'
import style from './index'

import { List, PullToRefresh, InfiniteScroll } from 'antd-mobile'
import NavgationBar from '@components/nav-bar'
import SearchInput from '@components/search-input'
import ShopItem from '@components/shop-item'
import { getShopList } from '@services/cms'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
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
      <div className={style.container}>
        <NavgationBar>
          <SearchInput
            searchInputHandler={(keyword) => {
              this.setState({ keyword })
            }}
          />
        </NavgationBar>
        <PullToRefresh onRefresh={this.loadData}>
          <List>
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

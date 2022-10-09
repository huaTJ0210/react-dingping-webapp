/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import style from './index.less'
import font from '@fonts/font.less'

import PropTypes from 'prop-types'

export default class SearchHeader extends Component {
  render() {
    return (
      <div className={style['search-header-container']}>
        <span
          className={style['search-header-left']}
          onClick={() => {
            this.props.toDistrictPage()
          }}
        >
          {this.props.title}
          <i className={font['icon-angle-down']} />
        </span>
        <div
          className={style['search-header-middle']}
          onClick={() => {
            this.props.toSearchPage()
          }}
        >
          <i className={font['icon-search']} />
          <input placeholder="请输入要查询的内容" disabled />
        </div>
        <div
          className={style['search-header-right']}
          onClick={() => {
            this.props.toUserOrLoginPage()
          }}
        >
          <i className={font['icon-user']} />
        </div>
      </div>
    )
  }
}

SearchHeader.propTypes = {
  title: PropTypes.string.isRequired,
  toUserOrLoginPage: PropTypes.func,
  toDistrictPage: PropTypes.func,
  toSearchPage: PropTypes.func,
}

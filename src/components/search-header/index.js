/* eslint-disable react/static-property-placement */
import React, { Component } from 'react'
import style from './index.less'
import font from '@fonts/font.less'
import SearchInput from '../search-input'

import PropTypes from 'prop-types'

export default class SearchHeader extends Component {
  render() {
    const { push, title } = this.props
    return (
      <div className={style['search-header-container']}>
        <span
          className={style['search-header-left']}
          onClick={() => {
            push('/city')
          }}
        >
          {title}
          <i className={font['icon-angle-down']} />
        </span>
        <SearchInput
          style={{ flex: 1 }}
          searchInputHandler={(value) => {
            push(`/search/${value}`)
          }}
        />
        <div
          className={style['search-header-right']}
          onClick={() => {
            push('/user')
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

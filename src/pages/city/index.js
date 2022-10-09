import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '@store/userinfo'
import { NavBar } from 'antd-mobile'
import styles from './index.less'
import CurrentCity from './components/current-city'
import CityList from './components/city-list'

class City extends Component {
  back() {
    this.props.history.go(-1)
  }
  changeCity(cityName) {
    this.props.updateCity(cityName)
  }
  render() {
    const { cityName } = this.props.userInfo
    return (
      <div className={styles.container}>
        <NavBar
          className={styles.navBar}
          onBack={() => {
            this.back()
          }}
        >
          选择城市
        </NavBar>
        <CurrentCity title={cityName} />
        <CityList
          changeCity={(cityName) => {
            this.changeCity(cityName)
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.userInfo,
})
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(City)

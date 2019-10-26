import React from 'react'
import { connect } from 'react-redux'

const Account = props => {
    return <>
        <h1>Account</h1>
        <div>UserName: {props.userInfo.userName}</div>
        <div>Password: {props.userInfo.password}</div>
    </>
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.login.user
    }
}

export default connect(mapStateToProps, null)(Account);
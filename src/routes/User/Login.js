import React, { Component } from 'react';
import { connect } from 'dva';
import { Alert } from 'antd';
import Login from '../../components/Login';
import styles from './Login.less';

const { UserName, Password, Submit } = Login;

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
export default class LoginPage extends Component {
  handleSubmit = (err, values) => {
    if (!err) {
      this.props.dispatch({
        type: 'login/login',
        payload: {
          ...values,
        },
      });
    }
  }

  renderMessage = (content) => {
    return (
      <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon closable />
    );
  }

  render() {
    const { login, submitting } = this.props;
    return (
      <div className={styles.main}>
        <Login
          onSubmit={this.handleSubmit}
        >
          <h1>登录</h1>
          {
            login.status === 401 &&
            this.renderMessage('账户或密码错误')
          }
          <UserName name="username" placeholder="请输入大声说英语账号" defaultValue="admin" />
          <Password name="password" placeholder="请输入密码" defaultValue="$qooco$" />
          <Submit loading={submitting}>登录</Submit>
        </Login>
      </div>
    );
  }
}
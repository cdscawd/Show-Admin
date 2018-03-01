import React, {Component} from "react";
var qs = require('qs');

import {Container, Row, Col, CardGroup, Card, CardBlock, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";
import axios from './../../config/http';
// import $ from 'jquery';

class Login extends Component {
  constructor(){  
    super();  
  }

  componentDidMount() {
    
  }

  handleClick(e) {
    // var username = React.findDOM(this.refs.username).value;
    // var password = React.findDOM(this.refs.password).value;

    let username = 'admin'
    let password = '$qooco$'
    let data = JSON.stringify({
      username: username,
      password: password
    })
    axios.post(`/login`, data)
    .then((res) => {
      if (res.statusText === 'OK' && res.status === 200) {
        console.log(res.headers.authorization)
        localStorage.setItem('authorization', res.headers.authorization)
        location.replace('/#/list_video')
      }
    })
    .catch((error) => {
      console.log(error);
    });

  }

  render() {
    const handleClick = this.handleClick;

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <CardGroup className="mb-0">
              <Card className="p-4">
                <CardBlock className="card-body">
                  <h5>巧口秀小程序后台登录</h5>
                  <p className="text-muted">提示：忘记密码请联系巧口工作人员解决</p>
                  <InputGroup className="mb-3">
                    <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                    <Input type="text" ref='username' defaultValue="admin" placeholder="账号"/>
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                    <Input type="password" ref='password' defaultValue="$qooco$" placeholder="密码"/>
                  </InputGroup>
                  <Row>
                    <Button onClick={handleClick.bind(this)} color="primary" block>登陆</Button>
                  </Row>
                </CardBlock>
              </Card>
            </CardGroup>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;

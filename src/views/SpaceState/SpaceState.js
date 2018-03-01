
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBlock,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";


class SpaceState extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
              <i className="fa fa-align-justify"></i> 空间动态
              </CardHeader>
              <CardBlock className="card-body">
                <Table responsive>
                  <thead>
                  <tr>
                    <th>校区ID</th>
                    <th>校区名称</th>
                    <th>更新账户</th>
                    <th>最新更新时间</th>
                    <th>查看</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>北京巧口帝景英语校区</td>
                    <td>巧口帝景校区Apple</td>
                    <td>2017-11-20  18:53:37</td>
                    <td>
                      <NavLink to='/school_space' activeClassName="active">
                        进入空间
                      </NavLink>
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem>
                    <PaginationLink previous href="#"></PaginationLink>
                  </PaginationItem>
                  <PaginationItem active>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink next href="#"></PaginationLink>
                  </PaginationItem>
                </Pagination>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SpaceState;

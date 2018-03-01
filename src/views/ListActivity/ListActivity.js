import React, { Component } from 'react';
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

class ListActivity extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
              <i className="fa fa-align-justify"></i> 活动动态
              </CardHeader>
              <CardBlock className="card-body">
                <Table responsive>
                  <thead>
                  <tr>
                    <th>发布人</th>
                    <th>活动名称</th>
                    <th>权限</th>
                    <th>发布时间</th>
                    <th>开始时间</th>
                    <th>结束时间</th>
                    <th>关注数</th>
                    <th>参与数</th>
                    <th>状态</th>
                    <th>编辑</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
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

export default ListActivity;

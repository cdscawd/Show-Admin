
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
import axios from './../../config/http';
import moment from 'moment';


class ListVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: [],
      totalPages: 0,
      totalCount: 1,
    };
  }

  queryVideoList(page) {
    let that = this
    axios.get(`/video-manage/query-all/${page}`)
    .then( (res) => {
      console.log(res);
      that.setState({
        videoList: res.data.data.videos,
        totalPages: res.data.data.totalPages,
        totalCount: res.data.data.totalCount,
      })
      console.log(that.state.videoList)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    console.log(this.state.videoList)
    this.queryVideoList(1)
  }


  render() {
    let videoList = this.state.videoList
    let totalPages = this.state.totalPages
    let totalCount = this.state.totalCount

    return (
      <div className="animated fadeIn table-list">
        <Row>
          <Col>
            <Card>
              <CardHeader>
              <i className="fa fa-align-justify"></i> 视频动态
              </CardHeader>
              <CardBlock className="card-body">
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>视频</th>
                    <th>发布人</th>
                    <th>头像</th>
                    <th>账户类型</th>
                    <th>标题</th>
                    <th>发布时间</th>
                    <th>点赞数</th>
                    <th>评论数</th>
                    <th>分享数</th>
                    <th>置顶</th>
                    <th>操作</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      videoList.length != 0 && videoList.map( (item) => {
                        return (
                          <tr key={item.id}>
                            <td title={ `播放 ${item.wxUserInfo.nickName} 的视频` }><i className="fa fa-youtube-play fa-lg"></i></td>
                            <td>{item.wxUserInfo.nickName}</td>
                            <td><img className="img-avatar video-avatar" src={item.wxUserInfo.avatarUrl} alt=""/></td>
                            <td>{item.vtype == 'U' ? '学生' : '教师'}</td>
                            <td title={item.title}>{item.title}</td>
                            <td>{ moment(item.uploadTime).format("YYYY-MM-DD HH:mm:ss")}</td>
                            <td>{item.thumbupCount}</td>
                            <td>{item.commentCount}</td>
                            <td>{item.shareCount || 0}</td>
                            <td title={ `置顶 ${item.wxUserInfo.nickName} 的视频` }><i className={`fa fa-lg ${ item.stick ? 'fa-star' : 'fa-star-o' } `}></i></td>
                            <td title={ `删除 ${item.wxUserInfo.nickName} 的视频` }><i className="fa fa-trash-o fa-lg"></i> 删除</td>
                          </tr>
                        )
                      })
                    }
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
                    <PaginationLink next></PaginationLink>
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

export default ListVideo;

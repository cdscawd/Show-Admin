
import React, { Component } from 'react';
import axios from './../../config/http';
import moment from 'moment';

import {
  Card,
  CardHeader,
  CardBlock,
  Table,
} from "reactstrap";
import { Pagination, Avatar, Modal, Button } from 'antd';
const confirm = Modal.confirm;

class ListVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: [],
      currentPage: 1,
      totalPages: 0,
      totalCount: 0,

      // topStickModalVisible: false,
    };
  }

  // 列表请求
  queryVideoList(currentPage) {
    let that = this
    axios.get(`/video-manage/query-all/${currentPage}`)
    .then( (res) => {
      that.setState({
        videoList: res.data.data.videos,
        currentPage: currentPage,
        totalPages: res.data.data.totalPages,
        totalCount: res.data.data.totalCount,
      })
      console.log('state::')
      console.log(that.state)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // 默认加载
  componentDidMount() {
    console.log(this.state.videoList)
    let currentPage = this.state.currentPage
    this.queryVideoList(currentPage)
  }

  // 分页
  paginationOnChange(currentPage) {
    this.queryVideoList(currentPage)
  }

  // 置顶 
  topHandleClick(index) {
    let videoList = this.state.videoList
    let stick = videoList[index].stick
    let nickName = videoList[index].wxUserInfo.nickName
    console.log(stick) 
    this.showConfirm(stick, nickName)

  }


  showConfirm(stick, nickName) {
    confirm({
      title: `请确认你是否要置顶 ${nickName} 的视频`,
      content: `置顶发布人 ${nickName} 的视频？`,
      onOk() {
        console.log('置顶');
      },
      onCancel() {
        console.log('取消置顶');
      },
    });
  }

  render() {
    let videoList = this.state.videoList
    let currentPage = this.state.currentPage
    let totalPages = this.state.totalPages
    let totalCount = this.state.totalCount

    const paginationOnChange = this.paginationOnChange;


    return (
      <div className="animated fadeIn table-list">
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
                  videoList.length != 0 && videoList.map( (item, index) => {
                    return (
                      <tr key={item.id}>
                        <td title={ `播放 ${item.wxUserInfo.nickName} 的视频` }><i className="fa fa-youtube-play fa-lg"></i></td>
                        <td>{item.wxUserInfo.nickName}</td>
                        <td>
                          {/* <img className="img-avatar video-avatar" src={item.wxUserInfo.avatarUrl} alt=""/> */}
                          <Avatar src={item.wxUserInfo.avatarUrl} />
                        </td>
                        <td>{item.vtype == 'U' ? '学生' : '教师'}</td>
                        <td title={item.title}>{item.title}</td>
                        <td>{ moment(item.uploadTime).format("YYYY-MM-DD HH:mm:ss")}</td>
                        <td>{item.thumbupCount}</td>
                        <td>{item.commentCount}</td>
                        <td>{item.shareCount || 0}</td>
                        <td title={ `置顶 ${item.wxUserInfo.nickName} 的视频` } data-video-index={index} onClick={(e) => {this.topHandleClick(index)}}>
                          <i className={`fa fa-lg ${ item.stick ? 'fa-star' : 'fa-star-o' } `}></i>
                        </td>
                        <td title={ `删除 ${item.wxUserInfo.nickName} 的视频` } data-video-index={index}><i className="fa fa-trash-o fa-lg"></i> 删除</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
            <Pagination current={currentPage} pageSize={16} total={totalCount}  onChange={paginationOnChange.bind(this)}/>
          </CardBlock>
        </Card>

        {/* <Modal
          title="Basic Modal"
          visible={this.state.topStickModalVisible}
          onOk={this.topStickHandleOk.bind(this)}
          onCancel={this.topStickHandleCancel.bind(this)}
        >
          <p>Some contents...</p>
        </Modal> */}



      </div>
    )
  }
}

export default ListVideo;

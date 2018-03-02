
import React, { Component } from 'react';
import axios from './../../config/http';
import moment from 'moment';

import {
  Card,
  CardHeader,
  CardBlock,
  Table,
  Button,

} from "reactstrap";
import { Pagination, Avatar, Modal, message, Checkbox } from 'antd';
const confirm = Modal.confirm;
message.config({
  duration: 1.5,
});

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
      message.error('网络出错，请重试');
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
    let id = videoList[index].id
    console.log(stick) 
    if (stick) {
      // 取消置顶
      this.topStickCancel(index, nickName, id)
    } else {
      // 置顶
      this.topStickOk(index, nickName, id)
    }
  }

  // 取消置顶
  topStickCancel(index, nickName, id) {
    let that = this
    let videoList = this.state.videoList 
    confirm({
      title: `提示`,
      content: `取消置顶发布人 ${nickName} 的视频？`,
      cancelText: '取消',
      okText: '确定',
      onOk() {
        axios.post(`/video-manage/unstick/${id}`)
        .then( (res) => {
          if (res.status == 200) {
            videoList[index].stick = false
            that.setState({
              videoList: videoList
            })
            message.success('取消置顶成功');
          }
        })
        .catch( (error) => {
          message.error('网络出错，请重试');
        });
      },
    });
  }

  // 置顶
  topStickOk(index, nickName, id) {
    let that = this
    let videoList = this.state.videoList 
    confirm({
      title: `提示`,
      content: `置顶发布人 ${nickName} 的视频？`,
      cancelText: '取消',
      okText: '确定',
      onOk() {
        axios.post(`/video-manage/stick/${id}`)
        .then( (res) => {
          if (res.status == 200) {
            videoList[index].stick = true
            that.setState({
              videoList: videoList
            })
            message.success('置顶成功');
          }
        })
        .catch( (error) => {
          message.error('网络出错，请重试');
        });
      },
    });
  }

  // 删除视频
  deleteVidoe(index) {
    let that = this
    let videoList = this.state.videoList
    let nickName = videoList[index].wxUserInfo.nickName
    var params = new URLSearchParams()
    params.append('id', videoList[index].id)

    confirm({
      title: `提示`,
      content: `删除发布人 ${nickName} 的视频？`,
      cancelText: '取消',
      okText: '确定',
      onOk() {
        axios.post(`/video-manage/delete`, params)
        .then( (res) => {
          if (res.status == 200) {
            videoList.splice(index, 1)
            that.setState({
              videoList: videoList
            })
            message.success('删除成功');
          }
        })
        .catch( (error) => {
          message.error('网络出错，请重试');
        });
      },
    });
  }

  checkboxOnChange(index) {
    console.log(index)
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

            <Button outline color="secondary">批量删除</Button>

            <Table hover size="sm">
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
                        <td title={ `播放 ${item.wxUserInfo.nickName} 的视频` }>
                          <Checkbox
                            value={false}
                            onChange={ (e) => {this.checkboxOnChange(index)} }
                          />
                          <i className="fa fa-youtube-play fa-lg"></i>
                        </td>
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
                        <td title={ `置顶 ${item.wxUserInfo.nickName} 的视频` } onClick={(e) => {this.topHandleClick(index)}}>
                          <i className={`fa fa-lg ${ item.stick ? 'fa-star' : 'fa-star-o' } `}></i>
                        </td>
                        <td title={ `删除 ${item.wxUserInfo.nickName} 的视频` } onClick={(e) => {this.deleteVidoe(index)}}><i className="fa fa-trash-o fa-lg"></i> 删除</td>
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

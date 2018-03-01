import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.get['Authorization'] = localStorage.getItem('authorization');
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'https://open.api.qooco.com/weixin-app-api/wxshowbb';

//POST传参序列化
// axios.interceptors.request.use((config) => {
//   if(config.method  === 'get'){
//     config.headers.Authorization = localStorage.getItem('authorization')
//   }
//   return config;
// },(error) =>{
//   alert(error)
// });

//code状态码200判断
// axios.interceptors.response.use((res) =>{
//   if(res.data.code != '200'){
//     alert(error)
//   }
//   return res;
// }, (error) => {
//     alert(error)
// });

export default axios;
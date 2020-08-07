import axios from '../http.js'

const ueserInfo = {
  // 用户数据
  async userInfo(id) {
    var data = JSON.stringify({
      user_id: id
    })
    return await axios
      .post('/user/userinfolist/', data)
  }
}
export default ueserInfo

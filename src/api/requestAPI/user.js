import axios from '../http.js'

const ueserInfo = {
  // 用户数据
  async userInfo(id) {
    var data = JSON.stringify({
      user_id: id
    })
    return await axios
      .post('/user/userinfolist/', data)
  },
  async updataUserInfo(id, introduce, userpwd, nickname, sex, birth) {
    var data = JSON.stringify({
      user_id: id,
      introduce: introduce,
      user_pwd: userpwd,
      nick_name: nickname,
      sex: sex,
      birth: birth
    })
    return await axios.post('/user/edituserinfo/', data)
  }
}
export default ueserInfo

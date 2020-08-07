import axios from '../http.js'

const register = {
  // 首页banner
  async registerAction(name, pwd) {
    var data = JSON.stringify({
      login_name: name,
      user_pwd: pwd,
      nick_name: name
    })
    return await axios
      .post('/user/usersignup/', data)
  }
}
export default register

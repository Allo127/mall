import axios from '../http.js'

const login = {
  // 首页banner
  async loginAction(name, pwd) {
    var data = JSON.stringify({
      login_name: name,
      user_pwd: pwd
    })
    return await axios
      .post('/user/userlogin/', data)
  }
}
export default login

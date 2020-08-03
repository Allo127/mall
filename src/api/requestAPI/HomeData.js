import axios from '../http.js'

const homeData = {
  // 首页banner
  async banner() {
    return await axios
      .get('books/banner')
  }
  // async getGridInfo(){
  //   return await axios.get('books/banner/gird')
  // }
}
export default homeData

<template>
  <div class="set">

    <van-nav-bar class="cart-navbar" title="个人资料" left-arrow border sticky @click-left="onClickLeft">
      <template slot="left">
        <van-icon name="arrow-left" size=".48rem" color="#000" />
      </template>
    </van-nav-bar>
    <!-- 功能列表 -->
    <div class="list">
      <!--      <van-cell size="large" is-link :show="!showNameEdit">
        <div slot="title">
          昵称
        </div>
       <div slot="default" @click="showNameEdit = true"></div>
      </van-cell> -->
      <van-cell-group>
        <van-field v-model="userName1" label="昵称" input-align="right" placeholder="请输入签名" />
      </van-cell-group>
      <van-cell size="large" is-link @click="() => {this.showSexEdit = true}">
        <div slot="title">
          性别
        </div>
        <div slot="default">{{userSex1}}</div>
      </van-cell>
      <van-cell-group>
        <van-field v-model="userIntroduce1" label="签名" input-align="right" placeholder="请输入签名" />
      </van-cell-group>
    </div>
    <van-overlay :show="showSexEdit">
      <van-picker class="flowButton" title="" show-toolbar :columns="columnsSex" @confirm="onConfirmSex" @cancel="showSexEdit = false" />
    </van-overlay>
  </div>
</template>
<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'
  export default {
    mounted() {},
    data() {
      return {
        userName1: localStorage.getItem('userName'),
        userSex1: localStorage.getItem('userSex') || '',
        userBirthday1: localStorage.getItem('userBirthday') || '',
        userIntroduce1: localStorage.getItem("userIntroduce") || '',
        showSexEdit: false,
        columnsSex: ['男', '女'],
        newschecked: true
      }
    },
    computed: {
      ...mapState(['userName', 'userSex', 'userBirthday', 'userIntroduce', 'userId', 'userPwd'])
    },
    methods: {
      ...mapMutations(['LOGIN_OUT','SET_USER_ACCOUNT','SET_USER_NAME','SET_USER_BRITHDAY','SET_USER_SEX','SET_USER_INTRODUCE','setuserPwd']),
      //修改性别
      onConfirmSex(value, index) {
        this.userSex1 = value
        this.showSexEdit = false
      },
      //修改生日
      formatDate(date) {
        return `${date.getMonth() + 1}/${date.getDate()}`
      },
      onConfirmBirthday(userBirthday) {
        this.showBirthdayEdit = false
        this.userBirthday1 = this.formatDate(userBirthday)
      },
      //顶部导航返回上一页
      onClickLeft() {
        this.$router.go(-1)
      },
      // 开启信息推送或者关闭
      changNews() {
        if (this.newschecked) {
          this.$toast("已开启信息推送")
        } else {
          this.$toast("已关闭信息推送")
        }
      }
    },
    beforeRouteLeave(to, from, next) {
      this.$api.user.updataUserInfo(this.userId, this.userIntroduce, this.userPwd, this.userName, this.userSex,
        this.userBirthday).then((data) => {
        console.log(data)
        this.$api.user.userInfo(this.userId).then((data) => {
          // console.log(data.data[0].user_id)
          var info = data.data[0]
          this.SET_USER_ACCOUNT(info.login_name)
          this.SET_USER_NAME(info.nick_name)
          this.SET_USER_BRITHDAY(info.birth)
          this.SET_USER_SEX(info.sex)
          this.SET_USER_INTRODUCE(info.introduce)
          this.setuserPwd(info.user_pwd)
          console.log(data)
        })
      })
      this.$toast('修改成功')
      next()
    }
  }
</script>
<style lang="scss" scoped>
  .set {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #fff;

    .title {
      color: #666;
    }

    .flowButton {
      position: fixed;
      bottom: 0;
      width: 100%;
    }

    .quit-login {
      padding: 20px;
    }
  }
</style>

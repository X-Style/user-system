<template>
  <div class="login-main">
    <div class="login-nav">
      <ul class="login-nav-ul">
        <li class="on"><a>官方管理平台</a></li>
        <li><a>客户管理平台</a></li>
        <li><a>教师端</a></li>
        <li><a>学生端</a></li>
      </ul>
    </div>
    <div class="login-box">
      <h2 class="login-tit-h2">欢迎登录</h2>
      <h3 class="login-tit-h3">官方管理平台</h3>
      <div class="login-form">
        <label for=""><Icon type="md-person" size="20"/>用户名</label>
        <Input v-model="username" size="large" placeholder="请输入您的用户名" />
        <label for=""><Icon type="ios-lock" size="20" />密&nbsp;&nbsp;码</label>
        <Input v-model="password" size="large" placeholder="请输入您的密码" />
        <Button type="primary" shape="circle" size="large" long>登录</Button>
      </div>
      <p class="login-info">如果您是初次登录，请从管理员处获取用户名与初始密码。密码丢失或被盗请联系管理员进行重置。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginMain',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style>
.login-main{
  width: 68%;
  height: 100vh;
  float: left;
}
.login-nav{
  width: 100%;
  height: 58px;
  border-bottom: 1px solid #e5e2e2;
}
.login-nav-ul{
  float: right;
  padding-right: 20px;
}
.login-nav-ul li{
  float: left;
  height: 58px;
  line-height: 58px;
  padding: 0 20px;
  font-size: 14px;
}
.login-nav-ul li a{
  color: #808080;
}
.login-nav-ul li.on a , .login-nav-ul li a:hover {
  color: #2d8cf0;
}
.login-tit-h2{
  text-align: center;
  font-size: 26px;
  color: #333;
  padding: 80px 0;
  letter-spacing: 10px;
  position: relative;
}
.login-tit-h2::after{
  content: '';
  display: block;
  width: 110px;
  height: 2px;
  background-color: #2d8cf0;
  position: absolute;
  left: 50%;
  top: 116px;
  margin-left: -55px;
}
.login-tit-h3{
  text-align: center;
  color: #2d8cf0;
  font-size: 16px;
  letter-spacing: 5px;
}
.login-form{
  width: 46%;
  margin: 50px auto;
}
.login-form label{
  display: block;
  font-size: 14px;
  margin-top: 20px;
  padding-bottom: 5px;
}
.login-form label i{
  margin: -4px 5px 0 0 ;
}
.login-form button{
  margin-top: 20px;
}
.login-info{
  text-align: center;
  color: #ccc;
  font-size: 14px;
}
</style>

<template>
  <div class="login_body">
    <div>
      <input class="login_text" placeHolder="账户名/手机号/Email" type="text" />
    </div>
    <div>
      <input class="login_text" placeHolder="请输入您的密码" type="password" />
    </div>
    <div class="login_btn">
      <input type="submit" value="登录" />
    </div>
    <div class="login_link">
      <a href="#">立即注册</a>
      <a href="#">找回密码</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MineLogin"
};
</script>

<style scoped>
#content .login_body {
  width: 100%;
}

.login_body .login_text {
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
  text-indent: 10px;
  border: none;
  border-bottom: 1px #cccccc solid;
  outline: none;
}

.login_body .login_btn {
  height: 50px;
  margin: 10px;
}

.login_body .login_btn input {
  font-size: 20px;
  display: block;
  width: 100%;
  height: 100%;
  color: white;
  border: none;
  border-radius: 3px;
  background: #e54847;
}

.login_body .login_link {
  display: flex;
  justify-content: space-between;
}

.login_body .login_link a {
  font-size: 12px;
  margin: 0 5px;
  text-decoration: none;
  color: #e54847;
}
</style>

<template>
  <div id="login">
      <div>
        <div>
            <input type="text" v-model="username">
        </div>
        <div>
            <input type="password" v-model="pwd">
        </div>
          <button @click="login_btn">登陆</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username:'',
      pwd:''
    };
  },
  methods: {
    login_btn() {
      if(this.username !="" && this.pwd !=''){
        this.$router.push('/index')
      }
    }
  },
  created() {},
  template: {}
};
</script>

<style>
</style>

<template>
  <div>
    <h1>测试</h1>
    <div id="article">
        <div id="articleHead">

      <span id="title">主题:</span>
      <input id="titleInput" placeholder="#请输入主题#"/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
input {
    border-radius: 0;
    border-width: 1px;
}

#title {
    margin-top: 5px;
    font-size: 20px;
}

#articleHead {
    background-color: bisque;
    height: 30px;
    
}

#titleInput {
    margin-top: 1px;
    width: 60%;
    height: 24px;
    font: 1.5em sans-serif;
}
</style>

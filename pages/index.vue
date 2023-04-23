<template>
  <a-layout class="layout-style center">
    <a-layout-content class="layout-content-style center">
      <nx-form />
      <img src="/favicon.svg" class="logo" />
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      E5 refresh token generator ©2023 created by ARCTURUS
    </a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout-style {
  min-height: 100vh;
}

.layout-content-style {
  flex: 1;
  margin: 3em 3em 0;
  padding: 20px 60px 10px 10px;
  border-radius: 1em;
  background-color: #fff;
  position: relative;
  overflow: hidden;
  width: 650px;
}

.logo {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 5em;
  height: 5em;
  transform: rotate(45deg) translate(20%, 0%);
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>

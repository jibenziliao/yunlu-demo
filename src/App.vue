<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
@import './styles/common';
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .1s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}
</style>

<template>
  <headerComponent></headerComponent>
  <SliderComponent></SliderComponent>
  <div class="center">
    <LastArticles></LastArticles>
    <SidebarComponent></SidebarComponent>
    <div class="clearfix"></div>
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import SliderComponent from './components/SliderComponent.vue'
import SidebarComponent from './components/SidebarComponent.vue'
import LastArticles from './components/LastArticles.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    LastArticles,
    FooterComponent
}
}
</script>

<style>
@import './assets/css/styles.css';
</style>

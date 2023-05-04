<template>
  <v-app>
    <Navbar 
    v-if="!$route.meta.hideNavbar"
    />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import  Navbar   from './components/Navbar/Navbar.vue'

export default {
  name: 'App',
  components:{
    Navbar
  },

  data: () => ({
    //
  }),


}
</script>

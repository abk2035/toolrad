<template>
 <nav>
    <v-app-bar flat app color="#121212" height="60">
        <v-app-bar-nav-icon  @click= "drawer = !drawer" color="grey"   v-if="mdAndDown"></v-app-bar-nav-icon >
        <div class="d-flex flex-row  align-center mx-4">
             <img src="/logo_toolrad.png" height="40" width="40" alt="logo"> 
            <span class="ml-3 font-weight-bold text-h6 text-white">
              Tool Rad <sup>3</sup>
            </span>
        </div>
        <div class="d-flex field-wrapper">
            <v-text-field placeholder="search..."
            bg-color="primary" 
            class=" vinput " 
            variant="solo"
            append-inner-icon="mdi-magnify"
            color="white"></v-text-field>
        </div>
        <v-spacer></v-spacer>
         <UserNotifcation/>
         <UserMessage/>
         <Userprofile/>

    
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" 
     class="bg-background h-screen borderme"     
     >      
        <v-list>
            <v-list-item  color="red"
                v-for="link in links"
                router :to="link.route"
               :key="link.text"
               >
               <v-icon  start>{{ link.icon }}</v-icon>
               <span color="white" class="ml-5">{{ link.text }}</span>
            </v-list-item>
        </v-list>     
     </v-navigation-drawer>
 </nav>

</template>
<script>
import { ref  } from 'vue';
import { useDisplay } from 'vuetify';
import Userprofile from './UserProfil.vue'
import UserMessage from './UserMessage.vue';
import UserNotifcation from './UserNotifcation.vue';

export default{
    name:'nav-bar',
    components:{
        Userprofile,
        UserMessage,
        UserNotifcation
    },
    setup(){

        const {lgAndUp, mdAndDown} = useDisplay();

        const drawer = ref(lgAndUp.value);

        const links = ref([
        { icon: 'mdi-clock-time-three', text: 'recents project', route: '/' },
        { icon: 'mdi-account-multiple', text: 'Team', route: '/collaborator' },
      ]);

      return { links, lgAndUp,mdAndDown,drawer }
        
    },


}
</script>
<style >
.v-navigation-drawer.borderme{
    border-right: solid grey 1px ;
}
/* textfield for search */
.field-wrapper{
    width: 310px;
    height: 40px;
  }
.vinput .v-input__control{
    width: 300px;
    height: 40px;
  }
.vinput
.v-input__control
.v-field {
    border-radius: 40px !important;
    border: 1.5px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

.v-field__append-inner{
    padding: 0;
    color: white;
}

</style>
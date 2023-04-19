<script setup>



 const notifications = [
    {icone: 'mdi-bell' ,color:'yellow', date:'December 12, 2019',title:'Ih here i wondered if lofded i have photo '},
    {icone: 'mdi-alert' ,color:'yellow' ,date:'December 7, 2019' ,title:'Ih here i wondered if lofded i have photo '},
    {icone: 'mdi-alert' ,color:'yellow',date:'December 2, 2019'  ,title:'Ih here i wondered if lofded i have photo lorem sdsdl ffs lotresa sdf '}
 
 ]


</script>
<template>
   
    <v-btn class="text-none" stacked >
      <v-badge content="3+" color="error">
        <v-icon color="white">mdi-bell</v-icon>
            <v-menu
                activator="parent"
                width="300"
                location="bottom end"
                offset="14px"
            >
                
                <v-list class="pa-0 text-wrapper" lines="one">
                    <v-card color="primary" class="rounded-0 d-flex align-center pa-2" height="40" >
                      ALERTS CENTER
                    </v-card>
                    <v-divider></v-divider>
                    <div v-for="(notification, i) in notifications"
                    :key="i">
                      <v-list-item 
                      :value="notification"
                      >
                          <template #prepend>
                                  <v-avatar
                                  :color="notification.color"
                                  >
                                    <v-icon color="white">{{ notification.icone }}</v-icon>
                                  </v-avatar>
                          </template>
                          <v-list-item-subtitle  v-text="notification.date"></v-list-item-subtitle>
                          <v-list-item-title><p class="text-wrap">{{ notification.title }}</p></v-list-item-title>
                      </v-list-item>
                          <v-divider></v-divider>
                      </div>
                    
                   <v-list-item class="text-center " to="/">
                      Show All Alerts
                   </v-list-item>
                </v-list>
            </v-menu>
      </v-badge>
    </v-btn>

</template>
<style>

</style>
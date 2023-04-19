<script setup>
import avatar1 from '@/assets/avatar-1.png'

const avatarBadgeProps = {
  dot: true,
  location: 'bottom right',
  offsetX: 3,
  offsetY: 3,
  color: 'success',
  bordered: true,
};

 const messages = [
    {image: avatar1,sender:'Emily Fowler',content:'Ih here i wondered if lofded i have photo '},
    {image: avatar1,sender:'Robert lean' ,content:'Ih here i wondered if lofded i have photo '},
    {image: avatar1,sender:'jean louis'  ,content:'Ih here i wondered if lofded i have photo '}
 
 ]


</script>
<template>
   
    <v-btn class="text-none" stacked>
      <v-badge content="7" color="error">
        <v-icon color="white">mdi-email</v-icon>
            <v-menu
                activator="parent"
                width="300"
                location="bottom end"
                offset="14px"
            >
                
                <v-list class="pa-0" lines="one">
                    <v-card color="primary" class="rounded-0 d-flex align-center pa-2" height="40" >
                      MESSAGE CENTER
                    </v-card>
                    <v-divider></v-divider>
                    <div v-for="(message, i) in messages"
                    :key="i">
                    <v-list-item 
                    :value="message"
                     >
                        <template #prepend>
                            <v-badge 
                            v-bind="avatarBadgeProps"
                            class="me-3"
                            >
                                <v-avatar
                                 >
                                   <v-img :src="message.image"/>
                                </v-avatar>
                            </v-badge>
                        </template>
                        <v-list-item-title v-text="message.content"></v-list-item-title>
                        <v-list-item-subtitle v-text="message.sender"></v-list-item-subtitle>
                    </v-list-item>
                        <v-divider></v-divider>
                    </div>
                    
                   <v-list-item class="text-center" to="/">
                      Read More Messsages
                   </v-list-item>
                </v-list>
            </v-menu>
      </v-badge>
    </v-btn>

</template>
<style>

</style>
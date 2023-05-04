<script setup>
import avatar1 from '@/assets/avatar-1.png'

const avatarBadgeProps = {
  dot: true,
  location: 'bottom right',
  offsetX: 3,
  offsetY: 3,
  color: 'success',
  bordered: true,
}

const user = 'Borele' 

const links = [
{ icon: 'mdi-account', text: 'Profile', route: '/' },
{ icon: 'mdi-cogs', text: 'Setting', route: '/setting' },
{ icon: 'mdi-format-list-bulleted', text: 'Activity Log', route: '/log' },
]

</script>
<template>
  <v-divider vertical color="white" inset="10" thickness="2">
  </v-divider>  
  <span class="mx-2 text-white">{{ user }}</span>  
  <v-badge v-bind="avatarBadgeProps" class="mx-2">
    <v-avatar
        size="45"
        color="red"
        style="cursor: pointer"
    >
        <v-img  :src="avatar1" />

           <!-- SECTION Menu -->
      <v-menu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
      <v-list>
        <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :value="link"
        router :to="link.route"
        >
        <template v-slot:prepend>
          <v-icon :icon="link.icon"></v-icon>
        </template>

        <v-list-item-title v-text="link.text"></v-list-item-title>
      </v-list-item>

      <!-- logout -->
      <v-divider></v-divider>
      <v-list-item to="/login">
            <template #prepend>
              <VIcon
                icon="mdi-logout"
                size="22"
              />
            </template>

            <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>

      </v-list>
    </v-menu>
    </v-avatar>
  </v-badge>
</template>
<style>

</style>
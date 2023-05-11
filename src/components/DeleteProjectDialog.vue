<script setup>
 import { defineProps,computed,defineEmits,ref } from 'vue'
 import { useStore } from 'vuex'

  const props = defineProps({ 
    project: Object,
    show: Boolean
  })

  const emit = defineEmits(['cancel'])
  const store = useStore()
  const dialog = computed(()=> props.show );
  const project = computed(()=> props.project);
  const loading = ref(false)

  function deleteProject(){
     loading.value = true 
    setTimeout(() => {
        loading.value = false
        console.log(project.value.id);
        store.dispatch('deleteProject',project.value.id)  
        emit('cancel');  
      }, 2000)
  }





</script>
<template>
  <v-dialog
    v-model="dialog"
    width="550"
    v-if="project!== null"
   >
   <v-card>
    <v-card-title class="bg-primary"> Confirm</v-card-title>
    <v-card-text>Are you sure you want to delete this Project ?</v-card-text>
    <v-card-actions class="justify-end">
        <v-btn flat @click="emit('cancel')">Cancel</v-btn>
        <v-btn flat 
           color="primary" 
           :loading="loading"
           @click.stop="deleteProject">OK</v-btn>
    </v-card-actions>
   </v-card>
  </v-dialog>
</template>
<style>
</style>
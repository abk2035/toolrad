<script setup>
  import { useStore } from 'vuex';
  import { ref,computed } from 'vue'

    const store = useStore()
    const  projects = computed(()=> store.getters.getProjects)
    const  form = ref(false) 
    const  name = ref('')
    const dialog = ref(false) 
    const loading = ref(false)
    const nameRules = [
        v => !!v || 'field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters',
        v => v.indexOf(' ') == -1 || 'please Name without space',
        v => /^[a-zA-Z0-9 ]+$/.test(v) ||'please Name without special character '
      ];

    function submit(){
        if(!form.value) return ;
        
        loading.value =true ;
        const project = {
            id : projects.value.length + 1,
            name: name.value
        }
      
       setTimeout(() => {
        loading.value = false
        store.dispatch('createProject',project)  
        dialog.value = false  
      }, 2000)

        
    }
    

</script>
<template>
     <v-dialog
    v-model="dialog"
    width="550"
   >
      <template v-slot:activator="{ props }">
        <v-list-item 
         v-bind="props"
         @click="name=''"
          active-color="primary"
            link
            prepend-icon="mdi-file"
            title="Create New Project"
            append-icon="mdi-plus"
            class="borderme"
          >
          </v-list-item>
      </template>
   <v-card>  
            <v-card-title class="my-2">
                <v-row>
                    <span>New Project</span>
                    <v-spacer></v-spacer>
                    <v-btn 
                    flat
                    @click="dialog=false"
                    >  
                      <v-icon color="black">
                        mdi-close
                      </v-icon>
                    </v-btn>
                </v-row>
            </v-card-title>
            <v-divider color="primary" thickness="2"></v-divider>
            <v-card-text class="pa-5">
                <v-form v-model="form">
                    <v-text-field 
                    prepend-icon="mdi-file"
                    v-model="name"
                    label="project name"
                    placeholder="enter the project's name"
                    type="text"
                    :rules ="nameRules"
                    ></v-text-field>

                    <v-btn flat @click.prevent="submit" 
                    block
                    class="bg-primary mx-0 mt-3" 
                    :loading="loading"
                    :disabled="!form" >Add Project</v-btn>
                </v-form>
            </v-card-text>
   </v-card> 
   </v-dialog>
</template>
<style>
</style>

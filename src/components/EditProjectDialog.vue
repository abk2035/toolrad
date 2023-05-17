<script setup>
  import { useStore, } from 'vuex';
  import { ref,computed,defineProps,defineEmits,watch } from 'vue'

  const props = defineProps({ 
    project: Object,
    show: Boolean
  })
  const emit = defineEmits(['cancel'])


    const store = useStore()
    const  project = computed(()=>props.project)
    const  form = ref(false) 
    const  name = ref('')

    const dialog =computed(()=>props.show)
    const loading = ref(false)
    const nameRules = [
        v => !!v || 'field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters',
        v => v.indexOf(' ') == -1 || 'please Name without space',
        v => /^[a-zA-Z0-9 ]+$/.test(v) ||'please Name without special character '
      ];

      watch(project,()=>{
        name.value = project.value!==null ? project.value.name :''
        console.log(name.value);
      })

    function update(){
        if(!form.value) return ;
        
        loading.value =true ;
        const updateProject = {
            id : project.value.id,
            name: name.value
        }
      
       setTimeout(() => {
        loading.value = false
        store.dispatch('updateProject',updateProject) 
        emit("cancel"); 
      }, 2000)

        
    }

    

</script>
<template>
  <v-dialog
    v-model="dialog"
    width="550"
   >
   <v-card>  
            <v-card-title class="my-2">
                <v-row>
                    <span>Edit Project </span>
                    <v-spacer></v-spacer>
                    <v-btn 
                    flat
                    @click="emit('cancel')"
                    >  
                      <v-icon color="black">
                        mdi-close
                      </v-icon>
                    </v-btn>
                </v-row>
            </v-card-title>
            <v-divider color="primary" thickness="2"></v-divider>
            <v-form v-model="form">
                  <v-card-text class="pa-5">
                    <v-text-field 
                    prepend-icon="mdi-file"
                    v-model="name"   
                    label="project name"
                    placeholder="enter the project's name"
                    type="text"
                    :rules ="nameRules"
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn flat @click.stop="emit('cancel')" 
                    class="bg-grey mx-1 "
                     > Cancel</v-btn>
                    <v-btn flat @click.prevent="update" 
                    class="bg-primary" 
                    :loading="loading"
                    :disabled="!form" >Update</v-btn>
                </v-card-actions>
            </v-form>      
   </v-card> 
   </v-dialog>
</template>
<style>
</style>

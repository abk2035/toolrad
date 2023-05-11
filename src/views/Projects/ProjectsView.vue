<template>
    <div class="header_content bg-background">
      <v-row class="pa-5">
        <span class="text-subtitle-2 ml-3 "> Your projects </span>
        <v-divider sticky="2" bg-color="background">
        </v-divider>
      </v-row>
      <v-row justify="space-around" class="py-5">
         <NewProjectDialog />
          <v-list-item 
             link
            active-color ="primary"
            title="Import File"
            prepend-icon="mdi-file-undo"
            class="borderme"
          >
          </v-list-item>
        </v-row>
    </div>    
   
  <v-container class="mt-5">
     
    <h class="text-caption ">Project Name :</h>
     <v-col >
       <v-row v-for="(project, i) in projects"  :key="i" >
        <v-col  class="d-flex  pa-0 align-center ">
          <v-list-item
                  :title="project.name"
                  :to="`/projects/${project.id}`"
                  class="w-75 my-2"
                >
                <template #prepend>
                  <v-icon color="">mdi-file</v-icon>
                </template>
          </v-list-item>   
          <v-spacer></v-spacer>
          <v-btn icon="mdi-delete" 
          width="30"
           height="30" 
           color="error"
           @click="deleteProject(project)"></v-btn>
        </v-col>
        <v-divider></v-divider>
      </v-row>
     </v-col>
  </v-container>
  <DeleteProjectDialog 
  :show="showConfirm" 
  :project="selectedProject"
   @cancel="noConfirmDelete" 
   />
</template>

<script>
import NewProjectDialog from '@/components/NewProjectDialog';
import DeleteProjectDialog from '@/components/DeleteProjectDialog';
import { defineComponent,
  onMounted,computed , ref } from 'vue';
import { useStore } from 'vuex';
// Components

export default defineComponent({
  name: 'projects-view',

  components: {
    NewProjectDialog,
    DeleteProjectDialog
  },

  setup(){
    const store = useStore() ;
    const projects = computed(()=> store.getters.getProjects );
    const showConfirm = ref(false);
    const selectedProject = ref(null);
     
    
    onMounted(()=>{
      //  console.log(store.projects);
    })

    function openProject(){
        // this.$store.('projectOpened',projects[index]);
    }

    // delete project
    function deleteProject(project){
       showConfirm.value = true ;
       selectedProject.value = project ;
      console.log(showConfirm.value);
    }

    function noConfirmDelete(){
      showConfirm.value = false ;
    }

    return { 
            projects,
            showConfirm,
            selectedProject,
            openProject,
            deleteProject,
            noConfirmDelete,
           }
  }
});
</script>
<style scope>
 .header_content{
  display: flex;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  top: 55px;
  justify-content: flex-start;
  z-index: 1000;
 }

 .borderme{
  border-radius: 4px;
  height:60px ;
  padding: 10px;
  border: solid 1px black;
 }
</style>

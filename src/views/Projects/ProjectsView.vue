<template>
    <div class="header_content bg-background">
      <v-row class="pa-5">
        <span class="text-subtitle-2 ml-3 "> Your projects </span>
        <v-divider sticky="2" bg-color="background">
        </v-divider>
      </v-row>
      <v-row justify="space-around" class="py-5">
          <v-list-item 
          active-color="primary"
            link
            prepend-icon="mdi-file"
            title="Create New Project"
            append-icon="mdi-plus"
            class="borderme"
          >
          </v-list-item>
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
     <v-col>
       <v-row v-for="(project, i) in projects"  :key="i" >
        <v-list-item 
                :title="project.name"
                :to="`/projects/${project.id}`"
                class="w-100 my-2"
              >
              <template #prepend>
                <v-icon color="">mdi-file</v-icon>
              </template>
              <template #append>
                <v-icon color="error">mdi-delete</v-icon>
              </template>
        </v-list-item>
        <v-divider></v-divider>
      </v-row>
     </v-col>
  </v-container>
</template>

<script>
import { defineComponent,
  onMounted,computed } from 'vue';
import { useStore } from 'vuex';
// Components

export default defineComponent({
  name: 'projects-view',

  components: {
    
  },

  setup(){
    const store = useStore() ;

    const projects = computed(()=>{
      return this.store.state.projects ;
    })
     
    
    onMounted(()=>{
       
    })

    function openProject(){
        // this.$store.('projectOpened',projects[index]);
    }

    return { 
            store,
            projects,
            openProject 
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

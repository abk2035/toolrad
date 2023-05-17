<template>
    <div class="project">
      <v-col >
          <v-row>
            <v-app-bar density="compact">
              <v-app-bar-nav-icon @click= "drawer = !drawer" v-if="mdAndDown"></v-app-bar-nav-icon>
              <v-spacer></v-spacer>
              <v-toolbar-title>
                 <input
                    class="pa-1 "
                    size="10"
                    type="text" 
                    :value="currentProject.name"
                    :readonly="setEditProjectName"
                    @keyup.enter="editProjectName"
                    @click.stop="setEditProjectName = false"
                    />
                <v-btn  @click="menusDown = !menusDown">
                  <v-icon size="30">{{ menusDown == true ? 'mdi-chevron-down': 'mdi-chevron-up' }}</v-icon>
                  <v-menu
                    activator="parent"
                    width="250"
                    location="bottom end"
                    offset="14px"
                  >
                        <v-list>
                          <v-list-item
                          v-for="(item, i) in menus"
                          :key="i"
                          :value="item"
                          link
                          >
                          <template v-slot:prepend>
                            <v-icon :icon="item.icon"></v-icon>
                          </template>
                          <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item>
                        </v-list>
                  </v-menu>
                </v-btn>
              </v-toolbar-title>
            </v-app-bar>

            <v-navigation-drawer permanent flat
                 class="h-screen bg-background " style="overflow: scroll;"
                 v-model="drawer"
              > 
                <v-col >
                  <v-row class="mb-2" >
                    <v-col>
                      <v-list-item
                        @click="expandModule = !expandModule"
                        prepend-icon="mdi-folder"
                        :append-icon="expandModule==true ? 'mdi-chevron-down':'mdi-chevron-up'"
                        class="text-caption"
                       >
                       <v-list-item-title class="text-caption">
                         Module Tree
                       </v-list-item-title>
                      </v-list-item>
                      <v-divider></v-divider>              
                      <v-expand-transition>
                        <v-col 
                        v-show="expandModule"
                        > 
                        gagdhg adsjajd asdjjadui asfar asd
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias consectetur maxime amet deleniti, quas enim, nisi delectus voluptate laudantium animi facere sapiente nam minima fuga cupiditate ea. Voluptates, sapiente iure?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sequi saepe. Eaque eveniet velit sit necessitatibus aliquid soluta distinctio aspernatur placeat animi, vitae aperiam ab similique assumenda pariatur. Illo, voluptatum.
                      </v-col>                  
                    </v-expand-transition>                  
                   </v-col>
                  </v-row >
                  <v-row class="mb-5" >
                    <v-col>
                      <v-list-item
                        @click="expandEntity = !expandEntity"
                        prepend-icon="mdi-folder"
                        :append-icon="expandEntity==true ? 'mdi-chevron-down':'mdi-chevron-up'"
                        class="text-caption"
                       >
                       <v-list-item-title class="text-caption">
                         Entity Tree
                       </v-list-item-title>
                      </v-list-item>
                      <v-divider></v-divider>              
                      <v-expand-transition>
                        <v-col 
                        v-show="expandEntity"
                        > 
                        gagdhg adsjajd asdjjadui asfar asd ckjkjdkjkkdasfkn asdkjk
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem corrupti dicta voluptatum impedit? Vitae at beatae asperiores voluptas consectetur aspernatur maiores totam odio, corporis, neque error facilis, quis quas eos?
                      </v-col>          
                    </v-expand-transition>                  
                   </v-col>
                  </v-row >     
                </v-col>
            </v-navigation-drawer>
          </v-row>
          <v-row>
              <EntityCard/>
          </v-row>
      </v-col>
     
    </div>
</template>
<script>
import { ref ,onMounted , }  from 'vue';
import EntityCard from '@/components/EntityCard/EntityCard.vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import { useRoute } from 'vue-router';

  export default{
    name :'project-view',
    props :['id'],
    components:{
       EntityCard
    },
    setup(){

      const {lgAndUp, mdAndDown} = useDisplay();
      const drawer = ref(lgAndUp.value);
      const expandModule = ref(false)
      const expandEntity = ref(false)
      const route = useRoute(); 
       

      // for dropdown menu
      const menusDown = ref(true)
      const menus = [
        {
          icon : 'mdi-file-import',
          text : 'Import SQL schema'
        },
        {
          icon : 'mdi-account-plus',
          text : 'Add collaborator'
        }
        ,
        {
          icon : 'mdi-image',
          text : 'Export image'
        },
        {
          icon : 'mdi-download',
          text : 'Generate Report'
        }

      ]
      //edit Project 
      let currentProject = ref({})

      const setEditProjectName = ref(true);
      function editProjectName(){
          alert('edit');
      }

      // init project
      onMounted( function () {

        //console.log(currentProject);
      });

      return { 
        route,
        drawer,
        mdAndDown,
        expandModule,
        expandEntity,
        menus,
        menusDown,
        currentProject, 
        setEditProjectName,
        editProjectName    
      } ;
    }
    
  }
</script>
<style scoped>
  input{
    border: none;
    box-shadow: none;
  }
</style>
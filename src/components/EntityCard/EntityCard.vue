<script>
 import { ref } from 'vue'; 
  export default{
    name : 'entity-card',
    setup(){
        const dialog = ref(false) ;
        const activeTab = ref('attribute');

        // tabs
                const tabs = [
                {
                    title: ' Attributes',
                    tab: 'attributes',
                },
                {
                    title: 'Methods',
                    tab: 'methods',
                },
                {
                    title: 'Relations',
                    tab: 'relations',
                },
            ];

        return {  dialog , tabs ,activeTab} ;
    }

  }

</script>
<template>
  <v-dialog
    v-model="dialog"
    width="1000"
   >
    <template v-slot:activator="{ props }">
      <v-btn flat=true v-bind="props" class="bg-success">see entity</v-btn>
    </template>
    <v-card>  
            <v-card-title class="my-2">
                <v-row>
                    <span>Entity-name</span>
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
            <v-card-text class="d-flex flex-column my-2">
                  <v-row class="mb-2 overflow-y-scroll">
                    <v-tabs
                       v-model="activeTab"
                       show-arrows
                        >
                         <v-tab
                            v-for="(item,i) in tabs"
                            :key="i"
                            :value="item.tab"
                            color="primary"
                           >                 
                            {{ item.title }}
                         </v-tab>
                    </v-tabs>
                    <v-divider/>
                    <v-window
                        v-model="activeTab"
                        class="mt-5"
                        touch="false"
                        >
                        <v-window-item value="attributes">
                            account 
                            lorem Lorem ipsum dolor sit amet<br>
                             consectetur adipisicing elit. Voluptates ut maiores iure<br>
                              itaque, fuga deserunt numquam omnis praesentium, enim natus, iste quaerat blanditiis maxime nisi officiis aliquam exercitationem repudiandae earum!

                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla eius nam doloremque harum fugiat praesentium, accusantium mollitia quisquam veritatis blanditiis!<br>
                               Perspiciatis eaque alias aperiam nulla possimus dolore ut quasi?
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi inventore fuga, accusamus itaque, suscipit culpa repudiandae illo <br>
                               quidem vitae eum vel iure error asperiores ad eaque tenetur optio possimus.

                               dsjjfhshv sdjkfndkjfjks sdfjsdjfjsdjfsj sdfjkbsjdfjsdjfsjdfj

                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores explicabo quis ut nam ad, eius magnam dolores, aliquam quo odit reprehenderit quos facilis impedit. Delectus repudiandae nemo rerum vero numquam!
                               dsfkdf Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem vel esse dolores a aliquid qui numquam. Aliquid eveniet dolorum quibusdam nostrum repellat voluptatem voluptate consectetur. Esse quas expedita temporibus!
                               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate rerum quam eos maxime et repellat ipsam rem sit alias eum voluptates autem nam amet facere, voluptas vero? Aut, commodi eveniet?
                               Lorem ipsum dolor sit amet consectetur,
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis ea provident veritatis quas necessitatibus suscipit eius animi voluptatem eum earum repellat, dolorem blanditiis placeat consectetur excepturi deleniti cum voluptas.
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laborum cumque quasi ex possimus excepturi, in nesciunt qui, doloribus quaerat ducimus accusantium fuga provident commodi eveniet delectus omnis, optio sunt.
                                adipisicing elit. Sapiente molestiae minus omnis ut rem aliquam odit! Culpa, blanditiis ratione dolorum sequi, accusantium voluptatem facere quam velit libero modi quasi aspernatur?
                        </v-window-item>
                        <v-window-item value="methods">
                            methods
                        </v-window-item>
                        <v-window-item value="relations">
                            relations
                        </v-window-item>              
                    </v-window>
                  </v-row>
                  <v-row justify="space-around">
                     <v-btn class="rounded-pill bg-primary"  variant="tonal" >
                        Export Devup Datacore
                     </v-btn>
                     <v-btn class="rounded-pill bg-primary"  variant="tonal" >
                        Export Json Model
                     </v-btn>
                     <v-btn class="rounded-pill bg-primary"  variant="tonal" >
                        Export Laravel Migration
                    </v-btn>
                  </v-row>
            </v-card-text>
            <v-divider color="primary" thickness="2"></v-divider>
            <v-card-actions class="justify-end">
                <v-btn 
                class="rounded-pill"
                @click="dialog = false">
                  cancel
                </v-btn>
                <v-btn class="rounded-pill">
                  save
                </v-btn>
            </v-card-actions>         
    </v-card>      
  </v-dialog>
</template>
<style scoped>

</style>
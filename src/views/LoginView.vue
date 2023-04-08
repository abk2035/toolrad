<template>
<div class="d-flex flex-row justify-center align-center h-screen" style="background-color:#EDE8E8;">
 <v-card>
        <v-card width="700" height="50" style="background-color:#151414;" class="rounded-0"></v-card>
        <v-card width="700" class="mx-auto pa-10 rounded-0">
          <v-form fast-fail @submit.prevent>
              <v-text-field 
              color="#C84356"
                v-model="firstName"
                label="Email"
                :rules="firstNameRules"
                variant="outlined"
                type="email"
                bg-color="#EDE8E8"
              ></v-text-field>
               
              <v-text-field 
              color="#C84356"
                v-model="firstName"
                label="Password"
                :rules="firstNameRules"
                variant="outlined"
                type="password"
                bg-color="#EDE8E8"
              ></v-text-field>
            <v-btn type="submit" block class="mt-2 text-white" color="#C84356" height="40">SIGN IN</v-btn>
            <v-btn type="submit" block class="mt-4 text-white" color="#C84356" height="40">
              Create account with space kola
            </v-btn>
            <v-btn type="submit" block class="mt-4"  height="40" flat>
              forgot password ?
            </v-btn>
          </v-form>
       </v-card>
 </v-card>
</div>
</template>
<script>
  export default{
    name :'login-view',

  }
</script>
<style scoped>
  .content{
    background-color:'#151414' ;
    flex: 1;
    display: flex;
    align-items: center;
  }
</style>
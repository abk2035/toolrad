// Styles
import '@mdi/font/css/materialdesignicons.css'
//import { aliases,fa } from 'vuetify/iconsets/fa'
import {aliases, mdi } from 'vuetify/iconsets/mdi'

import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  { 
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    
   theme : {
      primary: '#C84356',
      background: '#EDE8E8',
      success: '#3cd1c2',
      info: '#ffaa2c',
      error: '#f83e70'
    }  
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)

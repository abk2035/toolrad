// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  { 
   iconfont: 'md',
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

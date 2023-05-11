export default {
    state: {
        projects:[  
        {id:1,name:'toolrad1'}, 
        {id:2,name:'toolrad2'},
        {id:3,name:'toolrad3'},
        {id:4,name:'toolrad4'},
        {id:5,name:'toolrad5'},
        {id:6,name:'toolrad6'},
        {id:7,name:'toolrad7'},
        {id:8,name:'toolrad8'}
       ],

        project: null
    },
    getters: {
        getProjects(state){ return state.projects.reverse() },
        getProjectById(state,payload){return state.projects.find((project)=> project===payload )}

    },
    mutations: {
        ['CREATE_PROJECT'](state,payload){
            state.projects.push(payload)
        },
        ['DELETE_PROJECT'](state,payload){
         state.projects = state.projects.filter((project)=> project.id !== payload)
        },
        ['UPDATE_PROJECT'](state,payload){
           const index = state.projects.findIndex((p) => p.id == payload.id);
            state.projects[index] = payload
        }

    },
    actions: {
        createProject({commit},payload){
            commit('CREATE_PROJECT',payload);

        },

        deleteProject({commit},payload){
            commit('DELETE_PROJECT',payload);
        },

        updateProject({commit,getters},payload){
          const project = getters.getProjectById(payload.id);
          project.name = payload.name ;
           commit('UPDATE_PROJECT',project)
        }



    },
}
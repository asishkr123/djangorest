import {ADD_ERROR} from '../actions/types'


const initialState = {
    msg : {},
    status : null
}

export default (state = initialState,action) => {
    switch(action.type){
        case ADD_ERROR :
          return {
              msg : action.payload.msg,
              status : action.payload.status
          }
        default :
          return state;  
    }
}
import {CREATE_MESSAGE , GET_MESSAGES, ADD_ERROR} from './types'




export const createMessage = (msg) => {
  return {
      type : CREATE_MESSAGE,
      payload : msg
  }   
}

export const returnErrors = (msg,status) => {
  return {
     type : ADD_ERROR,
     payload : {msg,status}
  }
}
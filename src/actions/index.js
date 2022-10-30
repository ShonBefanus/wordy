import {Action} from './type';

export const firstAction =(payload) =>{
  return {
      type: Action.FIRST_ACTION,
      payload
  };
};

/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/04/09.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import {ADD_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER} from '../actions/';

const todo = (state = {}, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }

    case TOGGLE_TODO:
      if(state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];

    case TOGGLE_TODO:
      return state.map(t =>
        todo(t, action)
      );

    default:
      return state;
  }
}

export default todos;
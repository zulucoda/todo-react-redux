/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/04/09.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import { SHOW_ALL, SET_VISIBILITY_FILTER } from '../actions/';

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
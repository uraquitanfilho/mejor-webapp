import { NAME_CHANGED,
         EMAIL_CHANGED,
         PWD_CHANGED,
         BIRTHDATE_CHANGED,
         OCCUPATION_CHANGED,
         LAT_CHANGED,
         LNG_CHANGED,
         PRODUCT_CHANGED,
         DISTANCE_CHANGED,
         GET_LATLNG,
         ADD_STEP, LESS_STEP } from '../constants/constants';

const INITIAL_STATE = { name: '',
                        email: '',
                        birthdate: '',
                        occupation: '',
                        lat: '',
                        lng: '',
                        product: '',
                        distance: 10,
                        step: 1,
                        side:''}

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case NAME_CHANGED:
      return {...state, name: action.payload}
    case EMAIL_CHANGED:
        return {...state, email: action.payload}
    case BIRTHDATE_CHANGED:
        return {...state, birthdate: action.payload}
    case OCCUPATION_CHANGED:
        return {...state, occupation:action.payload}
    case LAT_CHANGED:
        return {...state, lat:action.payload}
    case LNG_CHANGED:
        return {...state, lng:action.payload}
    case OCCUPATION_CHANGED:
        return {...state, product:action.payload}
    case DISTANCE_CHANGED:
        return {...state, distance:action.payload}
    case GET_LATLNG:
        return {...state, lat:action.payload.latitude, lng:action.payload.latitude}
    case ADD_STEP:
        let step = state.step;
        if(step< 4) step++;
        console.log(step);
        return {...state, step, side: action.payload}
    case LESS_STEP:
        let step_less = state.step;
        if(step_less > 1) step_less--;
        return {...state, step: step_less, side: action.payload}
    default:
       return state;
  }
}

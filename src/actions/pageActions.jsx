import axios from 'axios';
import { hashHistory } from 'react-router';
import {toastr} from 'react-redux-toastr';
import {reset as resetForm, initialize} from 'redux-form';

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

const URL = '';

export const changeName = (event) => ({
   type: NAME_CHANGED,
   payload: event.target.value
});

export const changeEmail = (event) => ({
   type: EMAIL_CHANGED,
   payload: event.target.value
});

export const changeBirthdate = (event) => ({
   type: BIRTHDATE_CHANGED,
   payload: event.target.value
});

export const changeOcupation = (event) => ({
   type: OCCUPATION_CHANGED,
   payload: event.target.value
});

export const changeLat = (event) => ({
   type: LAT_CHANGED,
   payload: event.target.value
});

export const changeLng = (event) => ({
   type: LNG_CHANGED,
   payload: event.target.value
});

export const changeProduct = (event) => ({
   type: PRODUCT_CHANGED,
   payload: event.target.value
});

export const changeDistance = (event) => ({
   type: DISTANCE_CHANGED,
   payload: event.target.value
});

export const sendLatLng = (req) => ({
   type: GET_LATLNG,
   payload: req
});

export const getIP = () => {
   return dispatch => {
      axios.get("https://api.ipify.org?format=json")
        .then(re => axios.get(`http://freegeoip.net/json/${re.data.ip}`))
        .then(res => dispatch(sendLatLng(res.data)))
   }
};

export const submitStep1 = (values) => {
  console.log(values);
  if(!values.name) {
    toastr.error("Please check the name");
    return {type:'error'}
  }
  if(!values.email) {
    toastr.error("Please check the E-Mail");
    return {type:'error'}
  }
  if(!values.birthdate) {
    toastr.error("Please check your Birth Date");
    return {type:'error'}
  }

 return {
   type: ADD_STEP,
   payload: 'right'
 };
};

export const clickNextStep = () => ({
    type: ADD_STEP,
    payload: 'right'
});

export const clickLessStep = () => ({
    type: LESS_STEP,
    payload: 'left'
});


/*
export const addUser = (name, email, pwd) => {
  return dispatch => {
    axios.get(`${URL_USER}?email=${email}`)
    .then(res => {
      console.log(res.data.length);
      if(res.data.length <=0){
        console.log('aqui????');

        return {
          type: REGISTER_NEW,
          payload: true
        }

      //  axios.post(URL_USER, {name, email, pwd})
    //     .then(res => {console.log(res)});
      }
    });


  //  axios.post(URL,{description})
  //    .then(resp => dispatch(clear()))
//      .then(resp => dispatch(search()));
        console.log('ponto2');
  }
}


export const search = (description) => {
  const search = description ? `&description__regex=/${description}/` : ''
  const request = axios.get(`${URL}?sort=-cratedAt${search}`);

  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}



export const markAsDone = (todo) => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, {...todo, done: !todo.done})
    .then(resp => dispatch(search(resp.data.description)));
  }
}

export const remove = (todo) => {
  return dispatch => {
    //axios.delete(`${URL_USER}/${res.data[0]._id}`)
    axios.delete(`${URL}/${todo._id}`)
    .then(resp => dispatch(search()));
  }
}

export const clear = () => {
  return {type: 'TODO_CLEAR'}
}
*/

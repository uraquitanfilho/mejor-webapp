import React from 'react';
import Item from './items';

const bar_progress = (step, direction) => {
	var number_of_steps = 4;
	var now_value =16;
  if(step === 1){
     now_value=0;
     if(direction==="left") number_of_steps = 8;
  }
  else if (step===2) now_value = 16;
  else if (step===3) now_value = 36;
  else if(step===4) now_value = 80;

	var new_value = 0;
//	if(direction === 'right') {
		new_value = now_value + ( 100 / number_of_steps );
/*	}
	else if(direction === 'left') {
    console.log("valor=" + now_value);
		new_value = now_value - ( 100 / number_of_steps );
	} */
	$(".f1-progress-line").attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

const s2 = (step, side) => {
  if (step > 1)
    return "active";
  else return '';
}

const s3 = (step) => {
  if (step > 2)
    return "active";
  else return '';
}

const s4 = (step) => {
  if (step > 3)
    return "active";
  else return '';
}
export default props => (
   <div className="f1-steps">
        <div className="f1-progress">
            <div className="f1-progress-line" data-now-value="10.66" data-number-of-steps="4" ></div>
        </div>
        <Item active="active" title="about" icon="user" />
        <Item active={s2(props.step)} title="location" icon="map-marker" />
        <Item active={s3(props.step)} title="filter" icon="filter" />
        <Item active={s4(props.step)} title="result" icon="list" />
        {bar_progress(props.step, props.side)}
   </div>
);

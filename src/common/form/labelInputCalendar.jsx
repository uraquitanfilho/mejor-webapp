import React from 'react';
import DatePicker from 'react-datepicker';
import 'modules/react-datepicker/dist/react-datepicker.min.css';
import moment from 'moment';
const renderDatePicker = (input) => {

    return (<DatePicker

selected={input.selected}
onChange={input.onDateChange}
onChangeRaw={input.onDateChange}
onClick={input.onDateChange}
className={input.date_picker}
placeholderText={input.placeholder}
dateFormat='DD/MM/YYYY'
showYearDropdown={input.showYearFlag ? true : false }
maxDate={input.maxDateVal} //maxDate
minDate={input.minDateVal}
autoOk={true}
dropdownMode="select"
disabled={input.disabled}
showMonthDropdown={input.showMonthFlag ? true : false}
/>


      );
}

const labelInputCalendar = ({input, placeholder, defaultValue, meta: {touched, error} }) => {
  console.log(input);
  var date = new Date();
  var todayDate = moment(new Date()).format('DD-MM-YYYY');
return(
   <div className="form-group">
     <label className="sr-only" htmlFor={input.name}>{input.label}</label>
     <DatePicker {...input}
          dateFormat="YYYY-MM-DD"
          selected={input.value ? moment(input.value, 'YYYY-MM-DD') : moment()}
          dropdownMode="select"
          className="form-control"
          readOnly={input.readOnly}
          placeholderText={placeholder}
          autoOk={true}
           />
    {touched && error && <span>{error}</span>}


   </div>
 );
};

export default labelInputCalendar;

import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';
import labelAndInput from '../../../common/form/labelAndInput';

import labelInputCalendar from '../../../common/form/labelInputCalendar';

//import DatePicker from 'react-datepicker';
//import 'modules/react-datepicker/dist/react-datepicker.min.css';

class Step1Form extends Component {
  render() {
     const { handleSubmit } = this.props;
     return (
       <form role='form' onSubmit={handleSubmit}>
          <Field  name="name" component= {labelAndInput}
                           placeholder="Full name..."
                           type="text"
                           label="Name"
                           id="name" />


          <Field type="email"
                 component={labelAndInput}
                 name="email"
                 placeholder="E-mail..."
                 label="E-mail"
                 id="email" />

            <Field name="birthdate"
                   hintText="Birth Date"
                   component={labelInputCalendar}
                   dateFormat="YYYY-MM-DD"
                   placeholder="Birth Date"
                   showYearDropdown={true} />

          <Field type="text"
                 component={labelAndInput}
                 name="occupation"
                 placeholder="Occupation..."
                 label="Occupation"
                 className="form-control"
                 id="occupation" />

       <div className="f1-buttons">
          <button type="submit" className="btn btn-next">Next</button>
       </div>
       </form>
     );
  }
}

export default reduxForm({form: 'step1Form', destroyOnUnmount: false})(Step1Form);

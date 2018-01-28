import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { changeName, changeEmail, changeBirthdate, changeOcupation, submitStep1 } from '../../../actions/pageActions';
import Step1Form from './step1Form';

class Step1 extends Component {
   render() {

     return (
       <fieldset>

         <h4>{this.props.title}</h4>
         <Step1Form onSubmit={this.props.submitStep1} />

       </fieldset>
     );
   }
}
//const mapStateToProps = state => ({name: state.page.name, email: state.page.email, birthdate: state.page.birthdate, occupation: state.page.occupation});
//const mapDispatchToProps = dispatch => bindActionCreators({changeName, changeEmail, changeBirthdate, changeOcupation, submitStep1},dispatch);
const mapDispatchToProps = dispatch => bindActionCreators({submitStep1},dispatch);

export default connect(null, mapDispatchToProps)(Step1);

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { clickAddStep, clickLessStep } from '../../../actions/pageActions';

class Step4 extends Component {
   render() {

     return (
       <fieldset>
         <h4>{this.props.title}</h4>
         <div className="form-groupss">
            <div className="col-lg-12 col-md-12 mb-12">
               <div className="card">
                  <div className="col-lg-2 col-md-2 mb-2">
                     <img className="card-img-top" src="http://placehold.it/500x325" width="150" height="90" alt="" />
                  </div>
                  <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-12 col-md-12 mb-12">
               <div className="card">
                  <div className="col-lg-2 col-md-2 mb-2">
                     <img className="card-img-top" src="http://placehold.it/500x325" width="150" height="90" alt="" />
                  </div>
                  <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-12 col-md-12 mb-12">
               <div className="card">
                  <div className="col-lg-2 col-md-2 mb-2">
                     <img className="card-img-top" src="http://placehold.it/500x325" width="150" height="90" alt="" />
                  </div>
                  <div className="col-lg-10 col-md-10 mb-10">
                     <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="f1-buttons">
              <button type="button" onClick={() => this.props.clickLessStep()} className="btn btn-previous">Previous</button>
            </div>
         </div>
       </fieldset>
     );
   }
}

const mapStateToProps = state => ({lat: state.page.lat, lng: state.page.lng});
const mapDispatchToProps = dispatch => bindActionCreators({clickAddStep, clickLessStep},dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Step4);

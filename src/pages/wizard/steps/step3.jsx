import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { changeProduct, changeDistance, clickAddStep, clickLessStep } from '../../../actions/pageActions';

class Step3 extends Component {
   render() {
     return (
       <fieldset>
         <h4>{this.props.title}</h4>
         <div className="form-group">
            <label className="sr-only" htmlFor="f1-password">Product</label>
            <select name="product" className="f1-email form-control" id="prodct"> </select>
         </div>
         <div className="form-group">
            <label className="sr-only" htmlFor="f1-password">Distance</label>
            <input id="distance" name="distance" placeholder="Distance(km)..." type="number" min="1" max="30" />
         </div>
         <div className="f1-buttons">
           <button type="button" onClick={() => this.props.clickLessStep()} className="btn btn-previous">Previous</button>
           <button type="button" onClick={() => this.props.clickAddStep()} className="btn btn-next">Next</button>
         </div>
       </fieldset>
     );
   }
}
const mapStateToProps = state => ({lat: state.page.lat, lng: state.page.lng});
const mapDispatchToProps = dispatch => bindActionCreators({changeProduct, changeDistance, clickAddStep, clickLessStep},dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Step3);

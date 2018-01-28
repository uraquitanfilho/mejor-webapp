
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { changeLat, changeLng, getIP, clickAddStep, clickLessStep } from '../../../actions/pageActions';

class Step2 extends Component {
  constructor(props) {
    super(props);
    this.step2Click = this.step2Click.bind(this);
  }
  step2Click() {
    this.props.getIP();
  }
  getLocation() {

      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
          console.log("Geolocation is not supported by this browser.");
      }
  }

  showPosition(position) {
      console.log( "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude);
  }
geoPos(){
  this.getLocation();
  return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>
            <tbody>
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
              <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
              <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
              <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>;
}
  /*
  mapDispatchToProps(dispatch) {
    return {
       action: dispatch(actions.action())
    }
   }
  */
   render() {
     const { lat, lng, getIp } = this.props;
     return (
       <fieldset>
         <h4>{this.props.title} <button className="btn btn-danger" onClick={() => this.step2Click()}>Check Location</button></h4>
         <div className="form-group">
            <label className="sr-only" htmlFor="f1-email">Latitude</label>
            <input type="text"
                   name="lat"
                   placeholder="Latitude..."
                   className="f1-email form-control"
                   id="lat"
                   onChange={this.props.changeLat}
                   value={lat} />
         </div>
         <div className="form-group">
            <label className="sr-only" htmlFor="f1-password">Longitude</label>
            <input type="text"
                   name="lng"
                   placeholder="Longitude..."
                   className="f1-password form-control"
                   id="lng"
                   onChange={this.props.changeLng}
                   value={lng} />
         </div>
         <div className="f1-buttons">
            <button type="button" onClick={() => this.props.clickLessStep()} className="btn btn-previous">Previous</button>
            <button type="button" onClick={() => this.props.clickAddStep()} className="btn btn-next">Next</button>
         </div>
       </fieldset>
     );
   }
}
const mapStateToProps = state => ({product: state.page.product, distance: state.page.distance, lat: state.page.lat, lng: state.page.lng});
const mapDispatchToProps = dispatch => bindActionCreators({changeLat, changeLng, getIP, clickAddStep, clickLessStep},dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Step2);

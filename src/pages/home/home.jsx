import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Wizard from '../wizard/wizard';

class Home extends Component {

  constructor(props){
    super(props);
  }

   render() {
      return (
        <div className="top-content">
              <div className="container">
                  <div className="row">
                      <div className="col-sm-8 col-sm-offset-2 text">
                          <h1>Show <strong>Mejor Webapp</strong> Products</h1>
                          <div className="description">
                              <p>
                                  This is a responsive Bootstrap form wizard.<br/>
                                  Back-end: <strong>NodeJS</strong>
                                  Front-end: <strong>React</strong>
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                     <Wizard step={this.props.step} side={this.props.side} />
                  </div>

              </div>
          </div>
      );
   }
}
const mapStateToProps = state => ({name: state.page.name, email: state.page.email,
                                  birthdate: state.page.birthdate, occupation: state.page.occupation,
                                  step: state.page.step, side: state.page.side});
export default connect(mapStateToProps, null)(Home);

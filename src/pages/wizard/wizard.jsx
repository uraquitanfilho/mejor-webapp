import React from 'react';
import Steps from './steps';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Step4 from './steps/step4';

const showStep = (step) => {
console.log(" step =" + step)
  switch (step) {
    case 1:
        return (<Step1 title="Tell us who you are:" />);
    case 2:
        console.log("chame:" + step)
        return(<Step2 title="Your current Location:" />)
    case 3:
      return(<Step3 title="Your Preferences:" />);
    case 4:
       return (<Step4 title="Result:" />);
    default:
       return (<Step1 title="Tell us who you are:" />)
  }
}
export default props => (

  <div className="col-sm-12 col-sm-offset-1 col-md-10 col-md-offset-2 col-lg-8 col-lg-offset-3 form-box">
    <div role="form" className="f1">
       <h3>Find products nearly you</h3>
       <p>Fill in the form to get product access</p>
         <Steps step={props.step} side={props.side} />
           {showStep(props.step)};
    </div>
  </div>
);

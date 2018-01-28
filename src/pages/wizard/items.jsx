import React from 'react';

export default props => {
  const icon = `fa fa-${props.icon}`;
  const active = `f1-step ${props.active}`;
  return(
  <div className={active}>
    <div className="f1-step-icon"><i className={icon}></i></div>
    <p>{props.title}</p>
  </div>
);
};

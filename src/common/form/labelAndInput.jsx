import React from 'react';

export default props => (
   <div className="form-group">
     <label className="sr-only" htmlFor={props.name}>{props.label}</label>
     <input {...props.input} className="form-control"
            placeholder={props.placeholder}
            type={props.type}
            id={props.id}
            readOnly={props.readOnly} />
   </div>
);

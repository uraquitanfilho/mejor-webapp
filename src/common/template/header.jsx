import React from 'react';
export default props => (
    <nav className="navbar navbar-inverse navbar-no-bg" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Mejor Webapp</a>
        </div>
        <div className="collapse navbar-collapse" id="top-navbar-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <span className="li-text">
                Test to be a member of
              </span>
              <a href="https://mcontigo.com/" target="_blank"><strong> MContigo </strong></a>
              <span className="li-text">
                powerful fullstack
              </span>
              <span className="li-social">
                <a href="https://github.com/uraquitanfilho/mejor-api" target="_blank"><i className="fa fa-github"></i></a>
                <a href="https://github.com/uraquitanfilho/mejor-webapp" target="_blank"><i className="fa fa-github"></i></a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
);

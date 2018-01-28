import  '../../common/template/dependencies';

import React from 'react';
import Routes from '../../routes/routes';
import Header from '../../common/template/header';
import Messages from '../../common/msg/messages';
export default props => (
  <div>
    <Header />
    <Routes />
    <Messages />
  </div>

);

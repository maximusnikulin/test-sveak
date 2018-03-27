import React from 'react';
import { withRouter } from 'react-router-dom';

import ClientListWithDataPagintaion from '../containers/ClientListWithDataPagintaion';

const RouteClientList = () => {
  return (
    <div>
      <ClientListWithDataPagintaion/>
    </div>
  );
};

export default withRouter(RouteClientList);
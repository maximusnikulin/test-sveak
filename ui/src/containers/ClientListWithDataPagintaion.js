import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ClientList from '../components/ClientList';
import withPagination from '../hocs/withPagination';
import withData from '../hocs/withData';

import * as actionCreators from '../reducers/clientState/actions';


const mapStateToProps = ({ clientState }) => ({
  values: clientState.clientList,
  loading: clientState.listLoading,
  count: clientState.allCount
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(actionCreators.getClientList())
});  

const Component = withData(withPagination(({ values }) => <ClientList clients={values}/>, 1));


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));

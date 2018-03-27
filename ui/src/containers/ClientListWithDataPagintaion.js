import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ClientList from '../components/ClientList';
import withDataPagination from '../hocs/withDataPagination';

import * as actionCreators from '../reducers/clientState/actions';


const mapStateToProps = ({ clientState }) => ({
  values: clientState.clientList,
  loading: clientState.listLoading,
  count: clientState.allCount
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(actionCreators.getClientList())
});  

const Component = withDataPagination(({ values }) => <ClientList clients={values}/>, 1);


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));

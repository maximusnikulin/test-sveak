import React from 'react';
import { connect } from 'react-redux';

import ClientList from '../components/ClientList';
import withData from '../hocs/withData';

import * as actionCreators from '../reducers/clientState/actions';


const mapStateToProps = ({ clientState }) => ({
  values: clientState.clientList,
  loading: clientState.listLoading  
});

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(actionCreators.getClientList())
});  

const Component = withData(({ values }) => <ClientList clients={values}/>);


export default connect(mapStateToProps, mapDispatchToProps)(Component);

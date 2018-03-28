import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import * as actionCreators from '../reducers/clientState/actions';

import ClientCard from '../components/ClientCard';
import withData from '../hocs/withData';

const Component = withData(({ values }) => <ClientCard client={values}/>);

const mapStateToProps = (state, ownProps) => {  
  const clientId = ownProps.match.params.clientId;
  const hasCard = clientId in state.clientState.clientCards;

  return {
    loading: !hasCard || state.clientState.clientCards[clientId].loading,
    values: hasCard ? state.clientState.clientCards[clientId].data : null,
  };  
};

const mapDispatchToProps = (dispatch, ownProps) => {  
  return {
    getData: () => {      
      dispatch(actionCreators.getClientCard(ownProps.match.params.clientId));
    }
  };  
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Component));
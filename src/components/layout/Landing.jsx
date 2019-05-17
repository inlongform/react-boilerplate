import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { Container, Row } from 'reactstrap';
import Btn from '../common/Btn';

import * as errorActions from '../../redux/actions/errorActions';

const Landing = () => (

  <Container id="main-content">
    <Row>
      <h1 className="display-4" style={{ marginTop: '40px' }}> Landing</h1>
    </Row>
    <Row>
      <Btn title="my Button" />
    </Row>
  </Container>
);

Landing.propTypes = {
  actions: PropTypes.shape({
    loadingError: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchtoProps = dispatch => ({ actions: bindActionCreators(errorActions, dispatch) });

export default connect(
  mapStateToProps,
  mapDispatchtoProps,
)(Landing);

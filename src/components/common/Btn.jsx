import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Btn = (props) => {
  const { title } = props;

  return (
    <Button onClick={() => console.log('hello')}>{title}</Button>
  );
};

Btn.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Btn;

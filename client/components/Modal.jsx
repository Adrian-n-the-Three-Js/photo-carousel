import React from 'react';
import styled from 'styled-components';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Container></Container>;
  }
}

const Container = styled.div`
  background-color: blue;
  border: 1px solid red;
  height: 1000px;
  width: 1000px;
`;

export default Modal;

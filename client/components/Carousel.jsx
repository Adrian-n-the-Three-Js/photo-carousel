import React from 'react';
import styled from 'styled-components';
import ArrowButton from './ArrowButton.jsx';

const Carousel = props => {
  const { photos, currIdx, showPrev, showNext, showModal } = props;
  return photos === undefined
    ? ( // if page is still loading, return blanks
      <Container>
        <ArrowButton direction="right" />
      </Container>
    )
    : (
      <Container>
        <ArrowButton direction="left" onClick={showPrev} idx={currIdx} />
        <ArrowButton direction="right" onClick={showNext} idx={currIdx} length={photos.length} />
        <MainPhoto src={ photos[currIdx].url } onClick={showModal} />
      </Container>
    );
};

const MainPhoto = styled.img`
  width: 609.750px;
  height: 371px;
  cursor: pointer;
  object-fit: contain;
`;

const Container = styled.div`
  position: relative;
  background-color: #101010;
  margin: 0 1px 1px;
  height: 371px;
`;

export default Carousel;

import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Carousel from './Carousel.jsx';
import PhotoMenu from './PhotoMenu.jsx';
import Albums from './Albums.jsx';
import Modal from './Modal.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: {},
      currIdx: 0,
      menuFirstIdx: 0,
      albums: [ 'Loading...', 'Loading...', 'Loading...' ],
      modal: false
    };

    this.showPrev = this.showPrev.bind(this);
    this.showNext = this.showNext.bind(this);
    this.menuClick = this.menuClick.bind(this);
    // this.showModal = this.showModal.bind(this);
  }

  componentDidMount() {
    const splitUrl = window.location.href.split('/');
    const hotelID = splitUrl[splitUrl.length - 1] || '1';

    axios.get(`/api/${hotelID}/photos`)
      .then(res => {
        res.data.photos.forEach((photo, idx) => photo.idx = idx); // assign each photo an idx
        this.setState({ hotel: res.data });
        // console.log('HOTEL:', this.state.hotel);
      })
      .then( () => this.setState({ albums: this.getAlbums() }) );
  }

  static getRandIdx(albums, offLimits) { // doesn't return 0 or 1 ('All photos' & 'Traveler')
    const idx = Math.floor( Math.random() * ((albums.length - 1) - 2) + 2 );
    return !offLimits.includes(albums[idx]) ? idx : App.getRandIdx(albums, offLimits);
  }

  getAlbums() {
    const { hotel } = this.state;
    const albums = hotel.photoAlbums;
    const offLimits = [ 'Favorites' ];
    const secondAlbum = albums[ App.getRandIdx(albums, offLimits) ];

    offLimits.push(secondAlbum);
    return [ albums[1], secondAlbum, albums[App.getRandIdx(albums, offLimits)] ];
  }

  showPrev() {
    const { currIdx } = this.state;
    const newIdx = currIdx - 1;

    if (currIdx % 20 === 0) this.changeSet('left', newIdx);
    else this.setState({ currIdx: newIdx });
  }

  showNext() {
    const { currIdx } = this.state;
    const newIdx = currIdx + 1;

    if (newIdx % 20 === 0) this.changeSet('right', newIdx);
    else this.setState({ currIdx: newIdx });
  }

  changeSet(direction, newIdx) {
    const { menuFirstIdx } = this.state;
    if (direction === 'right') this.setState({ menuFirstIdx: menuFirstIdx + 20, currIdx: newIdx });
    if (direction === 'left') this.setState({ menuFirstIdx: menuFirstIdx - 20, currIdx: newIdx });
  }

  menuClick(e) {
    this.setState({ currIdx: Number(e.target.id) });
  }

  // showModal() {
  //   this.setState({ modal: true });
  // }

  render() {
    const { hotel, currIdx, menuFirstIdx, albums, modal } = this.state;
    // if (modal) return <Modal />;
    return (
      <Background>
        <Outer>
          <Container>
            <Carousel
              photos={hotel.photos}
              currIdx={currIdx}
              showPrev={this.showPrev}
              showNext={this.showNext}
              // showModal={this.showModal}
            />
            <PhotoMenu
              photos={hotel.photos}
              onClick={this.menuClick}
              currIdx={currIdx}
              menuFirstIdx={menuFirstIdx}
            />
          </Container>
          <Albums albums={albums} photos={hotel.photos} />
        </Outer>
      </Background>
    );
  }
}

const Background = styled.div`
  background-color: #F2F2F2;
  height: 1000px;
  width: 100%;
`;

const Outer = styled.div`
  float: right;
  margin: 100px 100px 0 0;
  height: 475px;
`;

const Container = styled.div`
  display: inline-block;
  float: left;
`;

export default App;

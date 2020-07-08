import React, { Component } from 'react';
import styled from 'styled-components';
import Album from './Album.jsx';

class Albums extends Component {
  getUrlsAndCounts() {
    const { albums, photos } = this.props;
    const urls = [];
    const counts = [];

    if (!photos || !albums) return [ '', '', '' ]; // if page isn't loaded yet

    albums.forEach(album => {
      let albumFound = false;
      let count = 0;

      photos.forEach(photo => {
        if ( photo.albums.includes(album) ) {
          if ( !albumFound && !urls.includes(photo.url) ) {
            urls.push(photo.url);
            albumFound = true;
          }
          count++;
        }
      });
      counts.push(count);
    });
    return [ urls, counts ];
  }

  render() {
    const { albums } = this.props;
    const urlsAndCounts = this.getUrlsAndCounts();
    const urls = urlsAndCounts[0];
    const counts = urlsAndCounts[1];
    return (
      <Container>
        <Album albumName={albums[0]} url={urls[0]} count={counts[0]} />
        <Album albumName={albums[1]} url={urls[1]} count={counts[1]} />
        <Album albumName={albums[2]} url={urls[2]} count={counts[2]} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: inline-block;
  width: 179.5px;
  height: 475px;
`;

export default Albums;

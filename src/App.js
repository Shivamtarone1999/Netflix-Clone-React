import React from 'react';
import './App.css';

import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';
function App() {
  return (
    <div className="app">

        {/* Navbar */}
        <Navbar />

        {/* Banner */}
        <Banner />

        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
       
    </div>
  );
}

export default App;

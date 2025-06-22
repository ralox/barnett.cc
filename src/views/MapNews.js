import React, {useEffect} from 'react';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import '../styles/map-news.css';

export default function MapNews() {
  useEffect(() => {
      document.title = "Playground | Barnett UX";
  },[]);
  
  return (
    <section className="page-wrapper">
      <main className="play">
        <div className="intro">
          <h1 class="page-title">Playground</h1>
        </div>

        <div id="embedded-map" style={{width:"80vw",height:"800px"}}>
          <APIProvider apiKey={'AIzaSyClkyPcUznLgbtJIPL6TcP-U3ESKHKreUg'} onLoad={() => console.log('Maps API has loaded.')}>
            <Map
              defaultZoom={13}
              defaultCenter={ { lat: -33.860664, lng: 151.208138 } }>
            </Map>
          </APIProvider>
        </div>
      </main>
    </section>
  );
}
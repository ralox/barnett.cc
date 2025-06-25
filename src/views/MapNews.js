import React, {useEffect, useState, useCallback} from 'react';
import {APIProvider, Map, Marker, InfoWindow} from '@vis.gl/react-google-maps';
import '../styles/map-news.css';

export default function MapNews() {
  // this method requires a refresh and I hate it... I'm leaving it for now
  let darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;

  const [position, setPosition] =  useState({ lat: 40.22, lng: -100.55 });

  /* TO DO...
    [ ] Get current temperature
    [X] Show weather conditions
    [ ] Show weather icon (optional)
    [ ] Current time (optional)
    [X] County, State, City
    [ ] Get local news > regional news > country news
    [ ] Handle complete failure... edge case locations
  */

  const gKey = "AIzaSyClkyPcUznLgbtJIPL6TcP-U3ESKHKreUg";
  const newsKey = "ee107726-d31b-4c1b-969a-63958e4d83b8";

  const [loadingConditions, setLoadingConditions] = useState(true);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [loadingArticle, setLoadingArticle] = useState(true);
  const [error, setError] = useState(null);

  const [conditions, setConditions] = useState(null);
  const [locationDisplay, setLocationDisplay] = useState(null);
  const [locationLocality, setLocationLocality] = useState(null);
  const [locationRegion, setLocationRegion] = useState(null);
  const [locationCountry, setLocationCountry] = useState(null);
  const [locationUri, setLocationUri] = useState(null);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (conditions) {
      console.log(conditions);
    }
  },[conditions]);

  useEffect(() => {
    // run on location update
  },[locationDisplay]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  },[error]);

  const handleMapClick = (e) => {
    const coords = e.detail.latLng;
    if (coords) {
      // hard reset...
      setArticle(null);
      setConditions(null);
      setLocationDisplay(null);
      setLocationLocality(null);
      setLocationRegion(null);
      setLocationCountry(null);

      setPosition(coords);
      getLocation(coords);
      //getConditions(coords);
    }
  }

  const getLocation = (coords) => {
    setLoadingLocation(true);
    let country,region,locality,lowestLevel;
    
    fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?key=" + gKey +
      "&latlng=" + coords.lat + "," + coords.lng +
      "&result_type=country|political"
    )
      .then(response => {
        if (!response.ok) throw new Error('Failed to retrieve geo info');
        return response.json();
      })
      .then(data => {
        console.log(data);
        let displayName = "Here be dragons...";
        let plusCode = data.plus_code.compound_code;

        if (data.status != "ZERO_RESULTS") {

          lowestLevel = data.results[0].address_components[0].long_name;

          // Set the useful lookup components
          data.results.forEach((level) => {
            if (level.types.includes("country")) {
              country = {"long":level.address_components[0].long_name,"short":level.address_components[0].short_name}; 
              setLocationCountry(country);
            } else
            if (level.types.includes("administrative_area_level_1")) {
              region = {"long":level.address_components[0].long_name,"short":level.address_components[0].short_name};
              setLocationRegion(region);
            } else
            if (level.types.includes("locality")) {
              locality = level.address_components[0].long_name;
              setLocationLocality(locality);
            }
          })



          // Set the most accurate display name
          if (plusCode && plusCode.length > 9) {
            displayName = plusCode.slice(9);
          } else {
            displayName = data.results[0].formatted_address;
          }
        }

        setLocationDisplay(displayName);
      })
      .catch(error => setError(error))
      .finally(() => {
        setLoadingLocation(false);
        if (country) {
          getConditions(coords);
          getLocUri(lowestLevel,locality,region,country);
        }
      });
  }

  const getConditions = (coords) => {
    setLoadingConditions(true);

    fetch(
      "https://weather.googleapis.com/v1/currentConditions:lookup?key=" + gKey +
      "&location.latitude=" + coords.lat + 
      "&location.longitude=" + coords.lng
    )
      .then(response => {
        if (!response.ok) throw new Error('Failed to retrieve weather info');
        return response.json();
      })
      .then(data => {
        //any processing on conditions
        setConditions(data);
      })
      .catch(error => setError(error))
      .finally(() => setLoadingConditions(false));
  }

  const getLocUri = (lowestLevel,locality,region,country) => {
    setLoadingArticle(true);
    let locUri = null;
    let searchString;

    if (locality) {
      searchString = locality + " - " + region.long;
    } else if (region && lowestLevel != region.long) {
      searchString = lowestLevel + " - " + region.long;   
    } else {
      searchString = country.long;
    }

    console.log("looking for: " + searchString);

    fetch(
      "https://eventregistry.org/api/v1/suggestLocationsFast?lang=eng&apiKey=" + newsKey +
      "&prefix=" + searchString
    )
      .then(response => {
        if (!response.ok) throw new Error('Failed to get a location URI');
        return response.json();
      })
      .then(data => {
        if (data.length > 0) {
          locUri = data[0].wikiUri;
          setLocationUri(locUri);
        } else {
          console.info("Location doesn't exist on Wikipedia");
        }
      })
      .catch(error => setError(error))
      .finally(() => getArticle(locUri,region,country));
  }

  const getArticle = (locUri,region,country) => {
    fetch(
      "https://eventregistry.org/api/v1/article/getArticles?articlesCount=1&lang=eng&apiKey=" + newsKey +
      "&conceptUri=" + locUri
      //"&locationUri=" + locUri +
    )
      .then(response => {
        if (!response.ok) throw new Error('Failed to get an article');
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (data.articles.totalResults > 0) {
          let article = {
            "date":data.articles.results[0].date,
            "url":data.articles.results[0].news,
            "title":data.articles.results[0].title,
            "body":data.articles.results[0].body,
            "image":data.articles.results[0].image
          }
          setArticle(article);
        }
      })
      .catch(error => setError(error))
      .finally(() => setLoadingArticle(false));
  }
  
    
  useEffect(() => {
      document.title = "Map the News | Playground | Barnett UX";
  },[]);

  return (
    <section className="page-wrapper">
      <main className="map-news">
        <div className="intro">
          <h1 class="page-title">Map the News</h1>
        </div>
        <div className="embedded-map">
          <APIProvider apiKey={'AIzaSyClkyPcUznLgbtJIPL6TcP-U3ESKHKreUg'} onLoad={() => console.log('Maps API has loaded.')}>
            <Map
              defaultZoom={4}
              defaultCenter={position}
              clickableIcons={false}
              colorScheme={darkMode?'DARK':'LIGHT'}
              onClick={handleMapClick}
            >
              <Marker position={position} />
              <InfoWindow position={position} className="news-window"
                headerContent={<h3 className="news-header">news</h3>}
              >
                {locationDisplay ? <p>{locationDisplay}</p> : <></>}
                {conditions ? <p>{conditions.weatherCondition.description.text}</p> : <></> }
                <div className="news-article">
                  {article ? 
                    <div>
                      <p>{article.body}</p>
                    </div>
                    :
                    <p>Hmm, we didn't find anything newsworthy here.</p>
                  }
                </div>
              </InfoWindow>
            </Map>
          </APIProvider>
        </div>
      </main>
    </section>
  );
}
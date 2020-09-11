import React, { useState } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import '../../assets/css/ProfilePlaces.css';
//GOOGLE MAPS SET UP
const GOOGLE_API = process.env.REACT_APP_GOOGLE_API;
const libraries = ['places'];

const mapContainerStyle = {
  width: '100%',
  height: '300px',
};
const ProfilePlaces = ({ places }) => {
  const [selected, setSelected] = useState(null);
  //GOOGLE MAPS
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_API,
    libraries,
  });

  if (loadError) return 'Error Loading Maps';
  if (!isLoaded) return 'Loading Maps';
  if (places.length > 0) {
    const center = {
      lat: places[0].lat,
      lng: places[0].lng,
    };
    return (
      <div id="ProfilePlaces" className="container">
        <div className="row">
          <div className="col-12">
            <h4>Places I play at</h4>
            <div className="row">
              {places.map((place) => (
                <div className="col-6 mb-3">
                  <p className="name">
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    {place.name}
                  </p>
                  <p className="location">{place.location}</p>
                </div>
              ))}
            </div>

            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={10}
              center={center}
            >
              {places.map((item) => (
                <div key={item.id}>
                  <Marker
                    position={{ lat: item.lat, lng: item.lng }}
                    icon={{ anchor: new window.google.maps.Point(15, 15) }}
                    onClick={() => {
                      setSelected(item);
                    }}
                  />
                </div>
              ))}
              {selected ? (
                <InfoWindow
                  position={{ lat: selected.lat, lng: selected.lng }}
                  onCloseClick={() => {
                    setSelected(null);
                  }}
                >
                  <div>
                    <p>{selected.location}</p>
                  </div>
                </InfoWindow>
              ) : null}
            </GoogleMap>
          </div>
        </div>
      </div>
    );
  }
  if (places.length === 0)
    return (
      <div id="ProfilePlaces" className="container">
        <div className="row">
          <div className="col-12">
            <h4>Places I play at</h4>
            <div className="row ">
              <div className="col-12 text-center">
                <h3>This player hasn't updated their locations</h3>
                <img
                  className="mx-auto"
                  src="https://cliply.co/wp-content/uploads/2019/03/371903340_LOCATION_MARKER_400.gif"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfilePlaces;

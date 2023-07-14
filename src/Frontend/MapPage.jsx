import React from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
const MapPage = () => {
    const [directions, setDirections] = React.useState(null);
const [distance, setDistance] = React.useState(null);
const calculateDirections = () => {
    const directionsService = new window.google.maps.DirectionsService();
    const origin = pickupLocation; // Replace with your origin address
    const destination = dropoffLocation; // Replace with your destination address
  
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
          setDistance(result.routes[0].legs[0].distance.text);
        }
      }
    );
  };
  React.useEffect(() => {
    calculateDirections();
  }, []);
  
  return (
    <LoadScript
    googleMapsApiKey="AIzaSyD5BMc9ScpaPKkEOyBFxUuUjWaGqDpMgu0"
    libraries={['geometry', 'places']}
  >
    {directions && (
      <GoogleMap
        // Map configuration options
      >
        <DirectionsRenderer
          directions={directions}
          options={{
            suppressMarkers: true,
          }}
        />
      </GoogleMap>
    )}

    {distance && <p>Distance: {distance}</p>}
  </LoadScript>
  )
}

export default MapPage
import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const markers = [
  {
    title: 'Marker 1',
    description: 'Description 1',
    coordinate: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    title: 'Marker 2',
    description: 'Description 2',
    coordinate: {
      latitude: 37.7892,
      longitude: -122.4322,
    },
  },
  {
    title: 'Marker 3',
    description: 'Description 3',
    coordinate: {
      latitude: 37.7865,
      longitude: -122.4326,
    },
  },
];

const MapScreen = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapRef=useRef();
  const handleMarkerPress = (marker) => {
    setSelectedMarker(marker);
    const { latitude, longitude } = marker.coordinate;
    const region = {
      latitude,
      longitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };
    mapRef.current.animateToRegion(region);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={(ref) => { mapRef.current = ref; }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            onPress={() => handleMarkerPress(marker)}
          />
        ))}
      </MapView>
      {selectedMarker && (
        <View style={styles.infoBox}>
          <Text style={styles.title}>{selectedMarker.title}</Text>
          <Text style={styles.description}>{selectedMarker.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  infoBox: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default MapScreen;
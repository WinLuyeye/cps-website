"use client";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -4.319167,
  lng: 15.3150,
};

const AdresseSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Notre Adresse</h2>
        <p className="mt-4 text-center text-lg text-gray-600">
          01, OUA, Concession Procoki, GB<br />
          Commune de Ngaliema<br />
          Kinshasa, RC Congo
        </p>
        <div className="mt-8">
          <LoadScript googleMapsApiKey="VOTRE_CLÉ_API_GOOGLE_MAPS">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </section>
  );
};

export default AdresseSection;

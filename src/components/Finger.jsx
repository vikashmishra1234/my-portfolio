// Import React and FingerprintJS
import React, { useEffect, useState } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const useFingerprint = () => {
  const [fingerprint, setFingerprint] = useState(null);

  useEffect(() => {
    const getFingerprint = async () => {
      // Check if fingerprint already exists in localStorage
      let storedFingerprint = localStorage.getItem('fingerprint');
      if (!storedFingerprint) {
        // Load FingerprintJS and generate a new fingerprint
        const fp = await FingerprintJS.load();
        const result = await fp.get();
        storedFingerprint = result.visitorId;
        localStorage.setItem('fingerprint', storedFingerprint); // Store it in localStorage
      }
      setFingerprint(storedFingerprint);
    };

    getFingerprint();
  }, []);

  return fingerprint;
};

const Finger = () => {
  const fingerprint = useFingerprint();

  return (
    <div>
      <h1>Browser Fingerprinting in React</h1>
      {fingerprint ? (
        <p>Your unique fingerprint ID is: {fingerprint}</p>
      ) : (
        <p>Generating fingerprint...</p>
      )}
    </div>
  );
};

export default Finger;

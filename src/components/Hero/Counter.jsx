'use client'
import React, { useState, useEffect } from 'react';

const ViewCounter = () => {
  const [views, setViews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Lambda URL from environment variable
  // const lambdaUrl = process.env.NEXT_PUBLIC_LAMBDA_URL;

  // useEffect(() => {
  //   const fetchCounter = async () => {
  //     try {
  //       const response = await fetch(lambdaUrl);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setViews(data.views);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCounter();
  // }, [lambdaUrl]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? ( 
        <p>Error: {error}</p>
      ) : (
        <p>Page Views: {views}</p>
      )}
    </div>
  );
};

export default ViewCounter;

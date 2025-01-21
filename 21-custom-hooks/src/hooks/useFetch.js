import { useEffect, useState, useCallback } from "react";

export const useFetch = (url, interval = null) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch data using a memoized callback to avoid unnecessary re-creation
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null); // Reset error state before making a request
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (!url) return;

    // Fetch data initially
    fetchData();

    // Set up polling if interval is specified
    let intervalId;
    if (interval !== null) {
      intervalId = setInterval(fetchData, interval);
    }

    // Cleanup on component unmount or dependency changes
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [url, interval, fetchData]);

  return { loading, data, error, refetch: fetchData };
};

// ----------------------------------------
// Use -

/* import React, { useState } from "react";
import { useFetch } from "./useFetch";

const App = () => {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");
  const { loading, data, error, refetch } = useFetch(url, 5000);

  return (
    <div>
      <button onClick={refetch}>Refetch Data</button>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/users")}
      >
        Switch URL
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <ul>
          {data.slice(0, 5).map((item) => (
            <li key={item.id}>{item.title || item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
 */

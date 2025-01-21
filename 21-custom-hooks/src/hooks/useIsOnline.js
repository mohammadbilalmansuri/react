import { useEffect, useState } from "react";

const useIsOnline = () => {
  // State to store the online status
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

    // Add event listeners for online and offline events
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  return isOnline;
};

export default useIsOnline;

// ----------------------------------------
// Use -

/* import React from "react";
import useIsOnline from "./useIsOnline";

const App = () => {
  const isOnline = useIsOnline();

  return (
    <div>
      <h1>You are currently {isOnline ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App; */

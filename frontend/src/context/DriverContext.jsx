import { createContext, useState } from "react";

export const DriverDataContext = createContext();

const DriverContext = ({ children }) => {
  const [driver, setDriver] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updatedriver = (driverData) => {
    setDriver(driverData);
  };

  const value = {
    driver,
    setDriver,
    isLoading,
    setIsLoading,
    error,
    setError,
    updatedriver,
  };

  return (
    <DriverDataContext.Provider value={value}>
      {children}
    </DriverDataContext.Provider>
  );
};

export default DriverContext;

import React, { useState, useEffect } from "react";
import BasicStack from "../components/Stack";
import CircularProgress from '@mui/material/CircularProgress';

function Basketball() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "https://www.melivecode.com/api/th/attractions";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div><CircularProgress/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
            <BasicStack data={data}/>
    </div>
  );
}
export default Basketball;

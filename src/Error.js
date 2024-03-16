import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  const errorData=JSON.stringify(error)
  return <div>{errorData}</div>;
};

export default Error;

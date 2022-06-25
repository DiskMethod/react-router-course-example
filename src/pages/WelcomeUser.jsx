import React from "react";
import { useParams } from "react-router-dom";

const WelcomeUser = (props) => {
  const params = useParams();
  return <p>Welcome, {params.user}!</p>;
};

export default WelcomeUser;

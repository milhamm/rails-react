import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <Button onClick={() => history.push("/recipe")}>Move to recipe</Button>
    </div>
  );
};

export default Home;

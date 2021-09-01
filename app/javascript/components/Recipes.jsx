import { Card, List } from "antd";
import React, { useEffect, useState } from "react";
import api from "../libs/api";

const { Meta } = Card;

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    api
      .get("/api/v1/recipes")
      .then((resp) => {
        setRecipes(resp.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className="container">
      <List
        dataSource={recipes}
        grid={{ gutter: 16, column: 3 }}
        renderItem={(item) => (
          <List.Item>
            <Card cover={<img alt={item.name} src={item.image} />}>
              <Meta title={item.name} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Recipes;

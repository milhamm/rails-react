import { Button, Card, List, notification, PageHeader } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../libs/api";

const { Meta } = Card;

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const getRecipes = () => {
    setLoading(true);
    setError(false);
    api
      .get("/recipes")
      .then((resp) => {
        setRecipes(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        notification.error({
          message: "Error",
          description: "An error occured please try again",
        });
      });
  };

  useEffect(() => {
    getRecipes();
    if (history.location.state?.successDeleted) {
      notification.success({
        message: "Successfully Deleted",
      });
    }

    if (history.location.state?.successCreated) {
      notification.success({
        message: "Successfully Created",
      });
    }
  }, []);

  return (
    <div className="container">
      <PageHeader
        title="Recipes"
        extra={
          <Button type="primary" onClick={() => history.push("/recipe/new")}>
            New Recipe
          </Button>
        }
      />
      <List
        dataSource={recipes}
        grid={{ gutter: 16, column: 3 }}
        loading={isLoading}
        renderItem={(item) => (
          <List.Item>
            <Card
              cover={
                <div className="card-cover">
                  <img alt={item.name} src={item.image} />
                </div>
              }
            >
              <Link to={`/recipe/${item.id}`}>
                <Meta title={item.name} />
              </Link>
            </Card>
          </List.Item>
        )}
      />
      {isError ? (
        <Button type="primary" onClick={getRecipes}>
          Try Again
        </Button>
      ) : null}
    </div>
  );
};

export default Recipes;

import { Button, notification, PageHeader, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import api from "../libs/api";

const Recipe = () => {
  const { id } = useParams();
  const history = useHistory();
  const [recipe, setRecipe] = useState(null);
  const [isDeleting, setDeleting] = useState(false);

  const getRecipe = () => {
    api
      .get(`/recipes/${id}`)
      .then((resp) => {
        setRecipe(resp.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleDelete = () => {
    setDeleting(true);
    api
      .delete(`/recipes/${id}`)
      .then(() => {
        setDeleting(false);
        history.push("/recipes", { successDeleted: true });
      })
      .catch((err) => {
        console.log(err.response);
        setDeleting(false);
      });
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div className="container">
      <PageHeader
        onBack={() => history.push("/recipes")}
        subTitle={<Link to="/recipes">Back to recipes</Link>}
        extra={
          <Popconfirm
            title="Are you sure?"
            onConfirm={handleDelete}
            okButtonProps={{ loading: isDeleting }}
          >
            <Button type="ghost" danger size="small">
              Delete
            </Button>
          </Popconfirm>
        }
      />
      <div className="recipe-container">
        <div className="recipe-hero">
          <img src={recipe?.image} alt="" />
        </div>
        <h1>{recipe?.name}</h1>
        <h4>Ingredients</h4>
        <ul>
          {recipe?.ingredients.split(",").map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
        <h4>Instructions</h4>
        <p>{recipe?.instruction}</p>
      </div>
    </div>
  );
};

export default Recipe;

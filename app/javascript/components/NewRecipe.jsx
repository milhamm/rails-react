import { PageHeader, Form, Input, Button, notification } from "antd";
import React from "react";
import { useHistory } from "react-router";
import api from "../libs/api";

const NewRecipe = () => {
  const history = useHistory();

  const onFinish = (data) => {
    api
      .post("/recipes", data)
      .then(() => {
        notification.success({
          message: "Successfully Created",
        });
        history.push("/recipes");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <PageHeader
        title="Create New Recipe"
        onBack={() => history.push("/recipes")}
      />
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input autoComplete="off" placeholder="Enter your recipe name" />
        </Form.Item>
        <Form.Item name="image" label="Image Link">
          <Input autoComplete="off" placeholder="Enter image link (Optional)" />
        </Form.Item>
        <Form.Item
          name="ingredients"
          label="Ingredients"
          rules={[{ required: true }]}
        >
          <Input autoComplete="off" placeholder="Seperate with comma" />
        </Form.Item>
        <Form.Item
          name="instruction"
          label="Instruction"
          rules={[{ required: true }]}
        >
          <Input autoComplete="off" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewRecipe;

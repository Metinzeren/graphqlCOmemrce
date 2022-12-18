import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { COMMENT_MUTATION, GET_USER } from "../services/queries";
import "./Comments.css";
import { Button, Form, Input, message, Select } from "antd";

import Loading from "./Loading";
const { Option } = Select;
const NewComment = ({ products_id }) => {
  const { data, loading: comment_loading, error } = useQuery(GET_USER);
  const [createComment, { loading }] = useMutation(COMMENT_MUTATION);

  const handleSubmit = async (values) => {
    console.log(values, "vaş");
    try {
      await createComment({
        variables: {
          input: { ...values, products_id },
        },
      });
      message.success("yorum alındı");
    } catch (e) {
      message.error("yorum alınamadı");
    }
  };

  if (comment_loading) return <Loading />;
  if (error) return "error";

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Form.Item name="user_id" rules={[{ required: true }]}>
          <Select
            disabled={comment_loading}
            loading={comment_loading}
            placeholder="Select a user"
            allowClear
          >
            {data.users.map((item) => {
              return (
                <Option value={item.id} key={item.id}>
                  {item.fullName}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="text"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input disabled={loading} placeholder="comment" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewComment;

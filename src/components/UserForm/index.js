import React, { useState } from "react";

import { Form, Input, Button, Title } from "./styles";

export const UserForm = ({ onSubmit, title }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: form.email, password: form.password });
  };

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleForm}
        />
        <Input
          placeholder="Contraseña"
          name="password"
          type="password"
          value={form.password}
          onChange={handleForm}
        />
        <Button>{title}</Button>
      </Form>
    </>
  );
};

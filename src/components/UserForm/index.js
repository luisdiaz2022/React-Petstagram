import React, { useState } from "react";

import { Form, Input, Button, Title, Error } from "./styles";

export const UserForm = ({ onSubmit, title, error, disabled }) => {
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
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleForm}
        />
        <Input
          disabled={disabled}
          placeholder="Contraseña"
          name="password"
          type="password"
          value={form.password}
          onChange={handleForm}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};

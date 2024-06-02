import React, { useEffect, useState } from "react";
import { Typography, Modal, FormControl } from "@mui/material";
import { useBookContext } from "../Contexts/BookContext";
import * as Styled from "./styles";

const CreateBook = () => {
  const { openBook, setOpenBook, setBook, editBook, clearBook } =
    useBookContext();

  const [formValid, setFormValid] = useState(false);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [auther, setAuther] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setId(editBook?.id || "");
    setName(editBook?.name || "");
    setAuther(editBook?.auther || "");
    setPrice(editBook?.price || "");

    setOpenBook(editBook ? true : false);
  }, [editBook, setOpenBook]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id,
      name,
      auther,
      price,
    };
    setBook(newBook);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "id":
        setId(value);
        break;
      case "name":
        setName(value);
        break;
      case "auther":
        setAuther(value);
        break;
      case "price":
        setPrice(value);
        break;
      default:
        break;
    }
    validateForm();
  };

  const validateForm = () => {
    const isValid = id !== "" && name !== "" && auther !== "" && price !== "";
    setFormValid(isValid);
  };

  return (
    <Modal open={openBook} onClose={clearBook}>
      <Styled.CreateModalWapper>
        <Typography variant="h6" component="h2">
          Create Book
        </Typography>
        <form
          noValidate
          autoComplete="off"
          method="post"
          onSubmit={handleSubmit}
        >
          <FormControl sx={{ width: "50ch" }}>
            <Styled.TextField
              required
              name="id"
              label="Id"
              variant="outlined"
              size="small"
              type="number"
              value={id}
              onChange={handleInputChange}
            />
            <Styled.TextField
              required
              name="name"
              label="Name"
              variant="outlined"
              size="small"
              value={name}
              onChange={handleInputChange}
            />
            <Styled.TextField
              required
              name="auther"
              label="Auther"
              variant="outlined"
              size="small"
              value={auther}
              onChange={handleInputChange}
            />
            <Styled.TextField
              required
              name="price"
              label="Price"
              variant="outlined"
              size="small"
              type="number"
              value={price}
              onChange={handleInputChange}
            />
            <Styled.Button
              size="small"
              variant="contained"
              color="success"
              type="submit"
              disabled={!formValid}
            >
              Save
            </Styled.Button>
          </FormControl>
        </form>
      </Styled.CreateModalWapper>
    </Modal>
  );
};

export default CreateBook;

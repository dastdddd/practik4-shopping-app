import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import {
  productAll,
  filterDiscountProduct,
  filterCategory,
  searchProduct,
} from "../redux/slices/productSlice";
import category from "../category";

const Header = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchProduct(value));
    setValue("");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => dispatch(productAll())} href="#home">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => dispatch(productAll())} href="#home">
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => dispatch(filterDiscountProduct())}
              href="#link"
            >
              Акции
            </Nav.Link>
            <NavDropdown title="Категории" id="basic-nav-dropdown">
              {category.map((item) => (
                <NavDropdown.Item
                  onClick={() => dispatch(filterCategory(item.id))}
                  key={item.id}
                >
                  {item.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="Search"
          />
          <Button type="submit" variant="outline-primary">Search</Button>
        </form>
      </Container>
    </Navbar>
  );
};

export default Header;

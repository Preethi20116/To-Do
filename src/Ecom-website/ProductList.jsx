// src/components/ProductList.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

const ProductList = () => (
  <Row>
    {products.map((product) => (
      <Col key={product.id} sm={12} md={6} lg={4}>
        <Card>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>Price: ${product.price}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default ProductList;

CREATE TABLE products (
	productname varchar NOT NULL,
	price varchar NOT NULL,
	description varchar NULL,
	id varchar NOT NULL,
	CONSTRAINT products_pk PRIMARY KEY (id)
);

INSERT INTO products
(productname, price, description, id)
VALUES('mesa', '12.99', 'feita de madeira', '1');

INSERT INTO products
(productname, price, description, id)
VALUES('cadeira', '1.22', 'feita de plastico', '2');

INSERT INTO products
(productname, price, description, id)
VALUES('teclado', '5.70', 'aco inox', '3');
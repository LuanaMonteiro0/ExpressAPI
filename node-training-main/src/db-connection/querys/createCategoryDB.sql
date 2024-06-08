CREATE TABLE category (
	name varchar NOT NULL,
	parent_id varchar,
	id varchar NOT NULL,
	CONSTRAINT category_pk PRIMARY KEY (id)
);

INSERT INTO category (name, parent_id, id) values ('Sapato', NULL, '1');

INSERT INTO category (name, parent_id, id) values ('tenis', '1', '2');
INSERT INTO category (name, parent_id, id) values ('adidas', '2', '5');
INSERT INTO category (name, parent_id, id) values ('nike', '2', '6');
INSERT INTO category (name, parent_id, id) values ('air jordan', '6', '7');

INSERT INTO category (name, parent_id, id) values ('sandalia', '1', '3');
INSERT INTO category (name, parent_id, id) values ('chinelo', '3', '4');

select c.name, c.parent_id, ct. name, ct.parent_id from category c inner join category ct on ct.id = c.parent_id



select c.name, c.parent_id from category c inner join category ct on c.id = ct.parent_id where ct.id in (select parent_id from category where ct.id = '7')

--funciona
with recursive parents as (
	select name, parent_id, id 
	from category   
	where id = '7' 
	union 
	select ct.name, ct.parent_id, ct.id 
	from category ct
	inner join parents p on p.parent_id = ct.id)
select * from parents	
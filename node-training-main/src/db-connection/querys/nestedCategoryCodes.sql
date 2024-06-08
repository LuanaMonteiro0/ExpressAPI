CREATE TABLE nestedCategory (
	lft integer not null,
	rgt integer not null,
	name varchar NOT NULL,
	id integer NOT NULL,
	CONSTRAINT nestedCategory_pk PRIMARY KEY (id)
);

create or replace function insertNewEntry(lastEntryId integer, fatherId integer, newEntryName varchar)
returns int  
language plpgsql  
as  
$$ 
declare 
	greater integer;
	newLft integer;
	newRgt integer;
	newId integer;
begin 
	
	if (lastEntryId <= fatherId) then
		select max(rgt) into greater from nestedCategory where id = fatherId;
	else
		select max(lft) into greater from nestedCategory where id = fatherId;
	end if;
	
	newLft = greater + 1;
	newRgt = greater + 2;
	
	UPDATE nestedCategory SET rgt = rgt + 2 WHERE rgt > greater;
	UPDATE nestedCategory SET lft = lft + 2 WHERE lft > greater;
	
	newId = lastEntryId + 1;

	insert into nestedCategory(id, name, lft, rgt) values (newId, newEntryName, newLft, newRgt);

	return 1;
end
$$;


SELECT children.* FROM nestedCategory parent JOIN nestedCategory children ON children.lft BETWEEN parent.lft AND parent.rgt WHERE parent.id = 3;


insert into nestedCategory(id, name, lft, rgt) values (1,'sapato', 1, 4);
insert into nestedCategory(id, name, lft, rgt) values (2,'tenis', 2, 3);
select insertNewEntry(2, 2, 'chinelo');

select * from nestedCategory order by id;
delete from nestedCategory;

select insertNewEntry(3, 2, 'nike');
select insertNewEntry(4, 3, 'havaianas');
select insertNewEntry(5, 5, 'havaianas branca');
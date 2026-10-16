1. Set up an Express project and a new PostgreSQL database.

2. db is a database of military aircrafts and their manufactures.
    each manufacturer has multiple aircrafts, each aircraft belongs to one primary manufacturer.

    each manufacturer has a: 
        id (primary key),
        name,
        industries,
        year it was founded,
        aircrafts,
        total num of aircrafts

    each aircraft has a:
        id (primary key),
        manufacturer_id (foreign key),
        name,
        type,
        status (in service, out of service, etc),
        num built,
        first flight,
        introduction date

3. Set up the routes and controllers.
    
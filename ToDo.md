1. Set up an Express project.

2. set up db. db is a database of military aircrafts and their manufactures.
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
    "Add new aircraft" route and controller
    "Add new manufacturer" route and controller

    "Get aircraft" route and controller
    "Get manufacturer" route and controller

    "Update aircraft" route and controller
    "Update manufacturer" route and controller

    "Remove aircraft" route and controller
    "Remove manufacturer" route and controller

4. Create all of the "READ" views (i.e. view category, and view item).
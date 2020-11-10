/* 
    Given a search criteria object whose values will only be primitives (ints, strings, bools)
    and a list of objects,
    return any object that matches all the key value pairs in the search criteria object
    Bonus: write a 2nd solution using build in methods to practice functional programming

    EXAMPLE INPUTS/OUTPUT
    const collection = [
        { firstName: "Bob", lastName: "Bobbert", age: 31 },
        { firstName: "John", lastName: "Smith", age: 25 },
        { firstName: "Bob", lastName: "Smith", age: 27 },
        { firstName: "Bob", lastName: "White", age: 31 },
    ];

    const criteria = {
        firstName: "Bob",
        age: 31,
    };
    const expected = [
        { firstName: "Bob", lastName: "Bobbert", age: 31 },
        { firstName: "Bob", lastName: "White", age: 31 },
    ];
*/
function findObjects(criteria, collection) {
    const foundDocuments = []; // output array for our objects

    for (const item of collection) { // iterating through the collection
        let isMatch = true; // we'll assume each thing is going to be a match at first

        for (const key in criteria) { // now, let's loop through the key value pairs

            if (item.hasOwnProperty(key) === false || item[key] !== criteria[key]) { // if the entry doesn't have this key, or the value at that key doesn't match
                isMatch = false; // set isMatch to false
                break; // and break out of the for loop so we don't have to keep checking.
            }
        }

        if (isMatch) { // if, after checking the key value pairs, isMatch is still true
            foundDocuments.push(item); // we'll add it to our output!
        }
    }
    return foundDocuments; // finally, return the output!
}

/* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found
    
    EXAMPLE INPUTS/OUTPUT
    const students = [
        {
            id: 1,
            name: "student1",
            isLateToday: false,
            lateCount: 15,
            redBeltStatus: false,
        },
        {
            id: 2,
            name: "student2",
            isLateToday: false,
            lateCount: 1,
            redBeltStatus: false,
        },
        {
            id: 3,
            name: "student3",
            isLateToday: false,
            lateCount: 0,
            redBeltStatus: false,
        },
    ];

    const id = 3;
    const updateData = { redBeltStatus: true, isLateToday: true };
    const expected = {
        id: 3,
        name: "student3",
        isLateToday: true,
        lateCount: 0,
        redBeltStatus: true,
    };
*/
function findByIdAndUpdate(id, updatedValues, collection) {
    for(const entry in collection) { // loop through our collection
        if(entry.id === id) { // is this the item we're looking for?
            for(const key in updatedValues) { // let's loop through the key value pairs in the update object
                if(entry.hasOwnProperty(key)){ // and if the collection object HAS this key
                    entry[key] = updatedValues[key]; // change the value at that key
                }
            }

            return entry; // and finally, after making the changes, return the object
        }
    }

    return null; // if we didn't find anything with a matching id, return null
}
/* 
    Recreate Object.entries method
    Given an object,
    return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
    Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

let o = {
    name: "Cody",
    email: "sthaller@codingdojo.com"
}

console.log(Object.entries(o));

function entries(obj){

}

/* 
    Given a table name string and an object whose key value pairs represent column names and values for the columns
    return a SQL insert statement string
    Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
    Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods

    SQL insert syntax:

    INSERT INTO tablename (columnname1, columnname2, columname3) VALUES ("value1", "value2", "value3");

    REMEMBER: strings need to be in quotes, numbers are not
*/
function insert(tablename, obj){
    
}
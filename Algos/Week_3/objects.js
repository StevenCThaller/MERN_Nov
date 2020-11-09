/* 
    Recreate Object.entries method
    Given an object,
    return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
    Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

let o = {
    name: "Cody",
    email: "sthaller@codingdojo.com",
    age: 29
}

console.log(Object.entries(o));

function entries(obj){
    const output = []; // our output

    for(const key in obj){ // let's loop through the key value pairs
        if(obj.hasOwnProperty(key)){ // this will be what ignores the key value pairs from the prototype
            output.push([key, obj[key]]); // and add the key and value to the output
        }
    }

    return output;
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
    const kvps = entries(obj); // this is going to make it much easier to go through our keys and values
    let columns = "";
    let values = "";

    for(const kvp of kvps){
        if(columns == ""){ // if columns has not yet been added to
            columns += kvp[0]; // our first column and value won't have a comma before it

            // remember, numbers don't have quotes around them, strings do
            if(isNaN(kvp[1])){ // so if the value is not a number
                values += `"${kvp[1]}"`; // add it with quotes
            } else {
                values += `${kvp[1]}`; // otherwise no quotes
            }
        } else { // but all subsequent columns and values will have commas preceding them
            columns += `, ${kvp[0]}`; // add the column with the comma

            // remember, numbers don't have quotes around them, but strings do
            if(isNaN(kvp[1])){ // so if the value is not a number
                values += `, "${kvp[1]}"`; // ad it with quotes
            } else { 
                values += `, ${kvp[1]}`; // otherwise no quotes
            }
        }
    }


    return `INSERT INTO ${tablename} (${columns}) VALUES (${values});`;
}

console.log(insert("users", o));
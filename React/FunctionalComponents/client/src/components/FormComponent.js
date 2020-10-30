// import React, { useReducer } from 'react'
import React, { useState } from 'react'

// Initialization for the useReducer
// const initialState = {
//     size: "",
//     weight: 0,
//     type: "",
//     color: ""
// }

// function reducer(state, action){
//     return {
//         ...state,
//         [action.type]: action.payload
//     }
// }


const FormComponent = props => {
    // Incorporating the useReducer with state
    // const [pumpkin, setPumpkin] = useReducer(reducer, initialState);

    // const [size, setSize] = useState("");
    // const [weight, setWeight] = useState(0);
    // const [type, setType] = useState("");
    // const [color, setColor] = useState("");


    // Cody's preferred process: step 1 - initialize state
    const [pumpkin, setPumpkin] = useState({
        size: "",
        weight: "",
        type: "",
        color: ""
    });


    // Cody's preferred process: step 3 - build your change handler
    const changeHandler = e => {
        // For useReducer
        // setPumpkin({
        //     type: e.target.name,
        //     payload: e.target.value
        // });
        setPumpkin({
            ...pumpkin,
            [e.target.name]: e.target.value
        })
    }
    


    const submitHandler = e => {
        e.preventDefault();
        console.log(`Size: ${pumpkin.size}`);
        console.log(`Weight: ${pumpkin.weight}`);
        console.log(`Type: ${pumpkin.type}`);
        console.log(`Color: ${pumpkin.color}`);
    }

    return (
        <div>
            {/* Cody's preferred process: step 2 - make the form */}
            <form onSubmit={ submitHandler }>
                <div className="form-group row">
                    <label htmlFor="size" className="col-sm-4">Size: </label>
                                                                    {/* Cody's preferred process: step 4 - attach the handler to the inputs */}
                    <input type="text" name="size" className="col-sm-8 form-control" onChange={ changeHandler }/>
                </div>
                <div className="form-group row">
                    <label htmlFor="weight" className="col-sm-4">Weight: </label>
                    <input type="number" name="weight" className="col-sm-8 form-control" onChange={ changeHandler } />
                </div>
                <div className="form-group row">
                    <label htmlFor="type" className="col-sm-4">Type: </label>
                    <input type="text" name="type" className="col-sm-8 form-control" onChange={ changeHandler }/>
                </div>
                <div className="form-group row">
                    <label htmlFor="color" className="col-sm-4">Color: </label>
                    <input type="text" name="color" className="col-sm-8 form-control" onChange={ changeHandler }/>
                </div>
                <div className="form-group row">
                    <input type="submit" value="Submit Pumpkin!" className="col-sm-4 offset-sm-4 btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default FormComponent

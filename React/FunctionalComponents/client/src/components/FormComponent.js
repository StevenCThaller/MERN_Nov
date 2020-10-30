import React, { useState } from 'react'

const FormComponent = props => {
    const [size, setSize] = useState("");
    const [weight, setWeight] = useState(0);
    const [type, setType] = useState("");
    const [color, setColor] = useState("");

    // const [pumpkin, setPumpkin] = useState({
    //     size: "",
    //     weight: "",
    //     type: "",
    //     color: ""
    // })

    


    const submitHandler = e => {
        e.preventDefault();
        console.log(`Size: ${size}`);
        console.log(`Weight: ${weight}`);
        console.log(`Type: ${type}`);
        console.log(`Color: ${color}`);
    }

    return (
        <div>
            <form onSubmit={ submitHandler }>
                <div className="form-group row">
                    <label htmlFor="size" className="col-sm-4">Size: </label>
                    <input type="text" name="size" className="col-sm-8 form-control" onChange={ e => setSize(e.target.value) } value={size}/>
                </div>
                <div className="form-group row">
                    <label htmlFor="weight" className="col-sm-4">Weight: </label>
                    <input type="number" name="weight" className="col-sm-8 form-control" onChange={ e => setWeight(e.target.value) } />
                </div>
                <div className="form-group row">
                    <label htmlFor="type" className="col-sm-4">Type: </label>
                    <input type="text" name="type" className="col-sm-8 form-control" onChange={ e => setType(e.target.value) }/>
                </div>
                <div className="form-group row">
                    <label htmlFor="color" className="col-sm-4">Color: </label>
                    <input type="text" name="color" className="col-sm-8 form-control" onChange={ e => setColor(e.target.value) }/>
                </div>
                <div className="form-group row">
                    <input type="submit" value="Submit Pumpkin!" className="col-sm-4 offset-sm-4 btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default FormComponent

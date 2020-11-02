import React from 'react'

const Form = props => {
    const { user, submitHandler, changeHandler } = props; // destructure and extract the object and 2 functions from props
    let { name, email } = user; // further destructure and extract the name and email fields of the object from props

    return (
        <form className="col-sm-6" onSubmit={submitHandler}>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-4">Name: </label>
                <input type="text" name="name" className="col-sm-8 form-control" onChange={changeHandler} value={ name }/>
            </div>
            <div className="form-group row">
                <label htmlFor="email" className="col-sm-4">Email: </label>
                <input type="text" name="email"  className="col-sm-8 form-control" onChange={changeHandler} value={ email }/>
            </div>
            <div className="form-group row">
                <input type="submit" value="Submit" className="col-sm-4 offset-sm-4 btn btn-primary"/>
            </div>
        </form>
    )
}

export default Form

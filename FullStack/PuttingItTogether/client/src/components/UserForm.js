import React from 'react'

const UserForm = props => {
    const { user, errors, changeHandler, submitHandler, action } = props;
    return (
        <form onSubmit={submitHandler}>
            <div className="row form-group">
                {
                    errors.name ?
                    <span className="col-sm-8 offset-sm-4 text-danger">{errors.name.message}</span>
                    : ''
                }
                <label htmlFor="name" className="col-sm-4">Name: </label>
                <input type="text" name="name" className="col-sm-8 form-control" onChange={changeHandler} value={user.name}/>
            </div>
            <div className="row form-group">
                {
                    errors.age ?
                    <span className="col-sm-8 offset-sm-4 text-danger">{errors.age.message}</span>
                    : 
                    ''
                }
                <label htmlFor="age" className="col-sm-4">Age: </label>
                <input type="number" name="age" className="col-sm-8 form-control" onChange={changeHandler} value={user.age}/>
            </div>
            <div className="row form-group">
                <input type="submit" value={action} className="col offset-sm-4 btn btn-primary"/>
            </div>
        </form>
    )
}

export default UserForm

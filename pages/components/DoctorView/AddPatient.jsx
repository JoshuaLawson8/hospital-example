import React from 'react';

function AddPatient(props) {
    return (
        <div>
        <form>
            <div>
                <label></label>
                <input type='text'></input>
            </div>
            <div className="form-control">
                <label>Password</label>
                <input type='text'></input>
            </div>
            <div className="form-control button-spacer">
                <input className='button' type="button" value="Log in"/>
            </div>
        </form>
            
        </div>
    );
}

export default AddPatient;
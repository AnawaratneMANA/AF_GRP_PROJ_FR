import  React from 'react';

const UploadFrom = () => {

    const changeHandler = () => {
        console.log("change");
    }

    return (
        <form>
            <input type="file" onChange={changeHandler}/>
        </form>
    )
}

export default UploadFrom();

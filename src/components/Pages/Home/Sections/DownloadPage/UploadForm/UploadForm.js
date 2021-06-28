import  React from 'react';

const UploadFrom = () => {

    const changeHandler = () => {
        console.log("change");
    }

    return (
        <form>
            <h1>Upload Form</h1>
            <input type="file" onChange={changeHandler}/>
        </form>
    )
}

export default UploadFrom;

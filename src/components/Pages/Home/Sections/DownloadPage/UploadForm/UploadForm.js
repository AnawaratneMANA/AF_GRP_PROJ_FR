import React, {useState} from 'react';

const UploadFrom = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = [
        'image/png',
        "image/jpeg",
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)){
            console.log(selected)
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError("Selected the Correct Type of File");
        }
    }

    return (
        <form>
            <h1>Upload Form</h1>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className="file error">{error}</div>}
                {file && <div className="file file-name">{file.name}</div>}
            </div>
        </form>
    )
}

export default UploadFrom;

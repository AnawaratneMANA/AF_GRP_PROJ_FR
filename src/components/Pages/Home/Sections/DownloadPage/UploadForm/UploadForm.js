import React, {useState} from 'react';
import ProgressBar from "../../../../../../Firebase/progressBar";
// import './UploadForm.css'
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
            <div className="file-input">
            <input size="60" name="file" type="file" className="file-input-selector" onChange={changeHandler}/>
            <label for="file"> Choose File To Upload </label>
            </div>
            <div className="output">
                {error && <div className="file error">{error}</div>}
                {file && <div className="file file-name">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/> }
            </div>
        </form>
    )
}

export default UploadFrom;

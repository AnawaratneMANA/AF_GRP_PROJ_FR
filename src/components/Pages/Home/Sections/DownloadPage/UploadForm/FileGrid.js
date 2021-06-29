import React  from "react";
import useFirestore from "../../../../../../Firebase/useFirestore";

const FileGrid = () => {

    const { docs } = useFirestore('images');
    console.log(docs);

        return (
            <div className="file-grid">
                {docs && docs.map(doc => (
                    <table>
                    <div className="file-wrap" key={doc.id}>
                        {/*<img src={doc.url} alt="uploaded file"/>*/}
                        <tr>
                            <td>{doc.url}</td>
                            <td>{doc.name}</td>
                        </tr>
                    </div>
                    </table>
                ))}
            </div>
        )
}

export default FileGrid;

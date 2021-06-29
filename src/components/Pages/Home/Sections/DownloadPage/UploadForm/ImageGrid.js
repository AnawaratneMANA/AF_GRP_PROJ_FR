import {Title} from "@devexpress/dx-react-chart";
import UploadForm from "./UploadForm";
import useFirestore from "../../../../../../Firebase/useFirestore";

function ImageGrid() {
    const ImageGrid = () => {
        return (
            <div className="file-grid">
                <Title/>
                <UploadForm/>
                <ImageGrid/>
            </div>
        )
    }
}

export default ImageGrid;

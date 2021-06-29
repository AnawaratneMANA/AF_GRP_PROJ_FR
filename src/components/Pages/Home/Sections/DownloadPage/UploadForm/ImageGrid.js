import {Title} from "@devexpress/dx-react-chart";
import UploadForm from "./UploadForm";

function ImageGrid() {
    const ImageGrid = () => {
        return (
            <div className="file-attachment">
                <Title/>
                <UploadForm/>
                <ImageGrid/>
            </div>
        )
    }
}

export default ImageGrid;

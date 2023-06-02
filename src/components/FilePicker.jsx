import react from "react";
import {CustomButton} from "./index.js";


const FilePicker = ({file, setFile, readFile}) => {
    return(
        <div className="filepicker-container">
            <div className="flex flex-1 flex-col">
                <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="file-upload" className="filepicker-label">
                    Subir Archivo
                </label>
                <p className="mt-2 text-gray-500 text-xs truncate">
                    {file === 0 ? "Ningún archivo seleccionado" : file.name}
                </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
                <CustomButton
                type="outline"
                title="Logo"
                handleClick={() => readFile('logo')}
                customStyles="text-xs"
                />
                <CustomButton
                    type="filled"
                    title="Full"
                    handleClick={() => readFile('full')}
                    customStyles="text-xs"
                />

            </div>
        </div>
    )
}
export default FilePicker
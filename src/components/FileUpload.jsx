import React, { useState } from 'react'

import "../styles.css";

function FileUpload(){
    const [files, setFiles] = useState([])

    const handleDrop = (event) => {
        event.preventDefault();
        const { files } = event.dataTransfer;
        if (files.length > 0) {
          setFiles([...files]);
        }
      };

    const handleDragOver = (event) => {
        event.preventDefault()

    }

    const handleDragStart = (event) => {
        event.dataTransfer.setData("text/plain", event.target.id)
    }

    return (
        <div>

            <h4 className="book-upload">Select a manifest that you'd like to import</h4>

            <div className="d-flex justify-content-center align-content-center file-upload">

                <div>
                    <div className="file-upload-area m-10" onDragOver={handleDragOver} onDrop={handleDrop} >
                        <p className="drag-drop">Drag & Drop Here Or Browse</p>

                        <div className="card-body d-flex align-items-center justify-content-center m-2 scan-div" style={{ minHeight: "372px" }} draggable = "true" onDragStart={handleDragStart}>
                            <div className='file-upload-div'>
                            <ul>
                                {files.map((file, index) => (
                                <li key={index}>{file.name}</li>
                                ))}
                            </ul>
                                <button class="card-title drag-drop">Upload Manifest</button>
                                <div className="d-flex align-items-center justify-content-center" >
                                  <h5 className="upload">Progress</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default FileUpload
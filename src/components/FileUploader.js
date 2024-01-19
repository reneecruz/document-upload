import React from "react";
import "../styles.css";

const FileUploader = () => (
  <div>
    {/* <h2>File Uploader</h2> */}
    {/* <label for="pet-select">Choose a pet:</label> */}
    <select name="fileUploader" id="fileuploader">
      <option value="">Select a manifest that you'd like to import</option>
    </select>
  </div>
);

export default FileUploader;

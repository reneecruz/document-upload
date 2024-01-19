import "./styles.css";
import React from "react";

import Form from "./components/Form.js";
import FileUploader from "./components/FileUploader.js";

export default function App() {
  const onUpload = (files) => {
    console.log(files);
  };

  return (
    <div>
      <h2>Document Upload</h2>
      <Form onUpload={onUpload} />
      <FileUploader onUpload={onUpload} />
    </div>
  );
}


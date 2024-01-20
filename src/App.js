import "./styles.css";
import React from "react";

import Form from "./components/Form.jsx";

export default function App() {
  const onUpload = (files) => {
    console.log(files);
  };

  return (
    <div>

     <div>

    <header> 
       <h2>Document Upload</h2>
            <hr style={{ color: "grey" }} />
                      </header>
      </div>
      <Form onUpload={onUpload} />
    </div>
  );
}


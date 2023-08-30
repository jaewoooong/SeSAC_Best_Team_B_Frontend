// UploadComponent.tsx

import React, { useState } from "react";
import axios from "axios";
import "./UploadComponent.css";

const UploadComponent: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [text, setText] = useState<string>("");

  const onUpload = async () => {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    formData.append("text", text);

    try {
      const response = await axios.post(
        "http://localhost:3001/upload",
        formData
      );
      console.log("Uploaded successfully:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
      />
      <textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>
      <button onClick={onUpload}>Upload</button>
    </div>
  );
};

export default UploadComponent;

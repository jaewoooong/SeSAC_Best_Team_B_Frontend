import React, { useState } from 'react';
import axios from 'axios';
import './UploadComponent.css';

const UploadComponent: React.FC = () => {
    const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
    const [text, setText] = useState<string>("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFiles(e.target.files);
    }

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedFiles) return;

        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('images', selectedFiles[i]);
        }
        formData.append('text', text);

        try {
            const response = await axios.post('/upload', formData);
            console.log('Upload success:', response.data);
        } catch (error) {
            console.error('Error uploading:', error);
        }
    }

    return (
        <div className="upload-container">
            <form onSubmit={handleSubmit}>
                <input type="file" multiple onChange={handleFileChange} />
                <textarea onChange={handleTextChange} value={text}></textarea>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadComponent;
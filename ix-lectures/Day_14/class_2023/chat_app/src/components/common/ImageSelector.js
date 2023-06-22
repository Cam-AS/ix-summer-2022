import React, { useRef, useState } from 'react';

export default function ImageSelector({ title, onFileChange }) {
  // persist values between renders
  // can be used to store a mutable value that does not cause a re-render when updated
  const inputRef = useRef(null);
  // { current: null}
  const [fileContent, setFileContent] = useState('');

  function onFileSelected(e) {
    let file = null;

    if (e.target.files.length) {
      file = e.target.files[0];

      const fileReader = new FileReader();

      fileReader.onload = (res) => {
        // get result of file read
        setFileContent(res.target.result);
      };
      fileReader.readAsDataURL(file);
    }

    onFileChange(file);
  }

  return (
    <div className="mb-3">
      <label className="form-label">{title}</label>
      <input
        ref={inputRef}
        onChange={onFileSelected}
        type="file"
        className="form-control"
        style={{ display: 'none' }}
      />

      {fileContent ? (
        <div className="text-center mb-3">
          <img
            style={{
              width: '200px',
              height: '250px',
              objectFit: 'cover',
            }}
            src={fileContent}
            alt="selected file"
          />
        </div>
      ) : (
        <></>
      )}

      <div className="text-center">
        <button
          type="button"
          onClick={() => {
            console.log(inputRef.current);
            // Now it's like we're clicking the previous input to select a file
            inputRef.current.click();
          }}
          className="btn btn-success"
        >
          Select Image
        </button>
      </div>
    </div>
  );
}

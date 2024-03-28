"use client";

import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const ImageUpload = ({ sendImage }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    sendImage(file);
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="w-full md:w-40 lg:w-60">
      <label
        htmlFor="img-upload"
        className="mb-2 text-primary font-medium block"
      >
        Select an image:
      </label>
      {image ? (
        <div className="relative">
          <Image
            src={image}
            alt="Uploaded"
            className="w-full h-auto"
            width={500}
            height={500}
          />
          <button
            onClick={handleRemoveImage}
            className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ) : (
        <>
          <input
            id="img-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border border-gray-300 p-2 w-full"
          />
        </>
      )}
    </div>
  );
};

export default ImageUpload;

"use client";

import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { Button } from "../components/ui/button";
import useAxios from "../../hooks/useAxios";
import axios from "axios";

const key = "0a920f43304618f2c50375cd043a81c2";

const Editor = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const postAxios = useAxios();

  // const handleEditorChange = (html) => {
  //   setContent(html);
  // };

  console.log({ title, image, content });

  const handlePost = async () => {
    if (title.length === 0 || content.length === 0) return;
    let photo;
    if (!image) {
      photo = null;
    } else {
      const formData = new FormData();
      formData.append("image", image);
      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${key}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          const imageUrl = response.data.data.url;
          photo = imageUrl;
          console.log("Image uploaded successfully:", imageUrl);
        } else {
          console.error("Image upload failed:", response.statusText);
        }
      } catch (error) {
        photo = null;
        console.error("Error uploading image:", error.message);
      }
    }
    const postData = {
      title,
      image: photo,
      content,
    };
    console.log(postData);
    postAxios
      .post(`/post`, postData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        return console.log(error.code);
      });
  };

  return (
    <div className="bg-white rounded-md p-5">
      <div className="flex flex-col md:flex-row my-5 gap-5">
        <div className="flex-1">
          <label
            htmlFor="title"
            className="mb-2 text-primary font-medium block"
          >
            Post title:
          </label>
          <input
            id="title"
            type="text"
            placeholder="Type posts title..."
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 p-2 w-full outline-none text-xl font-semibold placeholder:font-normal mb-4"
          />
          <label
            htmlFor="title"
            className="mb-2 text-primary font-medium block"
          >
            Post description:
          </label>
          <textarea
            name="content"
            className="border border-gray-300 p-2 w-full outline-none"
            id=""
            placeholder="Write your posts content"
            rows="5"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <ImageUpload sendImage={setImage} />
      </div>
      <h2 className="mb-2 text-primary font-medium">Write your post:</h2>
      <div className="mb-5">
        {/* <QuillEditor value={content} onChange={handleEditorChange} /> */}
      </div>
      <div onClick={handlePost}>
        <Button
          className="border-red-2 text-red-2 rounded-none hover:bg-red-2 hover:text-white"
          variant="outline"
        >
          Publish
        </Button>
      </div>
    </div>
  );
};

export default Editor;

// const QuillEditor = ({ value, onChange }) => {
//   const [editorHtml, setEditorHtml] = useState(value);

//   const handleChange = (html) => {
//     setEditorHtml(html);
//     if (onChange) {
//       onChange(html);
//     }
//   };

//   return (
//     <ReactQuill
//       theme="snow" // Specify Quill theme
//       value={editorHtml}
//       onChange={handleChange}
//       placeholder="Write something..."
//       height="400px"
//     />
//   );
// };

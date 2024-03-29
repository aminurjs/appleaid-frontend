import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [data, setData] = useState([]);
  const axios = useAxios();
  const { id } = useParams();
  useEffect(() => {
    axios.get(`/post/${id}`).then((res) => setData(res.data));
  }, [axios, id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { image, title, content, htmlContent } = data;
  return (
    <div className="max-w-screen-md mx-auto pt-5 pb-16 px-5">
      {image && (
        <img
          className="rounded mb-6 aspect-video object-cover"
          src={image}
          alt=""
          width={1000}
          height={800}
        />
      )}
      <h3 className="mb-4 font-semibold text-dark-01  text-2xl pb-2 border-b border-gray-300">
        {title}
      </h3>
      {htmlContent ? (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <p className="leading-normal text-dark-02 mb-4">{content}</p>
      )}
    </div>
  );
};

export default PostDetails;

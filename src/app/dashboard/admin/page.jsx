import useAxios from "@/hooks/useAxios";
import { FilePenLine, LogIn, Mails, Smile, Trash2, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const analytics = [
  {
    id: 1,
    title: "Monthly Visitors",
    icon: <Users />,
    value: 5000,
  },
  {
    id: 2,
    title: "New Users",
    icon: <LogIn />,
    value: 200,
  },
  {
    id: 3,
    title: "Happy Clients",
    icon: <Smile />,
    value: 95,
  },
  {
    id: 4,
    title: "Emails Received",
    icon: <Mails />,
    value: 100,
  },
];

const AdminDashboard = () => {
  const [data, setData] = useState([]);
  const axios = useAxios();
  // const data = await dataFetching("http://localhost:5000/api/all-posts");
  useEffect(() => {
    axios.get("/all-posts").then((res) => setData(res.data));
  }, [axios]);
  return (
    <div className="p-5">
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
        {analytics.map((item) => (
          <div
            className="bg-white border border-gray-100 flex items-center  gap-3 shadow p-5"
            key={item.id}
          >
            <span>{item.icon}</span>
            <p>
              {item.title} <br /> {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white p-5">
        <h1 className="text-xl font-semibold text-primary">Posts:</h1>
        {data.map((item, i) => (
          <div
            className="flex gap-3 py-1 bg-gray-100 my-1 px-3"
            key={item?._id}
          >
            <span>{i + 1}.</span>
            <Link
              className="font-medium hover:underline"
              to={`/post/${item._id}`}
            >
              {item?.title}
            </Link>
            <div className="flex-grow flex justify-end gap-3">
              <button className="text-blue-500">
                <FilePenLine width={16} />
              </button>
              <button className="text-red-500">
                <Trash2 width={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

import { dataFetching } from "@/lib/utils";
import { LogIn, Mails, Smile, Users } from "lucide-react";
import Link from "next/link";
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

const AdminDashboard = async () => {
  const data = await dataFetching("http://localhost:5000/api/all-posts");
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
          <div className="flex gap-3 py-1" key={item?._id}>
            <span>{i + 1}.</span>
            <Link
              className="font-medium hover:underline"
              href={`/post/${item._id}`}
            >
              {item?.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

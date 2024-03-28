import { dataFetching } from "@/lib/utils";
import Card from "./Card";

const FeaturedPosts = async () => {
  const data = await dataFetching("http://localhost:5000/api/all-posts");

  return (
    <section className="max-w-screen-xl mx-auto px-5 md:px-10 py-12">
      <div className="bg-base-200 py-20 px-5">
        <h1 className=" text-red-2 text-4xl font-semibold  mb-5 text-center">
          Latest Posts
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.slice(0, 6).map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;

import {
  Code2,
  PenTool,
  Megaphone,
  Video,
  Palette,
  Smartphone,
} from "lucide-react";

const categories = [
  {
    icon: <Code2 size={40} />,
    title: "Web Development",
    desc: "Build websites and web applications.",
  },
  {
    icon: <Palette size={40} />,
    title: "Graphic Design",
    desc: "Create logos, banners and social creatives.",
  },
  {
    icon: <PenTool size={40} />,
    title: "Content Writing",
    desc: "Write blogs, articles and website content.",
  },
  {
    icon: <Megaphone size={40} />,
    title: "Digital Marketing",
    desc: "Help brands grow online.",
  },
  {
    icon: <Video size={40} />,
    title: "Video Editing",
    desc: "Edit reels, shorts and promotional videos.",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Social Media",
    desc: "Manage and grow social media accounts.",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Explore Project Categories
          </h2>

          <p className="text-gray-600 mt-3">
            Find projects that match your skills and interests.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-violet-600 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
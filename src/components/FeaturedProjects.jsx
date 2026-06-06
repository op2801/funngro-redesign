const projects = [
  {
    title: "Landing Page Design",
    reward: "₹3,000",
  },
  {
    title: "Social Media Campaign",
    reward: "₹5,000",
  },
  {
    title: "Website Development",
    reward: "₹10,000",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 text-violet-600 font-bold text-xl">
                {project.reward}
              </p>

              <button className="mt-6 bg-violet-600 text-white px-5 py-2 rounded-lg">
                Apply Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
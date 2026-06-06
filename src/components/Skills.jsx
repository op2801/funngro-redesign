const skills = [
  "Web Development",
  "Graphic Design",
  "Content Writing",
  "Digital Marketing",
  "Video Editing",
  "Social Media Management",
];

const Skills = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills You Can Monetize
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-2xl shadow-lg text-center"
            >
              <h3 className="font-semibold text-xl">
                {skill}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
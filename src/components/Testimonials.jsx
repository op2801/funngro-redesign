const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Frontend Developer",
    text: "Funngro helped me gain real experience and earn money while studying.",
  },
  {
    name: "Priya Verma",
    role: "Content Writer",
    text: "I completed multiple projects and built a strong portfolio.",
  },
  {
    name: "Aman Patel",
    role: "Graphic Designer",
    text: "The platform gave me confidence to work with real clients.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Success Stories
          </h2>

          <p className="text-gray-600 mt-3">
            Hear from students who started their journey with Funngro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="text-gray-600 mb-6">
                "{item.text}"
              </p>

              <h3 className="font-bold">
                {item.name}
              </h3>

              <span className="text-sm text-gray-500">
                {item.role}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
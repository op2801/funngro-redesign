const TeenTestimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Teen Success Stories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow">
            <p>
              "I earned my first ₹10,000 while still in college."
            </p>

            <h4 className="mt-5 font-bold">
              Rahul Sharma
            </h4>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <p>
              "Funngro helped me build a professional portfolio."
            </p>

            <h4 className="mt-5 font-bold">
              Priya Verma
            </h4>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <p>
              "Working with real companies boosted my confidence."
            </p>

            <h4 className="mt-5 font-bold">
              Aman Patel
            </h4>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TeenTestimonials;
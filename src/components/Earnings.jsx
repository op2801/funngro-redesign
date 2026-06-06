const Earnings = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-4xl font-bold text-violet-600">
              ₹5K+
            </h3>
            <p className="mt-3 text-gray-600">
              Beginner Monthly Earnings
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-4xl font-bold text-violet-600">
              ₹15K+
            </h3>
            <p className="mt-3 text-gray-600">
              Intermediate Earnings
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-4xl font-bold text-violet-600">
              ₹30K+
            </h3>
            <p className="mt-3 text-gray-600">
              Advanced Teenlancers
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Earnings;
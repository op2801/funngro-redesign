
const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium">
            India's #1 Teen Freelancing Platform
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Earn While
            <span className="text-indigo-600"> You Learn</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Work on real company projects, build your portfolio,
            gain experience and start earning as a student.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700">
              Start Earning
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100">
              Explore Projects
            </button>
          </div>

          <div className="flex gap-10 mt-10">
            <div>
              <h3 className="font-bold text-2xl">50K+</h3>
              <p className="text-gray-500">Teenlancers</p>
            </div>

            <div>
              <h3 className="font-bold text-2xl">1000+</h3>
              <p className="text-gray-500">Projects</p>
            </div>

            <div>
              <h3 className="font-bold text-2xl">₹5Cr+</h3>
              <p className="text-gray-500">Earnings</p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="students"
            className="rounded-3xl shadow-xl w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
const Companies = () => {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Adobe",
    "Spotify",
    "Netflix",
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold mb-10">
          Trusted By Leading Companies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow text-center font-semibold"
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Companies;
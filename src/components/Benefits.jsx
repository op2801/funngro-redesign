import {
  IndianRupee,
  Briefcase,
  Award,
  Rocket,
} from "lucide-react";

const benefits = [
  {
    icon: <IndianRupee size={40} />,
    title: "Earn Real Money",
    desc: "Get paid for completing real company projects.",
  },
  {
    icon: <Briefcase size={40} />,
    title: "Build Portfolio",
    desc: "Create a strong portfolio before college ends.",
  },
  {
    icon: <Award size={40} />,
    title: "Gain Experience",
    desc: "Work on practical projects and improve your skills.",
  },
  {
    icon: <Rocket size={40} />,
    title: "Career Growth",
    desc: "Stand out from other students with industry exposure.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Why Choose Funngro?
          </h2>

          <p className="text-gray-600 mt-3">
            Everything you need to start your professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition"
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

export default Benefits;
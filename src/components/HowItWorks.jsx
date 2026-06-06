import { UserPlus, Search, Briefcase, IndianRupee } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={40} />,
    title: "Create Profile",
    desc: "Sign up and showcase your skills, interests, and portfolio.",
  },
  {
    icon: <Search size={40} />,
    title: "Find Projects",
    desc: "Explore exciting projects from real companies.",
  },
  {
    icon: <Briefcase size={40} />,
    title: "Work & Learn",
    desc: "Complete tasks while gaining real-world experience.",
  },
  {
    icon: <IndianRupee size={40} />,
    title: "Get Paid",
    desc: "Receive payments directly for your completed projects.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            How Funngro Works
          </h2>
          <p className="text-gray-600 mt-3">
            Start earning in just 4 simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <div className="text-violet-600 flex justify-center mb-4">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
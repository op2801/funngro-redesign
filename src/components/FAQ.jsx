const faqs = [
  {
    question: "Who can join Funngro?",
    answer:
      "Any student who wants to gain experience and earn money can join Funngro.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No. Many beginner-friendly projects are available for students.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Payments are released after successful project completion.",
  },
  {
    question: "What kind of projects are available?",
    answer:
      "Web development, content writing, design, marketing, and more.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6"
            >
              <h3 className="font-semibold text-lg">
                {faq.question}
              </h3>

              <p className="text-gray-600 mt-2">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
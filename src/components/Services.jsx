import ServiceCard from "./ServiceCard";
import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "We build responsive and modern websites using the latest technologies.",
    icon: <FaCode />
  },
  {
    title: "Mobile Apps",
    description: "iOS and Android apps tailored to your needs with smooth performance.",
    icon: <FaMobileAlt />
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and functional designs for websites and apps.",
    icon: <FaPaintBrush />
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

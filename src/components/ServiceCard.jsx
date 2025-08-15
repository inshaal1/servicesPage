
const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
      <div className="text-6xl mb-6 text-blue-600">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;

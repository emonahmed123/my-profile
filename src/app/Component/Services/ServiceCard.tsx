/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Service.css";
const ServiceCard = ({ service }: any) => {
  const { title, description, icon } = service;
  return (
    <div>
      <div className="serviceCard border px-8 border-purple-400 ">
        <div className="text-left ">
          <p className="text-5xl  text-white ">{icon}</p>
          <h2 className="font-bold  text-white text-xl lg:text-2xl my-4">
            {title}
          </h2>
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

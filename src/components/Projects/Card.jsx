import { motion } from "framer-motion";



const Card = ({ image, title, discription, link1, link2 }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
      whileHover={{ y: -5 }}
    >
      <div id="projects" className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#c07107] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-[#9b5808]">{title}</h3>
          <p className="text-lg text-[#6b3d05] mb-4">{discription}</p>
        </div>
        <div className="flex justify-between mt-4">
          <a
            href={link1}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#deb887] text-[#6b3d05] px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#c07107] hover:text-white transition-colors duration-300"
          >
            Live Demo
          </a>
          <a
            href={link2}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9b5808] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#6b3d05] transition-colors duration-300"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;


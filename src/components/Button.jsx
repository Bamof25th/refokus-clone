import { IoIosReturnRight } from "react-icons/io";
import { motion } from "framer-motion";

function Button({ title = "Get Started" }) {
  return (
    <>
      <div className="w-fit px-4 py-2 bg-zinc-100 text-black rounded-full cursor-pointer">
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          whileHover={{
            y: [-20, 0, 20],
            opacity: [0, 1, 0],
            transition: { duration: 0.8, repeat: Infinity },
          }}
          className="h-fit w-full font-medium flex items-center justify-between "
        >
          {title}
          <IoIosReturnRight />
        </motion.div>
      </div>
    </>
  );
}

export default Button;

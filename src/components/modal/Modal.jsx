import closeIcon from "../../assets/close.svg";
import { motion } from "framer-motion";

export default function ModalWindow({
  termRU,
  meanRU,
  termEN,
  meanEN,
  closeModal,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="min-w-[300px] max-w-[800px] relative">
        <div className="flex flex-col gap-[2px]">
          <div className="shadow-lg rounded-lg py-1 px-3 mb-2">
            <h2 className="italic">English</h2>
            <h3 className="text-[14px] font-sans font-bold italic">{termEN}</h3>
            <h4>{meanEN}</h4>
          </div>
          <div className="shadow-lg rounded-lg py-1 px-3 mb-2">
            <h2 className="italic">Русский</h2>
            <h3 className="text-[14px] font-sans font-bold italic">{termRU}</h3>
            <h4>{meanRU}</h4>
          </div>
        </div>
        <button className="absolute top-0 right-0" onClick={closeModal}>
          <img src={closeIcon} alt="" />
        </button>
      </div>
    </motion.div>
  );
}

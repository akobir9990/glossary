import { Container } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../../assets/glossaries.png";

export default function AboutApp() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex my-10  rounded-sm shadow-lg px-4 py-3 gap-3"
      >
        <img src={logo} alt="" className="w-[200px] rounded-md" />
        <div className="text-[20px]">
          <h4 className="text-[30px] font-black my-2">
            Приложение «Глоссарии»
          </h4>
          <p>
            Эта программа создана для облегчения процесса изучения терминов,
            часто используемых по предмету, или процесса повторения знаний.
          </p>
        </div>
      </motion.div>
    </Container>
  );
}

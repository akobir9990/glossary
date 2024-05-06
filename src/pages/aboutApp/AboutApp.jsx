import { Container } from "@mui/material";
import { motion } from "framer-motion";
import logo from "../../assets/glossaries.png";
import { useTranslation } from "react-i18next";

export default function AboutApp() {
  const { t } = useTranslation();
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex my-10 rounded-sm shadow-lg px-4 py-3 gap-3 flex-col sm:flex-row"
      >
        <img src={logo} alt="" className="w-[200px] rounded-md" />
        <div className="text-[20px]">
          <h4 className="text-[30px] font-black my-2">
            {t("aboutProgramTitle")}
          </h4>
          <p>{t("aboutProgramDescribtion")}</p>
        </div>
      </motion.div>
    </Container>
  );
}

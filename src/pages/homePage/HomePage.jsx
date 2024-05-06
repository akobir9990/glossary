import React from "react";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { CONTENT_PAGE } from "../../router/const";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 50, bottom: 50 }}
        animate={{ opacity: 1, y: 0, bottm: 0 }}
        transition={{ duration: 0.1 }}
      >
        <h1 className="text-[35px]">{t("niceTomeetYou")}</h1>
        <NavLink to={CONTENT_PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            <button className="border border-[teal] py-3 px-5 rounded-lg">
              {t("startBTn")}
            </button>
          </motion.div>
        </NavLink>
      </motion.div>
    </Container>
  );
}

export default HomePage;

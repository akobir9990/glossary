import React from "react";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { CONTENT_PAGE } from "../../router/const";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 50, bottom: 50 }}
        animate={{ opacity: 1, y: 0, bottm: 0 }}
        transition={{ duration: 0.1 }}
      >
        <h1 className="text-[35px]">Добро пожаловать на нашу программу</h1>
        <NavLink to={CONTENT_PAGE}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button className="border border-[teal] py-3 px-5 rounded-lg">
              Начать
            </button>
          </motion.div>
        </NavLink>
      </motion.div>
    </Container>
  );
}

export default HomePage;

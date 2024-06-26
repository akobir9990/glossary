import { Container } from "@mui/material";
import { authInfo } from "../../data/fakeData";
import AuthItem from "../../components/authItem/AuthItem";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AuthPage() {
  const { t } = useTranslation();
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-[36px] font-bold text-center my-3">
          {t("authors")}
        </h1>
        {authInfo.map((auth) => (
          <AuthItem key={auth.id} auth={auth} />
        ))}
      </motion.div>
    </Container>
  );
}

import { Route, Routes } from "react-router-dom";
import {
  ABOUT_APP_PAGE,
  AUTHORS_PAGE,
  CONTENT_PAGE,
  HOME_PAGE,
  NOT_FOUND_PAGE,
} from "./const";
import { AboutApp, AuthPage, Content, HomePage, NotFoundPage } from "../pages";

function router() {
  return (
    <Routes>
      <Route path={HOME_PAGE} element={<HomePage />} />
      <Route path={CONTENT_PAGE} element={<Content />} />
      <Route path={AUTHORS_PAGE} element={<AuthPage />} />
      <Route path={ABOUT_APP_PAGE} element={<AboutApp />} />
      <Route path={NOT_FOUND_PAGE} element={<NotFoundPage />} />
    </Routes>
  );
}

export default router;

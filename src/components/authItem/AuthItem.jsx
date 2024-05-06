import React from "react";
import { useTranslation } from "react-i18next";

export default function AuthItem({ auth }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col sm:flex-row rounded-xl shadow-md my-5">
      <img
        className="max-w-[250px] rounded-xl p-2"
        src={auth.authImage}
        alt=""
      />
      <div className="px-5 py-2">
        <p className="text-[28px] font-bold">{t(auth.fullName)}</p>
        <p className="text-[20px]">{t(auth.position)}</p>
        <p className="text-[20px]">{t(auth.department)}</p>
        <p className="text-[20px]">{t(auth.university)}</p>
      </div>
    </div>
  );
}

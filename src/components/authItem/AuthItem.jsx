import React from "react";

export default function AuthItem({ auth }) {
  console.log("auth =>", auth);
  return (
    <div className="flex border rounded-xl shadow-md my-5">
      <img className="w-[200px] rounded-xl p-2" src={auth.authImage} alt="" />
      <div className="px-5 py-2">
        <p className="text-[28px] font-bold">{auth.fullName}</p>
        <p className="text-[20px]">{auth.position}</p>
        <p className="text-[20px]">{auth.department}</p>
        <p className="text-[20px]">{auth.university}</p>
      </div>
    </div>
  );
}

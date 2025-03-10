"use client";

import { logout } from "@/actions/logout";
import { useCurrentuser } from "@/hooks/use-current-user";
import React from "react";

const Settings = () => {
  const user = useCurrentuser();
  const onClick = () => {
    logout();
  };
  return (
    <div className="bg-white p-10 rounded-xl">
      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </div>
  );
};

export default Settings;

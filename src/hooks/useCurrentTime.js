import { useState } from "react";

const useCurrentTime = () => {
  const [localTime, setLocalTime] = useState(null);

  setInterval(() => {
    const currentDate = new Date().toLocaleTimeString("en", {
      hour12: false,
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Manila",
      timeZoneName: "short",
    });
    setLocalTime(() => currentDate);
  }, 1000);

  return { localTime };
};

export default useCurrentTime;

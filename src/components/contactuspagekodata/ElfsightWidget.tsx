"use client";

import { useEffect } from "react";

const ElfsightWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.setAttribute("data-elfsight-app-lazy", "");
    document.body.appendChild(script);
  }, []);

  return (
    <div className="elfsight-app-974cd607-0ba6-4954-b637-7ebe2aecce3a" data-elfsight-app-lazy></div>
  );
};

export default ElfsightWidget;

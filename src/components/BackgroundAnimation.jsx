import React from "react";

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-50/50">
      {/* Static Blob 1 - Blue */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[60px] mix-blend-multiply opacity-50"
        style={{ transform: "translateZ(0)" }}
      />

      {/* Static Blob 2 - Purple */}
      <div
        className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[80px] mix-blend-multiply opacity-50"
        style={{ transform: "translateZ(0)" }}
      />

      {/* Static Blob 3 - Light Indigo (Bottom) */}
      <div
        className="absolute bottom-0 left-[20%] w-[700px] h-[700px] bg-indigo-200/15 rounded-full blur-[80px] mix-blend-multiply opacity-40"
        style={{ transform: "translateZ(0)" }}
      />
    </div>
  );
};

export default BackgroundAnimation;

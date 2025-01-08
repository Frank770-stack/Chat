import React from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-r from-primary to-secondary text-primary-content p-12 relative">
      {/* Decorative Boxes */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-lg transform rotate-12"></div>
      <div className="absolute bottom-12 right-16 w-24 h-24 bg-white/20 rounded-lg"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-full"></div>

      {/* Main Content */}
      <div className="text-center space-y-6 z-10">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-lg max-w-md">{subtitle}</p>
      </div>

      {/* Additional Decorative Box */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-xl transform -translate-x-6 translate-y-6"></div>
    </div>
  );
};

export default AuthImagePattern;

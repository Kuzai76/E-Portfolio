import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight pr-10">
      <a href="mailto:esaie.moos1@umail.uom.ac.mu">
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen ">
          Esaie Moos
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;

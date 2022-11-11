import React from "react";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <Image src="/icons/logo.png" alt="hill" width={20} height={20}/>  
  );
};

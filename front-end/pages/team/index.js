import React from "react";
import Image from "next/image";
import Member from "../../assets/images/member.jpg";

const Index = () => {
  return (
    <>
      <Image src={Member} width="800px" height="500px" />
    </>
  );
};

export default Index;

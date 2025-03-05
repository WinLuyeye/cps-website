// /solutions/findPark/page.jsx

import React from "react";
import Image from "next/image";

//import components
import FindParkComponent from "../../../components/solutions/FindPark";
import HeroFindPark from "../../../components/solutions/HeroFindPark";

const FindPark = () => {
  return (
    <>
      <HeroFindPark/>
      <FindParkComponent/>
    </>
  );
};

export default FindPark;

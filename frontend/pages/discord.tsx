import type { NextPage } from "next";
import React, { useEffect } from "react";
import Router from "next/router";

const Discord: NextPage = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/discord")
      Router.push("https://discord.com/invite/WgEtVqyNFZ");
  });

  return (
    <>
      <a href="https://discord.com/invite/WgEtVqyNFZ" className="centered">
        Press me if you didnt get redirected
      </a>
    </>
  );
};

export default Discord;

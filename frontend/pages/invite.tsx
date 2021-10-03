//

import type { NextPage } from "next";
import React, { useEffect } from "react";
import Router from "next/router";

const Invite: NextPage = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == "/")
      Router.push(
        "https://discord.com/oauth2/authorize?client_id=868821693571932191&permissions=261955644663&scope=bot+applications.commands"
      );
  });

  return (
    <>
      <a href="https://discord.com/oauth2/authorize?client_id=868821693571932191&permissions=261955644663&scope=bot+applications.commands">
        Press me if you didnt get redirected
      </a>
    </>
  );
};

export default Invite;

"use client";

import { useEffect } from "react";

export default function ConsoleLog() {
  useEffect(() => {
    const message = `
---------- Ayo Mau Ngapain di Console? ----------
/////////////////////////////////////////////////
//                                             //
//     Developed by KAMAPRA x Manajerku        //
//           www.kamapra.my.id                 //
//          www.manajerku.store                //
//                                             //
/////////////////////////////////////////////////
-------- NO NASTY STUFF, JUST CREATIVITY --------`;

    console.log(
      `%c${message}`,
      `
    color: #ffffff; 
    background: #000000; 
    font-family: monospace; 
    font-weight: bold; 
    border: 1px solid #18432a; 
    line-height: 1.5;
  `,
    );
  }, []);

  return null;
}

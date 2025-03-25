import * as React from "react";
import DateTime from "./DateTime.jsx";

function Header()
{
    return (
        <div className="header font-bold text-center">
        <h1 className="text-4xl pt-2">
          Titan Lifeline
        </h1>
        <h1 className="text-2xl pb-2">
          <DateTime/>
        </h1>
      </div>
    )
}

export default Header
import * as React from "react";
import DateTime from "./DateTime.jsx";

function Header()
{
    return (
        <div className="header font-bold text-center pt-4">
        <a href="/" className="text-4xl hover:text-gray-600">
          Titan Lifeline
        </a>
        <h1 className="text-2xl pb-2">
          <DateTime/>
        </h1>
      </div>
    )
}

export default Header
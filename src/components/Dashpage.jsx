import { useState } from "react";
import "../App.css";
import Dashleft from "./Dashleft";
import Dashright from "./Dashright";

function Dash() {
  return (
    <>
      <div className="m-4 grid gap-4 bg-green-700 sm:grid-cols-12 h-[90vh] overflow-hidden my-8">
        {/* Sidebar: Appears as a floating panel on mobile */}

        {/* Main content */}
        <div className=" bg-green-700 sm:col-span-12 block overflow-y-auto w-full">
          <Dashright />
        </div>
      </div>
    </>
  );
}

export default Dash;

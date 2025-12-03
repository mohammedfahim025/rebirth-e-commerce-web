import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="bg-[#0F0F0F]" >
      <RouterProvider router={router}/>
    </div>
    
    
  </StrictMode>
);

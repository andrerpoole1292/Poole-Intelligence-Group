import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

// Import CSS directly so it's bundled in the JS — avoids head-function
// re-render issues that occur when CSS is loaded via a <link> tag
// injected by a dynamically-created head() function.
import "./styles/app.css";

const router = getRouter();

const rootElement = document.getElementById("root")!;
if (!rootElement.hasChildNodes()) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
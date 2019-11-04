import { registerApplication, start } from "single-spa";

registerApplication(
  // Name of our single-spa application
  "app1",
  // loadingFunction
  () => import("./app1/src/index"),
  // activityFunction
  location =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/app1")
);

start();

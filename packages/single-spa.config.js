import { registerApplication, start } from "single-spa";

registerApplication(
  "app1",
  () => import("./app1/src/index.tsx"),
  location =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/app1")
);
registerApplication(
  "app2",
  () => import("./app2/src/index.tsx"),
  // activityFunction
  location => location.pathname.startsWith("/app2")
);

registerApplication(
  "navBar",
  () => import("./navBar/navBar.app.js"), // .then(module => module.navBar),
  () => true
);

start();

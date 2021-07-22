// Import modules...
import React from "react";
import { render } from "react-dom";
import Axios from "axios";
import { App } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";

const el = document.getElementById("app");

// Set X-Requested-With on every request
Axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

render(
  <App
    initialPage={JSON.parse(el.dataset.page)}
    // eslint-disable-next-line global-require
    resolveComponent={(name) => require(`./Pages/${name}`).default}
  />,
  el
);

InertiaProgress.init({ color: "#4B5563" });

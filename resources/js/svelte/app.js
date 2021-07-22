import { InertiaApp } from "@inertiajs/inertia-svelte";
import { InertiaProgress } from "@inertiajs/progress";
import Axios from "axios";

const app = document.getElementById("app");

// Set X-Requested-With on every request
Axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

InertiaApp({
  target: app,
  props: {
    initialPage: JSON.parse(app.dataset.page),
    resolveComponent: (name) => import(`./Pages/${name}.svelte`),
  },
});

InertiaProgress.init({ color: "#4B5563" });

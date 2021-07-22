import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import Axios from "axios";
import { route } from "../shared/utils";

const el = document.getElementById("app");

// Set X-Requested-With on every request
Axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

createInertiaApp({
  // eslint-disable-next-line global-require
  resolve: (name) => require(`./Pages/${name}.vue`),
  // eslint-disable-next-line no-shadow
  setup({ el, app, props, plugin }) {
    createApp({ render: () => h(app, props) })
      .mixin({ methods: { route } })
      .use(plugin)
      .mount(el);
  },
});

InertiaProgress.init({ color: "#4B5563" });

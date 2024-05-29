import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { G as GridBackgroundWrapper } from "../../../chunks/GridBackgroundWrapper.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(GridBackgroundWrapper, "GridBackgroundWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<section class="content-md" data-svelte-h="svelte-6o431s"><h1>Meet The Team</h1> <p class="text-subtitle">We here at SalesSource are the go-to strategic Revenue Operations and Inside Sales
            advisory firm. we focus on helping B2B technology companies establish a scalable sales
            organization through the combination of sales process development, technology
            integration and best practice training.</p> </section>`;
    }
  })}`;
});
export {
  Page as default
};

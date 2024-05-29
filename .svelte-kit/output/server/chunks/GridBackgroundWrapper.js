import { c as create_ssr_component } from "./ssr.js";
const css = {
  code: '.hero-wrapper.svelte-ymvs22{position:relative;display:flex;width:100%;flex-direction:column;background-image:url("$lib/assets/grid-background.svg");background-position:center top;background-repeat:no-repeat\n}',
  map: '{"version":3,"file":"GridBackgroundWrapper.svelte","sources":["GridBackgroundWrapper.svelte"],"sourcesContent":["<script lang=\\"ts\\"><\/script>\\n\\n<div class=\\"hero-wrapper\\">\\n    <slot />\\n</div>\\n\\n<style lang=\\"postcss\\">\\n    .hero-wrapper {\\n        position: relative;\\n        display: flex;\\n        width: 100%;\\n        flex-direction: column;\\n        background-image: url(\\"$lib/assets/grid-background.svg\\");\\n        background-position: center top;\\n        background-repeat: no-repeat\\n}\\n</style>\\n"],"names":[],"mappings":"AAOI,2BAAc,CACV,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,cAAc,CAAE,MAAM,CACtB,gBAAgB,CAAE,sCAAsC,CACxD,mBAAmB,CAAE,MAAM,CAAC,GAAG,CAC/B,iBAAiB,CAAE,SAAS;AACpC"}'
};
const GridBackgroundWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="hero-wrapper svelte-ymvs22">${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  GridBackgroundWrapper as G
};

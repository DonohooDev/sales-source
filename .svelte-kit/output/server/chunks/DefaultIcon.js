import { c as create_ssr_component, b as add_attribute, e as escape } from "./ssr.js";
const ButtonLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { btnText } = $$props;
  let { icon = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.btnText === void 0 && $$bindings.btnText && btnText !== void 0)
    $$bindings.btnText(btnText);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  return `<a class="block px-6 py-3 text-base text-center text-txt-white bg-secondary hover:bg-bg-primary hover:text-secondary border border-secondary border-solid rounded-md"${add_attribute("href", href, 0)}>${icon ? `<span class="mr-4"><i${add_attribute("class", icon, 0)}></i></span>` : ``} ${escape(btnText)}</a>`;
});
const DefaultIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classNames = "" } = $$props;
  let { white = false } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  if ($$props.white === void 0 && $$bindings.white && white !== void 0)
    $$bindings.white(white);
  return `<i style="${"color: #" + escape(white ? "f9f9f9" : "202046", true)}"${add_attribute("class", classNames, 0)}></i>`;
});
export {
  ButtonLink as B,
  DefaultIcon as D
};

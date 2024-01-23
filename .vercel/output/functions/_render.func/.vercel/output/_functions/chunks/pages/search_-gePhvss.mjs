import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_Deh159hG.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  function search(url) {
    console.log(url);
    const query2 = new URLSearchParams(url);
    console.log(query2 + "query2");
    const palabras = query2.get("q");
    console.log(palabras);
    return palabras;
  }
  const busqueda = search(Astro2.url.search);
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto"> <section class="px-10 xl:px-60 mt-12 space-y-8"> <div class="flex items-center gap-3"> <nav class="flex mt-10" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-3"> <li class="inline-flex items-center text-secondary hover:text-gray-400 md:ml-2 dark:text-secondary dark:hover:text-gray-400"> <a href="/" class="inline-flex items-center text-sm font-medium">
Home
</a> </li> <li> <div class="flex items-center"> <a href="#" class="ml-1 text-sm font-medium text-secondary hover:text-gray-400 md:ml-2 dark:text-secondary dark:hover:text-gray-400">Resultado de busqueda: ${busqueda}</a> </div> </li> </ol> </nav> </div> </section> </div>`;
}, "/Users/brayangatica/despliegueaprod/prueba3/src/pages/search.astro", void 0);

const $$file = "/Users/brayangatica/despliegueaprod/prueba3/src/pages/search.astro";
const $$url = "/search";

export { $$Search as default, $$file as file, $$url as url };

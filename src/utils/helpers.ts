export const randomString = () => Math.random().toString(36).slice(2);

// randomString() // gi1qtdego0b

export const escapeStr = (str: string | undefined): string =>
  (str || "").replace(
    /[&<>"']/g,
    (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[m] as string,
  );

escapeStr('<div class="medium">Hi Medium.</div>');
// &lt;div class=&quot;medium&quot;&gt;Hi Medium.&lt;/div&gt

export const uppercaseWords = (str: string): string =>
  str.replace(/^(.)|\s+(.)/g, (c: string): string => c.toUpperCase());

// uppercaseWords('hello world'); // 'Hello World'

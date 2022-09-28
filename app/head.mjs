export default function Head(req = {}) {
	const { path } = req;
	const title = `tbeseda "FWA + Enhance" — ${path}`;
	return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
      <link rel="stylesheet" href="/_static/bundles/reveal-style.css">
      <link rel="stylesheet" href="/_static/bundles/reveal-theme.css">
      <link rel="stylesheet" href="/_static/bundles/reveal-highlight-theme.css">
      <link rel="icon" href="/_static/favicon.svg">
      <style>
        :root {
          --primary: #07051e;
          --light: #fff;
          --dark: #161439;
          --grey1: #f9f9fb;
          --grey2: #e5e5e5;
          --accent-light: #e7928a;
          --accent-dark: #362ee8;
          --my-font-stack: system-ui, -apple-system, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

          --r-background-color: var(--dark);
          --r-main-font: Lato;
          --r-main-font-size: 30px;
          --r-main-color: var(--light);
          --r-block-margin: 1rem;
          --r-heading-margin: 0 0 1rem 0;
          --r-heading-font: Lato;
          --r-heading-color: var(--light);
          --r-heading-line-height: 1.2;
          --r-heading-letter-spacing: normal;
          --r-heading-text-transform: none;
          --r-heading-text-shadow: none;
          --r-heading-font-weight: normal;
          --r-heading1-text-shadow: none;
          --r-heading1-size: 3.77em;
          --r-heading2-size: 2.11em;
          --r-heading3-size: 1.55em;
          --r-heading4-size: 1em;
          --r-code-font: "Cascadia Code";
          --r-link-color: #51483D;
          --r-link-color-dark: #25211c;
          --r-link-color-hover: #8b7c69;
          --r-selection-background-color: #26351C;
          --r-selection-color: #fff;
        }
        .reveal section.fancy {
          --r-main-font: var(--my-font-stack);
          --r-heading-font: var(--my-font-stack);
          --r-main-color: var(--dark);
          --r-heading-color: var(--dark);

          color: var(--dark);
          font-family: var(--my-font-stack)
        }
      </style>
    </head>
  `;
}

export default function MyPresentation({ html }) {
	return html`
    <style>
      .reveal small {
        vertical-align: baseline;
        font-size: 0.5em;
      }
      .reveal code {
        padding: 1rem 1.5rem;
      }
      .left {
        text-align: left;
      }
      .my-grid {
        display: flex;
        flex-flow: row wrap;
        gap: 1.5rem;
        justify-content: space-around;
        align-items: center;
      }
    </style>

    <div class="reveal">
      <div class="slides">
        <slot></slot>
      </div>
    </div>

    <script type="module">
      import Reveal from '/_static/bundles/reveal.js';
      import Markdown from '/_static/bundles/reveal-markdown.js';
      import RevealHighlight from '/_static/bundles/reveal-highlight.js'

      const deck = new Reveal({
        plugins: [ Markdown, RevealHighlight ]
      });
      deck.initialize({
        minScale: 0.5,
        maxScale: 10,
        //slideNumber: true,
        hash: true,
      });
    </script>
  `;
}

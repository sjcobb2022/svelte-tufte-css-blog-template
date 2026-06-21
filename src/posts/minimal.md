---
title: Minimal Demo
date: "2026-6-20"
---

# Minimal Demo

<p class="subtitle">A minimal showcase of Tufte CSS features</p>

<section>

## Sections and Headings

Use `section` tags to organize content. Use `h2` for section headings and `h3`
for subsections.

### Subsection Example

<p>
<span class="newthought">New thoughts</span> begin sections with small caps and no indent. This technique replaces excessive heading levels.
</p>

</section>

<section>

## Sidenotes and Margin Notes

<p>
Sidenotes are numbered references in the margin<label for="sn-example" class="margin-toggle sidenote-number"></label><input type="checkbox" id="sn-example" class="margin-toggle"/><span class="sidenote">This is a sidenote with a number.</span>. They keep supporting information close to the text without interrupting the flow.
</p>

<p>
Margin notes are unnumbered <label for="mn-example" class="margin-toggle">&#8853;</label><input type="checkbox" id="mn-example" class="margin-toggle"/><span class="marginnote">This is a margin note without a number.</span>. Use the &#8853; symbol as a toggle on small screens.
</p>

</section>

<section>

## Text Styles

<p class="sans">This paragraph uses the sans-serif Gill Sans font via the <code>sans</code> class.</p>

Links are [underlined but not blue](#), matching body text color. Inline `code`
uses monospace.

</section>

<section>

## Blockquotes

> This is a blockquote styled for Tufte CSS.
>
> <footer>Attribution goes in a footer element</footer>

</section>

<section>

## Epigraphs

<div class="epigraph">

> The purpose of visualization is insight, not pictures.
>
> <footer>Ben Shneiderman</footer>

</div>

Epigraphs introduce sections with styled quotes.

</section>

<section>

## Figures

Standard figures are constrained to the main column:

<figure>
<label for="mn-figure" class="margin-toggle">&#8853;</label><input type="checkbox" id="mn-figure" class="margin-toggle"/><span class="marginnote">Caption in the margin.</span><img src="https://edwardtufte.github.io/tufte-css/img/exports-imports.png" alt="Example figure" />
</figure>

<p>
<label for="mn-margin-figure" class="margin-toggle">&#8853;</label><input type="checkbox" id="mn-margin-figure" class="margin-toggle"/><span class="marginnote"><img src="https://edwardtufte.github.io/tufte-css/img/rhino.png" alt="Margin figure"/>Margin figures place images in the margin with captions.</span>
Margin figures are created by wrapping an image in a margin note inside a paragraph tag.
</p>

Full-width figures span the entire page:

<figure class="fullwidth">
<img src="https://edwardtufte.github.io/tufte-css/img/napoleons-march.png" alt="Full-width figure" />
</figure>

</section>

<section>

## Iframes

<figure class="iframe-wrapper">
  <iframe
    title="Example video"
    width="853"
    height="480"
    src="https://www.youtube.com/embed/YslQ2625TR4"
    frameborder="0"
    allowfullscreen
  ></iframe>
</figure>

</section>

<section>

## Code

```javascript
// Code blocks use monospace fonts and prismjs
function example(x) {
  return x * 2;
}
```

</section>

<section>

## LaTeX

Inline math: $E = mc^2$

Block equation:

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

</section>

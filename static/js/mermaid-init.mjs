// Renders ```mermaid code blocks (see layouts/_default/_markup/render-codeblock-mermaid.html).
// Loaded as an ES module, so the browser runs it once per page however many diagrams there are.
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.esm.min.mjs";

const style = document.createElement("style");
style.textContent =
  ".mermaid-diagram { margin: 16px 0; cursor: zoom-in; }" +
  ".mermaid-diagram pre.mermaid { background: none; border: 0; padding: 0; margin: 0; overflow: visible; }";
document.head.appendChild(style);

mermaid.initialize({ startOnLoad: false, securityLevel: "strict" });
await mermaid.run({ querySelector: ".mermaid-diagram pre.mermaid" });

// Click (or Enter) on a diagram opens it full screen; click or Escape closes it.
function openDiagram(container) {
  const svg = container.querySelector("svg");
  if (!svg) return;
  const natural = svg.viewBox.baseVal.width || svg.getBoundingClientRect().width;
  const width = Math.max(natural, Math.min(window.innerWidth - 48, natural * 1.6));
  const overlay = document.createElement("div");
  overlay.style.cssText =
    "position:fixed;inset:0;z-index:10000;overflow:auto;padding:24px;background:#fff;cursor:zoom-out";
  const clone = svg.cloneNode(true);
  clone.removeAttribute("style");
  clone.removeAttribute("height");
  clone.setAttribute("width", width);
  clone.style.display = "block";
  clone.style.margin = "0 auto";
  overlay.appendChild(clone);
  const onKey = (e) => { if (e.key === "Escape") close(); };
  const close = () => {
    overlay.remove();
    document.removeEventListener("keydown", onKey);
    container.focus();
  };
  overlay.addEventListener("click", close);
  document.addEventListener("keydown", onKey);
  document.body.appendChild(overlay);
}

document.querySelectorAll(".mermaid-diagram").forEach((el) => {
  el.addEventListener("click", () => openDiagram(el));
  el.addEventListener("keydown", (e) => { if (e.key === "Enter") openDiagram(el); });
});

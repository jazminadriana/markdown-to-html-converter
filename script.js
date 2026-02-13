function convertMarkdown() {
  const input = document.getElementById("markdown-input").value;
  let html = input;

  // Headings
  html = html.replace(/^\s*###\s+(.*)$/gm, "<h3>$1</h3>");
  html = html.replace(/^\s*##\s+(.*)$/gm, "<h2>$1</h2>");
  html = html.replace(/^\s*#\s+(.*)$/gm, "<h1>$1</h1>");

  // Blockquotes
  html = html.replace(/^\s*>\s+(.*)$/gm, "<blockquote>$1</blockquote>");

  // Images
  html = html.replace(
    /!\[(.*?)\]\((.*?)\)/g,
    '<img alt="$1" src="$2">'
  );

  // Links
  html = html.replace(
    /\[(.*?)\]\((.*?)\)/g,
    '<a href="$2">$1</a>'
  );

  // Bold (** or __)
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.*?)__/g, "<strong>$1</strong>");

  // Italic (* or _)
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  html = html.replace(/_(.*?)_/g, "<em>$1</em>");

  return html;
}

// Live update on input
document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("markdown-input");
  const htmlOutput = document.getElementById("html-output");
  const preview = document.getElementById("preview");

  textarea.addEventListener("input", () => {
    const converted = convertMarkdown();

    // Raw HTML display
    htmlOutput.textContent = converted;

    // Rendered preview
    preview.innerHTML = converted;
  });
});
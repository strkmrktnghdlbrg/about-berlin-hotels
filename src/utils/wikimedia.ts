/**
 * Wikimedia Commons image URL helper.
 * Wandelt eine Original- oder Thumb-URL in eine passende Größe um.
 *
 * Beispiele:
 *   wikimediaThumb("https://upload.wikimedia.org/wikipedia/commons/a/a6/Foo.jpg", 1280)
 *     → "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Foo.jpg/1280px-Foo.jpg"
 *   wikimediaThumb("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Foo.jpg/330px-Foo.jpg", 1280)
 *     → "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Foo.jpg/1280px-Foo.jpg"
 */
export function wikimediaThumb(url: string, width: number): string {
  if (!url || !url.includes("upload.wikimedia.org")) return url;
  const thumbMatch = url.match(/^(.+\/commons\/thumb\/[^/]+\/[^/]+\/[^/]+)\/\d+px-([^/]+)$/);
  if (thumbMatch) {
    const [, base, file] = thumbMatch;
    return `${base}/${width}px-${file}`;
  }
  // direct file URL — convert to thumb URL
  const directMatch = url.match(/^(.+\/commons)\/([0-9a-f])\/([0-9a-f]{2})\/(.+)$/);
  if (directMatch) {
    const [, base, h1, h2, file] = directMatch;
    // SVG cannot be resized via thumb URL the same way — keep original
    if (file.toLowerCase().endsWith(".svg")) return url;
    return `${base}/thumb/${h1}/${h2}/${file}/${width}px-${file.endsWith(".svg") ? file + ".png" : file}`;
  }
  return url;
}

/** Strip HTML tags from author strings that came in as HTML. */
export function plainAuthor(s: string): string {
  if (!s) return "";
  return s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

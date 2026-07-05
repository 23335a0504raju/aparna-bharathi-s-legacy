// Image preloading helpers used by the intro loader.
// A src that errors still counts as "done" so the loader can never hang on a bad file.

const warmed = new Set<string>();

export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve();
      return;
    }
    const img = new Image();
    const done = () => {
      warmed.add(src);
      resolve();
    };
    img.onload = done;
    img.onerror = done;
    img.src = src;
    if (img.complete) done();
  });
}

/**
 * Preload a list of images, reporting progress as each one finishes.
 * Resolves when every image has either loaded or errored.
 */
export function preloadImages(
  srcs: string[],
  onProgress?: (loaded: number, total: number) => void
): Promise<void> {
  const total = srcs.length;
  if (total === 0) return Promise.resolve();
  let loaded = 0;
  return Promise.all(
    srcs.map((src) =>
      preloadImage(src).then(() => {
        loaded += 1;
        onProgress?.(loaded, total);
      })
    )
  ).then(() => undefined);
}

/**
 * Fire-and-forget warm-up for below-the-fold / next-page images.
 * Loads a few at a time so it doesn't fight the images on screen for bandwidth.
 */
export function warmImages(srcs: string[], concurrency = 3): void {
  if (typeof window === "undefined") return;
  const queue = srcs.filter((s) => !warmed.has(s));
  const next = () => {
    const src = queue.shift();
    if (!src) return;
    preloadImage(src).then(next);
  };
  for (let i = 0; i < concurrency; i++) next();
}

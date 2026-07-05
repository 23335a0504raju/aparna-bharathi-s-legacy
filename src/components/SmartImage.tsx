import { useCallback, useState, type ImgHTMLAttributes } from "react";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  /** Aspect ratio to hold while loading, for images without a sized parent (e.g. masonry). */
  loadingAspect?: string;
  /** Skeleton shimmer tone — "dark" for ink sections, "light" for cream sections. */
  skeletonTone?: "dark" | "light";
}

type Status = "loading" | "loaded" | "error";

/**
 * Renders an <img> with a shimmer skeleton while it loads and a soft
 * fade-in once it settles. If the file is missing/errors, shows a warm
 * cream/ink placeholder with the filename so it can be dropped in later.
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  loadingAspect,
  skeletonTone = "dark",
  style,
  ...rest
}: SmartImageProps) {
  const [status, setStatus] = useState<Status>("loading");
  const filename = src.split("/").pop() ?? src;

  // Catch images that finished loading before hydration attached onLoad
  // (cached files, SSR-rendered markup).
  const imgRef = useCallback((el: HTMLImageElement | null) => {
    if (el && el.complete && el.naturalWidth > 0) {
      setStatus((s) => (s === "loading" ? "loaded" : s));
    }
  }, []);

  if (status === "error") {
    return (
      <div
        className={`relative flex items-center justify-center overflow-hidden ${wrapperClassName} ${className}`}
        style={{
          background:
            "repeating-linear-gradient(135deg, #2a231c 0 12px, #221c16 12px 24px)",
          color: "#F4EDE1",
        }}
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <span
            className="text-[0.6rem] font-medium uppercase tracking-[0.35em]"
            style={{ color: "#C25E3A" }}
          >
            Image
          </span>
          <span className="font-mono text-xs opacity-80">{filename}</span>
          <span className="mt-1 max-w-[220px] text-xs italic opacity-60">
            {alt}
          </span>
        </div>
      </div>
    );
  }

  const isLoading = status === "loading";
  const stateClass = isLoading
    ? `img-skeleton ${skeletonTone === "light" ? "img-skeleton-light" : ""}`
    : "img-loaded";

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onLoad={() => setStatus("loaded")}
      onError={() => setStatus("error")}
      loading="lazy"
      className={`${wrapperClassName} ${className} ${stateClass}`}
      style={{
        ...(isLoading && loadingAspect ? { aspectRatio: loadingAspect } : null),
        ...style,
      }}
      {...rest}
    />
  );
}

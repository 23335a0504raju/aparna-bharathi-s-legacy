import { useState, type ImgHTMLAttributes } from "react";

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

/**
 * Renders an <img>. If the file is missing/errors, shows a warm
 * cream/ink placeholder with the filename so it can be dropped in later.
 */
export default function SmartImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  ...rest
}: SmartImageProps) {
  const [errored, setErrored] = useState(false);
  const filename = src.split("/").pop() ?? src;

  if (errored) {
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

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      loading="lazy"
      className={`${wrapperClassName} ${className}`}
      {...rest}
    />
  );
}